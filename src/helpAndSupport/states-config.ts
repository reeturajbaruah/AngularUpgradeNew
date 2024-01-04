import { StateConfig } from 'common/interfaces';
import { States } from './states';
import { Routes } from './routes';
import { AuthResolve, CmsResolve, MaintenanceResolve } from 'common/resolvers';
import { MaintenanceFeature, userRoles } from 'constants/module';
import { CmsIds } from './constants';

export const frameState: StateConfig = {

    name: States.HelpAndSupportFrame,
    abstract: true,
    resolve: [
        MaintenanceResolve(MaintenanceFeature.Account),
        AuthResolve(userRoles.anonymous),
        CmsResolve('cmsContent', { ItemId: CmsIds.HelpAndSupport })
    ]
};

export const HelpAndSupportStatesConfig: StateConfig[] = [

    frameState,
    {
        name: States.ContactUs,
        url: Routes.ContactUs,
        resolve: [
            AuthResolve(userRoles.anonymous)
        ]
    },
    {
        name: States.TopFiveFaq,
        url: Routes.TopFiveFaq,
        resolve: [
            AuthResolve(userRoles.anonymous)
        ]
    },
    {
        name: States.Documents,
        url: Routes.Documents,
        resolve: [
            AuthResolve(userRoles.anonymous),
        ]
    },
    {
        name: States.StoreLocator,
        url: Routes.StoreLocator,
        resolve: [
            AuthResolve(userRoles.anonymous),
        ]
    }
];
