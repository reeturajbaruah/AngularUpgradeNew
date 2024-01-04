import { Inject, Injectable } from '@angular/core';
import { INewsLatestApiRequest, INewsPagingInfo } from 'news/models/news.interface';
import { HttpService } from '../../../common/services/httpService/http.service';

@Injectable()
export class NewApiService {

    constructor(private httpService: HttpService) {

    }

    getCategories(req): Promise<any> {
        const endpoint = '/api/sessions/Article/Categories';
        return this.httpService.post(endpoint, req);

    }

    getArchiveNewsByCategoryId(req: INewsPagingInfo): Promise<any> {
        const endpoint = '/api/sessions/Article/ExecuteCmsPaging';
        return this.httpService.post(endpoint, req);
    }

    getLatestNews(req): Promise<any> {
        const endpoint = 'api/sessions/GenericCms/GetCmsPages';
        const payload = {
            requests: [req]
        } as INewsLatestApiRequest;

        return this.httpService.post(endpoint, payload);
    }
}

