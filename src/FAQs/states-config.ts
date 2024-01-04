import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve, MaintenanceResolve } from 'common/resolvers';
import { MaintenanceFeature, userRoles } from 'constants/module';
import { FaqComponent } from './components';
import { CmsIds } from './constants';
import { Routes } from './routes';
import { States } from './states';


export const FaqStatesConfig: StateConfig[] = [

    {
        name: States.Faq,
        url: Routes.Faq,
        component: FaqComponent,
        resolve: [
            AuthResolve(userRoles.anonymous),
            MaintenanceResolve(MaintenanceFeature.Account),
            CmsResolve('cmsContent', { ItemId: CmsIds.Faqs })
        ],
        params: {}
    }

];

