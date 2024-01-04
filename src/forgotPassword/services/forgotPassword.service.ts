import { Injectable } from '@angular/core';
import { TwoFAService } from '2FA/services/2FA.service';
import { TwoFactorAuthSendRequest, TwoFactorAuthSendResponse, TwoFactorAuthVerifyRequest, TwoFactorAuthVerifyResponse } from '2FA/interfaces';

@Injectable()
export class ForgotPasswordService {

    constructor(private twoFAService: TwoFAService) { }

    public async sendCode(request: TwoFactorAuthSendRequest): Promise<TwoFactorAuthSendResponse> {
        return this.twoFAService.sendVerificationCode(request);
    }

    public async validateCode(request: TwoFactorAuthVerifyRequest): Promise<TwoFactorAuthVerifyResponse> {
        return this.twoFAService.validateVerificationCode(request);
    }
}
