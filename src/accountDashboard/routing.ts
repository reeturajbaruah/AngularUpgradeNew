import { StateConfig } from 'common/interfaces';
import {
    AuthResolve,
    MaintenanceResolve,
    SuspendedRedirectResolve,
    CmsResolve
} from 'common/resolvers';
import { commonCmsIds } from 'cms/constants';
import { stateNames, urlPaths, cmsIds } from './constants';
import {
    MaintenanceFeature,
    userRoles,
    quickLinkNav,
    stateNames as coreStateNames,
    routes as coreUrlPaths
} from 'constants/module';

import { FrameComponent } from './frame/frame.component';

export const routes: StateConfig[] = [
    {
        name: stateNames.Frame,
        url: urlPaths.Frame,
        component: FrameComponent,
        settings: {
            parent: coreStateNames.accountSummaryCollapser,
            navlevel: 2,
            nav: 1,
            content: 'Account Overview',
            currentBalance: true //used to place current balance next to Accoun Summary in hamburger menu
        },
        resolve: [
            AuthResolve(userRoles.active, userRoles.pendingClosure, userRoles.suspended, userRoles.pendingFunds),
            MaintenanceResolve(MaintenanceFeature.Account),
            SuspendedRedirectResolve,
            CmsResolve('cmsBaseContent', { ItemId: cmsIds.Root }),
            CmsResolve('tollUsageHistoryNoData', { ItemId: cmsIds.TollUsageHistoryNoData }),
            CmsResolve('currentBalanceCMS', { ItemId: cmsIds.CurrentBalanceCMS }),
            CmsResolve('vehiclesCMS', { ItemId: cmsIds.VehiclesNoData }),
            CmsResolve('billingCMS', { ItemId: cmsIds.BillingNoData }),
            CmsResolve('transactionsCMS', { ItemId: cmsIds.RecentTransactionsNoData }),
            CmsResolve('paymentMethodImages', { mergeParams: false, ItemId: coreUrlPaths.paymentMethodDisplayIconsRefresh }),
            CmsResolve('autoReplenishIndicatorCMS', { ItemId: cmsIds.AutoReplenishIndicator }),
            CmsResolve('accountPendingFundsContent', { ItemId: cmsIds.AccountPendingFunds }),
            CmsResolve('accountPendingFundsNorthAreaContent', { ItemId: cmsIds.NorthArea }),
        ],
        quickLink: {
            nav: quickLinkNav.accountSummary,
            content: 'View EZ TAG Account Summary'
        }
    }
];


