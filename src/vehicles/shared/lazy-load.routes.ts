import { LazyLoadRoute as AddTagFutureRoutes } from 'vehicles/eztag/add/lazy-load.route';
import { LazyLoadRoute as AddPlateFutureRoutes } from 'vehicles/ezplate/add/lazy-load.route';
import { LazyLoadRoute as MvuFutureRoutes } from 'vehicles/mvu/lazy-load.route';
import { FutureRoute as ReplacementFutureRoute } from 'vehicles/eztag/replacement';
import { StateConfig } from 'common/interfaces';
import { LazyLoadRoute } from 'vehicles/manage';

export const FutureLazyLoadRoutes: StateConfig[] = [
    { ...AddTagFutureRoutes },
    { ...AddPlateFutureRoutes },
    { ...MvuFutureRoutes },
    { ...ReplacementFutureRoute },
    {...LazyLoadRoute}
];

export const VehicleLazyLoadRoute = LazyLoadRoute;
