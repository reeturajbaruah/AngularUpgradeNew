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
import { States as SharedStates } from '../shared';

export const stateGuardTag = StateGuard(webStorageConst.vehiclesTagCurrentStep, SharedStates.Root);


export const RoutesConfig: StateConfig[] = [
    {
        name: stateNames.Mvu,
        abstract: true,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsMvuFrame', { ItemId: CmsIds.MvuFrame }),
            UsStatesResolver('stateList'),
            CountryResolver('countryList')
        ],
    },
    {
        name: stateNames.MvuUpload,
        url: Routes.MvuUpload,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('pageCms', { ItemId: CmsIds.MvuUploadPage }),
            CmsResolve('downInstructCms', { ItemId: CmsIds.MvuUploadPageDownloadInstructions }),
            CmsResolve('downTemplCms', { ItemId: CmsIds.MvuUploadPageDownloadTemplate }),
            CmsResolve('uploadVehicleCsvFileCms', { ItemId: CmsIds.MvuUploadPageUploadVehicleCSVFile })
        ],
        wizard: {
            nextState: stateNames.MvuDeliveryMethod,
            cancelState: SharedStates.Root
        }
    },
    {
        name: stateNames.MvuDeliveryMethod,
        url: Routes.MvuDeliveryMethod,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuardTag({
                explicitlyForbidden: [stateNames.MvuReceipt]
            }),
            CmsResolve('cmsMvuDeliveryMethod', { ItemId: CmsIds.MvuDeliveryMethod }),
            CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal })
        ],
        wizard: {
            nextState: stateNames.MvuReviewOrder,
            prevState: stateNames.MvuUpload,
            cancelState: SharedStates.Root
        }
    },
    {
        name: stateNames.MvuReviewOrder,
        url: Routes.MvuReviewOrder,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuardTag({
                explicitlyForbidden: [stateNames.MvuReceipt]
            }),
            CmsResolve('pageCms', { ItemId: CmsIds.MvuReviewOrder }),
            CmsResolve('replenishmentAmtModalCms', { ItemId: CmsIds.ReplenishmentAmtModal }),
            CmsResolve('tagInfoModalCms', { ItemId: CmsIds.TagInfoModal }),
            CmsResolve('cancellationModal', { ItemId: CmsIds.CancellationModal }),
            UsStatesResolver('stateList')
        ],
        wizard: {
            nextState: stateNames.MvuReceipt,
            prevState: stateNames.MvuDeliveryMethod,
            cancelState: SharedStates.Root
        }
    },
    {
        name: stateNames.MvuReceipt,
        url: Routes.MvuReceipt,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active),
            CmsResolve('pageCms', { mergeParams: true, ItemId: CmsIds.MvuReceipt }),
            MaintenanceResolve(MaintenanceFeature.Account),
            stateGuardTag({
                allowed: [stateNames.MvuReviewOrder],
                explicitlyForbidden: [accountDashboardStates.Frame, SharedStates.Root]
            })
        ],
        wizard: {
            nextState: SharedStates.Root,
            isEndState: true
        }
    },
];
