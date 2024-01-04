import { } from 'jasmine';
import { StateService, Transition } from '@uirouter/angular';

import { AuthenticateRedirectService } from './authenticateRedirect.service';


describe('authenticateRedirectService', () => {

    let service: AuthenticateRedirectService;
    let state: jasmine.SpyObj<StateService>;
    let transition: jasmine.SpyObj<Transition>;

    beforeEach(() => {

        state = jasmine.createSpyObj<StateService>('location', ['go'],['transition']);

        transition = jasmine.createSpyObj<Transition>('transition', ['$to', 'params']);

        (Object.getOwnPropertyDescriptor(state, 'transition').get as jasmine.Spy).and.returnValue(transition);

        service = new AuthenticateRedirectService(state);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('hasSavedState', () => {

        it('should store state', () => {

            service['redirectedStateValue'] = {};

            expect(service.hasSavedState).toBeTruthy();
        });
    });

    describe('saveCurrentState', () => {

        it('should save current state and params', async () => {

            const params = { '#': 'hash' } as any;
            const currentState = {};
            state.params = params;
            state.current = currentState;

            service.saveCurrentState();

            await service.redirectLoginAndDeleteSavedState();

            expect(state.go).toHaveBeenCalledWith(currentState, params);
        });

    });

    describe('saveToState', () => {

        it('should save to state and params', async () => {

            const params = { '#': 'hash' } as any;
            const toState = {};

            (transition.$to as jasmine.Spy).and.returnValue(toState);
            (transition.params as jasmine.Spy).and.returnValue(params);

            service.saveToState();

            await service.redirectLoginAndDeleteSavedState();

            expect(state.go).toHaveBeenCalledWith(toState, params);
        });

    });

    describe('redirectLoginAndDeleteSavedUrl', () => {
        
        it('should go no where if no saved state', async () => {

            await service.redirectLoginAndDeleteSavedState();

            expect(state.go).not.toHaveBeenCalled();

        });
    });
});
