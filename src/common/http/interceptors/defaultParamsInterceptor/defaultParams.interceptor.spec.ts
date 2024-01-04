import { HttpClient, HttpContext, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DefaultParamsInterceptor } from '..';
import { UIRouterGlobals } from '@uirouter/core';
import { SERVER_CONSTANTS } from '../../../upgrades';
import { ToggleButtonsService } from '../../../services/toggleButtons/toggleButtons.service';
import { CookieService, NO_SPIN, OperatingSystemSnifferService } from '../../../services';
import { WindowRef } from '../../../providers';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

describe('defaultParamsInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;
    let uiRouterGlobals: any;
    let serverConstants: any;
    let toggleButtonsService: jasmine.SpyObj<any>;
    let cookieService: jasmine.SpyObj<any>;
    let operatingSystemSnifferService: jasmine.SpyObj<any>;
    let storefrontUtilityServiceMock: any;
    let windowMock: any;

    beforeEach(async () => {
        uiRouterGlobals = {
            current: {
                name: 'testState'
            }
        };

        windowMock = {
            location: {
                host: 'localhost',
                origin: 'https://localhost'
            }
        };

        serverConstants = {
            currentlyDownloadedWebUiVersion: '1.0',
            appNameHeaderKey: 'app_name',
            appNameWebsiteDesktopHeaderValue: 'desktop',
            appNameWebsiteMobileHeaderValue: 'mobile',
            versionHeaderKey: 'version',
            appNameWebsiteStorefrontHeaderValue: 'kiosk',
        };

        cookieService = new Map();
        cookieService.set('XSRF-TOKEN', 'xsrfToken');

        toggleButtonsService = jasmine.createSpyObj('ToggleButtonsService', ['disableButtonsGlobal']);
        operatingSystemSnifferService = jasmine.createSpyObj('OperatingSystemSnifferService', ['getOS', 'isDesktopOs']);
        storefrontUtilityServiceMock = {
            isRunningAsKiosk: false
        };

        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: DefaultParamsInterceptor, multi: true },
                { provide: UIRouterGlobals, useValue: uiRouterGlobals },
                { provide: SERVER_CONSTANTS, useValue: serverConstants },
                { provide: ToggleButtonsService, useFactory: () => toggleButtonsService },
                { provide: CookieService, useValue: cookieService },
                { provide: OperatingSystemSnifferService, useFactory: () => operatingSystemSnifferService },
                { provide: StorefrontUtilityService, useValue: storefrontUtilityServiceMock },
                { provide: WindowRef, useValue: windowMock }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        client = TestBed.inject(HttpClient);
        controller = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        controller.verify();
    });

    describe('canary', () => {
        it('should be defined', () => {
            expect(DefaultParamsInterceptor).toBeDefined();
        });
    });

    describe('intercept', () => {
        it('expect request to be unmodified', () => {
            windowMock.location.host = 'invalid';

            client.get('/test').subscribe();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get('X-XSRF-TOKEN')).toBeNull();
            expect(request.request.headers.get('angularState')).toBeNull();
            expect(request.request.headers.get('clientVersion')).toBeNull();
            expect(request.request.headers.get(serverConstants.appNameHeaderKey)).toBeNull();
            expect(request.request.headers.get(serverConstants.versionHeaderKey)).toBeNull();
            expect(toggleButtonsService.disableButtonsGlobal).not.toHaveBeenCalled();
        });

        it('expect default headers to be set', () => {
            client.get('/test').subscribe();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get('X-XSRF-TOKEN')).toBe('xsrfToken');
            expect(request.request.headers.get('angularState')).toBe('testState');
            expect(request.request.headers.get('clientVersion')).toBe('1.0');
            expect(request.request.headers.get(serverConstants.appNameHeaderKey)).toBeNull();
            expect(request.request.headers.get(serverConstants.versionHeaderKey)).toBeNull();
            expect(toggleButtonsService.disableButtonsGlobal).not.toHaveBeenCalled();
        });

        it('expect version header to be set if request made through httpService', () => {

            client.get('/test',
                { context: new HttpContext().set(NO_SPIN, false) }
            ).subscribe();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get('version')).toBe('1.0');
        });

        it('expect toggleButtonsService disableButtonsGlobal to be called', () => {
            client.get('/test',
                { context: new HttpContext().set(NO_SPIN, false) }
            ).subscribe();

            const request = controller.expectOne('/test');
            expect(toggleButtonsService.disableButtonsGlobal).toHaveBeenCalled();
        });

        it('expect app name header to be set to desktop', () => {
            storefrontUtilityServiceMock.isRunningAsKiosk = false;
            operatingSystemSnifferService.isDesktopOs.and.returnValue(true);

            client.get('/test',
                { context: new HttpContext().set(NO_SPIN, false) }
            ).subscribe();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get(serverConstants.appNameHeaderKey)).toBe(serverConstants.appNameWebsiteDesktopHeaderValue);
        });

        it('expect app name header to be set to mobile', () => {
            storefrontUtilityServiceMock.isRunningAsKiosk = false;
            operatingSystemSnifferService.isDesktopOs.and.returnValue(false);

            client.get('/test',
                { context: new HttpContext().set(NO_SPIN, false) }
            ).subscribe();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get(serverConstants.appNameHeaderKey)).toBe(serverConstants.appNameWebsiteMobileHeaderValue);
        });

        it('expect app name header to be set to kiosk', () => {
            storefrontUtilityServiceMock.isRunningAsKiosk = true;

            client.get('/test',
                { context: new HttpContext().set(NO_SPIN, false) }
            ).subscribe();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get(serverConstants.appNameHeaderKey)).toBe(serverConstants.appNameWebsiteStorefrontHeaderValue);
        });
    });
});
