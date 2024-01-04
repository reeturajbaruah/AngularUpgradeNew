import { SiteCoreItem } from 'cms/cms.module';
import { IEZTag } from 'vehicles/interfaces';
import { IErrorMessage } from 'vehicles/shared';

export interface ITagReactivateContent {
    ezTagNum: string;
    sitecoreContent: SiteCoreItem;
    vehicle?: IEZTag;
}

export interface ITagReactivateBaseResponse {
    errors?: IErrorMessage[];
    ezTagNum?: string;
    licPlate?: string;
}

export interface ITagReactivateResponse extends ITagReactivateBaseResponse {
    status: TagReactivateStatus;
}

export interface ITagReactivateApiResponse extends ITagReactivateBaseResponse {
    successStatus: boolean;
}

export interface ITagReactivateReq {
    licPlate: string;
    licState: string;
    tagId: string;
    accountVehicleId: number;
    action: string;
}

export enum TagReactivateStatus {
    Pass,
    Fail,
    UserCancel
}

