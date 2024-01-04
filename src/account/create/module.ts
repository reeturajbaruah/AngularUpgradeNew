import { NgModule } from '@angular/core';
import { DeliveryMethodComponent } from './components/delivery-method/delivery-method.component';
import { FrameComponent } from './components/frame/frame.component';
import { LoginInfoComponent } from './components/login-info/login-info.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ReviewComponent } from './components/review/review.component';
import { VehicleInfoComponent } from './components/vehicles/add/vehicle-info.component';
import { States } from './states';
import { StatesConfig } from './states-config';
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
import { DynamicRoutes } from 'app/routing';
import { VehicleInfoModule } from 'shared/vehicle-info';
import { VehicleOperationService } from './services/vehicles/operations/service/vehicle-operation-service';
import { VehicleOperationApiService } from './services/vehicles/api/webapi-service';
import { VehiclesCartComponent } from './components/vehicles/cart/cart.component';
import { ManagerFacadeService } from './services/manager/facade/manager-facade.service';
import { ManagerFacadeApiService } from './services/manager/api/manager-facade-api.service';
import { PaymentModule } from 'shared/payment/module';
import { DeliveryMethodModule } from 'shared/delivery-method/delivery-method.module';
import { ComponentManagerService } from './services/manager/component-manager-service';
import { VehiclesOperationHelper } from './services/vehicles/operations/helper/operation-helper';
import { PaymentFacadeService } from './services/payment/facade/payment-facade.service';
import { PaymentApiService } from './services/payment/api/payment-api.service';
import { CreditCardFacadeService } from './services/payment/facade/credit-card/credit-card-facade.service';
import { BankFacadeService } from './services/payment/facade/bank/bank-facade.service';
import { StoreService } from './services/store/store.service';
import { NavigationService } from './services/navigation/navigation.service';
import { KioskFacadeService } from './services/kiosk/facade/kiosk-facade.service';
import { KioskApiService } from './services/kiosk/api/kiosk-api.service';
import { ToggleService } from './services/Toggle/toggle.service';
import { RebillFacadeService } from './services/payment/facade/rebill-facade.service';
import { RebillApiService } from './services/payment/api/rebill-api.service';
import { AlertBoxModule } from 'shared/ui/display/alert-box/alert-box.module';

import { CampaignService, MetaPixelService, StackAdaptPixelService, ClarityService, AdformService, CampaignBannerService } from './services/campaign';
import { TwoFactorAuthModule } from '2FA/2FA.module';
import { CAPhoneVerificationComponent } from './components/two-factor-auth/by-phone/phone-verification/phone-verification.component';
import { CAVerifyCodeComponent } from './components/two-factor-auth/by-phone/verify-code/verify-code.component';
import { TwoFactorAuthConfigService } from './services/two-factor-auth/config/config.service';
import { TwoFactorAuthManagerService } from './services/two-factor-auth/manager/manager.service';

const dictionary = {
    [States.Login]: LoginInfoComponent,
    [States.VehicleInfo]: VehicleInfoComponent,
    [States.PaymentInfo]: PaymentInfoComponent,
    [States.DeliveryMethod]: DeliveryMethodComponent,
    [States.Review]: ReviewComponent,
    [States.Receipt]: ReceiptComponent,
    [States.NewAccount]: FrameComponent,
    [States.PhoneValidation]: CAPhoneVerificationComponent,
    [States.VerifyCode]: CAVerifyCodeComponent,

};

const routesWithComponents = StatesConfig.map(stateConfig => (
    {

        ...stateConfig,
        component: dictionary[stateConfig.name]

    }));

@NgModule({

    declarations: [
        FrameComponent,
        LoginInfoComponent,
        VehicleInfoComponent,
        VehiclesCartComponent,
        PaymentInfoComponent,
        DeliveryMethodComponent,
        ReviewComponent,
        ReceiptComponent,
        CAPhoneVerificationComponent,
        CAVerifyCodeComponent
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
        VehicleInfoModule,
        PaymentModule,
        DeliveryMethodModule,
        AlertBoxModule,
        TwoFactorAuthModule
    ],
    providers: [
        VehicleOperationService,
        VehicleOperationApiService,
        VehiclesOperationHelper,
        ComponentManagerService,
        ManagerFacadeService,
        ManagerFacadeApiService,
        PaymentFacadeService, PaymentApiService, CreditCardFacadeService, BankFacadeService,
        StoreService,
        NavigationService,
        KioskFacadeService, KioskApiService,
        ToggleService,
        RebillFacadeService, RebillApiService,
        MetaPixelService,
        StackAdaptPixelService,
        ClarityService,
        AdformService,
        CampaignService,
        CampaignBannerService,
        TwoFactorAuthManagerService,
        TwoFactorAuthConfigService

    ]
})
export class CreateAccountModule {

    constructor() {
    }

}
