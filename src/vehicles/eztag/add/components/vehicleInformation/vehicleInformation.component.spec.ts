import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { ResponseErrorService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { AddTagVehicleInformationComponent } from './vehicleInformation.component';
import { VehiclesManagerService } from 'vehicles/shared';
import { IEzTagResponse } from 'vehicles/interfaces';
import { AddTagFrameComponent } from '../frame/frame.component';

describe('AddTagVehicleInformationComponent', () => {

    let fixture: ComponentFixture<AddTagVehicleInformationComponent>;
    let component: AddTagVehicleInformationComponent;
    let form: NgForm;

    let stateService: StateService;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
  
    let frame: AddTagFrameComponent;
    let manager: VehiclesManagerService;

    beforeEach(async () => {

        stateService = jasmine.createSpyObj('stateService', ['go']);

        frame = jasmine.createSpyObj('frame', ['showStepper']);

        responseErrorService =
            jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'isErrorFree']);
        responseErrorService.isErrorFree.and.returnValue(true);

        manager = jasmine.createSpyObj('manager',
            ['setVehicleInfoItem','getVehicleInfoList']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddTagVehicleInformationComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => stateService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: AddTagFrameComponent, useFactory: () => frame },
                    { provide: VehiclesManagerService, useFactory: () => manager }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddTagVehicleInformationComponent);
        component = fixture.debugElement.componentInstance;

        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('nextStep', () => {

        it('should call manager.setVehicleInfoItem', async () => {
            const state = {} as StateDeclaration;

            (manager.getVehicleInfoList as jasmine.Spy).and.returnValue([]);
            await component.nextStep(state);

            expect(manager.setVehicleInfoItem).toHaveBeenCalledTimes(1);
        });

        it('goes to next step', async () => {

            const state = {} as StateDeclaration;

            (manager.getVehicleInfoList as jasmine.Spy).and.returnValue([{
                accountStatus: '',
                acctTagSeqSepcified: true
            }] as IEzTagResponse[]);

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

});
