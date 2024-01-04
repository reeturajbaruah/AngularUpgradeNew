module HCTRA.Model {
    export interface FeatureState {
        feature: MaintenanceFeature;
        message: string;
        inMaintenance: boolean;
    }
}