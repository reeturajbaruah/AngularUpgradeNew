import { StateConfig } from 'common/interfaces';
import { CmsResolve } from 'common/resolvers';
import { stateNames, cmsIds, urlPaths } from './constants';

export const routes: StateConfig[] = [
    {
        name: stateNames.TranslationDisclaimer,
        url: urlPaths.TranslationDisclaimer,
        settings: {},
        resolve: [
            CmsResolve('cmsData', {
                ItemId: cmsIds.TranslationDisclaimer,
                mergeParams: true
            })
        ],
        data: {}
    }
];
