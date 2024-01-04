import { Component, OnInit } from '@angular/core';
import { DialogRef } from 'common/services';
import { ViolationDataEntry } from 'missedatoll/interfaces';


export interface InjectionValues {
    uninvoicedDetails: ViolationDataEntry;
}

@Component({
    selector: 'missed-a-toll-violations-uninvoiced-details',
    templateUrl: './uninvoicedDetailsModal.html',
    styleUrls: ['./uninvoicedDetailsModal.less']
})
export class UninvoicedDetailsModalComponent implements OnInit {

    constructor(
        private dialogRef: DialogRef<InjectionValues>
    ) { }

    public data = {} as InjectionValues;

    public close() {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.data = { ...this.dialogRef.data };
    }
}
