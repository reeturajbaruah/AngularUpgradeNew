import { StateConfig } from 'common/interfaces';
import {
    AuthResolve,
    MaintenanceResolve,
    CmsResolve
} from 'common/resolvers';
import { stateNames, urlPaths, cmsIds } from './constants';
import { MaintenanceFeature, userRoles } from 'constants/module';
import { FrameComponent } from '../home/frame/frame.component';

export const routes: StateConfig[] = [
    {
        name: stateNames.KatyManagedLanes,
        url: urlPaths.KatyManagedLanes,
        settings: {
            isHybrid: true
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
        ]
    },
    {
        name: stateNames.AllElectronicTolling,
        url: urlPaths.AllElectronicTolling,
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('aetComplexCMS', { ItemId: cmsIds.AETRefresh }),
            CmsResolve('faqSectionOverview', { ItemId: cmsIds.FAQSectionOverview }),
            CmsResolve('faqSectionChanges', { ItemId: cmsIds.FAQSectionChanges }),
            CmsResolve('faqSectionBenefits', { ItemId: cmsIds.FAQSectionBenefits })
        ]
    },
    {
        name: stateNames.HardySHP,
        url: urlPaths.HardySHP,
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous)
        ]
    }
];
