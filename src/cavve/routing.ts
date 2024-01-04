import { StateConfig } from 'common/interfaces';
import {
    AuthResolve, CmsResolve, MaintenanceResolve, StateGuard,
    UsStatesResolver, CountryResolver
} from 'common/resolvers';
import {
    MaintenanceFeature,
    userRoles,
    webStorageConst,
    stateNames as coreStateNames
} from 'constants/module';

import { stateNames as violationsStateNames } from 'violations/constants';
import { environment } from 'environments/environment';

import { Transition } from '@uirouter/angular';

import { commonCmsIds } from 'cms/constants';

//cavve components
import { FrameComponent } from './frame/frame.component';
import { OfferComponent } from './offer/offer.component';
import { PersonalComponent } from './personal/personal.component';
import { BillingComponent } from './billing/billing.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReceiptComponent } from './receipt/receipt.component';

import {
    stateNames,
    cmsIds,
    urlPaths
} from './constants';

import { stateNames as homeStates } from 'home/constants';

export const stateGuard = StateGuard(webStorageConst.cavveCurrentStep, stateNames.Offer);

const cavveStates: StateConfig[] = [
    {
        name: stateNames.Root,
        abstract: true,
        component: FrameComponent,
        resolve: [
            AuthResolve(userRoles.anonymous),
            UsStatesResolver('usStates'),
            CountryResolver('countries'),
            MaintenanceResolve(MaintenanceFeature.Violations),
            CmsResolve('cmsBaseContent', { ItemId: cmsIds.Root })
        ]
    },
    {
        name: stateNames.Offer,
        url: urlPaths.Offer,
        component: OfferComponent,
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('landingPageInfo', { ItemId: cmsIds.Offer }),
            stateGuard()
        ],
        wizard: {
            nextState: stateNames.Personal,
            prevState: violationsStateNames.Landing
        }
    },
    {
        name: stateNames.Personal, 
        url: urlPaths.Personal, 
        component: PersonalComponent,
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('personalPageInfo', { ItemId: cmsIds.PersonalInfoPage }),
            CmsResolve('cancelMessageContent', { ItemId: cmsIds.CancelMessages }),
            CmsResolve('pwCmsData', { ItemId: commonCmsIds.passwordValidation, mergeParams: true }),
            stateGuard()
        ],
        wizard: {
            nextState: stateNames.Billing, 
            prevState: stateNames.Offer, 
            cancelState: stateNames.Offer
        }
    },
    {
        name: stateNames.Billing, 
        url: urlPaths.Billing, 
        component: BillingComponent,
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsContent', { ItemId: cmsIds.Billing }),
            CmsResolve('cancelMessageContent', { ItemId: cmsIds.CancelMessages }),
            stateGuard()
        ],
        params: {
            billingInfo: null,
            eftAddress: null
        },
        wizard: {
            nextState: stateNames.Confirm, 
            prevState: stateNames.Personal, 
            cancelState: stateNames.Offer 
        }
    },
    {
        name: stateNames.Confirm, 
        url: urlPaths.Confirm, 
        component: ConfirmComponent,
        resolve: [
            AuthResolve(userRoles.anonymous),
            stateGuard({
                explicitlyForbidden: [stateNames.Receipt]
            }),
            CmsResolve('cmsContent', { ItemId: cmsIds.Confirm }),
            CmsResolve('cmsSectionConfirmOrderSummary', { ItemId: cmsIds.ConfirmOrderSummarySection })
        ],
        params: {
            //TODO: This should be cleaned up when ETC fix thier set violatorCall to include address
            //BUG 58048
            eftAddress: null
        },
        wizard: {
            nextState: stateNames.Receipt, 
            prevState: stateNames.Billing,
            cancelState: stateNames.Offer 
        }
    },
    {
        name: stateNames.Receipt, 
        url: urlPaths.Receipt, 
        component: ReceiptComponent,
        resolve: [
            AuthResolve(userRoles.anonymous),
            stateGuard({
                denyRefresh: true,
                explicitlyAllowed: [stateNames.Confirm], 
                explicitlyForbidden: [homeStates.Frame]
            }),
            CmsResolve('cmsContent', { ItemId: cmsIds.Receipt, mergeParams: true }),
            CmsResolve('cmsSectionThankYou', { ItemId: cmsIds.ReceiptThankYouSection, mergeParams: true })

        ],
        params: {
            vehicleInfo: null,
            billingInfo: null
        },
        wizard: {
            nextState: homeStates.Frame,
            isEndState: true
        }
    }
];

export const routes = [...cavveStates];
