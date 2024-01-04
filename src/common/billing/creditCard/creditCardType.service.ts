import { Injectable, Inject } from '@angular/core';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { CreditCardType } from 'common/models';

@Injectable()
export class CreditCardTypeService {
    constructor(
        @Inject(ENVIRON_CONFIG) private environmentConfig,
    ) { }


    public findCardCode = (cardNumber: string): string => {
        if (/^\*{1}/.test(cardNumber)) { return 'NA'; }

        if (cardNumber && cardNumber.length >= 4) {
            if (this.isCardOfType('visa', cardNumber)) { return 'V'; }
            else if (this.isCardOfType('mastercard', cardNumber)) { return 'M'; }
            else if (this.isCardOfType('americanExpress', cardNumber)) { return 'A'; }
            else if (this.isCardOfType('discover', cardNumber)) { return 'D'; }
        }

        return 'NA';
    };

    public cardCodeToName = (code: string) => {
        switch (code) {
            case 'V':
                return CreditCardType.visa;
            case 'M':
                return CreditCardType.mastercard;
            case 'D':
                return CreditCardType.discover;
            case 'A':
                return CreditCardType.amex;
            default:
                return undefined;
        }
    };

    private isCardOfType = (cardTypeName: string, cardNumber: string): boolean => {
        const cardPrefixes = this.environmentConfig.cardTypeDefinitions[cardTypeName].Prefixes;
        const cardRegexes = cardPrefixes.map(u => new RegExp(u));
        return cardRegexes.reduce((u, v) => u || v.test(cardNumber), false); // if string matches any of the prefixes, return true
    }; 
}
