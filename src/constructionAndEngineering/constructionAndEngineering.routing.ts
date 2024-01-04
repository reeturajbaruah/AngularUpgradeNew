import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve } from 'common/resolvers';
import { userRoles } from 'constants/module';
import { CERoutes, CEStateNames, CeCmsIds } from './constructionAndEngineering.constants';
import { stateNames as homeStateNames } from '../home/constants';

export const ConstructionAndEngineeringRoutesStateConfig: StateConfig[] = [
    {
        name: CEStateNames.MajorProjects,
        url: CERoutes.MajorProjects,
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('pageCms', { ItemId: CeCmsIds.CEPageCMS, mergeParams: true })
        ]
    },
    {
        name: 'Contracts',
        url: '/Contracts',
        redirectTo: CEStateNames.MajorProjects
    },
    {
        name: 'ProfessionalServiceRegistry',
        url: '/ProfessionalServiceRegistry',
        redirectTo: homeStateNames.Frame
    }
];