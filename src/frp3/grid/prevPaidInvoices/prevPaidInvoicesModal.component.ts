import { Component, OnInit } from '@angular/core';
import { DialogContent, DialogRef, DialogService } from 'common/services';
import { InjectionValues, IPlate, PrevPaidInvoicesData, EOViolationInvoice } from 'frp3/interfaces';
import { InvoicedDetailsComponent } from 'violationsCommon/components/violationsDetails/invoiced/invoicedDetails/invoicedDetails.component';

@Component({
    selector: 'previously-paid-invoices-component',
    templateUrl: './prevPaidInvoicesModal.html',
    styleUrls: ['./prevPaidInvoicesModal.less']
})
export class PrevPaidInvoicesComponent implements OnInit {

    private plate: IPlate;

    prevPaidInvoices: EOViolationInvoice[];

    constructor(
        private dialogRef: DialogRef<PrevPaidInvoicesData>,
        private dialogService: DialogService
    ) { }

    ngOnInit() {
        this.prevPaidInvoices = this.dialogRef.data.previouslyPaidInvoices;
        this.plate = this.dialogRef.data.plate;
    }

    openTollDetailsModal(index: number) {
        this.dialogService.openSliderFilled(InvoicedDetailsComponent,
            {
                invoiced: this.prevPaidInvoices[index],
                plate: this.plate,
                isPreviousPaid: true
            } as InjectionValues,
            {
                title: 'Invoice Details',
                hasBack: true
            } as DialogContent);
    }

}
