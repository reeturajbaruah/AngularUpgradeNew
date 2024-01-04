import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { UrlPaths, StateNames } from 'constants/module';
import { PipesModule } from 'pipes/module';
import {
    AccountDashboardService,
    GetVehiclesDataResponse,
    VehicleSectionData,
    SimpleEzPlate,
    SimpleEzTag
} from '../../services';
import { VehiclesComponent } from './vehicles.component';

describe('component: account-dashboard-vechicles', () => {

    let fixture: ComponentFixture<VehiclesComponent>;
    let component: VehiclesComponent;
    let accountDashboardService: AccountDashboardService;
    let state: StateService;
    let urlPaths: UrlPaths;

    beforeEach(async () => {

        accountDashboardService = jasmine.createSpyObj('accountDashboardService', ['getVehiclesData']);
        state = jasmine.createSpyObj('state', ['go']);

        urlPaths = new UrlPaths();

        await TestBed
            .configureTestingModule({
                declarations: [
                    VehiclesComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: AccountDashboardService, useFactory: () => accountDashboardService },
                    { provide: StateService, useFactory: () => state },
                    { provide: UrlPaths, useFactory: () => urlPaths }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(VehiclesComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        beforeEach(() => {
            spyOn<any>(component, 'getVehiclesData').and.callFake(() => { });
        });

        it('should call getVehiclesData 1 time', () => {
            //act
            component['ngOnInit']();

            //assert
            expect(component.getVehiclesData).toHaveBeenCalledTimes(1);
        });

    });

    describe('getVehiclesData', () => {

        it('should call getVehiclesData', async () => {

            const vehicleData: VehicleSectionData = {
                ezTags: [
                    {
                        vehicleInfo: {
                            nickname: null,
                            plateState: 'TX',
                            plateNumber: 'BBB4567',
                            status: 'PENDING ACTIVATION'
                        },
                        make: 'HYUNDAI',
                        model: 'ELANTRA',
                        year: '2018'
                    }],
                ezPlates: [
                    {
                        vehicleInfo: {
                            nickname: 'd',
                            plateState: 'TX',
                            plateNumber: 'GGG1234',
                            status: 'ACTIVE'
                        },
                        startDate: new Date('1/1/2014'),
                        endDate: new Date('1/1/2016'),
                    },
                ],
                totalEzTagCount: 1,
                totalEzPlateCount: 1
            };

            const fakeResponse: GetVehiclesDataResponse = {
                // eslint-disable-next-line object-shorthand
                vehicleData: vehicleData,
                accountStatus: null,
                alerts: [],
                errors: [],
                exception: null,
                sessionTimedOut: null
            };

            (accountDashboardService.getVehiclesData as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getVehiclesData();

            expect(accountDashboardService.getVehiclesData).toHaveBeenCalledTimes(1);
            expect(component.noData).toBe(false);

        });

        it('should set noDate to true if no ezTag or ezPlate data', async () => {

            const vehicleData: VehicleSectionData = {
                ezTags: [],
                ezPlates: [],
                totalEzTagCount: 0,
                totalEzPlateCount: 0
            };

            const fakeResponse: GetVehiclesDataResponse = {
                // eslint-disable-next-line object-shorthand
                vehicleData: vehicleData,
                accountStatus: null,
                alerts: [],
                errors: [],
                exception: null,
                sessionTimedOut: null
            };

            (accountDashboardService.getVehiclesData as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getVehiclesData();

            expect(component.noData).toBe(true);
        });
    });

    describe('viewVehiclesClick', () => {
        it('should go to Vehicles page', () => {

            //Act
            component.viewVehiclesClick();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);

        });
    });

    describe('pendingActivationClick', () => {
        it('should go to Activation page', () => {

            //Act
            component.pendingActivationClick();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);

        });
    });

    describe('tagClick', () => {
        it('should set properties for Tag', () => {

            //Act
            component.tagClick();

            //Assert
            expect(component.ezTagsSelected).toEqual(true);

        });
    });

    describe('plateClick', () => {
        it('should set properties for Plate', () => {

            //Act
            component.plateClick();

            //Assert
            expect(component.ezPlatesSelected).toEqual(true);

        });
    });
});
