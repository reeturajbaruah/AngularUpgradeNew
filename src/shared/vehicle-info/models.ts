import { SiteCoreItem } from 'cms/cms.module';
import { BaseResponse } from 'common/interfaces';
import { IVehicleInfo, State } from 'common/models';
import { IModalCmsContent } from 'common/ui';

// below models are moved from Vehicles module

export interface IEZTag extends IVehicleInfo {
    tagId: string;
    fullTagId: string;
    acctTagSeq: number;
    acctTagSeqSepcified: boolean;
    acctTagStatus: string;
    tagStatusDesc: string;
    pbpStartDate: string;
    pbpEndDate: string;
    tagTypeCode: string;
    activePbpTagExist: boolean;
    tagless_Desc: string;
    acctVehicleId: number;
    nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: boolean;
}

export interface IStatus {
    active: string;
    inactive: string;
}

export interface IAddPlateVehicleInfoCMSContent extends IModalCmsContent {
    Title: string;
    LongDescription: string;
    MaxPlateError?: string;
    EDIT_EZPLATE?: string;
}

export interface IEditPlateInjectedValues {
    plate: IEZTag;
    header: string;
    cmsContent: IAddPlateVehicleInfoCMSContent;
    showStatus: boolean;
    statesList: State[];
    status: IStatus;
    savePlate?: boolean;
}


export interface IVehiclesCartList {
    title: string;
    context: string;
    vehicleDetailsHeader: string;
    modalContent: {
        edit: SiteCoreItem;
        remove: SiteCoreItem;
        cancel: SiteCoreItem;
        add: SiteCoreItem;
    };
    ezTags: IEZTag[];
    states: State[];
    config?: IVehicleConfig;
}

export enum Event {
    Add,
    Edit,
    Remove
}

export interface IVehicleOperationEvent {
    name: Event;
    data: any;
}

export interface IVehicleConfig {
    ezTagOptionConfig: {
        ezTagOrder: {
            flag: boolean;
            msgWhenMotorcyleNotOpted: string;
            msgWhenMotorcyleOpted: string;
            warningDesc: string;
        };
        motorcycle: {
            message: string;
        };
    };
}
