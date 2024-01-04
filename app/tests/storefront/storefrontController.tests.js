
(function () {
    'use strict';

    describe('StoreFrontController', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var $scope, $window, $controller, $state, stateNames, loginStates, storefrontService, modalService, $rootScope, $q, eventService;
        var errorDisplayService;
        var Promise;
        var environmentConfig = {
            storefrontConfigs: {
                storefrontInactivityWarning: 999999,
                storefrontInactivityReset: 999999,
                storefrontInactivityIntervalDelay: 999999
            }
        };
        
        function returnResolved(value) {
            return new Promise(function(resolve) { return resolve(value); });
        }
        
        function returnRejected(object) {
            return new Promise(function (resolve, reject) { return reject(object); });
        }

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        beforeEach(angular.mock.module(function ($provide) {
            errorDisplayService = jasmine.createSpyObj("errorDisplayService", ["clearToasts"]);
            $provide.constant('environmentConfig', environmentConfig);
            $provide.value('errorDisplayService', errorDisplayService);
        }));

        
        beforeEach(angular.mock.inject(function ($injector) {
            try {
                $rootScope = $injector.get('$rootScope');
                eventService = jasmine.createSpyObj("eventService", ["startListening", "stopListening", "resetState"]);
                
                var win = $injector.get('$window');
                Promise = win.Promise;

                $scope = $rootScope.$new();

                $controller = $injector.get('$controller');
                stateNames = $injector.get("stateNames");
                loginStates = $injector.get("loginStates");

                $window = jasmine.createSpyObj("$window", ["open"]);
                $window.open["listen"] = jasmine.createSpy("openListener", function () { });
                $window.console = jasmine.createSpyObj("fakeConsole", ["log"]);
                $window.location = {
                    reload : jasmine.createSpy("window.location.reload", function() {})
                };

                $state = jasmine.createSpyObj("$state", ["go", "get"]);
                $state.current = {
                    name: stateNames.storefrontHome
                };
                $state.go.and.returnValue(returnResolved());
                $state.get.and.callFake(function (state) {
                    if (state === stateNames.storefrontHome) {
                        return {
                            cms: {
                                landingPageId: ''
                            }
                        };
                    }
                    return null;
                });

                storefrontService = jasmine.createSpyObj("storefrontService",
                    [
                        "getCmsMediaItem", "isEnabled", "reset", "checkState", "pushLoggingInfo", "isWorkflowActive",
                        "currentWorkItem", "getWorkItemInitState", "fullSiteMode", "registerEventHandlers",
                        "prefetchContent", "getCmsData", "clearSession"
                    ]);

                storefrontService.onInitialized = returnResolved();
                storefrontService.isShellAccountInitialized = true;
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

                modalService = jasmine.createSpyObj("storefrontModalService",
                    ["setGlobalModalSettings", "showExternalTask", "isExternalTaskModalOpen", "showInactivity", "showPdf", "failedToInitMessage", "showCompletionMessage", "closeAll"]);

                modalService.failedToInitMessage.and.callFake(function() {
                    fail();
                    return returnResolved();
                });

                $q = jasmine.createSpyObj("$q", ["resolve", "reject", "when"]);

                $q.resolve.and.callFake(function(obj) {
                    return returnResolved(obj);
                });

                $q.reject.and.callFake(function(obj) {
                    return returnRejected(obj);
                });

                $q.when.and.callFake(function(obj) {
                    if ('then' in obj && 'catch' in obj && 'finally' in obj) {
                        return obj;
                    }
                    return returnResolved(obj);
                });

            } catch (e) {
                fail(e);
            }
        }));

        var newController = function (s) {
                return $controller("StorefrontController",
                    {
                        $scope: s || $scope,
                        $window: $window,
                        $state: $state,
                        StorefrontService: storefrontService,
                        router: [],
                        StorefrontModalService: modalService,
                        $q: $q,
                        StorefrontEventService: eventService
                    });
        };

        it('can build lookup from routing table', function() {
            //arrange
            var routes = [
                //2 happy paths different names
                {
                    name: 'a',
                    config: {
                        templateUrl : "a"
                    }
                },
                {
                    name: 'b',
                    config: {
                        templateUrl : "b"
                    }
                },
                //2 with view names and different names
                {
                    name: 'c',
                    config: {
                        views: {
                            "" : {
                                templateUrl : "c"
                            },
                            "other" : {
                                templateUrl : "cother"
                            }
                        }
                    }
                },
                {
                    name: 'd',
                    config: {
                        views: {
                            "": {
                                templateUrl: "d"
                            },
                            "other": {
                                templateUrl: "dother"
                            }
                        }
                    }
                },
                // templateurl is a function
                {
                    name: 'e',
                    config: {
                        templateUrl: function() { return "e"; }
                    }
                },
                // view.templateurl is a function
                {
                    name: 'f',
                    config: {
                        views: {
                            "" : {
                                templateUrl: function() { return "f"; }
                            },
                            "other": {
                                templateUrl: function() { return "fother"; }
                            }
                        }
                    }
                }
            ];

            //act
            newController().onInitialized
                .then(function(c) {
                    var lookupTable = c.buildRouteLookup(routes);
                    //assert
                    expect(lookupTable['a']).toBe('a');
                    expect(lookupTable['b']).toBe('b');

                    expect(angular.isArray(lookupTable['c'])).toBeTruthy();
                    expect(lookupTable['c'].length === 2).toBeTruthy();
                    expect(lookupTable['c'].indexOf('c') >= 0).toBeTruthy();
                    expect(lookupTable['c'].indexOf('cother') >= 0).toBeTruthy();

                    expect(angular.isArray(lookupTable['d'])).toBeTruthy();
                    expect(lookupTable['d'].length === 2).toBeTruthy();
                    expect(lookupTable['d'].indexOf('d') >= 0).toBeTruthy();
                    expect(lookupTable['d'].indexOf('dother') >= 0).toBeTruthy();

                    expect(lookupTable['e']).not.toBeDefined();
                    expect(angular.isArray(lookupTable['f'])).toBeTruthy();
                    expect(lookupTable['f'].length === 0).toBeTruthy();
                })
                .catch(function(e) {
                    fail(e);
                });
        });

        it('can prefetch content', function () {
            //arrange
            var lookup = {
                "a": "a",
                "b": "b",
                "c": [],
                "d": ["d", "dother"]
            };

            lookup[stateNames.storefrontSelection] = "f";
            lookup[stateNames.storefrontSurvey] = "g";
            lookup[loginStates.Login] = "h";
            lookup[loginStates.AddMissingInformation] = "i";

            newController().onInitialized
                .then(function(c) {
                    spyOn(c, "buildRouteLookup").and.callFake(function() {
                        return lookup;
                    });

                    storefrontService.workItems = [
                        {
                            selectedIcon: { image: 'image1url' },
                            unselectedIcon: { image: 'image2url' },
                            states: ['a', 'b', 'd']
                        }
                    ];

                    //act
                    return c.prefetchAllContent();
                })
                .then(function() {
                    //assert
                    expect(storefrontService.prefetchContent).toHaveBeenCalled();
                    //since prefetch is called initially when controller is instanciated, we'll need the args for the second call to prefetch
                    var urls = storefrontService.prefetchContent.calls.argsFor(1)[0];
                    expect(urls.length).toBe(10);
                    expect(urls).toContain('image1url');
                    expect(urls).toContain('image2url');
                    expect(urls).toContain('a');
                    expect(urls).toContain('b');
                    expect(urls).toContain('d');
                    expect(urls).toContain('dother');
                    expect(urls).toContain('f');
                    expect(urls).toContain('g');
                    expect(urls).toContain('h');
                    expect(urls).toContain('i');
                })
                .catch(function(e) {
                    fail(e);
                });
        });

        it('can call completion modal and no next workitem', function() {
            //arrange
            storefrontService.fullSiteMode = false;
            var w1 = {};
            modalService.showCompletionMessage.and.returnValue(returnResolved());

            //act
            newController().onInitialized
                .then(function(c) {
                    return c.onCompletedWorkItem(w1, null);
                })
                .then(function() {
                    //assert
                    expect(modalService.showCompletionMessage).toHaveBeenCalledWith(w1);
                })
                .catch(function(e) {
                    fail(e);
                });

        });

        it('handles on reset', function () {
            var c = newController();
            return c
                .onResetting()
                .then(function() {
                    expect(modalService.closeAll).toHaveBeenCalledWith(true);
                    expect(modalService.setGlobalModalSettings).toHaveBeenCalled();
                    expect(eventService.resetState).toHaveBeenCalled();
                    return c.onResetComplete();
                })
                .then(function() {
                    expect($state.go).toHaveBeenCalledWith(stateNames.storefrontHome);
                    expect(errorDisplayService.clearToasts).toHaveBeenCalled();
                })
                .catch(function(e) {
                    fail(e);
                });

        });

        it('handles hard reset', function () {
            $window.location.origin = "TEST";
            var c = newController();
            $window.location.href = "CHANGE";
            return c
                .onResetting()
                .then(function () {
                    expect(modalService.closeAll).toHaveBeenCalledWith(true);
                    expect(modalService.setGlobalModalSettings).toHaveBeenCalled();
                    expect(eventService.resetState).toHaveBeenCalled();
                    $state.go.calls.reset();
                    return c.onResetComplete(true);
                })
                .then(function () {
                    expect($state.go).not.toHaveBeenCalled();
                    expect($window.location.href).toBe("TEST/Storefront");
                })
                .catch(function (e) {
                    fail(e);
                });

        });
    });
}());