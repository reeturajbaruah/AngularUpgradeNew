import { StateConfig } from 'common/interfaces';
import { AuthResolve } from 'common/resolvers';
import { MobileAppRedirectRoutes, MobileAppRedirectStateNames } from './mobileAppRedirect.constants';
import { userRoles } from 'constants/module';

export const mobileAppRedirectStatesConfig: StateConfig[] = [
    {
        name: MobileAppRedirectStateNames.Root,
        url: MobileAppRedirectRoutes.Root,
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous)
        ]
    },
    {
        name: MobileAppRedirectStateNames.EzTagMobileRedirect,
        url: MobileAppRedirectRoutes.EzTagMobileRedirect,
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous)
        ]
    }
];
