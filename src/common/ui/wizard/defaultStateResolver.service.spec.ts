import { } from 'jasmine';

import { StateConfig, IWizardStateResolverService, WizardStates } from 'common/interfaces';
import { StateService, StateRegistry, UIRouterGlobals, StateDeclaration } from '@uirouter/angular';
import { DefaultWizardStateResolverService } from './defaultStateResolver.service';
import { EventEmitter, Injector } from '@angular/core';

describe('DefaultWizardStateResolverService', () => {
    
    let service: DefaultWizardStateResolverService;
    let stateMock: jasmine.SpyObj<StateService>;
    let stateRegistryMock: jasmine.SpyObj<StateRegistry>;
    let uiRouterGlobals: UIRouterGlobals;
    let currentState: StateConfig;
    let event: EventEmitter<StateConfig>;

    beforeEach(() => {

        stateMock = jasmine.createSpyObj('StateService', ['go']);
        stateRegistryMock = jasmine.createSpyObj('stateRegistryMock', ['get']);
        currentState = {} as StateConfig;
        uiRouterGlobals = { current: currentState } as UIRouterGlobals;

        event = new EventEmitter();

        service = new DefaultWizardStateResolverService(
            stateMock,
            stateRegistryMock,
            uiRouterGlobals
        );
    });

    describe('canary', () => {
        it('can create service', () => {
            expect(service).toBeDefined();
        });
    });

    describe('common props and methods', () => {

        it('throws error is undefined statename with no listeners', async () => {            
            try {
                await service.handleEvent(event, undefined);
                fail('expected method to throw');
            } catch(e) { expect(e).toBeDefined(); }
        });

        it('calls state.go if no listners for event', () => {

            //arrange
            const stateName = 'nane';
            const newState = {};
            
            (stateRegistryMock.get as jasmine.Spy)
                .withArgs(stateName).and.returnValue(newState);

            spyOn(event, 'emit');

            //act
            service.handleEvent(event, stateName);

            //assert
            expect(stateMock.go).toHaveBeenCalledWith(newState);
            expect(event.emit).not.toHaveBeenCalled();

        });

        it('calls event.emit if there are listeners', () => {
            //arrange
            const stateName = 'nane';
            const newState = {};

            (stateRegistryMock.get as jasmine.Spy)
                .withArgs(stateName).and.returnValue(newState);
            event.subscribe(() => { });
            spyOn(event, 'emit');

            //act
            service.handleEvent(event, stateName);

            //assert
            expect(stateMock.go).not.toHaveBeenCalled();
            expect(event.emit).toHaveBeenCalledWith(newState);
        });

        it('gets correct current state', () => {
            expect(service.current).toBe(uiRouterGlobals.current);
        });

        it('gets wizard config if avaiable', () => {

            currentState.wizard = { nextState: 'next' };

            expect(service.getWizard(null) as any).toEqual(currentState.wizard);
        });

        it('returns undefined wizard if not configured', () => {
            expect(service.getWizard(null)).toBeUndefined();
        });

    });

    describe('actions configured correctly', () => {

        describe('wizard defined - static', () => {

            beforeEach(() => {
                currentState.wizard = {
                    nextState: 'next',
                    prevState: 'prev',
                    cancelState: 'cancel'
                };
                spyOn(service, 'handleEvent');
            });

            it('handles next state', async () => {
                await service.nextState(event);
                expect(service.handleEvent)
                    .toHaveBeenCalledWith(event, 'next');

            });

            it('handles prev state', async () => {
                await service.previousState(event);
                expect(service.handleEvent)
                    .toHaveBeenCalledWith(event, 'prev');
            });

            it('handles cancel state', async () => {
                await service.cancelState(event);
                expect(service.handleEvent)
                    .toHaveBeenCalledWith(event, 'cancel');
            });
        });

        describe('wizard undefined', () => {

            beforeEach(() => {
                spyOn(service, 'handleEvent');
            });
            
            it('handles next state', async () => {
                await service.nextState(event);
                expect(service.handleEvent)
                    .toHaveBeenCalledWith(event, undefined);
            });

            it('handles prev state', async () => {
                await service.previousState(event);
                expect(service.handleEvent)
                    .toHaveBeenCalledWith(event, undefined);
            });

            it('handles cancel state', async () => {
                await service.cancelState(event);
                expect(service.handleEvent)
                    .toHaveBeenCalledWith(event, undefined);
            });
        });        

    });

    describe('uiOrder', () => {

        it('always returns null', () => {

            expect(service.getUiOrder()).toBeNull();

        });

    });

    describe('nextStateTemplate', () => {

        it('always returns null', () => {

            expect(service.getNextStateTemplate()).toBeNull();

        });

    });
});
