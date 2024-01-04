import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { CreditCardHelperService } from './credit-card-helper.sevice';



describe('Credit Card Helper Service', () => {

    let creditCardHelperService: CreditCardHelperService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CreditCardHelperService
            ]
        });

        creditCardHelperService = TestBed.inject(CreditCardHelperService);

    });

    it('defines the service', () => {
        expect(creditCardHelperService).toBeDefined();
    });

});

// describe('maskNumber', () => {

//     let component;
//     beforeEach(async () => {

//         tripos.canUse.and.callFake(() => Promise.resolve(false));
//         iframe.canUse.and.callFake(() => Promise.resolve(false));
//         litel.canUse.and.callFake(() => Promise.resolve(false));

//         component = await (await createFormWrap(CreditCardEntryComponent, c => {
//             c.litelStrategy = litel;
//             c.vantivStrategy = iframe;
//             c.triposStrategy = tripos;

//             c.creditCard = creditCard;
//         })).component;
//     });

//     ['V', 'VISA', 'MASTERCARD', 'M', 'DISCOVER', 'D'].forEach((cardCode) => {
//         it(`should mask ${cardCode}`, () => {
//             component.creditCard = {
//                 cardNbr: '4321234',
//                 cardCode
//             };

//             const result = component.maskNumber();

//             expect(result).toBe('**** **** **** 1234');
//             expect(component.creditCard.cardNbr).toBe('1234');
//         });
//     });

//     ['A', 'AMERICANEXPRESS'].forEach((cardCode) => {
//         it(`should mask ${cardCode}`, () => {
//             component.creditCard = {
//                 cardNbr: '4321234',
//                 cardCode
//             };

//             const result = component.maskNumber();

//             expect(result).toBe('**** ****** *1234');
//             expect(component.creditCard.cardNbr).toBe('1234');
//         });
//     });

//     it('should return empty if code is not recognized', () => {
//         component.creditCard = {
//             cardNbr: '4321234',
//             cardCode: 'Z '
//         };

//         const result = component.maskNumber();

//         expect(result).toBe('');
//         expect(component.creditCard.cardNbr).toBe('1234');
//     });

//     it('should return empty and not change cardNbr if cardNbr null', () => {
//         component.creditCard = {
//             cardNbr: null,
//             cardCode: 'Z '
//         };

//         const result = component.maskNumber();

//         expect(result).toBe('');
//         expect(component.creditCard.cardNbr).toBe(null);
//     });
// });