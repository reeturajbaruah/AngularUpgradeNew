//TODO: Move addMissingInformationService to "ng-app/src/login/services"
// AFTER we delete legacy addMissingInformationcomponent\controller

import { Injectable } from '@angular/core';
import { StateService, StateDeclaration, StateParams, StateObject } from '@uirouter/angular';

@Injectable({
    providedIn: 'root',
})
export class AuthenticateRedirectService {

    constructor(
        private state: StateService
    ) { }

    private redirectedStateValue: StateDeclaration | StateObject; 
    private stateParams: StateParams;

    public saveCurrentState() {
        this.saveState(this.state.current, this.state.params);
    }

    public saveToState() {
        const transition = this.state.transition;
        const state = transition.$to();
        const params = transition.params() as StateParams;

        this.saveState(state, params);
    }

    private saveState(state: StateDeclaration | StateObject, params: StateParams) {
        this.stateParams = params;
        this.redirectedStateValue = state;
    }

    public get hasSavedState(): boolean {
        return !!this.redirectedStateValue;
    }

    public async redirectLoginAndDeleteSavedState() {

        if (!this.redirectedStateValue) {
            return;
        }

        const params = this.stateParams;
        const stateObj = this.redirectedStateValue;
        this.redirectedStateValue = null;
        this.stateParams = null;
        await this.state.go(stateObj, params);
    }
}
