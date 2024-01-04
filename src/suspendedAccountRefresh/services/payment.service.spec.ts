import { TestBed, waitForAsync } from '@angular/core/testing';
import { PaymentService } from './payment.service';
import { HttpService } from 'common/services';

describe('PaymentService', () => {
    let service: PaymentService;
    let httpService: jasmine.SpyObj<HttpService>;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['post']);

        httpService.post.and.resolveTo({});

        TestBed.configureTestingModule({
            providers: [
                PaymentService,
                { provide: HttpService, useValue: httpService }
            ]
        });

        service = TestBed.inject(PaymentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('makePayment should call post', waitForAsync(() => {
        service.makePayment({} as any).then(res => {
            expect(httpService.post).toHaveBeenCalledWith('/api/violator/suspended/payment', {});
        });
    }));

    it('updateBillingInformation should call post', waitForAsync(() => {
        service.updateBillingInformation({} as any).then(res => {
            expect(httpService.post).toHaveBeenCalledWith('/api/violator/suspended/paymentMethod', {});
        });
    }));

    it('makePaymentCreditCardSuspended should call post', waitForAsync(() => {
        service.makePaymentCreditCardSuspended({} as any).then(res => {
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/SuspendedAccount/MakePaymentCreditCardSuspended', {});
        });
    }));

    it('makePaymentBankAccountSuspended should call post', waitForAsync(() => {
        service.makePaymentBankAccountSuspended({} as any).then(res => {
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/SuspendedAccount/MakePaymentBankAccountSuspended', {});
        });
    }));

    it('saveBillingInformationSuspended should call post', waitForAsync(() => {
        service.saveBillingInformationSuspended({} as any).then(res => {
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/SuspendedAccount/SaveBillingInformationSuspended', {});
        });
    }));
});