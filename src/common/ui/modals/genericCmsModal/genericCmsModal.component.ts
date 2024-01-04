import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface GenericCmsModalContent {
    Title: string;
    PrimaryContent: string;
    AcceptBtn: string;
    CancelBtn?: string;
}

export interface GenericCmsModalInjectionValues {
    cmsContent: GenericCmsModalContent;
}

@Component({
    selector: 'generic-cms-modal-component',
    templateUrl: './genericCmsModal.html',
    styleUrls: ['./genericCmsModal.less']
})
export class GenericCmsModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<GenericCmsModalComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: GenericCmsModalInjectionValues,
    ) { }

    public cmsContent: GenericCmsModalContent;

    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
    }

    public acceptButtonClick() {
        this.dialogRef.close(true);
    }

    public cancelButtonClick() {
        this.dialogRef.close(false);
    }
}
