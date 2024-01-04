import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { } from 'jasmine';
import { HctraMatDateTimePickerWithInputComponent } from './hctraMatDateTimePickerWithInput.component';


describe('HctraMatDateTimePickerWithInputComponent', () => {

    let fixture: ComponentFixture<HctraMatDateTimePickerWithInputComponent>;
    let component: HctraMatDateTimePickerWithInputComponent;

    let form: jasmine.SpyObj<NgForm>;

    beforeEach(async () => {
        form = jasmine.createSpyObj('form', [], ['submitted']);


        await TestBed
            .configureTestingModule({
                declarations: [
                    HctraMatDateTimePickerWithInputComponent
                ],
                imports: [FormsModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: NgForm, useFactory: () => form }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(HctraMatDateTimePickerWithInputComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('submitted', () => {
        it('get submitted value from the injected form', () => {
            (Object.getOwnPropertyDescriptor(form, 'submitted').get as jasmine.Spy).and.returnValue(true);

            expect(component.submitted).toBeTrue();
        });
    });

    describe('dateInputChanged', () => {
        it('should emit that the date time model changed', () => {
            const dateTimeModelChangeSpy = jasmine.createSpyObj('dateTimeModelChange', ['emit']);
            component.dateTimeModelChange = dateTimeModelChangeSpy;
            component.dateTimeModel = new Date(2222, 1, 2, 3, 4, 5, 6);

            component.dateInputChanged();

            expect(component.dateTimeModelChange.emit).toHaveBeenCalledWith(new Date(2222, 1, 2, 3, 4, 5, 6));
        });
    });

});
