export * from './lazy-load-route';

import { Routes } from './routes';
import { States } from './states';
export const CreateAccountStates = { Login: States.Login };


export { CreateAccountNavigateFunction } from './create-acct-router.function';

export const CreateAcctRoutes = {
    creteAccountLogin: Routes.Login
};
