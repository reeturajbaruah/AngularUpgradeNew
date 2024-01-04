(function () {
    'use strict';

    describe('StorefrontEventService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var eventService, $window, $interval, $location, fakeJq, fakejQueryFunction, $state, stateNames, storefrontService, modalService, $rootScope, documentLocationService, $q, $timeout, errorDisplayService, genericRepo, maintenanceService, $transitions;
       
        var environmentConfig = {
            storefrontConfigs: {
                storefrontInactivityWarning: 999999,
                storefrontInactivityReset: 999999,
                storefrontInactivityIntervalDelay: 999999
            }
        };

        function returnResolved(value) {
            return $q.resolve(value);
        }

        function returnRejected(object) {
            return $q.reject(object);
        }

        beforeEach(angular.mock.inject(function ($injector) {
            try {
                $rootScope = $injector.get('$rootScope');
                var win = $injector.get('$window');

                var promise = win["Promise"];

                $window = jasmine.createSpy("$window", win);
                $window.open["listen"] = jasmine.createSpy("openListener", function () { });
                $window.console = jasmine.createSpyObj("fakeConsole", ["log"]);
                $window["MutationObserver"] = win["MutationObserver"];
                $window.URL = win.URL;
                stateNames = $injector.get("stateNames");

                $interval = jasmine.createSpy("$interval", $injector.get('$interval'));
                $timeout = jasmine.createSpy("$timeout", function() {
                    return true;
                });

                //$q = $injector.get("$q");
                $q = jasmine.createSpyObj("$q", ["resolve", "reject", "all", "when", "defer"]);
                $q.resolve.and.callFake(function (obj) {
                    return promise.resolve(obj);
                });
                $q.reject.and.callFake(function (obj) {
                    return promise.reject(obj);
                });
                $q.all.and.callFake(function (args) {
                    return promise.all(args);
                });
                $q.when.and.callFake(function (obj) {
                    return promise.resolve(obj);
                });
                $q.defer.and.callFake(function () {
                    var deferObj = {
                        resolve: null,
                        reject: null,
                        promise: null
                    };

                    deferObj.promise = new promise(function (res, rej) {
                        deferObj.resolve = res;
                        deferObj.reject = rej;
                    });

                    return deferObj;
                });

                documentLocationService = jasmine.createSpyObj("fakeDLS", ["goToHref"]);
                documentLocationService.goToHref["listen"] = jasmine.createSpy("gotohrefListener", function () { });

                $location = jasmine.createSpyObj("fakeLocation", ["url", "absUrl"]);
                $location.absUrl.and.returnValue("http://dev.hctra.pri");

                $state = jasmine.createSpyObj("$state", ["go"]);
                $state.current = {
                    name: stateNames.storefrontHome
                };
                $state.go.and.returnValue(returnResolved());
                fakeJq = jasmine.createSpyObj("fakeJq", ["on", "off", "removeAttr", "attr", "is", "trigger"]);
                fakeJq.on.and.returnValue(fakeJq);
                fakeJq.off.and.returnValue(fakeJq);
                fakeJq.removeAttr.and.returnValue(fakeJq);

                fakejQueryFunction = jasmine.createSpy("fakejQuery", function () { return fakeJq; });
                fakejQueryFunction.and.returnValue(fakeJq);
                storefrontService = jasmine.createSpyObj("storefrontService",
                    [
                        "getCmsMediaItem", "isEnabled", "reset", "checkState", "pushLoggingInfo", "isWorkflowActive",
                        "currentWorkItem", "getWorkItemInitState", "registerEventHandlers",
                        "prefetchContent", "getCmsData", "initializing", "isCmsContent", "isInMaintenanceMode", "insertWorkItem", "skip",
                        'isQueued', 'getWorkItemById'
                    ]);

                storefrontService.isInMaintenanceMode.and.callFake(function () {
                    return returnRejected();
                });

                storefrontService.initializing.and.returnValue(returnResolved());

                storefrontService.getCmsMediaItem.and.returnValue(returnResolved());
                storefrontService.getCmsData.and.returnValue(returnResolved());

                storefrontService.isEnabled.and.returnValue(true);
                storefrontService.reset.and.returnValue(returnResolved());

                storefrontService.pushLoggingInfo.and.returnValue(returnResolved());
                storefrontService.prefetchContent.and.returnValue(returnResolved());
                storefrontService.getStorefrontLogo = function () {
                    return {
                        "ItemId": "cccab286-133d-4118-bf4b-8b57d2434edf",
                        "ImageItem": {
                            "image": "-/media/30D08C39C5334DC78B66FC37CA8E4F84.ashx",
                            "alt": "HCTRA Logo"
                        }
                    };
                };

                storefrontService.workItems = [];
                spyOn($interval, "cancel");

                modalService = jasmine.createSpyObj("storefrontModalService",
                    ["setGlobalModalSettings", "showExternalTask", "isExternalTaskModalOpen", "showInactivity", "showPdf", "showCmsContent"]);

                $transitions = jasmine.createSpyObj("$transitions", ["onStart", "onError", "onSuccess"]);

                eventService = newService();
                $rootScope.$apply();
            } catch (e) {
                fail(e);
            }
        }));

        function newService() {
            return new HCTRA.Storefront.Service.StorefrontEventService(
                fakejQueryFunction,
            $window,
            $interval,
            documentLocationService,
            $q,
            $location,
            $timeout,
            storefrontService,
                modalService,
                $state,
            stateNames,
            $rootScope,
            errorDisplayService,
            genericRepo,
            maintenanceService,
                environmentConfig,
                $transitions
                );
        }

        afterEach(function() {
            $rootScope.$apply();
        });

        it('registers all listeners', function () {
            //arrange
            var eventHandler = {};
            $window.open["listen"].and.returnValue(function () { });
            spyOn($rootScope, "$on");

            //act
            eventService.startListening(eventHandler);

            //assert
            expect($window.open["listen"]).toHaveBeenCalledWith(eventService.windowDotOpenInterceptor);
            expect($interval).toHaveBeenCalledWith(eventService.checkForUserTimeout,
                environmentConfig.storefrontConfigs.StorefrontInactivityIntervalDelay,
                0,
                false);
//            expect($rootScope.$on).toHaveBeenCalledTimes(3);
//            var args = $rootScope.$on.calls.argsFor(0);
//            expect(args[0]).toBe("$stateChangeStart");
//            expect(args[1]).toBeDefined();
//            args = $rootScope.$on.calls.argsFor(1);
//            expect(args[0]).toBe("$stateChangeSuccess");
//            expect(args[1]).toBeDefined();

            expect(fakeJq.on).toHaveBeenCalledWith(eventService.constructor.userInactivityEvents, eventService.updateActivity);
            //expect(fakeJq.on).toHaveBeenCalled(c.constructor.eventName("click"), "a[href]", c.nonUiRouterLinkClickIntercepter);
            expect(fakeJq.on).toHaveBeenCalledWith(eventService.constructor.eventName("scroll"), eventService.disableWindowScroll);
        });

        it('cancels all events when when stop listening', function () {
            //ararnge
            var eventHandler = {};

            var token = "thisIsAToken";
            $interval.and.returnValue(token);

            var dlsDestroy = jasmine.createSpy("dlsDestroy", function () { });
            documentLocationService.goToHref["listen"].and.returnValue(dlsDestroy);

            var winDotOpenDestroy = jasmine.createSpy("winDotOpenDestroy", function () { });
            $window.open["listen"].and.returnValue(winDotOpenDestroy);

            //var stateStartDestroy = jasmine.createSpy("stateStartDestroy", function () { });
            //var stateSuccessDestroy = jasmine.createSpy("stateSuccessDestroy", function () { });
//            spyOn($rootScope, "$on").and.callFake(function (name) {
//                if (name === "$stateChangeStart") {
//                    return stateStartDestroy;
//                } else if (name === "$stateChangeSuccess") {
//                    return stateSuccessDestroy;
//                }
//                return function () { };
//            });

            //act
            eventService.startListening(eventHandler);
            eventService.stopListening();

            //assert
            expect(dlsDestroy).toHaveBeenCalled();
            expect(winDotOpenDestroy).toHaveBeenCalled();
            expect(fakeJq.off).toHaveBeenCalledWith(eventService.constructor.eventNamespace);
            expect($interval.cancel).toHaveBeenCalledWith(token);
            //expect(stateStartDestroy).toHaveBeenCalled();
            //expect(stateSuccessDestroy).toHaveBeenCalled();
            expect(storefrontService.registerEventHandlers).toHaveBeenCalledWith(eventHandler);
        });

        it('does not redirect non cms content', function () {
            //arrange
            var href = "/SomeValidPath";
            var event = jasmine.createSpyObj("event", ["preventDefault", "stopPropagation", "stopImmediatePropagation"]);

            fakeJq.attr.and.callFake(function (attribute) {
                if (attribute === 'href') return href;
                return null;
            });

            event.currentTarget = {
                baseURI : 'test'
            };

            //act
            eventService.nonUiRouterLinkClickIntercepter(event);

            //assert
            expect(fakejQueryFunction).toHaveBeenCalledWith(event.currentTarget);
            expect(event.preventDefault).not.toHaveBeenCalled();
            expect($state.go).not.toHaveBeenCalled();
            expect($location.url).not.toHaveBeenCalled();
        });

        it('redirects on cms content', function () {
            //arrange
            var href = "-/media/123.ashx";
            var event = jasmine.createSpyObj("event", ["preventDefault", "stopPropagation", "stopImmediatePropagation"]);
            event.currentTarget = {
                baseURI: 'test'
            };

            fakeJq.attr.and.callFake(function (attribute) {
                if (attribute === 'href') return href;
                return null;
            });

            modalService.showPdf.and.callFake(function () {
                return returnRejected({ name: 'InvalidPDFException', message: "" });
            });
        

            //act
            eventService.nonUiRouterLinkClickIntercepter(event);
            
                //assert
                expect(fakejQueryFunction).toHaveBeenCalledWith(event.currentTarget);
                expect(event.preventDefault).toHaveBeenCalled();
                expect($state.go).not.toHaveBeenCalled();
                expect(modalService.showPdf).toHaveBeenCalled();
            
                //expect($location.url).toHaveBeenCalled();
        });

        it('intercepts open window calls and performs a location redirect', function () {
            //arrange
            var href = "/NewAccount";
            var event = jasmine.createSpyObj("event", ["preventDefault"]);
            var args = { href: href };

            //act
            eventService.windowDotOpenInterceptor(event, args);


            //assert
            expect(event.preventDefault).toHaveBeenCalled();
            expect($location.url).toHaveBeenCalledWith(href);
        });

        it('only checks for user timeout if storefront ui has been started by user', function () {
            //arrange
            $state.current.name = stateNames.storefrontHome;

            //act
            return eventService.checkForUserTimeout().catch(function () {

                //assert
                expect($state.go).not.toHaveBeenCalled();
                expect(storefrontService.reset).not.toHaveBeenCalled();
            });
        });

        it('gives an inactivity warning', function () {
            //arrange
            $state.current.name = stateNames.storefrontSelection;

            modalService.showInactivity.and.returnValue(returnResolved());

            environmentConfig.storefrontConfigs.StorefrontInactivityWarning = -1;//immediate
            environmentConfig.storefrontConfigs.StorefrontInactivityReset = 999999;

            //act
            eventService.checkForUserTimeout();

            //assert
            expect(storefrontService.reset).not.toHaveBeenCalled();
            expect(modalService.showInactivity).toHaveBeenCalled();

        });

        it('shows inactivity modal', function () {
            //arrange
            $state.current.name = stateNames.storefrontSelection;

            environmentConfig.storefrontConfigs.StorefrontInactivityWarning = -9999;//immediate
            environmentConfig.storefrontConfigs.StorefrontInactivityReset = -1;//also immediate

            modalService.showInactivity.and.returnValue(returnResolved());

            //act
            var promise = eventService.checkForUserTimeout();

            //assert
            expect(promise).toBeDefined();
            promise.then(function () {
                expect(modalService.showInactivity).toHaveBeenCalled();
            });
        });

        it('can handle service external task request', function () {
            //arrange
            var state = { name : "from"};

            modalService.isExternalTaskModalOpen.and.returnValue(false);
            modalService.showExternalTask.and.returnValue(returnResolved());

            var evt = jasmine.createSpyObj("angular event", ["preventDefault"]);
            evt.preventDefault.and.callFake(function () {
                evt.defaultPrevented = true;
            });

            storefrontService.checkState.and.returnValue(returnResolved({ isExternal: true }));

            eventService.registeredEventHandler = jasmine.createSpyObj("registeredEventHandler", ["onEndTransition", "onStartTransition"]);
            eventService.registeredEventHandler.onStartTransition.and.returnValue(returnResolved());

            //act

            return eventService.onStateChange({ from: function() { return state; }, to: function() { return { name : "to" }; }, router :
                    {
                        stateService : {
                            target : function() {}
                        }
                    }
                })
                .then(function () {
                    expect(modalService.showExternalTask).toHaveBeenCalled();
                })
                .catch(function (e) { fail(e); });

//            eventService.onStateChange(evt, { name: state, resolve: resolve }, {}, {}, {});
//
//            resolve
//                .storefrontTransitionDelay()
//                .then(function () {
//                    expect(modalService.showExternalTask).toHaveBeenCalled();
//                })
//                .catch(function (e) { fail(e); });


        });

        it('does nothing when service requests an external task and modal is already open', function () {
            //arrange
            var state = { name: "from" };

            modalService.isExternalTaskModalOpen.and.returnValue(true);
            var evt = jasmine.createSpyObj("angular event", ["preventDefault"]);
            evt.preventDefault.and.callFake(function () {
                evt.defaultPrevented = true;
            });

            storefrontService.checkState.and.returnValue(returnResolved(true));
            eventService.registeredEventHandler = jasmine.createSpyObj("registeredEventHandler", ["onEndTransition", "onStartTransition"]);
            eventService.registeredEventHandler.onStartTransition.and.returnValue(returnResolved());
            
            //act
            return eventService.onStateChange({ from: function () { return state; }, to: function () { return { name : "to" }; } })
                .then(function () {
                    expect(modalService.showExternalTask).not.toHaveBeenCalled();
                    expect($state.go).not.toHaveBeenCalled();
                })
                .catch(function (e) { fail(e); });

        });

        describe('handleCheckStateError', function () {

            it('handles redirect that is not already queued', function () {

                const error = {
                    hasWorkItemRedirect: true,
                    workItemRedirect: 14//missing info
                };

                storefrontService.isQueued.and.returnValue(false);
                storefrontService.skip.and.returnValue(returnResolved(''));

                return eventService
                    .handleCheckStateError(error)
                    .then(function () {

                        expect(storefrontService.insertWorkItem).toHaveBeenCalledWith(error.workItemRedirect);

                    })
                    .catch(function () { fail('should not have been rejected.'); });
                    
            });

            it('handles redirect that is already queued', function () {

                const error = {
                    hasWorkItemRedirect: true,
                    workItemRedirect: 14//missing info
                };

                const workItem = {
                    isCompleted: true
                };

                storefrontService.isQueued.and.returnValue(true);
                storefrontService.skip.and.returnValue(returnResolved(''));
                storefrontService.getWorkItemById.and.returnValue(workItem);

                return eventService
                    .handleCheckStateError(error)
                    .then(function () {

                        expect(storefrontService.insertWorkItem).not.toHaveBeenCalledWith(error.workItemRedirect);
                        expect(workItem.isCompleted).toBeFalsy();

                    })
                    .catch(function () { fail('should not have been rejected.'); });

            });

        });

        describe("cms modal functions", function () {

            beforeEach(function () {
                eventService.registeredEventHandler = jasmine.createSpyObj("registeredEventHandler", ["onEndTransition"]);
            });

            it('opens cms modal if state is from cms', function () {
                //arrange
                var toState = {};
                var fromState = { name: "from" };
                var transition = { from: function () { return fromState; }, to: function () { return toState; } };
                storefrontService.fullSiteMode = false;
                storefrontService.isCmsContent.and.returnValue(true);

                //act
                eventService.onStateChangeSuccess(transition);

                expect(modalService.showCmsContent).toHaveBeenCalledWith(toState, fromState.name);
            });

            it('does not open cms modal if state is not from cms', function () {
                //arrange
                var toState = {};
                var fromState = { name: "from" };
                var transition = { from: function () { return fromState; }, to: function () { return toState; } };
                storefrontService.fullSiteMode = false;
                storefrontService.isCmsContent.and.returnValue(false);

                //act
                eventService.onStateChangeSuccess(transition);

                expect(modalService.showCmsContent).not.toHaveBeenCalled();
            });

            it('does not open cms modal if state is from cms and is in full site mode', function () {
                //arrange
                var toState = {};
                var fromState = { name: "from" };
                var transition = { from: function () { return fromState; }, to: function () { return toState; } };

                storefrontService.fullSiteMode = true;
                storefrontService.isCmsContent.and.returnValue(true);

                //act
                eventService.onStateChangeSuccess(transition);

                expect(modalService.showCmsContent).not.toHaveBeenCalled();
            });
        });

        describe("link stripper", function () {

            var element = angular.element("<div />");

            beforeEach(function () {
                eventService.startListening();
                eventService.addMutationObserver(element[0]);

            });

            it("removes appropriate links - not fullsite mode", function () {
                storefrontService.fullSiteMode = false;

                var regularLink = angular.element("<a class='should-be-removed' href='/test'><span class='should-remain'>regularLink</span></a>");
                var hashLink = angular.element("<a class='should-remain' target='_parent' href='#test'>hashLink</a>");
                var ngClickLink = angular.element("<a class='should-remain' ng-click='someMethod()'>ngClickLink</a>");
                var pdfLink = angular.element("<a class='should-remain' href='/api/sessions/pdf/mypdf.pdf'>pdfLink</a>");
                var regularLinkInEchAftDisclaimer = angular
                    .element("<eft-ach-disclaimer class='should-remain'><a class='should-remain' href='/test'><span class='should-remain'>regularLink</span></a></eft-ach-disclaimer>");
                var regularLinkInEchAftDisclaimer2 = angular
                    .element("<eft-ach-disclaimer class='should-remain'><main><a class='should-remain' href='/test'><span class='should-remain'>regularLink</span></a></main></eft-ach-disclaimer>");

                element.append(regularLink);
                element.append(hashLink);
                element.append(ngClickLink);
                element.append(pdfLink);
                element.append(regularLinkInEchAftDisclaimer);
                element.append(regularLinkInEchAftDisclaimer2);

                expect(element.children().filter(".should-be-removed").length).toBe(1);

                expect(element.children().filter("[href='/test']").length).toBe(1);
                expect(element.children().filter("eft-ach-disclaimer").children().filter("[href='/test']").length).toBe(1);
                expect(element.children().filter("eft-ach-disclaimer").children().filter("main").children().filter("[href='/test']").length).toBe(1);

                expect(element.children().filter(".should-remain").length).toBe(5);
                expect(element.children().filter("eft-ach-disclaimer").children().filter(".should-remain").length).toBe(1);
                expect(element.children().filter("eft-ach-disclaimer").children().filter("main").children().filter(".should-remain").length).toBe(1);

                expect(element.children().filter("a").children().filter(".should-remain:contains('regularLink')").length).toBe(1);
                expect(element.children().filter("[target]").length).toBe(1);

                expect(element.children().filter(".should-remain:contains('hashLink')").length).toBe(1);
                expect(element.children().filter(".should-remain:contains('ngClickLink')").length).toBe(1);
                expect(element.children().filter(".should-remain:contains('pdfLink')").length).toBe(1);
            });

            it("removes appropriate links - fullsite mode", function () {
                storefrontService.fullSiteMode = true;

                var regularLink = angular.element("<a class='should-remain' href='/test'><span class='should-remain'>regularLink</span></a>");
                var hashLink = angular.element("<a class='should-remain' target='_parent' href='#test'>hashLink</a>");
                var ngClickLink = angular.element("<a class='should-remain' ng-click='someMethod()'>ngClickLink</a>");
                var pdfLink = angular.element("<a class='should-remain' href='/api/sessions/pdf/mypdf.pdf'>pdfLink</a>");
                var regularLinkInEchAftDisclaimer = angular
                    .element("<eft-ach-disclaimer><a class='should-remain' href='/test'><span class='should-remain'>regularLink</span></a></eft-ach-disclaimer>");
                var regularLinkInEchAftDisclaimer2 = angular
                    .element("<eft-ach-disclaimer><main><a class='should-remain' href='/test'><span class='should-remain'>regularLink</span></a></main></eft-ach-disclaimer>");

                element.append(regularLink);
                element.append(hashLink);
                element.append(ngClickLink);
                element.append(pdfLink);
                element.append(regularLinkInEchAftDisclaimer);
                element.append(regularLinkInEchAftDisclaimer2);

                expect(element.children().filter("[href='/test']").length).toBe(1);
                expect(element.children().filter("eft-ach-disclaimer").children().filter("[href='/test']").length).toBe(1);
                expect(element.children().filter("eft-ach-disclaimer").children().filter("main").children().filter("[href='/test']").length).toBe(1);

                expect(element.children().filter(".should-remain").length).toBe(4);
                expect(element.children().filter("eft-ach-disclaimer").children().filter(".should-remain").length).toBe(1);
                expect(element.children().filter("eft-ach-disclaimer").children().filter("main").children().filter(".should-remain").length).toBe(1);

                expect(element.children().filter("a").children().filter(".should-remain:contains('regularLink')").length).toBe(1);
                expect(element.children().filter("[target]").length).toBe(1);

                expect(element.children().filter(".should-remain:contains('hashLink')").length).toBe(1);
                expect(element.children().filter(".should-remain:contains('ngClickLink')").length).toBe(1);
                expect(element.children().filter(".should-remain:contains('pdfLink')").length).toBe(1);
            });

            afterEach(function () {
                eventService.stopListening();
                element.empty();
            });
        });

    });
}());