import {
    Component, EventEmitter, Input, OnInit, Output, Inject
} from '@angular/core';
import { IInputFieldMetadata } from './interfaces/input-filemetadata.interface';
import { ISelectableViolationPlate } from './interfaces/selectable-violations-plate.interface';
import { ISelectable } from './interfaces/selectable.interface';
import { IViolationInvoice } from '../../interfaces/violationIinvoice.interface';
import { IViolation } from './interfaces/violation.interface';
import { IInvoiceOverPaymentCmsData } from './interfaces/invoice-overpayment-cmddatata.interface';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { Decimal } from 'decimal.js-light';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
    selector: 'violations-details-rows',
    templateUrl: './violationsDetails.component.html',
    styleUrls: ['./violationsDetails.component.less']
})
export class ViolationsDetailsComponent implements OnInit {

    constructor(@Inject(ENVIRON_CONFIG) public environmentConfig) { }

    @Input() totalDescription: string;
    @Input() plate: ISelectableViolationPlate;
    @Input() paginatedPlate: ISelectableViolationPlate;
    @Input() isEditAllowed: boolean;
    @Input() arePlatesExpanded: boolean;
    @Input() cmsDataOverPmnt: IInvoiceOverPaymentCmsData;
    @Input() caoToolTipCms: string;
    @Input() hideFooter: boolean;
    @Input() isSuspendedAccount: boolean;
    @Input() selectAllAsDefault: boolean;
    @Input() id: string;
    @Input() disableSelectAll: boolean;

    @Output() afterComputeTotals = new EventEmitter<any>();
    @Output() changeAllSelected = new EventEmitter<any>();

    public areAllSelected: boolean;
    public total: number;
    public checkboxMetadata: IInputFieldMetadata;
    public resizeObservable$: Observable<Event>;
    public resizeSubscription$: Subscription;
    public isLtMd: boolean;

    public get plateHasInvoicedViolations() {
        return !!this.paginatedPlate.invoices && this.paginatedPlate.invoices.length > 0;
    }

    computeSelectAll() {
        const allSelected = this.isEveryChildSelected();

        if (this.areAllSelected !== allSelected) {
            this.areAllSelected = allSelected;
            this.changeAllSelected.emit();
        }
    }

    computePaymentAmount() {
        this.computeTotals();

        this.total = this.plate.totalSelected;
    }

    private computeTotals() {
        if (this.environmentConfig.isMergeMATandVioOn) {
            const sumPartials = (list) => list
                .map(x => x.paymentAmount || 0)
                .reduce((a, b) => a.plus(b), new Decimal(0));

            const sumFullDiscount = (list) => list
                .map(x => {
                    if (x.paymentAmount === x.invoiceDueBeforeDiscount) {
                        x.isPartialPay = false;
                        return x.invoiceLevelDiscount;
                    } else {
                        x.isPartialPay = true;
                        return 0;
                    }
                })
                .reduce((a, b) => a.plus(b), new Decimal(0));

            this.plate.totalSelected = sumPartials(this.plate.invoices).plus(sumPartials(this.plate.uninvoicedViolations)).toNumber();
            this.plate.totalFeesDiscountedFRP3 = this.plate.totalFeesDiscounted = sumFullDiscount(this.plate.invoices);
            this.plate.totalPaymentAmountFRP3 = new Decimal(this.plate.totalSelected)
                .plus(this.plate.totalSelected > 0 ? this.plate.serviceFee : 0)
                .minus(this.plate.totalFeesDiscountedFRP3).toNumber();
            this.plate.remainingBalance = new Decimal(this.plate.plateDueBeforeDiscount).minus(this.plate.totalSelected).toNumber();
        } else {
            const sumPartials = (list) => list
                .map(x => x.paymentAmount || 0)
                .reduce((a, b) => a + b, 0);

            const sumFullDiscount = (list) => list
                .map(x => x.paymentAmount === x.invoiceDueBeforeDiscount ? x.invoiceLevelDiscount : 0)
                .reduce((a, b) => a + b, 0);

            this.plate.totalSelected = sumPartials(this.plate.invoices) + sumPartials(this.plate.uninvoicedViolations);
            this.plate.totalFeesDiscountedFRP3 = this.plate.totalFeesDiscounted = sumFullDiscount(this.plate.invoices);
            this.plate.totalPaymentAmountFRP3 = this.plate.totalSelected + this.plate.serviceFee - this.plate.totalFeesDiscountedFRP3;
            this.plate.remainingBalance = this.plate.plateDueBeforeDiscount - this.plate.totalSelected;
        }

        this.afterComputeTotals.emit();
    }

    changeSelectAll() {

        if (this.isEveryChildSelected() !== this.areAllSelected) {
            this.applyCheckEventToAll();
        }

    }

    private applyCheckEventToAll() {
        this.plate.checked = this.areAllSelected;

        (this.plate as ISelectableViolationPlate).invoices.forEach(
            item => this.setPaymentAmountAndChecked(item, item.invoiceDueBeforeDiscount, 0));
        (this.plate as ISelectableViolationPlate).uninvoicedViolations.forEach(
            item => this.setPaymentAmountAndChecked(item, item.tollAmount, 0));

        this.computePaymentAmount();
    }

    private setPaymentAmountAndChecked(item: (IViolation | IViolationInvoice) & ISelectable,
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
        const isChecked = (x: ISelectable): boolean => x.checked;

        const allInvoicesSelected = this.plate.invoices.every(isChecked);
        const allUninvoicedViolationsSelected = this.plate.uninvoicedViolations.every(isChecked);

        return allInvoicesSelected && allUninvoicedViolationsSelected;
    }

    //This is for backwards compatibility. Once we get rid of the CAF Toggle we can remove this
    public isInvoice(violation: IViolationInvoice | IViolation): boolean {
        return violation.isInvoice || Array.isArray((violation as IViolationInvoice).violations); 
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
        if (this.selectAllAsDefault && !this.areAllSelected) {
            this.areAllSelected = true;
            this.changeSelectAll();
        }
        this.isLtMd = window.innerWidth <= 959;
        this.resizeObservable$ = fromEvent(window, 'resize');
        this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
            if (window.innerWidth <= 959 !== this.isLtMd) {
                this.computeSelectAll();
                this.isLtMd = !this.isLtMd;
            }
        });
    }
}
