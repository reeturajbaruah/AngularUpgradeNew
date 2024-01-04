import { Injectable } from '@angular/core';
import { IEZTag } from 'vehicles/interfaces';
import { ITagReactivateApiResponse, ITagReactivateReq, ITagReactivateResponse, TagReactivateStatus } from 'vehicles/eztag/reactivate';
import { TagReactivateApiService } from '../api/tag-reactivate-api.service';

@Injectable()
export class TagReactivateFacadeService {

    constructor(private api: TagReactivateApiService) { }

    async reactivate(vehicle: IEZTag) {

        const req = {
            action: 'REACTIVATE',
            tagId: vehicle.tagId,
            licPlate: vehicle.licPlate,
            licState: vehicle.licState,
            accountVehicleId: vehicle.acctVehicleId
        } as ITagReactivateReq;

        const res = await this.api.reactivate(req);
        return this.parseResponse(res);

    }

    private parseResponse(result: ITagReactivateApiResponse) {

        const res = {} as ITagReactivateResponse;

        if (result.successStatus) {
            res.status = TagReactivateStatus.Pass;
        } else {
            res.status = TagReactivateStatus.Fail;
            const errorKey = (result.errors) ? result.errors[0]['key'] : 'Error';
            const errorMessage = (result.errors) ? result.errors[0]['message'] : 'your Vehicle information has not been updated.';
            res.errors = [{ key: errorKey, message: errorMessage }];
        }

        return res;
    }
}

