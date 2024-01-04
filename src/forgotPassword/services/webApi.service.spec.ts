import { HttpService, ResponseErrorService } from 'common/services';
import { WebApiService } from './webApi.service';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ForgotPasswordAccountSearchRequest, ResetPasswordRequest } from 'forgotPassword/interfaces';

describe('Vehicles webApiService', () => {

    let httpService: jasmine.SpyObj<HttpService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let service: WebApiService;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        httpService.post.and.resolveTo({ errors: [] });
        httpService.get.and.resolveTo({ errors: [] });
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        TestBed.configureTestingModule({
            providers: [
                WebApiService,
                { provide: HttpService, useFactory: () => httpService },
                { provide: ResponseErrorService, useFactory: () => responseErrorService }
            ]
        });

        service = TestBed.inject(WebApiService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('setup', () => {
        beforeEach(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
        });

        it('should call get and return error free', waitForAsync(() => {
            service.setup().then(res => {
                expect(res).toEqual({ errors: [] } as any);
                expect(httpService.get).toHaveBeenCalled();
                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
            });
        }));
    });

    describe('resetPassword', () => {
        beforeEach(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
        });

        it('should call post and return error free', waitForAsync(() => {
            const req = {} as ResetPasswordRequest;

            service.resetPassword(req).then(res => {
                expect(res).toEqual({ errors: [] } as any);
                expect(httpService.post).toHaveBeenCalled();
                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
            });
        }));
    });

    describe('forgotPasswordAccountSearch no errors', () => {
        beforeEach(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
        });

        it('should call post and return error free', waitForAsync(() => {
            const req = {} as ForgotPasswordAccountSearchRequest;

            service.forgotPasswordAccountSearch(req).then(res => {
                expect(res).toEqual({ errors: [] } as any);
                expect(httpService.post).toHaveBeenCalled();
                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
            });
        }));
    });

    describe('forgotPasswordAccountSearch with errors', () => {
        beforeEach(() => {
            responseErrorService.isErrorFree.and.returnValue(false);
        });

        it('hasError should be true', waitForAsync(() => {
            const req = {} as ForgotPasswordAccountSearchRequest;

            service.forgotPasswordAccountSearch(req).then(res => {
                expect(res.hasError).toEqual(true);
                expect(httpService.post).toHaveBeenCalled();
            });
        }));
    });
});
