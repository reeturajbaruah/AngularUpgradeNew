
import { TestBed } from '@angular/core/testing';
import { ICheckoutPaymentRes } from 'account/create/models/checkout-payment.models';
import { IMailingInfo } from 'common/models';
import { } from 'jasmine';
import { CheckoutApiService } from '../api/checkout-api.service';
import { CheckoutFacadeService } from './checkout-facade.service';


describe('Checkout Facade Service', () => {

    let checkoutFacadeService: CheckoutFacadeService;
    let checkoutApiServiceSpy: jasmine.SpyObj<CheckoutApiService>;


    beforeEach(() => {

        checkoutApiServiceSpy = jasmine.createSpyObj('api', ['checkout', 'makePaymentOnKiosk', 'makePaymentOnWeb']);


        TestBed.configureTestingModule({
            providers: [
                CheckoutFacadeService,
                { provide: CheckoutApiService, useFactory: () => checkoutApiServiceSpy },
            ]
        });

        checkoutFacadeService = TestBed.inject(CheckoutFacadeService);

    });



    it('tests checkoutPayment method', async () => {
        checkoutApiServiceSpy.checkout.and.resolveTo({});
        await checkoutFacadeService.checkoutPayment();
        expect(checkoutApiServiceSpy.checkout).toHaveBeenCalled();
    });

    it('tests make Payment method on web', async () => {

        await checkoutFacadeService.makePayment({
            deliveryMethod: 'test',
            checkoutPayment: {} as ICheckoutPaymentRes,
        }, false);

        expect(checkoutApiServiceSpy.makePaymentOnWeb).toHaveBeenCalled();
    });

    it('tests make Payment method on kiosk', async () => {

        await checkoutFacadeService.makePayment({
            deliveryMethod: 'test',
            checkoutPayment: {} as ICheckoutPaymentRes,
        }, true);

        expect(checkoutApiServiceSpy.makePaymentOnKiosk).toHaveBeenCalled();
    });

});

