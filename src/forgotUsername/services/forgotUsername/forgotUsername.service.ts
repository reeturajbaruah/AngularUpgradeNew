import { TwoFactorAuthSendRequest, TwoFactorAuthSendResponse } from '2FA/interfaces';
import { TwoFAService } from '2FA/services/2FA.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ForgotUsernameService {

  constructor(private twoFAService: TwoFAService) { }

  public async sendCode(request: TwoFactorAuthSendRequest): Promise<TwoFactorAuthSendResponse> {
    return this.twoFAService.sendVerificationCode(request);
  }

}
