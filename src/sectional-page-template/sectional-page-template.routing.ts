import { StateConfig } from 'common/interfaces';
import { AuthResolve } from 'common/resolvers';
import { userRoles } from 'constants/module';

export const SectionalPagetemplateRoutesStateConfig: StateConfig[] = [
    {
        name: 'SectionalPageTemplate',
        url: '/SectionalPageTemplate',
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
