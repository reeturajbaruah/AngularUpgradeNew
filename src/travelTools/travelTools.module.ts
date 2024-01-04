import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRoutes } from 'app/routing';
import { TravelToolsStateConfig as RoutesConfig } from './travelTools.routing';
import { TravelToolsStateNames } from './travelTools.constants';
import { ENVIRON_CONFIG, CommonModule as HctraCommonModule } from 'common/module';
import { PipesModule } from 'pipes/module';
import { TollRoadMapComponent } from './components/tollRoadMap/tollRoadMap.component';
import { RoadsideAssistanceComponent } from './components/roadsideAssistance/roadsideAssistance.component';
import { TollRoadInformationComponent } from './components/tollRoadInformation.component';
import { GenericHeaderBodyModule } from 'genericHeaderBody/genericHeaderBody.module';
import { TollRatesComponent } from './components/tollRates/tollRates.component';
import { FormsModule } from '@angular/forms';
import { TollRatesService } from './services/tollRates/tollRates.service';

const componentDictionary = {
  [TravelToolsStateNames.TollRoadInformation]: TollRoadInformationComponent,
  [TravelToolsStateNames.LaneTypes]: TollRoadInformationComponent,
  [TravelToolsStateNames.TollRoadMap]: TollRoadMapComponent,
  [TravelToolsStateNames.RoadsideAssistance]: RoadsideAssistanceComponent,
  [TravelToolsStateNames.TollRates]: TollRatesComponent
};

const routesWithComponents = RoutesConfig.map(route => {
  const routes = {
    ...route,
    component: componentDictionary[route.name]
  };
  return routes;
});


@NgModule({
  declarations: [
    TollRoadInformationComponent,
    TollRoadMapComponent,
        RoadsideAssistanceComponent,
        TollRatesComponent
  ],
  imports: [
    DynamicRoutes([ENVIRON_CONFIG], (environConfig) => routesWithComponents),
    CommonModule,
    HctraCommonModule,
    PipesModule,
    GenericHeaderBodyModule,
    FormsModule
  ],
  providers: [
    TollRatesService
  ]
})
export class TravelToolsModule { }
