/*
(() => {
    'use strict';

    describe('httpFactory', () => {
        
        let service;
        const $http = {
            defaults: {
                headers: {
                    common: {}
                }
            }
        };
        const siteVerbiage = {};
        const $state = {};
        const responseErrorService = {};
        const stateNames = {};
        let serverConstants;
        const toggleButtonsService = {};
        const operatingSystemSnifferService = {

            getOS: (() => { }) as (() => any),
            isDesktopOs: () => { return false; }
        };
        const storefrontUtilityService = {
            isRunningAsKiosk: false
        };

        beforeEach(angular.mock.module('HCTRAModule'));


        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

            serverConstants = {
                appNameHeaderKey: "Mock App Header Key",
                appNameWebsiteStorefrontHeaderValue: "Mock App Name Website Storefront",
                appNameWebsiteDesktopHeaderValue: "Mock App Name Website Desktop",
                appNameWebsiteMobileHeaderValue: "Mock App Name Website Mobile",
                versionHeaderKey: "Mock Version Header Key",
                currentlyDownloadedWebUiVersion: "0.1.2.3.4.5"

            };

            $provide.value("$http", $http);
            $provide.value("siteVerbiage", siteVerbiage);
            $provide.value("$state", $state);
            $provide.value("responseErrorService", responseErrorService);
            $provide.value("stateNames", stateNames)
            $provide.value("serverConstants", serverConstants);
            $provide.value("toggleButtonsService", toggleButtonsService);
            $provide.value("operatingSystemSnifferService", operatingSystemSnifferService);
            $provide.value("StorefrontUtilityService", storefrontUtilityService);
        }));

        beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {
            service = $injector.get('httpFactory');
        }));

        describe("canary", () => {

            it("should pass", () => {
                expect(true).toBe(true);
            });
        });

        describe("constructor\init", () => {

            it("should set appNameHeaderKey and versionHeaderKey for $http.defaults.headers.common", () => {

                expect($http.defaults.headers.common["Mock App Header Key"]).toContain("Mock App Name Website");
                expect($http.defaults.headers.common["Mock Version Header Key"]).toBe("0.1.2");
            });

            it("should call operatingSystemSnifferService.getOS then operatingSystemSnifferService.isDesktopOs()", () => {

                const calls = [];

                spyOn(operatingSystemSnifferService, "getOS").and.callFake(() => calls.push("getOS"));
                spyOn(operatingSystemSnifferService, "isDesktopOs").and.callFake(() => calls.push("isDesktopOs") as any);

                service.init();

                expect(calls).toEqual(["getOS", "isDesktopOs"]);

                expect(operatingSystemSnifferService.getOS).toHaveBeenCalledTimes(1);
                expect(operatingSystemSnifferService.isDesktopOs).toHaveBeenCalledTimes(1);
            });

            [
                { isRunningAsKiosk: false, isDesktop: false, appNameHeaderKey: "Mock App Name Website Mobile" },
                { isRunningAsKiosk: false, isDesktop: true, appNameHeaderKey: "Mock App Name Website Desktop" },
                { isRunningAsKiosk: true, isDesktop: false, appNameHeaderKey: "Mock App Name Website Storefront" },
                { isRunningAsKiosk: true, isDesktop: true, appNameHeaderKey: "Mock App Name Website Storefront" }
            ].forEach(({ isRunningAsKiosk, isDesktop, appNameHeaderKey }) => {
                
                it(`should set appNameHeaderKey to ${appNameHeaderKey} when isRunningKiosk: ${isRunningAsKiosk} and isDesktop(): ${isDesktop}`, () => {

                    storefrontUtilityService.isRunningAsKiosk = isRunningAsKiosk;
                    spyOn(operatingSystemSnifferService, "isDesktopOs").and.returnValue(isDesktop);

                    service.init();

                    expect($http.defaults.headers.common["Mock App Header Key"]).toBe(appNameHeaderKey);
                });

            });

            [
                ["0.1.2.3.4.5", "0.1.2"],
                ["x.t.a.b.t.u", "x.t.a"],
                ["@.$.,.%.^.)", "@.$.,"]
            ].forEach(([currentlyDownloadedWebUiVersion, expected]) => {

                it(`should set versionHeaderKey to ${expected} when currentlyDownloadedWebUiVersion is ${currentlyDownloadedWebUiVersion}}`, () => {

                    serverConstants.currentlyDownloadedWebUiVersion = currentlyDownloadedWebUiVersion;

                    service.init();

                    expect($http.defaults.headers.common["Mock Version Header Key"]).toBe(expected);
                });

            });

        });
    });
})();
*/