import { Inject, Injectable } from '@angular/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { UserRoles } from 'constants/module';
import { urlPaths as profileUrlPaths } from 'profile/constants';
import { urlPaths as paymentPlanUrlPaths } from 'paymentplans/constants';
import { urlPaths as accountActivityUrlPaths } from 'accountActivity/constants';
import { CurrentUserService, IsInvoicedService } from 'common/services';

export interface Route {
    authorizedRoles: string[];
    url: string;
}

@Injectable()
export class LinkAuthorizationService {

    constructor(
        private userRoles: UserRoles,
        private authService: AuthenticationService,
        private currentUserService: CurrentUserService,
        private isInvoicedService: IsInvoicedService
    ) {
    }

    private isAuthorized(authorizedRoles: string[]): boolean {

        return this.authService.isAuthorized(authorizedRoles) || authorizedRoles.indexOf(this.userRoles.anonymous) > -1;
    }

    public isAllowed({ url, authorizedRoles }: Route): boolean {


        if (!this.isAuthorized(authorizedRoles)) {
            return false;
        }

        if (!this.authService.isAuthenticated()) {
            return true;
        }

        //this was before I realized the followlinks won't even be in the menu or in CTAs
        //keep this here until the menu is done?
        //what is this service is used somewhere else? the following switch case might come in handy
        switch (url.toLowerCase()) {

            case profileUrlPaths.UpdateReplenishmentAmount.toLowerCase():
                return !this.isInvoicedService.isAccountInvoiced();
            case accountActivityUrlPaths.accountActivityInvoices.toLowerCase():
                return this.isInvoicedService.isAccountInvoiced();
            case paymentPlanUrlPaths.accountOverviewSummary.toLowerCase():
                return this.currentUserService.hasPaymentPlans;
            default:
                return true;

        }
    }
}
