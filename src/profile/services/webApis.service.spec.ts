import { } from 'jasmine';
import { ResponseErrorService  } from 'common/services';
import { AuthorizedContactDetails, ComPreferences, ContactInfo, PersonalInfo, SetContactInfoRequest, SetContactAddressInfoRequest, WebApisService, UpdateReplenishmentAmount,
         UnblockPaymentMethodRequest, RemovePaymentMethodRequest } from './webApis.service';
import { AddressInfo, CreditCardDetails, BankDetails, BankAccountType} from 'common/models';

describe('webApisService', () => {
    let service: WebApisService;
    let httpService: jasmine.SpyObj<any>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        httpService.post.and.resolveTo({ errors: [] });
        httpService.get.and.resolveTo({ errors: [] });
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        service = new WebApisService(httpService, responseErrorService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('getAccountInfo', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.getAccountInfo();
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AccountInformation/GetAccountInformation');
        });
    });

    describe('getAuthContacts', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.getAuthContacts();
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AccountInformation/GetAuthorizedContacts');
        });
    });

    describe('getComPreferences', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.getComPreferences();
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AccountInformation/GetAccountPreferences');
        });
    });

    describe('getPaymentMethodData', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.getPaymentMethodData();
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/PaymentMethodData/GetPaymentMethodData');
        });
    });

    describe('setAuthContacts', () => {
        const authorizedContact = {
            firstName: 'firstName',
            lastName: 'lastName',
            accessCode: 'accessCode',
            contactId: 'contactId'
        };

        const authorizedContactsArray = [];
        authorizedContactsArray.push(authorizedContact);

        const request: AuthorizedContactDetails = {
            authorizedContacts: authorizedContactsArray,
            currentPassword: 'pwd'
        };

        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.setAuthContacts(request);
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountInformation/ModifyAuthorizedContact', { authorizedContacts: authorizedContactsArray, currentPassword: 'pwd' });
        });
    });

    describe('setComPreferences', () => {
        const request: ComPreferences = {
            monthlyStatementsAreByMail: true,
            monthlyStatementsAreByEmail: true,
            importantUpdatesAreByEmail: true,
            importantUpdatesAreByMail: true
        };
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.setComPreferences(request);
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountInformation/ModifyAccountPreferences', {
                monthlyStatementsAreByMail: true,
                monthlyStatementsAreByEmail: true,
                importantUpdatesAreByEmail: true,
                importantUpdatesAreByMail: true
            });
        });
    });

    describe('setContactInfo', () => {
        const addressInfoObj: AddressInfo = {
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

        const contactInfoObj: ContactInfo = {
            phoneNumber: 'phoneNumber',
            phoneExt: 'phoneExt',
            altPhoneNumber: 'altPhoneNumber',
            altPhoneNumberExt: 'altPhoneNumberExt',
            emailAddress: 'emailAddress',
            altEmailAddress: 'altEmailAddress',
            mobilePhoNbr: 'mobilePhoNbr',
            mobilePhoExt: 'mobilePhoExt',
            smsAlertsOptIn: true,
            workPhoExt: 'workPhoExt',
            workPhoNbr: 'workPhoNbr',
            plus4: 'plus4',
            workPhonePlusExt: 'workPhonePlusExt'
        };

        const personalInfoObj: PersonalInfo = {
            address1: 'address1',
            address2: 'address2',
            address3: 'address3',
            address4: 'address4',
            altEmailAddress: 'altEmailAddress',
            city: 'city',
            companyName: 'companyName',
            companyTaxId: 'companyTaxId',
            country: 'country',
            displayCountry: 'displayCountry',
            driverLicNbr: 'driverLicNbr',
            driverLicState: 'driverLicState',
            emailAddress: 'workPhonePlusExt',
            firstName: 'firstName',
            homePhoNbr: 'homePhoNbr',
            lastName: 'lastName',
            loginId: 'loginId',
            plus4: 'plus4',
            securityQuestionID: 10,
            state: 'state',
            workPhoExt: 'workPhoExt',
            workPhoNbr: 'workPhoNbr',
            workPhonePlusExt: 'workPhonePlusExt',
            zip: 'zip',
            accountInfoExists: true
        };

        const request: SetContactInfoRequest = {
            mailingAddress: addressInfoObj,
            contactInfo: contactInfoObj,
            personalInfo: personalInfoObj,
            shouldSaveExpressAddress: true
        };

        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.setContactInfo(request);
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/PersonalInfo/UpdatePersonalInfo', {
                mailingAddress: addressInfoObj,
                contactInfo: contactInfoObj,
                personalInfo: personalInfoObj,
                shouldSaveExpressAddress: true
            });
        });

        const contactAddressRequest: SetContactAddressInfoRequest = {
            mailingAddress: addressInfoObj,
            contactInfo: contactInfoObj,
            personalInfo: personalInfoObj,
            shouldSaveExpressAddress: false,
            saveContactInfoOnly: true
        };

        it('should make a api call with SetContactAddressInfoRequest', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.setContactInfo(contactAddressRequest);
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/PersonalInfo/UpdatePersonalInfo', {
                mailingAddress: addressInfoObj,
                contactInfo: contactInfoObj,
                personalInfo: personalInfoObj,
                shouldSaveExpressAddress: false,
                saveContactInfoOnly: true
            });
        });
    });

    describe('updateRebillAmount', () => {
        const request: UpdateReplenishmentAmount = {
            accountType: 'accountype',
            currentRebillAmount: 12.12,
            minimumBalance: 10.00,
            minimumBalanceMultiplier: 5,
            rebillAmount: 14
        };
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.updateRebillAmount(request);
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/UpdateRebillAmount/UpdateRebillAmount', {
                accountType: 'accountype',
                currentRebillAmount: 12.12,
                minimumBalance: 10.00,
                minimumBalanceMultiplier: 5,
                rebillAmount: 14
            });
        });
    });

    describe('unblockPaymentMethod', () => {
        const request: UnblockPaymentMethodRequest = {
            accountBillingMethodId: 100
        };
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.unblockPaymentMethod(request);
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/account/manageBilling/unblockBillingMethod', {
                accountBillingMethodId: 100
            });
        });
    });

    describe('removePaymentMethod', () => {
        const creditCardDetailsAndAddressInfo: CreditCardDetails & AddressInfo = {
            cardCode: 'cardCode',
            cardTypeDisplay: null,
            cardNbr: 'cardNbr',
            expMonth: 8,
            expYear: 2022,
            nameOnCard: 'nameOnCard',
            accountBillingMethodId: 100,
            paypageRegistrationId: 'paypageRegistrationId',
            omniToken: 'omniToken',
            primary: true,
            isNewCard: true,
            isBlocked: true,
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
            international: true
        };
        const bankDetailsAndAddressInfo: BankDetails & AddressInfo = {
            accountType: BankAccountType.Business,
            accountTypeDisplay: null,
            name: 'name',
            routingNumber: 'routingNumber',
            accountNumber: 'accountNumber',
            account2: null,
            isBlocked: true,
            primary: true,
            accountBillingMethodId: 100,
            nameOnBankAccount: null,
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
            international: true
        };
        const request: RemovePaymentMethodRequest = {
            creditCardPaymentMethod: creditCardDetailsAndAddressInfo,
            eFTPaymentMethod: bankDetailsAndAddressInfo,
            isCreditCard: true
        };

        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.removePaymentMethod(request);
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/account/manageBilling/removeBillingMethod', {
                creditCardPaymentMethod: creditCardDetailsAndAddressInfo,
                eFTPaymentMethod: bankDetailsAndAddressInfo,
                isCreditCard: true
            });
        });
    });

});
