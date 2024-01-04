import { Component, Input, OnInit } from '@angular/core';
import { AddressInfo, CreditCardDetails } from 'common/models';
import { Labels } from '../paymentConfirmation.interface';


@Component({
    selector: 'creditcard-details',
    styleUrls: ['./creditcardDetails.component.less'],
    templateUrl: './creditcardDetails.component.html'
})
export class CreditCardDetailsComponent {

    @Input() creditCardDetails: CreditCardDetails & AddressInfo;
    labels = Labels;

    constructor() {

    }

    get maskedCreditCardNumber(): string {
        const code = this.creditCardDetails.cardCode || '';
        const value = (this.creditCardDetails.cardNbr || '').slice(-4);

        switch (code.toLowerCase()) {
            case 'v':
            case 'm':
            case 'd':
            case 'a':
                return '**** ' + value;
            default:
                return;
        }
    }

    get cardExpires(): string {
        return this.creditCardDetails.expMonth + '/' + this.creditCardDetails.expYear;
    }
}
