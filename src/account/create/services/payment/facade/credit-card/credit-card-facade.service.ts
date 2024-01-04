import { Injectable } from '@angular/core';
import { IPaymentCCRequest, ICCInfo } from 'account/create/models/payment-models';
import { AddressInfo, BillingType, CreditCardDetails, IAddorUpdatePaymentMethodandRebillAmountRequest, IMailingInfo, PaymentRadioStatus } from 'common/models';
import { AccountService, CurrentUserService } from '../../../../../../common/services';
import { PaymentApiService } from '../../api/payment-api.service';
import { RebillFacadeService } from '../rebill-facade.service';


@Injectable()
export class CreditCardFacadeService {


    constructor(private api: PaymentApiService,
        private accountService: AccountService,
        private rebillFacadeService: RebillFacadeService,
        private currentUserService: CurrentUserService ) {

    }

    async submitPayment(creditCardInfo: CreditCardDetails & AddressInfo,
        billingAddress: IMailingInfo,
        operation: 'ADD' | 'UPDATE') {

        const ccInfo = {
            accountBillingMethodId: creditCardInfo.accountBillingMethodId ? creditCardInfo.accountBillingMethodId : null,
            hasSecondaryCard: false,
            creditCardNumber: creditCardInfo.cardNbr,
            type: creditCardInfo.cardCode,
            expMonth: creditCardInfo.expMonth,
            expYear: creditCardInfo.expYear,
            nameOnCard: creditCardInfo.nameOnCard,
            paypageRegistrationId: creditCardInfo.paypageRegistrationId ? creditCardInfo.paypageRegistrationId : null,
            omniToken: creditCardInfo.omniToken ? creditCardInfo.omniToken : null,
            transactionId: 0
        } as ICCInfo;

        const req = {
            ...billingAddress,
            ...ccInfo
        } as IPaymentCCRequest;

        switch (operation) {

            case 'ADD':

                return await this.api.addCreditCard(req);

            case 'UPDATE':

                return await this.api.updateCreditCard(req);

        }
    }

    async addorUpdatePaymentMethodandRebillAmountofCreditCard(request: IAddorUpdatePaymentMethodandRebillAmountRequest) {
        const paymentRequest = {
            method: request.billingInfo.billingType as BillingType,
            payload: {
                billing: request.billingInfo,
                billingAddress: request.mailingInfo
            }
        };
        return await this.addorUpdatePaymentMethodandRebillAmount(request, paymentRequest);
    }

    // REFACTOR NOTE: 1-Remove All this logic, this request is doing this much
    // REFACTOR NOTE: Use Rebill On/Off API call instead
    // REFACTOR NOTE: Common code should be extracted for both CC and EFT
    async addPaymentMethodandRebillAmountofCreditCard(request: IAddorUpdatePaymentMethodandRebillAmountRequest) {
        const paymentRequest = {
            method: request.billingInfo.billingType as BillingType,
            payload: {
                billing: request.billingInfo,
                billingAddress: request.mailingInfo
            }
        };
        return await this.addPaymentMethodandRebillAmount(paymentRequest);
    }

    private async addorUpdatePaymentMethodandRebillAmount(request, paymentRequest) {
        let updateRebillAmountRequest: any;
        let successRes = false;
        const autoRepStatus = request.billingInfo?.autoReplenishmentStatus;
        const savePaymentStatus = request.billingInfo?.savePaymentStatus;

        switch (true) {
            case (autoRepStatus === true && savePaymentStatus === true):
                const submitPaymentResponse = await this.submitPayment(paymentRequest.payload.billing.credit,
                    paymentRequest.payload.billingAddress,
                    request.paymentOperation);

                if (submitPaymentResponse) { successRes = true; }

                if (submitPaymentResponse?.rebillAmt) {
                    updateRebillAmountRequest = { rebillAmount: submitPaymentResponse?.rebillAmt, minimumBalance: 0 };
                }
                else {
                    const accountInfo = await this.accountService.getAccountInfo();
                    updateRebillAmountRequest = { rebillAmount: accountInfo?.rebillAmount, minimumBalance: 0 };
                }
                await this.updateRebill(updateRebillAmountRequest,true);
                break;

            case (autoRepStatus === false && savePaymentStatus === true):
                const submitPaymentResponse2 = await this.submitPayment(paymentRequest.payload.billing.credit, paymentRequest.payload.billingAddress,
                    request.paymentOperation);
                if (submitPaymentResponse2) { successRes = true; }
                updateRebillAmountRequest = { rebillAmount: 0, minimumBalance: 0 };
                await this.updateRebill(updateRebillAmountRequest, false);
                break;

            case (autoRepStatus === false && savePaymentStatus === false):
                updateRebillAmountRequest = { rebillAmount: 0, minimumBalance: 0 };
                await this.updateRebill(updateRebillAmountRequest, false);
                successRes = true;
                break;
        }
        
        return successRes;
    }

    // REFACTOR NOTE: 1-Remove All this logic, this request is doing this much
    // REFACTOR NOTE: Common code should be extracted for both CC and EFT
    private async addPaymentMethodandRebillAmount(paymentRequest) {
        let updateRebillAmountRequest: any;
        let successRes = false;
        const autoRepStatus = paymentRequest.payload?.billing?.autoReplenishmentStatus;

        const submitPaymentResponse = await this.submitPayment(paymentRequest.payload.billing.credit,
            paymentRequest.payload.billingAddress,
            'ADD');

        if (submitPaymentResponse) { successRes = true; }

        // If rebill is ON, update rebill amt
        if (autoRepStatus) {
            // REFACTOR NOTE: This should be done at the API
            if (submitPaymentResponse?.rebillAmt) {
                updateRebillAmountRequest = { rebillAmount: submitPaymentResponse?.rebillAmt, minimumBalance: 0 };
            }
            else {
                const accountInfo = await this.accountService.getAccountInfo();
                updateRebillAmountRequest = { rebillAmount: accountInfo?.rebillAmount, minimumBalance: 0 };
            }
            await this.updateRebill(updateRebillAmountRequest, true);
        }
        // If rebill is OFF, update rebill amt to 0
        else {
            updateRebillAmountRequest = { rebillAmount: 0, minimumBalance: 0 };
            await this.updateRebill(updateRebillAmountRequest, false);
        }

        return successRes;
    }

    private async updateRebill(updateRebillAmountRequest, autoReplenishmentStatus: boolean) {
        await this.rebillFacadeService.updateRebillAmount(updateRebillAmountRequest);
        this.currentUserService.updateAutoReplenishmentStatus(autoReplenishmentStatus);
    }
}
