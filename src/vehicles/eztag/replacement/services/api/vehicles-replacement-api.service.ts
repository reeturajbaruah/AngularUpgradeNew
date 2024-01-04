import { Inject, Injectable } from '@angular/core';
import { IReplacementApiRequest, IReplacementApiResponse } from 'vehicles/eztag/replacement/models/model';
import { HttpService } from '../../../../../common/services/httpService/http.service';

@Injectable()
export class VehiclesReplacementApiService {

    constructor(private httpService: HttpService
    ) { }

    async replace(req: IReplacementApiRequest): Promise<IReplacementApiResponse> {

        const url = '/api/sessions/ManageVehicles/ReplaceEZTag';

        const response = await this.httpService.post(url, req);

        return response;
    }
}


