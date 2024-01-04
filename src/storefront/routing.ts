import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve } from 'common/resolvers';
import { stateNames, urlPaths, cmsIds } from './constants';
import { userRoles } from 'constants/module';
import { StartPageComponent } from './startPage/startPage.component';
import { SelectionComponent } from './selection/selection.component';
import { SurveyComponent } from './survey/survey.component';

export const routes: StateConfig[] = [
    {
        name: stateNames.Home,
        url: urlPaths.Home,
        component: StartPageComponent,
        settings: {},
        data: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsContent', { ItemId: cmsIds.LandingPage }),
            CmsResolve('cmsTranslationContent', { ItemId: cmsIds.Translation })
        ],
        wizard: {
            isEndState: true
        }

    },
    {
        name: stateNames.Selection,
        url: urlPaths.Selection,
        component: SelectionComponent,
        settings: {},
        data: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsContent', { ItemId: cmsIds.TaskSelectionPageId }),
            CmsResolve('checkboxNormal', { ItemId: cmsIds.DefaultIconId }),
            CmsResolve('checkboxFocus', { ItemId: cmsIds.HoverIconId }),
            CmsResolve('checkboxSelected', { ItemId: cmsIds.SelectedIconId }),
        ],
        wizard: {
            isEndState: true
        }
    },
    {
        name: stateNames.Survey,
        url: urlPaths.Survey,
        component: SurveyComponent,
        settings: {},
        data: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('cmsContent', { ItemId: cmsIds.SurveyId })
        ],
        wizard: {
            isEndState: true
        }
    }
];
