import { States } from './states';
import { Routes } from '../shared';
import { AuthResolve } from 'common/resolvers';
import { userRoles } from 'constants/module';
import { StateConfig } from 'common/interfaces';

export const LazyLoadRoute: StateConfig = {
    name: States.Future,
    url: Routes.Root,
    loadChildren: () => import('./module').then(mod => mod.ManageVehiclesModule),
    resolve: [
        AuthResolve(userRoles.active)
    ],

};
