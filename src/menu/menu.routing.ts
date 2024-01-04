import { StateConfig } from 'common/interfaces';
import { AuthResolve } from 'common/resolvers';
import { userRoles } from 'constants/module';
import { stateNames, urlPaths } from './constants';

export const routes: StateConfig[] = [
    {
        name: stateNames.Search,
        url: urlPaths.Search,
        settings: {
            isHybrid: true
        },
        resolve: [
            AuthResolve(userRoles.anonymous)
        ]
    }
];