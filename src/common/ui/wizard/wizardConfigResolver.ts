import { WizardStates, StateConfig, StaticWizardStates, DefinedWizardStates } from 'common/interfaces';

export const resolveConfig = <T>(state: StateConfig, input: T): StaticWizardStates => {
    const settings = state && state.wizard as WizardStates<T>;

    if (!settings) {
        return undefined;
    }

    return DefinedWizardStates.reduce((acc, prop) => {
        
        if (!(prop in settings)) {
            return acc;
        }

        if (typeof settings[prop] === 'function'){
            return { ...acc, [prop]: settings[prop](input)};
        }
        
        return { ...acc, [prop]: settings[prop]};
        
    } , {});

};    
