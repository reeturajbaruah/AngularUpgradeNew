import { Injectable } from '@angular/core';
import { IMailingInfo } from 'common/models';
import { DeliveryMethodApiService } from '../api/delivery-method-api.service';

@Injectable()
export class DeliveryMethodFacadeService {
    constructor(private api: DeliveryMethodApiService) { }

    async updateMailingInfo(data: IMailingInfo) {
        const request = {
            internationalAddress: data.internationalAddress,
            country: data.country,
            state: data.state,
            address1: data.address1,
            address2: data.address2,
            city: data.city,
            zip: data.zip
        };
        
        return await this.api.updateMailingInfo(request);
    }
}
