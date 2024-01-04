import { StateConfig } from 'common/interfaces';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';

import {
    AuthResolve, CmsResolve, MaintenanceResolve, StateGuard,
    UsStatesResolver, CountryResolver, FeatureToggleResolve
} from 'common/resolvers';

import { commonCmsIds } from 'cms/constants';
import { routes as coreUrlPaths } from 'constants/module';

import {
    stateNames, cmsIds, urlPaths, featureToggles
} from './constants';

import {
    webStorageConst, MaintenanceFeature, userRoles
} from 'constants/module';
import { stateNames as cavveStates } from 'cavve/constants';
import { stateNames as homestates } from 'home/constants';

export const stateGuard = StateGuard(webStorageConst.enhanceViolationsCurrentStep, stateNames.Landing);

export const routes: StateConfig[] = [
    {
        name: stateNames.Root,
        abstract: true,
        resolve: [
            AuthResolve(userRoles.anonymous),
            MaintenanceResolve(MaintenanceFeature.Violations),
            CmsResolve('cms', { ItemId: cmsIds.Frame, mergeParams: true }),
            UsStatesResolver('stateList'),
            CountryResolver('countryList')
        ],
        data: {
            title: 'TOLL VIOLATIONS PAYMENT',
        },
    },
    {
        name: stateNames.Landing,
        url: urlPaths.Landing,
        title: 'ViolationsLanding',
        settings: {
            nav: 4,
            navlevel: 0,
            content: '<img src="../Content/icons/menu/hm_envelopeIcon_purple.png" alt="Click to pay toll violations">  Got an Invoice?'
        },
        data: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            MaintenanceResolve(MaintenanceFeature.Violations),
            CmsResolve('cmsLoginModal', { ItemId: cmsIds.LoginModal, mergeParams: true }),
            CmsResolve('closeImage', { ItemId: coreUrlPaths.closeImage }),
            CmsResolve('cmsInvoiceExample', { ItemId: cmsIds.InvoiceExample, mergeParams: true }),
            CmsResolve('cmsMainPage', {
                ItemId: cmsIds.Landing,
                mergeParams: true
            }),
            CmsResolve('cmsSectionDoYouHaveAnEZTagAccount', {
                ItemId: cmsIds.LandingSectionDoYouHaveAnEZTagAccount,
                mergeParams: true
            }),
            CmsResolve('cmsSectionImportantReminders', {
                ItemId: cmsIds.LandingSectionImportantReminders,
                mergeParams: true
            }),
            CmsResolve('cmsSectionInvoiceImage', {
                ItemId: cmsIds.LandingSectionInvoiceImage,
                mergeParams: true
            }),
            CmsResolve('cmsSectionSearchForTollViolationInvoices', {
                ItemId: cmsIds.LandingSectionSearchForTollViolationInvoices,
                mergeParams: true
            })
        ],
        params: {},
        wizard: {
            nextState: stateNames.Grid
        }
    },
    {
        name: stateNames.Grid,
        url: urlPaths.Grid,
        title: 'ViolationsGrid',
        settings: {},
        data: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            stateGuard({
                explicitlyAllowed: [
                    homestates.Frame,
                    cavveStates.Offer,
                    stateNames.Landing,
                    stateNames.Receipt]
            }),
            MaintenanceResolve(MaintenanceFeature.Violations),
            FeatureToggleResolve('discountPerAgencyAvailable', featureToggles.DiscountPerAgencyAvailable),
            CmsResolve('cmsData', { ItemId: cmsIds.GridRefresh, mergeParams: true }),
            CmsResolve('cmsOverpaymentModal', { ItemId: cmsIds.LoginModal, mergeParams: true })
        ],
        params: {
            billingInfo: null
        },
        wizard: {
            prevState: stateNames.Landing,
            nextState: stateNames.MakePayment,
            cancelState: stateNames.Landing
        }
    },
    {
        name: stateNames.MakePayment,
        url: urlPaths.MakePayment,
        title: 'ViolationsMakePayment',
        settings: {},
        data: {
            title: 'PAYMENT'
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            stateGuard(),
            CmsResolve('cmsContent', { mergeParams: true, ItemId: cmsIds.SelectPayment })
        ],
        params: {
            billingInfo: null
        },
        wizard: {
            prevState: stateNames.Grid,
            nextState: stateNames.Confirm,
            cancelState: stateNames.Landing
        }
    },
    {
        name: stateNames.Confirm,
        url: urlPaths.Confirm,
        title: 'ViolationsConfirm',
        settings: {},
        data: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            stateGuard({
                explicitlyForbidden: [stateNames.Receipt]
            }),
            MaintenanceResolve(MaintenanceFeature.Violations),
            CmsResolve('cmsData', { ItemId: cmsIds.Confirm, mergeParams: true })
        ],
        params: {
            billingInfo: null
        },
        wizard: {
            prevState: stateNames.MakePayment,
            nextState: stateNames.Receipt,
            cancelState: stateNames.Landing
        }
    },
    {
        name: stateNames.Receipt,
        url: urlPaths.Receipt,
        title: 'ViolationsReceipt',
        settings: {},
        data: {
            title: 'RECEIPT'
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            stateGuard({
                explicitlyAllowed: [stateNames.Confirm],
                explicitlyForbidden: [accountDashboardStates.Frame]
            }),
            CmsResolve('cmsContent', { ItemId: cmsIds.ReceiptRefresh, mergeParams: true }),
            CmsResolve('cmsSectionImportantInformation', {
                ItemId: cmsIds.ReceiptSectionImportantInformation,
                mergeParams: true
            }),
            CmsResolve('cmsSectionThankYou', {
                ItemId: cmsIds.ReceiptSectionThankYou,
                mergeParams: true
            }),
            CmsResolve('cmsPaymentPostingPopup', {
                ItemId: cmsIds.ReceiptPaymentPostingPopup,
                mergeParams: true
            }),
        ],
        params: {
            billingInfo: null
        },
        wizard: {
            nextState: accountDashboardStates.Frame,
            cancelState: stateNames.Grid,
            isEndState: true
        }
    }
];

