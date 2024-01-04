import { Injectable, Inject } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { ResponseErrorService, HttpService } from '../../common/services';


export interface FlexbookerConfigResponse extends BaseResponse {
    iframeBookingUrl: string;
    skipBooking: boolean;
    createAccountFlexbookerEnabled: boolean;
}


@Injectable()
export class FlexbookerService {
    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService
    ) { }
    public async getFlexbookerConfig(): Promise<FlexbookerConfigResponse> {
        const response = await this.httpService.get('/api/flexbooker/config');

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
        else {
            response.iframeBookingUrl = '';
            response.skipBooking = true;
            response.createAccountFlexbookerEnabled = false;
            return response;
        }
    }
}
