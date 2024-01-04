//TODO: Move addMissingInformationService to "ng-app/src/login/services"
// AFTER we delete legacy addMissingInformationcomponent\controller

import { Inject, Injectable } from '@angular/core';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { CurrentUserService, ErrorDisplayService, GenericRepoService, IsInvoicedService, ResponseErrorService, ToasterService } from 'common/services';
import { UserRoles } from 'constants/module';
import { of } from 'rxjs';
import { map, merge } from 'rxjs/operators';
import { SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { TranslationService } from 'translation/services';
import { StateService } from '@uirouter/angular';
import { cmsIds as cmsids } from '../../authentication/constants';
import { stateNames as loginStateNames } from '../../login/constants';
import { SessionService } from 'common/services/session/session.service';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';


@Injectable()
export class AuthenticationService {

    private isFourOneSeven = false;

    constructor(
        private genericRepoService: GenericRepoService,
        private session: SessionService,
        private userRoles: UserRoles,
        private addMissingInformationService: AddMissingInformationService,
        private suspendedAccountService: SuspendedAccountService,
        private isInvoicedService: IsInvoicedService,
        private authChannel: AuthChannelService,
        private currentUser: CurrentUserService,
        private responseErrorService: ResponseErrorService,
        private translationService: TranslationService,
        private toasterService: ToasterService,
        private state: StateService,
        private storefrontUtilityService: StorefrontUtilityService,
    ) { }

    private setIsFourOneSeven(isFourOneSeven: boolean): void {
        this.isFourOneSeven = isFourOneSeven;
    }

    private getIsFourOneSeven(): boolean {
        return this.isFourOneSeven;
    }

    //If user is authenticated, need to log out user
    public async claimSessionLogOut() {
        this.addMissingInformationService.destroyMissingInformationFlags();
        this.suspendedAccountService.destroySuspendedWizardInformation();
        //remove if account is invoiced
        this.isInvoicedService.removeAccountInvoiced();
        this.session.destroy();
        this.currentUser.destroyCurrentUser();
        await this.authChannel.logOut();
    }

    //Log out user and navigating to login component on status code 417
    public async logOutOnFourOneSeven() {

        //'getIsFourOneSeven' will be false on first 417 error
        if (this.isAuthenticated() && this.getIsFourOneSeven() === false) {
            //set IsFourOneSeven true
            this.setIsFourOneSeven(true);

            //log out user
            await this.logOutWithFourOneSevenMessage().finally(() => {
                //set IsFourOneSeven false
                this.setIsFourOneSeven(false);
            });
        }
    }

    //Log out user and navigating to login component on status code 417 and display 417 message
    private async logOutWithFourOneSevenMessage() {

        this.addMissingInformationService.destroyMissingInformationFlags();
        this.suspendedAccountService.destroySuspendedWizardInformation();
        //remove if account is invoiced
        this.isInvoicedService.removeAccountInvoiced();
        this.session.destroy();
        this.currentUser.destroyCurrentUser();
        this.authChannel.logOut();

        //Navigates to login componenet
        await this.state.go(loginStateNames.Login);

        const apiRequest = { ItemId: cmsids.IPAddressMismatch, Fields: 'Key,OriginalMessage' };
        //Gets content from CMS
        const apiResponse = await this.genericRepoService.dataFactory.getCmsPageById(apiRequest) || {};
        if (this.responseErrorService.isErrorFree(apiResponse)) {
            const parsedResponse = JSON.parse(apiResponse.cmsResponse);
            this.toasterService.show('Success', parsedResponse.OriginalMessage);
        }
        else {
            this.toasterService.show('Error', 'We are unable to process your request at this time.');
        }
    }

    public async login(credentials: { userName: string; password: string }) {
        const loginApiResponse = this.storefrontUtilityService.isRunningAsKiosk ?
            await this.genericRepoService.dataFactory.loginKiosk(credentials) : await this.genericRepoService.dataFactory.login(credentials);

        if (Array.isArray(loginApiResponse.errors) && loginApiResponse.errors.length === 0) {
            const loginInformationIsMissing = this.LoginInformationIsMissing(loginApiResponse);
            const curStep = loginApiResponse.newAccountStep ? loginApiResponse.newAccountStep.currentStep : 0;

            //set if account invoiced
            this.isInvoicedService.setAccountInvoiced(loginApiResponse.isInvoiced);

            this.session.create(loginApiResponse.acctId, loginApiResponse.acctActivity, curStep, loginInformationIsMissing, loginApiResponse.accountStatus);

            return loginApiResponse;
        } else {
            this.responseErrorService.displayErrorsFromResponse(loginApiResponse);
        }
    }

    private LoginInformationIsMissing(loginApiResponse: any): boolean {
        return this.addMissingInformationService.isMissingInfo(
            loginApiResponse.passwordNeedsReset,
            loginApiResponse.emailIsMissing,
            loginApiResponse.securityQuestionIsMissing);
    }

    public async logout() {

        try {
            return await this.genericRepoService.dataFactory.logout();
        } finally {
            this.addMissingInformationService.destroyMissingInformationFlags();
            this.suspendedAccountService.destroySuspendedWizardInformation();
            //remove if account is invoiced
            this.isInvoicedService.removeAccountInvoiced();
            this.session.destroy();
            this.currentUser.destroyCurrentUser();
            this.authChannel.logOut();
        }
    }

    public async profile(request) {

        await this.translationService.isReadyEventPromise;
        const loginApiResponse = await this.genericRepoService.dataFactory.profile(request);

        this.addMissingInformationService.setProfileCallHasOccured(true);
        const missingInformationFlags = this.LoginInformationIsMissing(loginApiResponse);
        this.addMissingInformationService.setMissingInformation(
            loginApiResponse.passwordNeedsReset,
            loginApiResponse.emailIsMissing,
            loginApiResponse.securityQuestionIsMissing);
        this.session.create(loginApiResponse.acctId, loginApiResponse.acctActivity, null, missingInformationFlags, loginApiResponse.accountStatus);
        this.currentUser.updateCurrentUser(loginApiResponse);
        //set if account invoiced
        this.isInvoicedService.setAccountInvoiced(loginApiResponse.isInvoiced);

        return loginApiResponse;
    }

    public isAuthenticated = () => (this.session.acctId !== 0) &&
        (this.session.userRole !== this.userRoles.notAuthenticated);

    public isMfaAuthOnly = () => (this.session.acctId === 0) &&
        (this.session.userRole === this.userRoles.notAuthenticatedMf);

    public get isAuthenticated$() {
        return of('now')
            .pipe(
                merge(this.currentUser.authorizationChange$),
                map(() => this.isAuthenticated())
            );
    }

    public isSuspended = () => (this.session.userRole === this.userRoles.suspended);

    public get isSuspended$() {
        return of('now')
            .pipe(
                merge(this.currentUser.authorizationChange$),
                map(() => this.isSuspended())
            );
    }

    public isPendingFunds = () => (this.session.userRole === this.userRoles.pendingFunds);

    public get isPendingFunds$() {
        return of('now')
            .pipe(
                merge(this.currentUser.authorizationChange$),
                map(() => this.isPendingFunds())
            );
    }

    public isAuthorized = (authorizedRoles: string[] | string) => {

        const isAuthorized = (Array.isArray(authorizedRoles)
            ? authorizedRoles
            : [authorizedRoles])
            .indexOf(this.session.userRole) !== -1;
        return isAuthorized;
    };
}
