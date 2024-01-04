import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve } from 'common/resolvers';
import { cmsIds } from './constant';
import { userRoles } from 'constants/module';

export const ShipChannelBridgeRoutesStateConfig: StateConfig[] = [
    {
        name: 'ShipChannelBridge',
        url: '/ShipChannelBridge',
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('scbPageContent', { ItemId: cmsIds.SCBPageCMS, mergeParams: true })
        ]
    },
];