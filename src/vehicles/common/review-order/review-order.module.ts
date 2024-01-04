import { NgModule } from '@angular/core';
import { CommonModule as HctraCommonModule } from 'common/module';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'pipes/module';

import { DeliveryMethodModule } from '../delivery-method/delivery-method.module';
import { PaymentSummaryModule } from '../payment-summary/payment-summary.module';
import { ReviewOrderComponent } from './components/review.-order.component';
import { VehicleCartRowModule } from '../vehicleCartRow/vehicle-cart-row.module';
import { OrderSummaryModule } from '../order-summary/order-summary.module';
import { ReviewOrderService } from './services/review-order.service';

@NgModule({
    declarations: [
        ReviewOrderComponent
    ],
    exports: [
        ReviewOrderComponent
    ],
    imports: [
        HctraCommonModule,
        CommonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        PipesModule,
        VehicleCartRowModule,
        DeliveryMethodModule,
        PaymentSummaryModule,
        OrderSummaryModule
    ],
    providers:[
        ReviewOrderService
    ]

})
export class ReviewOrderModule {

}
