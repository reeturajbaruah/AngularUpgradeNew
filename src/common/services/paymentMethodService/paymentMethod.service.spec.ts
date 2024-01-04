import { TestBed } from '@angular/core/testing';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { ResponseErrorService, HttpService } from 'common/services';
import { } from 'jasmine';
import {
    GetPaymentMethodDataResponse, PaymentMethodService
} from './paymentMethod.service';


describe('accountDashboardService', () => {

    let service: PaymentMethodService;
    let httpService: jasmine.SpyObj<HttpService>;
    let responseErrorService: jasmine.SpyObj<any>;
    let authChannel: jasmine.SpyObj<AuthChannelService>;

    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);

        const responseErrorServiceSpy = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse', 'displayAlertsFromResponse']);

        authChannel = jasmine.createSpyObj('authChannel', ['logOut']);

        TestBed.configureTestingModule({
            providers: [
                PaymentMethodService,
                { provide: HttpService, useValue: httpService },
                { provide: ResponseErrorService, useValue: responseErrorServiceSpy },
                { provide: AuthChannelService, useValue: authChannel }
            ]
        });

        service = TestBed.inject(PaymentMethodService);
        responseErrorService = TestBed.inject(ResponseErrorService) as jasmine.SpyObj<any>;
    });

    describe('canary', () => {


        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    it('can create a service', () => {
        expect(service).toBeDefined();
    });

    describe('getPaymentMethodData', () => {

        it('should call httpService.get', async () => {

            httpService.get.and.returnValue(Promise.resolve('fake search response'));

            await service.getPaymentMethodData();

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/sessions/PaymentMethodData/GetPaymentMethodData');
            expect(httpService.get).toHaveBeenCalledTimes(1);
        });

        it('should return value returned by httpService.get', async () => {

            httpService.get.and.returnValue(Promise.resolve('fake search response'));

            const result = await service.getPaymentMethodData();

            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if alert', async () => {

            const response: GetPaymentMethodDataResponse = {
                primaryPaymentMethod: null,
                hasPrimary: true,
                hasPaymentMethod: true,
                errors: [],
                alerts: [{
                    alertId: 1,
                    alertMsg: 't',
                    importance: 0
                }],
                exception: null,
                accountStatus: null,
                sessionTimedOut: null
            };

            httpService.get.and.returnValue(Promise.resolve(response));

            await service.getPaymentMethodData();

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);

        });

        it('should call displayErrorsFromResponse if error', async () => {

            const response: GetPaymentMethodDataResponse = {
                primaryPaymentMethod: null,
                hasPrimary: true,
                hasPaymentMethod: true,
                errors: [{
                    key: 'a',
                    message: 'b'
                }],
                alerts: [],
                exception: null,
                accountStatus: null,
                sessionTimedOut: null
            };

            httpService.get.and.returnValue(Promise.resolve(response));

            try {
                //Act
                await service.getPaymentMethodData();
            } catch (e) {
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
            }

        });
    });

});
