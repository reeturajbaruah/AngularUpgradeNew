import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';
import { CollapsedClassPipe } from './collapsedClass.pipe';

@Component({
    template: '<div>{{ down | collapsedClass }}</div>'
})
class ChevronDownClassPipeHostComponent {
    down: boolean;
}
describe('CollapsedClassPipe', () => {

    let pipe: CollapsedClassPipe;

    beforeEach((() => {
        pipe = new CollapsedClassPipe();
    }));

    it('canary', () => {
        expect(true).toBe(true);
    });

    it('should return glyphicon glyphicon-chevron-down when collapsed false in test bed', () => {
        TestBed
            .configureTestingModule({
                declarations: [CollapsedClassPipe, ChevronDownClassPipeHostComponent]
            })
            .compileComponents();

        const fixture = TestBed.createComponent(ChevronDownClassPipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.down = false;
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedValue = div.textContent.trim();

        expect(transformedValue).toBe('glyphicon glyphicon-chevron-down');
    });

    it('should return glyphicon glyphicon-chevron-down when collapsed false', () => {
        const result = pipe.transform(false);
        expect(result).toBe('glyphicon glyphicon-chevron-down');
    });

    it('should return glyphicon glyphicon-chevron-right when collapsed true', () => {
        const result = pipe.transform(true);
        expect(result).toBe('glyphicon glyphicon-chevron-right');
    });
});