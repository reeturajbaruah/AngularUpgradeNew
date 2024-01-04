// todo: move this service to common module for others modules 

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable()
export class BreakpointService {

    private breakpointState: BreakpointState;

    constructor(private breakpointObserver: BreakpointObserver) {

    }

    observe(breakpoints: string[]) {
        return this.breakpointObserver.observe(breakpoints).pipe(
            map(result => {
                if (result.matches) {
                    this.breakpointState = result;
                    return this.getBreakpoint();
                }

            }));
    }

    private getBreakpoint() {
        const breakpoints = Object.entries(this.breakpointState.breakpoints).
            filter(entry => entry[1] === true);

        if (breakpoints.length > 0) {
            return breakpoints[0][0];
        }
    }

}

