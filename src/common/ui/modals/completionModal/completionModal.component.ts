import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/angular';
import { stateNames as profileStateNames } from 'profile/constants';

export interface CompletionModalCmsContent {
    Title: string;
    PrimaryContent: string;
    AcceptButton: string;
}

export interface CompletionModalInjectionValues {
    cmsContent: CompletionModalCmsContent;
}

@Component({
    selector: 'completion-modal-component',
    templateUrl: './completionModal.html',
    styleUrls: ['./completionModal.less']
})
export class CompletionModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<CompletionModalComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: CompletionModalInjectionValues,
        private state: StateService
    ) { }

    public cmsContent: CompletionModalCmsContent;

    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
    }

    public acceptButtonClick() {
        this.state.go(profileStateNames.AccountDetails);
        this.dialogRef.close();
    }
}
