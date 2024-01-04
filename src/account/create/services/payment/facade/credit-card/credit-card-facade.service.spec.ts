import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { CreditCardFacadeService } from './credit-card-facade.service';
import {
    AddressInfo, BillingInfo, BillingType, CreditCardDetails, IAddorUpdatePaymentMethodandRebillAmountRequest,
    IMailingInfo, IPaymentMethodDetails
} from 'common/models';
import { AccountService, CurrentUserService, GetAccountInformationResponse } from 'common/services';
import { PaymentApiService } from '../../api/payment-api.service';
import { RebillFacadeService } from '../rebill-facade.service';

describe('Credit Card Facade Service', () => {

    let rebillFacadeService: jasmine.SpyObj<RebillFacadeService>;
    let paymentApiService: jasmine.SpyObj<PaymentApiService>;
    let accountService: jasmine.SpyObj<AccountService>;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;
    let creditCardFacadeService: CreditCardFacadeService;

    beforeEach(() => {
        rebillFacadeService = jasmine.createSpyObj('rebillApiServiceSpy', ['updateRebillAmount']);
        paymentApiService = jasmine.createSpyObj('paymentApiService', ['removeBillingMethod', 'addCreditCard', 'updateCreditCard']);
        accountService = jasmine.createSpyObj('accountService', ['getAccountInfo']);
        currentUserService = jasmine.createSpyObj('currentUserService', ['updateAutoReplenishmentStatus']);

        TestBed.configureTestingModule({
            providers: [
                CreditCardFacadeService,
                { provide: RebillFacadeService, useValue: rebillFacadeService },
                { provide: PaymentApiService, useValue: paymentApiService },
                { provide: AccountService, useValue: accountService },
                { provide: CurrentUserService, useValue: currentUserService }
            ]
        });

        creditCardFacadeService = TestBed.inject(CreditCardFacadeService);
    });

    it('should add credit card payment correctly', async () => {
        const mailingInfo = {
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
        } as IMailingInfo;

        const paymentInfo = {
            billingType: BillingType.Credit,
            credit: {
                country: 'USA', displayCountry: 'USA', international: false, address1: '1900 Augusta Dr', state: 'TX', city: 'Houston',
                paypageRegistrationId: '333', cardNbr: '411111111111111', accountBillingMethodId: 123455, cardCode: '232', expMonth: 12, 
                expYear: 2024, nameOnCard: 'test', omniToken: 'test'
            } as CreditCardDetails & AddressInfo,
            eft: { country: 'USA', displayCountry: 'USA', international: false, nameOnBankAccount: 'test' },
            billingInfoExists: true,
            paymentMethodDetails: { showCashOption: true, enableCashOption: true } as IPaymentMethodDetails,
            autoReplenishmentStatus: true,
            savePaymentStatus: false
        } as BillingInfo;

        await creditCardFacadeService.submitPayment(paymentInfo.credit, mailingInfo,'ADD');

        expect(paymentApiService.addCreditCard).toHaveBeenCalled();
    });

    it('should UPDATE credit card payment correctly', async () => {
        const mailingInfo = {
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
        } as IMailingInfo;

        const paymentInfo = {
            billingType: BillingType.Credit,
            credit: {
                country: 'USA', displayCountry: 'USA', international: false, address1: '1900 Augusta Dr', state: 'TX', city: 'Houston',
                paypageRegistrationId: '333', cardNbr: '411111111111111', accountBillingMethodId: 123455, cardCode: '232', expMonth: 12, 
                expYear: 2024, nameOnCard: 'test'
            } as CreditCardDetails & AddressInfo,
            eft: { country: 'USA', displayCountry: 'USA', international: false, nameOnBankAccount: 'test' },
            billingInfoExists: true,
            paymentMethodDetails: { showCashOption: true, enableCashOption: true } as IPaymentMethodDetails,
            autoReplenishmentStatus: true,
            savePaymentStatus: false
        } as BillingInfo;

        await creditCardFacadeService.submitPayment(paymentInfo.credit as CreditCardDetails & AddressInfo, mailingInfo, 'UPDATE');

        expect(paymentApiService.updateCreditCard).toHaveBeenCalled();
    });

    it('should call addorUpdatePaymentMethodandRebillAmount', async () => {
    
        const billingInfoForCreditorCredit = {
            billingType: BillingType.Credit,
            credit: {
                country: 'USA', displayCountry: 'USA', international: false, address1: '1900 Augusta Dr', state: 'TX', city: 'Houston',
                paypageRegistrationId: '333', cardNbr: '411111111111111', accountBillingMethodId: 123455, cardCode: '232', expMonth: 12, 
                expYear: 2024, nameOnCard: 'test'
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
            billingInfo: billingInfoForCreditorCredit,
            mailingInfo: addressInfoObj,
            paymentOperation: 'ADD'
        };
       
        paymentApiService.addCreditCard.and.returnValue(Promise.resolve(true));
        accountService.getAccountInfo.and.resolveTo({rebillAmount: 0} as GetAccountInformationResponse);
        spyOn(creditCardFacadeService, 'submitPayment').and.returnValue(Promise.resolve(true));
        await creditCardFacadeService.addorUpdatePaymentMethodandRebillAmountofCreditCard(paymentInfo as IAddorUpdatePaymentMethodandRebillAmountRequest);
        expect(rebillFacadeService.updateRebillAmount).toHaveBeenCalled();
        expect(currentUserService.updateAutoReplenishmentStatus).toHaveBeenCalled();
    });

    it('should call addPaymentMethodandRebillAmountofCreditCard', async () => {
    
        const billingInfoForCreditorCredit = {
            billingType: BillingType.Credit,
            credit: {
                country: 'USA', displayCountry: 'USA', international: false, address1: '1900 Augusta Dr', state: 'TX', city: 'Houston',
                paypageRegistrationId: '333', cardNbr: '411111111111111', accountBillingMethodId: 123455, cardCode: '232', expMonth: 12, 
                expYear: 2024, nameOnCard: 'test'
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
            billingInfo: billingInfoForCreditorCredit,
            mailingInfo: addressInfoObj,
            paymentOperation: 'ADD'
        };
       
        paymentApiService.addCreditCard.and.returnValue(Promise.resolve(true));
        accountService.getAccountInfo.and.resolveTo({rebillAmount: 0} as GetAccountInformationResponse);
        spyOn(creditCardFacadeService, 'submitPayment').and.returnValue(Promise.resolve(true));
        await creditCardFacadeService.addPaymentMethodandRebillAmountofCreditCard(paymentInfo as IAddorUpdatePaymentMethodandRebillAmountRequest);
        expect(rebillFacadeService.updateRebillAmount).toHaveBeenCalled();
        expect(currentUserService.updateAutoReplenishmentStatus).toHaveBeenCalled();
    });

});
