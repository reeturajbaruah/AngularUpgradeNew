import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { UIRouterModule } from '@uirouter/angular';
import { ENVIRON_CONFIG, CommonModule as HctraCommonModule } from 'common/module';
import { environment } from 'environments/environment';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';

//Components
import { FirstTimeLoginFrameComponent } from './frame/frame.component';
import { FirstTimeLoginLandingComponent } from './landing/landing.component';
import { FirstTimeLoginPhoneVerificationComponent } from './phoneVerification/phoneVerification.component';
import { FirstTimeLoginVerifyCodeComponent } from './verifyCode/verifyCode.component';
import { FirstTimeLoginSetupAccessComponent } from './setupOnlineAccess/setupOnlineAccess.component';
import { FirstTimeLoginSetupCompleteComponent } from './setupComplete/setupComplete.component';

//Other
import { stateNames, urlPaths, StateNames, Routes } from './constants';
import { routes } from './routing';
import { WebApiService } from './services/webApi.service';
import { DynamicRoutes } from 'app/routing';
import { FirstTimeLoginService } from './services/firstTimeLogin.service';
import { TwoFactorAuthModule } from '2FA/2FA.module';

export * from './constants';

const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.Root]: FirstTimeLoginFrameComponent,
        [stateNames.FindAccount]: FirstTimeLoginLandingComponent,
        [stateNames.ValidateByPhone]: FirstTimeLoginPhoneVerificationComponent,
        [stateNames.VerifyCode]: FirstTimeLoginVerifyCodeComponent,
        [stateNames.SetupOnlineAccess]: FirstTimeLoginSetupAccessComponent,
        [stateNames.SetupComplete]: FirstTimeLoginSetupCompleteComponent
    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});

@NgModule({
    declarations: [
        FirstTimeLoginFrameComponent,
        FirstTimeLoginLandingComponent,
        FirstTimeLoginPhoneVerificationComponent,
        FirstTimeLoginVerifyCodeComponent,
        FirstTimeLoginSetupAccessComponent,
        FirstTimeLoginSetupCompleteComponent
    ],
    entryComponents: [
        FirstTimeLoginFrameComponent,
        FirstTimeLoginLandingComponent,
        FirstTimeLoginPhoneVerificationComponent,
        FirstTimeLoginVerifyCodeComponent,
        FirstTimeLoginSetupAccessComponent,
        FirstTimeLoginSetupCompleteComponent
    ],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => environConfig.twoFactorAuth.enableFirstTimeLogin ? routesWithComponents : []),
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
        TwoFactorAuthModule
    ],
    providers: [
        { provide: StateNames, useValue: stateNames },
        { provide: Routes, useValue: urlPaths },
        WebApiService,
        DatePipe,
        TitleCasePipe,
        FirstTimeLoginService
    ]
})

export class FirstTimeLoginModule {
}
