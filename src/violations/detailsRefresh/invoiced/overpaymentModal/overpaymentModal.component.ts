import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CmsImage } from 'common/interfaces';
import { CmsUtilService } from 'cms/services';

export interface CmsContent {
    Title: string;
    PrimaryContent: string;
}

export interface CloseImage {
    Image: string;
}

export interface InjectionValues {
    cmsContent: CmsContent;
    amountDue: number;
}

@Component({
    selector: 'overpayment-modal-component',
    templateUrl: './overpaymentModal.html',
    styleUrls: ['./overpaymentModal.less']
})
export class OverpaymentModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<OverpaymentModalComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: InjectionValues
    ) { }

    public cmsContent: CmsContent;
    public primaryContentParams = {};

    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
        this.primaryContentParams = { amountDue: this.injectedData.amountDue };
    }

    public close() {
        this.dialogRef.close();
    }

}
