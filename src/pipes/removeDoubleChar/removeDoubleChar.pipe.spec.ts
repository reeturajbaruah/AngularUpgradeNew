import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';
import { RemoveDoubleCharPipe } from './removeDoubleChar.pipe';

@Component({
    template: '<div>{{ val | removeDoubleChars }}</div>'
})
class RemoveDoubleCharPipeHostComponent {
    val: string;
}
describe('RemoveDoubleCharPipe', () => {

    let pipe: RemoveDoubleCharPipe;

    beforeEach((() => {
        pipe = new RemoveDoubleCharPipe();
    }));

    it('canary', () => {
        expect(true).toBe(true);
    });

    it('should remove a double @', () => {

        TestBed
            .configureTestingModule({
                declarations: [RemoveDoubleCharPipe, RemoveDoubleCharPipeHostComponent],
                providers: []
            })
            .compileComponents();

        const fixture = TestBed.createComponent(RemoveDoubleCharPipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.val = 'test@@test@@';
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedText = div.textContent;

        expect(transformedText).toBe('test@test@');
    });

    it('should remove any length of whitespace with a single whitespace', () => {
        TestBed
            .configureTestingModule({
                declarations: [RemoveDoubleCharPipe, RemoveDoubleCharPipeHostComponent],
                providers: []
            })
            .compileComponents();

        const fixture = TestBed.createComponent(RemoveDoubleCharPipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.val = 'test      test     ';
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedText = div.textContent;

        expect(transformedText).toBe('test test ');
    });

    it('should remove any length of periods with a single period', () => {
        TestBed
            .configureTestingModule({
                declarations: [RemoveDoubleCharPipe, RemoveDoubleCharPipeHostComponent],
                providers: []
            })
            .compileComponents();

        const fixture = TestBed.createComponent(RemoveDoubleCharPipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.val = 'test.....test.....';
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedText = div.textContent;

        expect(transformedText).toBe('test.test.');
    });

    it('should remove any length of dashes with a single dash', () => {
        TestBed
            .configureTestingModule({
                declarations: [RemoveDoubleCharPipe, RemoveDoubleCharPipeHostComponent],
                providers: []
            })
            .compileComponents();

        const fixture = TestBed.createComponent(RemoveDoubleCharPipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.val = 'test------test-----';
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedText = div.textContent;

        expect(transformedText).toBe('test-test-');
    });

    it('should remove any length of underscores with a single underscore', () => {
        TestBed
            .configureTestingModule({
                declarations: [RemoveDoubleCharPipe, RemoveDoubleCharPipeHostComponent],
                providers: []
            })
            .compileComponents();

        const fixture = TestBed.createComponent(RemoveDoubleCharPipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.val = 'test_____test______';
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedText = div.textContent;

        expect(transformedText).toBe('test_test_');
    });

    it('should remove any length of whitespace with a single whitespace', () => {
        TestBed
            .configureTestingModule({
                declarations: [RemoveDoubleCharPipe, RemoveDoubleCharPipeHostComponent],
                providers: []
            })
            .compileComponents();

        const fixture = TestBed.createComponent(RemoveDoubleCharPipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.val = 'test      test     ';
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedText = div.textContent;

        expect(transformedText).toBe('test test ');
    });


    it('should remove any of the following characters: <, >, single and double quote', () => {
        TestBed
            .configureTestingModule({
                declarations: [RemoveDoubleCharPipe, RemoveDoubleCharPipeHostComponent],
                providers: []
            })
            .compileComponents();

        const fixture = TestBed.createComponent(RemoveDoubleCharPipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.val = 't<es>t"test<';
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedText = div.textContent;

        expect(transformedText).toBe('testtest');
    });

    it('should return wtih no changes for empty string', () => {
        TestBed
            .configureTestingModule({
                declarations: [RemoveDoubleCharPipe, RemoveDoubleCharPipeHostComponent],
                providers: []
            })
            .compileComponents();

        const fixture = TestBed.createComponent(RemoveDoubleCharPipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.val = '';
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedText = div.textContent;

        expect(transformedText).toBe('');
    });

});
