import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionalPageTemplateComponent } from './components/sectional-page-template/sectional-page-template.component';
import { DynamicRoutes } from 'app/routing';
import { SectionalPagetemplateRoutesStateConfig } from './sectional-page-template.routing';
import { CommonModule as HctraCommonModule, ENVIRON_CONFIG } from 'common/module';
import { PipesModule } from 'pipes/module';
import { SectionalPTStateNames } from './constant';
const componentDictionary = {
  [SectionalPTStateNames.SectionalPageTemplate]: SectionalPageTemplateComponent,
};



const routesWithComponents = SectionalPagetemplateRoutesStateConfig.map(route => {
  const routes = {
      ...route,
      component: componentDictionary[route.name]
  };
  return routes;
});


@NgModule({
  declarations: [
    SectionalPageTemplateComponent
  ],
  imports: [
    DynamicRoutes([ENVIRON_CONFIG], (environConfig) =>   environConfig.refreshCMSSimplePage ? routesWithComponents : []),
    CommonModule,
    HctraCommonModule,
    PipesModule,
  ]
})
export class SectionalPageTemplateModule {
  
 }
