import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TransitionService, UIRouterGlobals } from '@uirouter/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { CmsReplacementService, CmsResolverService } from 'cms/services';
import { CurrentUserService, MatIconAvailabilityService, ResponseErrorService } from 'common/services';
import { stateNames as menuStateNames } from '../constants';
import { } from 'jasmine';
import { stateNames as loginStateNames } from 'login/constants';
import { cmsIds } from 'menu/constants';
import { FrameComponent } from 'menu/frame/frame.component';
import { CmsMenuLink, MenuLinkMapperService, MenuNavigationService } from 'menu/services';
import { PipesModule } from 'pipes/module';
import { asyncScheduler, EMPTY, NEVER, Observable, of, Subject, timer } from 'rxjs';
import { observeOn, reduce, take, takeUntil, toArray } from 'rxjs/operators';
import { ParentModalComponent } from '../hamburger/parent/parentModal.component';
import { HeaderComponent } from './header.component';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { MaintenanceConfigService } from 'common/services/maintenanceService/maintenanceConfig.service';
import { HttpClient } from '@angular/common/http';

describe('component: menu-header-component', () => {

    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;

    let parent: FrameComponent;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let menuLinkMapper: jasmine.SpyObj<MenuLinkMapperService>;
    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;
    let uiRouterGlobals: UIRouterGlobals;
    let transitionService: jasmine.SpyObj<TransitionService>;
    let matIcon: jasmine.SpyObj<MatIconAvailabilityService>;
    let matIconObservables: [[string, Subject<void>]];
    let menuNavigationService: jasmine.SpyObj<MenuNavigationService>;
    let replacementService: jasmine.SpyObj<CmsReplacementService>;
    let currentUser: jasmine.SpyObj<CurrentUserService>;
    let maintenanceConfigService: MaintenanceConfigService;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let onTransitionSuccessHandler;
    let environmentConfig;
    let httpClient: jasmine.SpyObj<HttpClient>;

    beforeEach(async () => {
        currentUser = jasmine.createSpyObj('currentUser', ['getCurrentUser']);
        (currentUser as any).authorizationChange$ = new Observable();
        replacementService = jasmine.createSpyObj('replacementService', ['transformTemplate']);
        menuNavigationService = jasmine.createSpyObj('menuNavigationService', ['showSearchModal', 'openMenuModal', 'showDropdownModal', 'logout']);
        authService = jasmine.createSpyObj('authService', ['logout']);
        (authService as any).isAuthenticated$ = 'fake is authenticated observable' as any;
        menuLinkMapper = jasmine.createSpyObj('menuLinkMapper', ['getMapFilterObservable']);
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);
        matIcon = jasmine.createSpyObj('matIconAvailabilityService', ['whenAvailable']);
        transitionService = jasmine.createSpyObj('transitionService', ['onSuccess']);
        responseErrorService = jasmine.createSpyObj('ResponseErrorService', ['displayToast']);
        httpClient = jasmine.createSpyObj('HttpClient', ['get']);

        httpClient.get.and.returnValue(of({}));
        parent = {
            commonCmsContent: of({
                facebook: 'fake facebook link',
                twitter: 'fake twitter link',
                instagram: 'fake instagram link',
                linkedin: 'fake linkedin link',
                youtube: 'fake youtube link'
            })
        } as FrameComponent;

        uiRouterGlobals = {
            current: {
                name: 'fake current state name'
            }
        } as UIRouterGlobals;
        environmentConfig = {
            isMergeMATandVioOn: false
        };

        menuLinkMapper.getMapFilterObservable.and.returnValue('fake map filter observable' as any);
        cmsResolverService.resolve.and.callFake(({ ItemId }) =>
            Promise.resolve({
                Children: [{ Label: 'fake cms children for ' + ItemId} as CmsMenuLink] as CmsMenuLink[],
                ShortDescription: 'fake short ' + ItemId,
                LongDescription: 'fake long ' + ItemId
            }) as any);

        matIconObservables = [] as any;

        matIcon.whenAvailable.and.callFake(name => {

            const subject = new Subject<void>();
            matIconObservables.push([name, subject]);

            return subject.asObservable();
        });

        transitionService.onSuccess.and.callFake((_, handler) => {

            onTransitionSuccessHandler = handler;
            return () => { };
        });

        await TestBed
            .configureTestingModule({
                declarations: [
                    HeaderComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: MenuLinkMapperService, useFactory: () => menuLinkMapper },
                    { provide: CmsResolverService, useFactory: () => cmsResolverService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: MenuNavigationService, useFactory: () => menuNavigationService },
                    { provide: TransitionService, useFactory: () => transitionService },
                    { provide: MatIconAvailabilityService, useFactory: () => matIcon },
                    { provide: CmsReplacementService, useFactory: () => replacementService },
                    { provide: CurrentUserService, useFactory: () => currentUser },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: HttpClient, useFactory: () => httpClient }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.debugElement.componentInstance;
        maintenanceConfigService = TestBed.inject(MaintenanceConfigService);
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should setup currentCallToAction', async () => {

            expect(component.currentCallToAction$).toBeUndefined();

            component.ngOnInit();

            expect(cmsResolverService.resolve).toHaveBeenCalledWith({
                ItemId: cmsIds.HeaderCallToActions
            });
            expect(component.currentCallToAction$).toBe('fake map filter observable' as any);
            expect(menuLinkMapper.getMapFilterObservable).toHaveBeenCalledTimes(1);
            expect(await menuLinkMapper.getMapFilterObservable.calls.first().args[0].toPromise())
                .toEqual([{ Label: 'fake cms children for ' + cmsIds.HeaderCallToActions }] as CmsMenuLink[]);
        });

        it('should setup isAuthenticated$', async () => {

            expect(component.isAuthenticated$).toBeUndefined();

            component.ngOnInit();

            expect(component.isAuthenticated$).toBe('fake is authenticated observable' as any);

        });

        it('should setup isNotSearchPage$', () => {

            expect(component.isNotSearchPage$).toBeUndefined();

            component.ngOnInit();

            expect(component.isNotSearchPage$).toBeInstanceOf(Observable);
        });

        it('isNotSearchPage$ should emit at least once when subscribed', async () => {

            expect(component.isNotSearchPage$).toBeUndefined();

            component.ngOnInit();

            expect(component.isNotSearchPage$).toBeInstanceOf(Observable);

            await expectAsync(component.isNotSearchPage$.pipe(take(1)).toPromise())
                .toBeResolved();
        });

        it('isNotSearchPage$ should emit true if currentState not search', fakeAsync(async () => {

            expect(component.isNotSearchPage$).toBeUndefined();

            component.ngOnInit();

            expect(component.isNotSearchPage$).toBeInstanceOf(Observable);

            const result = component.isNotSearchPage$
                .pipe(
                    takeUntil(timer(210)),
                    reduce((acc, curr) => [...acc, curr], [])
                ).toPromise();

            tick(51);
            uiRouterGlobals.current.name = 'another fake state';
            onTransitionSuccessHandler();
            tick(51);
            uiRouterGlobals.current.name = menuStateNames.Search;
            onTransitionSuccessHandler();
            tick(51);
            uiRouterGlobals.current.name = loginStateNames.ClaimSession;
            onTransitionSuccessHandler();
            tick(65);
            expect(await result).toEqual([true, false, true]);
            expect(transitionService.onSuccess).toHaveBeenCalledOnceWith({}, onTransitionSuccessHandler);
        }));

        it('should setup isNotLoginPage', () => {

            expect(component.isNotLoginPage$).toBeUndefined();

            component.ngOnInit();

            expect(component.isNotLoginPage$).toBeInstanceOf(Observable);
        });

        it('isNotLoginPage should emit at least once when subscribed', async () => {

            expect(component.isNotLoginPage$).toBeUndefined();

            component.ngOnInit();

            expect(component.isNotLoginPage$).toBeInstanceOf(Observable);

            await expectAsync(component.isNotLoginPage$.pipe(take(1)).toPromise())
                .toBeResolved();
        });

        it('isNotLoginPage should emit true if currentState not login', fakeAsync(async () => {

            expect(component.isNotLoginPage$).toBeUndefined();

            component.ngOnInit();

            expect(component.isNotLoginPage$).toBeInstanceOf(Observable);

            const result = component.isNotLoginPage$
                .pipe(
                    takeUntil(timer(210)),
                    reduce((acc, curr) => [...acc, curr], [])
                ).toPromise();

            tick(51);
            uiRouterGlobals.current.name = 'another fake state';
            onTransitionSuccessHandler();
            tick(51);
            uiRouterGlobals.current.name = loginStateNames.Login;
            onTransitionSuccessHandler();
            tick(51);
            uiRouterGlobals.current.name = loginStateNames.ClaimSession;
            onTransitionSuccessHandler();
            tick(65);
            expect(await result).toEqual([true, false, true]);
            expect(transitionService.onSuccess).toHaveBeenCalledOnceWith({}, onTransitionSuccessHandler);
        }));

        [
            'showHamburgerIcon$',
            'showHctraLogo$',
            'showSearchIcon$',
            'showAccountIcon$',
            'showDownArrow$',
            'twitter$',
            'facebook$',
            'instagram$',
            'linkedin$',
            'youtube$'
        ].forEach((observable) => {

            it(`should setup ${observable}`, () => {

                expect(component[observable]).toBeUndefined();

                component.ngOnInit();

                expect(component[observable]).toBeInstanceOf(Observable);
            });
        });

        [
            { observable: 'showAccountIcon$', name: 'account-icon' },
            { observable: 'showDownArrow$', name: 'home-down-arrow' },
            { observable: 'showHamburgerIcon$', name: 'hamburger-menu' },
            { observable: 'showHctraLogo$', name: 'hctra-logo' },
            { observable: 'showSearchIcon$', name: 'search-icon' }
        ].forEach(({ observable, name }) => {
            it(`${observable} should emit true when matIcon.whenAvailable emits`, async () => {

                expect(component[observable]).toBeUndefined();

                component.ngOnInit();

                expect(component[observable]).toBeInstanceOf(Observable);

                const result = component[observable]
                    .pipe(
                        take(3),
                        reduce((acc, curr) => [...acc, curr], [])
                    )
                    .toPromise();

                const observables = matIconObservables.filter(x => x[0] === name);

                expect(observables.length).toBe(1);

                observables[0][1].next();
                observables[0][1].next();
                observables[0][1].next();
                observables[0][1].next();
                observables[0][1].next();

                expect(await result).toEqual([true, true, true]);
            });
        });

        [
            { observable: 'twitter$', name: 'twitter-icon', emit: 'fake twitter link' },
            { observable: 'facebook$', name: 'facebook-icon', emit: 'fake facebook link' },
            { observable: 'instagram$', name: 'instagram-icon', emit: 'fake instagram link' },
            { observable: 'linkedin$', name: 'linkedin-icon', emit: 'fake linkedin link' },
            { observable: 'youtube$', name: 'youtube-icon', emit: 'fake youtube link' }
        ].forEach(({ observable, name, emit }) => {

            it(`${observable} should emit ${emit} when matIcon.whenAvailable emits`, async () => {

                expect(component[observable]).toBeUndefined();

                component.ngOnInit();

                expect(component[observable]).toBeInstanceOf(Observable);

                const result = component[observable]
                    .pipe(
                        take(3),
                        reduce((acc, curr) => [...acc, curr], [])
                    )
                    .toPromise();

                const observables = matIconObservables.filter(x => x[0] === name);

                expect(observables.length).toBe(1);

                observables[0][1].next();
                observables[0][1].next();
                observables[0][1].next();
                observables[0][1].next();
                observables[0][1].next();

                expect(await result).toEqual([emit, emit, emit]);
            });
        });

        it('should setup accountDropdownDescripion$', async () => {

            expect(component.accountDropdownDescripion$).toBeUndefined();

            component.ngOnInit();

            expect(await component.accountDropdownDescripion$.toPromise()).toBe('fake long ' + cmsIds.AccountDropdown);
        });

        it('should setup greeting$', async () => {

            expect(component.greeting$).toBeUndefined();

            component.ngOnInit();

            expect(await component.greeting$.toPromise()).toBe('fake short ' + cmsIds.AccountDropdown);
        });

        it('should setup user$', async () => {

            replacementService.transformTemplate.and.callFake((x, { name }) => x + name);
            (currentUser as any).authorizationChange$ = of(1, 2, 3, 4).pipe(observeOn(asyncScheduler));
            currentUser.getCurrentUser.and.returnValues(null, false, { firstName: 'Tom' }, { firstName: 'Ahmed' }, { firstName: 'Sara' });
            expect(component.user$).toBeUndefined();

            component.ngOnInit();

            expect(await component.user$.pipe(toArray()).toPromise())
                .toEqual([
                    'New User',
                    'New User',
                    'Tom',
                    'Ahmed',
                    'Sara']);
        });
    });

    describe('showHamburgerMenu', () => {

        beforeEach(() => {

            component.ngOnInit();
        });

        afterEach(() => {
            component.ngOnDestroy();
        });

        it('should call menuNavigationService.openMenuModal once then wait for it to close', fakeAsync(async () => {

            menuNavigationService.openMenuModal.and.returnValue({
                componentInstance: {
                    beforeClosed$: NEVER
                }
            } as any);

            component.showHamburgerMenu();
            tick(1);
            component.showHamburgerMenu();
            tick(1);
            component.showHamburgerMenu();
            tick(1);
            component.showHamburgerMenu();
            tick(1);

            expect(menuNavigationService.openMenuModal).toHaveBeenCalledTimes(1);
            expect(await menuNavigationService.openMenuModal.calls.first().args[0])
                .toBe(ParentModalComponent);
            expect(await (menuNavigationService.openMenuModal.calls.first().args[1] as any).cmsContent.toPromise())
                .toEqual([{ Label: 'fake cms children for ' + cmsIds.HamburgerMenuLinks }] as CmsMenuLink[]);
        }));

        it('should allow call to menuNavigationService.openMenuModal when last modal resolves', fakeAsync(() => {

            menuNavigationService.openMenuModal.and.returnValue({
                componentInstance: {
                    beforeClosed$: EMPTY
                }
            } as any);

            component.showHamburgerMenu();
            tick(1);
            component.showHamburgerMenu();
            tick(1);
            component.showHamburgerMenu();
            tick(1);
            component.showHamburgerMenu();
            tick(1);

            expect(menuNavigationService.openMenuModal).toHaveBeenCalledTimes(4);
        }));

    });

    describe('showAccountDropdown', () => {
        it('should check getMaintenanceDetails to have been called', () => {
           spyOn(maintenanceConfigService, 'getMaintenanceDetails').and.returnValue(of());
           spyOn(component['showAccountDropdownSubject'], 'next');
            const ele = {} as HTMLElement;
            component.showAccountDropdown(ele);
            expect(maintenanceConfigService.getMaintenanceDetails).toHaveBeenCalled();
            component['showAccountDropdownSubject'].subscribe((d) => {
                expect(d).toHaveBeenCalled();
            });
        });
        // it('should call menuNavigationService.showDropdownModal once then wait for it to close', fakeAsync(async () => {
        //     component.ngOnInit();

        //     menuNavigationService.showDropdownModal.and.returnValue({
        //         afterClosed: () => NEVER
        //     } as any);

        //     component.showAccountDropdown({ getBoundingClientRect: () => 'fake dom rect' } as any);
        //     tick(1);
        //     component.showAccountDropdown({ getBoundingClientRect: () => 'fake dom rect 2' } as any);
        //     tick(1);
        //     component.showAccountDropdown({ getBoundingClientRect: () => 'fake dom rect 3' } as any);
        //     tick(1);
        //     component.showAccountDropdown({ getBoundingClientRect: () => 'fake dom rect 4' } as any);
        //     tick(1);

        //     expect(menuNavigationService.showDropdownModal).toHaveBeenCalledTimes(1);
        //     expect(await (menuNavigationService.showDropdownModal.calls.first().args[0] as any).toPromise())
        //         .toEqual([{ Label: 'fake cms children for ' + cmsIds.AccountDropdown }] as CmsMenuLink[]);
        //     expect(menuNavigationService.showDropdownModal.calls.first().args[1]).toBe('fake dom rect' as any);
        // }));

        // it('should allow call to menuNavigationService.showDropdownModal when last modal resolves', fakeAsync(() => {
        //     component.ngOnInit();

        //     menuNavigationService.showDropdownModal.and.returnValue({
        //         afterClosed: () => EMPTY
        //     } as any);

        //     component.showAccountDropdown({ getBoundingClientRect: () => 'fake dom rect' } as any);
        //     tick(1);
        //     component.showAccountDropdown({ getBoundingClientRect: () => 'fake dom rect 2' } as any);
        //     tick(1);
        //     component.showAccountDropdown({ getBoundingClientRect: () => 'fake dom rect 3' } as any);
        //     tick(1);
        //     component.showAccountDropdown({ getBoundingClientRect: () => 'fake dom rect 4' } as any);
        //     tick(1);

        //     expect(menuNavigationService.showDropdownModal).toHaveBeenCalledTimes(4);
        // }));

    });

    describe('showSearch', () => {

        beforeEach(() => {

            component.ngOnInit();
        });

        afterEach(() => {
            component.ngOnDestroy();
        });

        it('should call menuNavigationService.showSearchModal once then wait for it to close', fakeAsync(async () => {

            menuNavigationService.showSearchModal.and.returnValue({
                afterClosed: () => NEVER
            } as any);

            component.showSearch({ getBoundingClientRect: () => 'fake dom rect' } as any);
            tick(1);
            component.showSearch({ getBoundingClientRect: () => 'fake dom rect 2' } as any);
            tick(1);
            component.showSearch({ getBoundingClientRect: () => 'fake dom rect 3' } as any);
            tick(1);
            component.showSearch({ getBoundingClientRect: () => 'fake dom rect 4' } as any);
            tick(1);

            expect(menuNavigationService.showSearchModal).toHaveBeenCalledTimes(1);
            expect(menuNavigationService.showSearchModal.calls.first().args[0]).toBe('fake dom rect' as any);
        }));

        it('should allow call to menuNavigationService.showSearchModal when last modal resolves', fakeAsync(() => {

            menuNavigationService.showSearchModal.and.returnValue({
                afterClosed: () => EMPTY
            } as any);

            component.showSearch({ getBoundingClientRect: () => 'fake dom rect' } as any);
            tick(1);
            component.showSearch({ getBoundingClientRect: () => 'fake dom rect 2' } as any);
            tick(1);
            component.showSearch({ getBoundingClientRect: () => 'fake dom rect 3' } as any);
            tick(1);
            component.showSearch({ getBoundingClientRect: () => 'fake dom rect 4' } as any);
            tick(1);

            expect(menuNavigationService.showSearchModal).toHaveBeenCalledTimes(4);
        }));

    });
});
