module HCTRA.Service {
    "use strict";

    // export interface IMaintenanceService {
    //     resolveMaintenanceStatus(navFeatures: Model.MaintenanceFeature[], previousStateName: string): angular.IPromise<any>;
    //     considerMaintenancePopup(): void;
    //     getMostRecentFeatureMainenanceList(): Model.FeatureState[];
    // }


    // export class MaintenanceService implements IMaintenanceService {
    //     static $inject = ["serverConstants",
    //         "responseErrorService",
    //         "$state",
    //         "homeStates",
    //         "$q",
    //         "arrayUtilService",
    //         "genericRepo",
    //         "modalService"];

    //     constructor(private serverConstants: any,
    //         private responseErrorService: HCTRA.Service.IResponseErrorService,
    //         private $state: ng.ui.IStateService,
    //         private homeStates,
    //         private $q: ng.IQService,
    //         private arrayUtilService: IArrayUtilService,
    //         private genericRepo: HCTRA.Service.IGenericRepo,
    //         private modalService: HCTRA.Service.IModalService) { }

    //     private mostRecentResolvedFeatures: Model.FeatureState[] = null;

    //     public getMostRecentFeatureMainenanceList(): Model.FeatureState[] {
    //         return (this.mostRecentResolvedFeatures || []).slice();
    //     }

    //     public resolveMaintenanceStatus = (navFeatures: Model.MaintenanceFeature[], previousStateName: string) => {

    //         return this.genericRepo.dataFactory.getMaintenanceDetails().then((response: HCTRA.Model.MaintenanceResponse) => {

    //             if (response.errors && response.errors.length === 0) {

    //                 const featuresInMaintenance: Model.FeatureState[] =
    //                     response.featureStates.filter((val: Model.FeatureState) => val.inMaintenance);

    //                 this.mostRecentResolvedFeatures = featuresInMaintenance;

    //                 // intersect of features-in-maintenance and features of the state we're navigating to
    //                 const blockedFeatures: Model.FeatureState[] =
    //                     this.arrayUtilService.intersect(featuresInMaintenance, navFeatures,
    //                         (m: Model.FeatureState, n: Model.MaintenanceFeature) => m.feature === n);

    //                 if (blockedFeatures && blockedFeatures.length > 0) {
    //                     const baseResponse: Model.IBaseResponse = this.featureStatesToBaseResponse(blockedFeatures);

    //                     let delayFlag = false;
    //                     // previous state's name is "" on reload, direct navigation to URL, bookmark, etc
    //                     if (angular.isString(previousStateName) && previousStateName !== "") {
    //                         this.$state.go(previousStateName);
    //                     } else {
    //                         this.$state.go(this.homeStates.Frame);
    //                         delayFlag = true;
    //                     }

    //                     this.responseErrorService.displayErrorsFromResponse(baseResponse, delayFlag);
    //                     return this.$q.reject();
    //                 }
    //             } else {

    //                 this.responseErrorService.displayErrorsFromResponse(response);
    //                 return this.$q.reject();
    //             }
    //         });
    //     };

    //     public considerMaintenancePopup = () => {
    //         this.genericRepo.dataFactory.getMaintenanceDetails().then((response: HCTRA.Model.MaintenanceResponse) => {
    //             if (response.showMaintenancePopup) {
    //                 this.modalService.showMaintenanceModal();
    //             }
    //         });
    //     };

    //     private featureStatesToBaseResponse = (features: Model.FeatureState[]): HCTRA.Model.IBaseResponse => {
    //         const newResponse: Model.IBaseResponse = new HCTRA.Model.BaseResponse();
    //         const errors: Model.ErrorMessage[] = features.map((val: Model.ErrorMessage) => {
    //             return {
    //                 key: this.serverConstants.maintenanceKey,
    //                 message: val.message
    //             };
    //         });

    //         newResponse.errors = errors;
    //         return newResponse;
    //     };
    // }
}

(function (): void {

    "use strict";

    // angular.module("HCTRAModule").service("maintenanceService", HCTRA.Service.MaintenanceService);

}());