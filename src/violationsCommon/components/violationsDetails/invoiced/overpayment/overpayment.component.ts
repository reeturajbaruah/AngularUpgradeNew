import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CmsImage } from 'common/interfaces';
import { CmsUtilService } from 'cms/services';
import { IInjectionValues } from './interfaces/injectionvalues.interface';
import { ICmsContent } from './interfaces/cmscontent.interface';

@Component({
    selector: 'overpayment-modal-component',
    templateUrl: './overpayment.component.html',
    styleUrls: ['./overpayment.component.less']
})
export class OverpaymentComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<OverpaymentComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: IInjectionValues
    ) { }

    public cmsContent: ICmsContent;
    public primaryContentParams = {};

    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
        this.primaryContentParams = { amountDue: this.injectedData.amountDue };
    }

    public close() {
        this.dialogRef.close();
    }

}
