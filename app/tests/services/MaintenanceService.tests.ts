(function (): void {
    "use strict";

    // describe("MaintenanceService", () => {

    //     beforeEach(angular.mock.module("HCTRAModule"));

    //     let _responseErrorService: HCTRA.Service.IResponseErrorService;
    //     let _state: angular.ui.IStateService;
    //     let _genericRepo: HCTRA.Service.IGenericRepo;

    //     let service: HCTRA.Service.IMaintenanceService;
    //     let maintenanceResponse: HCTRA.Model.MaintenanceResponse;

    //     let _q: angular.IQService;
    //     let _rootScope: angular.IRootScopeService;


    //     beforeEach(angular.mock.module(() => {
            // _responseErrorService = {
            //     isErrorFree: (): boolean => { return true; },
            //     displayErrorsFromResponse: (): ng.IPromise <any> => { return; },
            //     displayToast: (): void => { return; },
            //     displayAlertsFromResponse: (): ng.IPromise<any> => { return; },
            //     handleMaintenanceErrors: (): void => { return; },
            //     formatErrorMessages: (): string[] => { return []; },
            //     clearToasts: ():void => {}
            // } as HCTRA.Service.IResponseErrorService;

    //         //_state = <angular.ui.IStateService>{
    //         //    go: (to: string, params?: {}, options?: angular.ui.IStateOptions): angular.IPromise<any> => { return; }
    //         //};
    //         _state = {
    //             go: (): angular.IPromise<any> => { return; }
    //         } as any;

    //         _genericRepo = {} as HCTRA.Service.IGenericRepo;

    //         spyOn(_responseErrorService, "displayErrorsFromResponse");
    //         spyOn(_state as any, "go");
    //     }));

    //     beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
    //         $provide.value("serverConstants", { maintenanceKey: "MAINTENANCE_KEY" });
    //         $provide.value("responseErrorService", _responseErrorService);
    //         $provide.value("$state", _state);
    //         $provide.value("genericRepo", _genericRepo);
    //         $provide.value("modalService", hctraMocks.modalService({}));
    //         $provide.constant("homeStates", { Frame: "HOME" });
    //     }));

    //     beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService,
    //         $rootScope: angular.IRootScopeService,
    //         $q: angular.IQService) => {

    //         service = $injector.get<HCTRA.Service.IMaintenanceService>("maintenanceService");
    //         _q = $q;
    //         _rootScope = $rootScope;

    //         maintenanceResponse = new HCTRA.Model.MaintenanceResponse();
    //         maintenanceResponse.errors = [];
    //         _genericRepo.dataFactory = {
    //             getMaintenanceDetails: (): angular.IPromise<HCTRA.Model.MaintenanceResponse> => {
    //                 return _q.resolve(maintenanceResponse);
    //             }
    //         } as any;
    //     }));


    //     xdescribe("handleMaintenanceErrors", () => {
    //         it("should display error and navigate to HOME if maintenance key present", () => {

    //             const baseResponse = new HCTRA.Model.BaseResponse();
    //             baseResponse.errors.push({ key: "MAINTENANCE_KEY", message: "MESSAGE" });

    //             // service.handleMaintenanceErrors(baseResponse);

    //             expect(_responseErrorService.displayErrorsFromResponse).toHaveBeenCalledWith(baseResponse, true);
    //             expect(_state.go).toHaveBeenCalledWith("HOME");
    //         });

    //         it("should not display errors or navigate if response is null or undefined", () => {

    //             //let baseResponse: HCTRA.Model.BaseResponse = null;

    //             // service.handleMaintenanceErrors(baseResponse);

    //             expect(_responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
    //             expect(_state.go).not.toHaveBeenCalled();

    //             //baseResponse = undefined;

    //             // service.handleMaintenanceErrors(baseResponse);

    //             expect(_responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
    //             expect(_state.go).not.toHaveBeenCalled();
    //         });

    //         it("should not display errors or navigate if response errors collection is null or undefined", () => {

    //             const baseResponse = new HCTRA.Model.BaseResponse();
    //             baseResponse.errors = null;

    //             // service.handleMaintenanceErrors(baseResponse);

    //             expect(_responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
    //             expect(_state.go).not.toHaveBeenCalled();

    //             baseResponse.errors = undefined;

    //             // service.handleMaintenanceErrors(baseResponse);

    //             expect(_responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
    //             expect(_state.go).not.toHaveBeenCalled();
    //         });
    //     });

    //     describe("resolveMaintenanceStatus", () => {

    //         let navFeatures: Array<HCTRA.Model.MaintenanceFeature>;

    //         beforeEach(() => {
    //             navFeatures = [
    //                 HCTRA.Model.MaintenanceFeature.Account
    //             ];

    //             maintenanceResponse.errors = [];
    //             maintenanceResponse.featureStates = [];
    //             maintenanceResponse.featureStates.push(
    //                 {
    //                     feature: HCTRA.Model.MaintenanceFeature.Account,
    //                     inMaintenance: false,
    //                     message: "ERROR MESSAGE"
    //                 }
    //             );
    //         });

    //         it("should resolve successfully if none of the nav features are in maintenance", (done) => {

    //             service.resolveMaintenanceStatus(navFeatures, "").then(
    //                 (/*resolve: any*/) => {

    //                     expect(true).toBeTruthy();
    //                     expect(_responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
    //                     done();
    //                 },
    //                 (/*reject: any*/) => {

    //                     expect(false).toBeTruthy();
    //                     done();
    //                 });

    //             _rootScope.$digest();
    //         });

    //         it("should resolve successfully if there are no nav features even if features in maintenance", (done) => {

    //             navFeatures = [];
    //             maintenanceResponse.featureStates[0].inMaintenance = true;

    //             service.resolveMaintenanceStatus(navFeatures, "").then(
    //                 (/*resolve: any*/) => {

    //                     expect(true).toBeTruthy();
    //                     expect(_responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
    //                     done();
    //                 },
    //                 (/*reject: any*/) => {

    //                     expect(false).toBeTruthy();
    //                     done();
    //                 });

    //             _rootScope.$digest();
    //         });

    //         it("should reject if a nav feature is in maintenance", (done) => {

    //             maintenanceResponse.featureStates[0].inMaintenance = true;

    //             service.resolveMaintenanceStatus(navFeatures, "").then(
    //                 (/*resolve: any*/) => {

    //                     expect(false).toBeTruthy();
    //                     done();
    //                 },
    //                 (/*reject: any*/) => {

    //                     expect(true).toBeTruthy();
    //                     expect(_responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
    //                     done();
    //                 });

    //             _rootScope.$digest();
    //         });

    //         it("should reject if a nav feature is in maintenance and navigate home if previousState is unknown (empty string)", (done) => {

    //             maintenanceResponse.featureStates[0].inMaintenance = true;

    //             service.resolveMaintenanceStatus(navFeatures, "").then(
    //                 (/*resolve: any*/) => {

    //                     expect(false).toBeTruthy();
    //                     done();
    //                 },
    //                 (/*reject: any*/) => {

    //                     expect(true).toBeTruthy();
    //                     expect(_responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
    //                     expect(_state.go).toHaveBeenCalledWith("HOME");
    //                     done();
    //                 });

    //             _rootScope.$digest();
    //         });

    //         it("should reject if a nav feature is in maintenance and navigate home if previousState is unknown (undefined)", (done) => {

    //             maintenanceResponse.featureStates[0].inMaintenance = true;

    //             service.resolveMaintenanceStatus(navFeatures, undefined).then(
    //                 (/*resolve: any*/) => {

    //                     expect(false).toBeTruthy();
    //                     done();
    //                 },
    //                 (/*reject: any*/) => {

    //                     expect(true).toBeTruthy();
    //                     expect(_responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
    //                     expect(_state.go).toHaveBeenCalledWith("HOME");
    //                     done();
    //                 });

    //             _rootScope.$digest();
    //         });

    //         it("should reject if a nav feature is in maintenance and navigate home if previousState is unknown (null)", (done) => {

    //             maintenanceResponse.featureStates[0].inMaintenance = true;

    //             service.resolveMaintenanceStatus(navFeatures, null).then(
    //                 (/*resolve: any*/) => {

    //                     expect(false).toBeTruthy();
    //                     done();
    //                 },
    //                 (/*reject: any*/) => {

    //                     expect(true).toBeTruthy();
    //                     expect(_responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
    //                     expect(_state.go).toHaveBeenCalledWith("HOME");
    //                     done();
    //                 });

    //             _rootScope.$digest();
    //         });

    //         it("should reject if a nav feature is in maintenance and navigate to previousState if previousState is known", (done) => {

    //             maintenanceResponse.featureStates[0].inMaintenance = true;

    //             service.resolveMaintenanceStatus(navFeatures, "somePreviousState").then(
    //                 (/*resolve: any*/) => {

    //                     expect(false).toBeTruthy();
    //                     done();
    //                 },
    //                 (/*reject: any*/) => {

    //                     expect(true).toBeTruthy();
    //                     expect(_responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
    //                     expect(_state.go).toHaveBeenCalledWith("somePreviousState");
    //                     done();
    //                 });

    //             _rootScope.$digest();
    //         });
    //     });
    // });
}());