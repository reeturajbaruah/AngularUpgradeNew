import { NgModule } from '@angular/core';
import { CommonModule as HctraCommonModule } from 'common/module';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from 'validation/module';
import { StorefrontModule } from 'storefront/module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BillingComponent } from './billing/components/billing.component';
import { PaymentSummaryComponent } from './summary/components/payment-summary.component';
import { PaymentMethodComponent } from './method/components/payment-method.component';
import { AutoReplenishmentDisplayComponent } from './autoReplenishment/display/autoReplenishmentDisplay.component';
import { AutoReplenishmentComponent } from './autoReplenishment/components/autoReplenishment.component';
import { SavePaymentMethodComponent } from './savePaymentMethod/components/savePaymentMethod.component';
import { AlertBoxModule } from 'shared/ui/display/alert-box/alert-box.module';


@NgModule({
    declarations: [
        BillingComponent,
        PaymentSummaryComponent,
        PaymentMethodComponent,
        AutoReplenishmentComponent,
        SavePaymentMethodComponent,
        AutoReplenishmentDisplayComponent
    ],
    exports: [
        BillingComponent,
        PaymentSummaryComponent,
        PaymentMethodComponent,
        AutoReplenishmentDisplayComponent,
        AutoReplenishmentComponent,
        SavePaymentMethodComponent
    ],
    imports: [
        HctraCommonModule,
        CommonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        PipesModule,
        FormsModule,
        ValidationModule,
        FlexLayoutModule,
        ValidationModule,
        StorefrontModule,
        AlertBoxModule
    ]
})
export class PaymentModule {

}
