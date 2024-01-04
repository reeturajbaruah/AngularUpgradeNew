import { } from 'jasmine';
import { Component, NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { changesStable } from 'testing';

import { PictureModule } from './picture.module';
import { ENVIRON_CONFIG } from 'common/upgrades';

@Component({
    selector: 'test-component1',
    template: `<img />`
})
class Test1Component {
}

@Component({
    selector: 'test-component2',
    template: `<img loading='eager' />`
})
class Test2Component {
}

describe('Lazy Loading Image directive', () => {

    const BuildTestBed = async (testComponentType, lazyLoadImages: boolean) => {
        await TestBed
        .configureTestingModule({
            declarations: [
                testComponentType
            ],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [PictureModule],
            providers: [ 
                { provide: ENVIRON_CONFIG, useFactory: () => ({ lazyLoadImages })}              
            ]
        })
        .compileComponents();

        const fixture = TestBed.createComponent(testComponentType);
        await changesStable(fixture);
        return fixture;
    };

    describe('toggle off - no loading attribute', () => {

        let fixture: ComponentFixture<Test1Component>;

        beforeEach(async ()=> {
            fixture = await BuildTestBed(Test1Component, false);
        });

        it('does not add loading attibute', () => {
            const elm = fixture.debugElement.nativeElement as HTMLElement;
            const img = elm.querySelector('img');

            expect(img).toBeDefined();
            expect(img.hasAttribute('loading')).toBeFalse();
        });

    });

    describe('toggle on - no loading attribute', () => {

        let fixture: ComponentFixture<Test1Component>;

        beforeEach(async ()=> {
            fixture = await BuildTestBed(Test1Component, true);
        });

        it('does add loading attibute', () => {
            const elm = fixture.debugElement.nativeElement as HTMLElement;
            const img = elm.querySelector('img');

            expect(img).toBeDefined();
            expect(img.hasAttribute('loading')).toBeTrue();
            expect(img.getAttribute('loading')).toBe('lazy');
        });

    });

    describe('toggle off - loading attribute', () => {

        let fixture: ComponentFixture<Test2Component>;

        beforeEach(async ()=> {
            fixture = await BuildTestBed(Test2Component, false);
        });

        it('does no change to loading attribute', () => {
            const elm = fixture.debugElement.nativeElement as HTMLElement;
            const img = elm.querySelector('img');

            expect(img).toBeDefined();
            expect(img.hasAttribute('loading')).toBeTrue();
            expect(img.getAttribute('loading')).toBe('eager');
        });

    });

    describe('toggle on - loading attribute', () => {

        let fixture: ComponentFixture<Test2Component>;

        beforeEach(async ()=> {
            fixture = await BuildTestBed(Test2Component, true);
        });

        it('does no change to loading attribute', () => {
            const elm = fixture.debugElement.nativeElement as HTMLElement;
            const img = elm.querySelector('img');

            expect(img).toBeDefined();
            expect(img.hasAttribute('loading')).toBeTrue();
            expect(img.getAttribute('loading')).toBe('eager');
        });

    });

});