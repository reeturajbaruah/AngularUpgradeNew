import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { CommonModule } from 'common/module';
import { VehiclesManagerService } from 'vehicles/shared';
import { IPaymentInfoData } from 'vehicles/interfaces';
import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';
import { ICmsReceiptContent } from './receipt.interface';
import { AddPlateReceiptComponent } from './receipt.component';
import { States as SharedStates } from 'vehicles/shared';
import { AddPlateFrameComponent } from '../frame/frame.component';
import { StorefrontUtilityService } from '../../../../../storefront/services/storefrontUtility.service';

describe('AddPlateReceiptComponent', () => {

    let fixture: ComponentFixture<AddPlateReceiptComponent>;
    let component: AddPlateReceiptComponent;
    const state: StateService = jasmine.createSpyObj('state', ['go']);
    const frame: AddPlateFrameComponent = jasmine.createSpyObj('frame', ['']);

    const manager: VehiclesManagerService = jasmine.createSpyObj('manager',
        ['getPaymentInfo', 'getBillingInfo', 'getCurrentUser', 'getVehicleInfoList', 'getStepperData', 'clearData']);

    const storeFrontUtilityService = {
        webStoreData: {
            fullSiteMode: false,
        },
        isRunningAsKiosk: false
    };

    const cms = {
        LongDescription: '',
        ShortDescription: '',
        paymentReceivedOn: '',
        paymentAmount: '',
        replenishAmt: '',
        accountInfo: '',
        accountName: '',
        accountNumber: '',
        billingInfo: '',
        platesOrdered: '',
        platesRequested: '',
        accountDashboard: '',
        manageMyVehicles: '',

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

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddPlateReceiptComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, CommonModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: AddPlateFrameComponent, useFactory: () => frame },
                    { provide: StorefrontUtilityService, useFactory: () => storeFrontUtilityService },
                    { provide: VehiclesManagerService, useFactory: () => manager }

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddPlateReceiptComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should pass', () => {
        expect(true).toBe(true);
    });


    it('checks kiosk', async () => {
        (manager.getPaymentInfo as jasmine.Spy).and.resolveTo(paymentInfoMock);
        (manager.getCurrentUser as jasmine.Spy).and.resolveTo(currentUserMock);
        await component.ngOnInit();
        expect(component.isKiosk).toBeFalse();
    });

    it('checks account info', async () => {
        (manager.getPaymentInfo as jasmine.Spy).and.resolveTo(paymentInfoMock);
        (manager.getCurrentUser as jasmine.Spy).and.returnValue(currentUserMock);
        await component.ngOnInit();
        expect(component.actName).toEqual('HANNAH WRIGHT');
        expect(component.actNumber).toEqual(6009193728);
        expect(component.isOptIn).toEqual(true);
    });

    it('checks payment info', async () => {
        (manager.getPaymentInfo as jasmine.Spy).and.returnValue(paymentInfoMock);
        (manager.getCurrentUser as jasmine.Spy).and.returnValue(currentUserMock);
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

});
