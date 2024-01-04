import { IModalCmsContent } from 'common/ui';
import { SiteCoreItem } from 'cms/cms.module';
import { IEZTag } from 'vehicles/interfaces';
import { State } from 'common/models';


export interface IAddTagVehicleInfoCMSContent extends IModalCmsContent {
    Title: string;
}

export interface IAddPlateVehicleInfoCMSContent extends IModalCmsContent {
    Title: string;
    LongDescription: string;
    MaxPlateError?: string;
    EDIT_EZPLATE?: string;
}

export interface IReviewOrderCms extends SiteCoreItem {
    DeliveryMethodTitle: string;
    PaymentSummaryTitle: string;
    PaymentContext: string;
    TagInfo: string;
    TagInfoModalLink: string;
    RebillToolTip: string;
    MotorcycleTextForOptInRep?: string;
    MotorcycleTextForOptOutRep?: string;
}

export interface VehicleModalCms extends SiteCoreItem {
    tempPlateInfo: string;
    ErrorPlateExistsInCart: string;
}

export interface IEditTagCmsContent {
    active: string;
    inactive: string;
    title: string;
}

export interface IEditTagInjectedValues {
    tag: IEZTag;
    statesList: State[];
    cmsAddTagVehicleInfo: IAddTagVehicleInfoCMSContent;
    cmsModalValues: IEditTagCmsContent;
    showStatus: boolean;

    saveTag?: boolean;
}

export enum VehicleProduct {
    eztag,
    ezplate
}

export interface IErrorMessage {
    key: string;
    message: string;
}


