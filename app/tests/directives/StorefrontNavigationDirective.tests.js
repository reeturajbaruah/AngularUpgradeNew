(function () {
    'use strict';

    describe('directive: storefront-navigation', function () {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module('HCTRAModule'));

        var scope, el, dScope, compile, rootScope;

        var modalService, storefrontService, Promise, $state, stateNames;
        var onProceed, onCancel, onPrevious;
        
        function returnResolved(value) {
            return new Promise(function(resolve) { return resolve(value); });
        }

        function flush(promise) {
            rootScope.$apply();
            return promise;
        }

        beforeEach(angular.mock.module(function ($provide) {

            storefrontService = jasmine.createSpyObj("storefrontService", ["haltRedirectsUntil", "completeWorkItem", "isEnabled", "reset", "skip", "currentWorkItem"]);
            modalService = jasmine.createSpyObj("modalService", ["showGotoCsr", "skipTaskMessage"]);
            $state = jasmine.createSpyObj("$state", ["go"]);

            $provide.value("StorefrontModalService", modalService);
            $provide.value("StorefrontService", storefrontService);
            $provide.value("$state", $state);
        }));

        beforeEach(angular.mock.inject(function ($injector, $compile, $templateCache, $rootScope) {
            try {
                compile = $compile;
                rootScope = $rootScope;
                var win = $injector.get('$window');
                Promise = win.Promise;
                stateNames = $injector.get('stateNames');

                storefrontService.haltRedirectsUntil.and.callFake(function(callback) {
                    return callback();
                });

                var templatePath = "app/directives/storefront/storefrontNavigationTemplate.html";
                $templateCache.put("/" + templatePath, $templateCache.get(templatePath));
            } catch (e) {
                fail(e);
            }
        }));

        function buildDirective(formCompletion, csrResponse, preserveWorkItem) {
            scope = rootScope.$new();
            onProceed = jasmine.createSpy("onProceed", function () { });
            onCancel = jasmine.createSpy("onCancel", function () { });
            onPrevious = jasmine.createSpy("onPrevious", function () { });

            el = angular.element("<div storefront-navigation on-proceed='onProceed()' preserve-work-item=preserveWorkItem on-cancel='onCancel()' on-previous='onPrevious()'>TEST</div>");
                
            if (formCompletion) {
                el.attr('is-form-completion', 'true');
            }
            if (csrResponse) {
                el.attr('see-csr-response', csrResponse);
            }
            
            scope.onProceed = onProceed;
            scope.onCancel = onCancel;
            scope.onPrevious = onPrevious;
            scope.preserveWorkItem = preserveWorkItem;
              
            var newElm = compile(el)(scope);
            scope.$digest();
            dScope = newElm.children().scope().$parent;
        }

        describe('basic navigation', function () {

            describe("storefront not enabled", function() {
                beforeEach(function () {
                    storefrontService.isEnabled.and.returnValue(false);
                    buildDirective();
                });

                it('should not define any scope level actions', function () {
                    expect(dScope.seeCsr).not.toBeDefined();
                    expect(dScope.cancelAction).not.toBeDefined();
                    expect(dScope.continueAction).not.toBeDefined();
                    expect(dScope.gotoPrevious).not.toBeDefined();
                });
            });

            describe("storefront enabled, fullsitemode", function() {
                beforeEach(function () {
                    storefrontService.isEnabled.and.returnValue(true);
                    storefrontService.fullSiteMode = true;
                    buildDirective();
                });

                it('should not define any scope level actions', function () {
                    expect(dScope.seeCsr).not.toBeDefined();
                    expect(dScope.cancelAction).not.toBeDefined();
                    expect(dScope.continueAction).not.toBeDefined();
                    expect(dScope.gotoPrevious).not.toBeDefined();
                });
            });

            describe("storefront enabled and not fullsitemode", function () {

                beforeEach(function() {
                    storefrontService.isEnabled.and.returnValue(true);
                    storefrontService.fullSiteMode = false;

                    storefrontService.completeWorkItem.and.returnValue(returnResolved());
                    storefrontService.skip.and.returnValue(returnResolved());
                    buildDirective();
                });

                it('can proceed', function () {
                    //arrange
                    //act
                    dScope.continueAction && dScope.continueAction();
                    //assert
                    expect(dScope.continueAction).toBeDefined();
                    expect(onProceed).toHaveBeenCalled();
                    expect(storefrontService.completeWorkItem).not.toHaveBeenCalled();
                });

                it('can go previous', function () {
                    //arrange
                    //act
                    dScope.gotoPrevious && dScope.gotoPrevious();
                    //assert
                    expect(dScope.gotoPrevious).toBeDefined();
                    expect(onPrevious).toHaveBeenCalled();
                    expect(storefrontService.completeWorkItem).not.toHaveBeenCalled();
                    expect(storefrontService.skip).not.toHaveBeenCalled();
                });


                it('can cancel', function () {
                    //arrange
                    //act
                    var obj = dScope.cancelAction && dScope.cancelAction();
                    //assert
                    expect(dScope.cancelAction).toBeDefined();
                    expect(obj).toBeDefined();
                    obj && obj
                        .then(function () {
                            expect(onCancel).toHaveBeenCalled();
                            expect(storefrontService.skip).toHaveBeenCalled();
                        })
                        .catch(function (e) {
                            fail('should have been rejected: ' + e);
                        });
                });


                it('can cancel while preserving work item', function () {
                    //arrange
                    buildDirective(null, null, true);
                    //act
                    dScope.cancelAction && dScope.cancelAction();
                    //assert
                    expect(dScope.cancelAction).toBeDefined();

                    expect(onCancel).toHaveBeenCalled();
                    expect(storefrontService.completeWorkItem).not.toHaveBeenCalled();
                    expect(storefrontService.skip).not.toHaveBeenCalled();
                });

            });

            describe("storefront enabled and not fullsitemode, form completion", function () {

                beforeEach(function () {
                    storefrontService.isEnabled.and.returnValue(true);
                    storefrontService.fullSiteMode = false;

                    storefrontService.completeWorkItem.and.returnValue(returnResolved());
                    storefrontService.skip.and.returnValue(returnResolved());
                    buildDirective(true);
                });

                it('can continue', function () {
                    //arrange
                    //act
                    var promise = dScope.continueAction && dScope.continueAction();
                    //assert
                    expect(dScope.continueAction).toBeDefined();
                    expect(promise).toBeDefined();
                    flush(promise)
                        .then(function() {
                            expect(onProceed).toHaveBeenCalled();
                            expect(storefrontService.completeWorkItem).toHaveBeenCalled();
                        })
                        .catch(function(e) {
                            fail("should not have failed " + e);
                        });
                });

            });
            
        });

        describe('csr stuff', function() {

            beforeEach(function () {
                storefrontService.isEnabled.and.returnValue(true);
                storefrontService.fullSiteMode = false;

                storefrontService.reset.and.returnValue(returnResolved());

                modalService.showGotoCsr.and.returnValue(returnResolved(true));

                buildDirective(null, "this is a test");
            });

            it('can direct to csr', function () {
                //arrange
                $state.go.and.returnValue(returnResolved());
                storefrontService.reset.and.returnValue(returnResolved());

                //act
                var promise = dScope.showLoginHelpMessage && dScope.showLoginHelpMessage();
                //assert
                expect(dScope.showLoginHelpMessage).toBeDefined();
                expect(promise).toBeDefined();
                flush(promise)
                    .then(function() {
                        expect(modalService.showGotoCsr).toHaveBeenCalled();
                        expect(storefrontService.completeWorkItem).not.toHaveBeenCalled();
                        expect($state.go).toHaveBeenCalledWith(stateNames.storefrontSurvey);
                    })
                    .catch(function(e) {
                        fail('should not have failed: ' + e);
                    });
            });
        });


    });

}());