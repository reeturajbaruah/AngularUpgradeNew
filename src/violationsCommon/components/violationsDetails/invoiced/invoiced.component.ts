import {
    Component, Input, Output, OnInit,
    EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DownloadService, DialogService, DialogContent, ToasterService } from 'common/services';

import { collapseTrigger } from 'animations/collapse';

import { InvoicedDetailsComponent } from './invoicedDetails/invoicedDetails.component';
import { IInjectionValues as InvoicedDetailsModalInjectionValues } from './invoicedDetails/interfaces/injectionvalues.interface';

import { OverpaymentComponent } from './overpayment/overpayment.component';
import { ICloseImage as OverpaymentModalCloseImage } from './overpayment/interfaces/closeimage.interface';
import { ICmsContent as OverpaymentModalCmsContent } from './overpayment/interfaces/cmscontent.interface';
import { IInjectionValues as OverpaymentModalInjectionValues } from './overpayment/interfaces/injectionvalues.interface';

import { ISelectable } from '../interfaces/selectable.interface';
import { IViolationInvoice } from '../../../interfaces/violationIinvoice.interface';
import { IInputFieldMetadata } from '../interfaces/input-filemetadata.interface';
import { ICaoToolTipData } from './interfaces/cao-tooltip.interface';

@Component({
    selector: 'violations-invoiced-row',
    templateUrl: './invoiced.component.html',
    styleUrls: ['./invoiced.component.less'],
    animations: [collapseTrigger],
    providers: [
        //provides a separate instance for each invoice
        //the link for this invoice gets blocked but other links still work
        //remove this to block all pdf links when one is being downloaded 
        DownloadService
    ]
})
export class ViolationsInvoicedComponent implements OnInit, OnChanges {

    constructor(
        private downloadService: DownloadService,
        private matDialog: MatDialog,
        private dialogService: DialogService,
        private toastService: ToasterService
    ) { }

    // eslint-disable-next-line id-blacklist
    @Input() plate: { number: string; state: string };
    @Input() invoiced: IViolationInvoice & ISelectable;
    @Input() isEditAllowed: boolean;
    @Input() cmsData: OverpaymentModalCmsContent;
    @Input() isLast: boolean;
    @Input() isChecked: boolean;
    @Input() caoToolTipCms: string;
    @Input() isSuspendedAccount: boolean;
    @Output() selectionChange = new EventEmitter();
    @Output() paymentAmountChange = new EventEmitter();
    public areDetailsCollapsed: boolean;
    public paymentAmountString: string;
    private initialPaymentAmount: number;
    public checkboxMetadata: IInputFieldMetadata;
    public inputMetadata: IInputFieldMetadata;
    public caoToolTipData: ICaoToolTipData;

    get isDownloadBusy() {
        return this.downloadService.isBusy;
    }

    checkBoxChange() {
        this.invoiced.checked = this.isChecked;
        this.selectionChange.emit();

        const paymentAmount = this.isChecked
            ? (this.initialPaymentAmount || this.invoiced.invoiceDueBeforeDiscount)
            : 0;

        this.initialPaymentAmount = 0;
        this.paymentAmountString = this.updatePaymentAmount(paymentAmount);
    }

    //move input to row if partial payments for uninvoiced violations as well
    private updatePaymentAmount = (paymentAmount: number): string => {

        const twoDecimalPlaces = paymentAmount.toFixed(2);
        this.invoiced.paymentAmount = parseFloat(twoDecimalPlaces);
        this.paymentAmountChange.emit();

        return '$' + twoDecimalPlaces;
    };

    private parseCurrency(amount: string): number {
        const parsed = parseFloat(amount.replace('$', ''));

        return isNaN(parsed) ? 0 : parsed;
    }

    amountBlur() {
        let paymentAmount = this.parseCurrency(this.paymentAmountString);

        const isOverPayment = paymentAmount > this.invoiced.invoiceDueBeforeDiscount;

        if (isOverPayment) {
            this.showOverPaymentModal();
        }

        paymentAmount = isOverPayment
            ? this.invoiced.invoiceDueBeforeDiscount
            : paymentAmount;

        paymentAmount = paymentAmount < 0.01
            ? 0.01
            : paymentAmount;

        this.paymentAmountString = this.updatePaymentAmount(paymentAmount);
    }

    private showOverPaymentModal = () => {
        const settings: MatDialogConfig<OverpaymentModalInjectionValues> = {
            data: {
                cmsContent: this.cmsData as OverpaymentModalCmsContent,
                amountDue: this.initialPaymentAmount || this.invoiced.invoiceDueBeforeDiscount
            }
        };

        this.matDialog
            .open<OverpaymentComponent, OverpaymentModalInjectionValues>(OverpaymentComponent, settings);
    };

    amountChanged(newPaymentAmountString: string) {

        this.updatePaymentAmount(this.parseCurrency(newPaymentAmountString));

        const hasDollarSign = newPaymentAmountString.indexOf('$') > -1;

        this.paymentAmountString = (hasDollarSign ? '$' : '') + newPaymentAmountString.replace('$', '');
    }

    allowKey(key: string) {

        const isDigit = [...Array(10).keys()]
            .map(x => x.toString())
            .some(accept => accept === key);

        return isDigit ||
            (key === '$' && this.paymentAmountString === '') ||
            ((key === '.' || key === 'Del' /*IE numpad sends Del for dot*/) && this.paymentAmountString.indexOf('.') < 0);
    }

    ngOnInit() {
        this.areDetailsCollapsed = true;
        this.initialPaymentAmount = this.invoiced.paymentAmount; //paymentAmount not null when returning to page from billing, confirm

        this.caoToolTipData = {
            dueDate: this.invoiced.dueDate,
            futureAmt: this.invoiced.caoFineEstimate + this.invoiced.invoiceDueBeforeDiscount
        };

        const metaData = (prefix: string) => ({
            id: `${prefix.toLowerCase()}invoice${this.invoiced.invoiceNum}`,
            description: `${prefix} for Invoice ${this.invoiced.invoiceNum}`
        });

        this.checkboxMetadata = metaData('Checkbox');
        this.inputMetadata = metaData('Input');
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.isChecked) {
            if (changes.isChecked.currentValue && this.invoiced.checked) {
                // When the invoiced component is reloaded from pagination
                this.paymentAmountString = this.updatePaymentAmount(this.invoiced.paymentAmount);
            } else {
                this.checkBoxChange();
            }
        }
    }

    public openTollDetailsModal() {
        this.dialogService.openSliderFilled(InvoicedDetailsComponent,
            { invoiced: this.invoiced, plate: this.plate, isPreviousPaid: false, isSuspendedAccount: this.isSuspendedAccount } as InvoicedDetailsModalInjectionValues,
            {
                title: 'Invoice Details'
            } as DialogContent);
        this.toastService.removeAll();
    }
}
