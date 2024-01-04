import { Injectable } from '@angular/core';
import { ManagerFacadeApiService } from '../api/manager-facade-api.service';

@Injectable()
export class ManagerFacadeService {

    constructor(private api: ManagerFacadeApiService) {

    }

    async getVehicles() {
        return await this.api.getVehicles();
    }

    async getPersonalInfo() {
        return await this.api.getPersonalInfo();
    }

    async getBillingInfo() {
        return await this.api.getBillingInfo();
    }

}
