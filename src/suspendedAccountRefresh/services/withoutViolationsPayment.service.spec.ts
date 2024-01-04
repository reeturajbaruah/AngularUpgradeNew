import { TestBed, waitForAsync } from '@angular/core/testing';
import { WithoutViolationsPaymentService } from './withoutViolationsPayment.service';
import { PaymentService } from './payment.service';
import { BillingType } from 'common/models';

describe('WithoutViolationsPaymentService', () => {
    let service: WithoutViolationsPaymentService;
    let paymentService: jasmine.SpyObj<PaymentService>;

    beforeEach(() => {
        paymentService = jasmine.createSpyObj('PaymentService', ['saveBillingInformationSuspended', 'makePaymentCreditCardSuspended', 'makePaymentBankAccountSuspended']);

        TestBed.configureTestingModule({
            providers: [
                WithoutViolationsPaymentService,
                { provide: PaymentService, useValue: paymentService }
            ]
        });

        service = TestBed.inject(WithoutViolationsPaymentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('submitPayment should return errors', waitForAsync(() => {
        paymentService.saveBillingInformationSuspended.and.resolveTo({ errors: [{}] } as any);

        service.submitPayment({
            makePrimary: true,
            credit: {
                expMonth: 1,
                expYear: 1999
            },
            eft: {},
            billingType: BillingType.Credit
        } as any).then(res => {
            expect(res).toEqual({ errors: [{}] } as any);
            expect(paymentService.saveBillingInformationSuspended).toHaveBeenCalled();
        });
    }));

    it('submitPayment should call makePaymentCreditCardSuspended', waitForAsync(() => {
        paymentService.makePaymentCreditCardSuspended.and.resolveTo({} as any);

        service.submitPayment({
            makePrimary: false,
            credit: {
                expMonth: 1,
                expYear: 1999
            },
            eft: {},
            billingType: BillingType.Credit
        } as any).then(res => {
            expect(res).toEqual({} as any);
            expect(paymentService.makePaymentCreditCardSuspended).toHaveBeenCalled();
        });
    }));

    it('submitPayment should call makePaymentBankAccountSuspended', waitForAsync(() => {
        paymentService.makePaymentBankAccountSuspended.and.resolveTo({} as any);

        service.submitPayment({
            makePrimary: false,
            credit: {},
            eft: {},
            billingType: BillingType.Eft
        } as any).then(res => {
            expect(res).toEqual({} as any);
            expect(paymentService.makePaymentBankAccountSuspended).toHaveBeenCalled();
        });
    }));
});