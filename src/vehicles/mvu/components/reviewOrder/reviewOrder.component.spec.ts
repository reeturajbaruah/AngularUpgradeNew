import { } from 'jasmine';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MvuReviewOrderComponent } from './reviewOrder.component';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { MailingAddressService, VehiclesManagerService, WebApiService } from 'vehicles/shared';
import { IMailingInfo } from 'common/models';
import { CmsReplacementService } from 'cms/services';
import { DeliveryMethodType } from 'common/ui';
import { AccountService, CurrentUserService, DialogService, WebStorageService } from 'common/services';
import { VehicleService } from 'common/services';
import { PipesModule } from 'pipes/module';
import {
  IPaymentInfoData,
  IDeliveryMethodData
} from 'vehicles/interfaces';
import { MvuFrameComponent } from '../frame/frame.component';
import { BaseResponse } from 'common/interfaces';


describe('MvuReviewOrderComponent', () => {
    let component: MvuReviewOrderComponent;
    let fixture: ComponentFixture<MvuReviewOrderComponent>;
    let state: StateService;
    let parent: jasmine.SpyObj<MvuFrameComponent>;
    let vehiclesManagerService: jasmine.SpyObj<VehiclesManagerService>;
    let dialogService: DialogService;
    let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;
    let nextState: StateDeclaration;
    let accountService: jasmine.SpyObj<AccountService>;
    let webStorage: any;
    let vehicleService: jasmine.SpyObj<VehicleService>;
    let checkoutWebApiService: jasmine.SpyObj<WebApiService>;
    let mailingService: jasmine.SpyObj<MailingAddressService>;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;

    beforeEach(async () => {
        state = jasmine.createSpyObj('state', ['go']);
        cmsReplacementService = jasmine.createSpyObj('cmsTextInsertionService', ['transformTemplate']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);
        vehiclesManagerService = jasmine.createSpyObj('manager', ['getPaymentInfo', 'getVehicleInfoList', 'getDeliveryMethod',
            'getCurrentBalance', 'submitOrder', 'removeVehicleInfoItem', 'editVehicleInfoItem', 'clearData']);
        parent = jasmine.createSpyObj('parent', ['showStepper']);
        accountService = jasmine.createSpyObj('AccountService', ['getMailingInfo']);
        webStorage = jasmine.createSpyObj('webStorage', ['getValue']);
        vehicleService = jasmine.createSpyObj('VehicleService', ['destroyMvuDetails', 'getVehicleInformation']);
        checkoutWebApiService = jasmine.createSpyObj('checkoutWebApiService', ['mvuCheckout']);
        mailingService = jasmine.createSpyObj('mailingService', ['setMailingAddressOnAcctLevel', 'getMailingAddress']);
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);

    await TestBed.configureTestingModule({
            declarations: [MvuReviewOrderComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [PipesModule],
            providers: [
            { provide: StateService, useFactory: () => state },
            { provide: MvuFrameComponent, useFactory: () => parent },
            { provide: VehiclesManagerService, useFactory: () => vehiclesManagerService },
            { provide: CmsReplacementService, useFactory: () => cmsReplacementService },
            { provide: DialogService, useFactory: () => dialogService },
            { provide: AccountService, useFactory: () => accountService },
            { provide: VehicleService, useFactory: () => vehicleService },
            { provide: WebStorageService, useFactory: () => webStorage },
            { provide: WebApiService, useFactory: () => checkoutWebApiService },
            { provide: MailingAddressService, useFactory: () => mailingService },
            { provide: CurrentUserService, useFactory: () => currentUserService }
        ]
    })
        .compileComponents();

    fixture = TestBed.createComponent(MvuReviewOrderComponent);
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
        vehiclesManagerService.getPaymentInfo.and.resolveTo({ depositAmt: 30 } as IPaymentInfoData);
        vehiclesManagerService.getDeliveryMethod.and.returnValue({ deliveryMethod: DeliveryMethodType.Mail } as IDeliveryMethodData);
        accountService.getMailingInfo.and.resolveTo({ address1: 'Concise' } as IMailingInfo);
        vehiclesManagerService.getCurrentBalance.and.returnValue(20);
        currentUserService.getCurrentUser.and.returnValue({ rebillOptIn: true});
        await component.ngOnInit();

        expect(component.paymentDueInfo).toEqual({ depositAmt: 30 } as IPaymentInfoData);
        expect(component.deliveryMethod).toEqual({ deliveryMethod: 'mail' } as IDeliveryMethodData);
        expect(component.currentBalance).toEqual(20);
        expect(component.pageCms.RebillToolTip).toEqual('Cms Value!');
    });
    });

    describe('submit', () => {
        it('Sets address on account level calls mvuCheckout and goes to next state', async () => {
        mailingService.setMailingAddressOnAcctLevel.and.resolveTo(true);
        const res = checkoutWebApiService.mvuCheckout.and.resolveTo({} as BaseResponse);
        await component.submit(nextState);
        expect(mailingService.setMailingAddressOnAcctLevel).toHaveBeenCalled();
        expect(res).toBe(res);
        expect(state.go).toHaveBeenCalled();
    });

        it('Sets address on account level should not go to next state if mvuCheckout has an error', async () => {
        mailingService.setMailingAddressOnAcctLevel.and.resolveTo(true);
        const res = checkoutWebApiService.mvuCheckout.and.resolveTo(null);
        await component.submit(nextState);
        expect(mailingService.setMailingAddressOnAcctLevel).toHaveBeenCalled();
        expect(res).toBe(res);
        expect(state.go).not.toHaveBeenCalled();
    });
    });

    // describe('showTagsModal', () => {
    //   it('should display modal', async () => {
    //     (dialogService.openSliderCentered as jasmine.Spy).and.returnValue({} as any);

    //     await component.showTagsModal();

    //     expect(dialogService.openSliderCentered).toHaveBeenCalled();
    //   });
    // });

    describe('cancel', () => {
    it('calls clearData and destroyMvuDetails', async () => {
        (dialogService.openGenericModal as jasmine.Spy).and.returnValue(null);

        await component.cancel({} as StateDeclaration);

        expect(vehiclesManagerService.clearData).toHaveBeenCalled();
        expect(vehicleService.destroyMvuDetails).toHaveBeenCalled();
        expect(state.go).toHaveBeenCalled();
    });

    it('doesnt call clearData and destroyMvuDetails', async () => {
        (dialogService.openGenericModal as jasmine.Spy).and.returnValue(true);

        await component.cancel({} as StateDeclaration);

        expect(vehiclesManagerService.clearData).not.toHaveBeenCalled();
        expect(vehicleService.destroyMvuDetails).not.toHaveBeenCalled();
        expect(state.go).not.toHaveBeenCalled();
    });
  });

  describe('getVehicleClassDesc', () => {
    it('get the vehicle class description based on the code', ()=> {
        component.vehicleClassDescList = [{
            label: 'test',
            value: 1
        }];
        const desc = component.getVehicleClassDesc(1);

        expect(desc).toEqual('test');
    });

    it('should return null, if the code desnt match', ()=> {
        component.vehicleClassDescList = [{
            label: 'test',
            value: 1
        }];
        const desc = component.getVehicleClassDesc(2);

        expect(desc).toEqual(null);
    });
});
});

