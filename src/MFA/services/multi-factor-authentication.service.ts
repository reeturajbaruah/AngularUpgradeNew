import { TwoFactorAuthSendRequest, TwoFactorAuthSendResponse, TwoFactorAuthVerifyRequest, TwoFactorAuthVerifyResponse, ValidateSecurityAnsResponse } from '2FA/interfaces';
import { TwoFAService } from '2FA/services/2FA.service';
import { Injectable } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { BaseResponse } from 'common/models';
import { AccountService, CurrentUserService, GenericRepoService, GetAccountInformationResponse } from 'common/services';
import { AuthChannelService } from '../../authentication/authChannelService/authChannel.service';
import { AuthenticationService } from '../../authentication/authenticationService/authentication.service';
import { UserRoles } from '../../constants/userRoles.constants';
import { SuspendedAccountService } from '../../suspendedAccountRefresh/services/suspendedAccount.service';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { AddMissingInformationService } from '../../authentication/addMissingInformationService/addMissingInformation.service';
import { stateNames as LoginStates } from 'login/constants';

@Injectable()
export class MultiFactorAuthenticationService {

    constructor(
        private accountService: AccountService,
        private twoFAService: TwoFAService,
        private genericRepoService: GenericRepoService,
        private authenticationService: AuthenticationService,
        private currentUserService: CurrentUserService,
        private userRoles: UserRoles,
        private authChannel: AuthChannelService,
        private suspendedAccountService: SuspendedAccountService,
        private state: StateService,
        private addMissingInformationService: AddMissingInformationService,
    ) { }

    public async authenticateUser(): Promise<any> {
        const loginResponse = await this.authenticationService.profile({});
        this.currentUserService.updateCurrentUser(loginResponse);
        await this.authChannel.logIn(loginResponse);
    }

    public async getAccountInfo(): Promise<GetAccountInformationResponse> {
        const accountInfo = await this.accountService.getAccountInformation2fa();
        return accountInfo;
    }

    public async sendCode(request: TwoFactorAuthSendRequest): Promise<TwoFactorAuthSendResponse> {
        return await this.twoFAService.sendVerificationCode(request);
    }

    public async validateCode(request: TwoFactorAuthVerifyRequest): Promise<TwoFactorAuthVerifyResponse> {
        return await this.twoFAService.validateVerificationCode(request);
    }

    public async getSecurityQuestions(): Promise<BaseResponse> {
        return await this.genericRepoService.dataFactory.getSecurityQuestions();
    }

    public async verifySecurityQuestionResponse(answer: string): Promise<ValidateSecurityAnsResponse> {
        return this.twoFAService.validateSecurityAnswer({ answer });
    }

    public async handleRedirects(loginApiResponse: any) {
        if (loginApiResponse?.passwordNeedsReset) {
            this.addMissingInformationService
                .setMissingInformation(
                    loginApiResponse.passwordNeedsReset,
                    loginApiResponse.emailIsMissing,
                    loginApiResponse.securityQuestionIsMissing);

            await this.state.go(LoginStates.AddMissingInformation);
        } else if (this.authenticationService.isAuthorized(this.userRoles.suspended)) {
            await this.suspendedAccountService.getFirstSuspendedAccountState().then(this.state.go);
        }
        else {
            await this.state.go(accountDashboardStates.Frame);
        }
    };
}
