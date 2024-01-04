import { Injectable } from '@angular/core';
import { BankAccountType, BillingType } from 'common/models';
import { MakePaymentRequest, PaymentService, UpdateSuspendedBillingInformationRequest } from './payment.service';
import { ISuspendedPaymentInfo } from './suspendedAccount.service';
import { ISuspendedAccountInfo, WebApiService } from './webapi.service';


@Injectable()
export class WithViolationsPaymentService {
    constructor(private paymentService: PaymentService,
        private webapi: WebApiService) { }

    async submitPayment(paymentInfo: ISuspendedPaymentInfo) {

        if (paymentInfo.makePrimary) {
            const reqForPrimaryAct = this.mapRequestForPrimaryAct(paymentInfo);
            const resForPrimaryAct = await this.paymentService.updateBillingInformation(reqForPrimaryAct);
            if (resForPrimaryAct.errors.length > 0) {
                return resForPrimaryAct;
            }
        }

        const accountInfo = await this.webapi.getSuspendedAccountData();
        const reqMakePayment = this.mapRequest(paymentInfo, accountInfo);
        const resMakePayment = await this.paymentService.makePayment(reqMakePayment);
        return resMakePayment;

    }


    private mapRequest(paymentInfo: ISuspendedPaymentInfo, data: ISuspendedAccountInfo) {
        const req = {} as MakePaymentRequest;
        req.outstandingAccountBalance = data.outstandingAccountBalance;
        req.plates = data.plates;
        req.rebillAmount = data.rebillAmount;
        req.totalUnsuspensionPaymentAmount = data.totalUnsuspensionPaymentAmount;
        req.violationsSubtotal = data.violationsSubtotal;
        req.creditCardPaymentMethod = paymentInfo.credit;
        req.eftPaymentMethod =
        {
            ...paymentInfo.eft,
            nameOnBankAccount: paymentInfo.eft.name,
            accountTypeDisplay: paymentInfo.eft.accountType === BankAccountType.Personal ? 'Personal' : 'Business'

        };
        req.isCreditCard = paymentInfo.billingType === BillingType.Credit ? true : false;

        return req;
    }

    private mapRequestForPrimaryAct(paymentInfo: ISuspendedPaymentInfo) {
        const paymentRequest = {} as UpdateSuspendedBillingInformationRequest;

        paymentRequest.creditCardPaymentMethod = {
            ...paymentInfo.credit,
            primary: paymentInfo.makePrimary
        };
        paymentRequest.eftPaymentMethod = {
            ...paymentInfo.eft,
            nameOnBankAccount: paymentInfo.eft.name,
            accountTypeDisplay: paymentInfo.eft.accountType === BankAccountType.Personal
                ? 'Personal'
                : 'Business',
            primary: paymentInfo.makePrimary
        };
        paymentRequest.isCreditCard = paymentInfo.billingType === BillingType.Credit;


        return paymentRequest;

    }
}
