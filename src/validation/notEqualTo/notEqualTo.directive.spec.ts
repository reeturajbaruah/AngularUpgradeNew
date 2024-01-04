import { } from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TestingModule, changesStable } from 'testing';
import { NotEqualToDirective } from './notEqualTo.directive';

@Component({
    selector: 'test-wrapper',
    template: `
    <form #TheForm="ngForm" name="theForm">
    <input
           #TestInput1Template="ngModel"
           [(ngModel)]="value1"
           name="testInput1"
           required>
    <input
           #TestInput2="ngModel"
           [(ngModel)]="value2"
           name="testInput2"
           [notEqualTo]="value1"
           required>
    </form>
`
})
class TestWrapperComponent {
    public value1;
    public value2;

    constructor() {
        this.value1 = '';
        this.value2 = '';
    }

    @ViewChild('TheForm', { static: true, read: NgForm }) form: NgForm;
}

describe('NotEqualToDirective validator', () => {

    let wrapper: TestWrapperComponent;
    let fixture: ComponentFixture<TestWrapperComponent>;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    TestWrapperComponent, NotEqualToDirective
                ],
                imports: [FormsModule, TestingModule],
                providers: [
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(TestWrapperComponent);
        wrapper = fixture.componentInstance;

        await changesStable(fixture);

    });

    it('can create component', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.form).toBeDefined();
    });

    it('does not validate when value2 is not equal to value1', async () => {
        wrapper.form.controls.testInput1.setValue('2');
        wrapper.form.controls.testInput2.setValue('1');
        await changesStable(fixture);

        expect(wrapper.form.controls.testInput2.errors).toBeNull();
    });

    it('does validates when value2 is equal to value1', async () => {
        wrapper.form.controls.testInput1.setValue('3');
        wrapper.form.controls.testInput2.setValue('3');

        await changesStable(fixture);

        expect(wrapper.form.controls.testInput2.errors).toBeDefined();
        expect(wrapper.form.controls.testInput2.errors.notEqualTo).toBeDefined();
    });

    it('does validate when value2 changes after value 1 and are equal', async () => {
        wrapper.form.controls.testInput1.setValue('3');
        wrapper.form.controls.testInput2.setValue('4');
        await changesStable(fixture);

        wrapper.form.controls.testInput2.setValue('3');
        await changesStable(fixture);

        expect(wrapper.form.controls.testInput2.errors).toBeDefined();
        expect(wrapper.form.controls.testInput2.errors.notEqualTo).toBeDefined();
    });
    it('does validate when value1 changes after value 2 and are equal', async () => {
        wrapper.form.controls.testInput2.setValue('3');
        wrapper.form.controls.testInput1.setValue('4');
        await changesStable(fixture);

        wrapper.form.controls.testInput1.setValue('3');
        await changesStable(fixture);

        expect(wrapper.form.controls.testInput2.errors).toBeDefined();
        expect(wrapper.form.controls.testInput2.errors.notEqualTo).toBeDefined();
    });
    it('does not validate when value2 changes after value 1 and are not equal', async () => {
        wrapper.form.controls.testInput1.setValue('3');
        wrapper.form.controls.testInput2.setValue('4');
        await changesStable(fixture);

        wrapper.form.controls.testInput2.setValue('5');
        await changesStable(fixture);

        expect(wrapper.form.controls.testInput2.errors).toBeNull();
    });
    it('does not validate when value1 changes after value 2 and are not equal', async () => {
        wrapper.form.controls.testInput2.setValue('3');
        wrapper.form.controls.testInput1.setValue('4');
        await changesStable(fixture);

        wrapper.form.controls.testInput1.setValue('5');
        await changesStable(fixture);

        expect(wrapper.form.controls.testInput2.errors).toBeNull();
    });
});
