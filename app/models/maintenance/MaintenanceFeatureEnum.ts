module HCTRA.Model {
    // THIS MUST MATCH WITH MaintenanceFeatureEnum.cs
    // todo: duplicated in Angular; remove this when migration is complete
    export enum MaintenanceFeature {
        MobileApp,
        MobileAppEzTag,
        Account,
        Violations,
        MultipleVehicleUpload,
        CA
    }
}