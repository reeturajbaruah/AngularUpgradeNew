

import { TestBed } from '@angular/core/testing';
import { ISetupAccountReq } from 'account/create/models/setup-account.model';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { ICreateAccountContactInfo, ICreateAccountLoginInfo } from 'common/models';
import { AccountService, ResponseErrorService } from 'common/services';
import { } from 'jasmine';
import { LoginFacadeApiService } from '../api/facade-api.service';
import { LoginFacadeService } from './facade-service';

describe('Login Facade Service', () => {

    let loginFacadeService: LoginFacadeService;
    let accountServiceSpy: jasmine.SpyObj<AccountService>;
    let loginFacadeApiServiceSpy: jasmine.SpyObj<LoginFacadeApiService>;
    let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;
    let authChannelServiceSpy: jasmine.SpyObj<AuthChannelService>;
    let responseErrorServiceSpy: jasmine.SpyObj<ResponseErrorService>;

    beforeEach(() => {

        accountServiceSpy = jasmine.createSpyObj('acctService', ['getContactInfo']);
        loginFacadeApiServiceSpy = jasmine.createSpyObj('api', ['setupAccount', 'setPersonalInfo']);
        authenticationServiceSpy = jasmine.createSpyObj('authService', ['login']);
        authChannelServiceSpy = jasmine.createSpyObj('authChannel', ['logIn']);
        responseErrorServiceSpy = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);


        TestBed.configureTestingModule({
            providers: [
                LoginFacadeService,
                { provide: AccountService, useFactory: () => accountServiceSpy },
                { provide: LoginFacadeApiService, useFactory: () => loginFacadeApiServiceSpy },
                { provide: AuthenticationService, useFactory: () => authenticationServiceSpy },
                { provide: AuthChannelService, useFactory: () => authChannelServiceSpy },
                { provide: ResponseErrorService, useFactory: () => responseErrorServiceSpy }

            ]
        });

        loginFacadeService = TestBed.inject(LoginFacadeService);

    });


    it('cretes a new account with setupAccount api backend', async () => {

        await loginFacadeService.setupAccount({} as ICreateAccountContactInfo & ICreateAccountLoginInfo,
            false);

        expect(loginFacadeApiServiceSpy.setupAccount).toHaveBeenCalled();
    });

    it('cretes a new account with setPersonalInfo api backend', async () => {
        loginFacadeApiServiceSpy.setupAccount.and.resolveTo(true);

        await loginFacadeService.setupAccount({} as ICreateAccountContactInfo & ICreateAccountLoginInfo,
            false);

        expect(loginFacadeApiServiceSpy.setupAccount).toHaveBeenCalled();
        expect(loginFacadeApiServiceSpy.setPersonalInfo).toHaveBeenCalled();

    });

    it('checks if the user gets logged in successfully once new account is created', async () => {

        loginFacadeApiServiceSpy.setupAccount.and.resolveTo(true);
        loginFacadeApiServiceSpy.setPersonalInfo.and.resolveTo(true);

        await loginFacadeService.setupAccount({
            username: 'test test',
            password: 'abcdef'
        } as ICreateAccountContactInfo & ICreateAccountLoginInfo,
            false);

        expect(loginFacadeApiServiceSpy.setupAccount).toHaveBeenCalled();
        expect(loginFacadeApiServiceSpy.setPersonalInfo).toHaveBeenCalled();

        expect(authenticationServiceSpy.login).toHaveBeenCalled();

    });

    it('checks if the user gets logged in successfully once new account is created and calls authchannel ', async () => {

        loginFacadeApiServiceSpy.setupAccount.and.resolveTo(true);
        loginFacadeApiServiceSpy.setPersonalInfo.and.resolveTo(true);
        authenticationServiceSpy.login.and.resolveTo({});
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);

        await loginFacadeService.setupAccount({
            username: 'test test',
            password: 'abcdef'
        } as ICreateAccountContactInfo & ICreateAccountLoginInfo,
            false);

        expect(loginFacadeApiServiceSpy.setupAccount).toHaveBeenCalled();
        expect(loginFacadeApiServiceSpy.setPersonalInfo).toHaveBeenCalled();

        expect(authenticationServiceSpy.login).toHaveBeenCalled();

        expect(authChannelServiceSpy.logIn).toHaveBeenCalled();

    });

    it('does not create a new EzTag account when setupAccount api backend is failed', async () => {

        loginFacadeApiServiceSpy.setupAccount.and.resolveTo(false);
        const res = await loginFacadeService.setupAccount({} as ICreateAccountContactInfo & ICreateAccountLoginInfo,
            false);

        expect(loginFacadeApiServiceSpy.setupAccount).toHaveBeenCalled();

        expect(loginFacadeApiServiceSpy.setPersonalInfo).not.toHaveBeenCalled();
        expect(res).toBeFalse();
    });


});

