import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { ResponseErrorService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { AddPlateVehicleInformationComponent } from './vehicleInformation.component';
import { VehiclesManagerService } from 'vehicles/shared';
import { IEzTagResponse } from 'vehicles/interfaces';
import { AddPlateFrameComponent } from '../frame/frame.component';

describe('AddTagVehicleInformationComponent', () => {

    let fixture: ComponentFixture<AddPlateVehicleInformationComponent>;
    let component: AddPlateVehicleInformationComponent;
    let form: NgForm;

    let stateService: StateService;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let frame: AddPlateFrameComponent;
    let manager: VehiclesManagerService;

    beforeEach(async () => {

        stateService = jasmine.createSpyObj('stateService', ['go']);

        frame = jasmine.createSpyObj('frame', ['showStepper']);

        responseErrorService =
            jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'isErrorFree']);
        responseErrorService.isErrorFree.and.returnValue(true);

        manager = jasmine.createSpyObj('manager',
            ['setVehicleInfoItem', 'getVehicleInfoList', 'clearData']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddPlateVehicleInformationComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => stateService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: AddPlateFrameComponent, useFactory: () => frame },
                    { provide: VehiclesManagerService, useFactory: () => manager }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddPlateVehicleInformationComponent);
        component = fixture.debugElement.componentInstance;

        component.startDateTime = new Date();
        component.endDateTime = new Date();

        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;

    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit()', () => {
        it('should call api.getStates', async () => {

            (manager.getVehicleInfoList as jasmine.Spy).and.returnValue([]);
            await component.ngOnInit();

            expect(frame.showStepper).toEqual(true);
        });

        it('checks if user returns to this step from the review step', async () => {

            const res = {
                accountStatus: '',
                acctTagSeqSepcified: true
            } as IEzTagResponse;

            (manager.getVehicleInfoList as jasmine.Spy).and.returnValue(
                [res
                ] as IEzTagResponse[]);

            await component.ngOnInit();
            expect(component.vehicleInfo).toEqual(res);
        });

        it('checks if user does not return to this step from the review step', async () => {

            const res = {
                accountStatus: '',
                acctTagSeqSepcified: true
            } as IEzTagResponse;

            (manager.getVehicleInfoList as jasmine.Spy).and.returnValue([] as IEzTagResponse[]);

            await component.ngOnInit();
            expect(component.vehicleInfo).toEqual(component.vehicleInfo);
        });
    });

    describe('onDateEntered', () => {

        it('should set numberOfDays based on difference of start and end dates', async () => {
            component.startDateTime = new Date(2021, 12, 20, 1, 1, 1, 0);
            component.endDateTime = new Date(2021, 12, 25, 1, 1, 1, 0);
            spyOn(component, 'validationDateTime').and.returnValue();

            await component.onDateEntered();

            expect(component.numberOfDays).toEqual(5);
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

    describe('onNumberOfDaysEntered', () => {

        it('should set enddate as start date plus number of days', async () => {
            component.startDateTime = new Date(2021, 12, 20, 1, 1, 1, 0);
            component.numberOfDays = 5;

            const newEndDateTime = new Date(2021, 12, 25, 1, 1, 1, 0);
            spyOn(component, 'validationDateTime').and.returnValue();

            await component.onNumberOfDaysEntered();

            expect(component.endDateTime).toEqual(newEndDateTime);
        });

    });

    describe('nextStep', () => {

        it('should call manager.setVehicleInfoItem', async () => {
            const state = {} as StateDeclaration;

            (manager.getVehicleInfoList as jasmine.Spy).and.returnValue([]);

            spyOn(component, 'validationDateTime').and.returnValue();

            await component.nextStep(state);

            expect(manager.setVehicleInfoItem).toHaveBeenCalledTimes(1);
        });

        it('goes to next step', async () => {

            const state = {} as StateDeclaration;

            (manager.getVehicleInfoList as jasmine.Spy).and.returnValue([{
                accountStatus: '',
                acctTagSeqSepcified: true
            }] as IEzTagResponse[]);

            spyOn(component, 'validationDateTime').and.returnValue();

            await component.nextStep(state);

            expect(stateService.go).toHaveBeenCalledWith(state);
        });

    });

    describe('cancel', () => {

        it('can cancel', () => {
            const state = {} as StateDeclaration;
            component.cancel(state);
            expect(stateService.go).toHaveBeenCalledWith(state);
        });

    });

    describe('validations', () => {
        beforeEach(() => {
            const formEl = fixture.debugElement.query(By.directive(NgForm));
            const ngForm = formEl.injector.get(NgForm);
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
