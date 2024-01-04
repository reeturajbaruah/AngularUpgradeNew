import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafeHtmlPipe } from 'pipes/safeHtml.pipe';

export interface InjectionValues {
    ModalHeader: string;
    ModalBodyText: string;
}

@Component({
    selector: 'unsupported-browser-modal',
    templateUrl: './unsupportedBrowserModal.html',
    styleUrls: ['./unsupportedBrowserModal.less']
})
export class UnsupportedBrowserModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<InjectionValues>,
        @Inject(MAT_DIALOG_DATA) private injectedValues: InjectionValues
    ) { }


    public cmsContent = {} as InjectionValues;

    public close() {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.cmsContent = { ...this.injectedValues };
    }
}
