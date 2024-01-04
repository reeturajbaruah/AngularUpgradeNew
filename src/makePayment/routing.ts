import { StateConfig } from 'common/interfaces';
import { AuthResolve, MaintenanceResolve, StateGuard, UsStatesResolver, CountryResolver, CmsResolve } from 'common/resolvers';
import { stateNames, urlPaths, cmsIds } from './constants';
import { MaintenanceFeature, userRoles, stateNames as coreStateNames, webStorageConst, quickLinkNav } from 'constants/module';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { Transition } from '@uirouter/core';
import { PaymentInfoService } from './services/paymentInfo.service';

const stateGuard = StateGuard(webStorageConst.makePaymentCurrentStep, stateNames.Landing);

const paymentInfoGuard = {
    token: 'paymentInfoGuard',
    deps: [Transition, PaymentInfoService],
    resolveFn: (transition: Transition, paymentInfoService: PaymentInfoService) => {
        if (!paymentInfoService.paymentInfo) {
            return transition.router.stateService.go(stateNames.Landing);
        }
    }
};

export const routes: StateConfig[] = [
    {  
        name: stateNames.Root,
        url: urlPaths.Root,
        abstract: true,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active, userRoles.pendingClosure, userRoles.pendingFunds),
            MaintenanceResolve(MaintenanceFeature.Account),
            UsStatesResolver('stateList'),
            CountryResolver('countryList'),
            CmsResolve('baseCmsContent', { ItemId: cmsIds.BaseContent })
        ]
    }, {
        name: stateNames.Landing,
        url: urlPaths.Landing,
        settings: {
            parent: coreStateNames.accountSummaryCollapser,
            navlevel: 2,
            nav: 2,
            content: 'Make a Payment',
            useName: true                        
        },
        resolve: [
            AuthResolve(userRoles.active, userRoles.pendingClosure, userRoles.pendingFunds),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: cmsIds.Landing, mergeParams: true })
        ],
        wizard: {
            cancelState: accountDashboardStates.Frame,
            nextState: stateNames.Checkout
        },
        quickLink: {
            nav: quickLinkNav.enterAmount,
            content: 'Make a Payment',
            useName: true
        },
        params: {
            source: {
                name: null,
                data: {
                    rebillAmt: -1
                }
            }
        }
    }, {
        name: stateNames.Checkout,
        url: urlPaths.Checkout,
        settings: {},
        resolve: [
            paymentInfoGuard,
            AuthResolve(userRoles.active, userRoles.pendingClosure, userRoles.pendingFunds),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuard({
                explicitlyForbidden: [stateNames.Receipt]
            }),
            CmsResolve('cmsContent', { ItemId: cmsIds.Checkout, mergeParams: true })
        ],
        wizard: {
            cancelState: stateNames.Landing,
            prevState: stateNames.Landing,
            nextState: stateNames.Receipt
        }
    }, {
        name: stateNames.Receipt,
        url: urlPaths.Receipt,
        settings: {},
        resolve: [
            paymentInfoGuard,
            AuthResolve(userRoles.active, userRoles.pendingClosure, userRoles.pendingFunds),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuard({
                allowed: [stateNames.Checkout],
                explicitlyForbidden: [accountDashboardStates.Frame]
            }),
            CmsResolve('cmsContent', { ItemId: cmsIds.Receipt, mergeParams: true })
        ],
        wizard: {
            nextState: accountDashboardStates.Frame,
            isEndState: true
        }
    },
];
