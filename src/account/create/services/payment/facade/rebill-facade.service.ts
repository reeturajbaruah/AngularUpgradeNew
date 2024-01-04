import {Injectable } from '@angular/core';
import { IUpdateRebillAmountRequest } from '../../../../../common/models';
import { RebillApiService } from '../api/rebill-api.service';

@Injectable()
export class RebillFacadeService {

    constructor(private rebillApiService: RebillApiService) {
    }

    async updateRebillAmount(updateRebillAmountRequest: IUpdateRebillAmountRequest) {
        return await this.rebillApiService.updateRebillAmount(updateRebillAmountRequest);
    }

}
