import { Component, Input } from '@angular/core';
import { InvoiceSummary } from 'accountActivity/interfaces';

@Component({
    selector: 'invoice-summary',
    templateUrl: './invoiceSummary.html',
    styleUrls: ['./invoiceSummary.less']
})
export class InvoiceSummaryComponent {
    constructor() {}

    @Input() summaries: InvoiceSummary[];
}