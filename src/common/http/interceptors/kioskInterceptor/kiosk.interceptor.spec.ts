import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { KioskInterceptor } from './kiosk.interceptor';
import { Inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { WindowRef } from '../../../providers';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

describe('KioskInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;
    let storefrontUtilityService: jasmine.SpyObj<any>;
    let windowMock: any;

    beforeEach(async () => {
        storefrontUtilityService = jasmine.createSpyObj('StorefrontUtilityService', ['isRunningAsKiosk', 'webStoreData']);
        windowMock = {
            location: {
                host: 'localhost',
                origin: 'https://localhost'
            }
        };

        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: KioskInterceptor, multi: true },
                { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                { provide: WindowRef, useValue: windowMock }
            ]
        })
            .compileComponents();
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
            expect(KioskInterceptor).toBeDefined();
        });
    });

    describe('intercept', () => {
        it('should add kiosk token to headers if running inside a kiosk', () => {
            storefrontUtilityService.isRunningAsKiosk.and.returnValue(true);
            storefrontUtilityService.webStoreData = { kioskToken: 'testToken' };

            client.get('/test').subscribe();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get('hctra-kiosk-token')).toBe('testToken');
        });

        it('should not add kiosk token to headers if not running inside a kiosk', () => {
            storefrontUtilityService.isRunningAsKiosk.and.returnValue(false);

            client.get('/test').subscribe();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get('hctra-kiosk-token')).toBeNull();
        });

        it('should not add kiosk token to headers if location.origin host is not equal to location.host', () => {
            storefrontUtilityService.isRunningAsKiosk.and.returnValue(true);
            storefrontUtilityService.webStoreData = { kioskToken: 'testToken' };

            windowMock.location.origin = 'https://test';

            client.get('/test').subscribe();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get('hctra-kiosk-token')).toBeNull();
        });

        it('should not add kiosk token if request url is false', () => {
            storefrontUtilityService.isRunningAsKiosk.and.returnValue(true);
            storefrontUtilityService.webStoreData = { kioskToken: 'testToken' };

            client.get('').subscribe();

            const request = controller.expectOne('');
            expect(request.request.headers.get('hctra-kiosk-token')).toBeNull();
        });

        it('should add kiosk token to headers with different casing', () => {
            storefrontUtilityService.isRunningAsKiosk.and.returnValue(true);
            storefrontUtilityService.webStoreData = { kioskToken: 'testToken' };

            windowMock.location.host = 'LoCaLhost';
            windowMock.location.origin = 'https:\\LOCALHOST';

            client.get('/test').subscribe();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get('hctra-kiosk-token')).toBe('testToken');
        });
    });
});
