import { NgModule } from '@angular/core';
import { AddVehicleComponent } from './add/components/add-vehicle.component';
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
import { VehicleCartListComponent } from './cart/list/components/cart-list.component';
import { VehicleCartRowModule } from './cart/row/vehicle-cart-row.module';
import { OrderSummaryComponent } from './order-summary/components/order-summary.component';
import { VehicleCartRowComponent } from './cart/row/components/vehicleCartRow.component';


@NgModule({
    declarations: [
        AddVehicleComponent,
        VehicleCartListComponent,
        OrderSummaryComponent
    ],
    exports: [
        AddVehicleComponent,
        VehicleCartListComponent,
        OrderSummaryComponent,
        VehicleCartRowComponent
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
        VehicleCartRowModule
    ],
    providers: [

    ]
})
export class VehicleInfoModule {

}
