import { Routes } from './routes';
import { States } from './states';

export const FutureRoute = {
    name: States.ReplacementFuture.toString(),
    url: Routes.Replacement,
    loadChildren: () => import('./module').then(mod => mod.VehiclesReplacementModule)

};
