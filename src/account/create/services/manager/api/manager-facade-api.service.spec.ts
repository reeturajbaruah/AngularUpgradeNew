import { fakeAsync, tick } from '@angular/core/testing';
import { } from 'jasmine';
import { HttpService, ResponseErrorService } from '../../../../../common/services';
import { ManagerFacadeApiService } from './manager-facade-api.service';


describe('Manager Facade Api Service', () => {

    let managerFacadeApiService: ManagerFacadeApiService;
    let httpServiceSpy: jasmine.SpyObj<HttpService>;
    let responseErrorServiceSpy: jasmine.SpyObj<ResponseErrorService>;

    beforeEach(() => {
        httpServiceSpy = jasmine.createSpyObj('httpServiceSpy', ['get', 'post']);
        httpServiceSpy.post.and.resolveTo({ errors: [] });
        httpServiceSpy.get.and.resolveTo({ errors: [] });
        responseErrorServiceSpy = jasmine.createSpyObj('responseErrorServiceSpy', ['isErrorFree', 'displayAlertsFromResponse']);
        managerFacadeApiService = new ManagerFacadeApiService(httpServiceSpy, responseErrorServiceSpy);
    });

    it('checks if service is instantiated', () => {
        expect(managerFacadeApiService).toBeDefined();
    });

    it('should check getVehicles invokes proper api url with proper response', fakeAsync(() => {
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);
        managerFacadeApiService.getVehicles();
        tick();
        expect(httpServiceSpy.get).toHaveBeenCalledWith('/api/sessions/AddEZTag/GetAccountTags');
        expect(responseErrorServiceSpy.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
        expect(responseErrorServiceSpy.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
    }));

    it('should check getPersonalInfo invokes proper api url with proper response', fakeAsync(() => {
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);
        managerFacadeApiService.getPersonalInfo();
        tick();
        expect(httpServiceSpy.get).toHaveBeenCalledWith('/api/sessions/PersonalInfo/GetPersonalInfo');
        expect(responseErrorServiceSpy.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
        expect(responseErrorServiceSpy.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
    }));

    it('should check getBillingInfo invokes proper api url with proper response', fakeAsync(() => {
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);
        managerFacadeApiService.getBillingInfo();
        tick();
        expect(httpServiceSpy.get).toHaveBeenCalledWith('/api/sessions/AddPaymentDetails/GetBillingInfo');
        expect(responseErrorServiceSpy.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
        expect(responseErrorServiceSpy.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
    }));
   
});

