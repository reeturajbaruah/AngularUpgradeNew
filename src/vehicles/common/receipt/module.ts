import { NgModule } from '@angular/core';
import { ReceiptComponent } from './component/receipt.component';
import { CommonModule as HctraCommonModule } from 'common/module';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'pipes/module';
import { VehicleCartRowModule } from '../vehicleCartRow/vehicle-cart-row.module';

@NgModule({
    declarations: [
        ReceiptComponent
    ],
    exports: [
        ReceiptComponent
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
    ]
})
export class ReceiptModule {

}
