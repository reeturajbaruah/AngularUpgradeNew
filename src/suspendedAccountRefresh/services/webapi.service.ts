import { Injectable, Inject } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { AddressInfo, BankDetails, CreditCardDetails } from 'common/models';
import { IViolationPlate } from 'violationsCommon/interfaces';
import { HttpService } from '../../common/services/httpService/http.service';

export interface ISuspendedSummary {
    violationsAmountDueBeforeDiscounts: number;
    totalDiscountAllPlates: number;
    adminFees: number;
    violationsSubtotal: number;
    outstandingAccountBalance: number;
    rebillAmount: number;
    totalUnsuspensionPaymentAmount: number;
}

export interface ISuspendedStatus extends BaseResponse {
    acctId: string;
    acctActivity: string;
    violationFlag: boolean;
    suspensionFlag: boolean;
}

export interface ISuspendedAccountInfo 
    extends BaseResponse, ISuspendedSummary {
    plates: IViolationPlate[];
}

@Injectable({ providedIn: 'root'})
export class WebApiService {

    constructor(
        private httpService: HttpService
    ) { }

    private readonly suspendedAccountDataUrl = '/api/violator/suspended';
    private readonly suspendedAccountStatusUrl = '/api/sessions/SuspendedAccount/GetSuspendedAccountData';

    public async getSuspendedAccountData(): Promise<ISuspendedAccountInfo> {

        return await this.httpService.get(this.suspendedAccountDataUrl);
    }


    public async getSuspendedAccountStatus(): Promise<ISuspendedStatus> {

        return await this.httpService.get(this.suspendedAccountStatusUrl);
    }


    public getPdfURL(licensePlate: string, licenseState: string, invoiceNum: string, agencyId: string, hasMailedDate: boolean): string {
        return `${this.suspendedAccountDataUrl}/plate/${licensePlate.toUpperCase()}-${licenseState.toUpperCase()}/invoices/${invoiceNum}-${agencyId}/${hasMailedDate ? 'pdf' : 'report'}`;
    }

}
