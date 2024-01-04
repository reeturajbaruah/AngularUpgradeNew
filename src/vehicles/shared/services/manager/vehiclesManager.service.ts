import { BaseResponse } from 'common/interfaces';
import { Injectable, Inject } from '@angular/core';
import {
    IPersonalInfo,
    ContactInfo,
    BillingInfo,
    BillingType
} from 'common/models';
import { AccountService, CurrentUserService } from 'common/services';
import {
    IStepperData,
    IPaymentInfoData,
    IDeliveryMethodData,
    IEZTag,
    IEzTagResponse,
    IEZTagRequest,
    IManageEzTagResponse, ISearchTagsRequest, IConfirmTagsRequest
} from 'vehicles/interfaces';
import { WebStorageConst } from 'constants/module';
import { WebApisService as ProfileApis } from 'profile/services';
import { WebApiService } from '../webapi/webApi.service';
import { VehicleOperationsService } from 'vehicles/shared/services/operations/vehicle-operations.service';
import { VehicleProduct } from 'vehicles/shared/models';
import { WebStorageService } from '../../../../common/services/webStorageService/webStorage.service';

@Injectable()
export class VehiclesManagerService {

    //TODO: Patrick to confirm if this data needs to be in web storage
    private stepperData: IStepperData = {
        transactionId: -1,
        vehicleList: [],
        lastEditIndex: 0,
        depositAmt: 0,
        totalAmt: 0,
        tagSalesAmt: 0,
        deliveryMethod: '',
        tagAmount: 0
    };

    constructor(
        private webApis: WebApiService,
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst,
        private currentUserService: CurrentUserService,
        private accountService: AccountService,
        private operationsService: VehicleOperationsService
    ) { }
    public getCurrentBalance() {
        return this.webStorage.getValue(this.webStorageConst.currentBalance);
    }

    public async getContactInfo(): Promise<(IPersonalInfo & ContactInfo)> {
        const res = await this.accountService.getContactInfo();

        if (res) {
            return {
                ...res,
                phoneNumber: res.homePhoNbr ?? res.workPhoNbr
            } as (IPersonalInfo & ContactInfo);
        }
    }

    // todo: remove it since it moved to common receipt after Add Tag, Add Plate, MVU Receipt are updated
    public async getBillingInfo(): Promise<BillingInfo> {
        const res = await this.accountService.getAllPaymentMethods();

        if (res) {
            if (res.bankAccounts) {
                const payment = res.bankAccounts.filter(bank => bank.primary);

                if (payment.length > 0) {
                    return {
                        billingType: BillingType.Eft,
                        eft: payment[0],
                        credit: null
                    } as BillingInfo;
                }
            }
            if (res.creditCards) {
                const payment = res.creditCards.filter(card => card.primary);

                if (payment.length > 0) {
                    return {
                        billingType: BillingType.Credit,
                        eft: null,
                        credit: payment[0]
                    } as BillingInfo;
                }
            }
        }
    }


    public getVehicleInfoList(): IEzTagResponse[] {
        return this.stepperData.vehicleList;
    }

    async queryVehicles(query: ISearchTagsRequest = null) {
        return await this.operationsService.query(query);

    }

    async setVehicleInfoItem(info: IEZTag) {
        const res = await this.operationsService.add({ ...info } as IEZTagRequest);

        if (res && !res.violationExist) {
            this.stepperData.vehicleList.push(res);
            this.stepperData.depositAmt = res.depositAmt;
            this.stepperData.transactionId = res.transactionId;
            this.stepperData.tagAmount = res.tagAmount;
            this.stepperData.tagSalesAmt = res.tagSalesAmt;
            this.stepperData.totalAmt = res.totalAmt;
        }
    }

    async update(vehicle: IEZTag) {
        return await this.operationsService.update(vehicle);
    }

    async updateTagVehicleInfoFromLanding(vehicle: IEZTag) {
        return await this.operationsService.updateTagVehicleInfoFromManageVehiclesLanding(vehicle);
    }

    async deactivate(vehicle: IEZTag, product: VehicleProduct) {
        return await this.operationsService.deactivate(vehicle, product);
    }

    async removeVehicleInfoItem(index: number) {

        const vehicle = { ...this.stepperData.vehicleList[index] };
        const res = await this.operationsService.delete(vehicle);
        if (res) {
            this.stepperData.vehicleList.splice(index, 1);
        }
    }

    public async editVehicleInfoItem(vehicle: IEZTag, index: number) {
        const res = await this.operationsService.edit(vehicle);

        if (res && !res.violationExist) {
            this.stepperData.vehicleList[index] = res;
        }

    }

    public async submitOrder() {
        return await this.operationsService.submit(this.stepperData);

    }

    public setPaymentInfo(info: IPaymentInfoData) {
        this.stepperData.transactionId = info.transactionId;
        this.stepperData.depositAmt = info.depositAmt;
        this.stepperData.totalAmt = info.totalAmt;
        this.stepperData.tagSalesAmt = info.tagSalesAmt;
        this.stepperData.tagAmount = info.tagAmount;
    }

    // todo: move it to new payment info service
    public async getPaymentInfo(): Promise<IPaymentInfoData> {
        const res = await this.webApis.calculateActivationFee({
            tagList: this.stepperData.vehicleList,
            transactionId: null,
            tagSalesAmount: null,
            totalAmount: null,
            deliveryMethod: null,
            depositAmount: null
        } as IConfirmTagsRequest);

        if (res) {
            this.stepperData.tagAmount = res.tagAmount;
        }

        const paymentInfo: IPaymentInfoData = { ...this.stepperData };
        return paymentInfo;
    }

    public setDeliveryMethod(info: IDeliveryMethodData) {
        this.stepperData.deliveryMethod = info.deliveryMethod;
    }

    public getDeliveryMethod(): IDeliveryMethodData {

        const deliveryMethod: IDeliveryMethodData = {
            deliveryMethod: this.stepperData.deliveryMethod
            //  deliveryMethod: 'By Mail'
        };

        return deliveryMethod;
    }

    //Assumes that some API calls need everything from stepperData
    public getStepperData() {
        return this.stepperData;
    }

    getCurrentUser() {
        return this.currentUserService.getCurrentUser();

    }

    clearData() {
        this.stepperData.vehicleList = [];
        this.stepperData.deliveryMethod = '';
        this.stepperData.transactionId = -1;
        this.stepperData.lastEditIndex = 0;
        this.stepperData.depositAmt = 0;
        this.stepperData.totalAmt = 0;
        this.stepperData.tagSalesAmt = 0;
        this.stepperData.tagAmount = 0;
    }
}
