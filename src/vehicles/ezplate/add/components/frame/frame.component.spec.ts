import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { WindowRef } from 'common/providers';
import { PipesModule } from 'pipes/module';
import { AddPlateFrameComponent } from './frame.component';
import { States as stateNames } from '../../states';
import { VehiclesManagerService } from 'vehicles/shared';

describe('component: AddPlateFrameComponent', () => {

    let fixture: ComponentFixture<AddPlateFrameComponent>;
    let component: AddPlateFrameComponent;
    let windowRef: jasmine.SpyObj<Window>;
    let vehiclesManagerService: VehiclesManagerService;

    beforeEach(async () => {
        windowRef = jasmine.createSpyObj('window', ['scrollTo']);
        vehiclesManagerService = jasmine.createSpyObj('VehiclesManagerService', ['clearData']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddPlateFrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: VehiclesManagerService, useFactory: () => vehiclesManagerService },
                    { provide: WindowRef, useFactory: () => windowRef }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(AddPlateFrameComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });

    });

    describe('ngOnInit', () => {

        it('sets stepper correctly', async () => {


            component.cmsAddPlateFrame = {
                step1: 'Vehicle Information',
                step2: 'Review Order',
                step3: 'Receipt',
            };

            await component.ngOnInit();

            expect(component.steps).toEqual([
                { name: 'Vehicle Information', background: 'secondary' },
                { name: 'Review Order', background: 'secondary' },
                { name: 'Receipt', background: 'secondary' }
            ]);

            expect(component.stepMap).toEqual({
                [stateNames.PlateVehicleInformation]: 1,
                [stateNames.PlateReviewOrder]: 2,
                [stateNames.PlateReceipt]: 3
            });

        });
    });

    describe('scrollToTop', () => {
        it('should toggle hidden flag and scroll to top of page', waitForAsync(() => {

            component.isHidden = true;

            component.scrollToTop().then(() => {
                expect(component.isHidden).toBe(false);
                expect(windowRef.scrollTo).toHaveBeenCalledWith(0, 0);
            });
        }));
    });
});
