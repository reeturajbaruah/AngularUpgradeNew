import { Transition } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';

import {
    AuthResolve, BooleanResolve, CmsResolve, MaintenanceResolve,
    UsStatesResolver, CountryResolver
} from 'common/resolvers';

import { StateService } from './services';

import {
    stateNames, cmsIds, urlPaths
} from './constants';

import {
    MaintenanceFeature, StateNames as CoreStateNames,
    userRoles, stateNames as coreStates, routes as coreUrlPaths, quickLinkNav
} from 'constants/module';
import { stateNames as homeStates } from 'home/constants';

import { commonCmsIds } from 'cms/constants';

/**
 * A Resolve check to ensure application is in proper 'state' when enter parts of the
 * payment plan flow.
 */
export const stateGuard = {
    token: 'stateGuard',
    deps: [Transition, StateService, CoreStateNames],
    resolveFn: (transition: Transition, stateService: StateService, coreStateNames: CoreStateNames) => {

        const toState = transition.$to();
        const isEzTagFlow: boolean = transition.injector().get('isEzTagFlow');

        const violationStates = [
            stateNames.Grid, stateNames.MakePayment, stateNames.Confirm, stateNames.Receipt
        ];

        const ezTagStates = [
            stateNames.AccountOverviewSummary, stateNames.AccountOverviewSelectPayment,
            stateNames.AccountOverviewConfirm, stateNames.AccountOverviewReceipt];

        const previousState = stateService.getCurrentStep(isEzTagFlow);

        const goingToStart =
            toState.name === stateNames.Landing
            || toState.name === stateNames.AccountOverviewSummary;

        const resetPaymentComplete = goingToStart
            || toState.name === stateNames.Grid;

        if (stateService.isAcceptableState(previousState, toState.name, isEzTagFlow)) {

            //destroy and reset
            if (goingToStart) {
                stateService.destroyPaymentPlansCurrentStep(isEzTagFlow);
            }

            if (resetPaymentComplete) {
                stateService.resetPaymentComplete(isEzTagFlow);
            }

            //completed
            if (toState.name === stateNames.Receipt
                || toState.name === stateNames.AccountOverviewReceipt) {
                stateService.setPaymentComplete(isEzTagFlow);
            }

            stateService.saveStep(toState.name, isEzTagFlow);
        } else {
            //not acceptable state, but in flow, send to start
            if ((isEzTagFlow ? ezTagStates : violationStates).indexOf(toState.name) > -1) {
                transition.router.stateService.go(
                    isEzTagFlow
                        ? stateNames.AccountOverviewSummary
                        : stateNames.Landing);
            } else {
                // Redirect home if coming from a state that's not part of any payment plan flow
                transition.router.stateService.go(homeStates.Frame);
            }
            return true;
        }

    }
};

const paymentPlansRoutes: StateConfig[] = [
    {
        name: stateNames.Root,
        abstract: true,
        resolve: [
            AuthResolve(userRoles.anonymous),
            MaintenanceResolve(MaintenanceFeature.Violations),
            BooleanResolve('isEzTagFlow', false),
            CmsResolve('cmsBaseContent', { ItemId: '07440039-6865-4B70-ABD5-33D1E08709B6', mergeParams: true })
        ]
    },
    {
        name: stateNames.Landing,
        url: urlPaths.Landing,
        title: 'PaymentPlansLanding',
        settings: {
            nav: 5,
            navlevel: 0,
            content:
                '<img src="../Content/icons/menu/hm_payment_plan.png" alt="Click to pay toll violations">  Payment Plan'
        },
        resolve: [
            stateGuard,
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsPopup', { ItemId: cmsIds.LandingPopup }),
            CmsResolve('closeImage', { ItemId: coreUrlPaths.closeImage }),
            CmsResolve('cmsPage', { ItemId: cmsIds.Landing }),
            CmsResolve('cmsInvoiceExample', { ItemId: cmsIds.InvoiceExample }),
            UsStatesResolver('USstates')
        ],
        quickLink: {
            nav: quickLinkNav.paymentPlan,
            content: 'Payment Plans',
            hideWhenAuthenticated: true
        },
        wizard: {
            nextState: stateNames.Grid
        },
        params: {
            licenseState: null,
            licensePlate: null,
            paymentplanId: null,
            invoiceNum: null,
        }
    },
    {
        name: stateNames.Grid,
        url: urlPaths.Grid,
        title: 'PaymentPlansGrid',
        settings: {},

        resolve: [
            AuthResolve(userRoles.anonymous),
            BooleanResolve('isEzTagFlow', false),
            stateGuard,
            CmsResolve('cmsContent', { mergeParams: true, ItemId: cmsIds.Summary })
        ],
        wizard: {
            nextState: stateNames.MakePayment
        }
    },
    {
        name: stateNames.MakePayment,
        url: urlPaths.MakePayment,
        title: 'PaymentPlansMakePayment',
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            BooleanResolve('isEzTagFlow', false),
            stateGuard,
            CmsResolve('cmsContent', { mergeParams: true, ItemId: cmsIds.SelectPayment }),
            UsStatesResolver('states'),
            CountryResolver('countries')
        ],
        wizard: {
            nextState: stateNames.Confirm,
            cancelState: stateNames.Landing,
            prevState: stateNames.Grid
        }
    },
    {
        name: stateNames.Confirm,
        url: urlPaths.Confirm,
        title: 'PaymentPlansConfirm',
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            BooleanResolve('isEzTagFlow', false),
            stateGuard,
            CmsResolve('cmsContent', { ItemId: cmsIds.ConfirmPayment })
        ],
        wizard: {
            nextState: stateNames.Receipt,
            cancelState: stateNames.MakePayment,
            prevState: stateNames.MakePayment
        }
    },
    {
        name: stateNames.Receipt,
        url: urlPaths.Receipt,
        title: 'PaymentPlansReceipt',
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            BooleanResolve('isEzTagFlow', false),
            stateGuard,
            CmsResolve('cmsContent', { ItemId: cmsIds.Receipt })
        ],
        wizard: {
            nextState: stateNames.Grid,
            isEndState: true
        }
    }
];

const ezTagPaymentPlanRoutes: StateConfig[] = [
    {
        name: stateNames.AccountOverview,
        abstract: true,
        resolve: [
            AuthResolve(userRoles.active, userRoles.suspended),
            MaintenanceResolve(MaintenanceFeature.Account, MaintenanceFeature.Violations),
            BooleanResolve('isEzTagFlow', true),
            CmsResolve('cmsBaseContent', { ItemId: '07440039-6865-4B70-ABD5-33D1E08709B6' })
        ]
    },
    {
        name: stateNames.AccountOverviewSummary,
        url: urlPaths.accountOverviewSummary,
        title: 'AccountOverviewPaymentPlansSummary',
        settings: {
            parent: coreStates.accountSummaryCollapser,
            navlevel: 2,
            nav: 3,
            content: 'My Payment Plan'
        },
        resolve: [
            stateGuard,
            AuthResolve(userRoles.active, userRoles.suspended),
            BooleanResolve('isEzTagFlow', true),
            stateGuard,
            CmsResolve('cmsContent', { mergeParams: true, ItemId: cmsIds.Summary })
        ],
        wizard: {
            nextState: stateNames.AccountOverviewSelectPayment
        }
    },
    {
        name: stateNames.AccountOverviewSelectPayment,
        url: urlPaths.accountOverviewSelectPayment,
        title: 'AccountOverviewPaymentPlansSelectPayment',
        settings: {},
        resolve: [
            AuthResolve(userRoles.active, userRoles.suspended),
            BooleanResolve('isEzTagFlow', true),
            stateGuard,
            CmsResolve('cmsContent', { mergeParams: true, ItemId: cmsIds.SelectPayment }),
            UsStatesResolver('states'),
            CountryResolver('countries')
        ],
        wizard: {
            nextState: stateNames.AccountOverviewConfirm,
            cancelState: stateNames.AccountOverviewSummary,
            prevState: stateNames.AccountOverviewSummary
        }
    },
    {
        name: stateNames.AccountOverviewConfirm,
        url: urlPaths.accountOverviewConfirm,
        title: 'AccountOverviewPaymentPlansConfirm',
        settings: {},
        resolve: [
            AuthResolve(userRoles.active, userRoles.suspended),
            BooleanResolve('isEzTagFlow', true),
            stateGuard,
            CmsResolve('cmsContent', { ItemId: cmsIds.ConfirmPayment })
        ],
        wizard: {
            nextState: stateNames.AccountOverviewReceipt,
            cancelState: stateNames.AccountOverviewSummary,
            prevState: stateNames.AccountOverviewSelectPayment
        }
    },
    {
        name: stateNames.AccountOverviewReceipt,
        url: urlPaths.accountOverviewReceipt,
        title: 'AccountOverviewPaymentPlansReceipt',
        settings: {},
        resolve: [
            AuthResolve(userRoles.active, userRoles.suspended),
            BooleanResolve('isEzTagFlow', true),
            stateGuard,
            CmsResolve('cmsContent', { ItemId: cmsIds.Receipt })
        ],
        wizard: {
            nextState: stateNames.AccountOverviewSummary,
            isEndState: true
        }
    }
];

export const routes = [...paymentPlansRoutes, ...ezTagPaymentPlanRoutes];
