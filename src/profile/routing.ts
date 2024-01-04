import { StateConfig } from 'common/interfaces';
import {
    AuthResolve, MaintenanceResolve, UpdateBillingInformationResolve,
    StateGuard, CmsResolve, UsStatesResolver, CountryResolver
} from 'common/resolvers';
import { cmsIds, stateNames, urlPaths } from './constants';
import {
    MaintenanceFeature, userRoles, quickLinkNav,
    routes as coreUrlPaths, webStorageConst
} from 'constants/module';
import { commonCmsIds } from '../cms/constants';
import { CurrentUser, CurrentUserService } from '../common/services';

const stateGuard = StateGuard(webStorageConst.closeAccountCurrentStep, stateNames.CloseAccountAgreement);

export const states: StateConfig[] = [
    {
        name: stateNames.AccountDetails,
        url: urlPaths.AccountDetails,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active, userRoles.pendingClosure),
            CmsResolve('cmsProfileContent', { ItemId: cmsIds.profileDashboard }),
            CmsResolve('closeAccountModalCms', { ItemId: cmsIds.closeAccountPopup }),
            CmsResolve('contactInfoCardCMSContent', { ItemId: cmsIds.contactInfoCard }),
            //TODO: This CMS ID needs to be moved somewhere else
            CmsResolve('paymentMethodImages', { mergeParams: false, ItemId: coreUrlPaths.paymentMethodDisplayIconsRefresh }),
            CmsResolve('billingCMS', { ItemId: cmsIds.BillingNoData }),
            CmsResolve('autoReplenishCms', { ItemId: cmsIds.autoReplenishIndicator }),
        ],
        quickLink: {
            nav: quickLinkNav.accountInformation,
            content: 'Account Details'
        }
    },
    {
        name: stateNames.ChangeUsername,
        url: urlPaths.ChangeUsername,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: cmsIds.changeUsername })
        ]
    }, {
        name: stateNames.ChangePassword,
        url: urlPaths.ChangePassword,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: cmsIds.changePassword }),
            CmsResolve('pwCmsData', { ItemId: commonCmsIds.passwordValidation, mergeParams: true })
        ]
    }, {
        name: stateNames.CloseAccountFrame,
        url: urlPaths.CloseAccountFrame,
        abstract: true,
        resolve: [
            CmsResolve('cmsContent', { ItemId: cmsIds.closeAccountFrame }),
            MaintenanceResolve(MaintenanceFeature.Account),
            UsStatesResolver('stateList'),
            CountryResolver('countryList')
        ],
        data: {
            fromCloseAccount: true,
            showCloseAccountHeader: true
        }
    }, {
        name: stateNames.CloseAccountAgreement,
        url: urlPaths.CloseAccountAgreement,
        settings: {},
        data: {
            showCloseAccountHeader: true
        },
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: cmsIds.closeAccountAgreement })
        ],
        wizard: {
            cancelState: stateNames.AccountDetails,
            nextState: stateNames.CloseAccountRefund
        }
    }, {
        name: stateNames.CloseAccountRefund,
        url: urlPaths.CloseAccountRefund,
        settings: {},
        data: {
            showCloseAccountHeader: true
        },
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuard({
                allowed: [stateNames.CloseAccountCheckInformation]
            }),
            CmsResolve('cmsContent', { ItemId: cmsIds.closeAccountRefund })
        ],
        wizard: {
            prevState: stateNames.CloseAccountAgreement,
            cancelState: stateNames.AccountDetails,
            nextState: stateNames.CloseAccountReview
        }
    }, {
        name: stateNames.CloseAccountReview,
        url: urlPaths.CloseAccountReview,
        settings: {},
        data: {
            showCloseAccountHeader: false
        },
        resolve: [
            AuthResolve(userRoles.pendingClosure),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuard({
                explicitlyAllowed: [stateNames.CloseAccountRefund],
                explicitlyForbidden: [stateNames.AccountDetails]
            }),
            CmsResolve('cmsContent', { ItemId: cmsIds.closeAccountReview })
        ],
        wizard: {
            cancelState: stateNames.AccountDetails,
            nextState: stateNames.AccountDetails
        }
    }, {
        name: stateNames.UpdateAuthorizedContacts,
        url: urlPaths.UpdateAuthorizedContacts,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: cmsIds.updateAuthorizedContacts })
        ],
        params: {
            authContacts: null,
            authContactLimit: null
        },
        wizard: {
            //This is only for the wizard/state handling in KIOSK
            isEndState: true,
            cancelState: stateNames.AccountDetails,
            nextState: stateNames.AccountDetails
        }
    }, {
        name: stateNames.UpdateMailingAddress,
        url: urlPaths.UpdateMailingAddress,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: cmsIds.updateMailingAddress }),
            UsStatesResolver('stateList'),
            CountryResolver('countryList')
        ],
        params: {
            personalInfo: null
        }
    }, {
        name: stateNames.UpdateSecurityQuestion,
        url: urlPaths.UpdateSecurityQuestion,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: cmsIds.updateSecurityQuestion })
        ]
    }, {
        name: stateNames.UpdateContactInformation,
        url: urlPaths.UpdateContactInformation,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: cmsIds.updateContactInfo }),
            CmsResolve('mailingCmsContent', { ItemId: cmsIds.updateMailingAddress }),
            UsStatesResolver('stateList'),
            CountryResolver('countryList')
        ], wizard: {
            //This is only for the wizard/state handling in KIOSK
            isEndState: true,
            cancelState: stateNames.AccountDetails,
            nextState: stateNames.AccountDetails
        },
        params: {
            personalInfo: null
        }
    }, {
        name: stateNames.UpdateReplenishmentAmount,
        url: urlPaths.UpdateReplenishmentAmount,
        settings: {},
        resolve: [
            CmsResolve('cmsContent', { ItemId: cmsIds.updateReplenishmentAmount }),
            AuthResolve(userRoles.active, userRoles.pendingClosure),
            MaintenanceResolve(MaintenanceFeature.Account),
            UpdateBillingInformationResolve //We should be able to delete this after we delete the old billing page and feature toggle
        ], wizard: {
            //This is only for the wizard/state handling in KIOSK
            cancelState: stateNames.AccountDetails,
            nextState: stateNames.UpdateFlexpayBillingInformation
        }, params: {
            accountData: null
        }
    }, {
        name: stateNames.UpdateFlexpayBillingInformation,
        url: urlPaths.UpdateFlexpayBillingInformation,
        settings: {},
        resolve: [
            CmsResolve('cmsContent', { ItemId: cmsIds.updateBillingInfo }),
            CmsResolve('flexPaycmsContent', { ItemId: cmsIds.updateFlexPayBillingInfo }),
            CmsResolve('paymentConfirmModal', { ItemId: cmsIds.paymentConfirmModal }),
            UsStatesResolver('stateList'),
            CountryResolver('countryList'),
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('paymentMethodImages', { mergeParams: false, ItemId: coreUrlPaths.paymentMethodDisplayIcons }),
            CmsResolve('billingCMS', { ItemId: cmsIds.BillingNoData }),
            UpdateBillingInformationResolve //We should be able to delete this after we delete the old billing page and feature toggle
        ], wizard: {
            //This is only for the wizard/state handling in KIOSK
            prevState: stateNames.UpdateReplenishmentAmount,
            cancelState: stateNames.AccountDetails,
            isEndState: true
        }, params: {
            accountData: null
        }
    }, {
        name: stateNames.UpdateBillingInformation,
        url: urlPaths.UpdateBillingInformation,
        settings: {},
        resolve: [
            CmsResolve('cmsContent', { ItemId: cmsIds.updateBillingInfo }),
            CmsResolve('optInCMS', { ItemId: cmsIds.optInModal }),
            CmsResolve('paymentConfirmModal', { ItemId: cmsIds.paymentConfirmModal }),
            UsStatesResolver('stateList'),
            CountryResolver('countryList'),
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('paymentMethodImages', { mergeParams: false, ItemId: coreUrlPaths.paymentMethodDisplayIcons }),
            CmsResolve('billingCMS', { ItemId: cmsIds.BillingNoData }),
            UpdateBillingInformationResolve//We should be able to delete this after we delete the old billing page and feature toggle
        ], wizard: {
            //This is only for the wizard/state handling in KIOSK
            isEndState: true
        }
    }];

export const nonRefreshedRoutes: StateConfig[] = [{
        name: stateNames.CloseAccountCheckInformation,
        url: urlPaths.CloseAccountCheckInformation,
        settings: {},
        data: {
            showCloseAccountHeader: false
        },
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuard()
        ],
        wizard: {
            cancelState: stateNames.AccountDetails,
            nextState: stateNames.AccountDetails
        }
    }];

export const routes = [...states];
