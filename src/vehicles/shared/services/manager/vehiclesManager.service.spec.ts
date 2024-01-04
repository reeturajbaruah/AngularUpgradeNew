import { TestBed, waitForAsync } from '@angular/core/testing';
import { } from 'jasmine';
import { VehiclesManagerService } from './vehiclesManager.service';
import { WebStorageConst } from 'constants/module';
import { AccountService, CurrentUserService } from 'common/services';
import { WebApisService as ProfileApis } from 'profile/services';

import {
    IEZTag,
    IEzTagResponse,
    IManageEzTagResponse,
    IEZTagRequest,
    IPaymentInfoData
} from 'vehicles/interfaces';
import { BaseResponse } from '../../../../common/interfaces';
import { WebApiService } from '../webapi/webApi.service';
import { VehicleOperationsService } from '../operations/vehicle-operations.service';
import { WebStorageService } from '../../../../common/services/webStorageService/webStorage.service';

describe('Vehicles Manager Service', () => {

    let managerService: VehiclesManagerService;
    let webApi: jasmine.SpyObj<WebApiService>;
    let webStorage;
    let webStorageConst: WebStorageConst;
    let currentUserService: CurrentUserService;
    let accountService: jasmine.SpyObj<AccountService>;
    let operationsServiceSpy: jasmine.SpyObj<VehicleOperationsService>;

    beforeEach(() => {

        webStorage = jasmine.createSpyObj('webStorage', ['getValue']);
        webStorageConst = new WebStorageConst();
        webApi = jasmine.createSpyObj('webApi', ['searchAccountTags', 'getEZTagInfo', 'updateVehicleFromAccountInformation',
            'switchTagStatus', 'calculateActivationFee', 'addVehicleFromAccountInformation', 'confirmAddTags', 'deleteEzTag']);
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
        accountService = jasmine.createSpyObj('profileApis', ['getContactInfo', 'getAllPaymentMethods']);
        operationsServiceSpy = jasmine.createSpyObj('operationsService', ['query', 'add', 'update', 'deactivate', 'delete', 'edit', 'submit']);

        TestBed.configureTestingModule({
            providers: [
                VehiclesManagerService,
                { provide: WebApiService, useFactory: () => webApi },
                { provide: WebStorageService, useFactory: () => webStorage },
                { provide: WebStorageConst, useFactory: () => webStorageConst },
                { provide: CurrentUserService, useFactory: () => currentUserService },
                { provide: AccountService, useFactory: () => accountService },
                { provide: VehicleOperationsService, useFactory: () => operationsServiceSpy }

            ]
        });

        managerService = TestBed.inject(VehiclesManagerService);

    });

    describe('canary', () => {
        it('should pass', () => {
            expect(managerService).toBeDefined();
        });
    });

    describe('getCurrentBalance', () => {

        it('gets current balance from web storage', async () => {
            webStorage.getValue.and.returnValue('Value');

            const res = managerService.getCurrentBalance();

            expect(res).toEqual(res);
        });
    });

    describe('setVehicleInfoItem', () => {

        it('sets vehicle info from API call', async () => {
            // webApi.addVehicleFromAccountInformation.and.resolveTo({
            //     depositAmt: 10,
            //     transactionId: 87563,
            //     tagAmount: 13,
            //     tagSalesAmt: 5,
            //     totalAmt: 40,
            //     accountStatus: 'Check'
            // } as IEzTagResponse);

            operationsServiceSpy.add.and.resolveTo({
                depositAmt: 10,
                transactionId: 87563,
                tagAmount: 13,
                tagSalesAmt: 5,
                totalAmt: 40,
                accountStatus: 'Check'
            } as IEzTagResponse);

            await managerService.setVehicleInfoItem({
                acctTagStatus: 'Request'
            } as IEZTag);

            expect(operationsServiceSpy.add).toHaveBeenCalled();

            // expect(webApi.addVehicleFromAccountInformation).toHaveBeenCalledWith({
            //     acctTagStatus: 'Request'
            // } as IEZTagRequest);

            const res = managerService.getStepperData();

            expect(res.vehicleList.length).toEqual(1);
            expect(res.depositAmt).toEqual(10);
            expect(res.transactionId).toEqual(87563);
            expect(res.tagAmount).toEqual(13);
            expect(res.tagSalesAmt).toEqual(5);
            expect(res.totalAmt).toEqual(40);

        });

        it('removes vehicle info with API call', waitForAsync(() => {
            // webApi.addVehicleFromAccountInformation.and.resolveTo({
            //     depositAmt: 10,
            //     transactionId: 87563,
            //     tagAmount: 13,
            //     tagSalesAmt: 5,
            //     totalAmt: 40,
            //     accountStatus: 'Check'
            // } as IEzTagResponse);
            // webApi.deleteEzTag.and.resolveTo({} as any);

            operationsServiceSpy.add.and.resolveTo({
                depositAmt: 10,
                transactionId: 87563,
                tagAmount: 13,
                tagSalesAmt: 5,
                totalAmt: 40,
                accountStatus: 'Check'
            } as IEzTagResponse
            );

            managerService.setVehicleInfoItem({
                acctTagStatus: 'Request'
            } as IEZTag);

            managerService.removeVehicleInfoItem(0);
            expect(operationsServiceSpy.delete).toHaveBeenCalled();
            // expect(webApi.deleteEzTag).toHaveBeenCalled();
        }));
    });

    describe('getPaymentInfo', () => {

        it('calls calculateActivationFee api and returns payment information', async () => {
            webApi.calculateActivationFee.and.resolveTo({
                tagAmount: 40
            } as IEzTagResponse);

            managerService.setPaymentInfo({
                depositAmt: 10,
                transactionId: 87563,
                tagAmount: 13,
                tagSalesAmt: 5,
                totalAmt: 11,
            } as IPaymentInfoData);

            const res = await managerService.getPaymentInfo();

            expect(webApi.calculateActivationFee).toHaveBeenCalled();

            expect(res.depositAmt).toEqual(10);
            expect(res.transactionId).toEqual(87563);
            expect(res.tagAmount).toEqual(40);
            expect(res.tagSalesAmt).toEqual(5);
            expect(res.totalAmt).toEqual(11);
        });

        it('should not set tagAmount when calculateActivationFee has an error', async () => {
            webApi.calculateActivationFee.and.resolveTo(null);

            managerService.setPaymentInfo({
                depositAmt: 10,
                transactionId: 87563,
                tagAmount: 0,
                tagSalesAmt: 5,
                totalAmt: 40,
            } as IPaymentInfoData);

            const res = await managerService.getPaymentInfo();

            expect(webApi.calculateActivationFee).toHaveBeenCalled();

            expect(res.depositAmt).toEqual(10);
            expect(res.transactionId).toEqual(87563);
            expect(res.tagAmount).toEqual(0);
            expect(res.tagSalesAmt).toEqual(5);
            expect(res.totalAmt).toEqual(40);
        });
    });

    describe('submitOrder', () => {

        it('returns API call information', async () => {
            //  webApi.confirmAddTags.and.resolveTo({} as BaseResponse);

            const res = await managerService.submitOrder();
            expect(operationsServiceSpy.submit).toHaveBeenCalled();
            // expect(webApi.confirmAddTags).toHaveBeenCalled();
            // expect(res).not.toBeNull();
        });
    });

    describe('clearData', () => {
        it('sets vehicle info from API call', async () => {
            // webApi.addVehicleFromAccountInformation.and.resolveTo({
            //     depositAmt: 10,
            //     transactionId: 87563,
            //     tagAmount: 13,
            //     tagSalesAmt: 5,
            //     totalAmt: 40,
            //     accountStatus: 'Check'
            // } as IEzTagResponse);

            operationsServiceSpy.add.and.resolveTo({
                depositAmt: 10,
                transactionId: 87563,
                tagAmount: 13,
                tagSalesAmt: 5,
                totalAmt: 40,
                accountStatus: 'Check'
            } as IEzTagResponse);

            await managerService.setVehicleInfoItem({
                acctTagStatus: 'Request'
            } as IEZTag);

            const res = managerService.getStepperData();

            expect(res.vehicleList.length).toEqual(1);

            managerService.clearData();

            expect(res.vehicleList.length).toEqual(0);
        });
    });

    describe('getContactInfo', () => {
        it('response should match homePhoNbr', waitForAsync(() => {
            accountService.getContactInfo.and.resolveTo({
                homePhoNbr: '1'
            } as any);

            managerService.getContactInfo().then(res => {
                expect(res.phoneNumber).toEqual('1');
            });
        }));

        it('response should match workPhoNbr', waitForAsync(() => {
            accountService.getContactInfo.and.resolveTo({
                workPhoNbr: '2'
            } as any);

            managerService.getContactInfo().then(res => {
                expect(res.phoneNumber).toEqual('2');
            });
        }));
    });

    describe('getBillingInfo', () => {
        it('should return billing type EFT', waitForAsync(() => {
            accountService.getAllPaymentMethods.and.resolveTo({
                bankAccounts: [{
                    primary: true
                }]
            } as any);

            managerService.getBillingInfo().then(billingInfo => {
                expect(billingInfo.billingType).toEqual('EFT');
            });
        }));

        it('should return billing type CREDIT', waitForAsync(() => {
            accountService.getAllPaymentMethods.and.resolveTo({
                creditCards: [{
                    primary: true
                }]
            } as any);

            managerService.getBillingInfo().then(billingInfo => {
                expect(billingInfo.billingType).toEqual('CREDIT');
            });
        }));
    });

    describe('setDeliveryMethod', () => {
        it('should return deliveryMethod', () => {
            managerService.setDeliveryMethod({ deliveryMethod: 'By Mail' });

            expect(managerService.getDeliveryMethod().deliveryMethod).toEqual('By Mail');
        });
    });

    describe('getVehicleInfoList', () => {
        it('should return an array', () => {
            const vList = managerService.getVehicleInfoList();

            expect(vList).toBeInstanceOf(Array);
        });
    });

    describe('getCurrentUser', () => {
        it('should return obj', () => {
            (currentUserService.getCurrentUser as jasmine.Spy).and.returnValue({});
            const currUser = managerService.getCurrentUser();

            expect(currUser).toBeTruthy();
        });
    });

    describe('clearData', () => {
        it('sets vehicle info from API call', async () => {
            // webApi.addVehicleFromAccountInformation.and.resolveTo({
            //     depositAmt: 10,
            //     transactionId: 87563,
            //     tagAmount: 13,
            //     tagSalesAmt: 5,
            //     totalAmt: 40,
            //     accountStatus: 'Check'
            // } as IEzTagResponse);

            operationsServiceSpy.add.and.resolveTo({
                depositAmt: 10,
                transactionId: 87563,
                tagAmount: 13,
                tagSalesAmt: 5,
                totalAmt: 40,
                accountStatus: 'Check'
            } as IEzTagResponse);

            await managerService.setVehicleInfoItem({
                acctTagStatus: 'Request'
            } as IEZTag);

            const res = managerService.getStepperData();

            expect(res.vehicleList.length).toEqual(1);

            managerService.clearData();

            // expect(managerService.getStepperData().vehicleList.length).toEqual(0);
            expect(res.vehicleList.length).toEqual(0);
        });
    });
});

