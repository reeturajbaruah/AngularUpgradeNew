import { StateConfig, StateConfigOrName, IWizardStateResolverService, StaticWizardStates } from 'common/interfaces';
import { StateService, UIRouterGlobals, StateRegistry } from '@uirouter/angular';
import { EventEmitter, Injectable } from '@angular/core';
import { resolveConfig } from 'common/ui/wizard/wizardConfigResolver';
import { StorefrontService } from './storefront.service';
import { StorefrontModalService } from './modal.service';

@Injectable()
export class WizardStateResolverService implements IWizardStateResolverService {

    constructor(
        private state: StateService,
        private stateRegistry: StateRegistry,
        private uiRouterGlobals: UIRouterGlobals,
        private storefrontService: StorefrontService,
        private storefrontModalService: StorefrontModalService,
    ) { }

    getUiOrder(input?: any): 'normal' | 'reverse' {
        const wizard = this.getWizard(input);

        if (wizard?.isEndState) {
            return 'normal';
        } else {
            return null;
        }

    }

    getNextStateTemplate(input?: any): string {
        const wizard = this.getWizard(input);

        if (wizard?.isEndState) {
            return 'Proceed';
        } else {
            return null;
        }

    }

    get current(): StateConfig {
        return this.uiRouterGlobals.current;
    }

    getWizard<T>(input: T): StaticWizardStates {
        return resolveConfig(this.current, input);
    }

    async handleEvent(event: EventEmitter<StateConfigOrName>, stateName: string): Promise<StateConfigOrName> {

        let stateObj: StateConfigOrName = stateName && this.stateRegistry.get(stateName);

        if (stateObj?.name !== stateName && stateObj?.name?.endsWith('**')) {
            stateObj = stateName;
        }

        const noEvent = !event || !event.observed;
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

    handleAbort(): void {
        //not exposed publically, used for testing
    }

    async nextState(event: EventEmitter<StateConfigOrName>, input?: any): Promise<StateConfigOrName> {

        const wizard = this.getWizard(input);
        if (!wizard) {
            throw new Error('wizard config not defined');
        }

        if (!wizard.isEndState) {
            return await this.handleEvent(event, wizard.nextState);
        }

        const nextWorkItemState = await this.completeWorkItem();

        if (nextWorkItemState) {
            return await this.handleEvent(event, nextWorkItemState);
        }
    }

    async completeWorkItem(): Promise<string> {
        const currentWorkItem = this.storefrontService.currentWorkItem;
        await this.storefrontService.completeWorkItem(currentWorkItem);

        if (currentWorkItem.completionAction) {
            await currentWorkItem.completionAction();
        }

        if (!currentWorkItem.isHidden) {
            await this.storefrontModalService.showCompletionMessage(currentWorkItem);
            if (this.storefrontService.cancelWizard) {
                this.storefrontService.cancelWizard = false;
                return undefined;
            }
        }

        const nextWorkItem = await this.storefrontService.next();
        return nextWorkItem?.startStateName;
    }

    previousState(event: EventEmitter<StateConfigOrName>, input?: any): Promise<StateConfigOrName> {
        const wizard = this.getWizard(input);
        return this.handleEvent(event, wizard && wizard.prevState);
    }

    async cancelState(event: EventEmitter<StateConfigOrName>, input?: any): Promise<StateConfigOrName> {
        const wizard = this.getWizard(input);

        if (!wizard) {
            throw new Error('wizard not defined');
        }

        const currentWorkItem = this.storefrontService.currentWorkItem;

        if (!currentWorkItem) {
            throw new Error('no current workitem');
        }

        const initialState = currentWorkItem.startStateName;

        if (!initialState) {
            throw new Error('no initial state for workitem');
        }

        const isInitialState = this.current.name === initialState;

        if (!wizard.cancelState && !isInitialState) {
            throw new Error('cancel state not defined');
        }


        //for storefront, if cancel is pressed anywhere but the first state, 
        //it returns user back to the begining of the workitem flow.
        //if they are in the first state, cancel acts as a skip work item function
        if (!isInitialState) {
            return this.handleEvent(event, wizard.cancelState);
        } else {

            const wasSkipped = await this.storefrontModalService.skipTaskMessage();

            if (wasSkipped) {

                if (this.storefrontService.tasks.length > 0) {
                    const done = await this.storefrontModalService.exit();
                    if (done) {
                        const item = await this.storefrontService.restart();
                        return await this.handleEvent(event, item.startStateName);
                    }
                } else {
                    const nextWorkitemState = await this.completeWorkItem();

                    if (nextWorkitemState) {
                        return await this.handleEvent(event, nextWorkitemState);
                    }
                }
            } else {
                this.handleAbort();
            }

        }
    }

    async abort(event?: EventEmitter<StateConfigOrName>): Promise<StateConfigOrName> {
        const wasSkipped = await this.storefrontModalService.skipTaskMessage();

        if (wasSkipped) {
            const done = await this.storefrontModalService.exit();

            if (done) {
                const nextWorkitemState = await this.storefrontService.goToSurvey();
                return await this.handleEvent(undefined, nextWorkitemState.startStateName);
            }
        }
    }
}
