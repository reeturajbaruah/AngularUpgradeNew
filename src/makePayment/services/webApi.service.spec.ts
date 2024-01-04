import { BaseResponse, ErrorMessage } from 'common/interfaces';
import { ResponseErrorService } from 'common/services';
import { } from 'jasmine';
import { AddressInfo, BankDetails, BillingInfo, BillingType, CreditCardDetails, PaymentMethodInfo } from '../../common/models';
import { WebApiService } from '../services/webApi.service';
import { PaymentInfo } from '../interfaces';

describe('Make a payment webApiService', () => {

    let httpService: jasmine.SpyObj<any>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let service: WebApiService;


    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        responseErrorService.isErrorFree.and.returnValue(true);
        service = new WebApiService(httpService, responseErrorService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(service).toBeDefined();
        });
    });

    describe('getAllPaymentMethods', () => {

        it('calls correct api', async () => {

            const response = { bankAccounts: [], creditCards: [], maxCards: 2, maxEfts: 1 } as PaymentMethodInfo;
            (httpService.get as jasmine.Spy).and.returnValue(response);

            const result = await service.getAllPaymentMethods();

            expect(httpService.get).toHaveBeenCalledWith(service['getAllPaymentsMethodsUrl']);
            expect(result).toBe(response);
        });

        it('shows toast on error', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);
            const response = { errors: [{ message: 'test' }] } as BaseResponse;
            (httpService.get as jasmine.Spy).and.returnValue(response);

            await service.getAllPaymentMethods();

            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith(response);
        });
    });

    describe('makePayment', () => {

        it('calls correct api for CC', async () => {

            const response = { errors: [] };
            (httpService.post as jasmine.Spy).and.returnValue(response);

            const paymentInfo = {
                amount: 1,
                eft: null,
                billingType: BillingType.Credit,
                credit: { address1: 'address1', cardNbr: '1234', cardCode: 'X', international: true } as CreditCardDetails & AddressInfo
            } as PaymentInfo;

            await service.makePayment(paymentInfo);

            expect(httpService.post).toHaveBeenCalledWith(service['makePaymentCCUrl'], {
                paymentAmount: paymentInfo.amount,
                ...paymentInfo.credit,
                creditCardNumber: '1234',
                type: 'X',
                internationalAddress: true
            });

        });

        it('calls correct api for EFT', async () => {

            const response = { errors: [] };
            (httpService.post as jasmine.Spy).and.returnValue(response);

            const paymentInfo = {
                amount: 1,
                billingType: BillingType.Eft,
                eft: { accountNumber: '1234' } as BankDetails & AddressInfo,
                credit: null
            };

            await service.makePayment(paymentInfo);

            expect(httpService.post).toHaveBeenCalledWith(service['makePaymentEftUrl'], {
                paymentAmount: paymentInfo.amount,
                ...paymentInfo.eft
            });

        });

        it('shows toast on error', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);
            const response = { errors: [{ message: 'test' }] } as BaseResponse;
            (httpService.post as jasmine.Spy).and.returnValue(response);

            const paymentInfo = {
                amount: 1,
                eft: { accountNumber: '1234' } as BankDetails & AddressInfo,
                credit: null
            };

            await service.makePayment(paymentInfo);

            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith(response);
        });

    });

    describe('addPaymentMethodInfo', () => {

        it('calls correct api to save - EFT', async () => {

            const response = { billingInfo: {} as PaymentMethodInfo, errors: [] };
            (httpService.post as jasmine.Spy).and.returnValue(response);

            const billingInfo = { billingType: BillingType.Eft } as BillingInfo;

            const payload = {
                paymentMethod: {
                    ...billingInfo,
                    billingType: 1,
                    billingTypeCode: 'E',
                    billingTypeDisplay: 'EFT'
                }
            };
            const errors = await service.addPaymentMethodInfo(payload);

            expect(httpService.post).toHaveBeenCalledWith(service['addEftBillingInfoUrl'],
                payload
            );
            expect(errors).toEqual([]);

        });

        it('calls correct api to save - CC', async () => {

            const response = { billingInfo: {} as PaymentMethodInfo, errors: [] };
            (httpService.post as jasmine.Spy).and.returnValue(response);

            const billingInfo = { billingType: BillingType.Credit } as BillingInfo;

            const payload = {
                paymentMethod: {
                    ...billingInfo,
                    billingType: 0,
                    billingTypeCode: 'C',
                    billingTypeDisplay: 'CREDIT'
                }
            };

            const errors = await service.addPaymentMethodInfo(payload);

            expect(httpService.post).toHaveBeenCalledWith(service['addCreditBillingInfoUrl'],
                payload
            );
            expect(errors).toEqual([]);

        });

        it('shows toast on error', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);
            const response = { errors: [{ message: 'test' }] } as BaseResponse;
            (httpService.post as jasmine.Spy).and.returnValue(response);

            const paymentMethodInfo = {} as BillingInfo;

            const errors = await service.addPaymentMethodInfo(paymentMethodInfo);

            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith(response);
            expect(errors).toEqual(response.errors as ErrorMessage[]);
        });

    });

});
