import { } from 'jasmine';

import { Transition } from '@uirouter/angular';
import { StateService } from './services';
import { stateNames as paymentPlanStateNames } from './constants';

import {
    StateNames as CoreStateNames, stateNames
} from 'constants/module';

import { stateGuard } from './routing';

describe('payment plan routing', () => {
        
    let transition: Transition;
    let stateService: StateService;

    beforeEach(() => {
        transition = jasmine.createSpyObj('transition', ['$to', 'injector']);
        stateService = jasmine.createSpyObj('stateService',
            ['getCurrentStep', 'isAcceptableState', 'destroyPaymentPlansCurrentStep', 'resetPaymentComplete', 'saveStep']);

        transition.injector = jasmine.createSpy('injector');
        (transition.injector as jasmine.Spy).and.returnValue({
            get: () => false
        });

        (stateService.getCurrentStep as jasmine.Spy).and.returnValue('');


    });
    
    describe('reset payment complete', () => {

        beforeEach(() => {
            (stateService.isAcceptableState as jasmine.Spy).and.returnValue(true);
        });

        it('can reset payment complete flag when going to grid state', () => {
            
            (transition.$to as jasmine.Spy).and.returnValue({
                name: paymentPlanStateNames.Grid
            });

            stateGuard.resolveFn(transition, stateService, stateNames);

            expect(stateService.resetPaymentComplete).toHaveBeenCalled();
        });

    });
    
});