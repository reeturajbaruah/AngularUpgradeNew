/**
 * Taken from https://www.npmjs.com/package/@angular-material-components/datetime-picker
 */

import { HctraMatDateFormats } from './date-formats';

const DEFAULT_DATE_INPUT = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour12: true, hour: '2-digit', minute: '2-digit'
};

export const HCTRA_MAT_NATIVE_DATE_FORMATS: HctraMatDateFormats = {
    parse: {
        dateInput: DEFAULT_DATE_INPUT,
    },
    display: {
        dateInput: DEFAULT_DATE_INPUT,
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
