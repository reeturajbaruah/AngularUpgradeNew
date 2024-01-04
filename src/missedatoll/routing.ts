import { StateConfig } from 'common/interfaces';
import {
    AuthResolve, CmsResolve, MaintenanceResolve, StateGuard,
    UsStatesResolver, CountryResolver
} from 'common/resolvers';
import {
    MaintenanceFeature,
    userRoles,
    quickLinkNav,
    routes as coreUrlPaths
} from 'constants/module';

import {
    stateNames, cmsIds, urlPaths
} from './constants';
import {
    webStorageConst
} from 'constants/module';

import { stateNames as homeStates } from 'home/constants';
import { Transition } from '@uirouter/core';
import { MissedATollService } from './services';

export const stateGuard = StateGuard(webStorageConst.missedATollCurrentStep, stateNames.Landing);

const violationInfoGuard = {
    token: 'violationInfoGuard',
    deps: [Transition, MissedATollService],
    resolveFn: (transition: Transition, missedATollService: MissedATollService) => {
        if (!missedATollService.getViolationInformation()) {
            return transition.router.stateService.go(stateNames.Landing);
        }
    }
};

export const routes: StateConfig[] = [
    {
        name: stateNames.Root,
        abstract: true,
        resolve: [
            AuthResolve(userRoles.anonymous),
            MaintenanceResolve(MaintenanceFeature.Violations),
            UsStatesResolver('stateList'),
            CountryResolver('countryList'),
            CmsResolve('cms', { ItemId: cmsIds.Root })
        ]
    },
    {
        name: stateNames.Landing,
        url: urlPaths.Landing,
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsSection1', { ItemId: cmsIds.LandingSection1 }),
            CmsResolve('cmsSection2', { ItemId: cmsIds.LandingSection2 })
        ],
        settings: {
            nav: 3.5,
            navlevel: 0,
            content:
                '<img src="../Content/icons/menu/hm_pay_toll_violations.png" alt="Click if missed a toll">  Missed a Toll?'
        },
        quickLink: {
            nav: quickLinkNav.missedATollLanding,
            content: 'Missed a Toll?',
            hideWhenAuthenticated: false
        },
        wizard: {
            nextState: stateNames.Grid,
        }
    },
    {
        name: stateNames.Grid,
        url: urlPaths.Grid,
        resolve: [
            //violationInfoGuard,
            AuthResolve(userRoles.anonymous),
            stateGuard({
                explicitlyAllowed: [
                    stateNames.Landing,
                    homeStates.Frame
                ]
            }),
            CmsResolve('cmsSection1', { ItemId: cmsIds.GridSection1 }),
            CmsResolve('cmsSection2', { ItemId: cmsIds.GridSection2 })
        ],
        params: {
            billingInfo: null
        },
        wizard: {
            nextState: stateNames.Billing,
            prevState: stateNames.Landing
        }
    },
    {
        name: stateNames.Billing,
        url: urlPaths.Billing,
        resolve: [
            violationInfoGuard,
            AuthResolve(userRoles.anonymous),
            stateGuard()
        ],
        params: {
            billingInfo: null
        },
        wizard: {
            nextState: stateNames.Confirm,
            prevState: stateNames.Grid,
            cancelState: stateNames.Landing
        }
    },
    {
        name: stateNames.Confirm,
        url: urlPaths.Confirm,
        resolve: [
            violationInfoGuard,
            AuthResolve(userRoles.anonymous),
            stateGuard({
                explicitlyForbidden: [stateNames.Receipt]
            }),
            CmsResolve('cmsContent', { ItemId: cmsIds.Confirm })
        ],
        params: {
            billingInfo: null
        },
        wizard: {
            nextState: stateNames.Receipt,
            prevState: stateNames.Billing,
            cancelState: stateNames.Landing
        }
    },
    {
        name: stateNames.Receipt,
        url: urlPaths.Receipt,
        resolve: [
            violationInfoGuard,
            AuthResolve(userRoles.anonymous),
            stateGuard({
                denyRefresh: true,
                explicitlyAllowed: [stateNames.Confirm],
                explicitlyForbidden: [homeStates.Frame]
            }),
            CmsResolve('thankYou', { ItemId: cmsIds.ReceiptThankYou }),
            CmsResolve('billing', { ItemId: cmsIds.ReceiptBilling }),
            CmsResolve('gotInvoice', { ItemId: cmsIds.ReceiptGotInvoicePopup }),
            CmsResolve('importantInfo', { ItemId: cmsIds.ReceiptImportantInfo }),
            CmsResolve('closeImage', { ItemId: coreUrlPaths.closeImage })
        ],
        params: {
            billingInfo: null
        },
        wizard: {
            nextState: homeStates.Frame,
            isEndState: true
        }
    }
];

