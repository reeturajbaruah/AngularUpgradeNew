import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { AddTagReceiptComponent } from './receipt.component';
import { CommonModule } from 'common/module';
import { ICmsReceiptContent } from './receipt.interface';
import { VehiclesManagerService } from 'vehicles/shared';
import { IPaymentInfoData } from 'vehicles/interfaces';
import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';
import { IDeliveryMethodData } from 'vehicles/interfaces';
import { AccountService } from 'common/services';
import { DeliveryMethodType } from 'common/ui';
import { States as SharedStates } from 'vehicles/shared';
import { AddTagFrameComponent } from '../frame/frame.component';
import { StorefrontUtilityService } from '../../../../../storefront/services/storefrontUtility.service';


describe('AddTagReceiptComponent', () => {

    let fixture: ComponentFixture<AddTagReceiptComponent>;
    let component: AddTagReceiptComponent;
    const state: StateService = jasmine.createSpyObj('state', ['go']);
    const frame: AddTagFrameComponent = jasmine.createSpyObj('frame', ['']);

    const manager: VehiclesManagerService = jasmine.createSpyObj('manager', ['getPaymentInfo', 'getMailingInfo', 'getBillingInfo', 'getCurrentUser', 'getVehicleInfoList',
        'getStepperData', 'getDeliveryMethod', 'clearData']);
    const accountService: AccountService = jasmine.createSpyObj('AccountService', ['getMailingInfo']);

    // const storeFrontUtilityService: any = jasmine.createSpyObj('storeFrontUtilityService', null, {
    //     webStoreData: {
    //         fullSiteMode: false,
    //     },
    //     isRunningAsKiosk: false
    // });
    const storeFrontUtilityService: any = jasmine.createSpyObj('storeFrontUtilityService', null, ['webStoreData', 'isRunningAsKiosk']);
    // const storeFrontUtilityService = {
    //     webStoreData: {
    //         fullSiteMode: false,
    //     },
    //     isRunningAsKiosk: false
    // };

    const cms = {
        LongDescription: 'description for delivery method By Mail',
        ShortDescription: '',
        paymentReceivedOn: '',
        paymentAmount: '',
        replenishAmt: '',
        accountInfo: '',
        accountName: '',
        accountNumber: '',
        billingInfo: '',
        tagsOrdered: '',
        tagsRequested: '',
        accountDashboard: '',
        manageMyVehicles: '',
        tagStorePickup: 'description for delivery method Store Pick up'

    } as ICmsReceiptContent;

    const paymentInfoMock = {
        depositAmt: 0,
        tagAmount: 0,
        tagSalesAmt: 0,
        totalAmt: 10,
        transactionId: 11231,

    } as IPaymentInfoData;

    const currentUserMock: any = {
        acctId: 6009193728,
        firstName: 'HANNAH',
        lastName: 'WRIGHT',
        rebillOptIn: true
    };

    const deliveryMethodMock: IDeliveryMethodData = {
        deliveryMethod: 'mail'
    };

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddTagReceiptComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, CommonModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: AddTagFrameComponent, useFactory: () => frame },
                    { provide: StorefrontUtilityService, useFactory: () => storeFrontUtilityService },
                    { provide: VehiclesManagerService, useFactory: () => manager },
                    { provide: AccountService, useFactory: () => accountService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddTagReceiptComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsContent = cms;

        (Object.getOwnPropertyDescriptor(storeFrontUtilityService, 'webStoreData')?.get as jasmine.Spy<() => any>).and.returnValue({ fullSiteMode: false });
    });

    it('should pass', () => {
        expect(true).toBe(true);
    });


    it('checks kiosk', async () => {
        (manager.getPaymentInfo as jasmine.Spy).and.resolveTo(paymentInfoMock);
        (manager.getCurrentUser as jasmine.Spy).and.resolveTo(currentUserMock);
        (manager.getDeliveryMethod as jasmine.Spy).and.returnValue(deliveryMethodMock);
        (Object.getOwnPropertyDescriptor(storeFrontUtilityService, 'isRunningAsKiosk')?.get as jasmine.Spy<() => boolean>).and.returnValue(false);
        await component.ngOnInit();
        expect(component.isKiosk).toBeFalse();
    });

    it('checks kiosk to be true', async () => {
        (manager.getPaymentInfo as jasmine.Spy).and.resolveTo(paymentInfoMock);
        (manager.getCurrentUser as jasmine.Spy).and.resolveTo(currentUserMock);
        (manager.getDeliveryMethod as jasmine.Spy).and.returnValue(deliveryMethodMock);
        (Object.getOwnPropertyDescriptor(storeFrontUtilityService, 'isRunningAsKiosk')?.get as jasmine.Spy<() => boolean>).and.returnValue(true);
        await component.ngOnInit();
        expect(component.isKiosk).toBeTrue();
    });

    it('checks delievery method', async () => {
        (manager.getPaymentInfo as jasmine.Spy).and.resolveTo(paymentInfoMock);
        (manager.getCurrentUser as jasmine.Spy).and.resolveTo(currentUserMock);
        (manager.getDeliveryMethod as jasmine.Spy).and.returnValue(deliveryMethodMock);
        await component.ngOnInit();
        expect(component.deliveryMethod).toEqual('Delivery Method:By Mail');
    });

    it('checks account info', async () => {
        (manager.getPaymentInfo as jasmine.Spy).and.resolveTo(paymentInfoMock);
        (manager.getCurrentUser as jasmine.Spy).and.returnValue(currentUserMock);
        (manager.getDeliveryMethod as jasmine.Spy).and.returnValue(deliveryMethodMock);
        await component.ngOnInit();
        expect(component.actName).toEqual('HANNAH WRIGHT');
        expect(component.actNumber).toEqual(6009193728);
        expect(component.isOptIn).toEqual(true);
    });

    it('checks payment info', async () => {
        (manager.getPaymentInfo as jasmine.Spy).and.returnValue(paymentInfoMock);
        (manager.getCurrentUser as jasmine.Spy).and.returnValue(currentUserMock);
        (manager.getDeliveryMethod as jasmine.Spy).and.returnValue(deliveryMethodMock);
        await component.ngOnInit();
        expect(component.paymentAmount).toEqual(10);

    });

    it('calls next step', async () => {
        await component.nextStep({} as StateDeclaration);
        expect(manager.clearData).toHaveBeenCalled();
        expect(state.go).toHaveBeenCalled();
    });

    it('calls proceed and go to kiosk wizard next state', async () => {
        component.isKiosk = true;
        const wizardUiSpy = jasmine.createSpyObj('wizardUi', ['gotoNextState']);
        await component.proceed(wizardUiSpy);
        expect(manager.clearData).toHaveBeenCalled();
        expect(wizardUiSpy.gotoNextState).toHaveBeenCalled();
    });

    it('calls proceed and do not go to kiosk wizard next state', async () => {

        component.isKiosk = false;
        const wizardUiSpy = jasmine.createSpyObj('wizardUi', ['gotoNextState']);
        await component.proceed(wizardUiSpy);
        expect(manager.clearData).toHaveBeenCalled();
        expect(wizardUiSpy.gotoNextState).not.toHaveBeenCalled();
    });

    it('calls viewVehiclesClick', async () => {
        await component.viewVehiclesClick();
        expect(manager.clearData).toHaveBeenCalled();
        expect(state.go).toHaveBeenCalledWith(SharedStates.Root);
    });

    it('checks delivery method cms descrition for Store pickup', async () => {

        (manager.getCurrentUser as jasmine.Spy).and.returnValue(currentUserMock);
        (manager.getPaymentInfo as jasmine.Spy).and.returnValue(paymentInfoMock);

        const deliveryMethod = {
            deliveryMethod: DeliveryMethodType.Store
        } as IDeliveryMethodData;

        (manager.getDeliveryMethod as jasmine.Spy).and.returnValue(deliveryMethod);
        await component.ngOnInit();

        expect(component.deliveryMethodCmsDesc).toEqual(cms.tagStorePickup);


    });

    it('checks delivery method cms descrition for Store pickup', async () => {

        (manager.getCurrentUser as jasmine.Spy).and.returnValue(currentUserMock);
        (manager.getPaymentInfo as jasmine.Spy).and.returnValue(paymentInfoMock);

        const deliveryMethod = {
            deliveryMethod: DeliveryMethodType.Mail
        } as IDeliveryMethodData;

        (manager.getDeliveryMethod as jasmine.Spy).and.returnValue(deliveryMethod);
        await component.ngOnInit();

        expect(component.deliveryMethodCmsDesc).toEqual(cms.LongDescription);


    });


});
