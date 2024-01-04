import { } from 'jasmine';

import { NgForm } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ActionButtonsComponent } from './actionButtons.component';

describe('action buttons component', () => {

    let fixture: ComponentFixture<ActionButtonsComponent>;
    let component: ActionButtonsComponent;
    let form: any;
   
    beforeEach(async () => {

        form = {} as NgForm;

        await TestBed
            .configureTestingModule({
                declarations: [ActionButtonsComponent],
                imports: [FlexLayoutModule],
                providers: [
                ]
            })            
            .compileComponents();

        fixture = TestBed.createComponent(ActionButtonsComponent);
        component = fixture.debugElement.componentInstance;
        component['parentForm'] = form;
        fixture.detectChanges();
    });

    describe('link + button presses', () => {

        it('calls main event when form valid', () => {
            let called = false;
            component.main.subscribe(() => called = true);

            form.submitted = true;
            form.valid = true;

            component.handleMainAction();
            expect(called).toBeTruthy();
        });

        it('does not call main event if form invalid', () => {
            let called = false;
            component.main.subscribe(() => called = true);

            form.submitted = true;
            form.valid = false;

            component.handleMainAction();
            expect(called).toBeFalsy();
        });

        it('calls alt event', () => {
            let called = false;
            component.alt.subscribe(() => called = true);
            component.handleAltAction();
            expect(called).toBeTruthy();
        });

        it('calls main event when form invalid', () => {
            form.onSubmit = () => { form.submitted = true; }; 

            form.submitted = false;

            component.handleMainAction();
            expect(form.submitted).toBeTruthy();
        });
    });    
});
