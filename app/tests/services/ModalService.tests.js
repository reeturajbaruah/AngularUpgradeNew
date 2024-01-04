(function() {
    'use strict';

    describe('ModalService',function() {

        let modalService;
        let modalServiceInstance;
        let $q;
        let errorDisplayService;
        let materialDialogService;

        function returnResolved(obj) {
            return $q.resolve(obj);
        }

        beforeEach(angular.mock.module('HCTRAModule'));
        beforeEach(angular.mock.module(function ($provide) {
            materialDialogService = jasmine.createSpyObj('materialDialogService', ['closeAll']);
            modalServiceInstance = jasmine.createSpyObj("modalServiceInstance", ["open"]);
            errorDisplayService = jasmine.createSpyObj('errorDisplayService', ['displayToasts']);
            $provide.value("$uibModal", modalServiceInstance);
            $provide.factory('$q', ['replacementQService', (replacementQService) =>replacementQService]);
            $provide.value('operatingSystemSnifferService', hctraMocks.operatingSystemSnifferService());
            $provide.value('storefrontMaterialDialogWrapper', materialDialogService);
            $provide.value('errorDisplayService', errorDisplayService);
        }));

        beforeEach(angular.mock.inject(function ($injector) {
            $q = $injector.get('$q');
            modalService = $injector.get("modalService");
        }));
        
        it('can create a modal service', function () {
            //assert
            expect(modalService).toBeDefined();
        });

        it('can show a generic modal', function () {
            var modalInstance = jasmine.createSpy("modalInstance", {});
            modalServiceInstance.open.and.returnValue(modalInstance);

            modalInstance.result = returnResolved('ok');
            //act
            modalService.showModal({}, {}, "somemodalname")
                .then(function() {
                    //assert
                    expect(modalServiceInstance.open).toHaveBeenCalled();
                })
                .catch(function() { fail("show not have failed."); });
        });

        it('can show a sliding modal with name parameter default to component name', function () {
            spyOn(modalService, "showModal");
            //Act
            modalService.showSlidingModal('TestComponent', {test: 'test'});
            //Assert
            var expectedDefaults = {
                backdrop: true,
                keyboard: true,
                modalFade: true,
                component: 'TestComponent',
                windowClass: 'side-drawer',
                resolve: {
                    test: 'test'
                }
            };
            expect(modalService.showModal).toHaveBeenCalledTimes(1);
            expect(modalService.showModal).toHaveBeenCalledWith(expectedDefaults, {}, 'TestComponent');
        });

        it('can show a sliding modal with name parameter provided', function () {
            spyOn(modalService, "showModal");
            //Act
            modalService.showSlidingModal('TestComponent', { test: 'test' }, 'ModalName');
            //Assert
            var expectedDefaults = {
                backdrop: true,
                keyboard: true,
                modalFade: true,
                component: 'TestComponent',
                windowClass: 'side-drawer',
                resolve: {
                    test: 'test'
                }
            };
            expect(modalService.showModal).toHaveBeenCalledTimes(1);
            expect(modalService.showModal).toHaveBeenCalledWith(expectedDefaults, {}, 'ModalName');
        });

        it('can suppress vehicle violations modal by default', function () {
            //act
            return modalService.violationsCannotAddVehicleModal()
                .then(function() {
                    //assert
                    expect(modalServiceInstance.open).not.toHaveBeenCalled();
                })
                .catch(function() { fail("show not have failed."); });
        });

        it('can suppress vehicle violations modal after reset', function () {
            //act
            modalService.resetSettings();
            return modalService.violationsCannotAddVehicleModal()
                .then(function () {
                    //assert
                    expect(modalServiceInstance.open).not.toHaveBeenCalled();
                })
                .catch(function () { fail("show not have failed."); });
        });

        it('can track open modals', function () {
            var modalInstance = jasmine.createSpy("modalInstance", {});
            modalServiceInstance.open.and.returnValue(modalInstance);

            //arrange
            modalInstance.result = {
                "catch": function () { },
                "finally": function (callback) {
                    expect(modalService.isModalOpen("mymodal")).toBeTruthy();
                    callback();
                    expect(modalService.isModalOpen("mymodal")).toBeFalsy();
                }
            };
            //assert
            expect(modalService.isModalOpen("mymodal")).toBeFalsy();
            modalService.showModal({}, {}, "mymodal");
        });

        it('can allow listeners to watch modals opening', function () {
            //arrange
            var modalInstance = jasmine.createSpy("modalInstance", {});
            modalServiceInstance.open.and.returnValue(modalInstance);
            modalInstance.result = returnResolved();

            var listener = jasmine.createSpy("listener", function() {});
            modalService.onOpening(listener);

            //act
            return modalService.showModal({}, {}, "mymodal")
                .then(function () {
                    //assert
                    expect(listener).toHaveBeenCalled();
                    var args = listener.calls.argsFor(0);
                    expect(args[1]).toBe('mymodal');
                })
                .catch(function () { fail("show not have failed."); });
        });

        it('can allow listeners to cancel modals opening', function () {
            //arrange
            var modalInstance = jasmine.createSpy("modalInstance", {});
            modalServiceInstance.open.and.returnValue(modalInstance);
            modalInstance.result = returnResolved();

            var listener = jasmine.createSpy("listener", function () {});
            listener.and.callFake(function(evt) {
                //cancel modal
                evt.preventDefault();
            });

            modalService.onOpening(listener);

            //act
            return modalService.showModal({}, {}, "mymodal")
                .then(function () {
                    //assert
                    expect(modalServiceInstance.open).not.toHaveBeenCalled();
                })
                .catch(function () { fail("should not have failed."); });
        });

        it('can clear all listeners', function() {
            //arrange
            var modalInstance = jasmine.createSpy("modalInstance", {});
            modalServiceInstance.open.and.returnValue(modalInstance);
            modalInstance.result = returnResolved();

            var listener = jasmine.createSpy("listener", function () { });
            
            //act
            modalService.onOpening(listener);
            modalService.clearListeners();
            return modalService.showModal({}, {}, "mymodal")
                .then(function() {
                    //assert
                    expect(listener).not.toHaveBeenCalled();
                });
        });

        it('clears before resetting', function() {
            //arrange
            spyOn(modalService, "clearListeners");

            //act
            modalService.resetSettings();

            //assert
            expect(modalService.clearListeners).toHaveBeenCalled();
        });

        it('can close all modals', function() {
            //arrange
            modalServiceInstance.open.and.callFake(function(notUsed1, notUsed2, name) {
                var modalInstance = jasmine.createSpyObj("modalInstance " + name, ["close", "dismiss"]);
                modalInstance.dismiss.and.callFake(function () {
                    fail('should not have called dismiss');
                });

                modalInstance.result = {
                    "catch": function () { },
                    "finally": function() {
                        //stop from deleting reference on flush
                    }
                };
                return modalInstance;
            });

            //assert
            expect(modalService.isModalOpen("mymodal1")).toBeFalsy();
            expect(modalService.isModalOpen("mymodal2")).toBeFalsy();
            expect(modalService.isModalOpen("mymodal3")).toBeFalsy();

            modalService.showModal({}, {}, "mymodal1");
            modalService.showModal({}, {}, "mymodal2");
            modalService.showModal({}, {}, "mymodal3");
       
            expect(modalService.isModalOpen("mymodal1")).toBeTruthy();
            expect(modalService.isModalOpen("mymodal2")).toBeTruthy();
            expect(modalService.isModalOpen("mymodal3")).toBeTruthy();
            modalService.closeAll();
            expect(modalService.isModalOpen("mymodal1")).toBeFalsy();
            expect(modalService.isModalOpen("mymodal2")).toBeFalsy();
            expect(modalService.isModalOpen("mymodal3")).toBeFalsy();

        });

        it('can dismiss all modals', function () {
            //arrange
            modalServiceInstance.open.and.callFake(function (notUsed1, notUsed2, name) {
                var modalInstance = jasmine.createSpyObj("modalInstance " + name, ["close", "dismiss"]);
                modalInstance.close.and.callFake(function() {
                    fail('should not have called close');
                });
                modalInstance.result = {
                    "catch": function () { },
                    "finally": function () {
                        //stop from deleting reference on flush
                    }
                };
                return modalInstance;
            });

            //assert
            expect(modalService.isModalOpen("mymodal1")).toBeFalsy();
            expect(modalService.isModalOpen("mymodal2")).toBeFalsy();
            expect(modalService.isModalOpen("mymodal3")).toBeFalsy();

            modalService.showModal({}, {}, "mymodal1");
            modalService.showModal({}, {}, "mymodal2");
            modalService.showModal({}, {}, "mymodal3");

            expect(modalService.isModalOpen("mymodal1")).toBeTruthy();
            expect(modalService.isModalOpen("mymodal2")).toBeTruthy();
            expect(modalService.isModalOpen("mymodal3")).toBeTruthy();
            modalService.closeAll(true);
            expect(modalService.isModalOpen("mymodal1")).toBeFalsy();
            expect(modalService.isModalOpen("mymodal2")).toBeFalsy();
            expect(modalService.isModalOpen("mymodal3")).toBeFalsy();

        });


        it('can close a modal by name', function() {
            //arrange
            var modalInstance = jasmine.createSpyObj("modalInstance", ["close", "dismiss"]);
            modalInstance.result = $q(function (resolve, reject) {
                modalInstance.close.and.callFake(function () {
                    resolve();
                });
                modalInstance.dismiss.and.callFake(function () {
                    reject();
                    fail("dismiss should not have been called");
                });
            });

            modalServiceInstance.open.and.callFake(function () {
                return modalInstance;
            });
            
            //assert
            expect(modalService.isModalOpen("mymodal1")).toBeFalsy();
            modalService.showModal({}, {}, "mymodal1");
            expect(modalService.isModalOpen("mymodal1")).toBeTruthy();
            modalService.closeByName("mymodal1");
            expect(modalInstance.close).toHaveBeenCalled();
            expect(modalInstance.dismiss).not.toHaveBeenCalled();
            expect(modalService.isModalOpen("mymodal1")).toBeFalsy();
        });

        it('can dismiss a modal by name', function () {
            //arrange
            var modalInstance = jasmine.createSpyObj("modalInstance", ["close", "dismiss"]);
            modalInstance.result = $q(function (resolve, reject) {
                modalInstance.close.and.callFake(function () {
                    resolve();
                    fail("close should not have been called");
                });
                modalInstance.dismiss.and.callFake(function () {
                    reject();
                });
            });

            modalServiceInstance.open.and.callFake(function () {
                return modalInstance;
            });

            //assert
            expect(modalService.isModalOpen("mymodal1")).toBeFalsy();
            modalService.showModal({}, {}, "mymodal1");
            expect(modalService.isModalOpen("mymodal1")).toBeTruthy();
            modalService.closeByName("mymodal1", true);
            expect(modalInstance.dismiss).toHaveBeenCalled();
            expect(modalInstance.close).not.toHaveBeenCalled();
            expect(modalService.isModalOpen("mymodal1")).toBeFalsy();
        });
    });
})();