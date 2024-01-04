import { Component, Input, OnInit } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames } from '../../../login/constants';
import { MultiFactorAuthenticationService } from 'MFA/services/multi-factor-authentication.service';
import { SecurityQuestionCMS } from 'MFA/multi-factor-authentication.model';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { ResponseErrorService, ToasterService } from 'common/services';
import { ValidateSecurityAnsResponse } from '../../../2FA/interfaces';

@Component({
    selector: 'app-mfa-security-question',
    templateUrl: './mfa-security-question.component.html',
    styleUrls: ['./mfa-security-question.component.less']
})
export class MfaSecurityQuestionComponent implements OnInit {
    @Input() cmsData: SecurityQuestionCMS;
    securityQuestion: string;
    answer = '';
    isShowPassword = false;

    constructor(
        private multiFactorAuthenticationService: MultiFactorAuthenticationService,
        private uiRouterGlobals: UIRouterGlobals,
        private state: StateService,
        private authService: AuthenticationService,
        private responseErrorService: ResponseErrorService,
        private toast: ToasterService
    ) { }

    ngOnInit(): void {
        this.multiFactorAuthenticationService.getSecurityQuestions().then((resp: any) => {
            if (resp.errors.length === 0) {
                const securityQuestionIndex = resp?.securityQuestions.findIndex((qus) => qus.securityQuestionID === this.uiRouterGlobals.params.securityQuestionID);
                this.securityQuestion = resp?.securityQuestions[securityQuestionIndex]?.securityQuestion;
            } else {
                this.responseErrorService.displayErrorsFromResponse(resp);
                this.responseErrorService.displayAlertsFromResponse(resp);
            }
        });
    }

    verify(): void {
        this.multiFactorAuthenticationService.verifySecurityQuestionResponse(this.answer).then(async (resp: ValidateSecurityAnsResponse) => {
            if (resp) {
                if (resp.errors.length === 0) {
                    await this.multiFactorAuthenticationService.authenticateUser();
                    const loginApiResponse = this.uiRouterGlobals.params.loginApiResponse;
                    await this.multiFactorAuthenticationService.handleRedirects(loginApiResponse);
                    this.toast.show('Success', this.cmsData.Success_Msg_Text);
                } else {
                    this.responseErrorService.displayErrorsFromResponse(resp);
                    this.responseErrorService.displayAlertsFromResponse(resp);
                }
            }
        });
    }

    async cancel() {
        await this.authService.logout();
        await this.state.go(stateNames.Login);
    }

}
