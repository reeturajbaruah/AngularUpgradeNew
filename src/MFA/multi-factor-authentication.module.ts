import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENVIRON_CONFIG } from 'common/module';
import { DynamicRoutes } from 'app/routing';
import { MultiFactorAuthenticationComponent } from './components/multi-factor-authentication.component';
import { mfaStateNames } from './constant';
import { MultiFactorAuthenticationRoutesStateConfig } from './multi-factor-authentication.routing';
import { StorefrontModule } from 'storefront/module';
import { FormsModule } from '@angular/forms';
import { CommonModule as HctraCommonModule } from 'common/module';
// Refresh imports
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ValidationModule } from 'validation/module';
import { PipesModule } from 'pipes/module';
import { MultiFactorAuthenticationService } from './services/multi-factor-authentication.service';
import { TwoFactorAuthModule } from '2FA/2FA.module';
import { MfaVerifyCodeComponent } from './components/mfa-verify-code/mfa-verify-code.component';
import { MfaSecurityQuestionComponent } from './components/mfa-security-question/mfa-security-question.component';

const componentDictionary = {
  [mfaStateNames.MultiFactorAuthentication]: MultiFactorAuthenticationComponent,
  [mfaStateNames.VerifyCode]: MfaVerifyCodeComponent,
  [mfaStateNames.SecurityQuestion]: MfaSecurityQuestionComponent
};

const routesWithComponents = MultiFactorAuthenticationRoutesStateConfig.map(route => {
  const routes = {
      ...route,
      component: componentDictionary[route.name]
  };
  return routes;
});


@NgModule({
  declarations: [
    MultiFactorAuthenticationComponent,
    MfaVerifyCodeComponent,
    MfaSecurityQuestionComponent
  ],
  imports: [
    DynamicRoutes([ENVIRON_CONFIG], (environConfig) =>  routesWithComponents),
    HctraCommonModule, StorefrontModule,
    MatFormFieldModule, FormsModule,
    MatDividerModule,
    FlexLayoutModule,
    ValidationModule,
    MatSelectModule,
    CommonModule,
    PipesModule,
    TwoFactorAuthModule
  ],
  providers: [MultiFactorAuthenticationService]
})
export class MultiFactorAuthenticationModule { }
