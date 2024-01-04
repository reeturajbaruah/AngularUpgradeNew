import { RoutesConfig } from './routes-config';

export const GetSharedRouteConfig = (stateName: string) => {

    const routesConfig = RoutesConfig.filter(config => config.name === stateName);
    if (routesConfig && routesConfig.length > 0) {
        return routesConfig[0];
    }

};

