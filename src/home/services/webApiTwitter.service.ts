import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../../common/services/httpService/http.service';

@Injectable()
export class WebApiTwitterService {

    constructor(private httpService: HttpService) { }


    public GetTwitter(): Promise<any> {
        const url = `api/twitter`;
        return this.httpService.get(url);
    }

}
