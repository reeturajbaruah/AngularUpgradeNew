import { Inject, Injectable } from '@angular/core';
import { IClaimSessionResponse } from 'login/interfaces';
import { HttpService } from '../../common/services/httpService/http.service';

@Injectable()
export class WebApiService {

    constructor(private httpService: HttpService) { }

    private readonly baseUrl = '/api/sessions/Session';

    public async claimSession(data: any): Promise<IClaimSessionResponse> {
        const url = `${this.baseUrl}/ClaimSession`;

        const response: IClaimSessionResponse = await this.httpService.post(url, data);
        return response;
    }
}
