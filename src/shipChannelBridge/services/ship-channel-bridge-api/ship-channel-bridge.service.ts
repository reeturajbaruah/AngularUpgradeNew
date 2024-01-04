import { Inject, Injectable } from '@angular/core';
import { Contact } from 'shipChannelBridge/ship-channel-bridge.model';
import { HttpService } from '../../../common/services/httpService/http.service';

@Injectable()
export class ShipChannelBridgeService {

    constructor(private httpService: HttpService) { }

    saveContact(req: Contact): Promise<any> {
        const endpoint = 'api/sessions/HelpAndSupport/SendTopicEmail';
        const payload = req;
        return this.httpService.post(endpoint, payload);
    }
}
