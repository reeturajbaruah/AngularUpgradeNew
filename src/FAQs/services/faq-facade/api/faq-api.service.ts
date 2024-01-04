import { Injectable } from '@angular/core';
import { HttpService, ResponseErrorService } from 'common/services';


@Injectable()
export class FaqApiService {

    constructor(private responseErrorService: ResponseErrorService,
        private http: HttpService) {
    }

    async loadArchivePage(req) {
        const url = '/api/sessions/Article/LoadArchivePage';
        const res = await this.http.post(url, req);
        return this.checkError(res);
    }

    async executeCmsPaging(req) {
        const url = 'api/sessions/Article/ExecuteCmsPaging';
        const res = await this.http.post(url, req);
        return this.checkError(res);
    }

    private checkError(res) {
        if (this.responseErrorService.isErrorFree(res)) {
            this.responseErrorService.displayAlertsFromResponse(res);
            return res;
        }
    }
}
