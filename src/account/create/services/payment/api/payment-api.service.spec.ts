import { fakeAsync, tick } from '@angular/core/testing';
import { ResponseErrorService, HttpService, ToasterService } from 'common/services';
import { } from 'jasmine';
import { PaymentApiService } from './payment-api.service';

describe('payment api service', () => {

    let httpService: jasmine.SpyObj<HttpService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let service: PaymentApiService;
    let toasterService: jasmine.SpyObj<ToasterService>;
    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        httpService.post.and.resolveTo({ errors: [] });
        httpService.get.and.resolveTo({ errors: [] });
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        service = new PaymentApiService(httpService, responseErrorService, toasterService);
    });
    

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('addCreditCard', () => {
        it('should check addCreditCard invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            
            service.addCreditCard({} as any);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AddPaymentDetails/AddPaymentCreditCard', {} as any);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });

    describe('updateCreditCard', () => {
        it('should check updateCreditCard invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            
            service.updateCreditCard({} as any);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AddPaymentDetails/UpdatePaymentCreditCard', {} as any);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });

    describe('addBankAccount', () => {
        it('should check addBankAccount invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            
            service.addBankAccount({} as any);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AddPaymentDetails/AddPaymentBankAccount', {} as any);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });

    describe('updateBankAccout', () => {
        it('should check updateBankAccout invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            
            service.updateBankAccout({} as any);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AddPaymentDetails/UpdatePaymentBankAccount', {} as any);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });

    describe('removeBillingMethod', () => {
        it('should check removeBillingMethod invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            
            service.removeBillingMethod({} as any);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('/api/account/manageBilling/removeBillingMethod', {} as any);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });
});
