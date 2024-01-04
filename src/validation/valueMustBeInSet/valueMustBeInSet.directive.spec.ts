import { } from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { TestingModule, changesStable } from 'testing';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { ValueMustBeInSetDirective } from './valueMustBeInSet.directive';

@Component({
    selector: 'test-wrapper',
    template: `
    <form #TheForm="ngForm" name="theForm">
    <mat-select
                #TestSelect="ngModel"
                [(ngModel)]="value"
                name="testSelect"
                valueMustBeInSet
                required>
        <mat-option *ngFor="let option of options" [value]="option.value">
        {{option.label}}!
        </mat-option>
    </mat-select>
    </form>
`
})
class TestWrapperComponent {

    constructor() {
        this.options = [
            { value: '1', label: '1' },
            { value: '2', label: '2' }
        ];
    }

    public options: { value: string; label: string }[];

    @ViewChild('TestSelect', { static: true, read: MatSelect }) select: MatSelect;
    @ViewChild('TheForm', { static: true, read: NgForm }) form: NgForm;
}

describe('valueMustBeInSet Validator', () => {

    let wrapper: TestWrapperComponent;
    let fixture: ComponentFixture<TestWrapperComponent>;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    TestWrapperComponent, MatSelect, ValueMustBeInSetDirective
                ],
                imports: [FormsModule, TestingModule, MatSelectModule],
                providers: [
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(TestWrapperComponent);
        wrapper = fixture.componentInstance;

        await changesStable(fixture);

    });

    it('can create components', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.select).toBeDefined();
    });

    it('validates when value is in set', async () => {
        wrapper.form.controls.testSelect.setValue('1');
        await changesStable(fixture);

        expect(wrapper.form.controls.testSelect.errors).toBeNull();
    });

    it('does not validate when value is not in set', async () => {
        wrapper.form.controls.testSelect.setValue('3');
        await changesStable(fixture);
        
        expect(wrapper.form.controls.testSelect.errors).toBeDefined();
        expect(wrapper.form.controls.testSelect.errors.valueMustBeInSet).toBeDefined();
    });

    it('re-validates when option list is updated', async () => {
        spyOn(wrapper.select.ngControl.control, 'updateValueAndValidity');

        await changesStable(fixture);
        expect(wrapper.select.ngControl.control.updateValueAndValidity).not.toHaveBeenCalled();

        wrapper.options.push({ value: '3', label: '3' });

        await changesStable(fixture);
        expect(wrapper.select.ngControl.control.updateValueAndValidity).toHaveBeenCalled();
    });

});
