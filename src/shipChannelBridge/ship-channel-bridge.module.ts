import { NgModule } from '@angular/core';
import { ShipChannelBridgeComponent } from './components/ship-channel-bridge.component';
import { ShipChannelBridgeRoutesStateConfig } from './ship-channel-bridge.routing';
import { ENVIRON_CONFIG } from 'common/module';
import { DynamicRoutes } from 'app/routing';
import { SCBStateNames } from './constant';
import { SCBCarouselComponent } from './components/SCBCarousel/scb-carousel.component';
import { MatCarouselModule } from 'common/ui/carousel/carousel.module';
import { CommonModule } from '@angular/common';
import { CommonModule as HctraCommonModule } from 'common/module';
import { SCBTabsComponent } from './components/SCBTabs/scb-tabs.component';
import { PipesModule } from 'pipes/module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShipChannelBridgeFacadeService } from './services/ship-channel-bridge-facade-api/ship-channel-bridge-facade.service';
import { BreakpointService } from 'common/services/breakpoint/breakpoint.service';
import { MatSelectModule } from '@angular/material/select';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { ValidationModule } from 'validation/module';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';
import { ShipChannelBridgeService } from './services/ship-channel-bridge-api/ship-channel-bridge.service';



const componentDictionary = {
    [SCBStateNames.ShipChannelBridge]: ShipChannelBridgeComponent,
};

const routesWithComponents = ShipChannelBridgeRoutesStateConfig.map(route => {
    const routes = {
        ...route,
        component: componentDictionary[route.name]
    };
    return routes;
});

@NgModule({
    declarations: [ShipChannelBridgeComponent, SCBCarouselComponent, SCBTabsComponent, ContactUsComponent],
    imports:[
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) =>  routesWithComponents),
        MatCarouselModule.forRoot(),
        CommonModule, HctraCommonModule,PipesModule,
        MatFormFieldModule, MatSelectModule, MatDividerModule,
        FormsModule, ReactiveFormsModule, MatInputModule,
        ValidationModule, TextFieldModule, MatIconModule
    ],
    providers: [BreakpointService, ShipChannelBridgeFacadeService, ShipChannelBridgeService]
})

export class ShipChannelBridgeModule {

}