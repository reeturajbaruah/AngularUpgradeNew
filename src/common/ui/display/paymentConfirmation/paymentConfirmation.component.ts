import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressInfo, BankDetails, BillingInfo, BillingType, CreditCardDetails } from 'common/models';
// import { IPaymentConfirmConfig, Labels } from './payment-confirm.interface';
import { IPaymentConfirmConfig, Labels } from './paymentConfirmation.interface';


@Component({
    selector: 'payment-confirmation',
    styleUrls: ['./paymentConfirmation.component.less'],
    templateUrl: './paymentConfirmation.component.html'
})
export class PaymentConfirmationComponent implements OnInit {

    @Input() paymentConfirmConfig: IPaymentConfirmConfig = {} as IPaymentConfirmConfig;
    header: string;
    paymentDetailsHeader: string;
    isEdit: boolean;
    @Input() billingInfo: BillingInfo;
    public BillingType = BillingType;

    creditCardDetails: CreditCardDetails & AddressInfo;
    bankDetails: BankDetails & AddressInfo;
    labels = Labels;
    showAccountNumber: boolean;
    @Output() edit = new EventEmitter();
    totalPaymentAmount: number;

    constructor() {

    }

    ngOnInit() {
        this.header = this.paymentConfirmConfig.header;
        this.paymentDetailsHeader = this.paymentConfirmConfig.paymentDetails.header.label;
        this.isEdit = this.paymentConfirmConfig.paymentDetails.header.showEditLink;
        this.showAccountNumber = this.paymentConfirmConfig.paymentDetails.showAccountNumber;
        this.totalPaymentAmount = this.paymentConfirmConfig.totalPaymentAmt;
        this.creditCardDetails = this.billingInfo.credit;
        this.bankDetails = this.billingInfo.eft;
    }

    public get address(): AddressInfo {
        if(this.billingInfo.billingType === BillingType.Credit) {
            return this.billingInfo.credit;
        } else if (this.billingInfo.billingType === BillingType.Eft) {
            return this.billingInfo.eft;
        } else {
            return null;
        }
    }

    get name(): string {

        if (this.billingInfo.billingType === BillingType.Credit) {
            return this.creditCardDetails.nameOnCard;
        } else if (this.billingInfo.billingType === BillingType.Eft) {
            return this.bankDetails.nameOnBankAccount || this.bankDetails.name;
        }

        return null;
    }

    public getDate(): Date {
        return new Date();
    }

    editable() {
        this.edit.emit();
    }

}
