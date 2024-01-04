import { NgModule } from '@angular/core';
import { LynchburgFerryComponent } from './components/lynchburgFerry.component';
import { LynchburgFerryRoutesStateConfig } from './lynchburgFerry.routing';
import { ENVIRON_CONFIG } from 'common/module';
import { DynamicRoutes } from 'app/routing';
import { LynchburgFerryStateNames } from './lynchburgFerry.constants';
import { PipesModule } from 'pipes/module';
import { CommonModule } from '@angular/common';
import { MatCarouselModule } from 'common/ui/carousel/carousel.module';

const componentDictionary = {
    [LynchburgFerryStateNames.LynchburgFerry]: LynchburgFerryComponent,
};

const routesWithComponents = LynchburgFerryRoutesStateConfig.map(route => {
    const routes = {
        ...route,
        component: componentDictionary[route.name]
    };
    return routes;
});

@NgModule({
    declarations: [LynchburgFerryComponent],
    imports: [DynamicRoutes([ENVIRON_CONFIG], (environConfig) => routesWithComponents),
        PipesModule,
        CommonModule,
        MatCarouselModule.forRoot()
    ],
    providers: []
})

export class LynchburgFerryModule {

}
