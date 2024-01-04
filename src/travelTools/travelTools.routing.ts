import { StateConfig } from 'common/interfaces';
import { TravelToolsCmsIds, TravelToolsRoutes, TravelToolsStateNames } from './travelTools.constants';
import { AuthResolve, CmsResolve } from 'common/resolvers';
import { userRoles } from 'constants/module';

export const TravelToolsStateConfig: StateConfig[] = [
    {
        name: TravelToolsStateNames.TollRoadInformation,
        url: TravelToolsRoutes.TollRoadInformation,
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous)
        ]
    },
    {
        name: TravelToolsStateNames.LaneTypes,
        url: TravelToolsRoutes.LaneTypes,
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous)
        ]
    },
    {
        name: TravelToolsStateNames.TollRoadMap,
        url: TravelToolsRoutes.TollRoadMap,
        settings: {
            isHybrid: true
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('pageCms', { ItemId: TravelToolsCmsIds.TollRoadMapPageCms })
        ]
    },
    {
        name: TravelToolsStateNames.RoadsideAssistance,
        url: TravelToolsRoutes.RoadsideAssistance,
        settings: {
            isHybrid: true
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('pageCms', { ItemId: TravelToolsCmsIds.RoadsideAssistanceCms })
        ]
    },
    {
        name: TravelToolsStateNames.TollRates,
        url: TravelToolsRoutes.TollRates,
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsPage', { ItemId: TravelToolsCmsIds.TollRatesCms, mergeParams: true })
        ]
    }
];
