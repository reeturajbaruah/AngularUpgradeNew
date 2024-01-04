import { TestBed } from '@angular/core/testing';
import { BaseResponse } from 'common/interfaces';
import { AccountSummaryAlertFilterService, HttpService, ResponseErrorService } from 'common/services';
import { } from 'jasmine';
import {
    AccountDashboardService,
    EmailConfirmationResponse,
    GetAccountDataResponse, GetTransactionsDataResponse, GetVehiclesDataResponse
} from './accountDashboard.service';

describe('accountDashboardService', () => {

    let service: AccountDashboardService;
    let httpService: jasmine.SpyObj<any>;
    let accountSummaryAlertFilterService: jasmine.SpyObj<AccountSummaryAlertFilterService>;
    let responseErrorService: jasmine.SpyObj<any>;

    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);

        accountSummaryAlertFilterService = jasmine.createSpyObj('AccountSummaryAlertFilterService', ['filterAccountSummaryAlerts']);
        accountSummaryAlertFilterService.filterAccountSummaryAlerts.and.returnValue();

        const responseErrorServiceSpy = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse', 'displayAlertsFromResponse']);

        TestBed.configureTestingModule({
            providers: [
                AccountDashboardService,
                { provide: HttpService, useValue: httpService },
                { provide: ResponseErrorService, useValue: responseErrorServiceSpy },
                { provide: AccountSummaryAlertFilterService, useValue: accountSummaryAlertFilterService }
            ]
        });

        service = TestBed.inject(AccountDashboardService);
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

    describe('getAccountData', () => {

        it('should call httpService.get', async () => {

            httpService.get.and.returnValue(Promise.resolve('fake search response'));

            await service.getAccountData();

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/sessions/AccountData/GetAccountData');
            expect(httpService.get).toHaveBeenCalledTimes(1);
        });

        it('should return value returned by httpService.get', async () => {

            httpService.get.and.returnValue(Promise.resolve('fake search response'));

            const result = await service.getAccountData();

            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if alert', async () => {

            const response: GetAccountDataResponse = {
                username: null,
                currentBalance: null,
                emailAddress: null,
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

            await service.getAccountData();

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);

        });

        it('should call displayErrorsFromResponse if error', async () => {

            const response: GetAccountDataResponse = {
                username: null,
                currentBalance: null,
                emailAddress: null,
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
                await service.getAccountData();
            } catch (e) {
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
            }

        });
    });

    describe('emailConfirmation', () => {

        it('should call httpService.post', async () => {

            httpService.post.and.returnValue(Promise.resolve('fake search response'));

            await service.emailConfirmation({ emailValidationId: 4 });

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/sessions/EmailConfirmation/EmailConfirmation', { emailValidationId: 4 });
            expect(httpService.post).toHaveBeenCalledTimes(1);
        });

        it('should return value returned by httpService.post', async () => {

            httpService.post.and.returnValue(Promise.resolve('fake email response'));

            const result = await service.emailConfirmation({ emailValidationId: 4 });

            expect(result).toBe('fake email response' as any);
        });

        it('should call displayAlertsFromResponse if alert', async () => {

            const response: EmailConfirmationResponse = {
                emailConfirmationStatus: null,
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

            httpService.post.and.returnValue(Promise.resolve(response));

            await service.emailConfirmation({ emailValidationId: 4 });

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);

        });

        it('should call displayErrorsFromResponse if error', async () => {

            const response: EmailConfirmationResponse = {
                emailConfirmationStatus: null,
                errors: [{
                    key: 'a',
                    message: 'b'
                }],
                alerts: [],
                exception: null,
                accountStatus: null,
                sessionTimedOut: null
            };

            httpService.post.and.returnValue(Promise.resolve(response));

            try {
                //Act
                await service.emailConfirmation({ emailValidationId: 4 });
            } catch (e) {
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
            }

        });
    });

    describe('getVehiclesData', () => {

        it('should call httpService.get', async () => {


            httpService.get.and.returnValue(Promise.resolve('fake search response'));

            await service.getVehiclesData();

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/sessions/VehiclesData/GetVehiclesData');
            expect(httpService.get).toHaveBeenCalledTimes(1);

        });

        it('should return value returned by httpService.get', async () => {

            httpService.get.and.returnValue(Promise.resolve('fake search response'));

            const result = await service.getVehiclesData();

            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if alert', async () => {

            const response: GetVehiclesDataResponse = {
                vehicleData: null,
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

            await service.getVehiclesData();

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);

        });

        it('should call displayErrorsFromResponse if error', async () => {

            const response: GetVehiclesDataResponse = {
                vehicleData: null,
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
                await service.getVehiclesData();
            } catch (e) {
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
            }

        });

    });

    describe('getTransactionsData', () => {

        it('should call httpService.get', async () => {

            httpService.get.and.returnValue(Promise.resolve('fake search response'));

            await service.getTransactionsData();

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/sessions/TransactionsData/GetTransactionsData');
            expect(httpService.get).toHaveBeenCalledTimes(1);
        });

        it('should return value returned by httpService.get', async () => {

            httpService.get.and.returnValue(Promise.resolve('fake search response'));

            const result = await service.getTransactionsData();

            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if alert', async () => {

            const response: GetTransactionsDataResponse = {
                transactionsData: null,
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

            await service.getTransactionsData();

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);

        });

        it('should call displayErrorsFromResponse if error', async () => {

            const response: GetTransactionsDataResponse = {
                transactionsData: null,
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
                await service.getTransactionsData();
            } catch (e) {
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
            }

        });

    });

    describe('getAccountSummary', () => {

        it('should call httpService.post', async () => {

            httpService.post.and.returnValue(Promise.resolve('fake search response'));

            await service.getAccountSummary({ emailValidationId: 4 });

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/sessions/AccountSummary/GetAccountSummary', { emailValidationId: 4 });
            expect(httpService.post).toHaveBeenCalledTimes(1);
        });

        it('should return value returned by httpService.post', async () => {

            httpService.post.and.returnValue(Promise.resolve('fake search response'));

            const result = await service.getAccountSummary({ emailValidationId: 4 });

            expect(result).toBe('fake search response' as any);
        });

    });

});
