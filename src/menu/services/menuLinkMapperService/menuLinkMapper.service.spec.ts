import { } from 'jasmine';
import { MenuLinkMapperService, LinkAuthorizationService } from 'menu/services';
import { StateService } from '@uirouter/core';
import { FutureRoutesService } from 'common/services/futureRoutes.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { StateRegistry } from '@uirouter/core';
import { of, Subject, timer, merge } from 'rxjs';
import { delay, reduce, take, takeUntil } from 'rxjs/operators';
import { fakeAsync, tick } from '@angular/core/testing';

describe('menuLinkMapperService', () => {

    let authService: AuthenticationService;
    let stateRegistry: jasmine.SpyObj<StateRegistry>;
    let stateService: jasmine.SpyObj<StateService>;
    let futureRoutesService: jasmine.SpyObj<FutureRoutesService>;
    let linkAuthorizationService: jasmine.SpyObj<LinkAuthorizationService>;
    let authorizationChangeSubject: Subject<undefined>;
    let onStatesChangedHandler;
    const userRoles: any = {};

    let service: MenuLinkMapperService;

    beforeEach(() => {

        stateRegistry = jasmine.createSpyObj('state', ['onStatesChanged']);
        stateService = jasmine.createSpyObj('stateService', ['get']);
        futureRoutesService = jasmine.createSpyObj('futureRoutesService', ['get']);
        linkAuthorizationService = jasmine.createSpyObj('linkAuthorizationService', ['isAllowed']);

        authorizationChangeSubject = new Subject<undefined>();
        authService = {
            isAuthenticated$: authorizationChangeSubject.asObservable(),
             isAuthenticated: () => false
        } as any;


        stateRegistry.onStatesChanged.and.callFake(handler => {

            onStatesChangedHandler = handler;
            return () => { };
        });

        linkAuthorizationService.isAllowed.and.callFake(x => x.url.toLowerCase() !== '/forbidden');
        futureRoutesService.get.and.returnValue([
            { name: 'Forbidden', url: '/forbidden', resolve: [{ authorizedRoles: ['fake forbidden'] }] },
            { name: 'a.b.c', url: '/cbla', resolve: [{ authorizedRoles: ['fake a.b.c'] }] },
            { name: 'a.b', url: '/bbla', resolve: [{ authorizedRoles: ['fake a.b'] }] },
            { name: 'a', url: '/abla', resolve: [{ authorizedRoles: ['fake a'] }] },
            { name: 'alreadyLoaded', url: '/loaded', resolve: [{ authorizedRoles: ['fake future'] }] },
        ] as any);

        stateService.get.and.returnValue([
            { name: 'alreadyLoaded', url: '/loaded', resolve: [{ authorizedRoles: ['fake loaded'] }] },
            { name: 'angularjs.a.b', url: '/angularjsb', data: { authorizedRoles: ['fake ang b'] } },
            { name: 'angularjs.a', url: '/angularjsa', data: { authorizedRoles: ['fake ang a'] } },
            { name: 'angularjs', url: '/angularjs', data: { authorizedRoles: ['fake ang'] } },
        ] as any);

        service = new MenuLinkMapperService(authService, stateRegistry, stateService, futureRoutesService, linkAuthorizationService, userRoles);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('mapfilter', () => {

        it('should return mapped and filtered menu', async () => {

            const result = await service.mapFilter([
                {
                    Url: '',
                    Label: 'Forbidden Sub Menu',
                    Children: [{
                        Url: '/forbidden',
                        Label: 'Forbidden Buried',
                        Children: []
                    }]
                },
                {
                    Url: '/forbidden',
                    Label: 'Forbidden Top',
                    Children: []
                },
                {
                    Url: '/loaded',
                    Label: 'Loaded Link',
                    Children: []
                }, {
                    Url: '',
                    Label: 'Some sub menu',
                    Children: [
                        {
                            Url: '/angularjs/angularjsa/angularjsb',
                            Label: 'Angularjs Link',
                            Children: []
                        }, {
                            Url: '',
                            Label: 'Some other sub menu',
                            Children: [
                                {
                                    Url: '/abla/bbla/cblA',
                                    Label: 'Some link Y',
                                    Children: []
                                },
                                {
                                    Url: '/abla/bbla',
                                    Label: 'Some Link Z',
                                    Children: []
                                },
                                {
                                    Url: 'https://www.external.com',
                                    Label: 'External Link',
                                    Children: []
                                }
                            ]
                        }
                    ]
                }
            ]);

            expect(result).toEqual([
                {
                    url: '/loaded',
                    label: 'Loaded Link',
                    name: 'alreadyLoaded',
                    hasChildren: false,
                    authorizedChildren: [],
                    external: false
                }, {
                    url: '#some-sub-menu-sub-menu',
                    label: 'Some sub menu',
                    name: null,
                    hasChildren: true,
                    external: false,
                    authorizedChildren: [
                        {
                            url: '/angularjs/angularjsa/angularjsb',
                            label: 'Angularjs Link',
                            name: 'angularjs.a.b',
                            hasChildren: false,
                            authorizedChildren: [],
                            external: false
                        }, {
                            url: '#some-other-sub-menu-sub-menu',
                            label: 'Some other sub menu',
                            name: null,
                            hasChildren: true,
                            external: false,
                            authorizedChildren: [
                                {
                                    url: '/abla/bbla/cblA',
                                    label: 'Some link Y',
                                    name: 'a.b.c',
                                    hasChildren: false,
                                    authorizedChildren: [],
                                    external: false
                                }, {
                                    url: '/abla/bbla',
                                    label: 'Some Link Z',
                                    name: 'a.b',
                                    hasChildren: false,
                                    authorizedChildren: [],
                                    external: false
                                }, {
                                    url: 'https://www.external.com',
                                    label: 'External Link',
                                    name: null,
                                    hasChildren: false,
                                    authorizedChildren: [],
                                    external: true
                                }
                            ]
                        }
                    ]
                }
            ]);
        });

        it('should prefer using route info from futureRoutes', async () => {

            await service.mapFilter([{
                Url: '/loaded',
                Label: 'Loaded Link',
                Children: []
            }]);

            expect(linkAuthorizationService.isAllowed).toHaveBeenCalledOnceWith({ url: '/loaded', authorizedRoles: ['fake future'] });
        });

        it('should call linkAuthorizationService.isAllowed with empty authorized roles when link not found', async () => {

            await service.mapFilter([{
                Url: '/someMissingLink',
                Label: 'Missing Link',
                Children: []
            }]);

            expect(linkAuthorizationService.isAllowed).toHaveBeenCalledOnceWith({ url: '/someMissingLink', authorizedRoles: [undefined] });
        });
    });

    describe('getMapFilterObservable', () => {

        let mapFilterSpy: jasmine.Spy;

        beforeEach(() => {

            mapFilterSpy = spyOn(service, 'mapFilter');
            mapFilterSpy.and.returnValue(Promise.resolve('fake result') as any);
        });

        it('should generate new results using mapFilter at least once', async () => {

            await expectAsync(
                service.getMapFilterObservable(of('fake links') as any)
                    .pipe(take(1))
                    .toPromise())
                .toBeResolvedTo('fake result' as any);

            expect(mapFilterSpy).toHaveBeenCalledOnceWith('fake links');
        });

        it('should emit just once when event generators emit within 100ms of each other ', fakeAsync(async () => {

            const result = service.getMapFilterObservable(of('fake links', 'fake links latest') as any)
                .pipe(
                    takeUntil(timer(150)),
                    reduce((acc, curr) => [...acc, curr], [])
                ).toPromise();


            tick(5);
            authorizationChangeSubject.next(undefined);
            authorizationChangeSubject.next(undefined);
            authorizationChangeSubject.next(undefined);
            tick(5);
            onStatesChangedHandler();
            onStatesChangedHandler();
            onStatesChangedHandler();
            onStatesChangedHandler();
            tick(141);

            expect(await result).toEqual(['fake result']);

            expect(stateRegistry.onStatesChanged).toHaveBeenCalledOnceWith(onStatesChangedHandler);
            expect(mapFilterSpy).toHaveBeenCalledOnceWith('fake links latest');
        }));

        it('should emit multiple times when events fire gap greater than debouce', fakeAsync(async () => {

            mapFilterSpy.and.returnValues(
                ...(['fake 1', 'fake 2', 'fake 3', 'fake 4']
                    .map(x => Promise.resolve(x) as any)));

            const result = service.getMapFilterObservable(merge(
                of('fake links'),
                of('fake links latest').pipe(delay(53))
            ) as any, 50)
                .pipe(
                    takeUntil(timer(250)),
                    reduce((acc, curr) => [...acc, curr], [])
                ).toPromise();


            tick(55);
            expect(mapFilterSpy).toHaveBeenCalledOnceWith('fake links');
            mapFilterSpy.calls.reset();

            tick(55);
            expect(mapFilterSpy).toHaveBeenCalledOnceWith('fake links latest');
            mapFilterSpy.calls.reset();

            onStatesChangedHandler();
            tick(55);
            expect(mapFilterSpy).toHaveBeenCalledOnceWith('fake links latest');
            mapFilterSpy.calls.reset();


            authorizationChangeSubject.next(undefined);
            tick(55);
            expect(mapFilterSpy).toHaveBeenCalledOnceWith('fake links latest');
            mapFilterSpy.calls.reset();
            tick(100);
            expect(await result).toEqual(['fake 1', 'fake 2', 'fake 3', 'fake 4']);

            expect(stateRegistry.onStatesChanged).toHaveBeenCalledOnceWith(onStatesChangedHandler);
        }));
    });
});
