import { } from 'jasmine';
import { Component, NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { changesStable } from 'testing';

import { BreakPoint } from '@angular/flex-layout';
import { BREAKPOINT_DICTIONARY } from 'common/provider/customBreakPointsProvider';

import { PictureModule } from './picture.module';
import { WindowRef } from 'common/providers';
import { ENVIRON_CONFIG } from 'common/upgrades';

@Component({
    selector: 'test-component',
    template:     
    `<picture>
        <source srcset='' mq-alias='custom-breakpoint' />
        <source srcset='' mq-alias='not-found' />
        <img />
    </picture>`
})
class TestComponent {

}

describe('Picture Media Query Alias Directive', () => {

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let console: Console;

    const mediaQuery = 'screen and (min-width: 600px) and (max-width: 959.98px)';

    beforeEach(async ()=> {

        console = jasmine.createSpyObj('Console', ['log']);

        await TestBed
        .configureTestingModule({
            declarations: [
                TestComponent
            ],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [PictureModule],
            providers: [
                { provide: BREAKPOINT_DICTIONARY, useFactory: () => ({
                    'custom-breakpoint': {
                        alias : 'custom-breakpoint',
                        mediaQuery
                    } as BreakPoint
                })},
                { provide: WindowRef, useFactory: () => ({ console })},
                { provide: ENVIRON_CONFIG, useFactory: () => ({})}   
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.debugElement.componentInstance;
        await changesStable(fixture);
    
    });

    it('should set media attribute correctly', () => {
        const elm = fixture.elementRef.nativeElement as HTMLElement;
        const source = elm.querySelector('picture > source[mq-alias=custom-breakpoint]') as HTMLSourceElement;
        expect(source.media).toEqual(mediaQuery);
        expect(console.log).toHaveBeenCalledWith(`'not-found' not a defined alias.`);
        expect(console.log).not.toHaveBeenCalledWith(`'custom-breakpoint' not a defined alias.`);
    });

    it('should console log when media query alias is not found', () => {
        const elm = fixture.elementRef.nativeElement as HTMLElement;
        const source = elm.querySelector('picture > source[mq-alias=not-found]') as HTMLSourceElement;
        expect(source.media).toBeFalsy();
        expect(console.log).toHaveBeenCalledWith(`'not-found' not a defined alias.`);
        expect(console.log).not.toHaveBeenCalledWith(`'custom-breakpoint' not a defined alias.`);
    });

});