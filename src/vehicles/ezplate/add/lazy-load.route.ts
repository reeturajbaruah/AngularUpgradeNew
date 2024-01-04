
import { States } from './states';
import { Routes } from './routes';

export const LazyLoadRoute =
{
    name: States.AddEzPlateFuture,
    url: Routes.AddEzPlate,
    loadChildren: () => import('./module').then(mod => mod.AddPlateModule)
};
