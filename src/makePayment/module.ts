import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule as HctraCommonModule } from 'common/module';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

import { WebApiService } from './services/webApi.service';

import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { StorefrontModule } from 'storefront/module';

//components
import { FrameComponent } from './frame/frame.component';
import { LandingComponent } from './landing/landing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReceiptComponent } from './receipt/receipt.component';

import { routes } from './routing';
import { stateNames } from './constants';
import { PaymentInfoService } from './services/paymentInfo.service';
export * from './constants';
import { AccountPendingFundsModule } from 'account/pending-funds';

const componentDictionary = {
    [stateNames.Root]: FrameComponent,
    [stateNames.Landing]: LandingComponent,
    [stateNames.Checkout]: CheckoutComponent,
    [stateNames.Receipt]: ReceiptComponent
};

const routesWithComponents = routes.map(route => ({
    ...route,
    component: componentDictionary[route.name]
}));


@NgModule({
    declarations: [
        FrameComponent,
        LandingComponent,
        CheckoutComponent,
        ReceiptComponent
    ],
    imports: [
        PipesModule, CommonModule,
        ValidationModule,
        FormsModule,
        FlexLayoutModule,
        MatFormFieldModule, MatDividerModule,
        UIRouterModule.forChild({ states: routesWithComponents }),
        HctraCommonModule,
        StorefrontModule,
        AccountPendingFundsModule
    ],
    providers: [
        WebApiService,
        PaymentInfoService
    ]
})
export class MakePaymentModule {
}
