/*
declare var hctraMocks: any;

(function () {
    "use strict";

    describe("GoogleAnalyticsService", function () {

        beforeEach(angular.mock.module("HCTRAModule"));

        var envConfig,
            //_location,
            _window,
            _injector: angular.auto.IInjectorService;

        beforeEach(angular.mock.module(function ($provide: angular.auto.IProvideService) {

            envConfig = {
                googleAnalyticsID: "12345"
            };

//            _location = {
//                myPath: "path",
//                path: function () {
//                    return this.myPath;
//                }
//            };

            _window = {
                gtag: function () { },
                dataLayer: []
            }

            $provide.constant("environmentConfig", envConfig);
            $provide.value("$window", _window);
            $provide.value("$location", hctraMocks.$location({testPath : "path"}));

        }));

        beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {
            _injector = $injector;
        }));

        it("should  not add event if environmentConfig.googleAnalyticsID set to empty string from beginning as script is not loaded", function () {

            envConfig.googleAnalyticsID = "";

            let service = _injector.get<HCTRA.Service.GoogleAnalyticsService>("googleAnalyticsService");

            service.sendTag();

            expect(_window.dataLayer.length).toBe(0);
        });

        it("should not add event if environmentConfig.googleAnalyticsID set to empty string after init as script is loaded bt googleAnalyticsID is empty", function () {

            let service = _injector.get<HCTRA.Service.GoogleAnalyticsService>("googleAnalyticsService");

            envConfig.googleAnalyticsID = "";

            service.sendTag();

            expect(_window.dataLayer.length).toBe(2);
        });

        it("should call GA once if environmentConfig.googleAnalyticsID set to value", function () {

            let service = _injector.get<HCTRA.Service.GoogleAnalyticsService>("googleAnalyticsService");

            service.sendTag();

            // 2 extra event by default from GA
            expect(_window.dataLayer.length).toBe(3);
        });

        it("should add event in the datalayer", function () {

            let service = _injector.get<HCTRA.Service.GoogleAnalyticsService>("googleAnalyticsService");

            service.sendTag('suffix');
            // 2 extra event by default from GA
            expect(_window.dataLayer.length).toBe(3);
        });

    });
} ());
*/