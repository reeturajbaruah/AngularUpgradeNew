import { } from 'jasmine';

import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ErrorMessagesComponent } from './errorMessages.component';
import { ErrorMessageComponent } from './errorMessage.component';
import { changesStable, createFormWrap } from 'testing';

@Component({
    selector: 'test-wrap',
    template: `
    <error-messages [errors]="errors" [activeBeforeSubmit]="activeBeforeSubmit">
        <error-message rule='pattern'>this is a pattern rule</error-message>
        <error-message rule='required'>this is a required rule</error-message>
    </error-messages>
`
})
class TestWrapperComponent {
    @Input() errors: ValidationErrors | ValidationErrors[];
    @Input() activeBeforeSubmit: boolean;
}

describe('errorMessages Component', () => {

    let fixture: ComponentFixture<NgForm>;
    let wrapper: TestWrapperComponent;
    let component: ErrorMessagesComponent;
    let form: NgForm;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    TestWrapperComponent,
                    ErrorMessagesComponent,
                    ErrorMessageComponent
                ],
                imports: [
                    FormsModule, CommonModule
                ],
                providers: [
                   
                ]
            })
            .compileComponents();

        const construct = await createFormWrap(TestWrapperComponent, () => { });

        form = construct.form;
        wrapper = construct.component;
        fixture = construct.fixture;
        component = fixture.debugElement.query(By.directive(ErrorMessagesComponent)).componentInstance;

        await changesStable(fixture);
    });

    it('can create component', () => {
        expect(component).toBeDefined();
    });

    it('can show no errors when form not submitted', async () => {

        wrapper.activeBeforeSubmit = false;
        wrapper.errors = { pattern: true };

        await changesStable(fixture);

        expect(component.rules.some(rule => rule.isVisible)).toBeFalsy();
    });

    it('can show errors when form is submitted', async () => {

        wrapper.activeBeforeSubmit = false;
        wrapper.errors = { pattern: true };
        form.onSubmit(null);
        await changesStable(fixture);

        const visibleMessages = component.rules.filter(rule => rule.isVisible);
        
        expect(form.submitted).toBeTruthy();
        expect(visibleMessages.length).toBe(1);
        expect(visibleMessages[0].rule).toBe('pattern');

    });

    it('can show error when form is not submitted', async () => {
        wrapper.activeBeforeSubmit = true;
        wrapper.errors = { pattern: true };

        await changesStable(fixture);
        const visibleMessages = component.rules.filter(rule => rule.isVisible);

        expect(visibleMessages.length).toBe(1);
        expect(visibleMessages[0].rule).toBe('pattern');
    });

    it('can update what errors are shown', async () => {

        wrapper.activeBeforeSubmit = true;
        wrapper.errors = { pattern: true };
        
        await changesStable(fixture);

        const visibleMessages1 = component.rules.filter(rule => rule.isVisible);

        expect(visibleMessages1.length).toBe(1);
        expect(visibleMessages1[0].rule).toBe('pattern');

        wrapper.errors = { required: true };

        await changesStable(fixture);

        const visibleMessages2 = component.rules.filter(rule => rule.isVisible);

        expect(visibleMessages2.length).toBe(1);
        expect(visibleMessages2[0].rule).toBe('required');
    });

    it('can merge errors', async () => {
        wrapper.activeBeforeSubmit = true;
        wrapper.errors = [{ pattern: true }, { required: true }];

        await changesStable(fixture);
        component.ngOnChanges();
        const visibleMessages = component.rules.filter(rule => rule.isVisible);

        expect(visibleMessages.length).toBe(2);
        expect(visibleMessages[0].rule).toBe('pattern');
        expect(visibleMessages[1].rule).toBe('required');
    });

});
