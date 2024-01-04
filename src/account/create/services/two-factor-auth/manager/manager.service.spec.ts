
import { TwoFactorAuthSendRequest } from '2FA/interfaces';
import { TwoFAService } from '2FA/services/2FA.service';
import { TestBed } from '@angular/core/testing';

import { } from 'jasmine';
import { TwoFactorAuthConfigService } from '../config/config.service';
import { TwoFactorAuthManagerService } from './manager.service';


describe('Two factor Auth Manager Service', () => {

    let service: TwoFactorAuthManagerService;
    let twoFactorAuthConfigServiceSpy: jasmine.SpyObj<TwoFactorAuthConfigService>;
    let twoFAServiceSpy: jasmine.SpyObj<TwoFAService>;



    beforeEach(() => {

        twoFactorAuthConfigServiceSpy = jasmine.createSpyObj('configService', ['getConfig', 'clean']);
        twoFAServiceSpy = jasmine.createSpyObj('twoFAService', ['sendVerificationCode']);

        TestBed.configureTestingModule({
            providers: [
                TwoFactorAuthManagerService,
                { provide: TwoFactorAuthConfigService, useFactory: () => twoFactorAuthConfigServiceSpy },
                { provide: TwoFAService, useFactory: () => twoFAServiceSpy },

            ]
        });

        service = TestBed.inject(TwoFactorAuthManagerService);

    });


    it('defines the service', () => {
        expect(service).toBeDefined();
    });

    it('returns the config when the page is refreshed or browser back btn is clicked', async () => {
        await service.getConfig();
        expect(twoFactorAuthConfigServiceSpy.getConfig).toHaveBeenCalled();
    });

    it('returns the config when the new account is created', async () => {
        await service.getConfig({
            phoneNumber: '1234567898',
            acctId: 123,
            validationSuccessState: 'vehicles'
        });
        expect(twoFactorAuthConfigServiceSpy.getConfig).toHaveBeenCalledWith({
            phoneNumber: '1234567898',
            acctId: 123,
            validationSuccessState: 'vehicles'
        });
    });

    it('returns the verification code', async () => {
        const req = {
            accountId: 123,
            language: 'Eng',
            source: 'create-account',
            to: '123-456-7897'
        } as
            TwoFactorAuthSendRequest;
        await service.sendCode(req);
        expect(twoFAServiceSpy.sendVerificationCode).toHaveBeenCalledWith(req);
    });

    it('cleans the config object', async () => {
        service.clean();
        expect(twoFactorAuthConfigServiceSpy.clean).toHaveBeenCalled();
    });
});
