import { } from 'jasmine';

import { StateConfig } from 'common/interfaces';
import { StateService, StateRegistry, UIRouterGlobals } from '@uirouter/angular';
import { EventEmitter } from '@angular/core';
import { WizardStateResolverService } from './wizardStateResolver.service';

describe('StorefrontWizardStateResolverService', () => {

    let service: WizardStateResolverService;
    let stateMock: jasmine.SpyObj<StateService>;
    let stateRegistryMock: jasmine.SpyObj<StateRegistry>;
    let uiRouterGlobals: UIRouterGlobals;
    let storefrontService: jasmine.SpyObj<any>;
    let storefrontModalService: jasmine.SpyObj<any>;
    let currentState: StateConfig;
    let event: EventEmitter<StateConfig>;

    beforeEach(() => {

        stateMock = jasmine.createSpyObj('StateService', ['go']);
        stateRegistryMock = jasmine.createSpyObj('stateRegistryMock', ['get']);
        storefrontService = jasmine.createSpyObj('storefrontService', ['completeWorkItem', 'isEnabled', 'getWorkItemInitState', 'currentWorkItem', 'next']);
        storefrontModalService = jasmine.createSpyObj('storefrontModalService', ['skipTaskMessage', 'showCompletionMessage', 'exit']);

        currentState = {} as StateConfig;
        uiRouterGlobals = { current: currentState } as UIRouterGlobals;

        event = new EventEmitter();

        service = new WizardStateResolverService(
            stateMock,
            stateRegistryMock,
            uiRouterGlobals,
            storefrontService,
            storefrontModalService,
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
                fail('should have thrown');
            } catch (e) { expect(e).toBeDefined(); }
            finally { }
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

            currentState.wizard = {};

            expect(service.getWizard(null)).toEqual({});
        });

        it('returns undefined wizard if not configured', () => {
            expect(service.getWizard(null)).toBeUndefined();
        });

    });

    describe('actions configured correctly', () => {

        describe('next', () => {

            it('throws when wizard config not defined', async () => {
                try {
                    await service.nextState(event);
                    fail('should have thrown');
                } catch (e) { expect(e).toBeDefined(); }
            });

            it('completes workitem and uses next items init state for next state', async () => {
                currentState.wizard = {
                    isEndState: true,
                    nextState: 'foo'
                };

                const nextWorkitemState = 'next';
                storefrontService.next.and.returnValue(Promise.resolve({ startStateName: nextWorkitemState }));

                spyOn(service, 'handleEvent').and.resolveTo();

                await service.nextState(event);

                expect(service.handleEvent).toHaveBeenCalledWith(event, nextWorkitemState);
            });

            it('handles next state when current state is not an endstate', async () => {
                currentState.wizard = {
                    isEndState: false,
                    nextState: 'next'
                };

                spyOn(service, 'handleEvent');

                await service.nextState(event);

                expect(service.handleEvent).toHaveBeenCalledWith(event, 'next');
            });

        });

        describe('prev', () => {
            it('handles prev state', async () => {
                currentState.wizard = {
                    isEndState: false,
                    prevState: 'prev'
                };

                spyOn(service, 'handleEvent');

                await service.previousState(event);

                expect(service.handleEvent)
                    .toHaveBeenCalledWith(event, 'prev');
            });
        });

        describe('cancel', () => {
            beforeEach(() => {
                currentState.wizard = {
                    cancelState: 'cancel'
                };
            });

            it('throws when wizard config not defined', async () => {
                try {
                    await service.cancelState(event);
                    fail('should have thrown');
                } catch (e) { expect(e).toBeDefined(); }
            });

            it('throws when wizard config cancel state not defined', async () => {
                currentState.wizard = { };

                try {
                    await service.cancelState(event);
                    fail('should have thrown');
                } catch (e) { expect(e).toBeDefined(); }
            });

            it('throws when no current workitem', async () => {
                storefrontService.currentWorkItem.and.returnValue(null);

                try {
                    await service.cancelState(event);
                    fail('should have thrown');
                } catch (e) { expect(e).toBeDefined(); }
            });

            it('throws when no init state on next workitem', async () => {
                storefrontService.currentWorkItem.and.returnValue({});
                storefrontService.getWorkItemInitState.and.returnValue(null);

                try {
                    await service.cancelState(event);
                    fail('should have thrown');
                } catch (e) { expect(e).toBeDefined(); }
            });

            it('handles event when cancel state is not workitem intital state', async () => {
                const mockWorkItem = {
                    startStateName: 'initState'
                };
                storefrontService.currentWorkItem = mockWorkItem;
                storefrontService.getWorkItemInitState.and.returnValue(mockWorkItem);
                spyOn(service, 'handleEvent').and.resolveTo();

                await service.cancelState(event);

                expect(service.handleEvent).toHaveBeenCalledWith(event, 'cancel');
            });

            it('handles event when cancel state is the workitems initial state', async () => {
                const initState = 'initState';
                currentState.name = initState;
                const nextState = 'nextState';
                const mockWorkItem = {
                    startStateName: initState
                };

                storefrontService.currentWorkItem = mockWorkItem;
                storefrontService.tasks = [];
                storefrontService.next.and.returnValue(Promise.resolve({ startStateName: nextState }));
                storefrontService.getWorkItemInitState.and.returnValue(initState);
                storefrontModalService.skipTaskMessage.and.callFake(() => Promise.resolve(true));
                storefrontService.completeWorkItem.and.callFake(() => Promise.resolve(nextState));

                spyOn(service, 'handleEvent').and.resolveTo();

                await service.cancelState(event);

                expect(service.handleEvent).toHaveBeenCalledWith(event, nextState);
            });

            it('allows for aborting the cancel call to leave workitem', async () => {
                const initState = 'initState';
                currentState.name = initState;
                const mockWorkItem = {
                    startStateName: initState
                };
            
                storefrontService.currentWorkItem = mockWorkItem;
                storefrontService.getWorkItemInitState.and.returnValue(initState);
                storefrontService.completeWorkItem.and.callFake(() => 'should not have gotten here');

                storefrontModalService.skipTaskMessage.and.callFake(() => Promise.resolve(false));

                const promise = new Promise<void>(resolve => {
                    spyOn(service, 'handleAbort').and.callFake(() => {
                        resolve();
                    });
                });

                spyOn(service, 'handleEvent').and.resolveTo();

                await service.cancelState(event);

                await promise;

                expect(storefrontService.completeWorkItem).not.toHaveBeenCalled();
                expect(service.handleEvent).not.toHaveBeenCalled();
                expect(service.handleAbort).toHaveBeenCalled();
            });

        });

    });

    describe('uiOrder', () => {

        it('returns null if not isEndState', () => {

            currentState.wizard = {
                isEndState: false
            };

            expect(service.getUiOrder()).toBeNull();

        });

        it('returns normal if isEndState', () => {

            currentState.wizard = {
                isEndState: true
            };

            expect(service.getUiOrder()).toBe('normal');

        });

    });

    describe('nextStateTemplate', () => {

        it('returns null if not isEndState', () => {

            currentState.wizard = {
                isEndState: false
            };

            expect(service.getNextStateTemplate()).toBeNull();

        });

        it('returns proceed if isEndState', () => {

            currentState.wizard = {
                isEndState: true
            };

            expect(service.getNextStateTemplate()).toBe('Proceed');

        });

    });

    describe('completeWorkItem', () => {
        const mockCurrentWorkItem = { startStateName: 'currentStateName' };
        const mockNextWorkItem = { startStateName: 'nextStateName' };
    
        beforeEach(() => {
            storefrontService.currentWorkItem = mockCurrentWorkItem;
        });
    
        it('returns the startStateName of the next work item on successful completion', async () => {
            storefrontService.completeWorkItem.and.resolveTo();
            storefrontService.next.and.resolveTo(mockNextWorkItem);
    
            const result = await service.completeWorkItem();
    
            expect(result).toBe(mockNextWorkItem.startStateName);
        });
    
        it('returns undefined when cancelWizard is true', async () => {
            storefrontService.cancelWizard = true;
            storefrontService.completeWorkItem.and.resolveTo();
            storefrontService.next.and.resolveTo(mockNextWorkItem);
    
            const result = await service.completeWorkItem();
    
            expect(result).toBeUndefined();
            expect(storefrontService.cancelWizard).toBeFalse();
        });
    
        it('propagates exceptions thrown by dependencies', async () => {
            const mockError = new Error('Mock error');
            storefrontService.completeWorkItem.and.rejectWith(mockError);
    
            let errorCaught;
            try {
                await service.completeWorkItem();
            } catch (error) {
                errorCaught = error;
            }
    
            expect(errorCaught).toBe(mockError);
        });
    });
});
