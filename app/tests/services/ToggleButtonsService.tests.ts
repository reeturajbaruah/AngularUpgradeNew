/*
(function() {
    "use strict";

    describe("ToggleButtonsService", function () {

        beforeEach(angular.mock.module("HCTRAModule"));

        var service: HCTRA.Service.ToggleButtonsService,
            my$q: ng.IQService,
            my$rootScope: ng.IRootScopeService;

        beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {
            service = $injector.get<HCTRA.Service.ToggleButtonsService>("toggleButtonsService");
            service.resetLock();
            spyOn(service, 'disableButtons');
            spyOn(service, 'enableButtons');
        }));

        beforeEach(angular.mock.inject(function (_$rootScope_, _$q_) {
            my$rootScope = _$rootScope_;
            my$q = _$q_;
        }));

        it("should enable buttons globally when not locked", function () {

            service.enableButtonsGlobal();
            expect((<any>service).enableButtons).toHaveBeenCalled();
        });

        it("should disable buttons globally when not locked", function () {

            service.disableButtonsGlobal();
            expect((<any>service).disableButtons).toHaveBeenCalled();
        });

        it("should not enable buttons globally when locked", function (done) {

            // won't resolve until following lines have already executed
            var resolvedPromise = my$q.resolve().then(() => { done() });
            service.disableUntilResolved(resolvedPromise);

            service.enableButtonsGlobal();
            expect((<any>service).enableButtons).not.toHaveBeenCalled();

            my$rootScope.$apply();
        });

        it("should not disable buttons globally when locked", function (done) {

            // won't resolve until following lines have already executed
            var resolvedPromise = my$q.resolve().then(() => { done() });
            service.disableUntilResolved(resolvedPromise); // will call disableButtons once
            expect((<any>service).disableButtons).toHaveBeenCalledTimes(1);

            service.disableButtonsGlobal(); // should not call disableButtons a second time
            expect((<any>service).disableButtons).toHaveBeenCalledTimes(1);

            my$rootScope.$apply();

        });
    });
}());
*/