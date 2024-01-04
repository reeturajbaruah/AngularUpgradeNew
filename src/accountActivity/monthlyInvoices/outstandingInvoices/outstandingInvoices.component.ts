import { Component, Input } from '@angular/core';

@Component({
    selector: 'outstanding-invoices',
    templateUrl: './outstandingInvoices.html',
    styleUrls: ['./outstandingInvoices.less']
})
export class OutstandingInvoicesComponent {
    constructor() {}

    @Input() outstanding: number;
    @Input() cmsText: string;
}