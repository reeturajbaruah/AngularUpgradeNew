import { NgModule } from '@angular/core';
import { WashburnTunnelComponent } from './components/wasburnTunnel.component';
import { WashburnTunnelRoutesStateConfig } from './washburnTunnel.routing';
import { ENVIRON_CONFIG } from 'common/module';
import { DynamicRoutes } from 'app/routing';
import { WashburnTunnelStateNames } from './washburnTunnel.constants';
import { PipesModule } from 'pipes/module';
import { CommonModule } from '@angular/common';
import { MatCarouselModule } from 'common/ui/carousel/carousel.module';

const componentDictionary = {
    [WashburnTunnelStateNames.WashburnTunnel]: WashburnTunnelComponent,
};

const routesWithComponents = WashburnTunnelRoutesStateConfig.map(route => {
    const routes = {
        ...route,
        component: componentDictionary[route.name]
    };
    return routes;
});

@NgModule({
    declarations: [WashburnTunnelComponent],
    imports: [DynamicRoutes([ENVIRON_CONFIG], (environConfig) => routesWithComponents),
        PipesModule,
        CommonModule,
        MatCarouselModule.forRoot()
    ],
    providers: []
})

export class WashburnTunnelModule {

}
