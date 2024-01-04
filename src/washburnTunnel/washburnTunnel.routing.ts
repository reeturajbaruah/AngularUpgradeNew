import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve } from 'common/resolvers';
import { userRoles } from 'constants/module';
import { CmsIds, WashburnTunnelRoutes, WashburnTunnelStateNames } from './washburnTunnel.constants';


export const WashburnTunnelRoutesStateConfig: StateConfig[] = [
    {
        name: WashburnTunnelStateNames.WashburnTunnel,
        url: WashburnTunnelRoutes.WashburnTunnel,
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsPage', { ItemId: CmsIds.WashburnTunnelCMSPage, mergeParams: true })
        ]
    }
];
