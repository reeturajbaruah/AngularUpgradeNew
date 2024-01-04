import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MvuFrameComponent } from './frame.component';
import { WindowRef } from 'common/providers';
import { States as stateNames } from '../../states';
import { VehiclesManagerService } from 'vehicles/shared';

describe('MvuFrameComponent', () => {
    let component: MvuFrameComponent;
    let fixture: ComponentFixture<MvuFrameComponent>;
    let windowRef: jasmine.SpyObj<Window>;
    let vehiclesManagerService: VehiclesManagerService;

    beforeEach(async () => {
        windowRef = jasmine.createSpyObj('window', ['scrollTo']);
        vehiclesManagerService = jasmine.createSpyObj('VehiclesManagerService', ['clearData']);


        await TestBed.configureTestingModule({
            declarations: [MvuFrameComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: VehiclesManagerService, useFactory: () => vehiclesManagerService },
                { provide: WindowRef, useFactory: () => windowRef }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MvuFrameComponent);
        component = fixture.componentInstance;
        component.cmsMvuFrame = {
            step1: 'Upload',
            step2: 'Delivery Method',
            step3: 'Review Order',
            step4: 'Receipt'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {

        it('sets stepper correctly', () => {
            expect(component.steps).toEqual([
                { name: 'Upload', background: 'secondary' },
                { name: 'Delivery Method', background: 'secondary' },
                { name: 'Review Order', background: 'secondary' },
                { name: 'Receipt', background: 'secondary' }
            ]);

            expect(component.stepMap).toEqual({
                [stateNames.MvuUpload]: 1,
                [stateNames.MvuDeliveryMethod]: 2,
                [stateNames.MvuReviewOrder]: 3,
                [stateNames.MvuReceipt]: 4,
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
