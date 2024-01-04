import { NgModule } from '@angular/core';
import { CommonModule as HctraCommonModule } from 'common/module';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'pipes/module';
import { VehicleCartRowComponent } from './components/vehicleCartRow.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        VehicleCartRowComponent
    ],
    exports:[
        VehicleCartRowComponent
    ],
    imports: [
        HctraCommonModule,
        CommonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        FlexLayoutModule,
        MatDividerModule,
        PipesModule
    ]
  
})
export class VehicleCartRowModule {

}
