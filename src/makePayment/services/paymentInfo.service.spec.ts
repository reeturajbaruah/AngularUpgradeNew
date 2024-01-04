import { } from 'jasmine';
import { PaymentInfoService } from './paymentInfo.service';


describe('make a payment PaymentInfoService', () => {

    let service: PaymentInfoService;

    beforeEach(() => {
       
        service = new PaymentInfoService();
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(service).toBeDefined();
        });
    });

    describe('paymentInfo', () => {

        it('gets info', () => {
            const data = {} as any;

            service['internalPaymentInfo'] = data;

            expect(service.paymentInfo).toBe(data);
        });

        it('sets info', () => {
            const data = {} as any;

            service.paymentInfo = data;
            
            expect(service['internalPaymentInfo']).toBe(data);
        });

    });


});
