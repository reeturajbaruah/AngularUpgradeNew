import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ValidationModule } from 'validation/module';

import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { CmsModule } from 'cms/cms.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { AccountSearchComponent } from './components/accountSearch/accountSearch.component';
import { PhoneVerifcationSelectionComponent } from './components/phoneVerifcationSelection/phoneVerifcationSelection.component';
import { EnterVerificationCodeComponent } from './components/enterVerificationCode/enterVerificationCode.component';
import { TwoFAService } from './services/2FA.service';
import { CommonModule } from 'common/module';
import { PipesModule } from 'pipes/module';;
import { LocateYourAccountComponent } from './components/locateYourAccount/locateYourAccount.component';


@NgModule({
    declarations: [
        AccountSearchComponent,
        PhoneVerifcationSelectionComponent,
        EnterVerificationCodeComponent,
        LocateYourAccountComponent
    ],
    entryComponents: [
        AccountSearchComponent,
        PhoneVerifcationSelectionComponent,
        EnterVerificationCodeComponent
    ],
    exports: [
        AccountSearchComponent,
        PhoneVerifcationSelectionComponent,
        EnterVerificationCodeComponent,
        LocateYourAccountComponent
    ],
    imports: [
        NgCommonModule,
        CommonModule,
        FormsModule,
        PipesModule,        
        ValidationModule,
        FlexLayoutModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDividerModule,
        MatIconModule,
        CmsModule,
        ReactiveFormsModule,
        OverlayModule
    ],
    providers: [
        TwoFAService
    ],
})
export class TwoFactorAuthModule {
}
