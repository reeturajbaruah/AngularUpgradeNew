import { Injectable } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { IConfirmTagsRequest, IEZTag, IEZTagRequest, IManageEzTagResponse, ISearchTagsRequest, IStepperData } from 'vehicles/interfaces';
import { WebApiService } from 'vehicles/shared';
import { VehicleProduct } from 'vehicles/shared/models';

@Injectable()
export class VehicleOperationsService {

    constructor(private api: WebApiService) {

    }

    async query(query: ISearchTagsRequest = null): Promise<IManageEzTagResponse> {
        if (query && query.searchValue) {
            return await this.api.searchAccountTags(query);
        } else {
            return await this.api.getEZTagInfo();
        }
    }

    async edit(vehicle: IEZTag) {
        const tagToUpdate = {
            ...vehicle,
            transactionId: -1,
            tagSalesAmt: 0,
            depositAmt: 0,
            totalAmt: 0
        } as IEZTagRequest;

        return await this.api.updateVehicleFromAccountInformation(tagToUpdate);

    }

    async update(vehicle: IEZTag) {

        const updateVehicle = {
            ...vehicle,
            transactionId: -1,
            tagSalesAmt: 0,
            depositAmt: 0,
            totalAmt: 0
        } as IEZTagRequest;

        return await this.api.updateVehicleFromAccountInformation(updateVehicle);
    }

    async updateTagVehicleInfoFromManageVehiclesLanding(vehicle: IEZTag) {
        const updateVehicle = {
            ...vehicle,
            transactionId: -1,
            tagSalesAmt: 0,
            depositAmt: 0,
            totalAmt: 0
        } as IEZTagRequest;

        return await this.api.updateTagVehicleInfoFromManageVehiclesLanding(updateVehicle);
    }

    async deactivate(vehicle: IEZTag, product: VehicleProduct): Promise<BaseResponse> {

        if (product === VehicleProduct.eztag) {

            const tagToSwitch = {
                ...vehicle,
                acctTagStatus: 'I',
                tagStatusDesc: 'Inactive'
            };

            return await this.api.switchTagStatus({ tagToSwitch });

        } else if (product === VehicleProduct.ezplate) {

            const today = new Date();
            const newEndDate = new Date(vehicle.pbpEndDate);

            newEndDate.setUTCFullYear(today.getUTCFullYear());
            newEndDate.setUTCMonth(today.getUTCMonth());
            newEndDate.setUTCDate(today.getUTCDate());

            newEndDate.setUTCHours(today.getUTCHours());
            newEndDate.setUTCMinutes(today.getUTCMinutes());
            newEndDate.setUTCSeconds(today.getUTCSeconds());

            const updateExpirationRequest = {
                ...vehicle,
                pbpEndDate: newEndDate.toISOString(),
                transactionId: -1,
                tagSalesAmt: 0,
                depositAmt: 0,
                totalAmt: 0
            } as IEZTagRequest;

            return await this.api.updateVehicleFromAccountInformation(updateExpirationRequest);

        }

    }

    async add(info: IEZTag) {
        return await this.api.addVehicleFromAccountInformation({ ...info } as IEZTagRequest);

    }

    async submit(stepperData: IStepperData) {
        return await this.api.confirmAddTags({
            tagList: stepperData.vehicleList,
            transactionId: stepperData.transactionId,
            tagSalesAmount: stepperData.tagSalesAmt,
            totalAmount: stepperData.totalAmt,
            deliveryMethod: stepperData.deliveryMethod,
            depositAmount: stepperData.depositAmt
        } as IConfirmTagsRequest);
    }

    async delete(vehicle) {

        const tagToRemove = {
            ...vehicle,
            transactionId: -1,
            tagSalesAmt: 0,
            depositAmt: 0,
            totalAmt: 0
        } as IEZTagRequest;

        return await this.api.deleteEzTag(tagToRemove);

    }


}

