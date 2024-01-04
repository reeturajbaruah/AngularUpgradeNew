import { DeliveryMethodType } from 'common/models';
import { IEZTag } from 'vehicles/interfaces';

export interface IReceipt {
    summary: ISummary;
    deliveryMethodInfo: IDeliveryMethod;
    paymentInfo: IPaymentInfo;
    tagsOrdered: ITagsOrdered;
    accountInfo: IAccountInfo;
}

export interface ISummary {
    title: string;
    subtitle: string;
    description: string;

}

export interface IDeliveryMethod {
    type: DeliveryMethodType;
    description: string;
}

export interface ITagsOrdered {
    title: string;
    tags: [{
        title: string;
        ezTags: IEZTag[];
        isPlate?: boolean;
    }];
}

export interface IPaymentInfo {
    paymentAmount: {
        label: string;
        amount: number;
    };
    paymentDate: {
        label: string;
        receivedDate: Date;
    };
    replenishAmt: string;

}

export interface IAccountInfo {
    title: string;
}
