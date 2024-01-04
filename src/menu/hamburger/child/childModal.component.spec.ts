import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { EMPTY, NEVER, Observable, of, Subject } from 'rxjs';
import { reduce, take } from 'rxjs/operators';
import { ChildModalComponent } from './childModal.component';
import { MatIconAvailabilityService } from 'common/services';
import { LinkInfo, MenuNavigationService } from 'menu/services';



describe('component: hamburger-child-modal', () => {


    let fixture: ComponentFixture<ChildModalComponent>;
    let component: ChildModalComponent;
    let matIcon: jasmine.SpyObj<MatIconAvailabilityService>;
    let menuNavigationService: jasmine.SpyObj<MenuNavigationService>;

    beforeEach(async () => {
       
        menuNavigationService = jasmine.createSpyObj('menuNavigationService', ['goToLinkFromHamburger']);
        matIcon = jasmine.createSpyObj('matIconAvailabilityService', ['whenAvailable']);

        matIcon.whenAvailable.and.returnValue(new Observable());

        await TestBed
            .configureTestingModule({
                declarations: [
                    ChildModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: MenuNavigationService, useFactory: () => menuNavigationService },
                    { provide: MatIconAvailabilityService, useFactory: () => matIcon },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ChildModalComponent);
        component = fixture.debugElement.componentInstance;

        component.data = {
            menuPath: [],
            currentMenu$: new Observable<any>()
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        [
            ['showBackIcon$', 'previous-arrow'],
            ['showCloseIcon$', 'close-x']
        ].forEach(([observable, svgName]) => {

            it(`${observable} should emit true when matIcon.whenAvailable emits`, async () => {

                const subject = new Subject<void>();
                matIcon.whenAvailable.and.returnValue(subject.asObservable());
                
                expect(component[observable]).toBeUndefined();

                component.ngOnInit();

                expect(component[observable]).toBeInstanceOf(Observable);

                const result = component[observable]
                    .pipe(
                        take(3),
                        reduce((acc, curr) => [...acc, curr], [])
                    )
                    .toPromise();

                subject.next();
                subject.next();
                subject.complete();
                subject.next();
                subject.next();
                subject.complete();

                expect(await result).toEqual([true, true]);
                expect(matIcon.whenAvailable).toHaveBeenCalledWith(svgName);
            });
        });

        it('$title should emit last element is data.menuPath upper cased', async () => {

            component.data = {
                menuPath: ['bla', 'some', 'thing', 'the title we care about'],
                currentMenu$: new Observable<any>()
            };

            component.ngOnInit();

            expect(await component.title$.toPromise()).toEqual('THE TITLE WE CARE ABOUT');
        });

        it('currentViewLinks$ should be links specified in menu path', async () => {

            component.data = {
                menuPath: ['Important Top', 'Important Middle', 'Important Current'],
                currentMenu$: of([
                    { label: 'Some Label' },
                    {
                        label: 'Important Top', authorizedChildren: [
                            {
                                label: 'Important Middle', authorizedChildren: [
                                    { label: 'Important Current', authorizedChildren: [{ label: '1' }, { label: '2' }] }
                                ]
                            }
                        ]
                    }
                ] as LinkInfo[])
            };

            component.ngOnInit();
            const close = component.close$.pipe(take(1)).toPromise();

            expect(await component.currentViewLinks$.toPromise()).toEqual([{ label: '1' }, { label: '2' }] as LinkInfo[]);
            await expectAsync(close).toBePending();
        });

        it('currentViewLinks$ should tap back if menuPath not reachable', async () => {

            component.data = {
                menuPath: ['Important Top', 'Important Middle', 'Important Incorrect'],
                currentMenu$: of([
                    { label: 'Some Label' },
                    {
                        label: 'Important Top', authorizedChildren: [
                            {
                                label: 'Important Middle', authorizedChildren: [
                                    { label: 'Important Current', authorizedChildren: [{ label: '1' }, { label: '2' }] }
                                ]
                            }
                        ]
                    }
                ] as LinkInfo[])
            };

            component.ngOnInit();
            const close = component.close$.pipe(take(1)).toPromise();

            await component.currentViewLinks$.toPromise();
            expect(await close).toEqual({ all: false });
        });
    });

    describe('back', () => {

        it('should call next on closeSubject with all false', async () => {

            component.ngOnInit();
            const close = component.close$.pipe(take(1)).toPromise();

            component.back();

            expect(await close).toEqual({ all: false });
        });
    });

    describe('closeAll', () => {

        it('should call next on closeSubject with all true', async () => {

            component.ngOnInit();
            const close = component.close$.pipe(take(1)).toPromise();

            component.closeAll();

            expect(await close).toEqual({ all: true });
        });
    });

    describe('goTo', () => {

        it('should call goToLinkFromHamburger then wait', fakeAsync(async () => {

            component.ngOnInit();

            menuNavigationService.goToLinkFromHamburger.and.returnValue(NEVER);

            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);
            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);
            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);
            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);
            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);

            expect(menuNavigationService.goToLinkFromHamburger).toHaveBeenCalledOnceWith(
                'fake link' as any,
                component.data.currentMenu$,
                component.data.menuPath,
                'fake mouse event' as any
            );

        }));

        it('should allow next call to goToLinkFromHamburger when last call to it completes', fakeAsync(async () => {

            component.ngOnInit();

            menuNavigationService.goToLinkFromHamburger.and.returnValue(EMPTY);

            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);
            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);
            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);
            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);
            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);

            expect(menuNavigationService.goToLinkFromHamburger).toHaveBeenCalledTimes(5);
            expect(menuNavigationService.goToLinkFromHamburger).toHaveBeenCalledWith(
                'fake link' as any,
                component.data.currentMenu$,
                component.data.menuPath,
                'fake mouse event' as any
            );
        }));

        it('should call emit to close values emitted from goToLinkFromHamburger', fakeAsync(async () => {

            component.ngOnInit();
            const close = component.close$.pipe(take(1)).toPromise();

            menuNavigationService.goToLinkFromHamburger.and.returnValue(of('fake emit' as any));

            component.goTo('fake link' as any, 'fake mouse event' as any);
            tick(1);

            expect(await close).toEqual('fake emit' as any);
        }));
    });
});
