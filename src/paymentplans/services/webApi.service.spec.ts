import { } from 'jasmine';
import { PaymentRequest } from '../interfaces';
import { WebApiService } from '../services/webApi.service';


describe('Payment Plan webApiService', () => {

    let httpService: jasmine.SpyObj<any>;
    let service: WebApiService;

    const request = {
        eftPaymentMethod: {
            accountType: null,
            name: null,
            routingNumber: null,
            accountNumber: null,
            address1: null,
            city: null,
            country: null,
        },
        creditCardPaymentMethod: {
            cardCode: null,
            cardNbr: null,
            expMonth: null,
            expYear: null,
            nameOnCard: null,
            address1: null,
            city: null,
            country: null,
        },
        creditCard: null,
        amount: null,
        email: null
    } as PaymentRequest;

    const reponse = {
        originalRequest: {
            eftPaymentMethod: {
                accountType: null,
                name: null,
                routingNumber: null,
                accountNumber: null,
                address1: null,
                city: null,
                country: null,
            },
            creditCardPaymentMethod: {
                cardCode: null,
                cardNbr: null,
                expMonth: null,
                expYear: null,
                nameOnCard: null,
                address1: null,
                city: null,
                country: null,
            },
            creditCard: null,
            amount: null,
            email: null
        }
    };

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['post', 'get']);
        service = new WebApiService(httpService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ezTagPayment', () => {
        it('should make a basic api call', async () => {
            httpService.post.and.returnValue(Promise.resolve(reponse));

            const response = await service.ezTagPayment(request);

            expect(response).toEqual(reponse as any);
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/PaymentPlanAccount/MakePayment', request);
        });
    });

    describe('violationsPayment', () => {
        it('should make a basic api call', async () => {
            httpService.post.and.returnValue(Promise.resolve(reponse));

            const response = await service.violationsPayment(request);

            expect(response).toEqual(reponse as any);
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/PaymentPlan/MakePayment', request);
        });
    });

    describe('ezTagSearchPaymentPlans', () => {
        it('should make a basic api call', async () => {
            httpService.get.and.returnValue(new Promise(() => { }));

            service.ezTagSearchPaymentPlans();

            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/PaymentPlanAccount/PaymentPlanAccountSearch');
        });
    });

    describe('violationsPaymentPlansSearch', () => {
        it('should make a basic api call', async () => {
            httpService.post.and.returnValue(Promise.resolve(reponse));
            const res = {
                LicenseState: null,
                LicensePlate: null,
            };
            const response = await service.violationsPaymentPlansSearch(res);

            expect(response).toEqual(response);
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/PaymentPlan/PaymentPlanSearch', res);
        });
    });
});
