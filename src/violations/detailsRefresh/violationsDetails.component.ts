import {
    Component, Input, OnInit
} from '@angular/core';


import { SelectableViolationPlate, Violation, ViolationInvoice } from 'violations/interfaces';
import { InvoiceOverPaymentCmsData } from '../detailsRefresh';

export interface Selectable {
    checked: boolean;
}

export interface InputFieldMetadata {
    id: string;
    description: string;
}

@Component({
    selector: 'violations-details-rows-refresh',
    templateUrl: './violationsDetails.html',
    styleUrls: ['./violationsDetails.less']
})
export class ViolationsDetailsComponent implements OnInit {

    constructor() { }

    @Input() totalDescription: string;
    @Input() plate: SelectableViolationPlate;
    @Input() paginatedPlate: SelectableViolationPlate;
    @Input() isEditAllowed: boolean;
    @Input() arePlatesExpanded: boolean;
    @Input() cmsData: InvoiceOverPaymentCmsData;
    @Input() caoToolTipCms: string;
    public areAllSelected: boolean;
    public total: number;
    public checkboxMetadata: InputFieldMetadata;

    public get plateHasInvoicedViolations() {
        return !!this.paginatedPlate.invoices && this.paginatedPlate.invoices.length > 0;
    }

    computeSelectAll() {
        this.areAllSelected = this.isEveryChildSelected();
    }

    computePaymentAmount() {
        this.computeTotals();

        this.total = this.plate.totalSelected;
    }

    private computeTotals() {

        const sumPartials = (list) => list
            .map(x => x.paymentAmount || 0)
            .reduce((a, b) => a + b, 0);

        this.plate.totalSelected = sumPartials(this.plate.invoices) + sumPartials(this.plate.uninvoicedViolations);
        this.plate.remainingBalance = this.plate.plateDueBeforeDiscount - this.plate.totalSelected;
    }

    changeSelectAll() {

        if (this.isEveryChildSelected() !== this.areAllSelected) {
            this.applyCheckEventToAll();
        }

    }

    private applyCheckEventToAll() {
        this.plate.checked = this.areAllSelected;

        (this.plate as SelectableViolationPlate).invoices.forEach(
            item => this.setPaymentAmountAndChecked(item, item.invoiceDueBeforeDiscount, 0));
        (this.plate as SelectableViolationPlate).uninvoicedViolations.forEach(
            item => this.setPaymentAmountAndChecked(item, item.tollAmount, 0));

        this.computePaymentAmount();
    }

    private setPaymentAmountAndChecked(item: (Violation | ViolationInvoice) & Selectable,
        checkedDefaultAmount: number,
        notCheckedDefaultAmount: number) {

        if (!item.checked && this.areAllSelected) {
            item.paymentAmount = checkedDefaultAmount;
        } else if (item.checked && !this.areAllSelected) {
            item.paymentAmount = notCheckedDefaultAmount;
        }

        item.checked = this.areAllSelected;
    };

    private isEveryChildSelected() {
        const isChecked = (x: Selectable): boolean => x.checked;

        const allInvoicesSelected = this.plate.invoices.every(isChecked);
        const allUninvoicedViolationsSelected = this.plate.uninvoicedViolations.every(isChecked);

        return allInvoicesSelected && allUninvoicedViolationsSelected;
    }

    //This is for backwards compatibility. Once we get rid of the CAF Toggle we can remove this
    public isInvoice(violation: ViolationInvoice | Violation): boolean {
        return violation.isInvoice || Array.isArray((violation as ViolationInvoice).violations); 
    }

    ngOnInit() {
        this.computeTotals();
        this.checkboxMetadata = {
            id: 'checkboxSelectAll',
            description: 'Checkbox for Selecting All'
        };
        this.total = this.isEditAllowed
            ? 0
            : this.plate.plateDueBeforeDiscount;
    }
}
