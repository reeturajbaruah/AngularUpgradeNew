import { ChangeDetectorRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaObserver } from '@angular/flex-layout';
import { TransitionService } from '@uirouter/core';
import { ToasterService } from 'common/services';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { Subject, Subscription } from 'rxjs';
import { ToasterContainerComponent } from './toaster-container.component';
import { WindowRef } from 'common/providers';
import { StorefrontUtilityService } from '../../../storefront/services/storefrontUtility.service';

describe('component: toaster container', () => {

    let fixture: ComponentFixture<ToasterContainerComponent>;
    let component: ToasterContainerComponent;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let transitionService: jasmine.SpyObj<TransitionService>;
    let mediaObserver: jasmine.SpyObj<MediaObserver>;
    let storeFrontUtilityService;
    let ref: jasmine.SpyObj<ChangeDetectorRef>;
    let windowRef: jasmine.SpyObj<Window>;
    const toastSub = new Subject<any>();

    beforeEach(async () => {
        toasterService = jasmine.createSpyObj('ToasterService', ['remove', 'removeAll', 'showDelayed'], ['toasts$']);
        transitionService = jasmine.createSpyObj('transitionService', ['onStart', 'onFinish']);
        mediaObserver = jasmine.createSpyObj('mediaObserver', ['isActive']);
        ref = jasmine.createSpyObj('ChangeDetectorRef', ['detach', 'detectChanges']);
        windowRef = jasmine.createSpyObj('Window', ['addEventListener', 'removeAllListeners'], ['pageYOffset', 'scrollY']);

        ref.detach.and.callFake(() => { });
        ref.detectChanges.and.callFake(() => { });
        windowRef.removeAllListeners.and.returnValue();

        storeFrontUtilityService = {
            webStoreData: {
                fullSiteMode: false,
            },
            isRunningAsKiosk: false
        };

        await TestBed
            .configureTestingModule({
                declarations: [
                    ToasterContainerComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: ToasterService, useFactory: () => toasterService },
                    { provide: TransitionService, useFactory: () => transitionService },
                    { provide: MediaObserver, useFactory: () => mediaObserver },
                    { provide: StorefrontUtilityService, useFactory: () => storeFrontUtilityService },
                    { provide: ChangeDetectorRef, useFactory: () => ref },
                    { provide: WindowRef, useFactory: () => windowRef }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ToasterContainerComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {
        let sub = new Subscription();

        beforeEach(() => {
            (Object.getOwnPropertyDescriptor(toasterService, 'toasts$').get as jasmine.Spy).and.returnValue(toastSub.asObservable());
        });

        afterAll(() => {
            sub.unsubscribe();
        });

        it('should call onResize to set size expectations', () => {
            spyOn(component, 'onResize');

            component.ngOnInit();
            component.ngAfterViewInit();

            expect(component.onResize).toHaveBeenCalled();
        });

        it('should grab the toaster array observable', done => {
            component.ngOnInit();
            component.ngAfterViewInit();

            sub = component.toasts$.subscribe(t => {
                expect(t).toEqual([1] as any);
                done();
            });

            toastSub.next([1]);
        });
    });

    describe('onResize', () => {
        it('should set initialOffset - mobile', () => {
            (mediaObserver.isActive as jasmine.Spy).and.returnValue(true);

            component.onResize();

            expect(component['topInitialOffset']).toEqual(component['toasterMobileTopOffset']);
            expect(component['previousView']).toEqual('Mobile');
        });

        it('should set initialOffset - desktop', () => {
            (mediaObserver.isActive as jasmine.Spy).and.returnValue(false);

            component.onResize();

            expect(component['topInitialOffset']).toEqual(component['toasterDesktopTopOffset']);
            expect(component['previousView']).toEqual('Desktop');
        });
    });

    describe('setTopOffset', () => {
        [
            { index: 0, expectedOffset: 40 },
            { index: 1, expectedOffset: 81 },
            { index: 10, expectedOffset: 450 }
        ].forEach(({ index, expectedOffset }) => {
            it('should assign an offset based on index', () => {
                component['topInitialOffset'] = 40;

                const response = component.setTopOffset(index);

                expect(response).toEqual({
                    top: `${expectedOffset}px`,
                    left: '0px',
                    width: '100%'
                });
            });
        });
    });

    describe('transition hook', () => {
        it('should remove all toasters when state transition begins', () => {
            let hookFn;
            transitionService.onStart.and.callFake((_, hookFnParam) => {
                hookFn = hookFnParam;
                return () => { };
            });

            TestBed.createComponent(ToasterContainerComponent);
            hookFn();

            expect(toasterService.removeAll).toHaveBeenCalledTimes(1);
        });

        it('should display all delayed toasters when state transition finishes', () => {
            let hookFn;
            transitionService.onFinish.and.callFake((_, hookFnParam) => {
                hookFn = hookFnParam;
                return () => { };
            });

            TestBed.createComponent(ToasterContainerComponent);
            hookFn();

            expect(toasterService.showDelayed).toHaveBeenCalledTimes(1);
        });
    });

    describe('showToasterIfScrollHeight', () => {
        it('desktopUi is not null and has scrolled', () => {
            component[`desktopUi`] = { scrollTop: 0 } as any;
            component[`hasScrolled`] = true;

            component[`showToasterIfScrollHeight`]();

            expect(component[`showToasterCont`]).toBeTrue();
        });

        it('desktopUi is null and has not scrolled', (done) => {
            component[`showToasterIfScrollHeight`]();

            setTimeout(() => {
                expect(component[`hasScrolled`]).toBeTrue();
                done();
            }, 550);
        });
    });
});
