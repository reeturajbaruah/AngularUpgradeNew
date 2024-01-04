import { SiteCoreItem } from 'cms/cms.module';
import { State } from 'common/models';
import { IEZTag } from 'vehicles/interfaces';

export interface IOrder {

    display: boolean;
    summary: IOrderSummary;
    details: IOrderDetails[];
    operations: {
        isEditable: boolean;
        editContent?: SiteCoreItem;
        isRemoveable: boolean;
        removeContent?: SiteCoreItem;
        removeAllOrders?: boolean;
    };
    stateList: State[];
}

export interface IOrderSummary {
    title: string;
    description: string;
}

export interface IOrderDetails {
    title: string;
    tags: IEZTag[];
    isPlate?: boolean;
}

