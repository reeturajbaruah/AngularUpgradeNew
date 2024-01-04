import { DatePipe } from '@angular/common';
import { BaseResponse } from 'common/interfaces';
import { ResponseErrorService } from 'common/services';
import { OnlineAccessLoginInfo } from 'firstTimeLogin/interfaces';
import { } from 'jasmine';
import { WebApiService } from './webApi.service';

describe('First time login webApiService', () => {

    let httpService: jasmine.SpyObj<any>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let datePipe: jasmine.SpyObj<DatePipe>;
    let service: WebApiService;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        httpService.post.and.resolveTo({ errors: [] });
        httpService.get.and.resolveTo({ errors: [] });
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);
        datePipe = jasmine.createSpyObj('datePipe', ['transform']);

        service = new WebApiService(httpService, responseErrorService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(service).toBeDefined();
        });
    });

    describe('setupAccount', () => {

        it('should call get with correct api url', async () => {
            const request = {} as OnlineAccessLoginInfo;

            const response = { errors: [] } as BaseResponse;
            httpService.post.and.resolveTo(response);

            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            await service.setupAccount(request);

            expect(httpService.post).toHaveBeenCalledWith(service['SETUP_URL'], request);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith(response);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
        });

        it('should handle error', async () => {
            const request = {} as OnlineAccessLoginInfo;
            const response = { errors: [] } as BaseResponse;
            httpService.post.and.resolveTo(response);
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            await service.setupAccount(request);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith(response);
            expect(responseErrorService.displayAlertsFromResponse).not.toHaveBeenCalledWith(response);
        });

    });

});
