/**
 * Taken from https://www.npmjs.com/package/@angular-material-components/datetime-picker
 */

import { InjectionToken } from '@angular/core';


export type HctraMatDateFormats = {
    parse: {
        dateInput: any;
    };
    display: {
        dateInput: any;
        monthYearLabel: any;
        dateA11yLabel: any;
        monthYearA11yLabel: any;
    };
};


export const HCTRA_MAT_DATE_FORMATS = new InjectionToken<HctraMatDateFormats>('hctra-mat-date-formats');
