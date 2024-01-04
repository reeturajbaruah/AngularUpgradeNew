import { Component, Inject, OnInit } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface RebillOptInModalContent {
    Title: string;
    optInBtn: string;
    CancelBtn?: string;
    MainContent: string;
    success: string;
}

@Component({
    selector: 'rebill-opIn-modal-component',
    templateUrl: './rebillOptInModal.html',
    styleUrls: ['./rebillOptInModal.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class RebillOptInModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<RebillOptInModalComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: RebillOptInModalContent,
    ) { }

    public cmsContent: RebillOptInModalContent; 

    ngOnInit() {
        this.cmsContent = this.injectedData;
    }

    public acceptButtonClick() {
        this.dialogRef.close(true);
    }

    public cancelButtonClick() {
        this.dialogRef.close(false);
    }

}
