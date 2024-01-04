/**
 * Taken from https://www.npmjs.com/package/@angular-material-components/datetime-picker
 */

import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { HctraMatDateAdapter } from './date-adapter';
import { HctraMatNativeDateAdapter } from './native-date-adapter';
import { HCTRA_MAT_NATIVE_DATE_FORMATS } from './native-date-formats';
import { HCTRA_MAT_DATE_FORMATS } from './date-formats';


@NgModule({
    imports: [PlatformModule],
    providers: [
        { provide: HctraMatDateAdapter, useClass: HctraMatNativeDateAdapter },
    ],
})
export class HctraNativeDateModule { }

@NgModule({
    imports: [HctraNativeDateModule],
    providers: [{ provide: HCTRA_MAT_DATE_FORMATS, useValue: HCTRA_MAT_NATIVE_DATE_FORMATS }],
})
export class HctraMatNativeDateModule { }
