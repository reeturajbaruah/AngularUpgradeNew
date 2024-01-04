import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule as HctraCommonModule } from 'common/module';
import { environment } from 'environments/environment';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';

//Components
import { ForgotPasswordFrameComponent } from './frame/frame.component';
import { ForgotPasswordLandingComponent } from './landing/landing.component';
import { ForgotPasswordPhoneVerificationComponent } from './phoneVerification/phoneVerification.component';
import { ForgotPasswordResetPasswordComponent } from './resetPassword/resetPassword.component';
import { ForgotPasswordVerifyCodeComponent } from './verifyCode/verifyCode.component';

//Other
import { stateNames, urlPaths, StateNames, Routes } from './constants';
import { routes } from './routing';
import { WebApiService } from './services/webApi.service';

import { ENVIRON_CONFIG } from 'common/upgrades';
import { DynamicRoutes } from 'app/routing';
import { ForgotPasswordService } from './services/forgotPassword.service';
import { TwoFactorAuthModule } from '2FA/2FA.module';

export * from './constants';

const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.Root]: ForgotPasswordFrameComponent,
        [stateNames.FindAccount]: ForgotPasswordLandingComponent,
        [stateNames.ValidateByPhone]: ForgotPasswordPhoneVerificationComponent,
        [stateNames.ResetPassword]: ForgotPasswordResetPasswordComponent,
        [stateNames.VerifyCode]: ForgotPasswordVerifyCodeComponent
    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});

@NgModule({
    declarations: [
        ForgotPasswordFrameComponent,
        ForgotPasswordLandingComponent,
        ForgotPasswordPhoneVerificationComponent,
        ForgotPasswordResetPasswordComponent,
        ForgotPasswordVerifyCodeComponent
    ],
    entryComponents: [
        ForgotPasswordFrameComponent,
        ForgotPasswordLandingComponent,
        ForgotPasswordPhoneVerificationComponent,
        ForgotPasswordResetPasswordComponent,
        ForgotPasswordVerifyCodeComponent
    ],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => environConfig.twoFactorAuth.enableForgotPassword ? routesWithComponents : []),
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
        ForgotPasswordService,
        DatePipe,
        TitleCasePipe
    ]
})

export class ForgotPasswordModule {
}
