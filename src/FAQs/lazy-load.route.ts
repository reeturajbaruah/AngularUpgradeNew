import { StateConfig } from 'common/interfaces';
import { Routes } from './routes';
import { States } from './states';

export const FaqLazyLoadRoute: StateConfig = {
    name: States.Future,
    url: Routes.Future,
    loadChildren: async () => {
        const { FaqModule } = await import('./module');
        return FaqModule; 
    }

};
