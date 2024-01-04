import { Inject, Injectable } from '@angular/core';
import { IAddVehicleRequest } from 'account/create/models/add-vehicle.models';
import { ResponseErrorService, HttpService } from 'common/services';

@Injectable()
export class VehicleOperationApiService {

    baseUrl = '/api/sessions/AddEZTag/';

    constructor(private httpService: HttpService,
        private responseErrorService: ResponseErrorService) {
    }

    async add(request: IAddVehicleRequest): Promise<any> {

        const url = `${this.baseUrl}AddEZTag`;

        const response: any = await this.httpService.post(url, request);

        // todo: move it to base error service
        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }


    async edit(request: any): Promise<any> {

        const url = `${this.baseUrl}UpdateEZTag`;

        const response: any = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }


    async delete(request: any): Promise<any> {
        const url = `${this.baseUrl}DeleteEZTag`;

        const response: any = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

}

