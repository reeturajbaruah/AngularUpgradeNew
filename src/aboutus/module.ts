import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule } from '@angular/common';
import { ENVIRON_CONFIG, CommonModule as HctraCommonModule } from 'common/module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
//components
import { KatyManagedLanesComponent } from './katyManagedLanes/katyManagedLanes.component';
import { AETComponent } from './aet/aet.component';
import { AetAccordionComponent } from './aet-accordion/aet-accordion.component';
import { HardySHPComponent } from './hardySHP/hardySHP.component';

import { routes } from './routing';
import { DynamicRoutes } from 'app/routing';
import {
    stateNames
} from './constants';
import { PipesModule } from 'pipes/module';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointService } from '../common/services/breakpoint/breakpoint.service';
import { AetFacadeService } from './aet/services/facade/aet-facade.service';
import { AetApiService } from './aet/services/api/aet-api.service';
import { HardySHPFacadeService } from './hardySHP/services/facade/hardySHP-facade.service';
import { PictureModule } from 'common/ui/picture/picture.module';


const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.KatyManagedLanes]: KatyManagedLanesComponent,
        [stateNames.AllElectronicTolling]: AETComponent,
        [stateNames.HardySHP]: HardySHPComponent
    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});

@NgModule({
    declarations: [
        KatyManagedLanesComponent,
        AETComponent,
        AetAccordionComponent,
        HardySHPComponent
    ],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => environConfig.enableAETComplex ? routesWithComponents : []),
        MatIconModule,
        CommonModule, HctraCommonModule, FlexLayoutModule, PipesModule, MatExpansionModule, CdkAccordionModule, PictureModule
    ],
    providers: [BreakpointService, AetFacadeService, AetApiService, HardySHPFacadeService]
})

export class AboutUsModule { }
