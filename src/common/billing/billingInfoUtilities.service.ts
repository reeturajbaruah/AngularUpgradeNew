import { Injectable } from '@angular/core';

@Injectable()
export class BillingInfoUtilitiesService {
    constructor() { }

    public isPrimaryCCAvailable(billingInfo: { cards: { primary: boolean }[] }): boolean {

        const isPrimaryCCAvailable = billingInfo &&
            billingInfo instanceof Object &&
            Array.isArray(billingInfo.cards) &&
            billingInfo.cards
                .filter(card => card && card instanceof Object)
                .some(card => card.primary);

        return !!isPrimaryCCAvailable;
    }

    public isInternationalAddress(objWithCountry: { country: string }): boolean {

        const isInternational = objWithCountry &&
            objWithCountry instanceof Object &&
            objWithCountry.country &&
            !['US', 'USA'].includes(objWithCountry.country);

        return !!isInternational;
    }

    public hasMultipleCards = (cardsArray: any[]) => Array.isArray(cardsArray) &&
            cardsArray
                .filter(card => card && card instanceof Object)
                .length > 1;

    public hasNoBillingInfo = (billingInfo: { eft: any; cards: any[] }) => {

        const hasBillingInfo = billingInfo &&
            billingInfo instanceof Object &&
            [...(Array.isArray(billingInfo.cards) ? billingInfo.cards : []), billingInfo.eft]
                .filter(billingMethod => billingMethod && billingMethod instanceof Object)
                .length > 0;


        return !hasBillingInfo;
    };
}
