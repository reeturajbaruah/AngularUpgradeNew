import { NgModule } from '@angular/core';
import { DeliveryMethodComponent } from './components/delivery-method/delivery-method.component';
import { FrameComponent } from './components/frame/frame.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ReviewOrderComponent } from './components/review-order/review-order.component';
import { VehiclesReplacementApiService } from './services/api/vehicles-replacement-api.service';
import { VehiclesReplacementFacadeService } from './services/facade/vehicles-replacement-facade.service';
import { CommonModule } from '@angular/common';
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
import { States } from './states';
import { RoutesConfig } from './routes-config';
import { DynamicRoutes } from 'app/routing';
import { ReceiptDataHelperService } from 'vehicles/shared/services/receipt-data-helper/receipt-data-helper.service';
import { OrderSummaryModule } from 'vehicles/common/order-summary/order-summary.module';
import { ReplacementStateService } from './services';
import { PaymentInfoService, WebApiService } from 'vehicles/shared';
import { ReplacementHelperService } from './services/helper/helper-service';

const ComponentDictionary = {
    [States.Replacement]: FrameComponent,
    [States.ReplacementDeliveryMethod]: DeliveryMethodComponent,
    [States.ReplacementReviewOrder]: ReviewOrderComponent,
    [States.ReplacementReceipt]: ReceiptComponent
};

const routes = RoutesConfig.map(config => {
    const route = {
        ...config,
        component: ComponentDictionary[config.name]
    };

    return route;
});

@NgModule({

    declarations: [
        FrameComponent,
        DeliveryMethodComponent,
        ReviewOrderComponent,
        ReceiptComponent
    ],
    providers: [
        VehiclesReplacementApiService,
        VehiclesReplacementFacadeService,
        ReplacementStateService,
        ReceiptDataHelperService,
        PaymentInfoService, 
        WebApiService,
        ReplacementHelperService
    ],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => environConfig.vehicleReplacement ? routes : []),
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
        OrderSummaryModule
    ]

})
export class VehiclesReplacementModule {

}
