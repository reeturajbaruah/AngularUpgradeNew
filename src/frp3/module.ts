import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { ENVIRON_CONFIG, CommonModule as HctraCommonModule } from 'common/module';
import { environment } from 'environments/environment';
import { PipesModule } from 'pipes/module';

//components
import { FrameComponent } from './frame/frame.component';
import { LandingComponent } from './landing/landing.component';
import { GridComponent } from './grid/grid.component';
import { PaymentMethodComponent } from './paymentMethod/paymentMethod.component';
import { ConfirmPaymentComponent } from './confirm/confirm.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { PrevPaidInvoicesComponent } from './grid/prevPaidInvoices/prevPaidInvoicesModal.component';
import { ViolationsCommonModule } from 'violationsCommon/violationsCommon.module';

import { StorefrontModule } from 'storefront/module';
import { ValidationModule } from 'validation/module';
import { DynamicRoutes } from 'app/routing';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { stateNames as vioStates } from 'violations/constants';

import { routes } from './routing';
const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.Root]: FrameComponent,
        [stateNames.Landing]: LandingComponent,
        [stateNames.Grid]: GridComponent,
        [stateNames.MakePayment]: PaymentMethodComponent,
        [stateNames.Confirm]: ConfirmPaymentComponent,
        [stateNames.Receipt]: ReceiptComponent
    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});

import {
    StateNames, CmsIds, Routes, FeatureToggles,
    stateNames, cmsIds, urlPaths, featureToggles
} from './constants';

import { HybridModule } from 'hybrid/module';

@NgModule({
    declarations: [
        FrameComponent,
        LandingComponent,
        GridComponent,
        PaymentMethodComponent,
        ReceiptComponent,
        ConfirmPaymentComponent,
        PrevPaidInvoicesComponent
    ],
    entryComponents: [
        FrameComponent,
        LandingComponent,
        GridComponent,
        PaymentMethodComponent,
        ReceiptComponent,
        ConfirmPaymentComponent,
        PrevPaidInvoicesComponent
    ],
    imports: [
        PipesModule, CommonModule,
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => environConfig.isMergeMATandVioOn
            ? routesWithComponents
            : [{ name: stateNames.Root, url: urlPaths.Future, redirectTo: vioStates.Landing }]
        ),
        HctraCommonModule, StorefrontModule,
        HybridModule,
        ValidationModule,
        FormsModule,
        FlexLayoutModule,
        MatDividerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        ViolationsCommonModule
    ],
    providers: [
        { provide: StateNames, useValue: stateNames },
        { provide: CmsIds, useValue: cmsIds },
        { provide: Routes, useValue: urlPaths },
        { provide: FeatureToggles, useValue: featureToggles }
    ]
})

export class Frp3ViolationsModule { }
