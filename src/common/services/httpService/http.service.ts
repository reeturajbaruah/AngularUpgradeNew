import { HttpClient, HttpContext, HttpContextToken } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { StateService } from '@uirouter/core';
import { firstValueFrom } from 'rxjs';
import { SERVER_CONSTANTS} from '../../upgrades';
import { isObject } from '../../utilities';

export const NO_SPIN = new HttpContextToken<boolean>(() => false);
export const FILE_HEADER = new HttpContextToken<boolean>(() => false);

export interface IHttpService {
    post(url: string, body: any, noSpin?: boolean, config?: any): Promise<any>;
    get(url: string, noSpin?: boolean, config?: any, fileHeader?: boolean): Promise<any>;
}

@Injectable({ providedIn: 'root' })
export class HttpService implements IHttpService {

    constructor(
        private httpClient: HttpClient,
        private stateService: StateService,
        @Inject(SERVER_CONSTANTS) private serverConstants
    ) {
    }

    private getConfig(noSpin: boolean, fileHeader: boolean, options: any) {
        const defaultOptions = {
            withCredentials: false,
            params: {
                angularState: this.stateService.current.name,
                clientVersion: this.serverConstants.currentlyDownloadedWebUiVersion
            },
            context: new HttpContext().set(NO_SPIN, noSpin).set(FILE_HEADER, fileHeader)
        };
        return isObject(options) ? Object.assign(defaultOptions, options) : options;
    }

    public post(url: string, body: any, noSpin = false, config = {}): Promise<any> {
        return firstValueFrom(this.httpClient.post(url, body, this.getConfig(noSpin, false, config))).catch((e) => e.error);
    };

    public get(url: string, noSpin = false, config = {}, fileHeader = false): Promise<any> {
        return firstValueFrom(this.httpClient.get(url, this.getConfig(noSpin, fileHeader, config))).catch((e) => e.error);
    }
}
