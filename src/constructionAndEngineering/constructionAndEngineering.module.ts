import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DynamicRoutes } from 'app/routing';
import { ENVIRON_CONFIG, CommonModule as HctraCommonModule } from 'common/module';
import { CEStateNames } from './constructionAndEngineering.constants';
import { ConstructionAndEngineeringRoutesStateConfig as RoutesConfig } from './constructionAndEngineering.routing';
import { ConstructionAndEngineeringComponent } from './components/constructionAndEngineering.component';
import { CEFacadeApiService } from './services/constructionAndEngineering-facade-api/constructionAndEngineering-facade-api.service';
import { MajorProjectsComponent } from './components/majorProjects/majorProjects.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { PipesModule } from 'pipes/module';


const componentDictionary = {
  [CEStateNames.MajorProjects]: ConstructionAndEngineeringComponent
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
    ConstructionAndEngineeringComponent,
    MajorProjectsComponent
  ],
  imports: [
    DynamicRoutes([ENVIRON_CONFIG], (environConfig) =>  routesWithComponents),
    CommonModule,
    HctraCommonModule,
    MatFormFieldModule,
    MatDividerModule,
    PipesModule
  ],
  providers: [
    CEFacadeApiService,
    CurrencyPipe
  ]
})
export class ConstructionAndEngineeringModule { }
