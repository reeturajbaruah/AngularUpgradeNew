import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AddPlateReviewComponent } from './reviewOrder.component';
import { VehiclesManagerService } from 'vehicles/shared';
import { CmsReplacementService } from 'cms/services';
import { DialogService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { StateDeclaration, StateService } from '@uirouter/angular';
import {
    IEzTagResponse,
    IPaymentInfoData
} from 'vehicles/interfaces';
import { BaseResponse } from 'common/interfaces';
import { ReviewOrderService } from 'vehicles/common';
import { AddPlateFrameComponent } from '../frame/frame.component';

describe('AddPlateReviewComponent', () => {

    let fixture: ComponentFixture<AddPlateReviewComponent>;
    let component: AddPlateReviewComponent;
    let state: StateService;
    let frame: AddPlateFrameComponent;
    let manager: jasmine.SpyObj<VehiclesManagerService>;
    let dialogService: DialogService;
    let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;
    let nextState: StateDeclaration;
    let reviewOrderService: jasmine.SpyObj<ReviewOrderService>;

    const currentUserMock: any = {
        rebillOptIn: true
    };

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        cmsReplacementService = jasmine.createSpyObj('cmsTextInsertionService', ['transformTemplate']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);
        manager = jasmine.createSpyObj('manager', ['getPaymentInfo', 'getVehicleInfoList',
            'getCurrentBalance', 'submitOrder', 'removeVehicleInfoItem', 'editVehicleInfoItem', 'clearData', 'getCurrentUser']);
        frame = jasmine.createSpyObj('frame', ['showStepper']);
        reviewOrderService = jasmine.createSpyObj('ReviewOrderService', ['subscribe', 'unsubscribe']);
        (manager.getCurrentUser as jasmine.Spy).and.resolveTo(currentUserMock);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddPlateReviewComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: AddPlateFrameComponent, useFactory: () => frame },
                    { provide: VehiclesManagerService, useFactory: () => manager },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacementService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: ReviewOrderService, useFactory: () => reviewOrderService }

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddPlateReviewComponent);
        component = fixture.debugElement.componentInstance;

        nextState = { name: 'Receipt' } as StateDeclaration;

        component.pageCms = {
            Title: 'Title',
            ShortDescription: 'So short',
            LongDescription: 'So long',
            RebillToolTip: ''
        } as any;

        component.cancellationModal = {
            Title: 'Title',
            ShortDescription: 'So short',
            LongDescription: 'So long',
            RebillToolTip: ''
        } as any;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should initialize values', async () => {
            cmsReplacementService.transformTemplate.and.returnValue('Cms Value!');
            manager.getPaymentInfo.and.resolveTo({ depositAmt: 30 } as IPaymentInfoData);
            manager.getCurrentBalance.and.returnValue(20);
            manager.getVehicleInfoList.and.returnValue([] as IEzTagResponse[]);

            await component.ngOnInit();

            expect(component.paymentDueInfo).toEqual({ depositAmt: 30 } as IPaymentInfoData);
            expect(component.cartTags).toEqual([] as IEzTagResponse[]);
            expect(component.currentBalance).toEqual(20);
            expect(component.pageCms.RebillToolTip).toEqual('Cms Value!');
        });
    });

    describe('addEzPlateReceiptClick', () => {
        it('calls submitOrder and goes to next state', async () => {
            manager.submitOrder.and.resolveTo({} as BaseResponse);

            await component.addEzPlateReceiptClick(nextState);

            expect(state.go).toHaveBeenCalled();
        });

        it('should not go to next state if submitOrder has an error', async () => {
            manager.submitOrder.and.resolveTo(null);

            await component.addEzPlateReceiptClick(nextState);

            expect(state.go).not.toHaveBeenCalled();
        });
    });

    describe('editVehicle', () => {
        it('should call edit method from service', () => {
            manager.editVehicleInfoItem.and.resolveTo();

            component.editVehicle({} as any, 1);

            expect(manager.editVehicleInfoItem).toHaveBeenCalledTimes(1);
        });
    });

    // describe('showReplenishmentModal', () => {
    //     it('should display modal', async () => {
    //         (dialogService.openSliderCentered as jasmine.Spy).and.returnValue({} as any);

    //         await component.showReplenishmentModal();

    //         expect(dialogService.openSliderCentered).toHaveBeenCalled();
    //     });
    // });

    describe('cancel', () => {
        it('calls clearData', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(null);

            await component.cancel({} as StateDeclaration);

            expect(manager.clearData).toHaveBeenCalled();
            expect(state.go).toHaveBeenCalled();
        });

        it('doesnt call clearData', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(true);

            await component.cancel({} as StateDeclaration);

            expect(manager.clearData).not.toHaveBeenCalled();
            expect(state.go).not.toHaveBeenCalled();
        });
    });
});
