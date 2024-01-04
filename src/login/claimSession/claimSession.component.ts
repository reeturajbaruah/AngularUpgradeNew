import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { stateNames as AccountOverviewStates } from 'accountDashboard/constants';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WindowRef } from 'common/providers';
import { DialogService, ResponseErrorService } from 'common/services';
import { EzTagAppRedirectLinkService } from 'common/services/ezTagAppRedirectLinkService/ezTagAppRedirectLink.service';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { UserRoles, WebStorageConst } from 'constants/module';
import { stateNames as HomeStates } from 'home/constants';
import { stateNames as LoginStates } from 'login/constants';
import { WebApiService } from 'login/services/webApi.service';
import { SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { FingerprintService } from '../../common/services/fingerprintService/fingerPrintId.service';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { StringUtilsService, OperatingSystemSnifferService } from 'common/services';


interface CmsContent {
    Title: string;
    ShortDescription: string; //PinExplanation (paragraph under Title)
    PinFormSectionTitle: string;
}

interface CmsClaimSessionExpirationModal {
    Title: string;
    ShortDescription: string; //Modal's body text
    AcceptButton: string;
}

@Component({
    selector: 'claim-session-component',
    templateUrl: './claimSession.html',
    styleUrls: ['./claimSession.less']
})
export class ClaimSessionComponent implements OnInit {

    public pin: any;
    public timer: any;
    @Input() cmsContent: CmsContent;
    @Input() cmsClaimSessionExpirationModal: CmsClaimSessionExpirationModal;

    constructor(
        private responseErrorService: ResponseErrorService,
        private webStorage: WebStorageService,
        private operatingSystemSnifferService: OperatingSystemSnifferService,
        private loginWebApiService: WebApiService,
        private authChannel: AuthChannelService,
        private webStorageConst: WebStorageConst,
        private authService: AuthenticationService,
        private userRoles: UserRoles,
        private state: StateService,
        private suspendedAccountService: SuspendedAccountService,
        private addMissingInformationService: AddMissingInformationService,
        private dialogService: DialogService,
        private ezTagAppRedirectLinkService: EzTagAppRedirectLinkService,
        private fingerprintService: FingerprintService,
        @Inject(WindowRef) private window: Window
    ) { }

    ngOnInit() {
        if (['ios', 'android'].indexOf(this.operatingSystemSnifferService.getOsFull()) < 0) {
            this.state.go(HomeStates.Frame);
            return;
        }
       
        if (this.authService.isAuthenticated()) {
            if (this.state.params.token) {
                this.authService.claimSessionLogOut();
            }
            else {
                this.authService.logout();
            }
        }

        this.webStorage.setKeyValue(this.webStorageConst.mappSessionBeingUsed, true);
        this.triggerShowExpirationModal();
    }

    private triggerShowExpirationModal() {
        const expirationDate = new Date(this.state.params.expires).getTime();
        const now = new Date(Date.now()).getTime();
        const timeLeft = isNaN(expirationDate) || now >= expirationDate ? 0 : expirationDate - now;

        this.timer = setTimeout(() => this.showExpirationModal(), timeLeft);
    }

    private async showExpirationModal() {

        const data: GenericCmsModalInjectionValues = {
            cmsContent: {
                Title: this.cmsClaimSessionExpirationModal.Title,
                AcceptBtn: this.cmsClaimSessionExpirationModal.AcceptButton,
                PrimaryContent: this.cmsClaimSessionExpirationModal.ShortDescription
            }
        };

        await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);

        try {
            this.returnToApp();
        }
        catch (err) {
            this.state.go(LoginStates.Login);
        }
    }

    public async submitPinNumber(form: NgForm) {

        if (!form.valid) { return; }

        const apiResponse = await this.loginWebApiService.claimSession({
            claimSessionCredential: {
                token: this.state.params.token,
                pin: this.pin
            }
        });

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            
            const firebaseId = apiResponse?.firebaseId;

            if (firebaseId) {
                this.fingerprintService.setFingerprintId(firebaseId);
            }

            const profileResponse = await this.authService.profile({});

            if (this.responseErrorService.isErrorFree(profileResponse)) {
                await this.redirect(profileResponse);
                clearTimeout(this.timer);
            }
        }
    }

    private loginInformationIsMissing({ passwordNeedsReset, emailIsMissing, securityQuestionIsMissing }): boolean {
        return this.addMissingInformationService.isMissingInfo(passwordNeedsReset, emailIsMissing, securityQuestionIsMissing);
    };

    private async redirect(response) {

        this.authChannel.logIn(response);

        if (this.loginInformationIsMissing(response)) {
            await this.state.go(LoginStates.AddMissingInformation);
        } else if (this.authService.isAuthorized(this.userRoles.suspended)) {
            const suspendedResponse = await this.suspendedAccountService.getFirstSuspendedAccountState();
            await this.state.go(suspendedResponse);
        } else {
            await this.state.go(AccountOverviewStates.Frame);
        }
    }

    private returnToApp() {

        const mobileRedirect = this.ezTagAppRedirectLinkService.getEzTagAppLink();

        if (mobileRedirect) {
            this.window.location.href = mobileRedirect;
        }
        else {
            this.state.go(LoginStates.Login);
        }
    }
}
