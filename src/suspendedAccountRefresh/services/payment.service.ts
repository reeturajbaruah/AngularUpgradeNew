import { Inject, Injectable } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { AddressInfo, BankDetails, CreditCardDetails } from 'common/models';
import { IViolationPlate } from 'violationsCommon/interfaces';
import { HttpService } from '../../common/services/httpService/http.service';


export interface MakePaymentRequest {
    plates: IViolationPlate[];
    eftPaymentMethod: BankDetails & AddressInfo;
    creditCardPaymentMethod: CreditCardDetails & AddressInfo;
    isCreditCard: boolean;
    violationsSubtotal: number;
    outstandingAccountBalance: number;
    rebillAmount: number;
    totalUnsuspensionPaymentAmount: number;
}

export interface PaymentResponse extends BaseResponse {
    suspensionFlag: boolean;
    acctId: number;
    currentBalanceObj: { currentBalance: number };
    firstName: string;
    lastName: string;
    driverLic: string;
    driverLicState: string;
    companyName: string;
    isInvoiced: boolean;
}

export interface UpdateSuspendedBillingInformationRequest {
    eftPaymentMethod: BankDetails & AddressInfo;
    creditCardPaymentMethod: CreditCardDetails & AddressInfo;
    isCreditCard: boolean;
}

@Injectable()
export class PaymentService {
    baseUrl = '/api/violator/suspended';
    constructor(
        private httpService: HttpService
    ) { }


    // with violations
    public makePayment(request: MakePaymentRequest): Promise<PaymentResponse> {

        const url = `${this.baseUrl}/payment`;

        return this.httpService.post(url, request);
    }

    public updateBillingInformation(billingInfo: UpdateSuspendedBillingInformationRequest): Promise<BaseResponse> {

        const url = `${this.baseUrl}/paymentMethod`;

        return this.httpService.post(url, billingInfo);
    }

    // without violations

    public makePaymentCreditCardSuspended(data: any): Promise<BaseResponse> {
        const url = '/api/sessions/SuspendedAccount/MakePaymentCreditCardSuspended';
        return this.httpService.post(url, data);
    };

    public makePaymentBankAccountSuspended(data: any): Promise<BaseResponse> {
        const url = '/api/sessions/SuspendedAccount/MakePaymentBankAccountSuspended';
        return this.httpService.post(url, data);
    }


    public saveBillingInformationSuspended(data: any): Promise<BaseResponse> {
        const url = '/api/sessions/SuspendedAccount/SaveBillingInformationSuspended';
        return this.httpService.post(url, data);
    }
}
