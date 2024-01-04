import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule as HctraCommonModule } from 'common/module';
import { PipesModule } from 'pipes/module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

//payment plan components
import { PaymentDetailsComponent } from './paymentDetails/paymentDetails.component';
import { FrameComponent } from './frame/frame.component';
import { LandingComponent } from './landing/landing.component';
import { GridComponent } from './grid/grid.component';
import { PlanDetailComponent } from './grid/planDetail.component';
import { SelectPaymentComponent } from './selectPayment/selectPayment.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReceiptComponent } from './receipt/receipt.component';

import { InvoiceExampleComponent } from './landing/invoiceExample.component';

import { StorefrontModule } from 'storefront/module';
import { ValidationModule } from 'validation/module';

import { PlateDataService, StateService } from './services';
import { WebApiService } from './services/webApi.service';


import {
    PaymentPlansStateNames, CmsIds, PaymentPlanRoutes, FeatureToggles,
    stateNames, cmsIds, urlPaths, featureToggles    
} from './constants';

import { HybridModule } from 'hybrid/module';

import { routes } from './routing';
const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.Root]: FrameComponent,
        [stateNames.Landing]: LandingComponent,
        [stateNames.Grid]: GridComponent,
        [stateNames.MakePayment]: SelectPaymentComponent,
        [stateNames.Confirm]: ConfirmComponent,
        [stateNames.Receipt]: ReceiptComponent,

        [stateNames.AccountOverview]: FrameComponent,
        [stateNames.AccountOverviewSummary]: GridComponent,
        [stateNames.AccountOverviewSelectPayment]: SelectPaymentComponent,
        [stateNames.AccountOverviewConfirm]: ConfirmComponent,
        [stateNames.AccountOverviewReceipt]: ReceiptComponent
    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});

@NgModule({
    declarations: [
        PaymentDetailsComponent, FrameComponent, LandingComponent, GridComponent,
        PlanDetailComponent, SelectPaymentComponent,
        ConfirmComponent, ReceiptComponent, InvoiceExampleComponent
    ],
    imports: [
        PipesModule, CommonModule,
        UIRouterModule.forChild({ states: routesWithComponents }),
        HctraCommonModule, StorefrontModule,
        HybridModule,
        ValidationModule,
        FormsModule,
        FlexLayoutModule,
        MatSelectModule,
        MatFormFieldModule, MatDividerModule,
        MatIconModule
    ],
    providers: [
        { provide: CurrencyPipe, useClass: CurrencyPipe },
        { provide: StateService, useClass: StateService },
        { provide: PaymentPlansStateNames, useValue: stateNames },
        { provide: CmsIds, useValue: cmsIds },
        { provide: PaymentPlanRoutes, useValue: urlPaths },
        { provide: PlateDataService, useClass: PlateDataService },
        { provide: FeatureToggles, useValue: featureToggles },
        { provide: WebApiService, useClass: WebApiService }
    ]
})
export class PaymentPlansModule {
}
