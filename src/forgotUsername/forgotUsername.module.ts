import { NgModule } from '@angular/core';
import { CommonModule as HctraCommonModule } from 'common/module';
import { DynamicRoutes } from 'app/routing';
import { FrameComponent } from './components/frame/frame.component';
import { InputEmailComponent } from './components/inputEmail/inputEmail.component';
import { ForgotUsernameStateNames } from './forgotUsername.constants';
import { forgotUsernameStatesConfig as RoutesConfig } from './forgotUsername.routing';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from 'validation/module';
import { WebApiService } from './services/webApi/webApi.service';
import { CommonModule } from '@angular/common';
import { TwoFactorAuthModule } from '2FA/2FA.module';
import { ForgotUsernameService } from './services/forgotUsername/forgotUsername.service';
import { VerifyCodeComponent } from './components/verifyCode/verifyCode.component';
import { PipesModule } from 'pipes/module';
import { IdentityConfirmedComponent } from './components/identityConfirmed/identityConfirmed.component';

const componentDictionary = {
    [ForgotUsernameStateNames.Root]: FrameComponent,
    [ForgotUsernameStateNames.InputEmail]: InputEmailComponent,
    [ForgotUsernameStateNames.VerifyCode]: VerifyCodeComponent,
    [ForgotUsernameStateNames.IdentityConfirmed]: IdentityConfirmedComponent
};

const routesWithComponents = RoutesConfig.map(route => {
    const routes = {
        ...route,
        component: componentDictionary[route.name]
    };
    return routes;
});

@NgModule({
    declarations: [
        FrameComponent,
        InputEmailComponent,
        VerifyCodeComponent,
        IdentityConfirmedComponent
    ],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => environConfig.twoFactorAuth.forgotUsername ? routesWithComponents : []),
        HctraCommonModule,
        CommonModule,
        MatDividerModule,
        MatFormFieldModule,
        FormsModule,
        ValidationModule,
        TwoFactorAuthModule,
        PipesModule
    ],
    providers: [
        ForgotUsernameService,
        WebApiService
    ]
})

export class ForgotUsernameModule { }
