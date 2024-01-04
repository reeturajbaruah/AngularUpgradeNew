import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TransitionService, UrlService } from '@uirouter/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { CmsResolverService, CmsUtilService } from 'cms/services';
import { ENVIRON_CONFIG, WindowRef } from 'common/module';
import { } from 'jasmine';
import { cmsIds } from 'menu/constants';
import { ActiveBreakPointsService, MenuLinkMapperService } from 'menu/services';
import { PipesModule } from 'pipes/module';
import { Observable, of, timer } from 'rxjs';
import { concatMap, takeUntil, toArray } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import { FrameComponent } from './frame.component';


describe('component: menu-frame-component', () => {

    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;
    let menuLinkMapper: jasmine.SpyObj<MenuLinkMapperService>;
    let matIconRegistry: jasmine.SpyObj<MatIconRegistry>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let domSanitizer: jasmine.SpyObj<DomSanitizer>;
    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;
    let transitionService: jasmine.SpyObj<TransitionService>;
    let urlService: jasmine.SpyObj<UrlService>;
    let activeBreakPoints: jasmine.SpyObj<ActiveBreakPointsService>;
    let window: { document: jasmine.SpyObj<Document> };
    let environmentConfig: { mcAfeeIconQuerySelector: string };
    let mcAfeeIcon: { style: { bottom: string; transition: string } };
    let testScheduler: TestScheduler;
    let authenticationService: jasmine.SpyObj<AuthenticationService>;


    beforeEach(async () => {

        testScheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
        activeBreakPoints = jasmine.createSpyObj('activeBreakPointsService', ['asObservable']);
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);
        cmsResolverService.resolve.and.returnValue(Promise.resolve({
            facebook: 'fake facebook',
            twitter: 'fake twitter',
            instagram: 'fake instagram',
            linkedin: 'fake linkedin',
            youtube: 'fake youtube'
        }));
        urlService = jasmine.createSpyObj('urlService', ['path']);
        transitionService = jasmine.createSpyObj('transitionService', ['onSuccess']);
        menuLinkMapper = jasmine.createSpyObj('menuLinkMapper', ['getMapFilterObservable']);
        matIconRegistry = jasmine.createSpyObj('matIconRegistry', ['addSvgIcon']);
        domSanitizer = jasmine.createSpyObj('domSanitizer', ['bypassSecurityTrustResourceUrl']);
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
        authenticationService = jasmine.createSpyObj('authenticationService', ['isAuthenticated', 'isAuthenticated$', 'isPendingFunds', 'isPendingFunds$', 'isSuspended', 'isSuspended$']);
        window = {
            document: jasmine.createSpyObj('document', ['querySelector'])
        };
        mcAfeeIcon = {
            style: { bottom: '0px !important', transition: '' }
        };
        environmentConfig = {
            mcAfeeIconQuerySelector: '#fake-mcafee-id.some-fake-class'
        };
        window.document.querySelector.and.returnValue(mcAfeeIcon as HTMLElement);

        activeBreakPoints.asObservable.and.returnValue(new Observable());

        await TestBed
            .configureTestingModule({
                declarations: [
                    FrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: MenuLinkMapperService, useFactory: () => menuLinkMapper },
                    { provide: MatIconRegistry, useFactory: () => matIconRegistry },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: DomSanitizer, useFactory: () => domSanitizer },
                    { provide: CmsResolverService, useFactory: () => cmsResolverService },
                    { provide: TransitionService, useFactory: () => transitionService },
                    { provide: UrlService, useFactory: () => urlService },
                    { provide: ActiveBreakPointsService, useFactory: () => activeBreakPoints },
                    { provide: WindowRef, useFactory: () => window },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    {provide: AuthenticationService, useFactory: () => authenticationService}
                ]
            })
            .compileComponents();
            (authenticationService as any).isAuthenticated$ = of(true);
            (authenticationService as any).isPendingFunds$ = of(false);
            (authenticationService as any).isSuspended$ = of(false);
        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });


    describe('ngOnInit', () => {

        let currentUrlPathObservableSpy: jasmine.Spy;
        let authorizedCharmsObservableSpy: jasmine.Spy;
        beforeEach(() => {

            currentUrlPathObservableSpy = spyOn(component as any, 'currentUrlPathObservable');
            authorizedCharmsObservableSpy = spyOn(component as any, 'authorizedCharmsObservable');

            currentUrlPathObservableSpy.and.returnValue(new Observable());;
            authorizedCharmsObservableSpy.and.returnValue(new Observable());;
        });

        it('should set activeBreakPoint$ to the result of activeBreakPoints.asObservable() startWith empty first', () => {

            testScheduler.run(({ cold, expectObservable }) => {

                activeBreakPoints.asObservable.and.returnValue(cold('-a-b-c', {
                    a: { fake: true },
                    b: { 'fake 2': true },
                    c: { 'fake last': true }
                }));

                component.ngOnInit();

                expectObservable(component.activeBreakPoints$)
                    .toBe('fa-b-c', {
                        f: {},
                        a: { fake: true },
                        b: { 'fake 2': true },
                        c: { 'fake last': true }
                    });
                expect(activeBreakPoints.asObservable).toHaveBeenCalledOnceWith();
            });
        });

        it('should set dashBarInfo$ to emit when currentCharms or currentUrlPath change', () => {

            testScheduler.run(({ cold, expectObservable }) => {

                const authorizedCharms = '-a-a-b-b';
                const currentUrlPath = '  -a-b---c--d';
                const expected = '        xa-x-b----x';
                authorizedCharmsObservableSpy.and.returnValue(cold(authorizedCharms, {
                    a: [{
                        ShortDescription: 'fake short',
                        LongDescription: 'fake long',
                        svgIconName: 'fake svg icon name',
                        authorizedChildren: [{ url: 'fake url 1' }, { url: 'fake url 2' }]
                    }],
                    b: [{
                        ShortDescription: 'fake short',
                        LongDescription: 'fake long',
                        svgIconName: 'fake svg icon name',
                        authorizedChildren: [{ url: 'fake url 1' }, { url: 'fake url 2' }]
                    }, {
                        ShortDescription: 'fake short 2',
                        LongDescription: 'fake long 2',
                        svgIconName: 'fake svg icon name 2',
                        authorizedChildren: [{ url: 'fake url b' }, { url: 'fake url c' }]
                    }]
                }));

                currentUrlPathObservableSpy.and.returnValue(cold(currentUrlPath, {
                    a: 'fake url 1',
                    b: 'fake url b',
                    c: 'fake url c',
                    d: 'fake url x'
                }));

                component.ngOnInit();

                expectObservable(component.dashBarInfo$)
                    .toBe(expected, {
                        x: { show: false, charms: [] },
                        a: {
                            show: true,
                            charms: [{
                                active: true,
                                shortLabel: 'fake short',
                                fullLabel: 'fake long',
                                svgIconName: 'fake svg icon name',
                                url: 'fake url 1'
                            }]
                        },
                        b: {
                            show: true,
                            charms: [{
                                active: false,
                                shortLabel: 'fake short',
                                fullLabel: 'fake long',
                                svgIconName: 'fake svg icon name',
                                url: 'fake url 1'
                            }, {
                                active: true,
                                shortLabel: 'fake short 2',
                                fullLabel: 'fake long 2',
                                svgIconName: 'fake svg icon name 2',
                                url: 'fake url b'
                            }]
                        },
                    });
            });
        });

        it('should get commonCmsContent from cmsResolverService', () => {

            component.ngOnInit();

            expect(cmsResolverService.resolve).toHaveBeenCalledOnceWith({
                ItemId: cmsIds.CommonCmsContent, mergeParams: true
            });
        });

        it('should notify subscribers of commonCmsContent when commonCmsContentRetrieved', async () => {

            const before = component.commonCmsContent.toPromise();
            await expectAsync(before).toBePending();

            await component.ngOnInit();

            const after = component.commonCmsContent.toPromise();


            await expectAsync(before).toBeResolvedTo({
                facebook: 'fake facebook',
                twitter: 'fake twitter',
                instagram: 'fake instagram',
                linkedin: 'fake linkedin',
                youtube: 'fake youtube'
            });
            await expectAsync(after).toBeResolvedTo({
                facebook: 'fake facebook',
                twitter: 'fake twitter',
                instagram: 'fake instagram',
                linkedin: 'fake linkedin',
                youtube: 'fake youtube'
            });

        });
    });

    describe('currentUrlPathObservable', () => {

        it('should emit transitionService emits and currentUrlPath change', fakeAsync(async () => {

            let transitionSuccessCallback;
            const fakeUnsubscribe = jasmine.createSpy();
            transitionService.onSuccess.and.callFake((_, callback) => {

                transitionSuccessCallback = callback;
                return fakeUnsubscribe;
            });

            urlService.path.and.returnValues('/urlInitial', 'fail');

            const promise = component['currentUrlPathObservable']()
                .pipe(takeUntil(timer(160)), toArray())
                .toPromise();

            tick(1);

            transitionSuccessCallback();
            urlService.path.and.returnValues('/urlNext', 'fail');
            tick(50);

            transitionSuccessCallback();
            urlService.path.and.returnValues('/urlNext/', 'fail');
            tick(50);

            transitionSuccessCallback();
            transitionSuccessCallback();
            transitionSuccessCallback();
            urlService.path.and.returnValues('/urlNext2', 'fail');
            tick(60);

            expect(await promise).toEqual(['/urlInitial', '/urlNext', '/urlNext2']);

            expect(transitionService.onSuccess).toHaveBeenCalledOnceWith({}, jasmine.any(Function));
            expect(fakeUnsubscribe).toHaveBeenCalledTimes(1);
        }));
    });

    describe('authorizedCharmsObservable', () => {

        beforeEach(() => {

            cmsResolverService.resolve.and.returnValue([{
                Children: [{
                    ShortDescription: 'short 1',
                    LongDescription: 'long 1',
                    Image: 'imageString1',
                    Children: ['fake child1']
                },
                {
                    ShortDescription: 'short 2',
                    LongDescription: 'long 2',
                    Image: 'imageString2',
                    Children: ['fake child2']
                }]
            }] as any);
            cmsUtilService.generateFileSrc.and.callFake(img => 'fileSrc ' + img);
            domSanitizer.bypassSecurityTrustResourceUrl.and.callFake(url => 'bypassed ' + url);
            menuLinkMapper.getMapFilterObservable.and.callFake(charms$ =>
                charms$.pipe(concatMap(charms => of([
                    { label: charms[0].Label, authorizedChildren: charms[0].Children, url: charms[0].Url } as any
                ], [
                    { label: charms[0].Label, authorizedChildren: charms[0].Children, url: charms[0].Url } as any,
                    { label: charms[1].Label, authorizedChildren: charms[1].Children, url: charms[1].Url } as any
                ], [
                    { label: charms[1].Label, authorizedChildren: charms[1].Children, url: charms[1].Url } as any
                ])))
            );
        });

        it('should emit authorized charms', async () => {

            const result = await component['authorizedCharmsObservable']().pipe(toArray()).toPromise();

            expect(result).toEqual([
                [{
                    authorizedChildren: ['fake child1' as any],
                    ShortDescription: 'short 1',
                    LongDescription: 'long 1',
                    svgIconName: 'runtime-svg-charm-0-0'
                }],
                [{
                    authorizedChildren: ['fake child1'],
                    ShortDescription: 'short 1',
                    LongDescription: 'long 1',
                    svgIconName: 'runtime-svg-charm-0-0'
                },
                {
                    authorizedChildren: ['fake child2'],
                    ShortDescription: 'short 2',
                    LongDescription: 'long 2',
                    svgIconName: 'runtime-svg-charm-0-1'
                }],
                [{
                    authorizedChildren: ['fake child2'],
                    ShortDescription: 'short 2',
                    LongDescription: 'long 2',
                    svgIconName: 'runtime-svg-charm-0-1'
                }]]);

            expect(cmsResolverService.resolve).toHaveBeenCalledOnceWith({ ItemId: cmsIds.Charms });
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(2);
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledWith('imageString1');
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledWith('imageString2');
            expect(domSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledTimes(2);
            expect(domSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith('fileSrc imageString1');
            expect(domSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith('fileSrc imageString2');
            expect(matIconRegistry.addSvgIcon).toHaveBeenCalledTimes(2);
            expect(matIconRegistry.addSvgIcon).toHaveBeenCalledWith('runtime-svg-charm-0-0', 'bypassed fileSrc imageString1');
            expect(matIconRegistry.addSvgIcon).toHaveBeenCalledWith('runtime-svg-charm-0-1', 'bypassed fileSrc imageString2');
            expect(menuLinkMapper.getMapFilterObservable).toHaveBeenCalledTimes(1);

        });
    });

    describe('ngOnDestroy', () => {

        it('should complete commonCmsContentSubject', async () => {

            const before = component.commonCmsContent.toPromise();
            await expectAsync(before).toBePending();

            component.ngOnDestroy();

            const after = component.commonCmsContent.toPromise();

            await expectAsync(before).toBeResolved();
            await expectAsync(after).toBeResolved();
        });
    });

    describe('smallDeviceCharmsAppeared', () => {

        let mutationObserverSpy;

        beforeEach(() => {
            mutationObserverSpy = jasmine.createSpyObj(['disconnect', 'observe']);
            spyOn(component as any, 'createMutationObserver').and.returnValue(mutationObserverSpy);
        });

        it('should change mcAfeeIconStyle bottom to 50px when true', fakeAsync(() => {

            component.ngOnInit();
            component.smallDeviceCharmsAppeared(true);

            tick(1);

            expect(component['createMutationObserver']).toHaveBeenCalledOnceWith();
            expect(mcAfeeIcon.style.bottom).toEqual('50px');
            expect(mcAfeeIcon.style.transition).toEqual('all 0.25s ease 0s');
            expect(mutationObserverSpy.observe).toHaveBeenCalledOnceWith(mcAfeeIcon, { attributes: true, subtree: false });
        }));

        it('should change mcAfeeIconStyle bottom to 50px when true and mcAfee icon available', fakeAsync(() => {

            component.ngOnInit();
            window.document.querySelector.and.returnValue(null);

            component.smallDeviceCharmsAppeared(true);

            tick(1);

            expect(mcAfeeIcon.style.bottom).toEqual('0px !important');
            expect(mcAfeeIcon.style.transition).toEqual('');
            expect(mutationObserverSpy.observe).not.toHaveBeenCalled();

            tick(500);

            expect(mcAfeeIcon.style.bottom).toEqual('0px !important');
            expect(mcAfeeIcon.style.transition).toEqual('');
            expect(mutationObserverSpy.observe).not.toHaveBeenCalled();

            window.document.querySelector.and.returnValue(mcAfeeIcon as any);

            tick(500);

            expect(component['createMutationObserver']).toHaveBeenCalledOnceWith();
            expect(mcAfeeIcon.style.bottom).toEqual('50px');
            expect(mcAfeeIcon.style.transition).toEqual('all 0.25s ease 0s');
            expect(mutationObserverSpy.observe).toHaveBeenCalledOnceWith(mcAfeeIcon, { attributes: true, subtree: false });
        }));

        it('should not change mcAfeeIconStyle bottom when true and mcAfee icon not available within first 360,000 ms', fakeAsync(() => {

            component.ngOnInit();
            window.document.querySelector.and.returnValue(null);

            component.smallDeviceCharmsAppeared(true);

            tick(360000);

            expect(mcAfeeIcon.style.bottom).toEqual('0px !important');
            expect(mcAfeeIcon.style.transition).toEqual('');
            expect(mutationObserverSpy.observe).not.toHaveBeenCalled();

            window.document.querySelector.and.returnValue(mcAfeeIcon as any);

            tick(1000);

            expect(mcAfeeIcon.style.bottom).toEqual('0px !important');
            expect(mcAfeeIcon.style.transition).toEqual('');
            expect(mutationObserverSpy.observe).not.toHaveBeenCalled();
        }));

        it('should call mutationObserver.disconnect when mcafee icon missing and appeared false', () => {

            component.ngOnInit();
            window.document.querySelector.and.returnValue(null);

            component.smallDeviceCharmsAppeared(false);

            expect(component['createMutationObserver']).toHaveBeenCalledOnceWith();
            expect(mutationObserverSpy.disconnect).toHaveBeenCalledOnceWith();
        });

        it('should change mcAfeeIconStyle bottom to 0px when false', () => {

            component.ngOnInit();
            component.smallDeviceCharmsAppeared(false);

            expect(component['createMutationObserver']).toHaveBeenCalledOnceWith();
            expect(mcAfeeIcon.style.bottom).toEqual('0px');
            expect(mcAfeeIcon.style.transition).toEqual('all 0.25s ease 0s');
            expect(mutationObserverSpy.observe).not.toHaveBeenCalled();
        });
    });

});
