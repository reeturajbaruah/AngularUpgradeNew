import { Injectable } from '@angular/core';
import { CreditCardDetails } from 'common/models';

@Injectable()
export class CreditCardHelperService {

    maskNumber(creditCardDetails: CreditCardDetails) {

        //creating new reference not to update the same reference.
        const creditCard={...creditCardDetails};

        if (!creditCard.cardNbr) { return ''; }

        const cardNumber = creditCard.cardNbr.trim().replace(/\D/g, '').slice(-4);
        creditCard.cardNbr = cardNumber;
        const type = (creditCard.cardCode || '').toLowerCase().replace(' ', '');

        switch (type) {
            case 'visa': // ****-****-****-####
            case 'v':
            case 'mastercard':
            case 'm':
            case 'discover':
            case 'd':
                return '**** **** **** ' + cardNumber;
            case 'americanexpress': //****-******-*####
            case 'a':
                return '**** ****** *' + cardNumber;
        }
        return '';
    };

}

