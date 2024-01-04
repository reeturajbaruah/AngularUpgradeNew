import { InjectionToken } from '@angular/core';
import { BREAKPOINT, BreakPoint } from '@angular/flex-layout';

import * as breakpoints from 'styles/breakpoints';
export const CUSTOM_BREAKPOINTS = [...breakpoints];

export const BREAKPOINT_DICTIONARY = new InjectionToken('BREAKPOINT_DICTIONARY');

export const CustomBreakPointsProviders = [
    { provide: BREAKPOINT, useValue: CUSTOM_BREAKPOINTS, multi: true },
    { 
        provide: BREAKPOINT_DICTIONARY, 
        deps:[BREAKPOINT], 
        useFactory: (customBreakpoints: any[]) => 
            customBreakpoints
                .reduce((acc, item) => Array.isArray(item) ? [...acc, ...item] : [...acc, item], [])
                .reduce((acc, breakpoint: BreakPoint)=> ({...acc, [breakpoint.alias]: breakpoint}), {})
    }
];
