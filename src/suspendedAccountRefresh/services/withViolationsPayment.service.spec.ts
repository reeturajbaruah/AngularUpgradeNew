import { TestBed, waitForAsync } from '@angular/core/testing';
import { WithViolationsPaymentService } from './withViolationsPayment.service';
import { PaymentService } from './payment.service';
import { WebApiService } from './webapi.service';
import { BillingType } from 'common/models';

describe('WithViolationsPaymentService', () => {
    let service: WithViolationsPaymentService;
    let paymentService: jasmine.SpyObj<PaymentService>;
    let webApiService: jasmine.SpyObj<WebApiService>;

    beforeEach(() => {
        paymentService = jasmine.createSpyObj('PaymentService', ['updateBillingInformation', 'makePayment']);
        webApiService = jasmine.createSpyObj('WebApiService', ['getSuspendedAccountData']);

        TestBed.configureTestingModule({
            providers: [
                WithViolationsPaymentService,
                { provide: PaymentService, useValue: paymentService },
                { provide: WebApiService, useValue: webApiService }
            ]
        });

        service = TestBed.inject(WithViolationsPaymentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('submitPayment should return errors', waitForAsync(() => {
        paymentService.updateBillingInformation.and.resolveTo({ errors: [{}] } as any);

        service.submitPayment({
            makePrimary: true,
            credit: {},
            eft: {},
            billingType: BillingType.Credit
        } as any).then(res => {
            expect(res).toEqual({ errors: [{}] } as any);
            expect(webApiService.getSuspendedAccountData).not.toHaveBeenCalled();
        });
    }));

    it('submitPayment should call makePayment', waitForAsync(() => {
        webApiService.getSuspendedAccountData.and.resolveTo({} as any);
        paymentService.makePayment.and.resolveTo({} as any);

        service.submitPayment({
            makePrimary: false,
            credit: {},
            eft: {},
            billingType: BillingType.Credit
        } as any).then(res => {
            expect(res).toEqual({} as any);
            expect(webApiService.getSuspendedAccountData).toHaveBeenCalled();
            expect(paymentService.makePayment).toHaveBeenCalled();
        });
    }));
});