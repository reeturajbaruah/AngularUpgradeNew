module HCTRA.Model {

    export interface IVehicleInformationDirectiveScope extends angular.IScope {

        hideTempPlate: boolean;
        vehicleInfo: Vehicle;
        validation: HCTRA.Service.IValidationInnerService;
        classList: Array<{ value: number, label: string }>;
        yearList: Array<number>;
        allDataHasBeenLoaded: boolean;

        hasSelectedTwoAxle: () => boolean;
        classChange: () => void;
    }
}