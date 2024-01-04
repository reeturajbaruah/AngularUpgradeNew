import { Injectable } from '@angular/core';
import { BillingType } from 'common/models';
import { PaymentService } from './payment.service';
import { ISuspendedPaymentInfo } from './suspendedAccount.service';
import { WebApiService } from './webapi.service';


@Injectable()
export class WithoutViolationsPaymentService {

    constructor(private paymentService: PaymentService) { }

    async submitPayment(paymentInfo: ISuspendedPaymentInfo) {

        if (paymentInfo.makePrimary) {
            const req = this.mapRequest(paymentInfo);
            const res = await this.paymentService.saveBillingInformationSuspended(req);
            if (res.errors.length > 0) {
                return res;
            }
        }

        const resMakePayment = await this.makePayment(paymentInfo);

        return resMakePayment;

    }

    private mapRequest(paymentInfo: ISuspendedPaymentInfo) {

        if (paymentInfo.billingType === BillingType.Credit) {
            return {
                billingInfo: {
                    billingTypeCode: 'C',
                    billingTypeDisplay: 'CREDIT',
                    eft: null,
                    cards: [
                        {
                            ...paymentInfo.credit,
                            cardExpires: paymentInfo.credit.expMonth.toString() + '/' + paymentInfo.credit.expYear.toString(),
                            selectedYear: paymentInfo.credit.expYear,
                            zipCode: paymentInfo.credit.zip,
                            country: paymentInfo.credit.international === false ? 'USA' : paymentInfo.credit.country,
                            cardExpiresDate: this.getDate(paymentInfo),
                            internationalAddress: paymentInfo.credit.international
                        }
                    ]
                }

            };
        }

        if (paymentInfo.billingType === BillingType.Eft) {
            return {
                billingInfo: {
                    billingTypeCode: 'E',
                    billingTypeDisplay: 'EFT',
                    cards: null,
                    eft: {
                        ...paymentInfo.eft
                    }
                }

            };

        }
    }

    private async makePayment(paymentInfo: ISuspendedPaymentInfo) {
        let req: any = {};

        if (paymentInfo.billingType === BillingType.Credit) {
            req = {
                ...paymentInfo.credit,
                creditCardNumber: paymentInfo.credit.cardNbr,
                expYear: paymentInfo.credit.expYear,
                type: paymentInfo.credit.cardCode,
                internationalAddress: paymentInfo.credit.international,
                paymentAmount: paymentInfo.amount
            };
            return await this.paymentService.makePaymentCreditCardSuspended(req);
        }

        if (paymentInfo.billingType === BillingType.Eft) {
            req = {
                ...paymentInfo.eft,
                paymentAmount: paymentInfo.amount
            };
            return await this.paymentService.makePaymentBankAccountSuspended(req);
        }

    }

    private getDate(paymentInfo) {

        const dateString = (new Date(Number(paymentInfo.credit.expYear), Number(paymentInfo.credit.expMonth)).toJSON());
        return (dateString.slice(0, 1) === '' && dateString.slice(- 1) === '') ?
            dateString.slice(1, -1) :
            dateString;

    }

}