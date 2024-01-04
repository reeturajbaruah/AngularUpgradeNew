(function () {
    'use strict';

    describe('StorefrontService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var service, storefrontEventHandlers, suspendedAccountService, storefrontUtilityService, routes, rootScope, cmsUtilService, stringUtilsService;
        var $q;
        var $window;
        let addmissingInfoService;
        var authService = {
            isAuthenticated: function () { },
            logout: function () { }
        };

        var genericRepo = {
            dataFactory: null
        };

        var webStorage;

        var storeLocation = "TNO";
        
        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        beforeEach(angular.mock.module(function ($provide) {
            $provide.factory("$q", ["$window", function ($window) {
                var p = $window["Promise"];
                p.when = function(v) {
                    if (v['then']) {
                        return v;
                    } else {
                        return p.resolve(v);
                    }
                };
                return p;
            }]);

            $provide.factory("$timeout", ["$window", function ($window) {
                return function() {
                    return $window["Promise"].resolve();
                };
            }]);

            $provide.value('StorefrontCmsRequests',
                {
                    'hctraLogo': {
                        Path: '/sitecore/media library/Images/HCTRA/Header Footer/HCTRA_Logo',
                        Fields: 'ItemID,Alt,Width,Height'
                    },
                    'states': {
                        ItemId: "449337DB-4759-48A7-8982-DC56F92C1F27",
                        Fields: 'ItemId,Name,Children'
                    },
                    'dbIds': {
                        ItemId: "449337DB-4759-48A7-8982-DC56F92C1F27",
                        Fields: ''
                    },
                    'tasks': {
                        ItemId: "449337DB-4759-48A7-8982-DC56F92C1F27",
                        Fields: ''
                    }
                });

            suspendedAccountService = jasmine.createSpyObj("suspendedAccountService", ["isEmpty", "getSuspendedAccountTypeInformation"]);
            suspendedAccountService.getSuspendedAccountTypeInformation.and.callFake(function () {
                return $q.resolve({});
            });
            addmissingInfoService = jasmine.createSpyObj('addMissingInformationService', ['isMissingInfo', 'destroyMissingInformationFlags']);
            $provide.value("AuthService", authService);
            $provide.value("genericRepo", genericRepo);
            webStorage = jasmine.createSpyObj("fakeWebStorage", ["setKeyValue", "getValue", "removeEntry"]);
            $provide.value("webStorage", webStorage);

            storefrontUtilityService = {
                isRunningAsKiosk: true,
                storefrontLocation: 1,
                isSecureCardInputAvailable: true,
                machineName: "TestKiosk",
                webStoreData: null,
                lockStateChanging: function(action) { return action(); },
                stateChangingRestricted: false
            };

            $provide.value("StorefrontUtilityService", storefrontUtilityService);
            $provide.value("suspendedAccountService", suspendedAccountService);

            cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
            $provide.value('cmsUtilService', cmsUtilService);
            $provide.constant("environmentConfig", { billingInformation: { UseUpdatedPage: true }, isMergeMATandVioOn: false });
            $provide.value('addMissingInformationService', addmissingInfoService);
            stringUtilsService = jasmine.createSpyObj('stringUtilsService', ['getParameterObject']);
            $provide.value('stringUtilsService', stringUtilsService);
        }));


        beforeEach(angular.mock.inject(function ($injector) {
            $q = $injector.get("$q");
            routes = $injector.get("routes");
            rootScope = $injector.get("$rootScope");
            $window = $injector.get('$window');
            angular.extend(rootScope,
                {
                    currentUser: {
                        acctActivity: "A",
                        newAccountStep: {
                            accountComplete: true
                        }
                    }
                });

            var fakeDataFactory = jasmine.createSpyObj("fakeDataFactory", ["StartStorefrontDBSession", "EndStorefrontDBSession", "getCmsPageById"]);
            genericRepo.dataFactory = fakeDataFactory;

            fakeDataFactory.StartStorefrontDBSession.and.returnValue($q.resolve({
                dbResponse: 12,
                errors: []
            }));

            fakeDataFactory.EndStorefrontDBSession.and.returnValue($q.resolve({
                dbResponse: 12,
                errors: []
            }));
            
            fakeDataFactory.getCmsPageById.and.callFake(function (request) {
                
                var cmsItems = angular.toJson({
                    "Children": [
                        {
                            "storefrontDisplayName": "1",
                            "dbId": "MTOLL",
                            "uiOrder": 1,
                            "isSkippable": 1,
                            "requiresAuthentication": 0
                          
                        },
                        {
                            "storefrontDisplayName": "2",
                            "dbId": "GINV",
                            "uiOrder": 2,
                            "isSkippable": 1,
                            "requiresAuthentication": 0
                           
                        },
                        {
                            "storefrontDisplayName": "3",
                            "dbId": "OACC",
                            "uiOrder": 3,
                            "isSkippable": 1,
                            "requiresAuthentication": 0
                           
                        },
                        {
                            "storefrontDisplayName": "4",
                            "dbId": "UBI",
                            "uiOrder": 4,
                            "isSkippable": 1,
                            "requiresAuthentication": 0
                          
                        }
                    ]
                });

                switch (request.ItemId) {
                    case routes.storefrontWorkItemSelectionParentId:
                        return $q.resolve({
                            errors: [],
                            cmsResponse: cmsItems,
                            webVersion: "2.11.0.6619.19326",
                            alerts: null
                        });
                   
                    case routes.storefrontDBIdsId:
                        return $q.resolve({
                            errors: [],
                            cmsResponse: "{ \"Children\": []}",
                            webVersion: "2.11.0.6619.19326",
                            alerts: null
                        });
                    default:
                        return $q.resolve({
                            errors: [],
                            cmsResponse: "{}",
                            webVersion: "2.11.0.6619.19326",
                            alerts: null
                        });
                }
            });
            
            storefrontEventHandlers = jasmine.createSpyObj("fakeEventHandler", ["onIncompleteWorkItem", "onCompletedWorkItem", "onStartTransition", "onEndTransition", "onResetting", "onResetComplete"]);
            storefrontEventHandlers.onCompletedWorkItem.and.returnValue($q.resolve());
            storefrontEventHandlers.onResetting.and.returnValue($q.resolve());

            service = $injector.get('StorefrontService');

            service.sessionId = 11;
            service.registerEventHandlers(storefrontEventHandlers);
            
            rootScope.$apply();
        }));
        
        function getWorkItem(id) {
            for (var index = 0; index < service.workItems.length; index++) {
                if (service.workItems[index].id === id) {
                    return service.workItems[index];
                }
            }
            return null;
        }

        afterEach(function() {
            rootScope.$apply();
        });

        describe('isQueued', () => {
            it('says workitem is queued', function () {
                return service.serviceInitialized.then(function () {
                    const w1 = getWorkItem(1);
                    w1.isSelected = true;

                    const isQueued = service.isQueued(w1.id);
                    expect(isQueued).toBeTruthy();                    
                });
            });

            it('says workitem is not queued', function () {
                return service.serviceInitialized.then(function () {
                    const w1 = getWorkItem(1);
                    w1.isSelected = false;

                    const isQueued = service.isQueued(w1.id);
                    expect(isQueued).toBeFalsy();
                });
            });
        });
        

        it('should reset internal state when reset is called', function () {
            spyOn(authService, "isAuthenticated").and.returnValue(false);
            return service.serviceInitialized.then(function() {
                var w1 = getWorkItem(1);
                var w2 = getWorkItem(2);
                w1.isSelected = true;
                w2.isSelected = true;
                return service.next()
                    .then(function () {
                        expect(service.isWorkflowActive()).toBeTruthy();
                        return service.next();
                    })
                    .then(function () {
                        expect(w1.isCompleted).toBeTruthy();
                        return service.reset();
                    })
                    .then(function () {
                        expect(w1.isSelected).toBeFalsy();
                        expect(w1.isUnavailable).toBeFalsy();
                        expect(w1.isCompleted).toBeFalsy();
                        expect(service.isWorkflowActive()).toBeFalsy();
                        expect(webStorage.setKeyValue).toHaveBeenCalled();
                        expect(addmissingInfoService.destroyMissingInformationFlags).toHaveBeenCalled();
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        it('mark work item as completed when completed', function () {
            return service.serviceInitialized.then(function () {
                var w1 = getWorkItem(1);
                w1.isSelected = true;

                expect(service.isEnabled()).toBeTruthy();

                return service.next()
                    .then(function () {
                        expect(w1.isCompleted).toBeFalsy();
                        return service.next();
                    })
                    .then(function () {
                        expect(w1.isCompleted).toBeTruthy();
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        it('should skip completed items on next()', function () {
            return service.serviceInitialized.then(function() {
                var w1 = getWorkItem(1);
                var w2 = getWorkItem(2);
                w1.isSelected = true;
                w1.isCompleted = true;
                w2.isSelected = true;

                return service.next()
                    .then(function () {
                        expect(service.currentWorkItem().id).toBe(w2.id);
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        it('should respond with incomplete workitem event if remaining workitems', function () {
            return service.serviceInitialized.then(function () {
                var w1 = getWorkItem(1);
                var w2 = getWorkItem(2);
                w1.isSelected = true;
                w2.isSelected = true;

                storefrontEventHandlers.onIncompleteWorkItem.and.returnValue($q.resolve(null));
                storefrontEventHandlers.onCompletedWorkItem.and.returnValue($q.resolve(null));

                return service.next()
                    .then(function (item) {
                        expect(item.id).toBe(w1.id);
                        return service.next();
                    })
                    .then(function (item) {
                        expect(item.id).toBe(w2.id);
                        w1.isCompleted = false;
                        return service.next();
                    })
                    .then(function () {
                        expect(storefrontEventHandlers.onIncompleteWorkItem).toHaveBeenCalled();
                    })
                    .catch(function (e) {
                        fail(e);
                    });
            });
            
        });

        it('responds to an incompleted work item', function () {
            return service.serviceInitialized.then(function () {
                var w1 = getWorkItem(1);
                var w2 = getWorkItem(2);
                w1.isSelected = true;
                w2.isSelected = true;

                (storefrontEventHandlers.onIncompleteWorkItem.and.returnValue($q.resolve()));

                return service.next()
                    .then(function (item) {
                        expect(item.id).toBe(w1.id);
                        return service.next();
                    })
                    .then(function (item) {
                        expect(item.id).toBe(w2.id);
                        w1.isCompleted = false;
                        return service.next();
                    })
                    .then(function () {
                        expect(storefrontEventHandlers.onIncompleteWorkItem).toHaveBeenCalled();
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        describe('skip', function () {


            it('can skip skippable workitems', function () {
                return service.serviceInitialized.then(function () {
                    var w1 = getWorkItem(1);
                    var w2 = getWorkItem(2);
                    w1.isSelected = true;
                    w1.isSkippable = true;
                    w2.isSelected = true;

                    return service.next()
                        .then(function (item) {
                            expect(item.id).toBe(w1.id);
                            expect(item.isCompleted).toBeFalsy();
                            return service.skip();
                        })
                        .then(function (stateName) {
                            expect(stateName).toBe(w2.states[0]);
                            expect(w1.isCompleted).toBeFalsy();
                        })
                        .catch(function (e) { fail(e); });
                });

            });

            it('responds with incomplete workitem event when skipping past last workitem', function () {
                return service.serviceInitialized.then(function () {
                    var w1 = getWorkItem(1);
                    w1.isSelected = true;
                    w1.isSkippable = true;

                    storefrontEventHandlers.onIncompleteWorkItem.and.returnValue($q.resolve(null));

                    return service.next()
                        .then(function (item) {
                            expect(item.id).toBe(w1.id);
                            expect(item.isCompleted).toBeFalsy();
                            return service.skip();
                        })
                        .catch(function (evt) {
                            fail("show not have failed (1): " + evt);
                        })
                        .then(function () {
                            expect(storefrontEventHandlers.onIncompleteWorkItem).toHaveBeenCalled();
                        })
                        .catch(function (evt) {
                            fail("show not have failed (2): " + evt);
                        });
                });

            });

            it('cannot skip non skippable workitems', function () {
                return service.serviceInitialized.then(function () {
                    var w1 = getWorkItem(1);
                    var w2 = getWorkItem(2);

                    w1.isSelected = true;
                    w1.isSkippable = false;
                    w2.isSelected = true;

                    return service.next()
                        .then(function (item) {
                            expect(item.id).toBe(w1.id);
                            expect(item.isCompleted).toBeFalsy();
                            return service.skip();
                        })
                        .then(function () { fail("Should have rejected a non skippable work item."); })
                        .catch(function (item) {
                            expect(item.id).toBe(w1.id);
                            expect(w1.isCompleted).toBeFalsy();
                            expect(w2.isCompleted).toBeFalsy();
                        });
                });

            });

            it('cannot skip to the current workitem', function () {

                return service.serviceInitialized.then(function () {
                    var w1 = getWorkItem(1);
                    var w2 = getWorkItem(2);

                    w1.isSelected = true;
                    w1.isSkippable = true;
                    w2.isSelected = true;

                    return service.next()
                        .then(function (item) {
                            expect(item.id).toBe(w1.id);
                            expect(service.currentWorkItem()).toBe(item);
                            //skip back to w1
                            return service.skip(item.id);
                        })
                        .then(function () { fail("Should have rejected skipping to current item"); })
                        .catch(function (item) {
                            expect(item.id).toBe(w1.id);
                            expect(w1.isCompleted).toBeFalsy();
                            expect(w2.isCompleted).toBeFalsy();
                        });
                });

            });

        });

        it('should logout user when reset', function () {

            spyOn(authService, "isAuthenticated").and.returnValue(true);
            spyOn(authService, "logout").and.returnValue($q.resolve());
            return service.serviceInitialized.then(function () {
                return service.reset()
                    .then(function () {
                        expect(storefrontEventHandlers.onResetting).toHaveBeenCalled();
                        expect(service.isWorkflowActive()).toBeFalsy();
                        expect(authService.logout).toHaveBeenCalled();
                        expect(storefrontEventHandlers.onResetComplete).toHaveBeenCalled();
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        it('should clear named caches', function () {

            return $window.caches
                .open('test') //open and creates a cache
                .then(function(){ return service.clearNamedCaches(); }) //should delete this cache now
                .then(function(){ return $window.caches.has('test'); }) //check if cache is there
                .then(function(isCachePreset){ expect(isCachePreset).toBeFalsy(); }); //assert
            
        });

        it('should not return a work item when starting if no items are selected', function () {
            return service.serviceInitialized.then(function () {
                return service.next()
                    .then(function (item) {
                        expect(item).toBeNull();
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        it('should return the only selected item when starting', function () {
            return service.serviceInitialized.then(function() {
                var w1 = getWorkItem(1);
                w1.isSelected = true;

                return service.next()
                    .then(function (firstItem) {
                        expect(firstItem).toBeDefined();
                        expect(firstItem).toBe(w1);
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        it('should return null when there are no more selected work items left', function () {
            return service.serviceInitialized.then(function () {
                var w1 = getWorkItem(1);
                w1.isSelected = true;

                storefrontEventHandlers.onCompletedWorkItem.and.returnValue($q.resolve(null));

                return service.next()
                    .then(function (item) {
                        expect(item).not.toBeNull();
                        return service.next();
                    })
                    .then(function (nextItem) {
                        expect(nextItem).toBeNull();
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        it('should call next() when the work item is no longer selected', function () {
            let nextSpy = spyOn(service, "next").and.callThrough();
            return service.serviceInitialized.then(function () {
                let w1 = getWorkItem(1);
                w1.isSelected = true;

                storefrontEventHandlers.onCompletedWorkItem.and.callFake(function(previousItem, item) {
                    item.isSelected = false;
                    return $q.resolve(null);
                });

                return service.next()
                    .then(function () {
                        expect(nextSpy).toHaveBeenCalledTimes(2);
                    })
                    .catch(function (e) { fail(e); });
            });

        });

        it('should not alter state transitions if TO state is within current state', function () {
            return service.serviceInitialized.then(function () {
                var w1 = getWorkItem(1);
                w1.isSelected = true;

                return service.startWorkItems()
                    .then(function () {
                        return service.checkState({ name: w1.states[1] });
                    })
                    .then(function (result) {
                        expect(service.isWorkflowActive()).toBeTruthy();
                        expect(result.isExternal).toBeFalsy();
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        it('should alter state transition to next work item', function () {
            return service.serviceInitialized.then(function () {
                var w1 = getWorkItem(1);
                var w2 = getWorkItem(2);
                w1.isSelected = true;
                w2.isSelected = true;

                storefrontEventHandlers.onCompletedWorkItem.and.returnValue($q.resolve(null));

                return service.startWorkItems()
                    .then(function () {
                        return service.next(true);
                    })
                    .then(function (item) {
                        expect(item).toBeDefined();
                        expect(item.id).toBe(w2.id);
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        it('should not alter state transition if state is external work item, but flag it as external', function () {
            return service.serviceInitialized.then(function () {
                var w1 = getWorkItem(1);
                w1.isSelected = true;

                return service.startWorkItems()
                    .then(function () {
                        return service.checkState({ name: "externalStateName" });
                    })
                    .then(function (externalState) {
                        expect(service.isWorkflowActive()).toBeTruthy();
                        expect(externalState).toBeTruthy();
                    })
                    .catch(function (e) {
                        fail(e);
                    });
            });
            
        });

        it('should not alter state transition if state is external work item, but flag it as external and current state requires authentication and is authenticated', function () {
            return service.serviceInitialized.then(function() {var w1 = getWorkItem(1);
                w1.isSelected = true;
                w1.requiresAuthentication = true;
                spyOn(authService, "isAuthenticated").and.returnValue(true);

                return service.startWorkItems()
                    .then(function () {
                        return service.checkState("externalStateName");
                    })
                    .then(function (externalState) {
                        expect(service.isWorkflowActive()).toBeTruthy();
                        expect(externalState).toBeTruthy();
                    })
                    .catch(function (e) {
                        fail(e);
                    }); });
            
        });

        it('should redirect to login if workitem requires authentication', function () {
            return service.serviceInitialized.then(function () {
                var w1 = getWorkItem(1);
                spyOn(authService, "isAuthenticated").and.returnValue(false);

                w1.isSelected = true;
                w1.requiresAuthentication = true;

                return service.startWorkItems()
                    .then(function (startStateName) {
                        return service.checkState({ name: startStateName });
                    })
                    .catch(function (error) {
                        expect(error).toEqual({
                            hasWorkItemRedirect: true,
                            restrictedAbort: false,
                            workItemRedirect: HCTRA.Model.SelectedOptions.LOGIN
                        });
                    });
            });
            
        });

        it('should redirect to login if next workitem requires authentication', function () {

            spyOn(authService, "isAuthenticated").and.returnValue(false);
            return service.serviceInitialized.then(function() {
                var w1 = getWorkItem(1);
                var w2 = getWorkItem(2);

                w1.isSelected = true;
                w1.requiresAuthentication = false;

                w2.isSelected = true;
                w2.requiresAuthentication = true;

                return service.startWorkItems()
                    .then(function (state) {
                        return service.checkState({ name: state });
                    })
                    .catch(function (e) { fail(e); })
                    .then(function (result) {
                        expect(result.isExternal).toBeFalsy();
                        return service.completeWorkItem();
                    })
                    .catch(function (e) { fail(e); })
                    .then(function (state) {
                        return service.checkState({ name: state });
                    })
                    .then(function (e) {
                        fail(e);
                    })
                    .catch(function (error) {
                        expect(error).toEqual({
                            hasWorkItemRedirect: true,
                            restrictedAbort: false,
                            workItemRedirect: HCTRA.Model.SelectedOptions.LOGIN
                        });
                    });
            });
            

        });

        it('should skip login if workitem requires authentication and user is already logged in', function () {

            spyOn(authService, "isAuthenticated").and.returnValue(true);
            return service.serviceInitialized.then(function () {
                var w1 = getWorkItem(1);

                w1.isSelected = true;
                w1.requiresAuthentication = true;

                return service.startWorkItems()
                    .then(function (startStateName) {
                        return service.checkState({ name: startStateName });
                    })
                    .then(function (result) {
                        expect(result.isExternal).toBeFalsy();
                    })
                    .catch(function (e) { fail(e); });
            });
           

        });

        it('should skip login if next workitem requires authentication but user is already in', function () {

            spyOn(authService, "isAuthenticated").and.returnValue(true);
            return service.serviceInitialized.then(function() {
                var w1 = getWorkItem(1);
                var w2 = getWorkItem(2);

                w1.isSelected = true;
                w1.requiresAuthentication = true;

                w2.isSelected = true;
                w2.requiresAuthentication = true;

                storefrontEventHandlers.onCompletedWorkItem.and.returnValue($q.resolve());

                return service.startWorkItems()
                    .then(function (stateName) {
                        return service.checkState({ name: stateName });
                    })
                    .then(function (result) {
                        expect(result.isExternal).toBeFalsy();
                        return service.completeWorkItem();
                    })
                    .then(function (stateName) {
                        return service.checkState({ name: stateName });
                    })
                    .then(function (result) {
                        expect(result.isExternal).toBeFalsy();
                    })
                    .catch(function (e) { fail(e); });
            });
            

        });

        it('should save to web storage when next is called', function () {
            return service.serviceInitialized.then(function () {
                var w1 = getWorkItem(1);
                var w3 = getWorkItem(3);
                w1.isSelected = true;
                w3.isSelected = true;
                return service.next()
                    .then(function (firstItem) {
                        expect(firstItem).toBeDefined();
                        expect(webStorage.setKeyValue).toHaveBeenCalled();
                    })
                    .catch(function (e) { fail(e); });
            });
            
        });

        it('should restore from web storage when service is created', function () {
            expect(service).toBeDefined();
            return service.serviceInitialized.then(function() {
                return service.onInitialized
                    .then(function () {
                        expect(webStorage.getValue).toHaveBeenCalled();
                    });
            });
            
        });

        it('restores from webStorage', function () {
            return service.serviceInitialized.then(function () {
                //arrange 
                var data = {
                    sessionId: 3141,
                    currentItemId: 2,
                    selectedItemIds: [1, 2],
                    completedItemIds: [1],
                    fullSiteMode: false
                };
                webStorage.getValue.and.returnValue(data);
                //act
                service.restoreFromStorage();
                //assert
                expect(service.sessionId).toBe(3141);
                expect(service.currentWorkItem()).toBeDefined();
                expect(service.currentWorkItem().id).toBe(2);

                expect(getWorkItem(1).isSelected).toBeTruthy();
                expect(getWorkItem(2).isSelected).toBeTruthy();

                expect(service.workItems.filter(function (x) { return x.isSelected; }).length).toBe(2);
            });
            

        });

        it('can start new database session (kiosk mode)', function () {
            return service.serviceInitialized.then(function () {
                //arrange
                var w1 = getWorkItem(1);
                var w3 = getWorkItem(3);
                w1.isSelected = true;
                w3.isSelected = true;

                //act
                return service.startNewSession()
                    .then(function () {
                        //assert
                        expect(genericRepo.dataFactory.StartStorefrontDBSession).toHaveBeenCalled();
                        var args = genericRepo.dataFactory.StartStorefrontDBSession.calls.argsFor(0);
                        expect(args[0]).toBeDefined();
                        expect(args[0].location).toBe(storeLocation);
                        expect(args[0].selectedOptions).toBeDefined();

                        var options = service.workItems.filter(function (i) { return i.isSelected && !i.isShadowItem; })
                            .map(function (i) { return HCTRA.Model.SelectedOptions[i.id]; }).join(',');

                        expect(args[0].selectedOptions).toBe(options);
                    });
            });
            
        });

        it('can start new database session (desktop mode)', function () {
            return service.serviceInitialized.then(function () {
                //arrange
                service['isFullSiteMode'] = true;

                //act
                return service.startNewSession()
                    .then(function () {
                        //assert
                        expect(genericRepo.dataFactory.StartStorefrontDBSession).toHaveBeenCalled();
                        var args = genericRepo.dataFactory.StartStorefrontDBSession.calls.argsFor(0);
                        expect(args[0]).toBeDefined();
                        expect(args[0].location).toBe(storeLocation);
                        expect(args[0].selectedOptions).toBe('WEBST');
                    });
            });

        });

        it('can determine if states are cms content or not', function () {
            return service.serviceInitialized.then(function () {
                var cmsState1 = {
                    controller: "GenericNonSectionalCmsController"
                };

                var cmsState2 = {
                    controller: "GenericSectionalCmsController"
                };

                var regularState = {
                    controller: "anythingelse"
                };

                expect(service.isCmsContent(cmsState1)).toBeTruthy();
                expect(service.isCmsContent(cmsState2)).toBeTruthy();
                expect(service.isCmsContent(regularState)).toBeFalsy();
            });
            
        });

        it('can handle a simulated MAT hand off', function() {
            return service.serviceInitialized.then(function () {
                //arrange
                service.internalWorkItems = [
                    { "DisplayName": "Missed a toll", "completionModal": 0, "dbId": "MTOLL", "uiOrder": 1, "isSkippable": false, "requiresAuthentication": false, "id": 1, "states": ["MissedATollParent.MissedATollLanding", "MissedATollParent.MissedATollBillingInfo", "MissedATollParent.MissedATollViolationInformation", "MissedATollParent.MissedATollConfirmPayment", "MissedATollParent.MissedATollReceipt", "MissedATollParent"], "unavailableWhenSelected": [], "isShadowItem": false }
                ];
                service.addShadowItems(service.internalWorkItems);
                service.internalWorkItems = service.internalWorkItems.sort(function (w1, w2) {
                    return w1.uiOrder - w2.uiOrder;
                });

                var w1 = getWorkItem(1);//MAT
                w1.isSelected = true;

                //act
                return service.startWorkItems()
                    //assert
                    .then(function (initState) {
                        expect(initState).toBe(w1.states[0]); 
                        return service.checkState({ name: initState });
                    })
                    .then(function (result) {
                        expect(service.isWorkflowActive()).toBeTruthy();
                        expect(result.isExternal).toBeFalsy();
                        return service.completeWorkItem();
                    })
                    .then(function (nextState) {
                        expect(nextState).toBeFalsy();
                        expect(storefrontEventHandlers.onCompletedWorkItem).toHaveBeenCalledWith(w1, null);
                    })
                    .catch(function (e) { fail(e); });
            });
            

        });

        it('will unselect work item when calling removeWorkItem and return work item', function () {
            //assemble
            let mockWorkItem = { "DisplayName": "Missed a toll", "completionModal": 0, "dbId": "MTOLL", "uiOrder": 1, "isSkippable": false, "isSelected": true, "requiresAuthentication": false, "id": 1, "states": ["MissedATollParent.MissedATollLanding", "MissedATollParent.MissedATollBillingInfo", "MissedATollParent.MissedATollViolationInformation", "MissedATollParent.MissedATollConfirmPayment", "MissedATollParent.MissedATollReceipt", "MissedATollParent"], "unavailableWhenSelected": [], "isShadowItem": false };
            service.internalWorkItems = [
                mockWorkItem
            ];

            //act
            const result = service.removeWorkItem(1);

            //assert
            expect(result).toBe(mockWorkItem);
            expect(mockWorkItem.isSelected).toBeFalsy();
        });

        it('return undefined if there is no work item to remove', function () {
            //assemble
            let mockWorkItem = { "DisplayName": "Missed a toll", "completionModal": 0, "dbId": "MTOLL", "uiOrder": 1, "isSkippable": false, "isSelected": true, "requiresAuthentication": false, "id": 1, "states": ["MissedATollParent.MissedATollLanding", "MissedATollParent.MissedATollBillingInfo", "MissedATollParent.MissedATollViolationInformation", "MissedATollParent.MissedATollConfirmPayment", "MissedATollParent.MissedATollReceipt", "MissedATollParent"], "unavailableWhenSelected": [], "isShadowItem": false };
            service.internalWorkItems = [
                mockWorkItem
            ];

            //act
            const result = service.removeWorkItem(0);

            //assert
            expect(result).not.toBeDefined();
            expect(mockWorkItem.isSelected).toBeTruthy();
        });

        it('defines all workitem states', function () {

            return service.serviceInitialized
                .then(function () {
                    for (let item of service.workItems.filter(x=> !x.isShadowItem)) {
                        expect(item.states).toBeDefined();
                        expect(item.states.length > 0).toBeTruthy();
                    }
                });

        });
        
    });
}());