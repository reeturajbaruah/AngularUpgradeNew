import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve, MaintenanceResolve, StateGuard } from 'common/resolvers';
import { ForgotUsernameCmsIds, ForgotUsernameRoutes, ForgotUsernameStateNames } from './forgotUsername.constants';
import { MaintenanceFeature, userRoles, webStorageConst } from 'constants/module';
import { stateNames as loginStateNames } from 'login/constants';
import { stateNames as forgotPasswordStateNames } from 'forgotPassword/constants';

export const stateGuard = StateGuard(webStorageConst.forgotUsername, ForgotUsernameStateNames.InputEmail);

export const forgotUsernameStatesConfig: StateConfig[] = [
    {
        name: ForgotUsernameStateNames.Root,
        url: ForgotUsernameRoutes.Root,
        abstract: true,
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsData', { ItemId: ForgotUsernameCmsIds.Root }),
            MaintenanceResolve(MaintenanceFeature.Account)
        ]
    },
    {
        name: ForgotUsernameStateNames.InputEmail,
        url: ForgotUsernameRoutes.InputEmail,
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsData', { ItemId: ForgotUsernameCmsIds.InputEmail }),
            MaintenanceResolve(MaintenanceFeature.Account)
        ],
        wizard: {
            nextState: ForgotUsernameStateNames.VerifyCode,
            cancelState: loginStateNames.Login
        }
    },
    {
        name: ForgotUsernameStateNames.VerifyCode,
        url: ForgotUsernameRoutes.VerifyCode,
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsData', { ItemId: ForgotUsernameCmsIds.VerifyCode }),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuard({
                denyRefresh: true,
                explicitlyAllowed: [ForgotUsernameStateNames.InputEmail],
                explicitlyForbidden: [ForgotUsernameStateNames.IdentityConfirmed]
            })
        ],
        params: {
            phoneNumber: null,
            email: null,
            acctId: null,
            loginId: null,
            dbSessionId: null,
            channel: null,
            isMissingEmail: null
        },
        wizard: {
            nextState: ForgotUsernameStateNames.IdentityConfirmed,
            prevState: ForgotUsernameStateNames.InputEmail,
            cancelState: loginStateNames.Login
        }
    },
    {
        name: ForgotUsernameStateNames.IdentityConfirmed,
        url: ForgotUsernameRoutes.IdentityConfirmed,
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsData', { ItemId: ForgotUsernameCmsIds.IdentityConfirmed }),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuard({
                denyRefresh: true,
                explicitlyAllowed: [ForgotUsernameStateNames.VerifyCode],
                explicitlyForbidden: [loginStateNames.Login, forgotPasswordStateNames.FindAccount]
            })
        ],
        params: {
            phoneNumber: null,
            email: null,
            acctId: null,
            loginId: null,
            dbSessionId: null,
            channel: null,
            isMissingEmail: null
        },
        wizard: {
            nextState: loginStateNames.Login,
            cancelState: ForgotUsernameRoutes.InputEmail,
        }
    }
];
