import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { PaymentFacadeService } from './payment-facade.service';
import {
    AddressInfo, BillingInfo, BillingType, CreditCardDetails, IAddorUpdatePaymentMethodandRebillAmountRequest,
    IMailingInfo, IPaymentMethodDetails, IRemovePaymentMethodRequest
} from 'common/models';
import { AccountService, ContactInfo, GetContactInfoResponse, PersonalInfo, SetContactInfoRequest } from 'common/services';
import { PaymentApiService } from '../api/payment-api.service';
import { BankFacadeService } from './bank/bank-facade.service';
import { CreditCardFacadeService } from './credit-card/credit-card-facade.service';
import { RebillFacadeService } from './rebill-facade.service';
import { promise } from 'protractor';

describe('Payment Facade Service', () => {

    let rebillFacadeService: jasmine.SpyObj<RebillFacadeService>;
    let paymentFacadeService: PaymentFacadeService;
    let paymentApiService: jasmine.SpyObj<PaymentApiService>;
    let bankFacadeService: jasmine.SpyObj<BankFacadeService>;
    let creditCardFacadeService: jasmine.SpyObj<CreditCardFacadeService>;
    let accountService: jasmine.SpyObj<AccountService>;

    beforeEach(() => {
        rebillFacadeService = jasmine.createSpyObj('rebillApiServiceSpy', ['updateRebillAmount']);
        paymentApiService = jasmine.createSpyObj('paymentApiService', ['removeBillingMethod']);
        bankFacadeService = jasmine.createSpyObj('bankFacadeService', ['submitPayment', 'addorUpdatePaymentMethodandRebillAmountofEFT', 'addPaymentMethodandRebillAmountofEFT']);
        creditCardFacadeService = jasmine.createSpyObj('creditCardFacadeService', ['submitPayment', 'addPaymentMethodandRebillAmountofCreditCard', 
        'addorUpdatePaymentMethodandRebillAmountofCreditCard']);
        accountService = jasmine.createSpyObj('accountService', ['getMailingInfo', 'getContactInfo', 'setContactInfo']);

        TestBed.configureTestingModule({
            providers: [
                PaymentFacadeService,
                { provide: RebillFacadeService, useValue: rebillFacadeService },
                { provide: PaymentApiService, useValue: paymentApiService },
                { provide: BankFacadeService, useValue: bankFacadeService },
                { provide: CreditCardFacadeService, useValue: creditCardFacadeService },
                { provide: AccountService, useValue: accountService }
            ]
        });

        paymentFacadeService = TestBed.inject(PaymentFacadeService);
    });

    it('should add credit card payment correctly', async () => {
        const paymentInfo = {
            credit: {
                country: 'USA',
                displayCountry: 'USA',
                international: false
            } as CreditCardDetails & AddressInfo,
            eft: {
                country: 'USA',
                displayCountry: 'USA',
                international: false,
                nameOnBankAccount: null,
            },
            billingType: null,
            cmsPaymentInfo: null
        } as BillingInfo;
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

        await paymentFacadeService.submitPayment({
            method: BillingType.Credit,
            payload: { billing: paymentInfo, billingAddress: mailingInfo }
        }, 'ADD');

        expect(creditCardFacadeService.submitPayment).toHaveBeenCalled();
    });

    it('should submit EFT payment correctly', async () => {
        const paymentInfo = {
            credit: {
                country: 'USA',
                displayCountry: 'USA',
                international: false
            } as CreditCardDetails & AddressInfo,
            eft: {
                country: 'USA',
                displayCountry: 'USA',
                international: false,
                nameOnBankAccount: null,
            },
            billingType: null,
            cmsPaymentInfo: null
        } as BillingInfo;
        
        await paymentFacadeService.submitPayment({
            method: BillingType.Eft,
            payload: { billing: paymentInfo }
        }, 'UPDATE');

        expect(bankFacadeService.submitPayment).toHaveBeenCalled();
    });

    it('should call accountService.getMailingInfo', async () => {
        await paymentFacadeService.getMailingInfo();

        expect(accountService.getMailingInfo).toHaveBeenCalled();
    });

    it('should call accountService.setContactInfo', async () => {

        const addressInfo: AddressInfo = {
            address1: 'address1',
            address2: 'address2',
            address3: 'address3',
            address4: 'address4',
            city: 'city',
            state: 'state',
            zip: 'zip',
            plus4: 'plus4',
            country: 'country',
            displayCountry: 'displayCountry',
            international: true,
        };

        accountService.getContactInfo.and.resolveTo({} as GetContactInfoResponse);

        await paymentFacadeService.setMailingInfoAtAcctLevel(addressInfo);

        expect(accountService.getContactInfo).toHaveBeenCalled();
        expect(accountService.setContactInfo).toHaveBeenCalled();
    });

    it('should return original billingInfo if no data is present', async () => {
        const paymentInfo = {} as BillingInfo;
        const result = await paymentFacadeService.removeBillingMethod(paymentInfo);

        expect(result).toEqual(paymentInfo);
    });

    it('should call updateRebillAmount and removeBillingMethod when valid data is present', async () => {

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
        
        await paymentFacadeService.removeBillingMethod(paymentInfo);

        expect(rebillFacadeService.updateRebillAmount).toHaveBeenCalled();
        expect(paymentApiService.removeBillingMethod).toHaveBeenCalled();
    });

    it('should call creditCardFacadeService.addorUpdatePaymentMethodandRebillAmountofCreditCard', async () => {
        const request = {} as IAddorUpdatePaymentMethodandRebillAmountRequest;
        await paymentFacadeService.addorUpdatePaymentMethodandRebillAmountofCreditCard(request);

        expect(creditCardFacadeService.addorUpdatePaymentMethodandRebillAmountofCreditCard).toHaveBeenCalled();
    });

    it('should call creditCardFacadeService.addPaymentMethodandRebillAmountofCreditCard', async () => {
        const request = {} as IAddorUpdatePaymentMethodandRebillAmountRequest;
        await paymentFacadeService.addPaymentMethodandRebillAmountofCreditCard(request);

        expect(creditCardFacadeService.addPaymentMethodandRebillAmountofCreditCard).toHaveBeenCalled();
    });

    it('should call bankFacadeService.addorUpdatePaymentMethodandRebillAmountofEFT', async () => {
        const request = {} as IAddorUpdatePaymentMethodandRebillAmountRequest;
        await paymentFacadeService.addorUpdatePaymentMethodandRebillAmountofEFT(request);

        expect(bankFacadeService.addorUpdatePaymentMethodandRebillAmountofEFT).toHaveBeenCalled();
    });

    it('should call bankFacadeService.addPaymentMethodandRebillAmountofEFT', async () => {
        const request = {} as IAddorUpdatePaymentMethodandRebillAmountRequest;
        await paymentFacadeService.addPaymentMethodandRebillAmountofEFT(request);

        expect(bankFacadeService.addPaymentMethodandRebillAmountofEFT).toHaveBeenCalled();
    });
});
