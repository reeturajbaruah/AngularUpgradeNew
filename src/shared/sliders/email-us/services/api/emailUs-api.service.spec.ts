import { fakeAsync, tick } from '@angular/core/testing';
import { } from 'jasmine';
import { HttpService, ResponseErrorService, ToasterService } from '../../../../../common/services';
import { EmailUsApiService } from './emailUs-api.service';

describe('emailUs api service', () => {

    let httpServiceSpy: jasmine.SpyObj<HttpService>;
    let responseErrorServiceSpy: jasmine.SpyObj<ResponseErrorService>;
    let service: EmailUsApiService;
    let toasterService: jasmine.SpyObj<ToasterService>;

    beforeEach(() => {
        httpServiceSpy = jasmine.createSpyObj('httpServiceSpy', ['get', 'post']);
        httpServiceSpy.post.and.resolveTo({ errors: [] });
        httpServiceSpy.get.and.resolveTo({ errors: [] });
        responseErrorServiceSpy = jasmine.createSpyObj('responseErrorServiceSpy', ['isErrorFree', 'displayAlertsFromResponse']);
        service = new EmailUsApiService(httpServiceSpy, responseErrorServiceSpy, toasterService);
    });

    it('checks if service is instantiated', () => {
        expect(service).toBeDefined();
    });
  
    it('should check sendHelpAndSupportEmail invokes proper api url with proper response', fakeAsync(() => {
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);
        service.sendHelpAndSupportEmail({} as any);
        tick();
        expect(httpServiceSpy.post).toHaveBeenCalledWith('/api/sessions/HelpAndSupport/SendHelpAndSupportEmail', {} as any);
        expect(responseErrorServiceSpy.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
        expect(responseErrorServiceSpy.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
    }));
});
