import { DatePipe } from '@angular/common';
import { fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { ResponseErrorService, HttpService } from 'common/services';
import { } from 'jasmine';
import { TwoFAService } from './2FA.service';

describe('2FA webApiService', () => {

    let httpService: jasmine.SpyObj<HttpService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let datePipe: jasmine.SpyObj<DatePipe>;
    let service: TwoFAService;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        httpService.post.and.resolveTo({ errors: [] });
        httpService.get.and.resolveTo({ errors: [] });
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);
        datePipe = jasmine.createSpyObj('datePipe', ['transform']);

        service = new TwoFAService(httpService, responseErrorService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('sendVerificationCode', () => {
        it('should check send verification code invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const mockRequest = {
                to: 'to',
                language: 'en',
                accountId: 123,
                source: 'source'
            };
            service.sendVerificationCode(mockRequest);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('api/2fa/send', mockRequest);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });

    describe('validateVerificationCode', () => {
        it('should check validate verification code invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const mockCode = {
                code: 'code',
                source: 'source'
            };

            service.validateVerificationCode(mockCode);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('api/2fa/verify', mockCode);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });

    describe('saveDevice', () => {
        it('should invoke api post call saveDevice and return baseResponse', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);

            service.saveDevice();

            tick();
            expect(httpService.post).toHaveBeenCalledWith('api/2fa/saveDevice', null);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });

    describe('validateSecurityAnswer', () => {
        it('should invoke api post call validateSecurityAnswer and return baseResponse', waitForAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const req = { answer: 'test' };

            service.validateSecurityAnswer(req).then(() => {
                expect(httpService.post).toHaveBeenCalledWith('api/2fa/validatesecurityanswer', req);
                expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
            });
        }));
    });
});
