import { Component, OnInit } from '@angular/core';
import { ViolationInvoice } from 'violations/interfaces';
import { DialogRef, DialogService, DialogContent } from 'common/services';
import { InvoicedDetailsModalComponent, InjectionValues } from 'violations/detailsRefresh/invoiced/invoicedDetailsModal.component';

export interface PrevPaidInvoicesData {
    previouslyPaidInvoices: ViolationInvoice[];
    // eslint-disable-next-line id-blacklist
    plate: { state: string; number: string };
}

@Component({
    selector: 'previously-paid-invoices',
    templateUrl: './prevPaidInvoicesModal.html',
    styleUrls: ['./prevPaidInvoicesModal.less']
})
export class PrevPaidInvoicesComponent implements OnInit {

    public prevPaidInvoices: ViolationInvoice[];
    // eslint-disable-next-line id-blacklist
    public plate: { state: string; number: string };

    constructor(
        private dialogRef: DialogRef<PrevPaidInvoicesData>,
        private dialogService: DialogService
    ) { }

    ngOnInit() {
        this.prevPaidInvoices = this.dialogRef.data.previouslyPaidInvoices;
        this.plate = this.dialogRef.data.plate;
    }

    public openTollDetailsModal(index) {
        this.dialogService.openSliderFilled(InvoicedDetailsModalComponent,
            {
                invoiced: this.prevPaidInvoices[index],
                plate: this.plate, isPreviousPaid: true
            } as InjectionValues,
            { title: 'Invoice Details', hasBack: true } as DialogContent);
    }
}
