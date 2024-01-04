import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { } from 'jasmine';
import { HttpService, ResponseErrorService, ToasterService } from '../../../../../common/services';
import { LoginFacadeApiService } from './facade-api.service';

describe('Login Facade Api Service', () => {

    let loginFacadeApiService: LoginFacadeApiService;
    let httpServiceSpy: jasmine.SpyObj<HttpService>;
    let responseErrorServiceSpy: jasmine.SpyObj<ResponseErrorService>;
    let toasterService: jasmine.SpyObj<ToasterService>;

    beforeEach(() => {
        httpServiceSpy = jasmine.createSpyObj('httpServiceSpy', ['get', 'post']);
        httpServiceSpy.post.and.resolveTo({ errors: [] });
        httpServiceSpy.get.and.resolveTo({ errors: [] });
        responseErrorServiceSpy = jasmine.createSpyObj('responseErrorServiceSpy', ['isErrorFree', 'displayAlertsFromResponse']);
        loginFacadeApiService = new LoginFacadeApiService(httpServiceSpy, responseErrorServiceSpy, toasterService);
    });

    it('checks if service is instantiated', () => {
        expect(loginFacadeApiService).toBeDefined();
    });

    it('should check setupAccount invokes proper api url with proper response', fakeAsync(() => {
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);
        loginFacadeApiService.setupAccount({} as any);
        tick();
        expect(httpServiceSpy.post).toHaveBeenCalledWith('/api/sessions/PersonalBusinessData/SetupAccountStep1', {} as any);
        expect(responseErrorServiceSpy.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
        expect(responseErrorServiceSpy.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
    }));

    
    it('should check setPersonalInfo invokes proper api url with proper response', fakeAsync(() => {
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);
        loginFacadeApiService.setPersonalInfo({} as any);
        tick();
        expect(httpServiceSpy.post).toHaveBeenCalledWith('/api/sessions/PersonalBusinessDetails/SetPersonalInfo', {} as any);
        expect(responseErrorServiceSpy.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
        expect(responseErrorServiceSpy.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
    }));

});

