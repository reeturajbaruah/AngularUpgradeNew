import { StateConfig, WizardStates } from 'common/interfaces';
import {
    AuthResolve, CmsResolve, MaintenanceResolve, StateGuard
} from 'common/resolvers';
import {
    MaintenanceFeature, userRoles,
    webStorageConst
} from 'constants/module';
import { cmsIds, stateNames, urlPaths } from './constants';
import { stateNames as HomeStateNames } from 'home/constants';
import { LoginResetOption } from '2FA/interfaces';
import { commonCmsIds } from '../cms/constants';
import { stateNames as loginStateNames } from 'login/constants';

export const stateGuard = StateGuard(webStorageConst.forgotPassword, stateNames.FindAccount);

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
            CmsResolve('cmsData', { ItemId: cmsIds.FindAccount }),
            stateGuard({
                explicitlyAllowed: [stateNames.VerifyCode]
            })
        ],
        params: {
            resetOption: null
        },
        wizard: {
            nextState: (input: LoginResetOption) => {
                switch(input) {
                    case LoginResetOption.Email: return stateNames.VerifyCode;
                    case LoginResetOption.Phone: return stateNames.ValidateByPhone;
                    default: return null;
                }
            },        
            prevState : () => HomeStateNames.Frame,
            cancelState : () => HomeStateNames.Frame
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
                denyRefresh: true,
                explicitlyAllowed: [stateNames.FindAccount],
                explicitlyForbidden: [stateNames.VerifyCode]
            })
        ],
        params: {
            phoneNumber: null,
            acctId: null,
            loginId: null,
            dbSessionId: null,
            isMissingEmail: null
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
            channel: null,
            isMissingEmail: null
        },
        wizard: {
            nextState: stateNames.ResetPassword,
            prevState: stateNames.FindAccount,
            cancelState: HomeStateNames.Frame
        }
    },
    {
        name: stateNames.ResetPassword,
        url: urlPaths.ResetPassword,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsData', { ItemId: cmsIds.ResetPassword }),
            CmsResolve('pwCmsData', { ItemId: commonCmsIds.passwordValidation, mergeParams: true }),
            stateGuard({
                denyRefresh: true
            })
        ],
        params: {
            email: null,
            acctId: null,
            loginId: null,
            dbSessionId: null,
            isMissingEmail: null
        },
        wizard: {
            prevState: stateNames.VerifyCode,
            cancelState: HomeStateNames.Frame,
            nextState: loginStateNames.Login,
            isEndState: true
        }
    }
];

export const routes = [...states];
