import { Inject, Injectable } from '@angular/core';
import { ITagReactivateApiResponse, ITagReactivateReq } from 'vehicles/eztag/reactivate/models';
import { HttpService } from '../../../../../common/services/httpService/http.service';


@Injectable()
export class TagReactivateApiService {

    constructor(private httpService: HttpService
    ) { }


    async reactivate(req: ITagReactivateReq): Promise<ITagReactivateApiResponse> {

        const url = '/api/sessions/ManageVehicles/ReactivateEZTag';

        const response = await this.httpService.post(url, req);

        return response;

    }
}

