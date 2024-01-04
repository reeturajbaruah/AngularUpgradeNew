import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpResponseErrorNullCheckerInterceptor } from './httpResponseErrorNullChecker.interceptor';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('HttpResponseErrorNullCheckerInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpResponseErrorNullCheckerInterceptor,
                    multi: true
                }
            ],
        });

        client = TestBed.inject(HttpClient);
        controller = TestBed.inject(HttpTestingController);
    });

    it('should add error and alert arrays', (done) => {
        const body = {};
        const expected = { errors: [], alerts: [] };

        client.get('/test').subscribe(response => {
            expect(response).toEqual(expected);
            done();
        });

        const request = controller.expectOne('/test');
        request.flush(body);
    });

    it('should not add error and alert arrays to HttpResponseError', (done) => {
        const body = {};
        const expected = {};

        client.get('/test').subscribe(
            data => { done(); },
            error => { expect(error.error).toEqual(expected); done(); }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 100, statusText: 'Continue' });
    });


    it('should not add error and alert arrays to HttpResponseError', (done) => {
        const body = {};
        const expected = {};

        client.get('/test').subscribe(
            data => { done(); },
            error => { expect(error.error).toEqual(expected); done(); }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 301, statusText: 'Moved Permanently' });
    });

    it('should add error and alert arrays to HttpResponseError', (done) => {
        const body = {};
        const expected = { errors: [], alerts: [] };

        client.get('/test').subscribe(
            data => { done(); },
            error => { expect(error.error).toEqual(expected); done(); }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 400, statusText: 'Bad Request' });
    });

    it('should add error and alert arrays to HttpResponseError', (done) => {
        const body = {};
        const expected = { errors: [], alerts: [] };

        client.get('/test').subscribe(
            data => { done(); },
            error => { expect(error.error).toEqual(expected); done(); }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 500, statusText: 'Internal Server Error' });
    });
});
