import { Injectable } from '@angular/core';
import { ResponseErrorService, HttpService } from 'common/services';
import { BaseResponse } from '../../common/models';

import { TwoFactorAuthSendRequest, TwoFactorAuthSendResponse, TwoFactorAuthVerifyRequest, TwoFactorAuthVerifyResponse, ValidateSecurityAnsResponse } from '../interfaces';

@Injectable()
export class TwoFAService {

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService
    ) { }

    private get baseUrl() {
        return `api/2fa`;
    }

    public async sendVerificationCode(request: TwoFactorAuthSendRequest): Promise<TwoFactorAuthSendResponse> {
        const url = `${this.baseUrl}/send`;

        const response: TwoFactorAuthSendResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async validateVerificationCode(request: TwoFactorAuthVerifyRequest): Promise<TwoFactorAuthVerifyResponse> {
        const url = `${this.baseUrl}/verify`;

        const response: TwoFactorAuthVerifyResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async saveDevice(): Promise<BaseResponse> {
        const url = `${this.baseUrl}/saveDevice`;

        const response: BaseResponse = await this.httpService.post(url, null);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    async validateSecurityAnswer(data: any): Promise<ValidateSecurityAnsResponse> {
        const url = `${this.baseUrl}/validatesecurityanswer`;

        const response: ValidateSecurityAnsResponse = await this.httpService.post(url, data);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);

            return response;
        }
    }
}
