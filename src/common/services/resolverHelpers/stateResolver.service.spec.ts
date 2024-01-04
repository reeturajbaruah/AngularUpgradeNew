import { } from 'jasmine';

import { StateResolverService } from './stateResolver.service';
import { StateObject } from '@uirouter/core';

describe('stateResolver', () => {

    let service: StateResolverService;
    let webStorage;

    beforeEach(() => {
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue']);

        service = new StateResolverService(webStorage);
    });

    it('canary', () => {
        expect(service).toBeDefined();
    });

    describe('stateInList', () => {

        [
            { name: 'fake@', list: ['fake2', 'fake@'] },
            { name: 'fakea', list: ['fakea', 'fakez', 'fakec'] },
            { name: 'fake0', list: ['fake0', 'fake1', 'fake2'] }
        ].forEach(({ name, list }) => {

            it(`should return true when state.name ${name} in list ${JSON.stringify(list)}`, () => {

                expect(service['stateInList']({ name } as any, list)).toBe(true);
            });
        });

        [
            { name: 'fake', list: [] },
            { name: 'fake@', list: ['fake2', 'fake$'] },
            { name: 'fakea', list: ['fakeb', 'fakez', 'fakec'] },
            { name: 'fake0', list: ['fake3', 'fake1', 'fake2'] }
        ].forEach(({ name, list }) => {

            it(`should return false when state.name ${name} not in list ${JSON.stringify(list)}`, () => {

                expect(service['stateInList']({ name } as any, list)).toBe(false);
            });
        });
    });

    describe('possibleRefresh', () => {

        it('should return true when fromState.name falsy and this.webStorage.getValue return value equal to toState.name', () => {

            webStorage.getValue.and.returnValue('webstorage fake state');

            expect(service['possibleRefresh'](
                { name: '' } as any,
                { name: 'webstorage fake state' } as any,
                'fakeWebStorageKey'
            )).toBe(true);
        });

        it('should call this.webStorage.getValue with currentStepWebStorageKey when fromState.name falsy', () => {

            webStorage.getValue.and.returnValue('webstorage fake state');

            service['possibleRefresh'](
                { name: '' } as any,
                { name: 'webstorage fake state' } as any,
                'fakeWebStorageKey'
            );

            expect(webStorage.getValue).toHaveBeenCalledTimes(1);
            expect(webStorage.getValue).toHaveBeenCalledWith('fakeWebStorageKey');
        });

        ['matchingState', 'notmatchingState'].forEach(storedState => {

            it('should return false when fromState.name truthy', () => {

                webStorage.getValue.and.returnValue(storedState);

                expect(service['possibleRefresh'](
                    { name: 'fromState' } as any,
                    { name: 'matchingState' } as any,
                    'fakeWebStorageKey'
                )).toBe(false);
            });
        });

        ['', 'fromState'].forEach(fromState => {

            it('should return false when currentStepInWebstorage does not match toState.name', () => {

                webStorage.getValue.and.returnValue('not match in storage');

                expect(service['possibleRefresh'](
                    { name: fromState } as any,
                    { name: 'not match to state' } as any,
                    'fakeWebStorageKey'
                )).toBe(false);
            });
        });

        it('should not call this.webStorage.getValue with currentStepWebStorageKey when fromState.name truth', () => {

            webStorage.getValue.and.returnValue('webstorage fake state');

            service['possibleRefresh'](
                { name: 'fromState' } as any,
                { name: 'webstorage fake state' } as any,
                'fakeWebStorageKey'
            );

            expect(webStorage.getValue).toHaveBeenCalledTimes(0);
        });

        [
            { fromState: null, toState: 'state in webstorage' },
            { fromState: null, toState: 'state not in webstorage' },
            { fromState: 'some state', toState: 'state in webstorage' },
            { fromState: 'some state', toState: 'state not in webstorage' },
        ].forEach(({ fromState, toState }) => {

            it('should return false when denyRefresh true', () => {

                webStorage.getValue.and.returnValue('state in webstorage');

                expect(service['possibleRefresh'](
                    { name: fromState } as any,
                    { name: toState } as any,
                    'fakeWebStorageKey',
                    true
                )).toBe(false);
            });
        });
        
    });
    
    describe('allowExplicitly', () => {

        [
            { allow: false, inList: false, expected: false },
            { allow: false, inList: true, expected: false },
            { allow: true, inList: false, expected: false },
            { allow: true, inList: true, expected: true },
        ].forEach(({ allow, inList, expected }) => {

            it(`should return ${expected} when forbidden ${inList} and allow ${allow}`, () => {

                spyOn(service as any, 'stateInList').and.returnValues(inList);
                const fromState = {} as StateObject;
                expect(service['allowExplicitly'](
                    fromState,
                    'explicitlyAllowed' as any,
                    allow
                )).toBe(expected);
            });
        });

        it('should call stateInList when isExplicitlyAllowedTransition true', () => {

            spyOn(service as any, 'stateInList').and.returnValues(false);
            const fromState = {} as StateObject;
            const allowed = ['explicitlyAllowed'];
            service['allowExplicitly'](
                fromState,
                allowed,
                true
            );

            expect(service['stateInList']).toHaveBeenCalledTimes(1);
            expect(service['stateInList']).toHaveBeenCalledWith(fromState, allowed);
        });

        it('should not call stateInList when isExplicitlyAllowedTransition false', () => {

            spyOn(service as any, 'stateInList').and.returnValues(false);

            service['allowExplicitly'](
                'fromState' as any,
                'explicitlyAllowed' as any,
                false
            );

            expect(service['stateInList']).toHaveBeenCalledTimes(0);
        });        
    });

    describe('statesAllowedWithoutRestrictions', () => {

        it('should return an empty array when destinationWizard and explicitlyAllowed are undefined', () => {

            expect(service['statesAllowedWithoutRestrictions'](undefined, undefined, undefined)).toEqual([]);
        });

        it('should not return previous state if it is an explicitlyAllowed state', () => {

            expect(service['statesAllowedWithoutRestrictions'](
                { prevState: 'fake prev', nextState: 'fake next' },
                ['some allowed state'],
                ['fake prev']))
                .toEqual(['fake next', 'some allowed state']);
        });

        it('should not return next state if it is an explicitlyAllowed state', () => {

            expect(
                service['statesAllowedWithoutRestrictions']({ prevState: 'fake prev', nextState: 'fake next' }, undefined, ['fake next'])
            ).toEqual(['fake prev']);
        });

        it('should not return allowed state if it is explicitlyAllowed', () => {

            expect(service['statesAllowedWithoutRestrictions']({ prevState: 'fake prev', nextState: 'fake next' }, ['i am allowed'], ['i am allowed']))
                .toEqual(['fake prev', 'fake next']);
        });

        it('should return allowed states, next and previous states if they are not explicitlyAllowed', () => {

            expect(service['statesAllowedWithoutRestrictions'](
                { prevState: 'fake prev', nextState: 'fake next' },
                ['allowed1', 'allowed2'],
                ['fake some state']))
                .toEqual(['fake prev', 'fake next', 'allowed1', 'allowed2']);
        });
    });

    describe('isAllowed', () => {        
        [
            { allow: { explicitly: false, wizard: false, refresh: false }, expected: false },
            { allow: { explicitly: false, wizard: false, refresh: true }, expected: true },
            { allow: { explicitly: false, wizard: true, refresh: false }, expected: true },
            { allow: { explicitly: false, wizard: true, refresh: true }, expected: true },
            { allow: { explicitly: true, wizard: false, refresh: false }, expected: true },
            { allow: { explicitly: true, wizard: false, refresh: true }, expected: true },
            { allow: { explicitly: true, wizard: true, refresh: false }, expected: true },
            { allow: { explicitly: true, wizard: true, refresh: true }, expected: true },
        ].forEach(({ allow, expected }) => {

            it(`should return ${expected} when ${JSON.stringify(allow)}`, () => {

                spyOn(service as any, 'allowExplicitly').and.returnValue(allow.explicitly);
                spyOn(service as any, 'stateInList').and.returnValues(allow.wizard);
                spyOn(service as any, 'possibleRefresh').and.returnValue(allow.refresh);

                expect(service['isAllowed'](
                    'fromState' as any,
                    {} as any,
                    {} as any,
                    'fakeWebStorageKey'
                )).toBe(expected);
            });
        });

        it('should call allowExplicitly', () => {

            spyOn(service as any, 'allowExplicitly').and.returnValue(false);
            spyOn(service as any, 'stateInList').and.returnValues(false);
            spyOn(service as any, 'possibleRefresh').and.returnValue(false);
            const fromState = {} as StateObject;
            const allowNonWizard = true;
            service['isAllowed'](
                fromState,
                { wizard: { prevState: 'prevStateFake', nextState: 'nextStateFake' } } as any,
                { explicitlyAllowed: ['allowedList'], isExplicitlyAllowedTransition: allowNonWizard } as any,
                'fakeWebStorageKey'
            );

            expect(service['allowExplicitly']).toHaveBeenCalledTimes(1);
            expect(service['allowExplicitly']).toHaveBeenCalledWith(fromState, ['allowedList'], allowNonWizard);
        });

        it('should call stateInList', () => {

            spyOn(service as any, 'allowExplicitly').and.returnValue(false);
            spyOn(service as any, 'stateInList').and.returnValues(false);
            spyOn(service as any, 'possibleRefresh').and.returnValue(false);
            const fromState = {} as StateObject;
            service['isAllowed'](
                fromState,
                { wizard: { prevState: 'prevStateFake', nextState: 'nextStateFake' } } as any,
                { explicitlyAllowed: 'allowedList' } as any,
                'fakeWebStorageKey'
            );

            expect(service['stateInList']).toHaveBeenCalledTimes(1);
            //expect(service['stateInList']).toHaveBeenCalledWith('fromState', 'allowedList');
            expect(service['stateInList']).toHaveBeenCalledWith(fromState, ['prevStateFake', 'nextStateFake']);
        });

        it('should call stateInList with undefined wizard states when wizard falsy', () => {

            spyOn(service as any, 'allowExplicitly').and.returnValue(false);
            spyOn(service as any, 'stateInList').and.returnValues(false);
            spyOn(service as any, 'possibleRefresh').and.returnValue(false);
            const fromState = {} as StateObject;
            service['isAllowed'](
                fromState,
                { } as any,
                { explicitlyAllowed: 'allowedList' } as any,
                'fakeWebStorageKey'
            );

            expect(service['stateInList']).toHaveBeenCalledTimes(1);
            expect(service['stateInList']).toHaveBeenCalledWith(fromState, []);
        });

        it('should call statesAllowedWithoutRestrictions with destination wizard and explicitlyAllowed', () => {

            spyOn(service as any, 'statesAllowedWithoutRestrictions').and.returnValue('fake statesAllowedWithoutRestrictions');
            spyOn(service as any, 'allowExplicitly').and.returnValue(false);
            spyOn(service as any, 'stateInList').and.returnValues(false);
            spyOn(service as any, 'possibleRefresh').and.returnValue(false);
            const allowed = ['fake allowed'];
            const explicitlyAllowed = ['fake explicitly allowed'];
            const wizardConfig = {};
            service['isAllowed'](
                'fromState' as any,
                { wizard: wizardConfig } as any,
                { explicitlyAllowed, allowed } as any,
                'fakeWebStorageKey'
            );

            expect(service['statesAllowedWithoutRestrictions']).toHaveBeenCalledTimes(1);
            expect(service['statesAllowedWithoutRestrictions']).toHaveBeenCalledWith(
                wizardConfig, allowed, explicitlyAllowed);
        });  

        it('should call stateInList with response from statesAllowedWithoutRestrictions', () => {

            spyOn(service as any, 'statesAllowedWithoutRestrictions').and.returnValue(['statesAllowedWithoutRestrictions']);
            spyOn(service as any, 'allowExplicitly').and.returnValue(false);
            spyOn(service as any, 'stateInList').and.returnValues(false);
            spyOn(service as any, 'possibleRefresh').and.returnValue(false);
            const fromState = {} as StateObject;
            const stateConfig = { };
            service['isAllowed'](
                fromState,
                stateConfig,
                { explicitlyAllowed: ['allowedList'] } as any,
                'fakeWebStorageKey'
            );

            expect(service['stateInList']).toHaveBeenCalledTimes(1);
            expect(service['stateInList']).toHaveBeenCalledWith(fromState, ['statesAllowedWithoutRestrictions']);
        });  

        it('should call possibleRefresh with fromState, toState and currentStepWebStorageKey', () => {

            spyOn(service as any, 'allowExplicitly').and.returnValue(false);
            spyOn(service as any, 'stateInList').and.returnValues(false);
            spyOn(service as any, 'possibleRefresh').and.returnValue(false);
            const fromState = {} as StateObject;
            const stateConfig = { name: 'toState' };
            service['isAllowed'](
                fromState,
                stateConfig,
                { explicitlyAllowed: 'allowedList' } as any,
                'fakeWebStorageKey'
            );

            expect(service['possibleRefresh']).toHaveBeenCalledTimes(1);
            expect(service['possibleRefresh']).toHaveBeenCalledWith(fromState, stateConfig, 'fakeWebStorageKey', undefined);
        });

        it('should call possibleRefresh with fromState, toState,  currentStepWebStorageKey, and denyRefresh', () => {

            spyOn(service as any, 'allowExplicitly').and.returnValue(false);
            spyOn(service as any, 'stateInList').and.returnValues(false);
            spyOn(service as any, 'possibleRefresh').and.returnValue(false);
            const fromState = {} as StateObject;
            const stateConfig = { name: 'toState' };
            const deny = true;
            service['isAllowed'](
                fromState,
                stateConfig,
                { explicitlyAllowed: 'allowedList', denyRefresh: deny } as any,
                'fakeWebStorageKey'
            );

            expect(service['possibleRefresh']).toHaveBeenCalledTimes(1);
            expect(service['possibleRefresh']).toHaveBeenCalledWith(fromState, stateConfig, 'fakeWebStorageKey', deny);
        });     
    });

    describe('shouldRedirect', () => {

        [
            //add a condition here to test a scenario where redirection is expected (or not)
            {
                fromState: { name: 'allowed state' },
                toState: { name: 'self me i', wizard: { prevState: 'forbiddend source', nextState: 'irrelevant' } },
                storedState: 'self me i',
                options: {
                    allowed: ['allowed state', 'another allowed state'],
                    explicitlyAllowed: [],
                    explicitlyForbidden: ['forbiddend source'],
                    isExplicitlyAllowedTransition: false
                },
                expected: false
            }, {
                fromState: { name: 'allowed state' },
                toState: { name: 'self me i', wizard: { prevState: 'forbiddend source', nextState: 'irrelevant' } },
                storedState: 'self me i',
                options: {
                    allowed: ['allowed state', 'another allowed state'],
                    explicitlyAllowed: ['allowed state'],
                    explicitlyForbidden: ['forbiddend source'],
                    isExplicitlyAllowedTransition: false
                },
                expected: true
            }, {
                fromState: { name: 'allowed state' },
                toState: { name: 'self me i', wizard: { prevState: 'forbiddend source', nextState: 'irrelevant' } },
                storedState: 'self me i',
                options: {
                    allowed: ['allowed state', 'another allowed state'],
                    explicitlyAllowed: ['allowed state'],
                    explicitlyForbidden: ['forbiddend source'],
                    isExplicitlyAllowedTransition: true
                },
                expected: false
            }, {
                fromState: {},
                toState: { name: 'self me i', wizard: { prevState: 'forbiddend source', nextState: 'irrelevant' } },
                storedState: 'self me i',
                options: {
                    explicitlyAllowed: [],
                    explicitlyForbidden: ['forbiddend source'],
                    isExplicitlyAllowedTransition: false
                },
                expected: false
            }, {
                fromState: {},
                toState: { name: 'self me i', wizard: { prevState: 'forbiddend source', nextState: 'irrelevant' } },
                storedState: 'self me i',
                options: {
                    explicitlyAllowed: [],
                    explicitlyForbidden: ['forbiddend source'],
                    isExplicitlyAllowedTransition: false,
                    denyRefresh: true
                },
                expected: true
            }, {
                fromState: { name: 'forbiddend source' },
                toState: { name: 'doesnt matter', wizard: { prevState: 'forbiddend source', nextState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: [],
                    explicitlyForbidden: ['forbiddend source'],
                    isExplicitlyAllowedTransition: false
                },
                expected: true
            }, {
                fromState: { name: 'forbiddend source' },
                toState: { name: 'doesnt matter', wizard: { prevState: 'forbiddend source', nextState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: ['forbiddend source'],
                    explicitlyForbidden: ['forbiddend source'],
                    isExplicitlyAllowedTransition: false
                },
                expected: true
            }, {
                fromState: { name: 'forbiddend source' },
                toState: { name: 'doesnt matter', wizard: { prevState: 'forbiddend source', nextState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: ['forbiddend source'],
                    explicitlyForbidden: ['forbiddend source'],
                    isExplicitlyAllowedTransition: true
                },
                expected: true
            }, {
                fromState: { name: 'previous state unrestricted' },
                toState: { name: 'doesnt matter', wizard: { prevState: 'previous state unrestricted', nextState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: [],
                    explicitlyForbidden: [],
                    isExplicitlyAllowedTransition: false
                },
                expected: false
            }, {
                fromState: { name: 'previous state restricted' },
                toState: { name: 'doesnt matter', wizard: { prevState: 'previous state restricted', nextState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: ['previous state restricted'],
                    explicitlyForbidden: [],
                    isExplicitlyAllowedTransition: false
                },
                expected: true
            }, {
                fromState: { name: 'previous state restricted' },
                toState: { name: 'doesnt matter', wizard: { prevState: 'previous state restricted', nextState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: ['previous state restricted'],
                    explicitlyForbidden: [],
                    isExplicitlyAllowedTransition: true
                },
                expected: false
            }, {
                fromState: { name: 'next state unrestricted' },
                toState: { name: 'doesnt matter', wizard: { nextState: 'next state unrestricted', prevState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: [],
                    explicitlyForbidden: [],
                    isExplicitlyAllowedTransition: false
                },
                expected: false
            }, {
                fromState: { name: 'next state restricted' },
                toState: { name: 'doesnt matter', wizard: { nextState: 'next state restricted', prevState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: ['next state restricted'],
                    explicitlyForbidden: [],
                    isExplicitlyAllowedTransition: false
                },
                expected: true
            }, {
                fromState: { name: 'next state restricted' },
                toState: { name: 'doesnt matter', wizard: { nextState: 'next state restricted', prevState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: ['next state restricted'],
                    explicitlyForbidden: [],
                    isExplicitlyAllowedTransition: true
                },
                expected: false
            }, {
                fromState: { name: 'just explicitly allowed' },
                toState: { name: 'doesnt matter', wizard: { nextState: 'next state bla', prevState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: ['just explicitly allowed'],
                    explicitlyForbidden: [],
                    isExplicitlyAllowedTransition: true
                },
                expected: false
            }, {
                fromState: { name: 'just explicitly allowed' },
                toState: { name: 'doesnt matter', wizard: { nextState: 'next state bla', prevState: 'irrelevant' } },
                storedState: 'something',
                options: {
                    explicitlyAllowed: ['just explicitly allowed'],
                    explicitlyForbidden: [],
                    isExplicitlyAllowedTransition: false
                },
                expected: true
            }

        ].forEach(({ storedState, fromState, toState, options, expected }) => {

            it(`should return ${expected}`, () => {
                webStorage.getValue.and.returnValue(storedState);

                expect(service['shouldRedirect'](
                    fromState as any,
                    toState as any,
                    options as any,
                    'fakeWebStorageKey'
                )).toBe(expected);
            });
        });



        [
            { allow: false, forbidden: false, expected: true },
            { allow: false, forbidden: true, expected: true },
            { allow: true, forbidden: false, expected: false },
            { allow: true, forbidden: true, expected: true },
        ].forEach(({ allow, forbidden, expected }) => {

            it(`should return ${expected} when forbidden ${forbidden} and allow ${allow}`, () => {

                spyOn(service as any, 'stateInList').and.returnValues(forbidden);
                spyOn(service as any, 'isAllowed').and.returnValues(allow);

                expect(service['shouldRedirect'](
                    'fromState' as any,
                    'toState' as any,
                    {} as any,
                    'fakeWebStorageKey'
                )).toBe(expected);
            });
        });

        it('should call stateInList once', () => {

            spyOn(service as any, 'stateInList').and.returnValues(false);
            spyOn(service as any, 'isAllowed').and.returnValues(false);
            const fromState = {} as StateObject;
            const forbiddenList = ['forbiddenList'];
            service['shouldRedirect'](
                fromState,
                {},
                {
                    explicitlyForbidden: forbiddenList
                },
                'fakeWebStorageKey'
            );
            
            expect(service['stateInList']).toHaveBeenCalledTimes(1);
            expect(service['stateInList']).toHaveBeenCalledWith(fromState, forbiddenList);
        });

        it('should not call isAllowed when forbidden', () => {

            spyOn(service as any, 'stateInList').and.returnValues(true);
            spyOn(service as any, 'isAllowed').and.returnValues(false);

            service['shouldRedirect'](
                'fromState' as any,
                'toState' as any,
                {
                    explicitlyForbidden: 'forbiddenList'
                } as any,
                'fakeWebStorageKey'
            );

            expect(service['isAllowed']).toHaveBeenCalledTimes(0);
        });

        it('should call isAllowed when not forbidden', () => {

            spyOn(service as any, 'stateInList').and.returnValues(false);
            spyOn(service as any, 'isAllowed').and.returnValues(false);

            service['shouldRedirect'](
                'fromState' as any,
                'toState' as any,
                {
                    explicitlyForbidden: 'forbiddenList'
                } as any,
                'fakeWebStorageKey'
            );

            expect(service['isAllowed']).toHaveBeenCalledTimes(1);
            expect(service['isAllowed']).toHaveBeenCalledWith(
                'fromState' as any,
                'toState' as any,
                {
                    explicitlyForbidden: 'forbiddenList'
                } as any,
                'fakeWebStorageKey');
        });
    });

    describe('resolveState', () => {

        let fakeTransition;
        let shouldRedirectSpy;

        beforeEach(() => {

            fakeTransition = {
                $to: () => ({ name: 'fake to state' }),
                $from: () => 'fake from state',
                options: () => ({ custom: { isExplicitlyAllowedTransition: 'fake allow non wizard transition' } }),
                router: { stateService: { go: () => null } }
            };
            shouldRedirectSpy = spyOn(service as any, 'shouldRedirect').and.returnValue('shouldRedirectFakeResult');
        });

        it('should call shouldRedirect with fromState, toState, options and currentStepWebStorageKey', () => {

            service.resolveState(
                fakeTransition as any,
                {
                    explicitlyAllowed: 'allowedList',
                    explicitlyForbidden: 'forbiddenList'
                } as any,
                'fakeWebStorageKey',
                'fake fall back'
            );

            expect(service['shouldRedirect']).toHaveBeenCalledTimes(1);
            expect(service['shouldRedirect']).toHaveBeenCalledWith(
                'fake from state' as any,
                { name: 'fake to state' } as any,
                {
                    explicitlyAllowed: 'allowedList',
                    explicitlyForbidden: 'forbiddenList',
                    isExplicitlyAllowedTransition: 'fake allow non wizard transition'
                } as any,
                'fakeWebStorageKey');
        });

        [undefined, {}, { explicitlyAllowed: [] }, { explicitlyForbidden: [] }].forEach(options => {

            it('should call shouldRedirect with empty options when options incomplete', () => {

                service.resolveState(
                    fakeTransition as any,
                    options as any,
                    'fakeWebStorageKey',
                    'fake fall back'
                );

                expect(service['shouldRedirect']).toHaveBeenCalledTimes(1);
                expect(service['shouldRedirect']).toHaveBeenCalledWith(
                    'fake from state' as any,
                    { name: 'fake to state' } as any,
                    {
                        explicitlyAllowed: [],
                        explicitlyForbidden: [],
                        isExplicitlyAllowedTransition: 'fake allow non wizard transition'
                    } as any,
                    'fakeWebStorageKey');
            });
        });

        it('should call webStorage.removeEntry when shouldRedirect true', () => {

            shouldRedirectSpy.and.returnValue(true);

            service.resolveState(
                fakeTransition as any,
                {} as any,
                'fakeWebStorageKey',
                'fake fall back'
            );

            expect(webStorage.removeEntry).toHaveBeenCalledTimes(1);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(0);
            expect(webStorage.removeEntry).toHaveBeenCalledWith('fakeWebStorageKey');
        });

        it('should call webStorage.setKeyValue when shouldRedirect false', () => {

            shouldRedirectSpy.and.returnValue(false);

            service.resolveState(
                fakeTransition as any,
                {} as any,
                'fakeWebStorageKey',
                'fake fall back'
            );

            expect(webStorage.removeEntry).toHaveBeenCalledTimes(0);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
            expect(webStorage.setKeyValue).toHaveBeenCalledWith('fakeWebStorageKey', 'fake to state');
        });

        it('should call transition.router.stateService.go when shouldRedirect true', () => {

            spyOn(fakeTransition.router.stateService, 'go').and.returnValue(null);
            shouldRedirectSpy.and.returnValue(true);

            service.resolveState(
                fakeTransition as any,
                {} as any,
                'fakeWebStorageKey',
                'fake fall back'
            );

            expect(fakeTransition.router.stateService.go).toHaveBeenCalledTimes(1);
            expect(fakeTransition.router.stateService.go).toHaveBeenCalledWith('fake fall back');
        });

        it('should not call transition.router.stateService.go when shouldRedirect false', () => {

            spyOn(fakeTransition.router.stateService, 'go').and.returnValue(null);
            shouldRedirectSpy.and.returnValue(false);

            service.resolveState(
                fakeTransition as any,
                {} as any,
                'fakeWebStorageKey',
                'fake fall back'
            );

            expect(fakeTransition.router.stateService.go).toHaveBeenCalledTimes(0);
        });
    });
});
