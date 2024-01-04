import { TwoFactorAuthSendRequest, TwoFactorAuthVerifyRequest } from '2FA/interfaces';
import { ForgotPasswordService } from './forgotPassword.service';
import { TwoFAService } from '2FA/services/2FA.service';
import { TestBed, waitForAsync } from '@angular/core/testing';

describe('forgot password service', () => {
    let service: ForgotPasswordService;
    let twoFAService: jasmine.SpyObj<TwoFAService>;

    beforeEach(() => {
        twoFAService = jasmine.createSpyObj('twoFAService', ['sendVerificationCode', 'validateVerificationCode']);

        TestBed.configureTestingModule({
            providers: [
                ForgotPasswordService,
                { provide: TwoFAService, useValue: twoFAService }
            ]
        });

        service = TestBed.inject(ForgotPasswordService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(service).toBeDefined();
        });
    });

    describe('sendCode', () => {
        it('should call sendVerificationCode', waitForAsync(() => {
            const response: any = {};
            twoFAService.sendVerificationCode.and.resolveTo(response);

            service.sendCode({} as TwoFactorAuthSendRequest).then(res => {
                expect(res).toEqual(response);
                expect(twoFAService.sendVerificationCode).toHaveBeenCalled();
            });
        }));
    });

    describe('validateCode', () => {
        it('should call validateVerificationCode', waitForAsync(() => {
            const response: any = {};
            twoFAService.validateVerificationCode.and.resolveTo(response);

            service.validateCode({} as TwoFactorAuthVerifyRequest).then(res => {
                expect(res).toEqual(response);
                expect(twoFAService.validateVerificationCode).toHaveBeenCalled();
            });
        }));
    });
});
