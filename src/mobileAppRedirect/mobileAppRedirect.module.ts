import { NgModule } from '@angular/core';
import { CommonModule as HctraCommonModule } from 'common/module';
import { DynamicRoutes } from 'app/routing';
import { MobileAppRedirectComponent } from './components/mobileAppRedirect/mobileAppRedirect.component';
import { MobileAppRedirectStateNames } from './mobileAppRedirect.constants';
import { mobileAppRedirectStatesConfig as RoutesConfig } from './mobileAppRedirect.routing';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { CommonModule } from '@angular/common';

const componentDictionary = {
    [MobileAppRedirectStateNames.Root]: MobileAppRedirectComponent,
    [MobileAppRedirectStateNames.EzTagMobileRedirect]: MobileAppRedirectComponent
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
        MobileAppRedirectComponent
    ],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => routesWithComponents),
        HctraCommonModule,
        CommonModule
    ]
})

export class MobileAppRedirectModule { }
