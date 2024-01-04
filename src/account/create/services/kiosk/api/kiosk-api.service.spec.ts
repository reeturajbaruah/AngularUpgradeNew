import { fakeAsync, tick } from '@angular/core/testing';
import { ResponseErrorService, HttpService, ToasterService } from 'common/services';
import { } from 'jasmine';
import { KioskApiService } from './kiosk-api.service';

describe('Kiosk api service', () => {

    let httpService: jasmine.SpyObj<HttpService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let service: KioskApiService;
    let toasterService: jasmine.SpyObj<ToasterService>;
    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get']);
        httpService.get.and.resolveTo({ errors: [] });
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        service = new KioskApiService(httpService, responseErrorService, toasterService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('getKioskStoreConfig', () => {
        it('should check getKioskStoreConfig invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            
            service.getKioskStoreConfig('test');

            tick();
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AddPaymentDetails/GetKioskStoreConfig?machineName=test');
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });
});
