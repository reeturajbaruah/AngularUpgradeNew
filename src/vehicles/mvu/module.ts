import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule as HctraCommonModule, ENVIRON_CONFIG } from 'common/module';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { StorefrontModule } from 'storefront/module';
import { VehiclesCommonModule } from 'vehicles/common/vehicles-common.module';
import { RoutesConfig } from './routes-config';
import { DynamicRoutes } from 'app/routing';
import { States as stateNames } from './states';
import { MvuFrameComponent } from './components/frame/frame.component';
import { MvuUploadComponent } from './components/upload/upload.component';
import { MvuReviewOrderComponent } from './components/reviewOrder/reviewOrder.component';
import { MvuReceiptComponent } from './components/receipt/receipt.component';
import { MvuDeliveryMethodComponent } from './components/deliveryMethod/deliveryMethod.component';
import { ReceiptDataHelperService } from 'vehicles/shared/services/receipt-data-helper/receipt-data-helper.service';
import { WebApisService as ProfileApis } from 'profile/services';
import { VehicleOperationsService, VehiclesManagerService, WebApiService } from 'vehicles/shared';


const componentDictionary = {
    [stateNames.Mvu]: MvuFrameComponent,
    [stateNames.MvuUpload]: MvuUploadComponent,
    [stateNames.MvuDeliveryMethod]: MvuDeliveryMethodComponent,
    [stateNames.MvuReviewOrder]: MvuReviewOrderComponent,
    [stateNames.MvuReceipt]: MvuReceiptComponent
};

const routesWithComponents = RoutesConfig.map((route) => ({
    ...route,
    component: componentDictionary[route.name]
}
));

@NgModule({
    declarations: [
        MvuFrameComponent,
        MvuUploadComponent,
        MvuDeliveryMethodComponent,
        MvuReviewOrderComponent,
        MvuReceiptComponent
    ],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => environConfig.useNewMvu ? routesWithComponents : []),
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
        VehiclesCommonModule,
    ],
    providers: [
        WebApiService,
        ProfileApis,
        VehiclesManagerService,
        DatePipe,
        TitleCasePipe,
        ReceiptDataHelperService,
        VehicleOperationsService
    ]
})
export class MvuModule {

}
