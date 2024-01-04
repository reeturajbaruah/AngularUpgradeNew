import { NgModule } from '@angular/core';

import { WebStorageConst } from './webstorage.constants';
export * from './webstorage.constants';

import { UserRoles } from './userRoles.constants';
export * from './userRoles.constants';

import { StateNames } from './stateNames.constants';
export * from './stateNames.constants';

import { UrlPaths } from './routes.constants';
export * from './routes.constants';

import { QuickLinkNav } from './quickLinkNav.constants';
export * from './quickLinkNav.constants';

import { PhoneNumbers } from './phoneNumbers.constants';
export * from './phoneNumbers.constants';

import { AuthEvents } from './authEvents.constants';
export * from './authEvents.constants';

import { environment } from 'environments/environment';

import { SiteVerbiage  } from './siteVerbiage.constants';
export * from './siteVerbiage.constants';

import { downgrade } from 'hybrid/module';

export enum MaintenanceFeature {
    MobileApp,
    MobileAppEzTag,
    Account,
    Violations,
    MultipleVehicleUpload,
    CA
}

export const webStorageConst = new WebStorageConst();
export const userRoles = new UserRoles();
export let stateNames = new StateNames();
export const routes = new UrlPaths();
export const quickLinkNav = new QuickLinkNav();
export const phoneNumbers = new PhoneNumbers();
export const authEvents = new AuthEvents();
export const siteVerbiage = new SiteVerbiage();

import { KioskStates as CreateAcctKioskSates } from 'account/create/states';
stateNames = { ...stateNames, ...CreateAcctKioskSates };

downgrade('webStorageConst', { constant: webStorageConst });
downgrade('USER_ROLES', { constant: userRoles });
downgrade('stateNames', { constant: stateNames });
downgrade('routes', { constant: routes });
downgrade('quickLinkNav', { constant: quickLinkNav });
downgrade('angularEnvironment', { constant: environment });
downgrade('phoneNumbers', { constant: phoneNumbers });
downgrade('AUTH_EVENTS', { constant: authEvents });
downgrade('siteVerbiage', { constant: siteVerbiage });
//Violations
import { stateNames as violationsStateNames } from 'violations/constants';
downgrade('violationsStateNames', { constant: violationsStateNames });
//EO - Violations
import { stateNames as violatorStateNames } from 'frp3/constants';
downgrade('violatorStateNames', { constant: violatorStateNames });
//Cavve
import { stateNames as cavveStateNames, urlPaths as cavveUrlPaths } from 'cavve/constants';
downgrade('cavveStates', { constant: cavveStateNames });
//Remove after legacy cleanup
downgrade('cavveRoutes', { constant: cavveUrlPaths });

//Missed A Toll
import { stateNames as missedATollStateNames } from 'missedatoll/constants';
downgrade('missedATollStates', { constant: missedATollStateNames });

//Payment Plans
import { urlPaths as paymentPlansUrlPaths } from 'paymentplans/constants';
downgrade('paymentPlansRoutes', { constant: paymentPlansUrlPaths });

//Login 
import {
    urlPaths as loginUrlPaths,
    stateNames as loginStateNames
} from 'login/constants';
downgrade('loginStates', { constant: loginStateNames });
downgrade('loginRoutes', { constant: loginUrlPaths });

import {
    stateNames as accountDashboardStateNames,
    urlPaths as accountDashboardUrlPaths
} from 'accountDashboard/constants';
downgrade('accountOverviewStates', { constant: accountDashboardStateNames });
downgrade('accountOverviewRoutes', { constant: accountDashboardUrlPaths });

//Profile
import {
    urlPaths as profileUrlPaths,
    stateNames as profileStateNames
} from 'profile/constants';
downgrade('profileStates', { constant: profileStateNames });
downgrade('profileRoutes', { constant: profileUrlPaths });

//Account Activity
import {
    urlPaths as accountActivityUrlPaths,
    stateNames as accountActivityStateNames
} from 'accountActivity/constants';
downgrade('accountActivityStates', { constant: accountActivityStateNames });
downgrade('accountActivityRoutes', { constant: accountActivityUrlPaths });

//make a payment
import {
    stateNames as makePaymentStateNames, urlPaths as makePaymentUrlPaths
} from 'makePayment/constants';

downgrade('makePaymentStates', { constant: makePaymentStateNames });
downgrade('makePaymentRoutes', { constant: makePaymentUrlPaths });

import {
    KioskStates as vehiclesStateNames, Routes as vehiclesUrlPaths
} from 'vehicles/shared';

downgrade('vehiclesStates', { constant: vehiclesStateNames });
downgrade('vehiclesRoutes', { constant: vehiclesUrlPaths });

//forgot password
import {
    stateNames as forgotPasswordStateNames, urlPaths as forgotPasswordUrlPaths
} from 'forgotPassword/constants';

downgrade('forgotPasswordStates', { constant: forgotPasswordStateNames });
downgrade('forgotPasswordRoutes', { constant: forgotPasswordUrlPaths });

//first time login
import {
    stateNames as firstTimeLoginStateNames, urlPaths as firstTimeLoginUrlPaths
} from 'firstTimeLogin/constants';

downgrade('firstTimeLoginStates', { constant: firstTimeLoginStateNames });
downgrade('firstTimeLoginRoutes', { constant: firstTimeLoginUrlPaths });

@NgModule({
    declarations: [],
    imports: [],
    providers: [
        { provide: WebStorageConst, useValue: webStorageConst },
        { provide: UserRoles, useValue: userRoles },
        { provide: StateNames, useValue: stateNames },
        { provide: SiteVerbiage, useValue: siteVerbiage },
        { provide: UrlPaths, useValue: routes },
        { provide: PhoneNumbers, useValue: phoneNumbers },
        { provide: QuickLinkNav, useValue: quickLinkNav },
        { provide: AuthEvents, useValue: authEvents }
    ]
})
export class ConstantsModule {
}
