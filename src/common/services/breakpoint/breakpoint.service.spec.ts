import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { fakeAsync } from '@angular/core/testing';
import { } from 'jasmine';
import { of } from 'rxjs';
import { BreakpointService } from './breakpoint.service';

describe('Breakpoint Service', () => {

    let breakpointService: BreakpointService;
    let breakpointObserverSpy: jasmine.SpyObj<BreakpointObserver>;
    const breakpointState = {
        matches: true,
        breakpoints: {
            [Breakpoints.Small]: true
        }
    } as BreakpointState;
   
    beforeEach(() => {
        breakpointObserverSpy = jasmine.createSpyObj('breakpointObserverSpy', ['observe']);
        breakpointObserverSpy.observe.and.returnValue(of (breakpointState));
        breakpointService = new BreakpointService(breakpointObserverSpy);
    });

    it('checks if service is instantiated', () => {
        expect(breakpointService).toBeDefined();
    });

    it('should call observe method', fakeAsync(() => {
        breakpointService.observe([Breakpoints.Small]).subscribe(result => {
            expect(result).toEqual(Breakpoints.Small);
            });
    }));

});

