import { DeliveryMethodType } from 'common/models';
import { IOperation } from 'vehicles/common';


export interface IDeliveryMethod {
    display: boolean;
    header: string;
    context?: string;
    type: DeliveryMethodType;
    operations: IOperation[];
}


