import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ResponseErrorService } from 'common/services';
import { IVehicleClass, VehicleService } from 'common/services/vehicleService/vehicle.service';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { changesStable, createFormWrap, TestingModule } from 'testing';
import { IVehicleInfo } from '../../../models';
import { VehicleInfoComponent } from './vehicleInfo.component';

describe('VehicleInfoComponent', () => {

    let fixture: ComponentFixture<VehicleInfoComponent>;
    let component: VehicleInfoComponent;
    let form: NgForm;
    let vehicleService: VehicleService;
    let responseService: any;

    beforeEach(async () => {

        vehicleService = jasmine.createSpyObj('vehicleService', ['getVehicleMakes', 'getModelYears', 'getClasses', 'getVehicleInformation']);
        responseService = jasmine.createSpyObj('responseService', ['displayErrorsFromResponse']);


        (vehicleService.getVehicleMakes as jasmine.Spy)
            .and.resolveTo([{ code: 'MAKE1', label: 'make1' }, { code: 'MAKE2', label: 'make2' }]);
        (vehicleService.getVehicleInformation as jasmine.Spy)
            .and.returnValue(
                {
                    classes:[{ label: '2-Axles', value: 2 } as IVehicleClass],
                    icons: [{ icon: '4235325234534534', value: 2 } as any]

                });

        await TestBed
            .configureTestingModule({
                declarations: [
                    VehicleInfoComponent
                ],
                imports: [FormsModule, TestingModule, MatSelectModule, PipesModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: VehicleService, useFactory: () => vehicleService },
                    { provide: ResponseErrorService, useFactory: () => responseService }
                ]
            })
            .compileComponents();

        const construct = await createFormWrap(VehicleInfoComponent, c => {
            c.vehicleInfo = {
                licState: null,
                licPlate: null,
                vehicleYear: null,
                vehicleModel: null,
                vehicleMake: null,
                vehicleColor: null,
                vehicleClassCode: null,
                vehicleClassDesc: null,
                temporaryLicPlate: false,
                nickname: null,
                motorcycle: false,
                isMotorcycleDisabled: true
            } as IVehicleInfo;
            c.vehicleClasses = [{} as IVehicleClass];
            c.modalCms = {
                vehicleInfoTitle: '',
                vehicleToolTipText: '',
                vehicleInfo: ''
            };
        });
        form = construct.form;
        fixture = construct.fixture;
        component = construct.component;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('validation', () => {
        const getField = (name: string) => (form.controls['vehicleInfoEntry'] as FormGroup).controls[name];

        it('should start with an invalid form', async () => {
            await changesStable(fixture);

            expect(form.valid).toBeFalsy();
        });

        it('should accept valid license plate numbers', async () => {
            component.plateIsReadOnly = false;
            component.vehicleInfo.licPlate = 'aAa451234512345';
            await changesStable(fixture);

            expect(getField('licensePlate').valid).toBeTruthy();
        });

        it('should reject invalid license plate numbers', async () => {
            component.plateIsReadOnly = false;
            component.vehicleInfo.licPlate = '';

            await changesStable(fixture);
            expect(getField('licensePlate').valid).toBeFalsy();

            component.vehicleInfo.licPlate = '!@#$%^&*';

            await changesStable(fixture);
            expect(getField('licensePlate').valid).toBeFalsy();

            component.vehicleInfo.licPlate = '1234512345123451';

            await changesStable(fixture);
            expect(getField('licensePlate').valid).toBeFalsy();
        });

        it('should accept valid vehicle model', async () => {

            component.vehicleInfo.vehicleModel = 'Ranger 57-,.\'';
            await changesStable(fixture);
            expect(getField('vehicleModel').valid).toBeTruthy();

            component.vehicleInfo.vehicleModel = '123456789012345678901234567890';
            await changesStable(fixture);
            expect(getField('vehicleModel').valid).toBeTruthy();
        });

        it('should reject invalid vehicle model', async () => {
            component.vehicleInfo.vehicleModel = '';
            await changesStable(fixture);
            expect(getField('vehicleModel').valid).toBeFalsy();

            component.vehicleInfo.vehicleModel = '!@#$%^&*';
            await changesStable(fixture);
            expect(getField('vehicleModel').valid).toBeFalsy();

            component.vehicleInfo.vehicleModel = '1234567890123456789012345678901';
            await changesStable(fixture);
            expect(getField('vehicleModel').valid).toBeFalsy();
        });

        it('should accept valid vehicle color', async () => {
            component.vehicleInfo.vehicleColor = 'Blue';
            await changesStable(fixture);
            expect(getField('vehicleColor').valid).toBeTruthy();

            component.vehicleInfo.vehicleColor = 'Blue42';
            await changesStable(fixture);
            expect(getField('vehicleColor').valid).toBeFalsy();

            component.vehicleInfo.vehicleColor = '12345678901234567890';
            await changesStable(fixture);
            expect(getField('vehicleColor').valid).toBeFalsy();
        });

        it('should reject invalid vehicle color', async () => {
            component.vehicleInfo.vehicleColor = '';
            await changesStable(fixture);
            expect(getField('vehicleColor').valid).toBeFalsy();

            component.vehicleInfo.vehicleColor = '123456789012345678901';
            await changesStable(fixture);
            expect(getField('vehicleColor').valid).toBeFalsy();
        });

        it('should accept valid vehicle nickname', async () => {
            component.vehicleInfo.nickname = '';
            await changesStable(fixture);
            expect(getField('vehicleNickname').valid).toBeTruthy();

            component.vehicleInfo.nickname = 'Ranger 57-,.\'';
            await changesStable(fixture);
            expect(getField('vehicleNickname').valid).toBeTruthy();

            component.vehicleInfo.nickname = '123456789012345678901234567890';
            await changesStable(fixture);
            expect(getField('vehicleNickname').valid).toBeTruthy();
        });

        it('should reject invalid vehicle nickname', async () => {
            component.vehicleInfo.nickname = '!@#$%^&*';
            await changesStable(fixture);
            expect(getField('vehicleNickname').valid).toBeFalsy();

            component.vehicleInfo.nickname = '1234567890123456789012345678901';
            await changesStable(fixture);
            expect(getField('vehicleNickname').valid).toBeFalsy();
        });

        //reimplement these when temp plate is implemented
        //it('should reject null value for paper plate question', () => {

        //    scope.vehicleInfo.temporaryLicPlate = null;
        //    scope.$digest();
        //    expect(scope.form.paperPlateOptions.$valid).toBeFalsy();
        //    expect(scope.form.paperPlateOptions.$invalid).toBeTruthy();
        //});

        //it('should set temporaryLicPlate to null when onBlur() is called and licPlate is changed', () => {

        //    scope.vehicleInfo.licPlate = 'MYPLATE123';
        //    directiveScope.onBlur();
        //    scope.vehicleInfo.temporaryLicPlate = true;
        //    scope.$digest();
        //    expect(scope.form.paperPlateOptions.$valid).toBeTruthy();
        //    expect(scope.form.paperPlateOptions.$invalid).toBeFalsy();

        //    scope.vehicleInfo.licPlate = 'MYPLATE123CHANGED';
        //    directiveScope.onBlur();
        //    scope.$digest();
        //    expect(scope.vehicleInfo.temporaryLicPlate).toBeNull();
        //    expect(scope.form.paperPlateOptions.$valid).toBeFalsy();
        //    expect(scope.form.paperPlateOptions.$invalid).toBeTruthy();
        //});


        //it('should accept 'Yes' for paper plate question', () => {

        //    scope.vehicleInfo.temporaryLicPlate = true;
        //    scope.$digest();
        //    expect(scope.form.paperPlateOptions.$valid).toBeTruthy();
        //    expect(scope.form.paperPlateOptions.$invalid).toBeFalsy();
        //});

        //it('should accept 'No' for paper plate question', () => {

        //    scope.vehicleInfo.temporaryLicPlate = false;
        //    scope.$digest();
        //    expect(scope.form.paperPlateOptions.$valid).toBeTruthy();
        //    expect(scope.form.paperPlateOptions.$invalid).toBeFalsy();
        //});
    });

    describe('classCodeAsNumber', () => {
        it('should return class code as integer 4', () => {
            component.vehicleInfo.vehicleClassCode = '4';
            expect(component.classCodeAsNumber).toBe(4);
        });

        it('should return class code as null', () => {
            component.vehicleInfo = null;
            expect(component.classCodeAsNumber).toBe(null);
        });

        it('should set class code to string 3', () => {

            component.classCodeAsNumber = 3;
            expect(component.vehicleInfo.vehicleClassCode).toBe('3');
        });

        it('should set class code to empty string', () => {
            component.classCodeAsNumber = null;
            expect(component.vehicleInfo.vehicleClassCode).toBe('');
        });

        it('should not set anything is vehicleInfo undefined', () => {
            component.vehicleInfo = null;
            component.classCodeAsNumber = 3;
            expect(component.vehicleInfo).toBe(null);
        });
    });

    describe('updateDescription', () => {
        it('should set vehicleClassDesc to correct classLookup', () => {
            spyOn(component, 'getVehicleImg').and.returnValue('1');
            component.vehicleClassesLookup = [{ value: 1, label: 'result' }];

            component.updateDescription(1);
            spyOn(component, 'getVehicleClassDesc').and.returnValue('2-Axles');
        });
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            (vehicleService.getModelYears as jasmine.Spy).and.returnValue(['2019', '2020', '2021']);
            (vehicleService.getVehicleInformation as jasmine.Spy)
            .and.returnValue(
                {
                    classes:[{ label: '2-Axles', value: 2 } as IVehicleClass],
                    icons: [{ icon: '4235325234534534', value: 2 } as any]

                });
            spyOn(component,'getVehicleImg').and.returnValue('');
        });

        it('should set the variables', () => {
            component.ngOnInit();

            expect(component.years).toEqual(['2019', '2020', '2021']);
            expect(component.vehicleClasses).toEqual([{ value: 2, label: '2-Axles' }]);
            expect(component.vehicleClassesLookup).toEqual([{ icon: '4235325234534534', value: 2 }]);
        });

        it('should set vehicle makes', fakeAsync(() => {
            const makeReturn = [{ code: 'ASD', label: 'Test' }];
            (vehicleService.getVehicleMakes as jasmine.Spy).and.resolveTo(makeReturn);

            component.ngOnInit();
            tick();
            fixture.detectChanges();

            expect(component.vehicleMakes).toBe(makeReturn);
        }));

        it('should throw error', fakeAsync(() => {
            (vehicleService.getVehicleMakes as jasmine.Spy).and.rejectWith('this the error');

            component.ngOnInit();
            tick();
            fixture.detectChanges();

            expect(responseService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
            expect(responseService.displayErrorsFromResponse).toHaveBeenCalledWith('this the error');
        }));
    });

    describe('getVehicleClassDesc', () => {
        it('should proper vehicle calss desc', () => {
            const axle = component.getVehicleClassDesc(2);
            expect(axle).toEqual('2-Axles');
        });
    });

    describe('getVehicleImg', () => {
        it('should proper img url', () => {
            component.vehicleClassesLookup = [
                {
                    value: 2,
                    icon: '0B4094E91FAC48E7A25FD2FA1105AF32'
                },
                {
                    value: 3,
                    icon: '9E3C59C3A2224E14939EE78E9259414E'
                },
                {
                    value: 4,
                    icon: '0B4094E91FAC48E7A25FD2FA1105AF32'
                },
                {
                    value: 5,
                    icon: '0B4094E91FAC48E7A25FD2FA1105AF32'
                },
                {
                    value: 6,
                    icon: '0B4094E91FAC48E7A25FD2FA1105AF32'
                },
                {
                    value: 8,
                    icon: '0B4094E91FAC48E7A25FD2FA1105AF32'
                }
            ];

            const img = component.getVehicleImg(2);

            expect(img).toEqual('-/media/0B4094E91FAC48E7A25FD2FA1105AF32.ashx');
        });
    });

});
