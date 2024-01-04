import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

export interface MaintenanceToggle {
    ToggleName: string;
    ToggleStatus: boolean;
    MaintenanceToggles: boolean;
}

@Injectable()
export class WebApiMaintenanceToggles {

    constructor(private httpService: HttpService) { }

    public GetViolationMaintenanceStatus(maintenanceToggle: MaintenanceToggle): Promise<any> {
        const url = `api/sessions/FeatureToggleStatus/GetToggleStatus`;
        return this.httpService.post(url, maintenanceToggle);
    }
}
