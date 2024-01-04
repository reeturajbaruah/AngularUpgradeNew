import { StateConfig } from 'common/interfaces';
import { States } from './states';
import { Routes } from './routes';

export const LazyLoadRoute: StateConfig = {

    name: States.Future,
    url: Routes.Future,
    loadChildren: async () => {
        const { HelpAndSupportModule } = await import('./module');
        return HelpAndSupportModule;
    }
};

