import { Injectable, Inject } from '@angular/core';
import { StateService as UiStateService } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { PaymentPlansStateNames } from '../constants';
import { StateNames } from 'constants/module';
import { IMailingInfo } from '../../common/models';
import { stateNames as violationsStateNames } from 'violations/constants';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

@Injectable()
export class StateService {
    
    constructor(
        private webStorage: WebStorageService,
        private paymentPlanStateNames: PaymentPlansStateNames,
        private state: UiStateService,
        private stateNames: StateNames
    ) {
        this.init();
    }
    private readonly PAYMENTPLANS_CURRENT_STEP = 'PAYMENTPLANS_CURRENT_STEP';
    private readonly PAYMENT_COMPLETE = 'PAYMENT_PLAN_COMPLETE';
    private readonly ACCOUNTOVERVIEW_PAYMENTPLANS_CURRENT_STEP = 'ACCOUNTOVERVIEW_PAYMENTPLANS_CURRENT_STEP';
    private readonly ACCOUNTOVERVIEW_PAYMENT_COMPLETE = 'ACCOUNTOVERVIEW_PAYMENT_PLAN_COMPLETE';
    private readonly EFT_CACHED_ADDRESS_INFO = 'PAYMENT_PLAN_EFT_CACHED_ADDRESS_INFO';

    public readonly authDictionary = {};
    private readonly nextStates = {};
    private readonly previousStates = {};

    public resetPaymentComplete = (isEzTagFlag: boolean) => {
        this.webStorage.setKeyValue(isEzTagFlag ? this.ACCOUNTOVERVIEW_PAYMENT_COMPLETE : this.PAYMENT_COMPLETE, false);
    };

    // TODO: Rename
    public setPaymentComplete = (isEzTagFlag: boolean) => {
        this.webStorage.setKeyValue(isEzTagFlag ? this.ACCOUNTOVERVIEW_PAYMENT_COMPLETE : this.PAYMENT_COMPLETE, true);
        this.clearCachedEftAddressInfo();
    };

    public init = () => {
        //Violation Flow
        this.authDictionary[violationsStateNames.Landing] = {
            validBeforePayment:
                [
                    this.paymentPlanStateNames.Landing,
                    this.paymentPlanStateNames.Grid
                ]
        };
        this.authDictionary[this.paymentPlanStateNames.Landing] = {
            validBeforePayment:
                [
                    this.paymentPlanStateNames.Landing,
                    this.paymentPlanStateNames.Grid
                ]
        };
        this.authDictionary[this.paymentPlanStateNames.Grid] = {
            validBeforePayment:
                [
                    this.paymentPlanStateNames.Landing,
                    this.paymentPlanStateNames.Grid,
                    this.paymentPlanStateNames.MakePayment
                ]
        };
        this.authDictionary[this.paymentPlanStateNames.MakePayment] = {
            validBeforePayment:
                [
                    this.paymentPlanStateNames.Landing,
                    this.paymentPlanStateNames.Grid,
                    this.paymentPlanStateNames.MakePayment,
                    this.paymentPlanStateNames.Confirm
                ]
        };
        this.authDictionary[this.paymentPlanStateNames.Confirm] = {
            validBeforePayment:
                [
                    this.paymentPlanStateNames.Grid,
                    this.paymentPlanStateNames.MakePayment,
                    this.paymentPlanStateNames.Confirm,
                    this.paymentPlanStateNames.Receipt
                ]
        };
        this.authDictionary[this.paymentPlanStateNames.Receipt] = {
            validBeforePayment:
                [
                ],
            validAfterPayment:
                [
                    this.paymentPlanStateNames.Grid,
                    this.paymentPlanStateNames.Receipt
                ]
        };
        

        //EZ Tag Flow
        this.authDictionary[this.paymentPlanStateNames.AccountOverviewSummary] = {
            validBeforePayment:
                [
                    this.paymentPlanStateNames.AccountOverviewSummary,
                    this.paymentPlanStateNames.AccountOverviewSelectPayment
                ]
        };
        this.authDictionary[this.paymentPlanStateNames.AccountOverviewSelectPayment] = {
            validBeforePayment:
                [
                    this.paymentPlanStateNames.AccountOverviewSummary,
                    this.paymentPlanStateNames.AccountOverviewSelectPayment,
                    this.paymentPlanStateNames.AccountOverviewConfirm
                ]
        };
        this.authDictionary[this.paymentPlanStateNames.AccountOverviewConfirm] = {
            validBeforePayment:
                [
                    this.paymentPlanStateNames.AccountOverviewSummary,
                    this.paymentPlanStateNames.AccountOverviewSelectPayment,
                    this.paymentPlanStateNames.AccountOverviewConfirm,
                    this.paymentPlanStateNames.AccountOverviewReceipt
                ]
        };
        this.authDictionary[this.paymentPlanStateNames.AccountOverviewReceipt] = {
            validAfterPayment:
                [
                    this.paymentPlanStateNames.AccountOverviewReceipt,
                    this.paymentPlanStateNames.AccountOverviewSummary
                ]
        };
    };

    public saveStep = (currentStateName: string, isEzTagFlag: boolean) => {
        this.webStorage.setKeyValue(
            isEzTagFlag
                ? this.ACCOUNTOVERVIEW_PAYMENTPLANS_CURRENT_STEP
                : this.PAYMENTPLANS_CURRENT_STEP, currentStateName);
    };

    public destroyPaymentPlansCurrentStep = (isEzTagFlag: boolean) => {
        this.webStorage.removeEntry(
            isEzTagFlag
                ? this.ACCOUNTOVERVIEW_PAYMENTPLANS_CURRENT_STEP
                : this.PAYMENTPLANS_CURRENT_STEP);

        this.clearCachedEftAddressInfo();
    };

    public getCachedEftAddressInfo(): { [key: string]: IMailingInfo } {
        return this.webStorage.getValue(this.EFT_CACHED_ADDRESS_INFO);
    }

    public setCachedEftAddressInfo(cache: { [key: string]: IMailingInfo }) {
        this.webStorage.setKeyValue(this.EFT_CACHED_ADDRESS_INFO, cache);
    }

    public clearCachedEftAddressInfo() {
        this.webStorage.removeEntry(this.EFT_CACHED_ADDRESS_INFO);
    }

    public getCurrentStep = (isEzTagFlag: boolean) => this.webStorage.getValue(
            isEzTagFlag
                ? this.ACCOUNTOVERVIEW_PAYMENTPLANS_CURRENT_STEP
                : this.PAYMENTPLANS_CURRENT_STEP);

    public isPaymentComplete = (isEzTagFlag: boolean): boolean => this.webStorage.getValue(
            isEzTagFlag
                ? this.ACCOUNTOVERVIEW_PAYMENT_COMPLETE
                : this.PAYMENT_COMPLETE);


    public isAcceptableState = (savedState: string, attemptedState: string, isEzTagFlag: boolean) => {

        if (attemptedState === this.paymentPlanStateNames.AccountOverviewSummary) {
            return true;
        }

        const goingToStart = attemptedState === this.paymentPlanStateNames.Landing
            || attemptedState === this.paymentPlanStateNames.AccountOverviewSummary;

        if (!savedState && goingToStart) {
            return true;
        }

        const savedStateEntry = this.authDictionary[savedState];

        if (savedStateEntry) {

            let validStatesList;

            if (this.isPaymentComplete(isEzTagFlag)) {
                // validAfterPayment property only exists for authDictionary entries that can transition back
                // into violations even after payment has been made (ie violationsConfirmPayment)
                validStatesList = savedStateEntry.validAfterPayment;
            } else {
                validStatesList = savedStateEntry.validBeforePayment;
            }

            // null check in the event validAfterPayment or validBeforePayment doesn't exist on the entry
            return validStatesList && (validStatesList.indexOf(attemptedState) > -1);
        }

        return false;
    };    
}
