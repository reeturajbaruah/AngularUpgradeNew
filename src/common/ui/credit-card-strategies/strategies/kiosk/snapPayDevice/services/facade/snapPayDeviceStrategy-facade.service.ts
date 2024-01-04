import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SnapPayDeviceStrategyService } from '../api/snapPayDeviceStrategy-api.service';

@Injectable()
export class SnapPayDeviceStrategyFacadeService {

    constructor(private api: SnapPayDeviceStrategyService) {
    }
    
    async postRequestCard(machineName,sessionKey): Promise<any> {
        return await (firstValueFrom(await this.api.postRequestCard(machineName,sessionKey)));
    }

    async postPinPad(machineName, sessionKey): Promise<any> {
        return await (firstValueFrom(await this.api.postRequestPinPad(machineName, sessionKey)));
    }


    async postCreateSession(machineName): Promise<any> {
        return await (firstValueFrom(await this.api.postCreateSession(machineName)));
    }

    async postEndSession(machineName, sessionKey): Promise<any> {
        return await (firstValueFrom(await this.api.postEndSession(machineName, sessionKey)));
    }

    async GetStatus(machineName): Promise<any> {
        return await (firstValueFrom(await this.api.GetStatus(machineName)));
    }
}

