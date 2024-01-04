import { StateConfig } from 'common/interfaces';
import {
    AuthResolve, CmsResolve, MaintenanceResolve, StateGuard,
    UsStatesResolver, CountryResolver
} from 'common/resolvers';
import {
    MaintenanceFeature, userRoles,
    webStorageConst
} from 'constants/module';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { States as stateNames } from './states';
import { CmsIds } from './constants';
import { Routes } from './routes';
import { States as SharedStates } from 'vehicles/shared';

export const stateGuardTag = StateGuard(webStorageConst.vehiclesTagCurrentStep, SharedStates.Root);

export const RoutesConfig: StateConfig[] = [
    {
        name: stateNames.AddTag,
        abstract: true,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.active),
            UsStatesResolver('stateList'),
            CountryResolver('countryList'),
            CmsResolve('cmsAddTagFrame', { ItemId: CmsIds.AddTagFrame }),
            CmsResolve('cmsAddTagVehicleInfo', { ItemId: CmsIds.AddTagVehicleInfo }),
            CmsResolve('cmsAddTagDeliveryMethod', { ItemId: CmsIds.AddTagDeliveryMethod })
        ]
    },
    {
        name: stateNames.TagVehicleInformation,
        url: Routes.TagVehicleInformation,
        settings: {},
        resolve: [
            UsStatesResolver('statesList'),
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.active),
            stateGuardTag({
                denyRefresh: true
            })
        ],
        wizard: {
            nextState: stateNames.TagCart,
            prevState: SharedStates.Root,
            cancelState: SharedStates.Root
        }
    },
    {
        name: stateNames.TagCart,
        url: Routes.TagCart,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.active),
            stateGuardTag({
                denyRefresh: true
            }),
            CmsResolve('pageCms', { ItemId: CmsIds.EzTagCart }),
            CmsResolve('addAdditionalTagCms', { ItemId: CmsIds.AddAdditionalEzTag }),
            CmsResolve('deleteModalCms', { ItemId: CmsIds.DeleteTagCart }),
            CmsResolve('editModalCms', { ItemId: CmsIds.EditTagCart }),
            CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal }),
            UsStatesResolver('stateList')
        ],
        wizard: {
            nextState: stateNames.TagDeliveryMethod,
            prevState: stateNames.TagVehicleInformation,
            cancelState: SharedStates.Root
        }
    },
    {
        name: stateNames.TagDeliveryMethod,
        url: Routes.TagDeliveryMethod,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.active),
            CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal }),
            stateGuardTag({
                denyRefresh: true
            })
        ],
        wizard: {
            nextState: stateNames.TagReviewOrder,
            prevState: stateNames.TagCart,
            cancelState: SharedStates.Root
        }
    },
    {
        name: stateNames.TagReviewOrder,
        url: Routes.TagReviewOrder,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.active),
            stateGuardTag({
                denyRefresh: true,
                explicitlyForbidden: [stateNames.TagReceipt]
            }),
            CmsResolve('pageCms', { ItemId: CmsIds.ReviewTagOrder }),
            CmsResolve('addAdditionalTagCms', { ItemId: CmsIds.AddAdditionalEzTag }),
            CmsResolve('deleteModalCms', { ItemId: CmsIds.DeleteTagCart }),
            CmsResolve('editModalCms', { ItemId: CmsIds.EditTagCart }),
            CmsResolve('replenishmentAmtModalCms', { ItemId: CmsIds.ReplenishmentAmtModal }),
            CmsResolve('tagInfoModalCms', { ItemId: CmsIds.TagInfoModal }),
            CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal }),
            UsStatesResolver('stateList')
        ],
        wizard: {
            nextState: stateNames.TagReceipt,
            prevState: stateNames.TagDeliveryMethod,
            cancelState: SharedStates.Root
        }
    },
    {
        name: stateNames.TagReceipt,
        url: Routes.TagReceipt,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            CmsResolve('cmsContent', { mergeParams: true, ItemId: CmsIds.AddTagReceipt }),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuardTag({
                denyRefresh: true,
                allowed: [stateNames.TagReviewOrder],
                explicitlyForbidden: [accountDashboardStates.Frame, SharedStates.Root]
            })
        ],
        wizard: {
            nextState: accountDashboardStates.Frame,
            isEndState: true
        }
    }
];
