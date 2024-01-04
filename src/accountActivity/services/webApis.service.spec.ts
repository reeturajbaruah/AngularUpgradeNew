import { DatePipe } from '@angular/common';
import { HttpService, ResponseErrorService } from 'common/services';
import { } from 'jasmine';
import { ReceiptDetailsRequest, SearchAccountActivityRequest, SetupReceiptRequest } from '../interfaces';
import { WebApisService } from './webApis.service';


describe('AccountActivity webApiService', () => {

    let httpService: jasmine.SpyObj<HttpService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let datePipe: jasmine.SpyObj<DatePipe>;
    let service: WebApisService;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        httpService.post.and.resolveTo({ errors: [] });
        httpService.get.and.resolveTo({ errors: [] });
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);
        datePipe = jasmine.createSpyObj('datePipe', ['transform']);

        service = new WebApisService(httpService, responseErrorService, datePipe);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('setupYearlyPage', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);

            const response = await service.setupYearlyPage();

            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AccountActivity/SetupYearlyPage');
        });

        it('should not return if there are errors', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);

            const response = await service.setupYearlyPage();

            expect(response).toBeUndefined();
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AccountActivity/SetupYearlyPage');
        });
    });

    describe('getYearlySummary', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);

            const response = await service.getYearlySummary({ year: 1992 });

            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/GetYearlySummary', { year: 1992 });
        });

        it('should not return if there are errors', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);

            const response = await service.getYearlySummary({ year: 1992 });

            expect(response).toBeUndefined();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/GetYearlySummary', { year: 1992 });
        });
    });

    describe('setUpStatementsPage', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);

            const response = await service.setUpStatementsPage();

            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AccountActivity/SetupStatementPage');
        });

        it('should not return if there are errors', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);

            const response = await service.setUpStatementsPage();

            expect(response).toBeUndefined();
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AccountActivity/SetupStatementPage');
        });
    });

    describe('getMonthlyStatement', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);

            const response = await service.getMonthlyStatement({ date: 'fakeDate' });

            expect(response).toEqual(jasmine.any(Object));
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/GetStatement', { date: 'fakeDate' });
        });

        it('should not return if there are errors', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);

            const response = await service.getMonthlyStatement({ date: 'fakeDate' });

            expect(response).toBeUndefined();
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/GetStatement', { date: 'fakeDate' });
        });
    });

    describe('searchAccountActivity', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            datePipe.transform.and.returnValue('fakeDate');
            const request: SearchAccountActivityRequest = {
                dateFrom: new Date(1992, 11),
                dateTo: new Date(1992, 12),
                vehicle: 'All Vehicles',
                vehicleNickNameType: 'L',
                transaction: 'fakeTransaction',
                dateRangeType: 'TRANSACTION'
            };

            const response = await service.searchAccountActivity(request);

            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/SearchAccountActivity', {
                ...request,
                ...{ dateFrom: new Date(1992, 11), dateTo: new Date(1992, 12) }
            });
        });

        it('should not return if there are errors', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);
            datePipe.transform.and.returnValue('fakeDate');
            const request: SearchAccountActivityRequest = {
                dateFrom: new Date(1992, 11),
                dateTo: new Date(1992, 12),
                vehicle: 'All Vehicles',
                vehicleNickNameType: 'L',
                transaction: 'fakeTransaction',
                dateRangeType: 'TRANSACTION'
            };

            const response = await service.searchAccountActivity(request);

            expect(response).toBeUndefined();
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/SearchAccountActivity', {
                ...request,
                ...{ dateFrom: new Date(1992, 11), dateTo: new Date(1992, 12) }
            });
        });
    });

    describe('locationCoordinates', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);

            const response = await service.locationCoordinates({ laneName: 'fakeLaneName' });

            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/LocationCoordinates', { laneName: 'fakeLaneName' });
        });

        it('should not return if there are errors', async () => {
            httpService.post.and.resolveTo({ errors: [1] });

            const response = await service.locationCoordinates({ laneName: 'fakeLaneName' });

            expect(response).toBeUndefined();
            expect(httpService.post).toHaveBeenCalledWith('/api/LocationCoordinates', { laneName: 'fakeLaneName' });
        });
    });

    describe('getReceipt', () => {
        const request: ReceiptDetailsRequest = {
            transactionNumber: '40240433449'

        };

        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);

            const response = await service.receiptDetails(request);

            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/getReceipt', { transactionNumber: '40240433449' });
        });

        it('should not return if there are errors', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);

            const response = await service.receiptDetails(request);

            expect(response).toBeUndefined();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/getReceipt', { transactionNumber: '40240433449' });
        });
    });

    describe('setupReceipts', () => {
        const request: SetupReceiptRequest = {
            fmonth: '01',
            fday: '01',
            fyear: '2020',
            tmonth: '12',
            tday: '01',
            tyear: '2021'

        };

        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);

            const response = await service.setupReceipts(request);

            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/setupReceipts', {
                fmonth: '01',
                fday: '01',
                fyear: '2020',
                tmonth: '12',
                tday: '01',
                tyear: '2021'
            });
        });

        it('should not return if there are errors', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);

            const response = await service.setupReceipts(request);

            expect(response).toBeUndefined();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/setupReceipts', {
                fmonth: '01',
                fday: '01',
                fyear: '2020',
                tmonth: '12',
                tday: '01',
                tyear: '2021'
            });
        });
    });

    describe('setupInvoicesPage', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);

            const response = await service.setupInvoicesPage();

            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AccountActivity/SetupInvoicesPage');
        });

        it('should not return if there are errors', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);

            const response = await service.setupInvoicesPage();

            expect(response).toBeUndefined();
            expect(httpService.get).toHaveBeenCalledWith('/api/sessions/AccountActivity/SetupInvoicesPage');
        });
    });

    describe('getMonthlyInvoice', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);      
            const response = await service.getMonthlyInvoice({ invoiceDate: '08/2021' });

            expect(response).toEqual(jasmine.any(Object));
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/GetInvoice', {  invoiceDate: '08/2021'  });
        });

        it('should not return if there are errors', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);
            const response = await service.getMonthlyInvoice({ invoiceDate: '08/2021' });

            expect(response).toBeUndefined();
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/GetInvoice', { invoiceDate: '08/2021' });
        });
    });

    describe('getMonthlyInvoice', () => {
        it('should make a basic api call', async () => {
            responseErrorService.isErrorFree.and.returnValue(true);
            const data: any = {
                dateFrom: '01/01/2022',
                dateTo: '04/01/2022',
                vehicle: '',
                vehicleNickNameType: '',
                transaction: '',
                transactionDisplay: '',
                dateRangeType: ''
            };

            const response = await service.setupSearchTransactions(data);

            expect(response).toEqual(jasmine.any(Object));
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/GetAccountActivityVM', data);
        });

        it('should not return if there are errors', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);
            const data: any = {
                dateFrom: '01/01/2022',
                dateTo: '04/01/2022',
                vehicle: '',
                vehicleNickNameType: 'L',
                transaction: '',
                transactionDisplay: '',
                dateRangeType: ''
            };
            const response = await service.setupSearchTransactions(data);

            expect(response).toBeUndefined();
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AccountActivity/GetAccountActivityVM', data);
        });
    });
});
