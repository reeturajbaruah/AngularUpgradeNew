import { States as stateNames } from './states';
import { Routes } from './routes';

export const LazyLoadRoute =
{
    name: stateNames.AddTagFuture,
    url: Routes.AddTag,
    loadChildren: () => import('./module').then(mod => mod.AddTagModule)
};

