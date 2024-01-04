module HCTRA.Model {
    export class MaintenanceResponse extends BaseResponse {
        featureStates: FeatureState[];
        showMaintenancePopup: boolean;
    }
}