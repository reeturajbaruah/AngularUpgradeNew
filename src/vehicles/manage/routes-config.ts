import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve, MaintenanceResolve, UsStatesResolver } from 'common/resolvers';
import { Constants, GetSharedRouteConfig } from '../shared';
import { CmsIds } from './constants';
import {
    MaintenanceFeature, userRoles,
    webStorageConst
} from 'constants/module';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';

export const RoutesConfig: StateConfig[] = [

    {
        ...GetSharedRouteConfig(Constants.root),
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('vehicleCmsContent', { ItemId: CmsIds.Root, mergeParams: true }),
            CmsResolve('cmsAddTagVehicleInfo', { ItemId: CmsIds.AddTagVehicleInfo }),
            CmsResolve('cmsAddPlateVehicleInfo', { ItemId: CmsIds.AddPlateVehicleInfo }),
            UsStatesResolver('stateList')
        ], wizard: {
            //This is only for the wizard/state handling in KIOSK
            nextState: accountDashboardStates.Frame,
            isEndState: true
        }
    },    
];
//RoutesConfig.push(FutureLazyLoadRoutes)
