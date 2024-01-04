(function () {
    'use strict';

    describe('StorefrontModalService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        let service;
        let storefrontService;
        let $state;
        let modalService;
        let stateNames;
        let $q;
        let $timeout;
        let materialDialogService;
        let cavveStates;
        let addMissingInformationService;
        let errorDisplayService;

        function returnResolved(obj) {
            return $q.resolve(obj);
        }

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        beforeEach(angular.mock.module(function ($provide) {
            try {
                storefrontService = jasmine.createSpyObj("storefrontService", [
                    "getCmsItemById",
                    "isActiveSession",
                    "reset",
                    "startNewSession",
                    "hasIncompleteWorkItems",
                    "getWorkItemInitState",
                    "lockStateChanging",
                    "removeWorkItem"
                ]);

                materialDialogService = jasmine.createSpyObj('storefrontMaterialDialogWrapper', ['closeAll']);
                addMissingInformationService = jasmine.createSpyObj('addMissingInformationService', ['destroyMissingInformationFlags']);
                storefrontService.fullSiteMode = false;
                storefrontService.lockStateChanging.and.callFake(function(f) { return f(); });
                $state = jasmine.createSpyObj("$state", ["go"]);
                modalService = jasmine.createSpyObj("modalService", ["showModal", "onOpening", "resetSettings", "clearListeners", 'closeAll']);
                $timeout = jasmine.createSpy("$timeout", function() { });
                errorDisplayService = jasmine.createSpyObj('errorDisplayService', ['clearToasts']);
                
                $provide.factory("$q", ["replacementQService", function (replacementQService) {
                    return replacementQService;
                }]);

                $provide.value("$timeout", $timeout);
                $provide.value("modalService", modalService);
                $provide.value("$state", $state);
                $provide.value("StorefrontService", storefrontService);
                $provide.value('storefrontMaterialDialogWrapper', materialDialogService);
                $provide.value('addMissingInformationService', addMissingInformationService);
                $provide.value('errorDisplayService', errorDisplayService);
            } catch (e) {
                fail(e);
            }
        }));

        beforeEach(angular.mock.inject(function ($injector) {
            try {                
                stateNames = $injector.get('stateNames');
                cavveStates = $injector.get('cavveStates');
                $q = $injector.get('$q');
                service = $injector.get("StorefrontModalService");
            } catch (e) {
                fail(e);
            }
        }));

        it('can instanciate a new service', function () {
            expect(service).toBeDefined();
        });

        it('closes all angular material dialogs', function () {
            service.closeAll();
            expect(materialDialogService.closeAll).toHaveBeenCalled();
        });

        it('can call survey from after exiting full site mode',function() {
            //arrange
            storefrontService.getCmsItemById.and.returnValue(returnResolved({
                Title: "title", 
                Message: "Message", 
                buttons: {
                    "EXIT": "exit", 
                    "STAY": "stay"
                }
            }));

            storefrontService.fullSiteMode = true;
            storefrontService.isActiveSession.and.returnValue(true);
            modalService.showModal.and.returnValue(returnResolved("exit"));
            $state.go.and.returnValue(returnResolved());
            //act
            service.exit()
                .then(function() {
                    //assert
                    
                    expect(storefrontService.fullSiteMode).toBe(false);
                    expect($state.go).toHaveBeenCalledWith(stateNames.storefrontSurvey);
                })
                .catch(function(e) {
                    fail(e);
                });
        });

        it('does not call survey if not in fullsite mode and session has not started yet', function () {
            //arrange
            storefrontService.getCmsItemById.and.returnValue(returnResolved({
                Title: "title",
                Message: "Message",
                buttons: {
                    "EXIT": "exit",
                    "STAY": "stay"
                }
            }));

            storefrontService.fullSiteMode = false;
            storefrontService.isActiveSession.and.returnValue(false);
            modalService.showModal.and.returnValue(returnResolved("exit"));

            //act
            service.exit()
                .then(function () {
                    //assert
                    expect(storefrontService.startNewSession).not.toHaveBeenCalled();
                    expect(storefrontService.reset).toHaveBeenCalled();
                })
                .catch(function (e) {
                    fail(e);
                });
        });

        it('opens custom modal when user opens a new account', function() {
            //arrage
            var workItem = {
                completionModal : 1
            };

            var postSignupSpy = spyOn(service, "postSignup").and.returnValue(returnResolved());
            storefrontService.getCmsItemById.and.returnValue(returnResolved({
                buttons : {
                    "NEXT": "next"
                }
            }));
            modalService.showModal.and.returnValue(returnResolved("finish"));
            var createModalSpy = spyOn(service, "create").and.callThrough();

            //act
            service
                .showCompletionMessage(workItem)
                .then(function() {
                    //assert
                    expect(createModalSpy).not.toHaveBeenCalledWith("WorkitemComplete");
                    expect(postSignupSpy).toHaveBeenCalled();
                })
                .catch(function(e) {
                    fail(e);
                });
        });

        it('restricted modal gets registered on setGlobalModalSettings', function () {
            //Act
            service.setGlobalModalSettings();
            
            //Assert
            expect(modalService.onOpening).toHaveBeenCalledTimes(2);
            expect(modalService.onOpening.calls.argsFor(1)[0]).toBe(service.blockModalsInRestrictedState);
        });

        it('restricted modal gets registered on restoreGlobalModalSettings', function () {
            //Act
            service.restoreGlobalModalSettings();

            //Assert
            expect(modalService.onOpening).toHaveBeenCalledTimes(1);
            expect(modalService.onOpening.calls.argsFor(0)[0]).toBe(service.blockModalsInRestrictedState);
        });

        it('preventDefault is called when in restrictedState and name is not in storefrontModalServiceModalNames', function () {
            //Arrange
            storefrontService.stateChangingRestricted = true;
            service.storefrontModalServiceModalNames = {};
            var mockEvent = { preventDefault: function () { return true; } };
            spyOn(mockEvent, 'preventDefault');

            //Act
            service.blockModalsInRestrictedState(mockEvent, "testName");

            //Assert
            expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);

        });

        it('preventDefault is not called when not in restrictedState', function () {
            //Arrange
            storefrontService.stateChangingRestricted = false;
            service.storefrontModalServiceModalNames = {};
            var mockEvent = { preventDefault: function() { return true; } };
            spyOn(mockEvent, 'preventDefault');

            //Act
            service.blockModalsInRestrictedState(mockEvent, "testName");

            //Assert
            expect(mockEvent.preventDefault).toHaveBeenCalledTimes(0);

        });

        it('preventDefault is not called when name is in storefrontModalServiceModalNames', function () {
            //Arrange
            storefrontService.stateChangingRestricted = true;
            service.storefrontModalServiceModalNames = {testName: "testName"};
            const mockEvent = { preventDefault: function () { return true; } };
            spyOn(mockEvent, 'preventDefault');

            //Act
            service.blockModalsInRestrictedState(mockEvent, "testName");

            //Assert
            expect(mockEvent.preventDefault).toHaveBeenCalledTimes(0);

        });

        it('opens postCAVVESignup if in CAVVE flow and removes Create Account work Item', function () {
            //arrage
            let workItem = {
                completionModal: 0
            };
            storefrontService.removeWorkItem.and.returnValue({});

            $state.current = {
                name: cavveStates.Receipt
            };

            storefrontService.getWorkItemInitState.and.returnValue("random state");
            let postCAVVESignup = spyOn(service, "postCAVVESignup").and.returnValue(returnResolved());
            let postSignup = spyOn(service, "postSignup").and.returnValue(returnResolved());
            storefrontService.getCmsItemById.and.returnValue(returnResolved({
                buttons: {
                    "NEXT": "next"
                }
            }));
            modalService.showModal.and.returnValue(returnResolved("finish"));
            let createModalSpy = spyOn(service, "create").and.callThrough();

            //act
            return service
                .showCompletionMessage(workItem)
                .then(function () {
                    //assert
                    expect(createModalSpy).not.toHaveBeenCalledWith("WorkitemComplete");
                    expect(postCAVVESignup).toHaveBeenCalled();
                    expect(postSignup).not.toHaveBeenCalled();
                    expect(storefrontService.removeWorkItem).toHaveBeenCalledTimes(1);
                    expect(storefrontService.removeWorkItem).toHaveBeenCalledWith(3);
                })
                .catch(function (e) {
                    fail(e);
                });
        });

        it('opens postSignup if in CAVVE flow and does not remove Create Account work item', function () {
            //arrage
            let workItem = {
                completionModal: 0
            };
            storefrontService.removeWorkItem.and.returnValue(null);

            $state.current = {
                name: cavveStates.Receipt
            };

            storefrontService.getWorkItemInitState.and.returnValue("random state");
            let postCAVVESignup = spyOn(service, "postCAVVESignup").and.returnValue(returnResolved());
            let postSignup = spyOn(service, "postSignup").and.returnValue(returnResolved());
            storefrontService.getCmsItemById.and.returnValue(returnResolved({
                buttons: {
                    "NEXT": "next"
                }
            }));
            modalService.showModal.and.returnValue(returnResolved("finish"));
            let createModalSpy = spyOn(service, "create").and.callThrough();

            //act
            return service
                .showCompletionMessage(workItem)
                .then(function () {
                    //assert
                    expect(createModalSpy).not.toHaveBeenCalledWith("WorkitemComplete");
                    expect(postCAVVESignup).not.toHaveBeenCalled();
                    expect(postSignup).toHaveBeenCalled();
                    expect(storefrontService.removeWorkItem).toHaveBeenCalledTimes(1);
                    expect(storefrontService.removeWorkItem).toHaveBeenCalledWith(3);
                })
                .catch(function (e) {
                    fail(e);
                });
        });

        it('destroys add missing information data on force go to survey', function () {

            $state.go.and.returnValue(returnResolved());

            return service.forceGoToSurvey()
                .then(function () {
                    expect(addMissingInformationService.destroyMissingInformationFlags).toHaveBeenCalled();
                })
                .catch(function (e) {
                    fail(e);
                });

        });
                
    });
}());