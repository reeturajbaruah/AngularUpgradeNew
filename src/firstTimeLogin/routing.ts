import { StateConfig } from 'common/interfaces';
import {
    AuthResolve, CmsResolve, MaintenanceResolve, StateGuard,
} from 'common/resolvers';
import {
    MaintenanceFeature, userRoles,
    webStorageConst
} from 'constants/module';
import { cmsIds, stateNames, urlPaths } from './constants';
import { stateNames as HomeStateNames } from 'home/constants';
import { stateNames as LoginStateNames } from 'login/constants';
import { LoginResetOption } from '2FA/interfaces';
import { commonCmsIds } from '../cms/constants';

export const stateGuard = StateGuard(webStorageConst.firstTimeLogin, stateNames.FindAccount);

export const states: StateConfig[] = [
    {
        name: stateNames.Root,
        url: urlPaths.Root,
        abstract: true,
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsData', { ItemId: cmsIds.Root })
        ]
    },
    {
        name: stateNames.FindAccount,
        url: urlPaths.FindAccount,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsData', { ItemId: cmsIds.FindAccount })
        ],
        params: {
            resetOption: null
        },
        wizard: {
            nextState: (input: LoginResetOption) => {
                switch (input) {
                    case LoginResetOption.Email: return stateNames.VerifyCode;
                    case LoginResetOption.Phone: return stateNames.ValidateByPhone;
                    default: return null;
                }
            },  
            prevState: HomeStateNames.Frame,
            cancelState: HomeStateNames.Frame
        }
    },
    {
        name: stateNames.ValidateByPhone,
        url: urlPaths.ValidateByPhone,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsData', { ItemId: cmsIds.ValidateByPhone }),
            stateGuard({
                denyRefresh: true
            })
        ],
        params: {
            phoneNumber: null,
            acctId: null,
            loginId: null,
            dbSessionId: null
        },
        wizard: {
            nextState: stateNames.VerifyCode,
            prevState: stateNames.FindAccount,
            cancelState: HomeStateNames.Frame
        }
    },
    {
        name: stateNames.VerifyCode,
        url: urlPaths.VerifyCode,
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsData', { ItemId: cmsIds.VerifyCode }),
            stateGuard({
                denyRefresh: true,
                explicitlyAllowed: [stateNames.ValidateByPhone]
            })
        ],
        params: {
            phoneNumber: null,
            email: null,
            acctId: null,
            loginId: null,
            dbSessionId: null,
            channel: null
        },
        wizard: {
            nextState: stateNames.SetupOnlineAccess,
            prevState: stateNames.FindAccount,
            cancelState: HomeStateNames.Frame
        }
    },
    {
        name: stateNames.SetupOnlineAccess,
        url: urlPaths.SetupOnlineAccess,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsData', { ItemId: cmsIds.SetupOnlineAccess }),
            CmsResolve('pwCmsData', { ItemId: commonCmsIds.passwordValidation, mergeParams: true })
        ],
        params: {
            email: null,
            acctId: null,
            loginId: null,
            dbSessionId: null
        },
        wizard: {
            nextState: stateNames.SetupComplete,
            prevState: stateNames.VerifyCode,
            cancelState: HomeStateNames.Frame,
        }
    },
    {
        name: stateNames.SetupComplete,
        url: urlPaths.SetupComplete,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsData', { ItemId: cmsIds.SetupComplete })
        ],
        wizard: {
            nextState: LoginStateNames.Login,
            isEndState: true
        }
    }
];

export const routes = [...states];
