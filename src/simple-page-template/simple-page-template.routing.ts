import { StateConfig } from 'common/interfaces';
import { AuthResolve } from 'common/resolvers';
import { userRoles } from 'constants/module';

export const SimplePagetemplateRoutesStateConfig: StateConfig[] = [
    {
        name: 'SimplePageTemplate',
        url: '/SimplePageTemplate',
        params: {
            CmsId: null
        },
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous)
        ]
    },
];
