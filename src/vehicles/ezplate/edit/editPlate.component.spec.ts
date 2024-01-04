import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { EditPlateComponent } from './editPlate.component';
import { DialogRef } from 'common/services';
import { IEditPlateInjectedValues, IEZTag, IStatus } from 'vehicles/interfaces';
import { FormControl, FormGroup, FormsModule, NgForm, NgModelGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'pipes/module';
import { By } from '@angular/platform-browser';

describe('component: EditPlateComponent', () => {

    let fixture: ComponentFixture<EditPlateComponent>;
    let component: EditPlateComponent;
    const dialogRef: DialogRef<IEditPlateInjectedValues> = jasmine.createSpyObj('dialogRef', ['close'], ['data']);

    const data: IEditPlateInjectedValues = {
        cmsContent: {Title: '', LongDescription: ''},
        header: 'test header',
        plate: {
            pbpStartDate: '2022-04-05T14:48:00.000Z',
            pbpEndDate: '2022-04-06T14:48:00.000Z'
        } as IEZTag,
        showStatus: true,
        statesList: [],
        savePlate: true,
        status: {} as IStatus
    };;

    (Object.getOwnPropertyDescriptor(dialogRef, 'data').get as jasmine.Spy).and.callFake(() => data);



    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [
                    EditPlateComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, MatSelectModule, CommonModule, PipesModule],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(EditPlateComponent);
        component = fixture.debugElement.componentInstance;
        component.originalVehicleData = {
            plate: {
                pbpEndDate: '2023-11-02T08:13:21.391-05:00',
                pbpStartDate: '2023-10-30T08:13:21.391-05:00'
            }
        };
    });

    describe('edit plate unit-tests', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });

        it('should initiate', () => {
            component.ngOnInit();
            expect(component.header).toEqual(data.header);
        });

        it('should check active field', () => {
            component.ngOnInit();
            expect(component.header).toEqual(data.header);

            data.plate.tagStatusDesc = 'Active';
            expect(component.isActive).toEqual(true);
        });

        it('should check plate status', () => {
            component.ngOnInit();

            expect(component.plateStatus).toEqual({} as IStatus);
        });
        it('should check plate data', () => {
            component.ngOnInit();

            expect(component.plate).toEqual(data.plate);
        });

        it('should set numberOfDays based on difference of start and end dates', () => {
            component.ngOnInit();

            component.startDateTime = new Date(2021, 12, 20, 1, 1, 1, 0);
            component.endDateTime = new Date(2021, 12, 25, 1, 1, 1, 0);
            spyOn(component, 'validationDateTime').and.returnValue();
            
            component.onDateEntered();

            expect(component.numberOfDays).toEqual(5);
            expect(component.validationDateTime).toHaveBeenCalled();
        });


        it('should set enddate as start date plus number of days', () => {
            component.startDateTime = new Date(2021, 12, 20, 1, 1, 1, 0);
            component.numberOfDays = 5;

            const newEndDateTime = new Date(2021, 12, 25, 1, 1, 1, 0);

            component.onNumberOfDaysEntered();

            expect(component.endDateTime).toEqual(newEndDateTime);
        });

        it('should set numberOfDays to 3', () => {
            component.ngOnInit();

            component.startDateTime = new Date(2021, 12, 20, 1, 1, 1, 0);
            component.endDateTime = new Date(2021, 12, 20, 1, 1, 1, 0);
            spyOn(component, 'validationDateTime').and.returnValue();

            component.onDateEntered();

            expect(component.numberOfDays).toEqual(3);
            expect(component.validationDateTime).toHaveBeenCalled();
        });
    });

    describe('exitModal', () => {

        it('closed modal', () => {
            component.startDateTime = new Date();
            component.endDateTime = new Date();
            spyOn(component, 'validationDateTime').and.returnValue();

            component.exitModal(true);

            expect(dialogRef.close).toHaveBeenCalledWith({
                ...data
            });


        });

        it('closed modal', () => {
            component.startDateTime = new Date();
            component.endDateTime = new Date();
            spyOn(component, 'validationDateTime').and.returnValue(null);
            component.isDateTimeInvalid = (false);

            component.exitModal(false);

            expect(dialogRef.close).toHaveBeenCalledWith({
                ...data
            });
           expect(data.plate).toEqual(component.originalVehicleData.plate);

        });
    });

    describe('validations', () => {
        beforeEach(() => {
            const form = fixture.debugElement.query(By.directive(NgForm));
            const ngForm = form.injector.get(NgForm);
            component.form = ngForm;
            component.form.controls['startDate'] = new FormGroup({
                calendarInput: new FormControl()
            });
            component.form.controls['endDate'] = new FormGroup({
                calendarInput: new FormControl()
            });
        });

        it('startDateTime less than current date should set isDateTimeInvalidMsg', () => {
            component.ngOnInit();

            component.startDateTime = new Date(2021, 12, 20, 1, 1, 1, 0);
            component.endDateTime = new Date(2021, 12, 25, 1, 1, 1, 0);
            component.startDatePickerState = false;

            component.validationDateTime();

            expect(component.isDateTimeInvalidMsg).toEqual('Start date can not be less than current date');
        });

        it('validationDateTime should keep isDateTimeInvalid false', () => {
            component.ngOnInit();

            component.startDateTime = new Date();
            component.endDateTime = new Date();
            component.endDateTime.setDate(component.startDateTime.getDate() + 1);

            component.validationDateTime();

            expect(component.isDateTimeInvalid).toBeFalse();
        });

        it('startDateTime is greater than endDateTime should set isDateTimeInvalidMsg', () => {
            component.ngOnInit();

            component.startDateTime = new Date(2021, 12, 26, 1, 1, 1, 0);
            component.endDateTime = new Date(2021, 12, 25, 1, 1, 1, 0);

            component.validationDateTime();

            expect(component.isDateTimeInvalidMsg).toEqual('Please select start date greater than end date');
        });

        it('endDateTime is greater than 7 years from startDateTime should set isDateTimeInvalidMsg', () => {
            component.ngOnInit();

            const currentDate = new Date();

            const newDate = new Date();
            newDate.setDate(currentDate.getDate() + 2557);

            component.startDateTime = currentDate;
            component.endDateTime = newDate;

            component.validationDateTime();

            expect(component.isDateTimeInvalidMsg).toEqual('Please select end date less than 2556 days');
        });
    });
});
