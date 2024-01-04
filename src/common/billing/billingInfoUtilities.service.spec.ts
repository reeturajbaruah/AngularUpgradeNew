import { BillingInfoUtilitiesService } from './billingInfoUtilities.service';

describe('BillingInfoUtilitiesService', () => {

    let service: BillingInfoUtilitiesService;

    beforeEach(() => {

        service = new BillingInfoUtilitiesService();
    });

    describe('canary', () => {

        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('isPrimaryCCAvailable', () => {

        [
            { cards: [{ primary: true }, {}] },
            { cards: [{}, { primary: true }] },
            { cards: [{ primary: true }, { primary: true }] },
            { cards: [{ primary: true }] }
        ].forEach((billingInfo, index) => {

            it(`should return true for ${index} billingInfo ${JSON.stringify(billingInfo)}`, () => {

                expect(service.isPrimaryCCAvailable(billingInfo as any)).toBe(true);
            });
        });

        [
            { cards: [{}, {}] },
            { cards: [{}] },
            { cards: [] },
            {},
            null,
        ].forEach((billingInfo, index) => {

            it(`should return false for ${index} billingInfo ${JSON.stringify(billingInfo)}`, () => {

                expect(service.isPrimaryCCAvailable(billingInfo as any)).toBe(false);
            });
        });
    });

    describe('isInternationalAddress', () => {

        [
            { country: 'USA' },
            { country: 'US' },
            { country: null },
            {},
            null
        ].forEach((objWithCountry, index) => {

            it(`should return false for ${index} objWithCountry ${JSON.stringify(objWithCountry)}`, () => {

                expect(service.isInternationalAddress(objWithCountry as any)).toBe(false);
            });
        });

        [


            { country: 'UK' },
            { country: 'CA' },
            { country: 'MX' }
        ].forEach((objWithCountry, index) => {

            it(`should return true for ${index} objWithCountry ${JSON.stringify(objWithCountry)}`, () => {

                expect(service.isInternationalAddress(objWithCountry as any)).toBe(true);
            });
        });
    });

    describe('hasMultipleCards', () => {

        [
            null,
            [],
            [{}]
        ].forEach((cardsArray, index) => {

            it(`should return false for ${index} cardsArray ${JSON.stringify(cardsArray)}`, () => {

                expect(service.hasMultipleCards(cardsArray as any)).toBe(false);
            });
        });

        [
            [{}, {}],
            [{}, {}, {}],
            [{}, {}, {}, {}],
            [{}, {}, {}, {}, {}]
        ].forEach((cardsArray, index) => {

            it(`should return true for ${index} cardsArray ${JSON.stringify(cardsArray)}`, () => {

                expect(service.hasMultipleCards(cardsArray as any)).toBe(true);
            });
        });
    });

    describe('hasNoBillingInfo', () => {

        [
            { eft: {}, cards: [] },
            { eft: null, cards: [{}] },
            { eft: {}, cards: [{}, {}] }
        ].forEach((billingInfo, index) => {

            it(`should return false for ${index} billingInfo ${JSON.stringify(billingInfo)}`, () => {

                expect(service.hasNoBillingInfo(billingInfo as any)).toBe(false);
            });
        });

        [
            null,
            {},
            { eft: null, cards: [] }
        ].forEach((billingInfo, index) => {

            it(`should return true for ${billingInfo} billingInfo ${JSON.stringify(billingInfo)}`, () => {

                expect(service.hasNoBillingInfo(billingInfo as any)).toBe(true);
            });
        });
    });
});
