import { fakeAsync, tick } from '@angular/core/testing';
import { } from 'jasmine';
import { HttpService, ResponseErrorService } from '../../../../common/services';
import { PendingFundsApiService } from './pending-funds-api.service';

describe('Pending Funds Api Service', () => {

    let pendingFundsApiService: PendingFundsApiService;
    let httpServiceSpy: jasmine.SpyObj<HttpService>;
    let responseErrorServiceSpy: jasmine.SpyObj<ResponseErrorService>;

    beforeEach(() => {
        httpServiceSpy = jasmine.createSpyObj('httpServiceSpy', ['get', 'post']);
        httpServiceSpy.post.and.resolveTo({ errors: [] });
        httpServiceSpy.get.and.resolveTo({ errors: [] });
        responseErrorServiceSpy = jasmine.createSpyObj('responseErrorServiceSpy', ['isErrorFree', 'displayAlertsFromResponse']);
        pendingFundsApiService = new PendingFundsApiService(httpServiceSpy, responseErrorServiceSpy);
    });

    it('checks if service is instantiated', () => {
        expect(pendingFundsApiService).toBeDefined();
    });

    it('should check rebillAmt invokes proper api url with proper response', fakeAsync(() => {
        responseErrorServiceSpy.isErrorFree.and.returnValue(true);
        pendingFundsApiService.rebillAmt();
        tick();
        expect(httpServiceSpy.get).toHaveBeenCalledWith('/api/account/makepayment/figurePayment');
        expect(responseErrorServiceSpy.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
        expect(responseErrorServiceSpy.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
    }));

});

