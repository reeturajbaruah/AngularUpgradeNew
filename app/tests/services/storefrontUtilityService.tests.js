((function () {
    'use strict';
    describe('StorefrontUtilityService', function () {
        beforeEach(angular.mock.module('HCTRAModule'));
        var userAgent1 = "Mozilla/5.0 (Windows NT 6.1; Win64; x64; HCTRA.Storefront TNO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36";
        var userAgent2 = "Mozilla/5.0 (Windows NT 6.1; Win64; x64;) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36";
        var userAgent3 = "Mozilla/5.0 (Windows NT 6.1; Win64; x64; HCTRA.Storefront TNO UaMachineName) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36";
        var userAgent4 = "Mozilla/5.0 (Windows NT 6.1; Win64; x64; HCTRA.Storefront TNO -kapi) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36";
        var service;
        var $q;
        describe("Storefront User agent - no machine name no flag", function () {
            beforeEach(angular.mock.module(function ($provide) {
                $provide.constant("environmentConfig", { storefrontConfigs: { DefaultMachineName: "-default" } });
                $provide.value("$window", {
                    navigator: {
                        userAgent: userAgent1
                    },
                    external: {
                        getKioProperty : function(arg) {
                            return arg === "Kiosk" && "MachineNameClassic";
                        }
                    }
                });
            }));
            beforeEach(angular.mock.inject(function ($injector) {
                service = $injector.get('StorefrontUtilityService');
                $q = $injector.get('$q');
            }));
            it('should set to in storefront mode with proper user agent string', function () {
                expect(service.isRunningAsKiosk).toBeTruthy();
                expect(service.storefrontLocation).toBe(1);
                expect(service.machineName).toBe("-default");
            });
        });

        describe("Storefront User agent - no machine name with flag", function () {
            beforeEach(angular.mock.module(function ($provide) {
                $provide.constant("environmentConfig", { storefrontConfigs: { DefaultMachineName: "-default" } });
                $provide.value("$window", {
                    navigator: {
                        userAgent: userAgent4
                    },
                    external: {
                        getKioProperty: function (arg) {
                            return arg === "Kiosk" && "MachineNameClassic";
                        }
                    }
                });
            }));
            beforeEach(angular.mock.inject(function ($injector) {
                service = $injector.get('StorefrontUtilityService');
            }));
            it('should set to in storefront mode with proper user agent string', function () {
                expect(service.isRunningAsKiosk).toBeTruthy();
                expect(service.storefrontLocation).toBe(1);
                expect(service.machineName).toBe("MachineNameClassic");
            });
        });

        describe("Storefront User agent - no machine name2 no flag", function () {
            beforeEach(angular.mock.module(function ($provide) {
                $provide.constant("environmentConfig", { storefrontConfigs: { DefaultMachineName: "-default" } });
                $provide.value("$window", {
                    navigator: {
                        userAgent: userAgent1
                    },
                    KioApp: {
                        DoUrlSubstitution: function (arg) {
                            return arg === "$$KIO_COMPUTERNAME$$" && "MachineName";
                        }
                    }
                });
            }));
            beforeEach(angular.mock.inject(function ($injector) {
                service = $injector.get('StorefrontUtilityService');
            }));
            it('should set to in storefront mode with proper user agent string', function () {
                expect(service.isRunningAsKiosk).toBeTruthy();
                expect(service.storefrontLocation).toBe(1);
                expect(service.machineName).toBe("-default");
            });
        });

        describe("Storefront User agent - no machine name2 with flag", function () {
            beforeEach(angular.mock.module(function ($provide) {
                $provide.constant("environmentConfig", { storefrontConfigs: { DefaultMachineName: "-default" } });
                $provide.value("$window", {
                    navigator: {
                        userAgent: userAgent4
                    },
                    KioApp: {
                        DoUrlSubstitution: function (arg) {
                            return arg === "$$KIO_COMPUTERNAME$$" && "MachineName";
                        }
                    }
                });
            }));
            beforeEach(angular.mock.inject(function ($injector) {
                service = $injector.get('StorefrontUtilityService');
            }));
            it('should set to in storefront mode with proper user agent string', function () {
                expect(service.isRunningAsKiosk).toBeTruthy();
                expect(service.storefrontLocation).toBe(1);
                expect(service.machineName).toBe("MachineName");
            });
        });

        describe("Storefront User agent - with machine name", function () {
            
            beforeEach(angular.mock.module(function ($provide) {
                $provide.constant("environmentConfig", { storefrontConfigs: { DefaultMachineName: "-default" } });
                $provide.value("$window", {
                    navigator: {
                        userAgent: userAgent3
                    }
                });
            }));
            beforeEach(angular.mock.inject(function ($injector) {
                service = $injector.get('StorefrontUtilityService');
            }));
            it('should set to in storefront mode with proper user agent string', function () {
                expect(service.isRunningAsKiosk).toBeTruthy();
                expect(service.storefrontLocation).toBe(1);
                expect(service.machineName).toBe("UaMachineName");
            });
        });

        describe("Non-storefront User agent", function () {
            beforeEach(angular.mock.module(function ($provide) {
                $provide.value("$window", {
                    navigator: {
                        userAgent: userAgent2
                    }
                });
            }));
            beforeEach(angular.mock.inject(function ($injector) {
                service = $injector.get('StorefrontUtilityService');
            }));
            it('should not be in storefront mode', function () {
                expect(service.isRunningAsKiosk).toBeFalsy();
                expect(service.storefrontLocation).toBeUndefined();
            });
        });

        describe("locking tests",function() {
            beforeEach(angular.mock.module(function($provide) {
                $provide.factory("$q",
                    [
                        "$window", function($window) {
                            return $window["Promise"];
                        }
                    ]);
            }));
            beforeEach(angular.mock.inject(function($injector) {
                service = $injector.get('StorefrontUtilityService');
                $q = $injector.get('$q');
            }));

            it('can lock state changing',
                function() {
                    expect(service.stateChangingRestricted).toBeFalsy();
                    return service.lockStateChanging(function() {
                        expect(service.stateChangingRestricted).toBeTruthy();
                        return $q.resolve();
                    }).finally(function() {
                        expect(service.stateChangingRestricted).toBeFalsy();
                    });

                });
        });
    });
})());