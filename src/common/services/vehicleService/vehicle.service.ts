import { Injectable, Inject } from '@angular/core';



import { BaseResponse } from 'common/interfaces';
import { cmsIds } from 'common/constant';
import { CMSApiService } from 'cms/services/cmsApi/cms-api.service';

import { HttpService, WebStorageService } from 'common/services';


export interface IVehicleClass {
    value: number;
    label: string;
}

export interface IVehicleIcons {
    value: number;
    icon: string;
}

export interface IVehicleMake {
    code: string;
    label: string;
}

@Injectable()
export class VehicleService {

    private readonly mvuDetails = 'MVU_DETAILS';

    constructor(
        private httpService: HttpService,
        private webStorage: WebStorageService,
        private cmsApiService: CMSApiService
    ) { }

    private getCurrentDate(): Date {
        return new Date();
    }

    public async getVehicleMakes(): Promise<IVehicleMake[] | BaseResponse> {
        const url = '/api/sessions/CommonData/GetVehicleMakes';
        const response = await this.httpService.get(url);

        if (response.errors && response.errors.length > 0) {
            throw response;
        }

        return response.vehicleMakes.map(item => ({
            code: item.vehicleMake.toUpperCase(),
            label: item.vehicleMake
        }));
    }

    public getModelYears() {
        const yearsArray: string[] = [];

        const curDate = this.getCurrentDate();
        const curYear = curDate.getFullYear();

        for (let x = curYear + 1; x >= 1900; x--) {
            yearsArray.push(x.toString(10));
        }

        return yearsArray;
    };

    public async getVehicleInformation() {
        const payload = [{ itemId: cmsIds.vehicleClasification }];
        const res = await this.cmsApiService.getCmsPagesIds(payload);
        if (res.responses && res.responses.length > 0) {
            const responses = res.responses[0];
            const cmsRes = responses.cmsResponse;
            const cmsJson = JSON.parse(cmsRes);
            const ParametersSplit = cmsJson.Parameters.split('&vehicleIcons=');
            const vehicleClassifications = ParametersSplit[0]?.split('vehicleClassifications=')[1];
            const vehicleIcons = ParametersSplit[1];
            const classes = JSON.parse(decodeURIComponent(vehicleClassifications)) as IVehicleClass[];
            const icons = JSON.parse(decodeURIComponent(vehicleIcons)) as IVehicleIcons[];
            return {classes, icons};
        };
    };

    setMvuDetails(details: any): void {
        this.webStorage.setKeyValue(this.mvuDetails, details);
    }

    getMvuDetails(): any {
        const outObj = this.webStorage.getValue(this.mvuDetails);

        if (outObj?.alerts) {
            outObj.alerts = JSON.parse(outObj.alerts);
        }

        if (outObj?.errors) {
            outObj.errors = JSON.parse(outObj.errors);
        }

        if (outObj?.vehicleList) {
            outObj.vehicleList = JSON.parse(outObj.vehicleList);
        }

        return outObj;
    }

    destroyMvuDetails(): void {
        this.webStorage.removeEntry(this.mvuDetails);
    }
}
