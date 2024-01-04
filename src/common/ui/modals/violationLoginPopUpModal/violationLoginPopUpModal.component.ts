import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { stateNames as loginStateNames } from 'login/constants';
import { StateService } from '@uirouter/angular';
import { IAcctSearchResponse } from 'violationsCommon/services/services.index';
import { IViolationPlate } from 'violationsCommon/interfaces';
import { IPlate, PaymentPlanToolTip } from 'frp3/interfaces';
import { WebStorageConst } from 'constants/webstorage.constants';
import { stateNames } from 'paymentplans/constants';
import { WebStorageService } from '../../../services/webStorageService/webStorage.service';


export interface ViolationLoginPopUpModalCmsContent extends PaymentPlanToolTip {
    Title: string;
    ShortDescription?: string;
    LongDescription?: string;
    AcceptBtn?: string;
    CancelBtn?: string;
    extraPlatesText?: string;
    extraPlatesDivider?: string;
}

export interface ViolationLoginPopUpModalInjectionValues {
    cmsContent: ViolationLoginPopUpModalCmsContent;
    data?: IAcctSearchResponse;
}

export type VioloationModalPopupActionType = null | 'accept' | 'cancel' | 'paymentplan';

@Component({
    selector: 'violations-login-modal-component',
    templateUrl: './violationLoginPopUpModal.html',
    styleUrls: ['./violationLoginPopUpModal.less']
})
export class ViolationLoginPopUpModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<ViolationLoginPopUpModalComponent, VioloationModalPopupActionType>,
        @Inject(MAT_DIALOG_DATA) private injectedData: ViolationLoginPopUpModalInjectionValues,
        private state: StateService,
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst
    ) { }

    public cmsContent: ViolationLoginPopUpModalCmsContent;
    public associatedPlates: IViolationPlate[];
    public searchPlate: IViolationPlate;
    public totalViolatedAmount = 0;

    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
        this.searchPlate = this.injectedData.data.plate;
        this.associatedPlates = [] as IViolationPlate[];

        if (this.injectedData.data.associatedPlates) {
            this.associatedPlates = this.injectedData.data.associatedPlates.filter(p => p.plateDueBeforeDiscount > 0 || (p.plateDueBeforeDiscount === 0 && p.hasPaymentPlan)); 
        }

        this.totalViolatedAmount = this.associatedPlates.map(plate => plate.plateDueBeforeDiscount).reduce((a, b) => a + b, 0) + this.searchPlate.plateDueBeforeDiscount;
    }

    public acceptButtonClick() {
        this.dialogRef.close('accept');
        this.state.go(loginStateNames.Login);
    }

    public cancelButtonClick() {
        this.dialogRef.close('cancel');
    }

    goToPaymentPlans(plate: IViolationPlate): void {
        const maskedPlate = plate.licensePlate.includes('*');
        const plateData = {
            state: !maskedPlate ? plate.licenseState : null,
            // eslint-disable-next-line id-blacklist
            number: !maskedPlate ? plate.licensePlate : null
        } as IPlate;

        this.webStorage.setKeyValue(this.webStorageConst.vehicleSelected, plateData);
        this.dialogRef.close('paymentplan');
        window.open(this.state.href(stateNames.Landing), '_blank');
    }
   
}
