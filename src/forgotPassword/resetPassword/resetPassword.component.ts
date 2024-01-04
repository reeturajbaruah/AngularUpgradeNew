import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { SiteCoreItem } from '../../cms/cms.module';
import { CmsReplacementService } from '../../cms/services';
import { ForgotPasswordFrameComponent } from '../frame/frame.component';
import { ResetPasswordRequest } from '../interfaces';
import { WebApiService } from '../services/webApi.service';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { AuthenticateRedirectService } from 'authentication/authenticateRedirectService/authenticateRedirect.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { StateNames as CoreStateNames } from 'constants/stateNames.constants';
import { UserRoles } from 'constants/userRoles.constants';
import { SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { NgForm } from '@angular/forms';
import { PasswordValidationInfo } from '../../common/interfaces';
import { IsInvoicedService, ToasterService } from 'common/services';
import { SessionService } from 'common/services/session/session.service';

export type ForgotPasswordCms = SiteCoreItem & { resetSuccessful: string};

@Component({
    selector: 'reset-password',
    templateUrl: './resetPassword.html',
    styleUrls: ['./resetPassword.less']
})
export class ForgotPasswordResetPasswordComponent implements OnInit {

    public newPassword: string;
    public confirmPassword: string;
    public isShowNewPassword = false;
    public isShowConfirmPassword = false;
    public isMatch: boolean;
    public isMissingEmail = false;
    public emailAddress: string;

    @Input() cmsData: ForgotPasswordCms;
    @Input() pwCmsData: PasswordValidationInfo;

    constructor(
        private parent: ForgotPasswordFrameComponent,
        private state: StateService,
        private cmsReplacementService: CmsReplacementService,
        private webApi: WebApiService,
        private authChannel: AuthChannelService,
        private isInvoicedService: IsInvoicedService,
        private coreStateNames: CoreStateNames,
        private authService: AuthenticationService,
        private authenticateRedirectService: AuthenticateRedirectService,
        private suspendedAccountService: SuspendedAccountService,
        private userRoles: UserRoles,
        private uiRouterGlobals: UIRouterGlobals,
        private session: SessionService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private toasterService: ToasterService
    ) { }

    ngOnInit() {
        this.cmsData.LongDescription = this.cmsReplacementService.transformTemplate(this.cmsData.LongDescription, { username: this.uiRouterGlobals.params.loginId });

        //This is just to make the error isn't there when loading the page
        this.isMatch = true;

        this.isMissingEmail = this.uiRouterGlobals.params.isMissingEmail;
    }


    public validatePassword(resetForm: NgForm) {
        if (!resetForm.form.controls.newPasswordName.pristine && !resetForm.form.controls.confirmPasswordName.pristine) {
            this.isMatch = this.newPassword === this.confirmPassword;
        }
    }

    public async resetPasswordSubmit(nextState: StateDeclaration) {
        if (!this.isMatch) {
            return;
        }

        const data: ResetPasswordRequest = {
            password: this.newPassword,
            password2: this.confirmPassword,
            dbSessionId: this.uiRouterGlobals.params.dbSessionId,
            userName: this.uiRouterGlobals.params.loginId,
            accountId: this.uiRouterGlobals.params.acctId,
            email: this.isMissingEmail ? this.emailAddress : this.uiRouterGlobals.params.email,
            securityQuestionAnswer: null,
            securityQuestionID: null
        } as any;

        const res = await this.webApi.resetPassword(data);

        if (res && this.environmentConfig.twoFactorAuth.forgotPasswordForceLogin) {

            this.toasterService.show('Success', this.cmsData.resetSuccessful, true);
            await this.state.go(nextState);

        } else if (res) {
            this.isInvoicedService.setAccountInvoiced(res.isInvoiced);

            this.session.create(Number(res.acctId), res.acctActivity, Number(res.newAccountStep.currentStep), false);

            await this.authChannel.logIn(res);

            if (this.authService.isAuthorized(this.userRoles.suspended)) {
                await this.suspendedAccountService.getFirstSuspendedAccountState().then(this.state.go);
            } else if (res.newAccountStep.accountComplete) {
                if (this.authenticateRedirectService.hasSavedState) {
                    await this.authenticateRedirectService.redirectLoginAndDeleteSavedState();
                } else {
                    await this.state.go(accountDashboardStates.Frame);
                }
            } else {
                await this.state.go(this.coreStateNames.newAccount);
            }
        }     
    }
}
