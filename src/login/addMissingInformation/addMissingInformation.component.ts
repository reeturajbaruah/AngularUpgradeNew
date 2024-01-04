import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { stateNames as AccountDashboardStates } from 'accountDashboard/constants';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WindowRef } from 'common/providers';
import { ResponseErrorService, CurrentUserService, CurrentUser, IsInvoicedService } from 'common/services';
import { AccountService, AddMissingInformationResponse, SecurityQuestionInfo } from 'common/services/accountService/account.service';
import { WizardComponent } from 'common/ui';
import { StateNames as CoreStateNames } from 'constants/stateNames.constants';
import { UserRoles } from 'constants/userRoles.constants';
import { MissingInformationFlags } from 'login/interfaces';
import { SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { Alert } from '../../common/interfaces';
import { PasswordValidationInfo } from 'common/interfaces';
import { SessionService } from 'common/services/session/session.service';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

interface CmsContent {
    Title: string;
    ShortDescription: string;
    ResetPasswordSectionHeader: string;
    UpdateSecurityQuestionSectionHeader: string;
    UpdateYourEmailSectionHeader: string;
    PopupForClosingTabOrBrowserInIEOnly: string;
}

interface MissingInformation {
    currentPassword: string;
    newPassword: string;
    email: string;
    securityAnswer: string;
    securityQuestionID: string;
}

interface SaveMissingInformationApiRequest {
    currentPassword: string;
    password: string;
    email: string;
    securityAnswer: string;
    securityQuestionID: string;
}

@Component({
    selector: 'add-missing-information-component',
    templateUrl: './addMissingInformation.html',
    styleUrls: ['./addMissingInformation.less']
})

export class AddMissingInformationComponent implements OnInit {

    constructor(
        private currentUser: CurrentUserService,
        private responseErrorService: ResponseErrorService,
        private session: SessionService,
        private isInvoicedService: IsInvoicedService,
        @Inject(WindowRef) private window: Window,
        private storefrontUtilityService: StorefrontUtilityService,
        private accountService: AccountService,
        private authChannel: AuthChannelService,
        private addMissingInformationService: AddMissingInformationService,
        private authService: AuthenticationService,
        private suspendedAccountService: SuspendedAccountService,
        private userRoles: UserRoles,
        private state: StateService,
        private coreStateNames: CoreStateNames
    ) { }

    @Input() cmsContent: CmsContent;
    @Input() pwCmsData: PasswordValidationInfo;
    private currentUserData: CurrentUser;

    public addMissingInformation: MissingInformation = {
        currentPassword: '',
        newPassword: '',
        securityAnswer: '',
        securityQuestionID: '',
        email: ''
    };

    public missingInformationFlags: MissingInformationFlags;
    public securityQuestions: SecurityQuestionInfo[];

    public isShowNewPassword: boolean;
    public isShowCurrentPassword: boolean;
    public isShowSecurityAnswer: boolean;

    ngOnInit() {
        this.missingInformationFlags = this.addMissingInformationService.returnMissingInformation();
        this.setSecurityQuestions();

        //Browser popup (if user attempts to close browser while on this page)
        this.window.addEventListener('beforeunload', $event =>

            //Custom text is not supported by any browsers (except IE) and will not display (except IE).
            //https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
            $event.returnValue = this.cmsContent.PopupForClosingTabOrBrowserInIEOnly
        );

    }
    private async setSecurityQuestions() {
        const apiResponse = await this.accountService.getSecurityQuestions();

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            this.securityQuestions = apiResponse.securityQuestions;
        }
    }

    public async saveInformation(wizardUi: WizardComponent) {

        const apiRequest: SaveMissingInformationApiRequest = {
            currentPassword: this.addMissingInformation.currentPassword,
            password: this.addMissingInformation.newPassword,
            email: this.addMissingInformation.email,
            securityAnswer: this.addMissingInformation.securityAnswer,
            securityQuestionID: this.addMissingInformation.securityQuestionID
        };

        const apiResponse: AddMissingInformationResponse = await this.accountService.saveInformation(apiRequest);

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            this.addMissingInformationService.destroyMissingInformationFlags();
            this.session.create(apiResponse.accountId, apiResponse.accountActivity, null, false);


            this.currentUserData = this.currentUser.getCurrentUser() || {};

            //Set if account invoiced
            this.isInvoicedService.setAccountInvoiced(apiResponse.isInvoiced);

            this.currentUserData.accountStatus = apiResponse.accountActivity;
            this.currentUserData.acctActivity = apiResponse.accountActivity;
            this.currentUserData.acctId = apiResponse.accountId;
            this.currentUserData.alerts = apiResponse.alerts as [];
            this.currentUserData.emailIsMissing = false;
            this.currentUserData.errors = apiResponse.errors as [];
            this.currentUserData.firstName = apiResponse.firstName;
            this.currentUserData.lastName = apiResponse.lastName;
            this.currentUserData.passwordNeedsReset = false;
            this.currentUserData.securityQuestionIsMissing = false;
            this.currentUserData.sessionTimedOut = apiResponse.sessionTimedOut;
            this.currentUserData.driverLic = apiResponse.driverLic;
            this.currentUserData.driverLicState = apiResponse.driverLicState;
            this.currentUserData.companyName = apiResponse.companyName;

            await this.authChannel.logIn(this.currentUserData);

            //Use wizard to allow Kiosk to handle state transitions.
            //Return here as to NOT do state.go() while in Kiosk Mode
            if (this.storefrontUtilityService.isRunningAsKiosk && wizardUi) {
                return wizardUi.gotoNextState();
            }

            //Use state.go() when NOT in Kiosk Mode
            if (this.authService.isAuthorized(this.userRoles.suspended)) {
                const firstSuspendedAccountState = await this.suspendedAccountService.getFirstSuspendedAccountState();
                await this.state.go(firstSuspendedAccountState);
            } else if (apiResponse.newAccountStep.accountComplete) {
                await this.state.go(AccountDashboardStates.Frame);
            } else {
                await this.state.go(this.coreStateNames.newAccount);
            }
        }
    };
}
