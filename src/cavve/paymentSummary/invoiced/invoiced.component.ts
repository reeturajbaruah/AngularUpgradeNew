import { Component, Input } from '@angular/core';

import { DialogService, DialogContent } from 'common/services';

import { InvoicedDetailsComponent } from 'violationsCommon/components/violationsDetails/invoiced/invoicedDetails/invoicedDetails.component';
import { InjectionValues, EOViolationInvoice } from 'frp3/interfaces';

@Component({
    selector: 'cavve-violations-invoiced',
    templateUrl: './invoiced.html',
    styleUrls: ['./invoiced.less']
})
export class InvoicedComponent {

    constructor(private dialogService: DialogService) { }

    @Input() public tollDetailsTitle: string;
    // eslint-disable-next-line id-blacklist
    @Input() plate: { number: string; state: string };
    @Input() invoiced: EOViolationInvoice;

    public openTollDetailsModal() {
        this.dialogService.openSliderFilled(InvoicedDetailsComponent,
            {
                invoiced: this.invoiced,
                plate: this.plate, isPreviousPaid: false
            } as InjectionValues,
            { title: 'Invoice Details', hasBack: true, hasClose: false } as DialogContent);
    }
}
