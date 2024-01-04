import { StateConfig } from 'common/interfaces';
import { ForgotUsernameRoutes, ForgotUsernameStateNames } from './forgotUsername.constants';

export const LazyloadRoute: StateConfig =
{
    name: ForgotUsernameStateNames.Future.toString(),
    url: ForgotUsernameRoutes.Future.toString(),
    loadChildren: async () => {
        const { ForgotUsernameModule } = await import('./forgotUsername.module');
        return ForgotUsernameModule;
    }
};