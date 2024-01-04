import { Component, Input, OnInit } from '@angular/core';
import { AddressInfo, BankDetails } from 'common/models';
import { Labels } from '../paymentConfirmation.interface';


@Component({
    selector: 'bank-details',
    styleUrls: ['./bankDetails.component.less'],
    templateUrl: './bankDetails.component.html'
})
export class BankDetailsComponent {
    @Input() bankDetails: BankDetails & AddressInfo;
    @Input() showAccountNumber: boolean;
    labels = Labels;

    constructor() {

    }

    get maskedAccountNumber(): string {
        return '**** ' + (this.bankDetails.accountNumber || '****').slice(-4);
    }
}
