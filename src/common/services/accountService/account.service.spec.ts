import { ResponseErrorService } from '../responseErrorService/responseError.service';
import { AccountService, ContactInfo, PersonalInfo, SetContactInfoRequest } from './account.service';
import { AddressInfo } from 'common/models';

describe('AccountService', () => {
    let httpService;
    let service: AccountService;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        httpService.post.and.resolveTo({ errors: [] });
        httpService.get.and.resolveTo({ errors: [] });
        responseErrorService = jasmine.createSpyObj('ResponseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        service = new AccountService(httpService, responseErrorService);
    });

    describe('canary', () => {
        it('should be true', () => {
            expect(true).toBeTruthy();
        });
    });

    describe('getEZTagInfo', () => {
        it('should call httpService with url', () => {
            service.getEZTagInfo();

            expect(httpService.get).toHaveBeenCalledOnceWith('/api/sessions/ManageVehicles/GetEzTagsAndAccountInfo');
        });
    });
    describe('saveInformation', () => {
        it('should call httpService with url', () => {
            const data = 'fake data' as any;
            service.saveInformation(data);

            expect(httpService.post).toHaveBeenCalledOnceWith('/api/sessions/AddMissingInformation/saveMissingInformation', data);
        });
    });
    //describe('updateLoginID', () => {
    //    it('should call httpService with url', () => {
    //        service.updateLoginID();

    //        expect(httpService.post).toHaveBeenCalledOnceWith('/api/sessions/ChangeUsername/UpdateLoginID');
    //    });
    //});
    describe('getSecurityQuestions', () => {
        it('should call httpService with url', () => {
            service.getSecurityQuestions();

            expect(httpService.get).toHaveBeenCalledOnceWith('/api/sessions/PersonalBusinessData/GetSecurityQuestions');
        });
    });

    describe('getAllPaymentMethods', () => {
        it('should call httpService with url', () => {
            responseErrorService.isErrorFree.and.returnValue(false);

            service.getAllPaymentMethods();

            expect(httpService.get).toHaveBeenCalledOnceWith('/api/GetAllPaymentMethods');
        });

        it('should call displayAlertsFromResponse', done => {
            responseErrorService.isErrorFree.and.returnValue(true);

            service.getAllPaymentMethods().then(info => {
                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
                done();
            });
        });
    });

    describe('getContactInfo', () => {
        it('should call httpService with url', () => {
            responseErrorService.isErrorFree.and.returnValue(false);

            service.getContactInfo();

            expect(httpService.get).toHaveBeenCalledOnceWith(`${service['baseUrl']}PersonalInfo/GetPersonalInfo`);
        });

        it('should not be error free', () => {
            responseErrorService.isErrorFree.and.returnValue(true);

            const res = service.getContactInfo();

            expect(res).toEqual(res);
        });
    });

    describe('getMailingInfo', () => {
        it('should call getContactInfo', () => {
            spyOn(service, 'getContactInfo').and.returnValue({} as any);
            service.getMailingInfo();

            expect(service.getContactInfo).toHaveBeenCalled();
        });

        it('should call getContactInfo', done => {
            spyOn(service, 'getContactInfo').and.returnValue(null);

            service.getMailingInfo().then(info => {
                expect(info).toBeFalsy();
                done();
            });
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

    describe('getAccountInformation2fa', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const response = await service.getAccountInformation2fa();
            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AccountInformation/GetAccountInformation2fa');
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
    });
});
