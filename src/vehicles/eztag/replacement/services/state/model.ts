import { DeliveryMethodType } from 'common/models';
import { IEZTag } from 'vehicles/interfaces';

export interface IState {
    reason: string;
    replaceTag: IEZTag;
    deliveryMethod: DeliveryMethodType;
    amount?: number;
}

