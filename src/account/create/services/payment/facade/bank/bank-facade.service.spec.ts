import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { AddressInfo, BankDetails, BillingInfo, BillingType, CreditCardDetails, IAddorUpdatePaymentMethodandRebillAmountRequest, IPaymentMethodDetails } from '../../../../../../common/models';
import { AccountService, CurrentUserService } from '../../../../../../common/services';
import { PaymentApiService } from '../../api/payment-api.service';
import { RebillFacadeService } from '../rebill-facade.service';
import { BankFacadeService } from './bank-facade.service';

describe('Bank Facade Service', () => {

    let bankFacadeService: BankFacadeService;
    let paymentApiServiceSpy: jasmine.SpyObj<PaymentApiService>;
    let accountServiceSpy: jasmine.SpyObj<AccountService>;
    let rebillFacadeServiceSpy: jasmine.SpyObj<RebillFacadeService>;
    let currentUserServiceSpy: jasmine.SpyObj<CurrentUserService>;

    beforeEach(() => {
        paymentApiServiceSpy = jasmine.createSpyObj('paymentApiServiceSpy', ['addBankAccount','updateBankAccout']);
        accountServiceSpy = jasmine.createSpyObj('accountServiceSpy', ['getAccountInfo']);
        rebillFacadeServiceSpy = jasmine.createSpyObj('rebillFacadeServiceSpy', ['updateRebillAmount']);
        currentUserServiceSpy = jasmine.createSpyObj('currentUserServiceSpy', ['updateAutoReplenishmentStatus']);

        TestBed.configureTestingModule({
            providers: [
                BankFacadeService,
                { provide: PaymentApiService, useFactory: () => paymentApiServiceSpy },
                { provide: AccountService, useFactory: () => accountServiceSpy },
                { provide: RebillFacadeService, useFactory: () => rebillFacadeServiceSpy },
                { provide: CurrentUserService, useFactory: () => currentUserServiceSpy}
            ]
        });

        bankFacadeService = TestBed.inject(BankFacadeService);
    });

    describe('should call submitPayment method of Bank Facade Service', () => {

        it('ADD operation', async () => {
            const paymentInfo = {
                amount: 1,
                billingType: BillingType.Eft,
                eft: { accountNumber: '1234' } as BankDetails & AddressInfo,
                credit: null
            };

            await bankFacadeService.submitPayment(paymentInfo.eft as BankDetails & AddressInfo, 'ADD');
            expect(paymentApiServiceSpy.addBankAccount).toHaveBeenCalledTimes(1);
        });

        it('UPDATE operation', async () => {
            const paymentInfo = {
                amount: 1,
                billingType: BillingType.Eft,
                eft: { accountNumber: '1234' } as BankDetails & AddressInfo,
                credit: null
            };

            await bankFacadeService.submitPayment(paymentInfo.eft as BankDetails & AddressInfo, 'UPDATE');
            expect(paymentApiServiceSpy.updateBankAccout).toHaveBeenCalledTimes(1);
        });

    });

    it('should call addorUpdatePaymentMethodandRebillAmountofEFT of Bank Facade Service', async () => {
        const billingInfoForCreditorEFT = {
            credit: {
                country: 'USA', displayCountry: 'USA', international: false, address1: '1900 Augusta Dr', state: 'TX', city: 'Houston',
                paypageRegistrationId: '333', cardNbr: '411111111111111', accountBillingMethodId: 123455
            } as CreditCardDetails & AddressInfo,
            eft: { country: 'USA', displayCountry: 'USA', international: false, nameOnBankAccount: 'test' },
            billingInfoExists: true,
            paymentMethodDetails: { showCashOption: true, enableCashOption: true } as IPaymentMethodDetails,
            autoReplenishmentStatus: true,
            savePaymentStatus: true
        } as BillingInfo;

        const addressInfoObj = {
            address1: 'address1',
            address2: 'address2',
            address3: 'address3',
            address4: 'address4',
            city: 'city',
            state: 'state',
            zip: 'zip',
            plus4: 'plus4',
            country: 'country',
            displayCountry: 'USA',
            international: false,
        };

        const paymentInfo = {
            billingInfo: billingInfoForCreditorEFT,
            mailingInfo: addressInfoObj,
            paymentOperation: 'ADD'
        };
       
        paymentApiServiceSpy.addBankAccount.and.returnValue(Promise.resolve(true));
        await bankFacadeService.addorUpdatePaymentMethodandRebillAmountofEFT(paymentInfo as IAddorUpdatePaymentMethodandRebillAmountRequest);
        expect(paymentApiServiceSpy.addBankAccount).toHaveBeenCalledTimes(1);
    });

    it('should call addPaymentMethodandRebillAmountofEFT of Bank Facade Service', async () => {
        const billingInfoForCreditorEFT = {
            credit: {
                country: 'USA', displayCountry: 'USA', international: false, address1: '1900 Augusta Dr', state: 'TX', city: 'Houston',
                paypageRegistrationId: '333', cardNbr: '411111111111111', accountBillingMethodId: 123455
            } as CreditCardDetails & AddressInfo,
            eft: { country: 'USA', displayCountry: 'USA', international: false, nameOnBankAccount: 'test' },
            billingInfoExists: true,
            paymentMethodDetails: { showCashOption: true, enableCashOption: true } as IPaymentMethodDetails,
            autoReplenishmentStatus: true,
            savePaymentStatus: true
        } as BillingInfo;

        const addressInfoObj = {
            address1: 'address1',
            address2: 'address2',
            address3: 'address3',
            address4: 'address4',
            city: 'city',
            state: 'state',
            zip: 'zip',
            plus4: 'plus4',
            country: 'country',
            displayCountry: 'USA',
            international: false,
        };

        const paymentInfo = {
            billingInfo: billingInfoForCreditorEFT,
            mailingInfo: addressInfoObj,
            paymentOperation: 'ADD'
        };

        paymentApiServiceSpy.addBankAccount.and.returnValue(Promise.resolve(true));
        await bankFacadeService.addPaymentMethodandRebillAmountofEFT(paymentInfo as IAddorUpdatePaymentMethodandRebillAmountRequest);
        expect(paymentApiServiceSpy.addBankAccount).toHaveBeenCalledTimes(1);
    });

});
