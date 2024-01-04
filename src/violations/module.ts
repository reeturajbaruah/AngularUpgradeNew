import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule as HctraCommonModule, ENVIRON_CONFIG } from 'common/module';
import { PipesModule } from 'pipes/module';

//components
import { FrameComponent } from './frame/frame.component';
import { LandingComponent } from './landing/landing.component';
import { GridComponent } from './grid/grid.component';
import { SelectPaymentComponent } from './selectPayment/selectPayment.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { InvoiceExampleComponent } from './landing/invoiceExample.component';
import { PrevPaidInvoicesComponent } from './grid/prevPaidInvoicesModal/prevPaidInvoicesModal.component';
import { InvoicedDetailsModalComponent } from './detailsRefresh/invoiced/invoicedDetailsModal.component';

import { violationsGridRefreshComponents } from './detailsRefresh';

import { StorefrontModule } from 'storefront/module';
import { ValidationModule } from 'validation/module';

import { DynamicRoutes } from 'app/routing';

/* Refresh Imports*/
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { stateNames as eoStates } from 'frp3/constants';

import { routes } from './routing';

const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.Root]: FrameComponent,
        [stateNames.Landing]: LandingComponent,
        [stateNames.Grid]: GridComponent,
        [stateNames.MakePayment]: SelectPaymentComponent,
        [stateNames.Confirm]: ConfirmComponent,
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
import { OverpaymentModalComponent } from './detailsRefresh/invoiced/overpaymentModal/overpaymentModal.component';
import { ViolationsCommonModule } from 'violationsCommon/violationsCommon.module';

@NgModule({
    declarations: [
        FrameComponent,
        LandingComponent,
        GridComponent,
        SelectPaymentComponent,
        ReceiptComponent,
        ConfirmComponent,
        InvoiceExampleComponent,
        PrevPaidInvoicesComponent,
        OverpaymentModalComponent,
        ...violationsGridRefreshComponents,
        InvoicedDetailsModalComponent
    ],
    imports: [
        PipesModule, CommonModule,
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => environConfig.isMergeMATandVioOn
            ? [{ name: stateNames.Root, url: urlPaths.Future, redirectTo: eoStates.Landing }]
            : routesWithComponents
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

export class ViolationsModule { }
