import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonModule } from 'common/module';
//import { CaptchaComponent } from './components/captcha.component';
import { CaptchaService } from './services/captcha.service';
import { downgrade } from 'hybrid/module';

downgrade('captchaService', { service: CaptchaService });

@NgModule({
    declarations: [
        //CaptchaComponent
    ],
    entryComponents: [],
    exports: [
        //CaptchaComponent
    ],
    imports: [
        NgCommonModule,
        CommonModule,       
        FlexLayoutModule,       
        ReactiveFormsModule
    ],
    providers: [
        CaptchaService
    ],
})
export class CaptchaModule {
}
