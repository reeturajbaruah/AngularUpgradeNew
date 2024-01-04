import { Injectable } from '@angular/core';
import { ICheckoutPaymentRes, IMakePaymentReq } from 'account/create/models/checkout-payment.models';
import { CheckoutApiService } from '../api/checkout-api.service';

@Injectable()
export class CheckoutFacadeService {

    constructor(private api: CheckoutApiService) {

    }

    async checkoutPayment() {
        const req = { transactionId: 0 };
        const res = await this.api.checkout(req);

        if (res && res.ezTagTransaction !== undefined) {
            return { ...res.ezTagTransaction } as ICheckoutPaymentRes;
        }
    }

    async makePayment(data: { deliveryMethod: string; checkoutPayment: ICheckoutPaymentRes },
        isKiosk: boolean) {

        const req = {
            deliveryMethod: data.deliveryMethod,
            transactionId: 0,
            ...data.checkoutPayment
        } as IMakePaymentReq;

        let res;
        
        if (!isKiosk) {
            res = await this.api.makePaymentOnWeb(req);
        } else {
            res = await this.api.makePaymentOnKiosk(req);
        }

        return res;
    }
}
