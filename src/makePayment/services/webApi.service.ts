import { Inject, Injectable } from '@angular/core';
import { BaseResponse, ErrorMessage } from 'common/interfaces';
import { BillingInfo, BillingType, PaymentMethodInfo } from 'common/models';
import { ResponseErrorService, HttpService } from 'common/services';

import { PaymentInfo } from '../interfaces';

//TODO: suspened account flow can make a one time payment. we can either integrate
//the actual API calls into it's own services or refactor this into a common non-lazy
//loaded module
@Injectable()
export class WebApiService {

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService
    ) { }

    private readonly getAllPaymentsMethodsUrl = '/api/GetAllPaymentMethods';
    private readonly addEftBillingInfoUrl = '/api/AddBankAccountInfo';
    private readonly addCreditBillingInfoUrl = '/api/AddCreditCardInfo';

    private readonly makePaymentCCUrl = '/api/account/makepayment/creditcard';
    private readonly makePaymentEftUrl = '/api/account/makepayment/eft';


    public async getAllPaymentMethods(): Promise<PaymentMethodInfo> {
        const response = await this.httpService.get(this.getAllPaymentsMethodsUrl);
        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async makePayment(paymentInfo: PaymentInfo): Promise<ErrorMessage[]> {

        const isCCPayment = paymentInfo.billingType === BillingType.Credit;

        const url = isCCPayment
            ? this.makePaymentCCUrl
            : this.makePaymentEftUrl;

        const { amount, credit, eft } = paymentInfo;

        const response: BaseResponse = await this.httpService.post(url, {
            paymentAmount: amount,
            ...(isCCPayment
                ? {
                    ...credit,
                    creditCardNumber: credit.cardNbr,
                    type: credit.cardCode,
                    internationalAddress: credit.international,
                }
                : eft)
        });

        return this.responseErrorService.isErrorFree(response) ? [] : response.errors;
    }

    public async addPaymentMethodInfo(payload): Promise<ErrorMessage[]> {

        const isCredit = payload.paymentMethod?.billingTypeCode === 'C' ? true : false;

        const url = isCredit
            ? this.addCreditBillingInfoUrl
            : this.addEftBillingInfoUrl;


        const response: BaseResponse = await this.httpService.post(url, payload);

        return this.responseErrorService.isErrorFree(response) ? [] : response.errors;
    }

}
