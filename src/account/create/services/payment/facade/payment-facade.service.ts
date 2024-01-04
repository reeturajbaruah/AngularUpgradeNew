import { Injectable } from '@angular/core';
import {
    AddressInfo, BillingInfo, BillingType, IAddorUpdatePaymentMethodandRebillAmountRequest,
    IMailingInfo, IRemovePaymentMethodRequest
} from 'common/models';
import { AccountService, SetContactInfoRequest } from 'common/services';
import { PaymentApiService } from '../api/payment-api.service';
import { BankFacadeService } from './bank/bank-facade.service';
import { CreditCardFacadeService } from './credit-card/credit-card-facade.service';
import { RebillFacadeService } from './rebill-facade.service';


@Injectable()
export class PaymentFacadeService {

    constructor(private ccFacade: CreditCardFacadeService,
        private bankFacade: BankFacadeService,
        private accountService: AccountService,
        private paymentApiService: PaymentApiService,
        private rebillFacadeService: RebillFacadeService,
    ) {

    }

    async submitPayment(payment: {
        method: BillingType;
        payload: { billing: BillingInfo; billingAddress?: IMailingInfo };
    },
        operation: 'ADD' | 'UPDATE') {

        switch (payment.method) {

            case BillingType.Credit:
                return await this.ccFacade.submitPayment
                    (payment.payload.billing.credit, payment.payload.billingAddress,
                        operation);

            case BillingType.Eft:
                return await this.bankFacade.submitPayment(payment.payload.billing.eft, operation);
        }
    }

    async getMailingInfo() {
        return await this.accountService.getMailingInfo();
    }

    async setMailingInfoAtAcctLevel(address: AddressInfo) {

        const contact = await this.accountService.getContactInfo();

        const req = {
            mailingAddress: address,
            contactInfo: contact.contactInfo,
            personalInfo: contact.personalInfo
        } as SetContactInfoRequest;

        return await this.accountService.setContactInfo(req);
    }

    async removeBillingMethod(billingInfo, skip?) {
        const removePaymentMethodReqResp = this.createRemovePaymentMethodRequest(billingInfo, skip);
        const nodata = (Object.keys(removePaymentMethodReqResp?.removePaymentMethodRequest.eFTPaymentMethod).length === 0)
            && (Object.keys(removePaymentMethodReqResp?.removePaymentMethodRequest.creditCardPaymentMethod).length === 0);

        if (nodata) {
            return billingInfo;
        }
        if (removePaymentMethodReqResp?.isBillingInfoHasEFT || removePaymentMethodReqResp?.isBillingInfoHasCC) {
            const updateRebillAmountRequest = { rebillAmount: 0, minimumBalance: 0 };
            await this.rebillFacadeService.updateRebillAmount(updateRebillAmountRequest);
            const res = await this.paymentApiService.removeBillingMethod(removePaymentMethodReqResp?.removePaymentMethodRequest);
            if (res) {
                billingInfo = this.resetBillingInfo(removePaymentMethodReqResp, billingInfo);
            }
            return billingInfo;
        }

        return billingInfo;
    }

    // REFACTOR NOTE: Redesign this whole method
    private createRemovePaymentMethodRequest(billingInfo, skip?) {
        const billingType = billingInfo?.billingType;
        const isBillingInfoHasEFT = (billingInfo?.eft?.accountType !== undefined);
        const isBillingInfoHasCC = (billingInfo?.credit?.expYear !== undefined);
        const savePaymentUnChecked = (billingInfo?.savePaymentStatus === false);
        const isCash = (billingType === BillingType.Cash);
        const isCredit = (billingType === BillingType.Credit);
        const isEFT = (billingType === BillingType.Eft);

        const removePaymentMethodRequest = {
            eFTPaymentMethod: {},
            creditCardPaymentMethod: {}
        } as IRemovePaymentMethodRequest;

        switch (true) {
            case (isCash && (isBillingInfoHasCC || isBillingInfoHasEFT)):
                switch (true) {
                    case (isBillingInfoHasEFT):
                        removePaymentMethodRequest.eFTPaymentMethod = billingInfo?.eft;
                        removePaymentMethodRequest.eFTPaymentMethod.accountBillingMethodId = billingInfo?.eft?.accountBillingMethodId;
                        removePaymentMethodRequest.isCreditCard = false;
                        break;

                    case (isBillingInfoHasCC):
                        removePaymentMethodRequest.creditCardPaymentMethod = billingInfo?.credit;
                        removePaymentMethodRequest.creditCardPaymentMethod.accountBillingMethodId = billingInfo?.credit?.accountBillingMethodId;
                        removePaymentMethodRequest.isCreditCard = true;
                        break;
                }
                break;

            case (isCredit && isBillingInfoHasCC && (savePaymentUnChecked || skip === true)):
                removePaymentMethodRequest.creditCardPaymentMethod = billingInfo?.credit;
                removePaymentMethodRequest.creditCardPaymentMethod.accountBillingMethodId = billingInfo?.credit?.accountBillingMethodId;
                removePaymentMethodRequest.isCreditCard = true;
                break;

            case (isCredit && isBillingInfoHasEFT):
                removePaymentMethodRequest.eFTPaymentMethod = billingInfo?.eft;
                removePaymentMethodRequest.eFTPaymentMethod.accountBillingMethodId = billingInfo?.eft?.accountBillingMethodId;
                removePaymentMethodRequest.isCreditCard = false;
                break;

            case (isEFT && isBillingInfoHasEFT && (savePaymentUnChecked || skip === true)):
                removePaymentMethodRequest.eFTPaymentMethod = billingInfo?.eft;
                removePaymentMethodRequest.eFTPaymentMethod.accountBillingMethodId = billingInfo?.eft?.accountBillingMethodId;
                removePaymentMethodRequest.isCreditCard = false;
                break;

            case (isEFT && isBillingInfoHasCC):
                removePaymentMethodRequest.creditCardPaymentMethod = billingInfo?.credit;
                removePaymentMethodRequest.creditCardPaymentMethod.accountBillingMethodId = billingInfo?.credit?.accountBillingMethodId;
                removePaymentMethodRequest.isCreditCard = true;
                break;

            default:
                return {
                    isBillingInfoHasEFT,
                    isBillingInfoHasCC,
                    billingInfo, 
                    removePaymentMethodRequest
                };
        }

        return {
            isBillingInfoHasEFT,
            isBillingInfoHasCC,
            billingInfo,
            removePaymentMethodRequest
        };
    }

    private resetBillingInfo(response, billingInfo) {
        const billingType = billingInfo?.billingType;

        switch (true) {
            case (billingType === BillingType.Cash && (response?.isBillingInfoHasCC || response?.isBillingInfoHasEFT)):
                switch (true) {
                    case (response?.isBillingInfoHasEFT):
                        billingInfo.eft = {};
                        break;

                    case (response?.isBillingInfoHasCC):
                        billingInfo.credit = {};
                        break;
                }
                break;

            case (billingType === BillingType.Credit && response?.isBillingInfoHasEFT):
                billingInfo.eft = {};
                break;

            case (billingType === BillingType.Eft && response?.isBillingInfoHasCC):
                billingInfo.credit = {};
                break;
        }

        return billingInfo;
    }

    // Refactor Note: Improve design, maybe add more Abstraction layers if needed
    // Refactor Note: Improve Naming Conventions
    async addorUpdatePaymentMethodandRebillAmountofCreditCard(request: IAddorUpdatePaymentMethodandRebillAmountRequest) {
        return await this.ccFacade.addorUpdatePaymentMethodandRebillAmountofCreditCard(request);
    }

    async addPaymentMethodandRebillAmountofCreditCard(request: IAddorUpdatePaymentMethodandRebillAmountRequest) {
        return await this.ccFacade.addPaymentMethodandRebillAmountofCreditCard(request);
    }

    async addorUpdatePaymentMethodandRebillAmountofEFT(request: IAddorUpdatePaymentMethodandRebillAmountRequest) {
        return await this.bankFacade.addorUpdatePaymentMethodandRebillAmountofEFT(request);
    }

    async addPaymentMethodandRebillAmountofEFT(request: IAddorUpdatePaymentMethodandRebillAmountRequest) {
        return await this.bankFacade.addPaymentMethodandRebillAmountofEFT(request);
    }
}
