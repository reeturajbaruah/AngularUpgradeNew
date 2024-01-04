import { Injectable, Inject } from '@angular/core';
import { Transition, StateObject } from '@uirouter/angular';
import { StateConfig, StaticWizardStates, DefinedWizardStates, WizardStates } from 'common/interfaces';
import { WebStorageService } from '../webStorageService/webStorage.service';

export interface StateResolverOptions {
    /**
     * Setting this to true will result in redirection to fallback state if page is refreshed
     */
    denyRefresh?: boolean;
    /**
     * Navigating from allowed states is allowed without any restrictions
     */
    allowed?: string[];
    /**
     * Navigating from an explicity allowed state requires calling state.go as below
     * state.go('destination', { this can have params }, { custom: { isExplicitlyAllowedTransition: true}});
     */
    explicitlyAllowed?: string[];
    /**
     * Navigation from explicitly forbidden states is never allowed
     */
    explicitlyForbidden?: string[];
}

export interface StateResolverOptionsExtended extends StateResolverOptions {
    isExplicitlyAllowedTransition?: boolean;
}

@Injectable()
export class StateResolverService {

    constructor(
        private webStorage: WebStorageService
    ) {}
    
    resolveState(
        transition: Transition,
        transitionAllowFrom: StateResolverOptions,
        currentStepWebStorageKey: string = 'oops',
        fallbackState: string) {

        const transitionOptions: StateResolverOptionsExtended = {
            explicitlyAllowed: [],
            explicitlyForbidden: [],
            ...transitionAllowFrom,
            isExplicitlyAllowedTransition: transition.options().custom.isExplicitlyAllowedTransition
        };
        const fromState = transition.$from();
        const toState: StateConfig = transition.$to() as any;

        const shouldRedirect = this.shouldRedirect(fromState, toState, transitionOptions, currentStepWebStorageKey);

        if (shouldRedirect) {
            this.webStorage.removeEntry(currentStepWebStorageKey);
            return transition.router.stateService.go(fallbackState);
        }

        this.webStorage.setKeyValue(currentStepWebStorageKey, toState.name);
    }

    private shouldRedirect(
        fromState: StateObject, toState: StateConfig, options: StateResolverOptionsExtended, currentStepWebStorageKey: string) {

        const explicitlyForbidden = this.stateInList(fromState, options.explicitlyForbidden);

        return explicitlyForbidden || !this.isAllowed(fromState, toState, options, currentStepWebStorageKey);
    }

    private statesAllowedWithoutRestrictions(destination: StaticWizardStates = {}, allowed: string[] = [], explicitlyAllowed: string [] = []) {
        return [
            destination.prevState,
            destination.nextState,
            ...allowed
        ].filter(state => state && !explicitlyAllowed.includes(state));
    }

    private isAllowed(
        fromState: StateObject, toState: StateConfig, options: StateResolverOptionsExtended, currentStepWebStorageKey: string) {

        const wizardStates = this.staticWizardResolve(toState);

        const statesAllowedWithoutRestrictions = this.statesAllowedWithoutRestrictions(
            wizardStates, options.allowed, options.explicitlyAllowed);

        const allowedUnrestricted = this.stateInList(fromState, statesAllowedWithoutRestrictions);
        const explicitlyAllowed = this.allowExplicitly(fromState, options.explicitlyAllowed, options.isExplicitlyAllowedTransition);
        const possibleRefresh = this.possibleRefresh(fromState, toState, currentStepWebStorageKey, options.denyRefresh);

        return explicitlyAllowed || allowedUnrestricted || possibleRefresh;
    }

    //StateResolver will now only get wizard states if wizard is static.
    //if a dynamic wizard is used, possible allowed state must be added in the options
    private staticWizardResolve(toState: StateConfig): StaticWizardStates {
        const settings = toState && toState.wizard as WizardStates<any>;

        if (!settings) {
            return {};
        }
    
        return DefinedWizardStates.reduce((acc, prop) => {
            
            if (!(prop in settings) || typeof settings[prop] === 'function') {
                return acc;
            }
    
            return { ...acc, [prop]: settings[prop]};
            
        } , {});
    }

    private allowExplicitly(fromState: StateObject, explicitlyAllowed: string[], isExplicitlyAllowedTransition: boolean) {
        return isExplicitlyAllowedTransition && this.stateInList(fromState, explicitlyAllowed);
    }

    private possibleRefresh(fromState: StateObject, toState: StateConfig, currentStepWebStorageKey: string, denyRefresh: boolean = false) {
        return !denyRefresh && !fromState.name && this.webStorage.getValue(currentStepWebStorageKey) === toState.name;
    }

    private stateInList(state: StateObject, list: string[]) {
        return list.some(stateName => stateName === state.name);
    } 
}
