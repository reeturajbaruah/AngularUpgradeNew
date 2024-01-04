import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipesModule } from 'pipes/module';

//components
import { FrameComponent } from './frame/frame.component';
import { LandingComponent } from './landing/landing.component';
import { ViolationsLandingComponent } from './violationsLanding/violationsLanding.component';
import { RequiredPaymentComponent } from './requiredPayment/requiredPayment.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReceiptComponent } from './receipt/receipt.component';

import { routes } from './routing';
import { stateNames } from './constants';
import { SuspendedAccountSharedModule } from './shared.module';
import { CommonModule } from '@angular/common';
import { CommonModule as HctraCommonModule } from 'common/module';
import { HybridModule } from 'hybrid/module';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ViolationsCommonModule } from 'violationsCommon/violationsCommon.module';

const componentDictionary = {
    [stateNames.Root]: FrameComponent,
    [stateNames.Landing]: LandingComponent,
    [stateNames.ViolationsLanding]: ViolationsLandingComponent,
    [stateNames.RequiredPayment]: RequiredPaymentComponent,
    [stateNames.Payment]: PaymentComponent,
    [stateNames.Confirm]: ConfirmComponent,
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
        ViolationsLandingComponent,
        RequiredPaymentComponent,
        PaymentComponent,
        ConfirmComponent,
        ReceiptComponent
    ],
    imports: [
       // SuspendedAccountSharedModule,
        HctraCommonModule,
        PipesModule,
        UIRouterModule.forChild({ states: routesWithComponents }),
        FlexLayoutModule,
        FormsModule,
        PipesModule,
        FlexLayoutModule,
        CommonModule,
        HctraCommonModule,
        HybridModule,
        MatDividerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        ViolationsCommonModule
    ],
    providers: []
})
export class SuspendedLazyModule { }
