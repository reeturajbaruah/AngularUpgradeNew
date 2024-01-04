import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve, CountryResolver, MaintenanceResolve, StateGuard, UsStatesResolver } from 'common/resolvers';
import { MaintenanceFeature, userRoles, webStorageConst } from 'constants/module';
import { StateNames as Home } from 'home/constants';
import { CmsIds } from './constants';
import { Routes } from './routes';
import { States } from './states';
import { commonCmsIds } from 'cms/constants';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { stateNames as profileStateNames } from 'profile/constants';

export const stateGuard = StateGuard(webStorageConst.createAccount, new Home().Frame);
export const newAcctStateGuard = StateGuard(webStorageConst.createAccount, States.VehicleInfo);
export const dashboardtStateGuard = StateGuard(webStorageConst.createAccount, accountDashboardStates.Frame);
export const twoFactorAuthStateGuard = StateGuard(webStorageConst.createAccount, States.PhoneValidation);

export const RedirectRoute: StateConfig = {
    name: States.Future,
    url: Routes.Future,
    redirectTo: States.Login
};

export const LoginRoute: StateConfig = {
    name: States.Login,
    url: Routes.Login,
    resolve: [
        MaintenanceResolve(MaintenanceFeature.Account),
        MaintenanceResolve(MaintenanceFeature.CA),
        AuthResolve(userRoles.notAuthenticated, userRoles.incomplete),
        CmsResolve('personalInfoPage', { ItemId: CmsIds.PersonalInfoPage }),
        CmsResolve('pwCmsData', { ItemId: commonCmsIds.passwordValidation, mergeParams: true }),
        CmsResolve('cmsFrame', { ItemId: CmsIds.Frame }),
        UsStatesResolver('stateList'),
        CountryResolver('countryList'),
        CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal }),
    ],
    wizard: {
        //nextState: States.VehicleInfo,
        cancelState: new Home().Frame
    }
};

export const ValidateByPhoneRoute: StateConfig = {
    name: States.PhoneValidation,
    url: Routes.ValidateByPhone,
    resolve: [
        MaintenanceResolve(MaintenanceFeature.Account),
        AuthResolve(userRoles.incomplete),
        CmsResolve('cmsData', { ItemId: CmsIds.ValidateByPhone }),
        CmsResolve('cancelContent', { ItemId: CmsIds.TwoFactorAuthCancellation }),
    ],
    wizard: {
        nextState: States.VerifyCode,
        cancelState: new Home().Frame
    },
    params: {
        phoneNumber: null,
        acctId: null,
        validationSuccessState: null
    }
};

export const VerifyCodeRoute: StateConfig = {
    name: States.VerifyCode,
    url: Routes.VerifyCode,
    settings: {},
    resolve: [
        AuthResolve(userRoles.anonymous),
        MaintenanceResolve(MaintenanceFeature.Account),
        MaintenanceResolve(MaintenanceFeature.CA),
        CmsResolve('cmsData', { ItemId: CmsIds.VerifyCode }),
        twoFactorAuthStateGuard({
            denyRefresh: true,
            explicitlyAllowed: [States.PhoneValidation]
        })
    ],
    params: {
        phoneNumber: null,
        email: null,
        acctId: null,
        loginId: null,
        dbSessionId: null,
        channel: null,
        isMissingEmail: null,
        validationSuccessState: null
    },
    wizard: {
    }
};

export const StatesConfig: StateConfig[] = [
    {
        abstract: true,
        name: States.NewAccount,
        resolve: [
            CmsResolve('cmsFrame', { ItemId: CmsIds.Frame })
        ]
    },
    RedirectRoute,
    LoginRoute,
    ValidateByPhoneRoute,
    VerifyCodeRoute,
    {
        name: States.VehicleInfo,
        url: Routes.VehicleInfo,
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            MaintenanceResolve(MaintenanceFeature.CA),
            AuthResolve(userRoles.incomplete),

            UsStatesResolver('statesList'),
            CmsResolve('addVehicleCmsContent', { ItemId: CmsIds.AddTagVehicleInfo }),
            CmsResolve('cartCms', { ItemId: CmsIds.EzTagCart }),
            CmsResolve('addAdditionalTagCms', { ItemId: CmsIds.AddAdditionalEzTag }),
            CmsResolve('deleteModalCms', { ItemId: CmsIds.DeleteTagCart }),
            CmsResolve('editModalCms', { ItemId: CmsIds.EditTagCart }),
            CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal }),

        ],
        wizard: {
            prevState: accountDashboardStates.Frame,
            nextState: States.PaymentInfo,
            cancelState: new Home().Frame

        },
        params: {
            userResumedCreateAcctFlow: null
        }

    },

    {
        name: States.PaymentInfo,
        url: Routes.PaymentInfo,
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            MaintenanceResolve(MaintenanceFeature.CA),
            AuthResolve(userRoles.incomplete),
            UsStatesResolver('stateList'),
            CountryResolver('countryList'),
            CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal }),
            CmsResolve('tagInfoModalCms', { ItemId: CmsIds.TagInfoModal }),
            newAcctStateGuard({
                denyRefresh: true,
                allowed: [States.Review, States.DeliveryMethod, States.VehicleInfo],
            }),
        ],
        wizard: {
            nextState: States.DeliveryMethod,
            prevState: States.VehicleInfo,
            cancelState: new Home().Frame
        },
        params: {
            userResumedCreateAcctFlow: null
        }

    },
    {
        name: States.DeliveryMethod,
        url: Routes.DeliveryMethod,
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            MaintenanceResolve(MaintenanceFeature.CA),
            AuthResolve(userRoles.incomplete),
            CmsResolve('deliveryMethodInfoPage', { ItemId: CmsIds.DeliveryMethodInfoPage }),
            CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal }),
            UsStatesResolver('stateList'),
            CountryResolver('countryList'),

        ],
        wizard: {
            nextState: States.Review,
            prevState: States.PaymentInfo,
            cancelState: new Home().Frame
        },
        params: {
            userResumedCreateAcctFlow: null
        }

    },
    {
        name: States.Review,
        url: Routes.Review,
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            MaintenanceResolve(MaintenanceFeature.CA),
            AuthResolve(userRoles.incomplete),
            CmsResolve('pageCms', { ItemId: CmsIds.ReviewTagOrder }),
            CmsResolve('addAdditionalTagCms', { ItemId: CmsIds.AddAdditionalEzTag }),
            CmsResolve('deleteModalCms', { ItemId: CmsIds.DeleteTagCart }),
            CmsResolve('editModalCms', { ItemId: CmsIds.EditTagCart }),
            CmsResolve('replenishmentAmtModalCms', { ItemId: CmsIds.ReplenishmentAmtModal }),
            CmsResolve('tagInfoModalCms', { ItemId: CmsIds.TagInfoModal }),
            CmsResolve('cashPaymentSummaryModalCms', { ItemId: CmsIds.CashPaymentSummaryModalCms }),
            CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal }),
            CmsResolve('cmsSectionConfirmOrderSummary', { ItemId: CmsIds.ConfirmOrderSummarySection }),
            UsStatesResolver('stateList'),
            CountryResolver('countryList'),

            newAcctStateGuard({
                denyRefresh: true,
                allowed: [States.PaymentInfo, States.DeliveryMethod],
                explicitlyForbidden: [States.Receipt]
            }),
        ],
        wizard: {
            nextState: States.Receipt,
            prevState: States.DeliveryMethod,
            cancelState: new Home().Frame
        },
        params: {
            userResumedCreateAcctFlow: null
        }
    },
    {
        name: States.Receipt,
        url: Routes.Receipt,
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            MaintenanceResolve(MaintenanceFeature.CA),
            AuthResolve(userRoles.incomplete, userRoles.active),
            dashboardtStateGuard({
                allowed: [States.Review],
                denyRefresh: true,
                explicitlyForbidden: [
                    profileStateNames.AccountDetails,
                    profileStateNames.UpdateAuthorizedContacts,
                    profileStateNames.UpdateBillingInformation,
                    accountDashboardStates.Frame
                ]
            }),
            CmsResolve('receiptInfoPage', { ItemId: CmsIds.ReceiptInfoPage }),
            CmsResolve('deliveryMethodInfoPage', { ItemId: CmsIds.DeliveryMethodInfoPage }),


        ],
        wizard: {
            nextState: accountDashboardStates.Frame,
            isEndState: true
        },
        params: {
            totalAmt: 0
        }

    }
];

