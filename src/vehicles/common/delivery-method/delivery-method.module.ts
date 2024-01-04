import { NgModule } from '@angular/core';
import { DeliveryMethodComponent } from './components/delivery-method.component';
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
import { DeliveryMethodService } from './services/delivery-method.service';


@NgModule({
    declarations: [
        DeliveryMethodComponent
    ],
    exports: [
        DeliveryMethodComponent
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
        DeliveryMethodService
    ]

})
export class DeliveryMethodModule {

}


