import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { CommonModule } from 'common/module';
import { VehiclesManagerService } from 'vehicles/shared';
import { IPaymentInfoData } from 'vehicles/interfaces';
import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';
import { IDeliveryMethodData } from 'vehicles/interfaces';
import { AccountService } from 'common/services';
import { MvuReceiptComponent } from './receipt.component';
import { VehicleService } from 'common/services';
import { States as SharedStates } from 'vehicles/shared';
import { MvuFrameComponent } from '../frame/frame.component';
import { WebStorageService } from '../../../../common/services/webStorageService/webStorage.service';

describe('MvuReceiptComponent', () => {

    let fixture: ComponentFixture<MvuReceiptComponent>;
    let component: MvuReceiptComponent;
    const state: StateService = jasmine.createSpyObj('state', ['go']);
    const frame: MvuFrameComponent = jasmine.createSpyObj('frame', ['']);
    let webStorage: any;
    let vehicleService: jasmine.SpyObj<VehicleService>;

    const manager: VehiclesManagerService = jasmine.createSpyObj('manager', ['getPaymentInfo', 'getMailingInfo', 'getBillingInfo', 'getCurrentUser', 'getVehicleInfoList',
        'getStepperData', 'getDeliveryMethod', 'clearData']);
    const accountService: AccountService = jasmine.createSpyObj('AccountService', ['getMailingInfo']);

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
        lastName: 'WRIGHT'
    };

    const deliveryMethodMock: IDeliveryMethodData = {
        deliveryMethod: 'mail'
    };

    beforeEach(async () => {
        vehicleService = jasmine.createSpyObj('VehicleService', ['destroyMvuDetails', 'getVehicleInformation']);
        webStorage = jasmine.createSpyObj('webStorage', ['getValue']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    MvuReceiptComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, CommonModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: MvuFrameComponent, useFactory: () => frame },
                    { provide: VehiclesManagerService, useFactory: () => manager },
                    { provide: AccountService, useFactory: () => accountService },
                    { provide: VehicleService, useFactory: () => vehicleService },
                    { provide: WebStorageService, useFactory: () => webStorage }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(MvuReceiptComponent);
        component = fixture.debugElement.componentInstance;

    });

    it('should pass', () => {
        expect(true).toBe(true);
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
    });

    it('checks payment info', async () => {
        (manager.getPaymentInfo as jasmine.Spy).and.returnValue(paymentInfoMock);
        (manager.getCurrentUser as jasmine.Spy).and.returnValue(currentUserMock);
        (manager.getDeliveryMethod as jasmine.Spy).and.returnValue(deliveryMethodMock);
        await component.ngOnInit();
        expect(component.paymentAmount).toEqual(10);

    });

    it('calls next step', async () => {
        await component.goToAccountOverview();
        expect(manager.clearData).toHaveBeenCalled();
        expect(vehicleService.destroyMvuDetails).toHaveBeenCalled();
        expect(state.go).toHaveBeenCalled();
    });

    it('calls viewVehiclesClick', async () => {
        await component.viewVehiclesClick();
        expect(manager.clearData).toHaveBeenCalled();
        expect(vehicleService.destroyMvuDetails).toHaveBeenCalled();
        expect(state.go).toHaveBeenCalledWith(SharedStates.Root);
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
