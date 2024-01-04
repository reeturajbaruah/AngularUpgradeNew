import { NgModule } from '@angular/core';
import { ReceiptModule } from './receipt/module';
import { ReviewOrderModule } from './review-order/review-order.module';
import { VehicleCartRowModule } from './vehicleCartRow/vehicle-cart-row.module';

@NgModule({
  exports: [
    ReviewOrderModule,
    VehicleCartRowModule,
    ReceiptModule
  ]
})
export class VehiclesCommonModule {

}

