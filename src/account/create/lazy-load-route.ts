import { StateConfig } from 'common/interfaces';
import { AuthResolve } from 'common/resolvers';
import { userRoles } from 'constants/module';
import { Routes } from './routes';
import { States } from './states';
import { LoginRoute } from './states-config';

export const SignupRoute: StateConfig = LoginRoute;

export const LazyloadRoute: StateConfig =
{
    name: States.Future,
    url: Routes.Future,
    loadChildren: async () => {
        const { CreateAccountModule } = await import('./module');
        return CreateAccountModule;
    },
    resolve: [
        //AuthResolve(userRoles.active)
       // AuthResolve(userRoles.notAuthenticated, userRoles.incomplete),

    ],

};
