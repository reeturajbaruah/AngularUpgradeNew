import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';
import { DefaultPipe } from './default.pipe';

@Component({
    template: '<div>{{ val | default: "default value" }}</div>'
})
class DefaultPipeHostComponent {
    val: any;
}
describe('DateWithTimeZonePipe', () => {

    let pipe: DefaultPipe;
    
    beforeEach((() => {
        pipe = new DefaultPipe();
    }));

    it('canary', () => {
        expect(true).toBe(true);
    });

    it('should display default value when input is null', () => {
        TestBed
            .configureTestingModule({
                declarations: [DefaultPipe, DefaultPipeHostComponent]
            })
            .compileComponents();

        const fixture = TestBed.createComponent(DefaultPipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.val = null;
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedValue = div.textContent.trim();

        expect(transformedValue).toBe('default value');
    });

    [undefined, null, false, 0, ''].forEach(falsyVal => {

        it(`should display default value when input is ${JSON.stringify(falsyVal)}`, () => {
            const transformedValue = pipe.transform(falsyVal, 'default');
            expect(transformedValue).toBe('default');
        });
    });

    ['Apple', 1, true, {}, []].forEach(truthy => {

        it(`should display value when input is ${JSON.stringify(truthy)}`, () => {
            const transformedValue = pipe.transform(truthy, 'default');
            expect(transformedValue).toBe(truthy);
        });
    });
    
});