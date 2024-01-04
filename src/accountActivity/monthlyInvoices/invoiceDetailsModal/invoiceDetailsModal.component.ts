import { Component, OnInit } from '@angular/core';
import { InjectionModel } from 'accountActivity/monthlyInvoices/invoiceDetails/invoiceDetails.component';
import { TransactionRecord } from 'accountDashboard/services';
import { DialogRef } from 'common/services';
import { filter } from 'lodash';

@Component({
    selector: 'invoice-details-modal',
    templateUrl: './invoiceDetailsModal.html',
    styleUrls: ['./invoiceDetailsModal.less']
})
export class InvoiceDetailsModalComponent implements OnInit {
    constructor(private dialogRef: DialogRef<InjectionModel>) { }

    public selectedInvoice: {
        plateTagId: string;
        amount: number;
    };
    public modalTitle: string;
    public arrayToDisplay: TransactionRecord[];
    public totalAmount = 0;
    public invoiceDetails: TransactionRecord[];

    ngOnInit() {
        this.invoiceDetails = this.dialogRef.data.details;
        this.modalTitle = this.dialogRef.data.selectedInvoice.plateTagId;
        this.totalAmount = this.dialogRef.data.selectedInvoice.amount;
    }
}
