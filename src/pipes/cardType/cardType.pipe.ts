import { Pipe, PipeTransform } from '@angular/core';
import { CreditCardTypeService } from 'common/billing';

@Pipe({ name: 'cardType' })
export class CardTypePipe implements PipeTransform {

    constructor(private creditCardTypes: CreditCardTypeService) { }

    transform(cardCode) {
        return this.creditCardTypes.cardCodeToName(cardCode);
    }
}
