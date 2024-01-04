import { Injectable } from '@angular/core';
import { IState } from './model';

@Injectable()
export class CreditCardStateService {

    private state = {} as IState;

    constructor() { }

    setState(newState: IState) {

        this.state = {
            creditCard: newState.creditCard,
            nameSuffix: newState.nameSuffix,
            disableValidation: newState.disableValidation,
            config: newState.config ? newState.config : null
        };
    }

    getState() {
        return { ...this.state };
    }
}
