
import { TestBed } from '@angular/core/testing';
import { ITwoFactorAuthConfig } from 'account/create/models/two-factor-auth-config.model';
import { AccountService, CurrentUserService, GetContactInfoResponse, WebStorageService } from 'common/services';

import { } from 'jasmine';
import { PhoneNumberPipe } from 'pipes/phoneNumber/phoneNumber.pipe';
import { TwoFactorAuthConfigService } from './config.service';


describe('Two factor Auth Config Service', () => {

    let service: TwoFactorAuthConfigService;
    let webStorageServiceSpy: jasmine.SpyObj<WebStorageService>;
    let currentUserServiceSpy: jasmine.SpyObj<CurrentUserService>;
    let accountServiceSpy: jasmine.SpyObj<AccountService>;
    let phoneNumberPipeSpy: jasmine.SpyObj<PhoneNumberPipe>;


    beforeEach(() => {

        webStorageServiceSpy = jasmine.createSpyObj('webStorageService', ['removeEntry', 'setKeyValue', 'getValue']);
        currentUserServiceSpy = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
        accountServiceSpy = jasmine.createSpyObj('accntService', ['getContactInfo']);
        phoneNumberPipeSpy = jasmine.createSpyObj('phoneNumberPipe', ['transform']);


        TestBed.configureTestingModule({
            providers: [
                TwoFactorAuthConfigService,
                { provide: WebStorageService, useFactory: () => webStorageServiceSpy },
                { provide: CurrentUserService, useFactory: () => currentUserServiceSpy },
                { provide: AccountService, useFactory: () => accountServiceSpy },
                { provide: PhoneNumberPipe, useFactory: () => phoneNumberPipeSpy }
            ]
        });

        service = TestBed.inject(TwoFactorAuthConfigService);

    });

    it('defines the service', () => {
        expect(service).toBeDefined();
    });

    it('returns the config for the first time new account creation user', async () => {

        const phoneNumber='123-456-7898';
        const params = {
            phoneNumber,
            acctId: 123,
            validationSuccessState: 'test'
        };

        phoneNumberPipeSpy.transform.and.returnValue(phoneNumber);

        const config = await service.getConfig(params);

        expect(webStorageServiceSpy.setKeyValue).toHaveBeenCalled();
        expect(config.acctId).toEqual(params.acctId);
        expect(config.phoneNumber).toEqual(params.phoneNumber);
        expect(config.validationSuccessState).toEqual(params.validationSuccessState);


    });

    it('returns the config for the first time new account creation user and set the valiation success state in web storage', async () => {

        const params = {
            phoneNumber: '123-456-7898',
            acctId: 123,
            validationSuccessState: 'test'
        };
        const config = await service.getConfig(params);
        expect(webStorageServiceSpy.setKeyValue).toHaveBeenCalled();


    });

    it('returns the config when the logged-in user refreshes the page and retrieves data from backend', async () => {
        service['config'] = {} as ITwoFactorAuthConfig;

        const homePhoNbr = '1234567895';
        const acctId = 123;
        const validationSuccessState = 'vehicles';

        currentUserServiceSpy.getCurrentUser.and.returnValue({ acctId });
        webStorageServiceSpy.getValue.and.returnValue(validationSuccessState);
        accountServiceSpy.getContactInfo.and.resolveTo({
            homePhoNbr
        } as GetContactInfoResponse
        );

        phoneNumberPipeSpy.transform.and.returnValue('123-456-7895');

        const config = await service.getConfig({});
        expect(phoneNumberPipeSpy.transform).toHaveBeenCalledWith(homePhoNbr);
        expect(config.phoneNumber).toEqual('123-456-7895');
        expect(config.acctId).toEqual(acctId);
        expect(config.validationSuccessState).toEqual(validationSuccessState);

    });


    it('returns the config when the logged-in user clicks browser back button the page', async () => {

        const data = {
            acctId: 123,
            phoneNumber: '123-456-7862',
            validationSuccessState: 'test state'
        };

        service['config'] = data;
        const config = await service.getConfig({});

        expect(config.acctId).toEqual(data.acctId);
        expect(config.phoneNumber).toEqual(data.phoneNumber);
        expect(config.validationSuccessState).toEqual(data.validationSuccessState);

    });

    it('cleans the data from the service cache', () => {
        service.clean();
        expect(webStorageServiceSpy.removeEntry).toHaveBeenCalled();
        expect(service['config']).toEqual({} as ITwoFactorAuthConfig);
    });
});


