import { StateConfig } from 'common/interfaces';
import { AuthResolve, MaintenanceResolve, CmsResolve } from 'common/resolvers';
import { stateNames, urlPaths, cmsIds } from './constants';
import { MaintenanceFeature, userRoles } from 'constants/module';
import { commonCmsIds } from '../cms/constants';
import { mfaStateNames } from 'MFA/constant';


export const routes: StateConfig[] = [
    {
        name: stateNames.Login,
        url: urlPaths.Login,
        settings: {},
        resolve: [
            AuthResolve(userRoles.notAuthenticated, userRoles.notAuthenticatedMf, userRoles.missingRequiredInformation),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: cmsIds.Login })
        ],
        wizard: {
            //This is only for teh wizard/state handling in KIOSK
            isEndState: true
        }
    },
    {
        name: stateNames.AddMissingInformation,
        url: urlPaths.AddMissingInformation,
        settings: {},
        resolve: [
            AuthResolve(userRoles.missingRequiredInformation),
            CmsResolve('cmsContent', { ItemId: cmsIds.MissingInformation, mergeParams: true }),
            CmsResolve('cmsContentBlockUserNavModal', { ItemId: cmsIds.BlockUserNavigationModal, mergeParams: true }),
            CmsResolve('pwCmsData', { ItemId: commonCmsIds.passwordValidation, mergeParams: true })
        ],
        wizard: {
            //This is only for teh wizard/state handling in KIOSK
            nextState: stateNames.Frame,
            isEndState: true
        }
    },
    {
        name: stateNames.ClaimSession,
        url: urlPaths.ClaimSession,
        settings: {},
        resolve: [
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: cmsIds.ClaimSession, mergeParams: true }),
            CmsResolve('cmsClaimSessionExpirationModal', { ItemId: cmsIds.ClaimSessionExpirationModal, mergeParams: true })
        ]
    }
];
