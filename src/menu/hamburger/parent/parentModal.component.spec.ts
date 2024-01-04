import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { Observable, of, Subject } from 'rxjs';
import { take, toArray } from 'rxjs/operators';
import { MatIconAvailabilityService } from 'common/services';
import { ParentModalComponent } from './parentModal.component';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { MenuLinkHelper } from 'menu/services/menuLinkHelper';
import { CloseOptions } from '../container/container.component';
import { LinkInfo } from 'menu/services';
import { AddMissingInformationService } from '../../../authentication/addMissingInformationService/addMissingInformation.service';

describe('component: hamburger-parent-modal', () => {

    let fixture: ComponentFixture<ParentModalComponent>;
    let component: ParentModalComponent;
    let matIcon: jasmine.SpyObj<MatIconAvailabilityService>;
    let menuLinkHelper: jasmine.SpyObj<MenuLinkHelper>;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let addMissingInformationService: jasmine.SpyObj<AddMissingInformationService>;

    beforeEach(async () => {

        matIcon = jasmine.createSpyObj('matIconAvailabilityService', ['whenAvailable']);
        menuLinkHelper = jasmine.createSpyObj('menuLinkHelper', ['goToEvent', 'getCloseSubject', 'setCmsContent', 'listentoMenuEvent', 'getCurrentMenu']);

        matIcon.whenAvailable.and.returnValue(new Observable());

        authService = jasmine.createSpyObj('authService', ['logout']);
        (authService as any).isAuthenticated$ = 'fake is authenticated observable' as any;

        addMissingInformationService = jasmine.createSpyObj('addMissingInformation', ['destroyMissingInformationFlags']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ParentModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: MatIconAvailabilityService, useFactory: () => matIcon },
                    { provide: MenuLinkHelper, useFactory: () => menuLinkHelper },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: AddMissingInformationService, useFactory: () => addMissingInformationService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ParentModalComponent);
        component = fixture.debugElement.componentInstance;

        component.data = {
            cmsContent: new Observable<any>()
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        [
            ['showCloseIcon$', 'hctra-logo'],
            ['showCloseIcon$', 'close-menu-icon']
        ].forEach(([observable, svgName]) => {

            it(`${observable} should emit true when matIcon.whenAvailable emits`, async () => {

                const subject = new Subject<void>();
                matIcon.whenAvailable.and.returnValue(subject.asObservable());

                expect(component[observable]).toBeUndefined();

                spyOn(component, 'displayLogin');
                spyOn(component, 'displayLogout');

                component.ngOnInit();

                expect(component[observable]).toBeInstanceOf(Observable);

                const result = component[observable]
                    .pipe(
                        take(3),
                        toArray()
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

        it('currentViewLinks$ should created using menuLinkMapper.getMapFilterObservable ', async () => {

            spyOn(component, 'displayLogin');
            spyOn(component, 'displayLogout');

            component.ngOnInit();

            expect(menuLinkHelper.setCmsContent).toHaveBeenCalled();
            expect(menuLinkHelper.listentoMenuEvent).toHaveBeenCalled();
            expect(menuLinkHelper.getCurrentMenu).toHaveBeenCalled();

        });
    });

    describe('closeModal', () => {

        it('should call next on closeSubject with all false', async () => {
            spyOn(component, 'displayLogin');
            spyOn(component, 'displayLogout');

            const sub = new Subject<CloseOptions>();
            menuLinkHelper.getCloseSubject.and.returnValue(sub);
            component.ngOnInit();
            const close = component.close$.pipe(take(1)).toPromise();

            component.closeModal();

            expect(menuLinkHelper.setCmsContent).toHaveBeenCalled();
            expect(menuLinkHelper.listentoMenuEvent).toHaveBeenCalled();
            expect(menuLinkHelper.getCurrentMenu).toHaveBeenCalled();

            expect(await close).toEqual({ all: false });
        });
    });

    describe('goTo', () => {

        it('should call goToLinkFromHamburger then wait', fakeAsync(async () => {

            spyOn(component, 'displayLogin');
            spyOn(component, 'displayLogout');

            component.ngOnInit();

            const sub = new Subject<[LinkInfo, string, MouseEvent]>();
            menuLinkHelper.goToEvent.and.returnValue(sub);
            component.goTo('fake link' as any, 'fake parent', 'fake mouse event' as any);
            tick(1);

            expect(menuLinkHelper.goToEvent).toHaveBeenCalled();
        }));

        it('should call goToOtherLinks', fakeAsync(async () => {

            spyOn(component, 'displayLogin');
            spyOn(component, 'displayLogout');

            component.ngOnInit();

            const sub = new Subject<[LinkInfo, string, MouseEvent]>();
            menuLinkHelper.goToEvent.and.returnValue(sub);
            const eventInfo = {
                link: {
                    label: 'test'
                },
                event: 'fake mouse event' as any
            };
            component.goToOtherLinks(eventInfo);
            tick(1);

            expect(menuLinkHelper.goToEvent).toHaveBeenCalled();
        }));

        it('should call getLinks method', fakeAsync(async () => {

            spyOn(component, 'displayLogin');
            spyOn(component, 'displayLogout');

            component.ngOnInit();

            const link: LinkInfo = {
                label: 'test',
                external: false,
                hasChildren: false,
                name: 'test',
                authorizedChildren: [],
                url: 'google.com'
            };

            const newLinks = component.getLinks([link]);
            tick(1);

            expect(newLinks[0].level).toEqual(1);
        }));

    });

    it('checks the display of login link', async () => {
        (authService as any).isAuthenticated$ = of(true);

        component.displayLogin();
        expect(component.loginLink).toBeDefined();
        expect(component.loginLink.url).toEqual('/Login');
        expect(component.isLoggedIn).toBeTrue();
    });

    it('checks the display of logout link', async () => {

        component.displayLogout();
        expect(component.logoutLink).toBeDefined();
        expect(component.logoutLink.url).toEqual('/Home');

    });

    it('calls logout ', async () => {
        spyOn(component, 'goTo');
        component.logout({} as LinkInfo, '', 'event' as any);
        expect(authService.logout).toHaveBeenCalled();

    });
});
