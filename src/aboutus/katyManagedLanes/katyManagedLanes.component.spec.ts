import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { KatyManagedLanesComponent } from './katyManagedLanes.component';
import { stateNames as homeStates } from 'home/constants';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { StateNames as CoreStateNames, stateNames as coreStateNames } from 'constants/module';
import { Subject } from 'rxjs';
import { TranslationService } from 'translation/services';
import { FeaturesStates } from 'shared/states';
import { BrowserExtensionHandlerService } from '../../common/services/browserExtensionHandlerService/browserExtensionHandler.service';

describe('KatyManagedLanesComponent', () => {

    let fixture: ComponentFixture<KatyManagedLanesComponent>;
    let component: KatyManagedLanesComponent;

    let stateService: jasmine.SpyObj<StateService>;
    let uiRouterGlobals: UIRouterGlobals;
    let browserExtensionHandlerService: jasmine.SpyObj<BrowserExtensionHandlerService>;
    let translationService: jasmine.SpyObj<TranslationService>;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let translationServiceSubject: Subject<{ status: string }>;
    let environmentConfig: { [key: string]: boolean };

    beforeEach(async () => {

        translationServiceSubject = new Subject();
        stateService = jasmine.createSpyObj('state', ['go']);
        uiRouterGlobals = {
            current: 'fake_current_state'
        } as any;
        browserExtensionHandlerService = jasmine.createSpyObj('browserExtensionHandlerService', ['sendTag']);
        translationService = {
            realTimeTranslationsEvent: translationServiceSubject
        } as any;
        authService = jasmine.createSpyObj('authenticationService', ['isAuthenticated']);
        environmentConfig = {};

        await TestBed
            .configureTestingModule({
                declarations: [
                    KatyManagedLanesComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: StateService, useFactory: () => stateService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: CoreStateNames, useFactory: () => coreStateNames },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: TranslationService, useFactory: () => translationService },
                    { provide: BrowserExtensionHandlerService, useFactory: () => browserExtensionHandlerService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(KatyManagedLanesComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', async () => {

            expect(true).toEqual(true);
        });
    });

    describe('ngAfterViewInit', () => {

        beforeEach(() => {

            component.iframe = {
                nativeElement: {

                }
            } as any;
        });

        it('should set the iframe nativeElement src to enlish index.html when translationService.languagePreference blank', () => {

            component.ngAfterViewInit();

            expect(component.iframe.nativeElement.src).toBe('/Content/hctra3rdPartyPages/katymanagedlanes/english/index.html');
        });

        it('should set the iframe nativeElement src to translationService.languagePreference index.html', () => {

            translationService.languagePreference = 'FakeLanguagePreference';

            component.ngAfterViewInit();

            expect(component.iframe.nativeElement.src)
                .toBe('/Content/hctra3rdPartyPages/katymanagedlanes/fakelanguagepreference/index.html');
        });
    });

    describe('ngAfterViewInit translationService realTimeTranslationsEvent', () => {

        beforeEach(() => {

            component.iframe = {
                nativeElement: {

                }
            } as any;
        });

        it('should not change iframe.nativeElement.src when not starting', () => {

            translationService.languagePreference = 'FakeLanguagePreference';

            component.ngAfterViewInit();

            const expectedSrc = '/Content/hctra3rdPartyPages/katymanagedlanes/fakelanguagepreference/index.html';

            expect(component.iframe.nativeElement.src).toBe(expectedSrc);

            translationService.languagePreference = 'AnotherFakeLanguage';

            translationServiceSubject.next({ status: 'stopping' });

            expect(component.iframe.nativeElement.src).toBe(expectedSrc);
        });

        it('should not change iframe.nativeElement.src when starting but url has not changed', () => {

            translationService.languagePreference = 'FakeLanguagePreference';

            component.ngAfterViewInit();

            const expectedSrc = 'https://hctra.org/Content/hctra3rdPartyPages/katymanagedlanes/fakelanguagepreference/index.html';

            component.iframe.nativeElement.src = expectedSrc;

            translationServiceSubject.next({ status: 'starting' });

            expect(component.iframe.nativeElement.src).toBe(expectedSrc);
        });

        it('should change iframe.nativeElement.src when starting and url has changed', () => {

            translationService.languagePreference = 'FakeLanguagePreference';

            component.ngAfterViewInit();

            const expectedSrc1 = '/Content/hctra3rdPartyPages/katymanagedlanes/fakelanguagepreference/index.html';
            const expectedSrc2 = '/Content/hctra3rdPartyPages/katymanagedlanes/anotherfakelanguage/index.html';

            expect(component.iframe.nativeElement.src).toBe(expectedSrc1);

            translationService.languagePreference = 'AnotherFakeLanguage';

            translationServiceSubject.next({ status: 'starting' });

            expect(component.iframe.nativeElement.src).toBe(expectedSrc2);
        });

        it('should change iframe.nativeElement.src when starting language change and katyPage has changed', () => {

            translationService.languagePreference = 'FakeLanguagePreference';

            component.ngAfterViewInit();

            const expectedSrc1 = '/Content/hctra3rdPartyPages/katymanagedlanes/fakelanguagepreference/index.html';
            const expectedSrc2 = '/Content/hctra3rdPartyPages/katymanagedlanes/anotherfakelanguage/faq.html';

            expect(component.iframe.nativeElement.src).toBe(expectedSrc1);

            component['currentKatyPage'] = 'faq.html';
            translationService.languagePreference = 'AnotherFakeLanguage';

            translationServiceSubject.next({ status: 'starting' });

            expect(component.iframe.nativeElement.src).toBe(expectedSrc2);
        });

        it('should set component.languageChangeSubscription - iframe.nativeElement.src should not change after unsubscribe', () => {

            translationService.languagePreference = 'FakeLanguagePreference';

            component.ngAfterViewInit();

            const expectedSrc = '/Content/hctra3rdPartyPages/katymanagedlanes/fakelanguagepreference/index.html';

            expect(component.iframe.nativeElement.src).toBe(expectedSrc);

            translationService.languagePreference = 'AnotherFakeLanguage';

            component['languageChangeSubscription'].unsubscribe();

            translationServiceSubject.next({ status: 'starting' });

            expect(component.iframe.nativeElement.src).toBe(expectedSrc);
        });
    });

    describe('onContentLoad', () => {

        let element;
        let classList: jasmine.SpyObj<DOMTokenList>;

        beforeEach(() => {
            classList = jasmine.createSpyObj('classList', ['contains']);
            classList.contains.and.callFake(x => x === 'Katy-Managed-Lanes-section');

            element = {
                style: { height: 'originalHeight' },
                contentWindow: {
                    toHomePage: 'originalToHomePage',
                    resizeContainer: 'resizeContainer',
                    location: {
                        href: 'https://hctra.org/bla/bla/blank.html'
                    },
                    document: {
                        body: {
                            offsetHeight: 12345,
                            classList
                        },
                    }
                }
            };
        });

        it('should not do anything when href ends with blank.html', () => {

            component.onContentLoad(element);

            expect(element.contentWindow['resizeContainer']).toBe('resizeContainer');
            expect(element.contentWindow['toHomePage']).toBe('originalToHomePage');
            expect(element.style.height).toBe('originalHeight');
            expect(component['currentKatyPage']).toBe('index.html');
            expect(browserExtensionHandlerService.sendTag).toHaveBeenCalledTimes(0);
        });

        it('should change element src to english content when loaded content body does not have class Katy-Managed-Lanes-section', () => {

            classList.contains.and.callFake(x => x !== 'Katy-Managed-Lanes-section');
            component['currentKatyPage'] = 'stored.html';
            element.contentWindow.location.href = 'https://hctra.org/bla/bla/stored.html';


            component.onContentLoad(element);

            expect(element.src).toBe('/Content/hctra3rdPartyPages/katymanagedlanes/english/stored.html');
            expect(element.contentWindow['resizeContainer']).toBe('resizeContainer');
            expect(element.contentWindow['toHomePage']).toBe('originalToHomePage');
            expect(element.style.height).toBe('originalHeight');
            expect(component['currentKatyPage']).toBe('stored.html');
            expect(browserExtensionHandlerService.sendTag).toHaveBeenCalledTimes(0);
        });

        it('should set currentKatyPage using href', () => {

            element.contentWindow.location.href = 'https://hctra.org/bla/bla/some_page.html';

            component.onContentLoad(element);

            expect(component['currentKatyPage']).toBe('some_page.html');
        });

        it('should set resizeContainer', () => {

            element.contentWindow.location.href = 'https://hctra.org/bla/bla/some_page.html';

            component.onContentLoad(element);

            expect(element.contentWindow.resizeContainer).toBeInstanceOf(Function);

            element.style.height = '';

            element.contentWindow.resizeContainer();

            expect(element.style.height).toBe('12380px');
        });
        [
            { authenticated: false, target: FeaturesStates.Login },
            { authenticated: true, target: homeStates.Frame }
        ].forEach(({ authenticated, target }) => {
            it('should set toHomePage', () => {

                authService.isAuthenticated.and.returnValue(authenticated);
                element.contentWindow.location.href = 'https://hctra.org/bla/bla/some_page.html';

                environmentConfig.createAccountRefresh = true;
                component.onContentLoad(element);

                expect(element.contentWindow.toHomePage).toBeInstanceOf(Function);

                expect(stateService.go).toHaveBeenCalledTimes(0);

                element.contentWindow.toHomePage();

                expect(stateService.go).toHaveBeenCalledOnceWith(target);
            });
        });

        it('should set iframe element height', () => {

            element.contentWindow.location.href = 'https://hctra.org/bla/bla/some_page.html';

            component.onContentLoad(element);

            expect(element.style.height).toBe('12380px');
        });

        [
            ['', 'SOME_PAGE-ENGLISH'],
            ['english', 'SOME_PAGE-ENGLISH'],
            ['french', 'SOME_PAGE-FRENCH']].forEach(([language, expectedLabel]) => {

                it('should call browserExtensionHandlerService.sendTag with currentKatyPage', () => {

                    element.contentWindow.location.href = 'https://hctra.org/bla/bla/some_page.html';
                    translationService.languagePreference = language;

                    component.onContentLoad(element);

                    expect(browserExtensionHandlerService.sendTag).toHaveBeenCalledOnceWith('fake_current_state' as StateDeclaration, expectedLabel);
                });
            });
    });

    describe('ngOnDestroy', () => {

        it('should unsubscribe languageChangeSubscription', () => {

            component['languageChangeSubscription'] = jasmine.createSpyObj('subscription', ['unsubscribe']) as any;

            component.ngOnDestroy();

            expect(component['languageChangeSubscription'].unsubscribe).toHaveBeenCalledTimes(1);
        });
    });
});
