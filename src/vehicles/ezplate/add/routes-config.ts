import { StateConfig } from 'common/interfaces';
import { States as stateNames } from './states';
import { CmsIds } from './constants';
import {
    AuthResolve, CmsResolve, MaintenanceResolve, StateGuard,
    UsStatesResolver, CountryResolver
} from 'common/resolvers';
import {
    MaintenanceFeature, userRoles,
    webStorageConst
} from 'constants/module';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { Routes } from './routes';
import { States as SharedStates } from 'vehicles/shared';

export const stateGuardPlate = StateGuard(webStorageConst.vehiclesPlateCurrentStep, SharedStates.Root);


export const RoutesConfig: StateConfig[] = [

    {
        name: stateNames.AddEzPlate,
        abstract: true,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.active),
            UsStatesResolver('stateList'),
            CountryResolver('countryList'),
            CmsResolve('cmsAddPlateFrame', { ItemId: CmsIds.AddPlateFrame }),
            CmsResolve('cmsAddPlateVehicleInfo', { ItemId: CmsIds.AddPlateVehicleInfo })
        ]
    },
    {
        name: stateNames.PlateVehicleInformation,
        url: Routes.PlateVehicleInformation,
        settings: {},
        resolve: [
            UsStatesResolver('statesList'),
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.active),
            stateGuardPlate({
                denyRefresh: true
            })
        ],
        wizard: {
            nextState: stateNames.PlateReviewOrder,
            prevState: SharedStates.Root,
            cancelState: SharedStates.Root
        }
    },
    {
        name: stateNames.PlateReviewOrder,
        url: Routes.PlateReviewOrder,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.active),
            stateGuardPlate({
                denyRefresh: true,
                allowed: [stateNames.PlateVehicleInformation]
            }),
            CmsResolve('pageCms', { ItemId: CmsIds.ReviewPlateOrder }),
            CmsResolve('editModalCms', { ItemId: CmsIds.EditTagCart }),
            CmsResolve('replenishmentAmtModalCms', { ItemId: CmsIds.ReplenishmentAmtModal }),
            CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal }),
            UsStatesResolver('stateList')
        ],
        wizard: {
            nextState: stateNames.PlateReceipt,
            prevState: stateNames.PlateVehicleInformation,
            cancelState: SharedStates.Root
        }
    },
    {
        name: stateNames.PlateReceipt,
        url: Routes.PlateReceipt,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { mergeParams: true, ItemId: CmsIds.AddPlateReceipt }),
            stateGuardPlate({
                denyRefresh: true,
                allowed: [stateNames.PlateReviewOrder],
                explicitlyForbidden: [accountDashboardStates.Frame, SharedStates.Root]
            })
        ],
        wizard: {
            nextState: accountDashboardStates.Frame,
            isEndState: true
        }
    },
];
