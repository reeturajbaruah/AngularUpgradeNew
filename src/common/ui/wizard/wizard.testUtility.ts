import { WizardStateResolverFactory } from './wizardStateResolver.factory';
import { DefaultWizardStateResolverService } from './defaultStateResolver.service';
import { StateService, UIRouterGlobals, StateRegistry } from '@uirouter/angular';

export const WizardTestingProvider =
{
    provide: WizardStateResolverFactory,
    deps: [StateService, StateRegistry, UIRouterGlobals],
    useFactory: (stateService: StateService, stateRegistry: StateRegistry, uiRouterGlobals: UIRouterGlobals) => {
        const service = new DefaultWizardStateResolverService(stateService, stateRegistry, uiRouterGlobals);
        return {
            getService: () => service
        };
    }
};

