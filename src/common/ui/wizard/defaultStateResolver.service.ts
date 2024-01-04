import { StateConfig, StateConfigOrName, IWizardStateResolverService, StaticWizardStates } from 'common/interfaces';
import { StateService, UIRouterGlobals, StateRegistry } from '@uirouter/angular';
import { Injectable, EventEmitter } from '@angular/core';

import { resolveConfig } from './wizardConfigResolver';

@Injectable()
export class DefaultWizardStateResolverService implements IWizardStateResolverService {

    constructor(
        private state: StateService,
        private stateRegistry: StateRegistry,
        private uiRouterGlobals: UIRouterGlobals
    ) { }

    getUiOrder(): 'normal' | 'reverse' {
        return null;
    }

    getNextStateTemplate(): string  {
        return null;
    }

    get current(): StateConfig {        
        return this.uiRouterGlobals.current;
    }

    getWizard(input: any): StaticWizardStates {
        return resolveConfig(this.current, input);
    }

    async handleEvent(event: EventEmitter<StateConfigOrName>, stateName: string): Promise<StateConfigOrName> {        
        let stateObj: StateConfigOrName = stateName && this.stateRegistry.get(stateName);

        if (stateObj?.name !== stateName && stateObj?.name?.endsWith('**')) {
            stateObj = stateName;
        }

        const noEvent = !event || event.observers.length === 0;

        if (noEvent) {            
            if (!stateObj) {
                throw new Error('state not defined in wizard or no wizard config in state config');
            }

            await this.state.go(stateObj);            
        } else {
            event.emit(stateObj);
        }

        return stateObj;
    }

    nextState(event?: EventEmitter<StateConfigOrName>, input?: any): Promise<StateConfigOrName> {
        const wizard = this.getWizard(input);
        return this.handleEvent(event, wizard && wizard.nextState);
    }

    previousState(event?: EventEmitter<StateConfigOrName>, input?: any): Promise<StateConfigOrName> {
        const wizard = this.getWizard(input);
        return this.handleEvent(event, wizard && wizard.prevState);
    }

    cancelState(event?: EventEmitter<StateConfigOrName>, input?: any): Promise<StateConfigOrName> {
        const wizard = this.getWizard(input);
        return this.handleEvent(event, wizard && wizard.cancelState);
    }
}
