declare var hctraMocks: any;

(() => {
    "use strict";

    describe("BroadcastSubmissionService", () => {

        beforeEach(angular.mock.module("HCTRAModule"));

        let _responseErrorService,
            service: HCTRA.Service.BroadcastSubmissionService;

        describe("registerSubmitter", () => {

            let childScope;
            let rootScope;

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService, _$rootScope_) => {

                service = $injector.get<HCTRA.Service.BroadcastSubmissionService>("broadcastSubmissionService");

                rootScope = _$rootScope_;
                childScope = _$rootScope_.$new(true, rootScope);
            }));

            it("should broadcast submissionIdentifier provided and return a promise which can be resolved by a listener", (done) => {


                childScope.$on("aSubmission", (event, deferred) => {
                    deferred.resolve();
                })

                service.broadcast("aSubmission")
                    .then(done)
                    .catch(() => fail("expected promise to resolve"));


                rootScope.$apply();
            }, 100);

            it("should broadcast submissionIdentifier provided and return a promise which can be rejected by a listener", (done) => {

                childScope.$on("aSubmission", (event, deferred) => {
                    deferred.reject();
                })

                service.broadcast("aSubmission")
                    .then(() => fail("expected promise to reject"))
                    .catch(done);

                rootScope.$apply();
            }, 100);
        });
    });
})();