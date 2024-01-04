import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve, StateGuard } from 'common/resolvers';
import { userRoles, webStorageConst } from 'constants/module';
import { cmsIds, mfaRoutes, mfaStateNames } from './constant';
import { stateNames as loginStateNames } from 'login/constants';

export const stateGuard = StateGuard(webStorageConst.mfaLogin, loginStateNames.Login);


export const MultiFactorAuthenticationRoutesStateConfig: StateConfig[] = [
    {
        name: mfaStateNames.MultiFactorAuthentication,
        url: mfaRoutes.MultiFactorAuthentication,
        resolve: [
            AuthResolve(userRoles.notAuthenticatedMf, userRoles.missingRequiredInformation),
            CmsResolve('mfaPageContent', { ItemId: cmsIds.MFAPageCMS }),
            stateGuard({ denyRefresh: true, allowed: [loginStateNames.Login, mfaStateNames.VerifyCode] })
        ],
        params: {
            loginApiResponse: null
        },
    },
    {
        name: mfaStateNames.VerifyCode,
        url: mfaRoutes.VerifyCode,
        resolve: [
            AuthResolve(userRoles.notAuthenticatedMf, userRoles.missingRequiredInformation),
            CmsResolve('cmsData', { ItemId: cmsIds.VerifyCode }),
            stateGuard({ denyRefresh: true, allowed: [mfaStateNames.MultiFactorAuthentication] })
        ],
        params: {
            phoneNumber: null,
            email: null,
            channel: null,
            acctId: null,
            loginApiResponse: null
        },
    },
    {
        name: mfaStateNames.SecurityQuestion,
        url: mfaRoutes.SecurityQuestion,
        resolve: [
            AuthResolve(userRoles.notAuthenticatedMf, userRoles.missingRequiredInformation),
            CmsResolve('cmsData', { ItemId: cmsIds.SecurityQuestionCMS }),
            stateGuard({ denyRefresh: true, allowed: [mfaStateNames.MultiFactorAuthentication] })
        ],
        params: {
            securityQuestionID: null,
            loginApiResponse: null
        }
    },
];
