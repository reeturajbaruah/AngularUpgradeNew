import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { CmsModule } from 'cms/cms.module';

import { CommonModule as HctraCommonModule, ENVIRON_CONFIG } from 'common/module';

import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { downgrade, HybridModule } from 'hybrid/module';

//missed a toll components
import { FrameComponent } from './frame/frame.component';
import { LandingComponent } from './landing/landing.component';
import { GridComponent } from './grid/grid.component';
import { BillingComponent } from './billing/billing.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptModalComponent } from './receipt/receiptModal.component';
import { MissedATollService, WebApiService } from './services';
import { violationsGridComponents } from './details';

import {
    StateNames, CmsIds, Routes,
    stateNames, cmsIds, urlPaths
} from './constants';

import { stateNames as eoStates } from 'frp3/constants';

import { StorefrontModule } from 'storefront/module';

import { DynamicRoutes } from 'app/routing';

import { routes } from './routing';
const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.Root]: FrameComponent,
        [stateNames.Landing]: LandingComponent,
        [stateNames.Grid]: GridComponent,
        [stateNames.Billing]: BillingComponent,
        [stateNames.Confirm]: ConfirmComponent,
        [stateNames.Receipt]: ReceiptComponent
    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});


@NgModule({
    declarations: [
        FrameComponent,
        LandingComponent,
        GridComponent,
        BillingComponent,
        ConfirmComponent,
        ReceiptComponent,
        ReceiptModalComponent,
        ...violationsGridComponents
    ],
    imports: [
        CommonModule,
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => 
                environConfig.isMergeMATandVioOn 
                    ? [{ name: stateNames.Root, url: urlPaths.Future, redirectTo: eoStates.Landing } ]
                    : routesWithComponents
            ),
        HctraCommonModule,
        PipesModule,
        HybridModule,
        ValidationModule,
        FormsModule,
        FlexLayoutModule,
        MatDividerModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        StorefrontModule,
        CmsModule
    ]
})
export class MissedATollModule {
    
}
