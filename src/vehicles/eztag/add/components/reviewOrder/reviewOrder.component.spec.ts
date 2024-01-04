import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AddTagReviewOrderComponent } from './reviewOrder.component';
import { MailingAddressService, VehiclesManagerService } from 'vehicles/shared';
import { PipesModule } from 'pipes/module';
import { StateDeclaration, StateService } from '@uirouter/angular';
import {
    IEzTagResponse,
    IPaymentInfoData,
    IDeliveryMethodData
} from 'vehicles/interfaces';

import { DeliveryMethodType } from 'common/ui';
import { ReviewOrderService } from 'vehicles/common';
import { AddTagFrameComponent } from '../frame/frame.component';
import { CmsReplacementService } from 'cms/services';
import {  DialogService } from 'common/services';
import { IMailingInfo } from 'common/models';
import { BaseResponse } from 'common/interfaces';
import { VehicleModalCms } from 'vehicles/shared';

describe('AddTagReviewOrderComponent', () => {

    let fixture: ComponentFixture<AddTagReviewOrderComponent>;
    let component: AddTagReviewOrderComponent;
    let state: StateService;
    let parent: jasmine.SpyObj<AddTagFrameComponent>;
    let manager: jasmine.SpyObj<VehiclesManagerService>;
    let dialogService: DialogService;
    let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;
    let nextState: StateDeclaration;
    let reviewOrderService: jasmine.SpyObj<ReviewOrderService>;
    let mailingService: jasmine.SpyObj<MailingAddressService>;

    const currentUserMock: any = {
        rebillOptIn: true
    };

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        cmsReplacementService = jasmine.createSpyObj('cmsTextInsertionService', ['transformTemplate']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);
        manager = jasmine.createSpyObj('manager', ['getPaymentInfo', 'getVehicleInfoList', 'getDeliveryMethod',
            'getCurrentBalance', 'submitOrder', 'removeVehicleInfoItem', 'editVehicleInfoItem', 'clearData', 'getCurrentUser']);
        parent = jasmine.createSpyObj('parent', ['showStepper']);
        reviewOrderService = jasmine.createSpyObj('ReviewOrderService', ['subscribe', 'unsubscribe']);
        mailingService = jasmine.createSpyObj('mailingService', ['setMailingAddressOnAcctLevel', 'getMailingAddress']);

        (manager.getCurrentUser as jasmine.Spy).and.resolveTo(currentUserMock);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddTagReviewOrderComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: AddTagFrameComponent, useFactory: () => parent },
                    { provide: VehiclesManagerService, useFactory: () => manager },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacementService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: ReviewOrderService, useFactory: () => reviewOrderService },
                    { provide: MailingAddressService, useFactory: () => mailingService }

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddTagReviewOrderComponent);
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
            manager.getVehicleInfoList.and.returnValue([] as IEzTagResponse[]);
            manager.getDeliveryMethod.and.returnValue({ deliveryMethod: DeliveryMethodType.Mail } as IDeliveryMethodData);
            mailingService.getMailingAddress.and.resolveTo({ address1: 'Concise' } as IMailingInfo);
            manager.getCurrentBalance.and.returnValue(20);

            await component.ngOnInit();

            expect(component.paymentDueInfo).toEqual({ depositAmt: 30 } as IPaymentInfoData);
            expect(component.cartTags).toEqual([] as IEzTagResponse[]);
            expect(component.deliveryMethod).toEqual({ deliveryMethod: 'mail' } as IDeliveryMethodData);
            expect(component.currentBalance).toEqual(20);
            expect(component.pageCms.RebillToolTip).toEqual('Cms Value!');
        });
    });

    describe('addEzTagReceiptClick', () => {
        it('updates account address on account level, calls submitOrder and goes to next state', async () => {
            mailingService.setMailingAddressOnAcctLevel.and.resolveTo(true);
            manager.submitOrder.and.resolveTo({} as BaseResponse);

            await component.addEzTagReceiptClick(nextState);
            expect(mailingService.setMailingAddressOnAcctLevel).toHaveBeenCalled();
            expect(state.go).toHaveBeenCalled();
        });

        it('should not go to next state if submitOrder has an error', async () => {
            manager.submitOrder.and.resolveTo(null);

            await component.addEzTagReceiptClick(nextState);

            expect(state.go).not.toHaveBeenCalled();
        });
    });

    describe('removeVehicle', () => {
        it('should call remove method from service', () => {
            manager.removeVehicleInfoItem.and.resolveTo();

            component.removeVehicle(1);

            expect(manager.removeVehicleInfoItem).toHaveBeenCalledTimes(1);
        });
    });

    describe('editVehicle', () => {
        it('updates the licence plate if this plate is already in the cart but is the plate being updated', async () => {

            component.cartTags = [{
                licPlate: 'PLATE1',
                licState: 'TX'
            } as IEzTagResponse,
            {
                licPlate: 'PLATE2',
                licState: 'TN'
            } as IEzTagResponse];

            component.addAdditionalTagCms = { ErrorPlateExistsInCart: 'error' } as VehicleModalCms;

            component.editVehicle({ licPlate: 'PLATE2', licState: 'TX' } as any, 1);
            expect(manager.editVehicleInfoItem).toHaveBeenCalled();
        });

        it('does not update the licence plate if this plate is already in the cart', async () => {

            component.cartTags = [{
                licPlate: 'PLATE1',
                licState: 'TX'
            } as IEzTagResponse,
            {
                licPlate: 'PLATE2',
                licState: 'TX'
            } as IEzTagResponse];

            component.addAdditionalTagCms = { ErrorPlateExistsInCart: 'error' } as VehicleModalCms;

            component.editVehicle({ licPlate: 'PLATE2', licState: 'TX' } as any, 0);
            expect(manager.editVehicleInfoItem).not.toHaveBeenCalled();
        });

        it('updates the licence plate and call editVehicleInfoItem for new plate', async () => {

            component.cartTags = [{
                licPlate: 'plate1'
            } as IEzTagResponse,
            {
                licPlate: 'plate2'
            } as IEzTagResponse];

            component.editVehicle({ licPlate: 'plate3' } as any, 0);

            expect(manager.editVehicleInfoItem).toHaveBeenCalled();
        });
    });

    describe('editDeliveryMethod', () => {
        it('should go to previous state', () => {
            component.editDeliveryMethod();

            expect(state.go).toHaveBeenCalledWith('AddTag.TagDeliveryMethod');
        });
    });

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
