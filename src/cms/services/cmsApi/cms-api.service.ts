import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../../../common/services';

@Injectable()
export class CMSApiService {

    constructor(private httpService: HttpService) { }

    getCmsPagesIds(req: { itemId: string }[]): Promise<any> {
        const endpoint = 'api/sessions/GenericCms/GetCmsPagesByIds';
        const payload = { requests: req };

        return this.httpService.post(endpoint, payload);
    }

}

