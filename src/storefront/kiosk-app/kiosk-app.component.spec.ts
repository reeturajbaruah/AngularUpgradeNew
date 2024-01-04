import { CommonModule } from '@angular/common';
import { ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService, TransitionService } from '@uirouter/core';
import { } from 'jasmine';
import { AuthenticationService } from '../../authentication/authenticationService/authentication.service';
import { CmsUtilService } from '../../cms/services';
import { ENVIRON_CONFIG, SERVER_CONSTANTS } from '../../common/upgrades';
import { TranslationModule } from '../../translation/module';
import { TranslationService } from '../../translation/services';
import { StorefrontModalService } from '../services/modal.service';
import { StorefrontService, WorkflowStateId } from '../services/storefront.service';
import { KioskAppComponent } from './kiosk-app.component';
import { GlobalVariableService } from 'common/services';
import { CurrentUserService } from '../../common/services';
import { BehaviorSubject } from 'rxjs';


describe('component: KioskAppComponent - storefront', () => {

    let fixture: ComponentFixture<KioskAppComponent>;
    let component: KioskAppComponent;
    let storefrontService: jasmine.SpyObj<StorefrontService>;
    let windowMock: jasmine.SpyObj<Window>;
    let stateService: jasmine.SpyObj<StateService>;
    let modalService: jasmine.SpyObj<StorefrontModalService>;
    let elementRef: jasmine.SpyObj<ElementRef>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let environConfigMock: any;
    let storefrontModalService: jasmine.SpyObj<StorefrontModalService>;
    let transitionService: jasmine.SpyObj<TransitionService>;
    let translationMock: any;
    let authenticationService: jasmine.SpyObj<AuthenticationService>;
    let serverConstanstsMock: any;
    let globalVariableService: jasmine.SpyObj<GlobalVariableService>;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;
    const currentWorkItem: any = { id: Number.NaN };
    let onBeforeCallback: any;
    let onSuccessCallback: any;
    const latestWebUiVersionSub = new BehaviorSubject<any>('test');

    beforeEach(async () => {

        storefrontService = jasmine.createSpyObj('StorefrontService', ['delay', 'isMaintenanceMode', 'getStateNameFromUrl', 'getCmsItem', 'init'], { currentWorkItem });
        windowMock = jasmine.createSpyObj('Window', ['addEventListener', 'dispatchEvent'], {
            self: undefined,
            top: undefined,
            location: {
                protocol: '',
                origin: 'https://localhost'
            }
        });
        stateService = jasmine.createSpyObj('StateService', ['get', 'go']);
        modalService = jasmine.createSpyObj('StorefrontModalService', ['showInactivityMessage', 'showExternalPage', 'showStorefrontMaintenanceMode']);
        elementRef = jasmine.createSpyObj('elementRef', ['']);
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        environConfigMock = {
            storefrontConfigs: {
                StorefrontInactivityReset: 100,
                StorefrontInactivityWarning: 100,
                StorefrontInactivityIntervalDelay: 100
            }
        };

        serverConstanstsMock = {};
        storefrontModalService = jasmine.createSpyObj('StorefrotModalService', ['showInactivityMessage', 'showExternalPage', 'showStorefrontMaintenanceMode', 'finishAccountSetup']);
        transitionService = jasmine.createSpyObj('TransitionService', ['onBefore', 'onSuccess']);
        translationMock = {
            languagePreference: ''
        };
        authenticationService = jasmine.createSpyObj('AuthenticationService', ['isAuthenticated']);
        globalVariableService = jasmine.createSpyObj('GlobalVariableService', null, { latestWebUiVersion: latestWebUiVersionSub });
        currentUserService = jasmine.createSpyObj('CurrentUserService', ['getCurrentUser']);

        storefrontService.getCmsItem.and.resolveTo({ Image: '' });
        windowMock.addEventListener.and.callThrough();
        windowMock.dispatchEvent.and.callThrough();

        transitionService.onBefore.and.callFake((criteria, callback) => {
            onBeforeCallback = callback;
            return null;
        });
        transitionService.onSuccess.and.callFake((criteria, callback) => {
            onSuccessCallback = callback;
            return null;
        });

        await TestBed
            .configureTestingModule({
                declarations: [KioskAppComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [CommonModule, TranslationModule],
                providers: [
                    { provide: StorefrontService, useValue: storefrontService },
                    { provide: Window, useValue: windowMock },
                    { provide: StateService, useValue: stateService },
                    { provide: StorefrontModalService, useValue: modalService },
                    { provide: ElementRef, useFactory: () => elementRef },
                    { provide: CmsUtilService, useValue: cmsUtilService },
                    { provide: ENVIRON_CONFIG, useValue: environConfigMock },
                    { provide: StorefrontModalService, useValue: storefrontModalService },
                    { provide: TransitionService, useValue: transitionService },
                    { provide: TranslationService, useValue: translationMock },
                    { provide: AuthenticationService, useValue: authenticationService },
                    { provide: CurrentUserService, useValue: currentUserService },
                    { provide: GlobalVariableService, useFactory: () => globalVariableService },
                    { provide: SERVER_CONSTANTS, useValue: serverConstanstsMock }
                ]
            })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(KioskAppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('onBefore', () => {
        it('should call delay with 500', async () => {
            component.showCurtain = true;

            await component.onBefore('storefrontHome');

            expect(component.transitionSuccess).toBeFalse();
            expect(component.showCurtain).toBeFalse();
            expect(storefrontService.delay).toHaveBeenCalledWith(500);
        });

        it('should call delay with 400', async () => {
            component.showCurtain = true;

            await component.onBefore('test');

            expect(component.showRouterView).toBeFalse();
            expect(storefrontService.delay).toHaveBeenCalledWith(400);
        });

        it('should set showCurtain to true', async () => {
            component.showCurtain = false;

            await component.onBefore('test');

            expect(component.showCurtain).toBeTrue();
        });
    });

    describe('onSuccess', () => {
        it('should set transitionSuccess to true', async () => {
            component.transitionSuccess = false;

            await component.onSuccess('storefrontHome');

            expect(component.transitionSuccess).toBeTrue();
        });

        it('should set showRouterView to true', async () => {
            component.showRouterView = false;

            await component.onSuccess('test');

            expect(component.showRouterView).toBeTrue();
        });
    });

    describe('handleExternalUrl', () => {
        it('should return false', async () => {
            storefrontService.getStateNameFromUrl.and.returnValue('test');
            const result = await component.handleExternalUrl('/', { id: WorkflowStateId.Unknown } as any);

            expect(result).toBeFalse();
        });

        it('should return true', async () => {
            storefrontService.getStateNameFromUrl.and.returnValue(null);
            authenticationService.isAuthenticated.and.returnValue(false);
            stateService.get.and.returnValue({ resolve: [{ authorizedRoles: ['active'] }] } as any);
            const result = await component.handleExternalUrl('https://localhost/');

            expect(result).toBeTrue();
        });

        it('should call showExternalPage', async () => {
            storefrontService.getStateNameFromUrl.and.returnValue(null);
            authenticationService.isAuthenticated.and.returnValue(true);
            storefrontModalService.showExternalPage.and.resolveTo();
            stateService.get.and.returnValue({ resolve: [{ authorizedRoles: ['active'] }] } as any);
            const result = await component.handleExternalUrl('https://localhost/');

            expect(result).toBeTrue();
            expect(storefrontModalService.showExternalPage).toHaveBeenCalled();
        });

        it('should call showExternalPage', async () => {
            storefrontService.getStateNameFromUrl.and.returnValue(null);
            authenticationService.isAuthenticated.and.returnValue(true);
            const result = await component.handleExternalUrl('https://test');

            expect(result).toBeTrue();
        });

        it('should call showExternalPage', async () => {
            storefrontService.getStateNameFromUrl.and.returnValue(null);
            const result = await component.handleExternalUrl('test');

            expect(result).toBeTrue();
        });
    });

    describe('showBackgroundImage', () => {
        it('should return false', () => {
            const show = component.showBackgroundImage();

            expect(show).toBeFalse();
        });
    });

    describe('constructor', () => {
        it('transitionService.onBefore should call callback', async () => {
            storefrontService.currentWorkItem.id = WorkflowStateId.Unknown;

            const before = await onBeforeCallback({
                to: () => ({ name: 'testName', url: 'testUrl' }),
                from: () => ({ name: 'testName' })
            });

            expect(before).toBeFalse();
        });

        it('transitionService.onBefore should call getCurrentUser', async () => {
            storefrontService.currentWorkItem.id = WorkflowStateId.Unknown;
            currentUserService.getCurrentUser.and.returnValue({ newAccountStep: { accountComplete: false } });
            storefrontModalService.finishAccountSetup.and.resolveTo();

            const before = await onBeforeCallback({
                to: () => ({ name: 'testName', url: 'testUrl' }),
                from: () => ({ name: 'Login' })
            });

            expect(before).toBeFalse();
            expect(currentUserService.getCurrentUser).toHaveBeenCalled();
        });

        it('transitionService.onSuccess should call callback', async () => {
            storefrontService.currentWorkItem.id = WorkflowStateId.Unknown;
            storefrontService.isMaintenanceMode.and.resolveTo(true);
            storefrontModalService.showStorefrontMaintenanceMode.and.resolveTo();

            await onSuccessCallback({
                to: () => ({ name: 'testName', url: 'testUrl' }),
                from: () => ({ name: 'testName' })
            });

            expect(storefrontService.isMaintenanceMode).toHaveBeenCalled();
            expect(storefrontModalService.showStorefrontMaintenanceMode).toHaveBeenCalled();
        });
    });

    describe('get', () => {
        it('should return true', () => {
            const show = component.showTranslateIcon;

            expect(show).toBeTrue();
        });

        it('should return string', () => {
            const position = component.translateIconPosition;

            expect(position).toEqual('0px');
        });

        it('should return false', () => {
            const startPage = component.isStartPage;

            expect(startPage).toBeFalse();
        });
    });

    describe('handleAnchorClicks', () => {
        it('should call checkPath', () => {
            const event = new Event('click');
            Object.defineProperty(event, 'target', { writable: false, value: document.createElement('a') });
            (event.target as HTMLAnchorElement).href = 'https://test';
            spyOn(component, 'checkPath');

            component['handleAnchorClicks'](event);

            expect(component.checkPath).toHaveBeenCalled();
        });

        it('should not call checkPath', () => {
            const event = new Event('click');
            spyOn(component, 'checkPath');

            component['handleAnchorClicks'](event);

            expect(component.checkPath).not.toHaveBeenCalled();
        });
    });
});
