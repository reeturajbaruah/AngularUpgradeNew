import { States as stateNames } from './states';
import { Routes } from './routes';

export const LazyLoadRoute = {

    name: stateNames.MvuFuture,
    url: Routes.Mvu,
    loadChildren: () => import('./module').then(mod => mod.MvuModule)
};
