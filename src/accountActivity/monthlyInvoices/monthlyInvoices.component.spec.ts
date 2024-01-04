import { DatePipe } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { stateNames as accountActivityStates } from 'accountActivity/constants';
import { FrameComponent } from 'accountActivity/frame/frame.component';
import { InvoiceMonths, MonthlyInvoiceResponse } from 'accountActivity/interfaces';
import { AccountActivityService, WebApisService } from 'accountActivity/services';
import { ENVIRON_CONFIG } from 'common/module';
import { DownloadService } from 'common/services';
import { } from 'jasmine';
import { MonthlyInvoicesComponent } from './monthlyInvoices.component';


describe('component: monthlyInvoicesComponent', () => {

    let fixture: ComponentFixture<MonthlyInvoicesComponent>;
    let component: MonthlyInvoicesComponent;
    let parent: FrameComponent;
    let webApiService: jasmine.SpyObj<WebApisService>;
    let downloadService: jasmine.SpyObj<DownloadService>;
    let accountActivityService: jasmine.SpyObj<AccountActivityService>;
    let datePipe: jasmine.SpyObj<DatePipe>;
    let environmentConfig: { [key: string]: boolean };

    beforeEach(async () => {
        parent = {} as FrameComponent;
        webApiService = jasmine.createSpyObj('webApiService', ['setupInvoicesPage', 'getMonthlyInvoice']);
        downloadService = jasmine.createSpyObj('downloadService', ['download']);
        datePipe = jasmine.createSpyObj('datePipe', ['transform']);
        environmentConfig = {};

        await TestBed
            .configureTestingModule({
                declarations: [
                    MonthlyInvoicesComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: WebApisService, useFactory: () => webApiService },
                    { provide: DownloadService, useFactory: () => downloadService },
                    { provide: AccountActivityService, useFactory: () => accountActivityService },
                    { provide: DatePipe, useFactory: () => datePipe },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(MonthlyInvoicesComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        beforeEach(async () => {
            const invoiceMonths: InvoiceMonths = {
                invoiceDates: ['November 2021', 'October 2021'],
                errors: [],
                alerts: [],
                exception: '',
                sessionTimedOut: false,
                accountStatus: ''
            };

            const monthlyInvoiceResponse: MonthlyInvoiceResponse = {
                invoiceSummary: [],
                outstandingInvoices: [],
                balSumBalanceRequirement: 0,
                balSumCurrentBalance: 0,
                balSumReplenishmentAmt: 0,
                invoiceNumber: '',
                address: undefined,
                firstName: '',
                lastName: '',
                homePhoneNumber: '',
                mobilePhoneNumber: '',
                workPhoneNumber: '',
                totalAmtDue: 0,
                companyName: '',
                invoiceDetails: [],
                errors: [],
                alerts: [],
                exception: '',
                sessionTimedOut: false,
                accountStatus: ''
            };
            webApiService.setupInvoicesPage.and.resolveTo(invoiceMonths);
            webApiService.getMonthlyInvoice.and.resolveTo(monthlyInvoiceResponse);
            component.cmsContent = {
                Title: '',
                ShortDescription: '',
                LongDescription: '',
                Children: []
            };
            component.cmsContent.Title = 'test';
            component.cmsContent.ShortDescription = 'test';
            component.cmsContent.LongDescription = 'test';
            component.cmsContent.Children = [
                { Title: 'Header Text', ShortDescription: 'Short Description', LongDescription: 'Long Description', Children: [] },
                { Title: 'Download Invoice', ShortDescription: 'Short Description', LongDescription: 'Long Description', Children: [] },
                { Title: 'Outstanding Invoices', ShortDescription: 'Short Description', LongDescription: 'Long Description', Children: [] },
            ];
        });

        it('should call API to get list of months', () => {
            component['ngOnInit']();
            expect(webApiService.setupInvoicesPage).toHaveBeenCalled();
        });
    });

    describe('getInvoices', () => {
        it('should call API to get invoice info', () => {
            component.currentMonth = 'January 2020';
            component.getInvoices();
            expect(webApiService.getMonthlyInvoice).toHaveBeenCalled();
        });
    });

    describe('getMonthlyInvoicePdf', () => {
        it('should call the download service', () => {
            component.invoiceResponse = {
                invoiceSummary: [],
                outstandingInvoices: [],
                balSumBalanceRequirement: 0,
                balSumCurrentBalance: 0,
                balSumReplenishmentAmt: 0,
                invoiceNumber: '4512',
                address: undefined,
                firstName: '',
                lastName: '',
                homePhoneNumber: '',
                mobilePhoneNumber: '',
                workPhoneNumber: '',
                totalAmtDue: 0,
                companyName: '',
                invoiceDetails: [],
                errors: [],
                alerts: [],
                exception: '',
                sessionTimedOut: false,
                accountStatus: ''
            };
            component.getMonthlyInvoicePdf();
            expect(downloadService.download).toHaveBeenCalled();
        });
    });

    describe('getMonthlyinvoiceExcel', () => {
        it('should call the download service', () => {
            component.invoiceResponse = {
                invoiceSummary: [],
                outstandingInvoices: [],
                balSumBalanceRequirement: 0,
                balSumCurrentBalance: 0,
                balSumReplenishmentAmt: 0,
                invoiceNumber: '4512',
                address: undefined,
                firstName: '',
                lastName: '',
                homePhoneNumber: '',
                mobilePhoneNumber: '',
                workPhoneNumber: '',
                totalAmtDue: 0,
                companyName: '',
                invoiceDetails: [],
                errors: [],
                alerts: [],
                exception: '',
                sessionTimedOut: false,
                accountStatus: ''
            };
            component.getMonthlyInvoiceExcel();
            expect(downloadService.download).toHaveBeenCalled();
        });
    });
});
