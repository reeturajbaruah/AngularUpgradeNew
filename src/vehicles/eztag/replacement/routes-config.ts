import { StateConfig } from 'common/interfaces';
import { Routes } from './routes';
import { States } from './states';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import {
    MaintenanceFeature, userRoles, webStorageConst
} from 'constants/module';
import { AuthResolve, CmsResolve, CountryResolver, MaintenanceResolve, StateGuard, UsStatesResolver } from 'common/resolvers';
import { States as SharedStates } from '../../shared/index';
import { CmsIds } from './constants';

export const stateGuardTagReplacement = StateGuard(webStorageConst.vehiclesTagReplacementCurrentStep, SharedStates.Root);

export const RoutesConfig: StateConfig[] =
    [
        {
            name: States.Replacement.toString(),
            abstract: true,
            settings: {},
            resolve: [
                MaintenanceResolve(MaintenanceFeature.Account),
                AuthResolve(userRoles.active),
            ],
            wizard: {}
        },
        {
            name: States.ReplacementDeliveryMethod.toString(),
            url: Routes.ReplacementDeliveryMethod,
            settings: {},
            resolve: [
                MaintenanceResolve(MaintenanceFeature.Account),
                AuthResolve(userRoles.active),
                UsStatesResolver('stateList'),
                CountryResolver('countryList'),
                CmsResolve('cancelContent', { ItemId: CmsIds.Cancellation }),
                CmsResolve('cmsContent', { mergeParams: true, ItemId: CmsIds.DeliveryMethod })

                // stateGuardTagReplacement(),
            ],
            wizard: {
                nextState: States.ReplacementReviewOrder,
                cancelState: SharedStates.Root

            },
            params: {
                vehicle: null
            }
        },
        {
            name: States.ReplacementReviewOrder.toString(),
            url: Routes.ReplacementReviewOrder,
            settings: {},
            resolve: [
                MaintenanceResolve(MaintenanceFeature.Account),
                AuthResolve(userRoles.active),
                UsStatesResolver('stateList'),
                stateGuardTagReplacement({
                    denyRefresh: true,
                    explicitlyForbidden: [States.ReplacementReceipt]
                }),
                CmsResolve('pageCms', { ItemId: CmsIds.ReviewTagOrder }),
                CmsResolve('replenishmentAmtModalCms', { ItemId: CmsIds.ReplenishmentAmtModal }),
                CmsResolve('tagInfoModalCms', { ItemId: CmsIds.TagInfoModal }),
                CmsResolve('cancelContent', { ItemId: CmsIds.Cancellation }),
            ],
            wizard: {
                nextState: States.ReplacementReceipt,
                prevState: States.ReplacementDeliveryMethod,
                cancelState: SharedStates.Root
            }
        },
        {
            name: States.ReplacementReceipt.toString(),
            url: Routes.ReplacementReceipt,
            settings: {},
            resolve: [
                MaintenanceResolve(MaintenanceFeature.Account),
                AuthResolve(userRoles.active),
                CmsResolve('cmsContent', { mergeParams: true, ItemId: CmsIds.Receipt }),
                stateGuardTagReplacement({
                    denyRefresh: true,
                    allowed: [States.ReplacementReviewOrder],
                    explicitlyForbidden: [accountDashboardStates.Frame, SharedStates.Root]
                })
            ],
            wizard: {
                nextState: accountDashboardStates.Frame,
                isEndState: true
            }
        }

    ];
