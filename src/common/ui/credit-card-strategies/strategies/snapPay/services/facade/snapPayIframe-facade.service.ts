import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SnapPayIframeStrategyService } from '../api/snapPayIframe-api.service';

@Injectable()
export class SnapPayIframeStrategyFacadeService {

    constructor(private api: SnapPayIframeStrategyService) {

    }

    getSnapPayIframeData(): Observable<any> {
        const styles = {
            Styles:
                'border:0px;width:100%;' +
                'font-size:16px;font-weight:600;color:#34353a;' +
                'outline:0px;padding:0px;margin:0px;' +
                'line-height:1.42857143;font-family:Trebuchet MS;vertical-align: middle;'
        };
        return this.api.getSnapPayConfiguration(styles);
    };


}

