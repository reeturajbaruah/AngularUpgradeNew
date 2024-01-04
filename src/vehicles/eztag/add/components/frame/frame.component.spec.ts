import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { WindowRef } from 'common/providers';
import { PipesModule } from 'pipes/module';
import { AddTagFrameComponent } from './frame.component';
// import { stateNames } from '../../constants';
import { States as stateNames } from '../../states';
import { VehiclesManagerService } from 'vehicles/shared';

describe('component: AddTagFrameComponent', () => {

    let fixture: ComponentFixture<AddTagFrameComponent>;
    let component: AddTagFrameComponent;
    let windowRef: jasmine.SpyObj<Window>;
    let vehiclesManagerService: VehiclesManagerService;

    beforeEach(async () => {
        windowRef = jasmine.createSpyObj('window', ['scrollTo']);
        vehiclesManagerService = jasmine.createSpyObj('VehiclesManagerService', ['clearData']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddTagFrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: VehiclesManagerService, useFactory: () => vehiclesManagerService },
                    { provide: WindowRef, useFactory: () => windowRef }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(AddTagFrameComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });

    });

    describe('ngOnInit', () => {

        it('sets stepper correctly', async () => {


            component.cmsAddTagFrame = {
                step1: 'Vehicle Information',
                step2: 'EZ Tags Cart',
                step3: 'Delivery Method',
                step4: 'Review Order',
                step5: 'Receipt'

            };

            await component.ngOnInit();

            expect(component.steps).toEqual([
                { name: 'Vehicle Information', background: 'secondary' },
                { name: 'EZ Tags Cart', background: 'secondary' },
                { name: 'Delivery Method', background: 'secondary' },
                { name: 'Review Order', background: 'secondary' },
                { name: 'Receipt', background: 'secondary' }

            ]);

            expect(component.stepMap).toEqual({
                [stateNames.TagVehicleInformation]: 1,
                [stateNames.TagCart]: 2,
                [stateNames.TagDeliveryMethod]: 3,
                [stateNames.TagReviewOrder]: 4,
                [stateNames.TagReceipt]: 5,

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
