import { Inject, Injectable } from '@angular/core';
import { deliveryMethodLocalStorage } from 'account/create/constants';
import { Prop } from 'account/create/models/current-step.model';
import { WebStorageService } from '../../../../common/services/webStorageService/webStorage.service';


@Injectable()
export class StoreService {

    constructor(private webStorage: WebStorageService) {

    }

    private state = new Map<Prop, any>();


    dispatch(p: Prop, payload: any) {
        this.state.set(p, payload);

        if (p === Prop.DeliveryMethod) {
            this.webStorage.setKeyValue(deliveryMethodLocalStorage, payload);
        }
    }

    select(p: Prop) {
        return this.state.get(p);
    }

    delete() {
        this.state.clear();
    }
}
