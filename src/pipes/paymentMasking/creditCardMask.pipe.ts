import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maskCreditCard' })
export class CreditCardMaskPipe implements PipeTransform {

    constructor() { }

    transform(cardNbr: string, cardCode = '') {

        const value = (cardNbr || '').slice(-4);

        switch ((cardCode || '').toLowerCase()) {
            case 'v':
            case 'm':
            case 'd':
            case 'a':
                return '**** ' + value;
            default:
                return;
        }

    }
}
