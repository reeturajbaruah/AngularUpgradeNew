import { TwoFAService } from '2FA/services/2FA.service';
import { Injectable } from '@angular/core';
import { TwoFactorAuthConfigService } from '../config/config.service';

@Injectable()
export class TwoFactorAuthManagerService {

    constructor(private configService: TwoFactorAuthConfigService,
        private twoFAService: TwoFAService
    ) {

    }

    async getConfig(params?) {
        return await this.configService.getConfig(params);
    }

    async sendCode(request) {
        return await this.twoFAService.sendVerificationCode(request);

    }

    clean() {
        this.configService.clean();
    }

}
