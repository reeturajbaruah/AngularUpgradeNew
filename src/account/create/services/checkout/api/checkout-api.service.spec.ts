import { fakeAsync, tick } from '@angular/core/testing';
import { } from 'jasmine';
import { HttpService, ResponseErrorService, ToasterService } from '../../../../../common/services';
import { CheckoutApiService } from './checkout-api.service';


describe('Checkout Api Service', () => {

    let checkoutApiService: CheckoutApiService;
    let httpServiceSpy: jasmine.SpyObj<HttpService>;
    let responseErrorServiceSpy: jasmine.SpyObj<ResponseErrorService>;

    beforeEach(() => {
        httpServiceSpy = jasmine.createSpyObj('httpServiceSpy', ['get', 'post']);
        httpServiceSpy.post.and.resolveTo({ errors: [] });
        httpServiceSpy.get.and.resolveTo({ errors: [] });
        responseErrorServiceSpy = jasmine.createSpyObj('responseErrorServiceSpy', ['isErrorFree', 'displayAlertsFromResponse']);
        checkoutApiService = new CheckoutApiService(httpServiceSpy, responseErrorServiceSpy);
    });

    it('checks if service is instantiated', () => {
        expect(checkoutApiService).toBeDefined();
    });

    it('should check makePaymentOnKiosk invokes proper api url with proper response', fakeAsync(() => {
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);
        checkoutApiService.makePaymentOnKiosk({} as any);
        tick();
        expect(httpServiceSpy.post).toHaveBeenCalledWith('/api/sessions/Checkout/MakeKioskPayment', {} as any);
        expect(responseErrorServiceSpy.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
        expect(responseErrorServiceSpy.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
    }));


    it('should check makePaymentOnWeb invokes proper api url with proper response', fakeAsync(() => {
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);
        checkoutApiService.makePaymentOnWeb({} as any);
        tick();
        expect(httpServiceSpy.post).toHaveBeenCalledWith('/api/sessions/Checkout/MakeAccountCreationPayment', {} as any);
        expect(responseErrorServiceSpy.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
        expect(responseErrorServiceSpy.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
    }));

    it('should check checkout invokes proper api url with proper response', fakeAsync(() => {
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);
        checkoutApiService.checkout({} as any);
        tick();
        expect(httpServiceSpy.post).toHaveBeenCalledWith('/api/sessions/Checkout/CheckoutPayment', {} as any);
        expect(responseErrorServiceSpy.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
        expect(responseErrorServiceSpy.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
    }));
});

