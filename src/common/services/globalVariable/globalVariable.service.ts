import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalVariableService {
    public latestWebUiVersion = new BehaviorSubject<any>(undefined);
    public currentBalance = new BehaviorSubject<any>(undefined);

    constructor() {
    }
}
