import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/angular';
import { stateNames as profileStateNames } from 'profile/constants';

export interface CancelPopUpInjectionValues {
    Title: string;
    PrimaryContent: string;
    ContinueButton: string;
    RejectButton: string;
}

@Component({
    selector: 'cancel-modal-component',
    templateUrl: './cancelModal.html',
    styleUrls: ['./cancelModal.less']
})
export class CancelPopUpModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<CancelPopUpModalComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: CancelPopUpInjectionValues,
        private state: StateService
    ) { }

    public cmsContent: CancelPopUpInjectionValues;

    ngOnInit() {
        this.cmsContent = this.injectedData;
    }

    public continueButtonClick() {
        this.state.go(profileStateNames.AccountDetails);
        this.dialogRef.close();
    }

    public close() {
        this.dialogRef.close();
    }
}
