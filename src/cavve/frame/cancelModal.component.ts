import {
    Component
} from '@angular/core';

import { DialogRef } from 'common/services';

export interface InjectedCancelationValues {
    question: string;
    rejectMessage: string;
    confirmMessage: string;
    isCancelled?: boolean;
}

@Component({
    selector: 'cavve-cancel-modal',
    templateUrl: './cancelModal.html',
    styleUrls: ['./cancelModal.less']
})
export class CancelModalComponent {
    constructor(
        private dialogRef: DialogRef<InjectedCancelationValues>  
    ) {
        this.question = dialogRef.data.question;
        this.rejectMessage = dialogRef.data.rejectMessage;
        this.confirmMessage = dialogRef.data.confirmMessage;
    }

    public question: string;
    public rejectMessage: string;
    public confirmMessage: string;

    public makeChoice(cancel: boolean) {
        this.dialogRef.data.isCancelled = cancel;
        this.dialogRef.close(this.dialogRef.data);
    }
}
