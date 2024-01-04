import { } from 'jasmine';

import { BillingDataService } from './billingData.service';

import { CreditCardTypeService, ExpirationDateService } from 'common/billing';
import { CountryConversionService } from 'common/conversions';

import { ToasterService } from 'common/services';

import { BillingType, PaymentMethodInfo, BillingInfo } from 'common/models';

describe('billingDataService', () => {

    let service: BillingDataService;
    let httpService: jasmine.SpyObj<any>;
    let countryConversionService: jasmine.SpyObj<CountryConversionService>;
    let creditCardTypeService: jasmine.SpyObj<CreditCardTypeService>;
    let expirationDateService: jasmine.SpyObj<ExpirationDateService>;
    let billingInfoUtilitiesService: jasmine.SpyObj<any>;
    let toastService: jasmine.SpyObj<ToasterService>;
    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        countryConversionService = jasmine.createSpyObj('countryConversionService', ['countryCodeToName']);
        creditCardTypeService = jasmine.createSpyObj('creditCardTypeService', ['cardCodeToName']);
        expirationDateService = jasmine.createSpyObj('expirationDateService', ['isDateValid']);
        billingInfoUtilitiesService = jasmine.createSpyObj('billingInfoUtilitiesService', ['isInternationalAddress']);
        toastService = jasmine.createSpyObj('toastService', ['show']);

        service = new BillingDataService(
            httpService,
            countryConversionService,
            creditCardTypeService,
            expirationDateService,
            billingInfoUtilitiesService,
            toastService);
    });

    describe('canary', () => {

        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('numberWithOrdinalSuffix', () => {

        [1, 21, 31, 91]
            .forEach(input => {
                it('should return correct numberWithOrdinalSuffix st for numbers ending in 1', () => {
                    expect(service['numberWithOrdinalSuffix'](input)).toEqual(input + 'st');
                });
            });

        [2, 22, 32, 92]
            .forEach(input => {
                it('should return correct numberWithOrdinalSuffix st for numbers ending in 2', () => {
                    expect(service['numberWithOrdinalSuffix'](input)).toEqual(input + 'nd');
                });
            });

        [3, 23, 33, 93]
            .forEach(input => {
                it('should return correct numberWithOrdinalSuffix st for numbers ending in 3', () => {
                    expect(service['numberWithOrdinalSuffix'](input)).toEqual(input + 'rd');
                });

            });

        [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 44, 55, 66, 77, 88, 99, 100, 111, 112, 113]
            .forEach(input => {
                it('should return correct numberWithOrdinalSuffix for provided numbers', () => {
                    expect(service['numberWithOrdinalSuffix'](input)).toEqual(input + 'th');
                });
            });
    });

    describe('getPaymentNameForAdd', () => {

        it('should return name ending in Bank Account when isEft true', () => {
            expect(service['getPaymentNameForAdd'](true, 2, 1)).toContain('Bank Account');
        });

        it('should return name ending in Card when isEft true', () => {
            expect(service['getPaymentNameForAdd'](false, 2, 1)).toContain('Card');
        });

        it('should return name beginning with numberWithOrdinalSuffix when maxEfts 1 ', () => {
            expect(service['getPaymentNameForAdd'](true, 1, 0)).toBe('a Bank Account');
        });

        it('should return name beginning with numberWithOrdinalSuffix when maxCards 1 ', () => {
            expect(service['getPaymentNameForAdd'](false, 1, 0)).toBe('a Card');
        });

        it('should return name beginning with numberWithOrdinalSuffix when maxEfts greater than 1 ', () => {
            expect(service['getPaymentNameForAdd'](true, 3, 0)).toBe('1st Bank Account');
        });

        it('should return name beginning with numberWithOrdinalSuffix when maxCards greater than 1 ', () => {
            expect(service['getPaymentNameForAdd'](false, 3, 1)).toBe('2nd Card');
        });
    });

    describe('getPaymentMethodDisplayDetails', () => {

        beforeEach(() => {

            creditCardTypeService.cardCodeToName.and.callFake((cardCode) => `string-${cardCode}` as any);
            billingInfoUtilitiesService.isInternationalAddress.and.callFake((a) => `international ${a.country}`);
            countryConversionService.countryCodeToName.and.callFake((a, b) => `countries ${JSON.stringify(a)}, country ${b}`);
            expirationDateService.isDateValid.and.returnValue(true);
        });

        it('should return empty object when paymentMethod is falsy', () => {
            expect(service['getPaymentMethodDisplayDetails'](true, null, [])).toEqual({});
        });

        it('should return accountInfo text for eft', () => {
            expect(service['getPaymentMethodDisplayDetails'](true, { accountNumber: 'something987654321' }, [])).toEqual({ accountInfo: 'Bank Account ****** 4321' });
        });

        it('should return credit card details for credit card', () => {

            expect(service['getPaymentMethodDisplayDetails'](false, {
                cardCode: 'X',
                cardNbr: '8901234',
                expMonth: 3,
                expYear: 2005,
                country: 'Zcountry'
            }, ['a', 'b', 'c'])).toEqual({
                accountInfo: 'string-X **** 1234',
                expiration: '03/05',
                expirationFullYear: '03/2005',
                isInternational: 'international Zcountry',
                displayCountry: `countries ["a","b","c"], country Zcountry`,
                isCardExpired: false
            } as any);

            expect(expirationDateService.isDateValid).toHaveBeenCalledWith(3, 2005);
        });

    });

    describe('isPrimary', () => {

        ['', null, undefined, false, 0].forEach(paymentMethod => {

            it('should return falsy value when paymentMethod is falsy', () => {

                expect(service['isPrimary'](paymentMethod as any)).toBeFalsy();
            });
        });

        [{}, { primary: false }, { primary: '' }, { primary: 0 }, { primary: null }].forEach(paymentMethod => {

            it('should return falsy value when paymentMethod.Primary is falsy', () => {

                expect(service['isPrimary'](paymentMethod as any)).toBeFalsy();
            });
        });

        [{ primary: true }, { primary: 'a' }, { primary: 2 }].forEach(paymentMethod => {

            it('should return truthy value when paymentMethod.Primary is truthy', () => {

                expect(service['isPrimary'](paymentMethod as any)).toBeTruthy();
            });
        });
    });

    describe('mapPaymentMethodToContainer', () => {

        beforeEach(() => {

            spyOn(service as any, 'isPrimary').and.callFake((a) => ({ func: 'isPrimary', in: a }));
            spyOn(service as any, 'getPaymentNameForAdd')
                .and
                .callFake((a, b, c) => `isEft ${a}, maxCount ${b}, index ${c}`);
            spyOn(service as any, 'getPaymentMethodDisplayDetails').and.callFake((isEft, paymentMethod, countryList) => ({
                isEft_: isEft,
                paymentMethod_: paymentMethod,
                countryList
            }));
            creditCardTypeService.cardCodeToName.and.callFake((cardCode) => `string-${cardCode}` as any);
        });


        it('should return correct output when currentPaymentMethod is falsy', () => {

            expect(
                service['mapPaymentMethodToContainer']('ZisEft' as any, 'ZmaxCount' as any, ['country'])('ZpaymentMethod', 'Zindex' as any)
            ).toEqual({
                isEft: 'ZisEft' as any,
                paymentName: 'isEft ZisEft, maxCount ZmaxCount, index Zindex',
                isSelected: false,
                paymentMethod: 'ZpaymentMethod',
                isPrimary: { func: 'isPrimary', in: 'ZpaymentMethod' } as any,
                isEft_: 'ZisEft' as any,
                paymentMethod_: 'ZpaymentMethod',
                countryList: ['country']
            } as any);
        });

    });

    describe('getPaymentContainers', () => {

        beforeEach(() => {

            spyOn(service as any, 'mapPaymentMethodToContainer')
                .and
                .callFake((a, b, d) =>
                    (e, f) =>
                        `isEft ${a}, maxCount ${b}, countryList ${JSON.stringify(d)}, currentPaymentMethod ${e}, index ${f}`);
        });


        it('should return an array matching size of passed array if provided paymentMethods has items equal to max count elements', () => {
            expect(service['getPaymentContainers']([1, 2], 2, 'fake is Eft' as any, [])).toEqual([
                'isEft fake is Eft, maxCount 2, countryList [], currentPaymentMethod 1, index 0',
                'isEft fake is Eft, maxCount 2, countryList [], currentPaymentMethod 2, index 1'] as any);
        });

        it('should return an extra payment method if array of provided paymentMethods has less than max count elements', () => {
            expect(service['getPaymentContainers']([], 3, true, [])).toEqual([
                'isEft true, maxCount 3, countryList [], currentPaymentMethod false, index 0' as any]);
        });

        it('should return an array matching size of passed array if provided paymentMethods has more than max count elements', () => {
            expect(service['getPaymentContainers']([1, 2, 3], 2, 'fake is Eft' as any, [])).toEqual([
                'isEft fake is Eft, maxCount 2, countryList [], currentPaymentMethod 1, index 0',
                'isEft fake is Eft, maxCount 2, countryList [], currentPaymentMethod 2, index 1',
                'isEft fake is Eft, maxCount 2, countryList [], currentPaymentMethod 3, index 2'] as any);
        });

    });

    describe('getAllPaymentContainers', () => {

        it('should return all paymentContainer for which paymentMethod is truthy', () => {
            expect(service['getAllPaymentContainers']([
                {},
                {},
                { paymentMethod: 'card1' },
                { paymentMethod: 'card2' },
                {},
                {},
                {}
            ], [
                {},
                {},
                { paymentMethod: 'eft1' },
                { paymentMethod: 'eft2' },
                { paymentMethod: 'eft3' },
                {},
                {},
                {}
            ])).toEqual([
                { paymentMethod: 'card1' },
                { paymentMethod: 'card2' },
                { paymentMethod: 'eft1' },
                { paymentMethod: 'eft2' },
                { paymentMethod: 'eft3' }
            ]);
        });
    });

    describe('isEftOnTop', () => {

        it('should return true if a bankAccount is primary', () => {
            expect(service['isEftOnTop']([
                {},
                {},
                {}
            ], [
                {},
                {},
                { primary: true }
            ])).toBe(true);
        });

        it('should return true if there exists at least on bankAccount and no credit cards', () => {
            expect(service['isEftOnTop']([], [{}])).toBe(true);
        });

        it('should return false if a credit card is primary', () => {
            expect(service['isEftOnTop']([
                {},
                {},
                { primary: true }
            ], [
                {},
                {},
                {}
            ])).toBe(false);
        });

        it('should return false if no efts', () => {
            expect(service['isEftOnTop']([], [])).toBe(false);
        });

        it('should return false if no efts and some cards ', () => {
            expect(service['isEftOnTop']([{}, {}], [])).toBe(false);
        });

        it('should return false if neither cards nor efts primary', () => {
            expect(service['isEftOnTop']([{}, {}], [{}, {}])).toBe(false);
        });
    });

    describe('showDelete', () => {

        [2, 3, 4, 5, 6, 7, 8, 100, 999, 1000000].forEach(length => {

            it('should return true when passed value is greater than 1 ', () => {
                expect(service['showDelete'](length)).toBe(true);
            });
        });

        [-99, 0, 1].forEach(length => {

            it('should return false when passed value is less than or equal to 1 ', () => {
                expect(service['showDelete'](length)).toBe(false);
            });
        });
    });

    describe('getBillingInformationFrom', () => {

        beforeEach(() => {

            billingInfoUtilitiesService.isInternationalAddress
                .and
                .callFake((a) => 'isInternational-' + a.name);
            countryConversionService.countryCodeToName
                .and
                .callFake((a, b) => `countries ${a}, country ${b}`);

            spyOn(service as any, 'getPaymentContainers')
                .and
                .callFake((a, b, c, d) => `paymentMethods ${a}, maxCount ${b}, isEft ${c}, countryList ${d}`);
            spyOn(service as any, 'getAllPaymentContainers')
                .and
                .callFake((a, b) => `all cards (${a}), efts (${b})`);

            spyOn(service as any, 'showDelete').and.callFake((a) => `length ${a}`);
            spyOn(service as any, 'isEftOnTop').and.callFake((a, b) => `isEftOnTop cards ${a} efts ${b}`);
        });

        it('should return fresh billingInformation from response', () => {
            expect(service.getBillingInformationFrom({
                isAccountInvoiced: 'is-account-invoiced',
                creditCards: 'Zcards',
                bankAccounts: 'Zefts',
                mailingAddress: { name: 'mail-address', country: 'Ycountry' },
                stateList: 'ZstateList',
                countryList: 'EcountryList',
                maxCards: 'OmaxCards',
                maxEfts: 'CmaxCards'
            })).toEqual({
                wasLoaded: true,
                isAccountInvoiced: 'is-account-invoiced',
                eftOnTop: 'isEftOnTop cards Zcards efts Zefts',
                stateList: 'ZstateList',
                countryList: 'EcountryList',
                mailingAddress: {
                    name: 'mail-address',
                    country: 'Ycountry',
                    isInternational: 'isInternational-mail-address',
                    displayCountry: 'countries EcountryList, country Ycountry'
                },
                cardContainers: 'paymentMethods Zcards, maxCount OmaxCards, isEft false, countryList EcountryList',
                eftContainers: 'paymentMethods Zefts, maxCount CmaxCards, isEft true, countryList EcountryList',
                allPaymentContainers: 'all cards (paymentMethods Zcards, maxCount OmaxCards, isEft false, countryList EcountryList), ' +
                    'efts (paymentMethods Zefts, maxCount CmaxCards, isEft true, countryList EcountryList)',
                showDelete: 'length 179'
            } as any);
        });
    });

    describe('addPaymentMethodInfo', () => {

        it('calls correct api to save - EFT', async () => {

            const response = { billingInfo: {} as PaymentMethodInfo, errors: [] };
            (httpService.post as jasmine.Spy).and.returnValue(response);

            const billingInfo = { billingType: BillingType.Eft } as BillingInfo;

            const errors = await service.updatePaymentInfo('a', billingInfo);

            expect(httpService.post).toHaveBeenCalledWith(service['addEftBillingInfoUrl'], {
                paymentMethod: {
                    ...billingInfo,
                    billingType: 1,
                    billingTypeCode: 'E',
                    billingTypeDisplay: 'EFT'
                }
            });
            expect(errors).toEqual([]);

        });

        it('calls correct api to save - CC', async () => {

            const response = { billingInfo: {} as PaymentMethodInfo, errors: [] };
            (httpService.post as jasmine.Spy).and.returnValue(response);

            const billingInfo = { billingType: BillingType.Credit } as BillingInfo;

            const errors = await service.updatePaymentInfo('a', billingInfo);

            expect(httpService.post).toHaveBeenCalledWith(service['addCreditBillingInfoUrl'], {
                paymentMethod: {
                    ...billingInfo,
                    billingType: 0,
                    billingTypeCode: 'C',
                    billingTypeDisplay: 'CREDIT'
                }
            });
            expect(errors).toEqual([]);

        });

    });
});    
