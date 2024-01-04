import { Inject, Injectable } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { ResponseErrorService, HttpService } from 'common/services';

interface TagAuthorityResponse extends BaseResponse {
    authorities: { authorityCode: string }[];
}

@Injectable()
export class DataService {

    constructor(  
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService
    ) { }


    public async getTagAuthorities(): Promise<string[]> {
        const url = '/api/sessions/CommonData/GetTagAuthorities';
        const response: TagAuthorityResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
        }

        return (response.authorities || []).map(x => x.authorityCode);
    }

}
