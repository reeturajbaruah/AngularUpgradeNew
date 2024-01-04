import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/angular'; 
import { stateNames as violationStates } from 'violations/constants';
import { MissedATollService } from '../services';
import { CmsImage } from 'common/interfaces';
import { CmsUtilService } from 'cms/services';

export interface CmsContent {
    Title: string;
    ShortDescription: string;
    LongDescription: string;
}

export interface CloseImage {
    Image: string;
}

export interface InjectionValues {
    cmsContent: CmsContent;
    closeImage: CloseImage;
}

@Component({
    selector: 'receipt-modal-component',
    templateUrl: './receiptModal.html',
    styleUrls: ['./receiptModal.less']
})
export class ReceiptModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<ReceiptModalComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: InjectionValues,
        private state: StateService,
        private cmsUtilService: CmsUtilService
    ) {
    }

    public cmsContent: CmsContent;
    public closeImage: CloseImage;
    public cmsImage: CmsImage;

    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
        this.cmsImage = this.cmsUtilService.parseAllImageAttributes(this.injectedData.closeImage.Image);
    }

    public payInvoiceClick() {

        this.state.go(violationStates.Landing);
        this.dialogRef.close();
    }

    public close() {

        this.dialogRef.close();

    }

}
