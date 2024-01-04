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
import { RoutesConfig } from './routes-config';
import { DynamicRoutes } from 'app/routing';
import { States as stateNames } from './states';
import { AddPlateReceiptComponent } from './components/receipt/receipt.component';
import { AddPlateReviewComponent } from './components/reviewOrder/reviewOrder.component';
import { AddPlateVehicleInformationComponent } from './components/vehicleInformation/vehicleInformation.component';
import { AddPlateFrameComponent } from './components/frame/frame.component';
import { ReceiptDataHelperService } from 'vehicles/shared/services/receipt-data-helper/receipt-data-helper.service';
import { WebApisService as ProfileApis } from 'profile/services';
import { ReplacementManagerService } from 'vehicles/eztag/replacement';
import { VehiclesCommonModule } from 'vehicles/common/vehicles-common.module';
import { VehiclesManagerService, WebApiService, VehicleOperationsService } from 'vehicles/shared';

const componentDictionary = {
    [stateNames.AddEzPlate]: AddPlateFrameComponent,
    [stateNames.PlateVehicleInformation]: AddPlateVehicleInformationComponent,
    [stateNames.PlateReviewOrder]: AddPlateReviewComponent,
    [stateNames.PlateReceipt]: AddPlateReceiptComponent,
};

const routesWithComponents = RoutesConfig.map(route => (

    {
        ...route,
        component: componentDictionary[route.name]
    }
));

@NgModule({
    declarations: [
        AddPlateReceiptComponent,
        AddPlateReviewComponent,
        AddPlateVehicleInformationComponent,
        AddPlateFrameComponent,
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
export class AddPlateModule {

}

