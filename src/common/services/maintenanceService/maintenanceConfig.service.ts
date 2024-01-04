import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MaintenanceConfigService {

    constructor(private httpClient: HttpClient) { }

    getMaintenanceDetails(): Observable<any> {
        const url = '/api/sessions/Maintenance/GetMaintenanceDetails';
        return this.httpClient.get(url);
    }
}
