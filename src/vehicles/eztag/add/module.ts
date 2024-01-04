import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule as HctraCommonModule, ENVIRON_CONFIG } from 'common/module';
import { environment } from 'environments/environment';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { StorefrontModule } from 'storefront/module';
import { VehiclesCommonModule } from 'vehicles/common/vehicles-common.module';
import { RoutesConfig } from './routes-config';
import { DynamicRoutes } from 'app/routing';
import { States as stateNames } from './states';
import { AddTagFrameComponent } from './components/frame/frame.component';
import { AddTagVehicleInformationComponent } from './components/vehicleInformation/vehicleInformation.component';
import { AddTagDeliveryMethodComponent } from './components/deliveryMethod/deliveryMethod.component';
import { AddTagCartComponent } from './components/cart/cart.component';
import { AddTagReceiptComponent } from './components/receipt/receipt.component';
import { AddTagReviewOrderComponent } from './components/reviewOrder/reviewOrder.component';
import { VehiclesManagerService, WebApiService, VehicleOperationsService } from 'vehicles/shared';
import { ReceiptDataHelperService } from 'vehicles/shared/services/receipt-data-helper/receipt-data-helper.service';
import { WebApisService as ProfileApis } from 'profile/services';
import { ReplacementManagerService } from 'vehicles/eztag/replacement';

const componentDictionary = {
    [stateNames.AddTag]: AddTagFrameComponent,
    [stateNames.TagVehicleInformation]: AddTagVehicleInformationComponent,
    [stateNames.TagCart]: AddTagCartComponent,
    [stateNames.TagDeliveryMethod]: AddTagDeliveryMethodComponent,
    [stateNames.TagReviewOrder]: AddTagReviewOrderComponent,
    [stateNames.TagReceipt]: AddTagReceiptComponent,
};

const routesWithComponents = RoutesConfig.map(route => ({
    ...route,
    component: componentDictionary[route.name]
})
);

@NgModule({
    declarations: [
        AddTagCartComponent,
        AddTagDeliveryMethodComponent,
        AddTagReceiptComponent,
        AddTagReviewOrderComponent,
        AddTagVehicleInformationComponent,
        AddTagFrameComponent
    ],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => routesWithComponents),
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
        ReplacementManagerService,
        VehicleOperationsService
    ]
})
export class AddTagModule {

}

