import { Injectable, Inject } from '@angular/core';
import { HttpService } from '../../common/services/httpService/http.service';

@Injectable()
export class WebApisService {

    constructor(
        private httpService: HttpService
    ) { }

    //private baseUrl = (licensePlate, licenseState) =>
    //    `/api/violator/plate/${licensePlate.toUpperCase()}-${licenseState.toUpperCase()}`;

}
