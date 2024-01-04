import { A } from '@angular/cdk/keycodes';
import { HttpClient, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../../../../authentication/authenticationService/authentication.service';
import { LoggingService } from '../../../../logging/loggingService/logging.service';
import { WindowRef } from '../../../providers';
import { ENVIRON_CONFIG } from '../../../upgrades';
import { HttpResponseErrorNullCheckerInterceptor } from '../httpResponseNullCheckerInterceptor/httpResponseErrorNullChecker.interceptor';
import { HttpResponseErrorLogInterceptor } from './httpResponseErrorLog.interceptor';

describe('HttpResponseErrorLogInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;
    let authenticationService: jasmine.SpyObj<AuthenticationService>;
    let loggingService: jasmine.SpyObj<LoggingService>;
    let windowMock: any;
    let mockEnvironmentConfig: any;

    beforeEach(() => {
        authenticationService = jasmine.createSpyObj('authenticationService', ['logOutOnFourOneSeven']);
        loggingService = jasmine.createSpyObj('loggingService', ['logMessage']);
        windowMock = {
            location: {
                reload: jasmine.createSpy('reload')
            }
        };
        mockEnvironmentConfig = {
            errorMessageLogging: {
                messages: {
                    'Unable to access your account. Please try again later.': true,
                    'We are unable to process your request at this time.': false
                }
            }
        };


        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpResponseErrorLogInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpResponseErrorNullCheckerInterceptor,
                    multi: true
                },
                {
                    provide: WindowRef,
                    useValue: windowMock
                },
                {
                    provide: AuthenticationService,
                    useFactory: () => authenticationService
                },
                {
                    provide: LoggingService,
                    useFactory: () => loggingService
                },
                {
                    provide: ENVIRON_CONFIG,
                    useValue: mockEnvironmentConfig
                }
            ],
        });

        client = TestBed.inject(HttpClient);
        controller = TestBed.inject(HttpTestingController);
    });

    it('should not perform side effects', (done) => {
        const body = {};

        client.get('/test').subscribe({
            error: () => {
                expect(loggingService.logMessage).not.toHaveBeenCalled();
                done();
            }
        });

        const request = controller.expectOne('/test');
        request.flush(body, { status: 300, statusText: 'Multiple Choices' });
    });

    it('should not perform side effects', (done) => {
        const body = {};

        client.get('/test').subscribe({
            error: () => {
                expect(loggingService.logMessage).not.toHaveBeenCalled();
                done();
            }
        });

        const request = controller.expectOne('/test');
        request.flush(body, { status: 100, statusText: 'Continue' });
    });

    it('should log message and add errorMsg to error array', (done) => {
        const body = {};

        client.get('/test').subscribe({
            error: (error) => {
                expect(loggingService.logMessage).toHaveBeenCalled();
                expect(error.error.errors.length).toEqual(1);
                done();
            }
        });

        const request = controller.expectOne('/test');
        request.flush(body, { status: 400, statusText: 'Bad Request' });
    });

    it('should log message, not add errorMsg to error array and call authenticationService.logOutOnFourOneSeven', (done) => {
        const body = {};

        client.get('/test').subscribe({
            error: (error) => {
                expect(loggingService.logMessage).toHaveBeenCalled();
                expect(authenticationService.logOutOnFourOneSeven).toHaveBeenCalled();
                expect(error.error.errors.length).toEqual(0);
                done();
            }
        });

        const request = controller.expectOne('/test');
        request.flush(body, { status: 417, statusText: 'Expectation Failed' });

    });

    it('should log message, add errorMsg to error array and call window.location.reload', (done) => {
        const body = {};

        client.get('/test').subscribe({
            error: (error) => {
                expect(loggingService.logMessage).toHaveBeenCalled();
                expect(windowMock.location.reload).toHaveBeenCalled();
                expect(error.error.errors.length).toEqual(1);
                done();
            }
        });

        const request = controller.expectOne('/test');
        request.flush(body, { status: 503, statusText: 'Service Unavailable' });
    });

    it('should not perform side-effects', (done) => {
        const body = {};

        client.get('/test').subscribe(
            data => {
                expect(loggingService.logMessage).not.toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should log message and add errorMsg to error array', (done) => {
        const body = {};

        client.get<{ errors; alerts }>('/test').subscribe(
            data => {
                expect(loggingService.logMessage).toHaveBeenCalled();
                expect(data.errors.length).toEqual(1);
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 204, statusText: 'No Content' });
    });

    it('should log message and add errorMsg to error array', (done) => {
        const body = {};

        client.get<{ errors; alerts }>('/test').subscribe(
            data => {
                expect(loggingService.logMessage).toHaveBeenCalled();
                expect(data.errors.length).toEqual(1);
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 206, statusText: 'Partial Content' });
    });

    it('should log message and add errorMsg to error array', (done) => {
        const body = { errors: ['Unable to access your account. Please try again later.'] };

        client.get<{ errors; alerts }>('/test').subscribe(
            data => {
                expect(loggingService.logMessage).toHaveBeenCalled();
                expect(data.errors.length).toEqual(1);
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });
});
