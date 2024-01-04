import { NgModule } from '@angular/core';
import { CommonModule as HctraCommonModule } from 'common/module';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ValidationModule } from 'validation/module';
import { StorefrontModule } from 'storefront/module';
import { PaymentSummaryComponent } from './components/payment-summary.component';


@NgModule({
    declarations: [
        PaymentSummaryComponent
    ],
    exports: [
        PaymentSummaryComponent
    ],
    imports: [
        HctraCommonModule,
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        PipesModule,
        FlexLayoutModule,
        ValidationModule,
        StorefrontModule,
    ],
    providers: [

    ]

})
export class PaymentSummaryModule {

}



