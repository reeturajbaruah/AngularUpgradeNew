import { Injectable, Inject } from '@angular/core';
import { stateNames } from '../constants';
import { stateNames as homeStates } from 'home/constants';
import { ISuspendedStatus, WebApiService } from './webapi.service';
import { webStorageConst } from 'constants/module';
import { CurrentUserService, ResponseErrorService } from 'common/services';
import { BaseResponse } from 'common/interfaces';

import {
    SuspendedAccountUserStatusKey,
    SuspendedAccountPaymentInfoKey
} from '../constants';
import { BillingInfo } from 'common/models';

import { PaymentMethodOptions } from 'common/models';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

export interface ISuspendedPaymentInfo extends BillingInfo, PaymentMethodOptions {
    amount: number;
}

@Injectable()
export class SuspendedAccountService {

    constructor(
        private responseErrorService: ResponseErrorService,
        private webapi: WebApiService,
        private webStorage: WebStorageService,
        private currentUserService: CurrentUserService
    ) { }

    private internalPaymentInfo: ISuspendedPaymentInfo;

    public async getFirstSuspendedAccountState() {

        const suspendedAccountStatus = await this.getSuspendedAccountStatus();

        if (!suspendedAccountStatus) {
            return homeStates.Frame;
        }

        this.responseErrorService.displayAlertsFromResponse(suspendedAccountStatus);

        const isSuspended = suspendedAccountStatus.acctActivity === 'S';
        const hasViolations = suspendedAccountStatus.violationFlag;

        return !isSuspended
            ? homeStates.Frame
            : hasViolations
                ? stateNames.ViolationsLanding
                : stateNames.Landing;
    };

    public destroySuspendedWizardInformation() {
        [
            webStorageConst.suspendedStepKey,
            webStorageConst.suspendedBillingAmountKey,
            webStorageConst.suspendedFrpChargesByPlateListKey,
            webStorageConst.suspendedChargesByPlateListKey,
            SuspendedAccountUserStatusKey,
            SuspendedAccountPaymentInfoKey
        ].forEach(key => this.webStorage.removeEntry(key));
    };

    // this function assumes that the user is logged into the application
    public async getSuspendedAccountTypeInformation() {

        const response = await this.webapi.getSuspendedAccountStatus();

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        } else {
            this.responseErrorService.displayErrorsFromResponse(response);
            this.responseErrorService.displayAlertsFromResponse(response);
            return { errors: response.errors } as BaseResponse;
        }
    };


    public async getSuspendedAccountStatus(): Promise<ISuspendedStatus> {

        let status = this.webStorage.getValue(SuspendedAccountUserStatusKey) as ISuspendedStatus;

        if (!status) {
            status = await this.webapi.getSuspendedAccountStatus();

            if (!this.responseErrorService.isErrorFree(status)) {
                return null;
            }

            this.webStorage.setKeyValue(SuspendedAccountUserStatusKey, status);
        }

        return status;
    }

    public get paymentInfo(): ISuspendedPaymentInfo {
        return this.internalPaymentInfo;
    }

    public set paymentInfo(paymentInfo: ISuspendedPaymentInfo) {
        this.internalPaymentInfo = paymentInfo;
    }

    public getInvoicePdfUrl(licensePlate: string, licenseState: string, invoiceNum: string, agencyId: string, hasMailedDate: boolean): string {
        return this.webapi.getPdfURL(licensePlate, licenseState, invoiceNum, agencyId, hasMailedDate);
    }

    getReplenishmentAmtText(optInText: string, optOutText: string) {

        const currentUser = this.currentUserService.getCurrentUser();
        if (currentUser.rebillOptIn) {
            return optInText;
        } else {
            return optOutText;
        }
    }
}
