import { Injectable } from '@angular/core';
import { IState } from './model';

@Injectable()
export class ReplacementStateService {

    private state = {} as IState;

    setState(state: IState) {

        this.state = {
            reason: state.reason,
            deliveryMethod: state.deliveryMethod,
            replaceTag: state.replaceTag,
            amount: state.amount ? state.amount : 0
        };
    }

    getState() {
        return { ...this.state };
    }
}
