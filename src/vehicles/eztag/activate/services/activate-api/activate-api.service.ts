import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../../../../../common/services/httpService/http.service';

@Injectable({
    providedIn: 'root'
})
export class ActivateApiService {

    constructor(private httpService: HttpService) { }

    /* Activate Ez Tags */
    findTagsToActivate(data: any) {
        const url = '/api/sessions/ActivateEzTag/FindTagsToActivate';
        return this.httpService.post(url, data);
    }

    /**
     * Tag Activation
     * 
     * @param data object
     * @returns 
     */
    finalizeTagActivation(data: any): Promise<any> {
        const url = '/api/sessions/ActivateEzTag/FinalizeTagActivation';

        return this.httpService.post(url, data);
    }

}
