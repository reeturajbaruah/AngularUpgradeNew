import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve } from 'common/resolvers';
import { stateNames, urlPaths } from './constants';
import { userRoles } from 'constants/module';

import { FrameComponent } from './frame/frame.component';
import {
    cmsIds
} from './constants';
import { commonCmsIds } from 'cms/constants';

import { WhatsNewComponent } from './whatsNew/whatsNew.component';

export const routes: StateConfig[] = [
    {
        name: stateNames.Frame,
        url: urlPaths.Frame,
        component: FrameComponent,
        settings: {
            navlevel: 0,
            nav: 1,
            content: `<img src='../Content/icons/menu/hm_home.png' alt='Click to go to home page'>   Home`
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('homePageContent', { ItemId: cmsIds.HomePageCMS, mergeParams: true }),
            CmsResolve('paymentPlansModal', { ItemId: cmsIds.PaymentPlanModal, mergeParams: true }),
            CmsResolve('violationLoginModal', { ItemId: cmsIds.ViolationLoginModal, mergeParams: true })
        ]
    },
    {
        name: stateNames.WhatsNew,
        url: urlPaths.WhatsNew,
        component: WhatsNewComponent,
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('whatsNewPageCmsContent', { ItemId: cmsIds.WhatsNewPageCms, mergeParams: true })
        ]
    }
];
