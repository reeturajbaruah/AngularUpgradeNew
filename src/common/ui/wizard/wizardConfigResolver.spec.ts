import { } from 'jasmine';

import { WizardStates } from 'common/interfaces';
import { resolveConfig } from './wizardConfigResolver';

describe('WizardConfigResolver test', () => {
     
    const dynamicConfigTest: WizardStates<string> = {
        nextState: (input) => 'dynamicNext',

        cancelState: (input) => 'dynamicCancel',

        prevState: (input) => 'dynamicPrev',

        isEndState: (input) => input === 'the end'
    };

    it('resolves static config', () => {
        const wizard = {
            nextState: 'staticNext',
            cancelState: 'staticCancel',
            prevState: 'staticPrev',
            isEndState: true
        } as WizardStates<string>;

        const result = resolveConfig({ wizard }, null);

        expect(result as any).toEqual(wizard);
    });

    it('resolves dynamic config', () => {

        const result = resolveConfig({ wizard: dynamicConfigTest }, 'the end');

        expect(result.cancelState).toBe('dynamicCancel');
        expect(result.nextState).toBe('dynamicNext');
        expect(result.prevState).toBe('dynamicPrev');
        expect(result.isEndState).toBe(true);

    });


});
