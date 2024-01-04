import { Injectable } from '@angular/core';
import { PaymentMethodOptions } from 'common/models';
import { PaymentInfo } from '../interfaces';


@Injectable()
export class PaymentInfoService {

    private internalPaymentInfo: PaymentInfo & PaymentMethodOptions;

    public set paymentInfo(info: PaymentInfo & PaymentMethodOptions) {
        this.internalPaymentInfo = info;
    }

    public get paymentInfo(): PaymentInfo & PaymentMethodOptions {
        return this.internalPaymentInfo;
    }

}