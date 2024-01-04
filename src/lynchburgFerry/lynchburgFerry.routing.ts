import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve } from 'common/resolvers';
import { userRoles } from 'constants/module';
import { CmsIds, LynchburgFerryRoutes, LynchburgFerryStateNames } from './lynchburgFerry.constants';


export const LynchburgFerryRoutesStateConfig: StateConfig[] = [
    {
        name: LynchburgFerryStateNames.LynchburgFerry,
        url: LynchburgFerryRoutes.LynchburgFerry,
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsPage', { ItemId: CmsIds.LynchburgFerryCMSPage })
        ]
    }
];
