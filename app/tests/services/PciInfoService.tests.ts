/*
declare var hctraMocks: any;

(function () {
    "use strict";

    describe("PciInfoService", function () {

        beforeEach(angular.mock.module("HCTRAModule"));

        var service: HCTRA.Service.PciInfoService,
            $rootScope: angular.IRootScopeService,
            $q: angular.IQService;

        beforeEach(angular.mock.module(function ($provide: angular.auto.IProvideService) {
            $provide.value("vantivPaymentService", hctraMocks.vantivPaymentService());
        }));

        beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {
            service = $injector.get<HCTRA.Service.PciInfoService>("pciInfoService");
            
        }));

        beforeEach(angular.mock.inject(function (_$rootScope_: angular.IRootScopeService, _$q_: angular.IQService) {
            $rootScope = _$rootScope_;
            $q = _$q_;
        }));

        describe("non-array input", () => {

            it("should resolve a single object w/ values returned by vantivPay", function (done) {

                vantivPayValue({
                    lastFour: "1234",
                    paypageRegistrationId: "qwerty"
                });

                service.registerCard("4111111111111234").then((res: HCTRA.Model.VantivDto) => {

                    expect(res.lastFour).toBe("1234");
                    expect(res.paypageRegistrationId).toBe("qwerty");

                    expect(service.vantivPaymentService.vantivPay).toHaveBeenCalled();

                    done();
                });

                $rootScope.$apply();
            });

            it("should resolve with last four of masked value and undefined paypageRegistrationId", function (done) {

                // we expect this to be ignored if input is masked or is 4 digits
                vantivPayValue({
                    lastFour: "5555",
                    paypageRegistrationId: "asdfghj"
                });

                service.registerCard("************-1234").then((res) => {

                    expect((<HCTRA.Model.VantivDto>res).lastFour).toBe("1234");
                    expect((<HCTRA.Model.VantivDto>res).paypageRegistrationId).toBe(null);

                    expect(service.vantivPaymentService.vantivPay).not.toHaveBeenCalled();

                    done();
                });

                $rootScope.$apply();
            });

            it("should resolve with the four input digits and null paypageRegistrationId", function (done) {

                // we expect this to be ignored if input is masked or is 4 digits
                vantivPayValue({
                    lastFour: "5555",
                    paypageRegistrationId: "asdfghj"
                });

                service.registerCard("1234").then((res) => {

                    expect((<HCTRA.Model.VantivDto>res).lastFour).toBe("1234");
                    expect((<HCTRA.Model.VantivDto>res).paypageRegistrationId).toBe(null);

                    expect(service.vantivPaymentService.vantivPay).not.toHaveBeenCalled();

                    done();
                });

                $rootScope.$apply();
            });
        });

        describe("single element array input", () => {

            it("should resolve single element array w/ values returned by vantivPay", function (done) {

                vantivPayValue({
                    lastFour: "3333",
                    paypageRegistrationId: "poiuy"
                });

                service.registerCard(["4111111111111234"]).then((res) => {

                    expect((<HCTRA.Model.VantivDto[]>res)[0].lastFour).toBe("3333");
                    expect((<HCTRA.Model.VantivDto[]>res)[0].paypageRegistrationId).toBe("poiuy");

                    expect(service.vantivPaymentService.vantivPay).toHaveBeenCalled();

                    done();
                });

                $rootScope.$apply();
            });

            it("should resolve with single element array w/ last four of masked value and undefined paypageRegistrationId", function (done) {

                // we expect this to be ignored if input is masked or is 4 digits
                vantivPayValue({
                    lastFour: "5555",
                    paypageRegistrationId: "asdfghj"
                });

                service.registerCard(["************-1234"]).then((res) => {

                    expect((<HCTRA.Model.VantivDto[]>res)[0].lastFour).toBe("1234");
                    expect((<HCTRA.Model.VantivDto[]>res)[0].paypageRegistrationId).toBe(null);

                    expect(service.vantivPaymentService.vantivPay).not.toHaveBeenCalled();

                    done();
                });

                $rootScope.$apply();
            });

            it("should resolve with the four input digits and null paypageRegistrationId", function (done) {

                // we expect this to be ignored if input is masked or is 4 digits
                vantivPayValue({
                    lastFour: "5555",
                    paypageRegistrationId: "asdfghj"
                });

                service.registerCard(["1234"]).then((res) => {

                    expect((<HCTRA.Model.VantivDto[]>res)[0].lastFour).toBe("1234");
                    expect((<HCTRA.Model.VantivDto[]>res)[0].paypageRegistrationId).toBe(null);

                    expect(service.vantivPaymentService.vantivPay).not.toHaveBeenCalled();

                    done();
                });

                $rootScope.$apply();
            });
        });

        describe("multi element array input", () => {

            it("should resolve multi element array w/ values returned by vantivPay", function (done) {

                vantivPayValue({
                    lastFour: "3333",
                    paypageRegistrationId: "poiuy"
                });

                service.registerCard(["4111111111111234", "4111111111115678"]).then((res) => {

                    expect((<HCTRA.Model.VantivDto[]>res)[0].lastFour).toBe("3333");
                    expect((<HCTRA.Model.VantivDto[]>res)[0].paypageRegistrationId).toBe("poiuy");

                    expect((<HCTRA.Model.VantivDto[]>res)[1].lastFour).toBe("3333");
                    expect((<HCTRA.Model.VantivDto[]>res)[1].paypageRegistrationId).toBe("poiuy");

                    expect(service.vantivPaymentService.vantivPay).toHaveBeenCalled();

                    done();
                });

                $rootScope.$apply();
            });

            it("should resolve with single element array w/ last four of masked value and undefined paypageRegistrationId", function (done) {

                // we expect this to be ignored if input is masked or is 4 digits
                vantivPayValue({
                    lastFour: "5555",
                    paypageRegistrationId: "asdfghj"
                });

                service.registerCard(["************-1234", "************-5678"]).then((res) => {

                    expect((<HCTRA.Model.VantivDto[]>res)[0].lastFour).toBe("1234");
                    expect((<HCTRA.Model.VantivDto[]>res)[0].paypageRegistrationId).toBe(null);

                    expect((<HCTRA.Model.VantivDto[]>res)[1].lastFour).toBe("5678");
                    expect((<HCTRA.Model.VantivDto[]>res)[1].paypageRegistrationId).toBe(null);

                    expect(service.vantivPaymentService.vantivPay).not.toHaveBeenCalled();

                    done();
                });

                $rootScope.$apply();
            });

            it("should resolve with the four input digits and null paypageRegistrationId", function (done) {

                // we expect this to be ignored if input is masked or is 4 digits
                vantivPayValue({
                    lastFour: "5555",
                    paypageRegistrationId: "asdfghj"
                });

                service.registerCard(["1234", "5678"]).then((res) => {

                    expect((<HCTRA.Model.VantivDto[]>res)[0].lastFour).toBe("1234");
                    expect((<HCTRA.Model.VantivDto[]>res)[0].paypageRegistrationId).toBe(null);

                    expect((<HCTRA.Model.VantivDto[]>res)[1].lastFour).toBe("5678");
                    expect((<HCTRA.Model.VantivDto[]>res)[1].paypageRegistrationId).toBe(null);

                    expect(service.vantivPaymentService.vantivPay).not.toHaveBeenCalled();

                    done();
                });

                $rootScope.$apply();
            });
        });

        function vantivPayValue(vantivResponse: { lastFour: string, paypageRegistrationId: string}) {

            spyOn(service.vantivPaymentService, "vantivPay")
                .and
                .returnValue($q.resolve(vantivResponse));
        }
    });
} ());
 */