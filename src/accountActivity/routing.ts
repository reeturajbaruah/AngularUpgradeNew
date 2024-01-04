import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve, MaintenanceResolve } from 'common/resolvers';
import {
    MaintenanceFeature, userRoles
} from 'constants/module';
import { cmsIds, stateNames, urlPaths } from './constants';


export const states: StateConfig[] = [
    {
        name: stateNames.accountActivityFrame,
        abstract: true,
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            AuthResolve(userRoles.active, userRoles.suspended, userRoles.pendingClosure),
            CmsResolve('cmsContent', { ItemId: cmsIds.Root })
        ]
    },
    {
        name: stateNames.accountActivityTransactions,
        url: urlPaths.accountActivity,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active, userRoles.suspended, userRoles.pendingClosure),
            CmsResolve('cmsContent', { ItemId: cmsIds.Transactions })
        ],
        params: {
            searchCriteria: null
        }
    }, {
        name: stateNames.accountActivityYearly,
        url: urlPaths.accountActivityYearly,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active, userRoles.suspended, userRoles.pendingClosure),
            CmsResolve('cmsContent', { ItemId: cmsIds.YearlySummary })
        ]
    }, {
        name: stateNames.accountActivityStatements,
        url: urlPaths.accountActivityStatements,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active, userRoles.suspended, userRoles.pendingClosure),
            CmsResolve('cmsContent', { ItemId: cmsIds.MonthlyStatements }),
        ]

    }, {
        name: stateNames.accountActivityInvoices,
        url: urlPaths.accountActivityInvoices,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active, userRoles.suspended, userRoles.pendingClosure),
            CmsResolve('cmsContent', { ItemId: cmsIds.MonthlyInvoices })
        ]
    }, {
        name: stateNames.accountActivityReceipts,
        url: urlPaths.accountActivityReceipts,
        settings: {},
        resolve: [
            AuthResolve(userRoles.active, userRoles.suspended, userRoles.pendingClosure),
            CmsResolve('cmsContent', { ItemId: cmsIds.Receipts })
        ]
    }
];


export const routes = [...states];
