import { fakeAsync, tick } from '@angular/core/testing';
import { ResponseErrorService, HttpService, ToasterService } from 'common/services';
import { } from 'jasmine';
import { RebillApiService } from './rebill-api.service';

describe('rebill api service', () => {

    let httpService: jasmine.SpyObj<HttpService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let service: RebillApiService;
    let toasterService: jasmine.SpyObj<ToasterService>;
    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        httpService.post.and.resolveTo({ errors: [] });
        httpService.get.and.resolveTo({ errors: [] });
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        service = new RebillApiService(httpService, responseErrorService, toasterService);
    });
    

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('updateRebillAmount', () => {
        it('should check updateRebillAmount invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            
            service.updateRebillAmount({} as any);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/UpdateRebillAmount/UpdateRebillAmount', {} as any);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });
});
