/*
declare var hctraMocks: any;

(function () {
    "use strict";

    describe("browserExtensionHandlerService", function () {

        beforeEach(angular.mock.module("HCTRAModule"));

        var service: HCTRA.Service.BrowserExtensionHandlerService,
            state: angular.ui.IState,
            omnitureService: HCTRA.Service.IOmnitureService,
            googleAnalyticsService: HCTRA.Service.IGoogleAnalyticsService;


        beforeEach(function () {
            state = {};
        });

        describe("all files are loaded", function () {

            beforeEach(angular.mock.module(function ($provide: angular.auto.IProvideService) {
                googleAnalyticsService = hctraMocks.googleAnalyticsService();
                omnitureService = hctraMocks.omnitureService();

                $provide.value("omnitureService", omnitureService);
                $provide.value("googleAnalyticsService", googleAnalyticsService);
                $provide.value("errorLogService", hctraMocks.errorLogService());

                spyOn(googleAnalyticsService, "sendTag");
                spyOn(omnitureService, "sendTag");
            }));

            beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {
                service = $injector.get<HCTRA.Service.BrowserExtensionHandlerService>("browserExtensionHandlerService");
                spyOn(service, "errorLogService").and.callFake(hctraMocks.errorLogService());
            }));

            it("should call omniture normally", function () {
                service.sendTag(state, "test string");
                expect(omnitureService.sendTag).toHaveBeenCalledWith(state, "test string");
                expect(googleAnalyticsService.sendTag).toHaveBeenCalledWith("test string");
                expect(service.errorLogService).not.toHaveBeenCalled();
            });
        });



        describe("some files are excluded", function () {
            var injector: angular.auto.IInjectorService;

            beforeEach(angular.mock.module(function ($provide: angular.auto.IProvideService) {
                $provide.value("omnitureService", undefined);
                $provide.value("googleAnalyticsService", hctraMocks.googleAnalyticsService());
                $provide.value("errorLogService", hctraMocks.errorLogService());
            }));

            beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {
                injector = $injector;
                service = injector.get<HCTRA.Service.BrowserExtensionHandlerService>("browserExtensionHandlerService");
            }));

            beforeEach(function () {
                spyOn(service, "errorLogService").and.callFake(hctraMocks.errorLogService());
            });


            it("should error out when calling omniture", function () {
                service.sendTag(state, "test string");
                expect(service.errorLogService).toHaveBeenCalled();
            });

            it("should error out only once when calling omniture many times", function () {
                service.sendTag(state, "test string");
                expect(service.errorLogService.calls.count()).toBe(1);

                service.sendTag(state, "test string");
                expect(service.errorLogService.calls.count()).toBe(1);
            });
        });

    });
} ());
 */