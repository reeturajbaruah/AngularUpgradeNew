import { SiteCoreItem } from 'cms/cms.module';

export interface IAddVehicleRequest {
    licPlate: string;
    licState: string;
    temporaryLicPlate: boolean;
    vehicleClassCode: number;
    vehicleColor: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleYear: string;
    vehicleClassDesc: string;
    motorcycle: boolean;
    nickname: string;
    isMotorcycleDisabled: boolean;
    tagTypeCode: string;
    activePbpTagExist: boolean;
    acctTagSeq: number;
    transactionId: number;
}

export interface ICartCms extends SiteCoreItem {
    vehicleExists: string;
    tagOrdered?: string;
    tagNotOrdered?: string;
    vehicleDetailsHeader?: string;
}


