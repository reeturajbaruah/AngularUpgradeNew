import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticateRedirectService } from 'authentication/authenticateRedirectService/authenticateRedirect.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { ENVIRON_CONFIG } from 'common/module';
import { AccountService, CurrentUserService, DialogService, ResponseErrorService, SessionService, WebStorageService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues, WizardComponent } from 'common/ui';
import { StateNames as CoreStateNames } from 'constants/stateNames.constants';
import { UserRoles } from 'constants/userRoles.constants';
import { stateNames as LoginStates } from 'login/constants';
import { stateNames as ForgotPasswordStates } from 'forgotPassword/constants';
import { stateNames as FirstTimeLoginStates } from 'firstTimeLogin/constants';
import { SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';

import { FeaturesStates } from 'shared/states';
import { CreateAccountNavigateFunction } from 'account/create';
import { UrlPaths } from 'constants/routes.constants';
import { StringUtilsService, OperatingSystemSnifferService } from 'common/services';
import { ForgotUsernameStateNames } from 'forgotUsername/forgotUsername.constants';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';
import { StorefrontModalService } from '../../storefront/services/modal.service';
import { mfaStateNames } from 'MFA/constant';

interface CmsContent {
    Title: string;
    LoginSectionTitle: string;
    Popups: {
        MAPP_Login_Android: string;
        MAPP_Login_IOS: string;
        MAPP_Login_Other: string;
        MAPP_Login_Browser: string;
        MAPP_Login_Modal_Title: string;
    };
}

@Component({
    selector: 'login-component',
    templateUrl: './login.html',
    styleUrls: ['./login.less']
})

export class LoginComponent implements OnInit {
    public enableForgotUsername: boolean;

    @Input() cmsContent: CmsContent;

    constructor(
        private responseErrorService: ResponseErrorService,
        private stringUtils: StringUtilsService,
        private operatingSystemSnifferService: OperatingSystemSnifferService,
        private storefrontUtilityService: StorefrontUtilityService,
        private storefrontModalService: StorefrontModalService,
        private authChannel: AuthChannelService,
        private state: StateService,
        private coreStateNames: CoreStateNames,
        private authService: AuthenticationService,
        private addMissingInformationService: AddMissingInformationService,
        private authenticateRedirectService: AuthenticateRedirectService,
        private suspendedAccountService: SuspendedAccountService,
        private userRoles: UserRoles,
        private dialogService: DialogService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private cmsItemId: UrlPaths,
        private currentUserService: CurrentUserService,
        private accntService: AccountService,
        private session: SessionService,
    ) { }

    async ngOnInit() {

        //Set Up CMS for showAccountBlockModal().
        //Only set once (in OnInit & nowhere else) to avoid being overwritten if user attempts login from "blocked" acct more than 1 time
        const queryString = String(this.cmsContent.Popups);
        this.cmsContent.Popups = {
            MAPP_Login_Modal_Title: this.stringUtils.getUrlParameter('MAPP_Login_Modal_Title', queryString),
            MAPP_Login_Browser: this.stringUtils.getUrlParameter('MAPP_Login_Browser', queryString),
            MAPP_Login_Android: this.stringUtils.getUrlParameter('MAPP_Login_Android', queryString),
            MAPP_Login_IOS: this.stringUtils.getUrlParameter('MAPP_Login_IOS', queryString),
            MAPP_Login_Other: this.stringUtils.getUrlParameter('MAPP_Login_Other', queryString)
        };

        this.enableForgotUsername = this.environmentConfig.twoFactorAuth.forgotUsername;

        if (this.session.userRole === this.userRoles.notAuthenticatedMf || this.session.userRole === this.userRoles.missingRequiredInformation) {
            await this.authService.logout();
        }
    }

    public login = { userName: '', password: '' };
    public isShowPassword = false;

    public async getLogin(form: NgForm, wizardUi: WizardComponent) {

        if (form.valid) {
            try {
                const loginApiResponse = await this.authService.login(this.login);

                if (loginApiResponse && this.responseErrorService.isErrorFree(loginApiResponse)) {
                    await this.handleLoginInformation(loginApiResponse, wizardUi);
                }
            }
            catch (e) {
                // Error will be 'expressAuthenticationFailure'.
                // Only throw error if in Kiosk Mode.
                if (this.storefrontUtilityService.isRunningAsKiosk) {
                    throw e;
                }
                /* Do nothing on error */
            }
        }
    }

    public async handleLoginInformation(loginApiResponse: any, wizardUi: WizardComponent) {

        const runningAsNormalWebsiteModeOrKioskFullWebsiteMode = !this.storefrontUtilityService.isRunningAsKiosk
            || (this.storefrontUtilityService.isRunningAsKiosk && this.storefrontUtilityService.webStoreData.fullSiteMode);

        const isLoginEnabled = this.environmentConfig.twoFactorAuth.enableLogin || false;

        if (isLoginEnabled && loginApiResponse.passwordNeedsReset && !loginApiResponse.isMfaCompleted) {
            this.currentUserService.updateCurrentUser(loginApiResponse);
            await this.state.go(mfaStateNames.MultiFactorAuthentication, { loginApiResponse }, { custom: { isExplicitlyAllowedTransition: true } });
            return true;
        }

        const loginInformationIsMissing = this.addMissingInformationService
            .isMissingInfo(
                loginApiResponse.passwordNeedsReset,
                loginApiResponse.emailIsMissing,
                loginApiResponse.securityQuestionIsMissing);

        if (loginApiResponse.invalidAccountSource) {
            // They have already been logged out by the server
            this.showAccountBlockModal();
            return;
        }


        await this.authChannel.logIn(loginApiResponse);


        if (loginInformationIsMissing) {
            this.addMissingInformationService
                .setMissingInformation(
                    loginApiResponse.passwordNeedsReset,
                    loginApiResponse.emailIsMissing,
                    loginApiResponse.securityQuestionIsMissing);

            //Only go to next state if it is NOT in Kiosk mode or if in kiosk full website mode.
            //If we go to next state here while in Kiosk mode, it will not mark this login task as "complete"
            //Kiosk will handle the state transitions, so no need to do state.go()
            if (runningAsNormalWebsiteModeOrKioskFullWebsiteMode) {
                await this.state.go(LoginStates.AddMissingInformation);
            }
        }
        else {
            this.responseErrorService.displayAlertsFromResponse(loginApiResponse, true);

            // Redirect only if it is normal website mode or if in kiosk full website mode.
            // Ignore redirects in Kiosk Mode.
            if (runningAsNormalWebsiteModeOrKioskFullWebsiteMode) {
                await this.handleRedirects(loginApiResponse);
            }
        }

        //This lets Kiosk go to next work item by completing the login step
        //wizardUi is only used while in Kiosk Mode.
        if (this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode && wizardUi) {
            if (loginApiResponse.accountStatus === 'PF') {
                await this.storefrontModalService.genericPostSignup(this.cmsItemId.storefrontCashAccountLoginModal);
            }
            else if (loginApiResponse.acctActivity === 'S') {
                await this.storefrontModalService.showVehicalViolationSuspendedAccountMessage();
            }
            else {
                wizardUi.gotoNextState();
            }
        }
    }

    public async handleRedirects(apiAuthResponse: any) {
        if (this.authService.isAuthorized(this.userRoles.suspended)) {
            await this.suspendedAccountService.getFirstSuspendedAccountState().then(this.state.go);
        } else if (apiAuthResponse.newAccountStep.accountComplete) {
            if (this.authenticateRedirectService.hasSavedState) {
                await this.authenticateRedirectService.redirectLoginAndDeleteSavedState();
            } else {
                const isLoginEnabled = this.environmentConfig.twoFactorAuth.enableLogin || false;
                if (isLoginEnabled && !apiAuthResponse.isMfaCompleted) {
                    await this.state.go(mfaStateNames.MultiFactorAuthentication, { custom: { isExplicitlyAllowedTransition: true } });
                } else {
                    await this.state.go(accountDashboardStates.Frame);
                }
            }
        } else {
            // await this.state.go(this.coreStateNames.newAccount);
            await this.createAcctRoute(apiAuthResponse);
        }
    };

    public showAccountBlockModal(): void {
        const currentOs = this.operatingSystemSnifferService.getOsFull();
        const currentDevice = this.operatingSystemSnifferService.getDeviceFull();

        // Defaults to this if the switch case falls through
        let popupMessage = this.cmsContent.Popups.MAPP_Login_Other;

        switch (currentOs) {
            case 'android':
                popupMessage = this.cmsContent.Popups.MAPP_Login_Android;
                break;
            case 'ios':
                popupMessage = this.cmsContent.Popups.MAPP_Login_IOS;
                break;
            case 'windows':
            case 'macos':
            case 'linux':
                if (currentDevice === 'Unknown') {
                    popupMessage = this.cmsContent.Popups.MAPP_Login_Browser; // desktop browser
                    break;
                }
        }

        const data: GenericCmsModalInjectionValues = {
            cmsContent: {
                Title: this.cmsContent.Popups.MAPP_Login_Modal_Title,
                AcceptBtn: 'CLOSE',
                PrimaryContent: popupMessage,
                //'Accounts created in the EZ Toll app cannot be used to log into the website'
            }
        };

        this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);
    }
    public async goToForgotPasswordPage() {

        if (this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode) {
            const userDone = await this.storefrontModalService.showGotoCsr();

            if (userDone) {
                await this.state.go(this.coreStateNames.storefrontSurvey);
            }
        }
        else {
            await this.state.go(this.environmentConfig.twoFactorAuth.enableForgotPassword ? ForgotPasswordStates.FindAccount : ForgotPasswordStates.Root);
        }
    }

    public async goToFirstTimeLoginPage() {

        const state = this.environmentConfig.twoFactorAuth.enableFirstTimeLogin
            ? FirstTimeLoginStates.FindAccount
            : this.coreStateNames.setupOnlineAccessLoginInfo;

        await this.state.go(state);
    }

    public async goToSignUpPage() {

        if (!this.environmentConfig.createAccountRefresh) {
            await this.state.go(this.coreStateNames.createAccount);
        }
        else {
            await this.state.go(FeaturesStates.Login);
        }
    }

    private async createAcctRoute(apiAuthResponse?) {
        if (!this.environmentConfig.createAccountRefresh) {
            await this.state.go(this.coreStateNames.createAccount);
        } else {

            const res = CreateAccountNavigateFunction(apiAuthResponse);
            if (res.isLoginCompleted) {
                if (this.environmentConfig.enableWebCreateAccount2FA) {
                    await this.createAcctTwoFactor(res);
                }
                else {
                    await this.state.go(res.state, { userResumedCreateAcctFlow: true });
                }
            } else {
                await this.state.go(FeaturesStates.Login);
            }
        }
    }

    private async createAcctTwoFactor(res) {
        if (res.twoFactor && res.twoFactor.authenticate) {

            await this.state.go(res.twoFactor.routeState, {
                validationSuccessState: res.state,
                acctId: this.currentUserService.getCurrentUser().acctId,
                phoneNumber: (await this.accntService.getContactInfo()).homePhoNbr


            });
        }


    }

    public async goToForgotUsernamePage(): Promise<void> {
        if (this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode) {
            const userDone = await this.storefrontModalService.showGotoCsr();

            if (userDone) {
                await this.state.go(this.coreStateNames.storefrontSurvey);
            }
        } else {
            await this.state.go(ForgotUsernameStateNames.InputEmail);
        }
    }

}
