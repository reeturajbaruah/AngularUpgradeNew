import { IOrder } from 'vehicles/common/order-summary/models';
import { IDeliveryMethod } from '../../delivery-method/models';
import { IPaymentSummary } from '../../payment-summary/models';


export interface IReviewOrder {
    orderSummary: IOrder;
    deliveryMethod: IDeliveryMethod;
    paymentSummary: IPaymentSummary;
}



