import { Injectable } from '@angular/core';
import { IReplacementApiRequest, IReplacementApiResponse } from 'vehicles/eztag/replacement/models/model';
import { DeliveryMethodType } from '../../../../../common/models';
import { VehiclesReplacementApiService } from '../api/vehicles-replacement-api.service';
import { ReplacementStateService } from '../state/state.service';

@Injectable()
export class VehiclesReplacementFacadeService {

    constructor(private api: VehiclesReplacementApiService,
        private state: ReplacementStateService) {

    }

    async replace() {

        const state = this.state.getState();

        if (state.deliveryMethod && JSON.stringify(state.replaceTag) !== '{}' && state.reason) {
            const deliveryMethodValue = (state?.deliveryMethod?.toString() === DeliveryMethodType.Store.toString()) ? DeliveryMethodType.Pickup.toString() : state?.deliveryMethod?.toString();
            const req = {
                deliveryMethod: deliveryMethodValue,
                reason: state.reason,
                tagId: state.replaceTag.tagId,
                motorCycleFlag: state.replaceTag.isMotorcycleDisabled,
                licPlate: state.replaceTag.licPlate,
                licState: state.replaceTag.licState,
                accountVehicleId: state.replaceTag.acctVehicleId

            } as IReplacementApiRequest;

            const res = await this.api.replace(req);
            return this.parseResponse(res);

        } else {
            return new Promise<IReplacementApiResponse>((resolve, reject) =>
                resolve({
                    successStatus: false,
                    errors: [{ key: 'Error', message: 'Something went wrong: Please pass sufficient data in request' }]
                } as IReplacementApiResponse)
            );
        }

    }

    private parseResponse(result: IReplacementApiResponse) {

        const res = {} as IReplacementApiResponse;

        if (result.successStatus) {
            res.successStatus = true;
        } else {
            res.successStatus = false;
            const errorKey = (result.errors) ? result.errors[0]['key'] : 'Error';
            const errorMessage = (result.errors) ? result.errors[0]['message'] : 'Something went wrong.Replace failed.';
            res.errors = [{ key: errorKey, message: errorMessage }];
        }
        return res;
    }

}

