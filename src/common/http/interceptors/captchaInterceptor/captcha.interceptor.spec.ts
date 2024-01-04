import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CaptchaInterceptor } from './captcha.interceptor';
import { ENVIRON_CONFIG, WindowRef } from 'common/module';
import { CaptchaService } from 'captcha/services/captcha.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CaptchaInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;

    let windowRef: jasmine.SpyObj<any>;
    let environmentConfig: jasmine.SpyObj<any>;
    let captchaService: jasmine.SpyObj<CaptchaService>;

    beforeEach(async () => {
        environmentConfig = jasmine.createSpyObj('ENVIRON_CONFIG', { }, { reCaptchaConfig: { enabled: true } });
        windowRef = jasmine.createSpyObj('WindowRef', { }, { location: { host: 'testhost.com', origin: 'http://testhost.com' } });
        captchaService = jasmine.createSpyObj('CaptchaService', ['assess']);

        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: CaptchaInterceptor, multi: true },
                { provide: WindowRef, useFactory: () => windowRef },
                { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                { provide: CaptchaService, useFactory: () => captchaService }
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
            expect(CaptchaInterceptor).toBeDefined();
        });
    });

    describe('intercept', () => {
        it('should add captcha token to headers if enabled and configured', fakeAsync(() => {
            environmentConfig.reCaptchaConfig.enabled = true;
            captchaService.assess.and.returnValue(Promise.resolve({ token: 'testToken', configured: true, abort: false }));

            client.get('/test').subscribe();
            tick();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get('hctra-captcha-token')).toBe('testToken');
        }));
    
        it('should not add captcha token if not configured', fakeAsync(() => {
            captchaService.assess.and.returnValue(Promise.resolve({ token: null, configured: false, abort: false }));

            client.get('/test').subscribe();
            tick();

            const request = controller.expectOne('/test');
            expect(request.request.headers.get('hctra-captcha-token')).toBeNull();
        }));
    
        it('should skip processing for external requests', () => {
            captchaService.assess.and.returnValue(Promise.resolve({ token: 'testToken', configured: true, abort: false }));
            const externalUrl = 'http://externalhost.com/somepath';

            client.get(externalUrl).subscribe();
        

            const request = controller.expectOne(externalUrl);
            expect(request.request.headers.get('hctra-captcha-token')).toBeNull();
        });
    
        it('should not add captcha token if reCaptcha is disabled', () => {
            environmentConfig.reCaptchaConfig.enabled = false;
            captchaService.assess.and.returnValue(Promise.resolve({ token: 'testToken', configured: true, abort: false }));

            client.get('/test').subscribe();
        
            const request = controller.expectOne('/test');
            expect(request.request.headers.get('hctra-captcha-token')).toBeNull();
        });
    
        it('should abort request when instructed', fakeAsync(() => {
            environmentConfig.reCaptchaConfig.enabled = true;
            captchaService.assess.and.returnValue(Promise.resolve({ token: 'testToken', configured: true, abort: true }));
            
            client.get('/test').subscribe({
                next: _ => fail('should have been aborted'),
                error: error => expect(error).toBeDefined()
            });
            tick();
            
            controller.expectNone('/test');
        }));
    });
});
