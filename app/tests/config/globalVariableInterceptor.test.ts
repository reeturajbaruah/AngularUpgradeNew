describe("GlobalVariableInterceptor tests", () => {

    let service;
    let CurrentUser;
    let $rootScope: HCTRA.Service.IHctraRootScopeService;
    let webStorage: HCTRA.Service.IWebStorageService;
    let webStorageConst: HCTRA.Constant.IWebStorageConst;
    let serverConstants: HCTRA.Constant.ServerConstants;

    let response;

    beforeEach(angular.mock.module('HCTRAModule'));

    beforeEach(angular.mock.inject(($injector) => {
        CurrentUser = jasmine.createSpyObj("CurrentUser", ["updateCurrentUser", "getCurrentUser"]);
        $rootScope = $injector.get("$rootScope");
        webStorage = jasmine.createSpyObj("webStorage", ["setKeyValue", "removeEntry"]);
        webStorageConst = $injector.get("webStorageConst");
        serverConstants = $injector.get("serverConstants");

        service = new HCTRA.Service.GlobalVariableInterceptor(
            CurrentUser,
            $rootScope,
            webStorage,
            webStorageConst,
            serverConstants
        );

    }));

    describe("response", () => {
        beforeEach(() => {
            (webStorage.removeEntry as jasmine.Spy).and.callThrough();
            (webStorage.setKeyValue as jasmine.Spy).and.callThrough();
        });

        it("response data should trigger and provoke all update", () => {
            response = {
                data: {
                    currentBalanceObj: {
                        currentBalance: 20
                    },
                    currentPaymentPlanBalanceObj:
                    {
                        currentBalance: 20
                    }
                },
                headers: () => {
                    return "WEBUIVersion";
                }
            };
            (CurrentUser.updateCurrentUser as jasmine.Spy).and.callThrough();
            (CurrentUser.getCurrentUser as jasmine.Spy).and.returnValue(
                {
                    currentBalanceObj: {
                        currentBalance: 20
                    }
                }
            );
            service.response(response);
            expect(service.$rootScope.currentBalance).toEqual(20);
            expect(CurrentUser.getCurrentUser).toHaveBeenCalledTimes(2);
            expect(CurrentUser.getCurrentUser).toHaveBeenCalledTimes(2);
        });

        it("response data should trigger and update currentBalanceObj ", () => {
            response = {
                data: {
                    currentBalanceObj: {
                        currentBalance: 20
                    }
                },
                headers: () => {
                    return "WEBUIVersion";
                }
            };

            
            (CurrentUser.getCurrentUser as jasmine.Spy).and.returnValue(
                {
                    currentBalanceObj: {
                        currentBalance: 21
                    }
                }
            );
            (CurrentUser.updateCurrentUser as jasmine.Spy).and.callThrough();
            service.response(response);
            expect(service.$rootScope.currentBalance).toEqual(20);
            expect(CurrentUser.updateCurrentUser).toHaveBeenCalledTimes(1);
            expect(CurrentUser.getCurrentUser).toHaveBeenCalledTimes(1);
        });

        it("response data should return even if currentUser not available ", () => {
            response = {
                data: {
                    currentBalanceObj: {
                        currentBalance: 20
                    }
                },
                headers: () => {
                    return "WEBUIVersion";
                }
            };


            (CurrentUser.getCurrentUser as jasmine.Spy).and.returnValue(null);
            (CurrentUser.updateCurrentUser as jasmine.Spy).and.callThrough();
            const result = service.response(response);
            expect(result).toEqual(response);
        });

        it("response data NOT should trigger since currentBalanceObj.currentBalance is null ", () => {
            response = {
                data: {
                    currentBalanceObj: {
                        currentBalance: null
                    }
                },
                headers: () => {
                    return "WEBUIVersion";
                }
            };
            (CurrentUser.getCurrentUser as jasmine.Spy).and.returnValue(
                {
                    currentBalanceObj: {
                        currentBalance: 20
                    }
                }
            );
            (CurrentUser.updateCurrentUser  as jasmine.Spy).and.callThrough();
            service.response(response);
            expect(CurrentUser.updateCurrentUser).toHaveBeenCalledTimes(0);
            expect(CurrentUser.getCurrentUser).toHaveBeenCalledTimes(0);
        });


        it("response data should trigger and update currentPaymentPlanBalanceObj ", () => {
            response = {
                data: {
                    currentPaymentPlanBalanceObj:
                    {
                        currentBalance: 20
                    }
                },
                headers: () => {
                    return "WEBUIVersion";
                }
            };

            (CurrentUser.getCurrentUser as jasmine.Spy).and.returnValue(
                {
                    currentBalanceObj: {
                        currentBalance: 20
                    }
                }
            );
            (CurrentUser.updateCurrentUser  as jasmine.Spy).and.callThrough();
            service.response(response);
            expect(service.$rootScope.currentBalance).toBeUndefined();
            expect(webStorage.removeEntry).toHaveBeenCalledTimes(0);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
            expect(CurrentUser.updateCurrentUser).toHaveBeenCalledTimes(1);
            expect(CurrentUser.getCurrentUser).toHaveBeenCalledTimes(1);
        });

        it("response data should NOT trigger since currentPaymentPlanBalanceObj.currentBalance is NULL  ", () => {
            response = {
                data: {
                    currentPaymentPlanBalanceObj:
                    {
                        currentBalance: null
                    }
                },
                headers: () => {
                    return "WEBUIVersion";
                }
            };

            (CurrentUser.getCurrentUser as jasmine.Spy).and.returnValue(
                {
                    currentBalanceObj: {
                        currentBalance: 20
                    }
                }
            );
            (CurrentUser.updateCurrentUser  as jasmine.Spy).and.callThrough();
            service.response(response);
            expect(service.$rootScope.currentBalance).toBeUndefined();
            expect(webStorage.removeEntry).toHaveBeenCalledTimes(1);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(0);
            expect(CurrentUser.updateCurrentUser).toHaveBeenCalledTimes(1);
            expect(CurrentUser.getCurrentUser).toHaveBeenCalledTimes(1);
        });

        it("nothing should be call if data have no return values ", () => {
            response = {
                headers: () => {
                    return "WEBUIVersion";
                }
            };

            (CurrentUser.getCurrentUser as jasmine.Spy).and.returnValue(
                {
                    currentBalanceObj: {
                        currentBalance: 20
                    }
                }
            );
            (CurrentUser.updateCurrentUser as jasmine.Spy).and.callThrough();
            service.response(response);
            expect(service.$rootScope.currentBalance).toBeUndefined();
            expect(webStorage.removeEntry).toHaveBeenCalledTimes(0);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(0);
            expect(CurrentUser.updateCurrentUser).toHaveBeenCalledTimes(0);
            expect(CurrentUser.getCurrentUser).toHaveBeenCalledTimes(0);
        });
    });
});