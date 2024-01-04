import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/angular';
import { IAcctSearchResponse } from 'violationsCommon/services/services.index';
import { IViolationPlate } from 'violationsCommon/interfaces';
import { stateNames as paymentPlansStateNames } from 'paymentplans/constants';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

export interface PaymentPlansModalCmsContent {
    Title: string;
    ShortDescription?: string;
    LongDescription?: string;
    AcceptBtn?: string;
    CancelBtn?: string;
    associatedPlatesTitle: string;
}

export interface PaymentPlansModalInjectionValues {
    cmsContent: PaymentPlansModalCmsContent;
    searchedWithInvoice?: boolean;
    data?: IAcctSearchResponse;
}

export interface PaymentPlansModalResult {
    goToPaymentPlansLanding: boolean;
    goToPaymentPlansSearch: boolean;
}

@Component({
    selector: 'payment-plans-modal-component',
    templateUrl: './paymentPlansModal.html',
    styleUrls: ['./paymentPlansModal.less']
})
export class PaymentPlansModalComponent implements OnInit {

    public paymentPlanAssociatedPlates: IViolationPlate[];
    public searchPlate: IViolationPlate;
    public cmsContent: PaymentPlansModalCmsContent;
    public searchedWithInvoice: boolean;

    constructor(
        private dialogRef: MatDialogRef<PaymentPlansModalComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: PaymentPlansModalInjectionValues,
        public storefrontUtilityService: StorefrontUtilityService,
        private state: StateService
    ) { }

    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
        this.paymentPlanAssociatedPlates = this.injectedData.data.associatedPlates.filter(p => p.hasPaymentPlan);
        this.searchPlate = this.injectedData.data.plate;
        this.searchedWithInvoice = this.injectedData.searchedWithInvoice;
    }

    public acceptButtonClick() {
        if (!this.storefrontUtilityService.isRunningAsKiosk) {
            window.open(this.state.href(paymentPlansStateNames.Landing), '_blank');
        }
        this.dialogRef.close({
            goToPaymentPlansLanding: true,
            goToPaymentPlansSearch: false
        } as PaymentPlansModalResult);
    }

    public cancelButtonClick() {
        this.dialogRef.close({
            goToPaymentPlansLanding: false,
            goToPaymentPlansSearch: false
        } as PaymentPlansModalResult);
    }

    public async goToPaymentPlansGrid() {
        this.dialogRef.close({
            goToPaymentPlansLanding: false,
            goToPaymentPlansSearch: true
        } as PaymentPlansModalResult);
    }
}
