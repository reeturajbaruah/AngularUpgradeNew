import { Injectable } from '@angular/core';
import { AccountService, ResponseErrorService, SecurityQuestionInfo } from 'common/services';
import { AccountSearchRequest, AccountSearchResponse, OnlineAccessLoginInfo, SetupDataResponse } from '../interfaces';
import { WebApiService } from './webApi.service';
import { 
    TwoFactorAuthSendRequest, TwoFactorAuthSendResponse, 
    TwoFactorAuthVerifyRequest, TwoFactorAuthVerifyResponse
} from '2FA/interfaces';

import { TwoFAService } from '2FA/services/2FA.service';

@Injectable()
export class FirstTimeLoginService {

    constructor(
        private responseErrorService: ResponseErrorService,
        private webApiService: WebApiService,
        private accountService: AccountService,
        private twoFAService: TwoFAService
    ) { }

    public async setupAccount(request: OnlineAccessLoginInfo): Promise<boolean> {       
       const response = await this.webApiService.setupAccount(request);

       return !this.responseErrorService.hasErrors(response);
    }

    public async getSearchData(): Promise<SetupDataResponse> {
        return await this.webApiService.searchData();
    }

    public async getSecurityQuestions(): Promise<SecurityQuestionInfo[]> {
        const response = await this.accountService.getSecurityQuestions();

        if (this.responseErrorService.hasErrors(response)) {
            this.responseErrorService.displayErrorsFromResponse(response);
            return [];
        }

        return response.securityQuestions;
    }

    public async accountSearch(request: AccountSearchRequest): Promise<AccountSearchResponse> {
        return await this.webApiService.accountSearch(request);
    }

    public async sendCode(request: TwoFactorAuthSendRequest): Promise<TwoFactorAuthSendResponse> {
        return await this.twoFAService.sendVerificationCode(request);
    }

    public async validateCode(request: TwoFactorAuthVerifyRequest): Promise<TwoFactorAuthVerifyResponse> {
        return await this.twoFAService.validateVerificationCode(request);
    }
}
