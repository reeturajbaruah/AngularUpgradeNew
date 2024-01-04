import { Injectable } from '@angular/core';
import { IAddVehicleRequest } from 'account/create/models/add-vehicle.models';
import { IEZTag } from 'shared/vehicle-info/models';
import { VehicleOperationApiService } from '../../api/webapi-service';

@Injectable()
export class VehicleOperationService {
    constructor(private api: VehicleOperationApiService) { }

    async add(vehicle: IEZTag) {
        const request = {
            licPlate: vehicle.licPlate,
            licState: vehicle.licState,
            temporaryLicPlate: vehicle.temporaryLicPlate,
            vehicleClassCode: vehicle.vehicleClassCode,
            vehicleColor: vehicle.vehicleColor,
            vehicleMake: vehicle.vehicleMake,
            vehicleModel: vehicle.vehicleModel,
            vehicleYear: vehicle.vehicleYear,
            vehicleClassDesc: vehicle.vehicleClassDesc,
            motorcycle: vehicle.motorcycle,
            nickname: vehicle.nickname,
            isMotorcycleDisabled: vehicle.isMotorcycleDisabled,
            tagTypeCode: vehicle.tagTypeCode,
            activePbpTagExist: vehicle.activePbpTagExist,
            acctTagSeq: vehicle.acctTagSeq,
            transactionId: 0
        } as IAddVehicleRequest;

        const res = await this.api.add(request);

        if (res && !res.violationExist) {
            return res;
        }
    }

    async edit(vehicle: IEZTag) {
        const res = await this.api.edit(vehicle);

        if (res && !res.violationExist) {
            return res;
        }
    }

    async delete(vehicle: IEZTag) {
        const res = await this.api.delete(vehicle);
        return res;
    }
}
