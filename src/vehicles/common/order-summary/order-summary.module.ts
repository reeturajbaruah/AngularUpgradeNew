import { NgModule } from '@angular/core';
import { CommonModule as HctraCommonModule } from 'common/module';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'pipes/module';
import { OrdersummaryComponent } from './components/order-summary.component';
import { VehicleCartRowModule } from '../vehicleCartRow/vehicle-cart-row.module';

@NgModule({
    declarations: [
        OrdersummaryComponent,

    ],
    exports: [
        OrdersummaryComponent,

    ],
    imports: [
        HctraCommonModule,
        CommonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        PipesModule,
        VehicleCartRowModule
    ]

})
export class OrderSummaryModule {

}
