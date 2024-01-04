import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePageTemplateComponent } from './components/simple-page-template/simple-page-template.component';
import { DynamicRoutes } from 'app/routing';
import { SimplePagetemplateRoutesStateConfig } from './simple-page-template.routing';
import { SPTStateNames } from './constant';
import { CommonModule as HctraCommonModule, ENVIRON_CONFIG } from 'common/module';
import { PipesModule } from 'pipes/module';
const componentDictionary = {
  [SPTStateNames.SimplePageTemplate]: SimplePageTemplateComponent,
};



const routesWithComponents = SimplePagetemplateRoutesStateConfig.map(route => {
  const routes = {
      ...route,
      component: componentDictionary[route.name]
  };
  return routes;
});


@NgModule({
  declarations: [
    SimplePageTemplateComponent
  ],
  imports: [
    DynamicRoutes([ENVIRON_CONFIG], (environConfig) =>   environConfig.refreshCMSSimplePage ? routesWithComponents : []),
    CommonModule,
    HctraCommonModule,
    PipesModule,
  ]
})
export class SimplePageTemplateModule {
  
 }
