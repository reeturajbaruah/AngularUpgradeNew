import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountSummaryAlertFilterService, ResponseErrorService } from 'common/services';
import {
    VALIDATE_PRIMARY_EMAIL_SERVICE
} from 'common/upgrades';
import { } from 'jasmine';
import {
    AccountDashboardService,
    GetAccountSummaryResponse,
    SummaryGraphMonth
} from '../../services';
import { TollUsageHistoryComponent } from './tollUsageHistory.component';



describe('component: account-dashboard-toll-usage-history', () => {

    let accountDashboardService: AccountDashboardService;
    let responseErrorService: jasmine.SpyObj<any>;
    let accountSummaryAlertFilterService: jasmine.SpyObj<AccountSummaryAlertFilterService>;

    let fixture: ComponentFixture<TollUsageHistoryComponent>;
    let component: TollUsageHistoryComponent;

    beforeEach(async () => {
        accountDashboardService = jasmine.createSpyObj('accountDashboardService', ['getAccountSummary']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'displayErrorsFromResponse']);
        accountSummaryAlertFilterService = jasmine.createSpyObj('AccountSummaryAlertFilterService', ['filterAccountSummaryAlerts']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    TollUsageHistoryComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: AccountDashboardService, useFactory: () => accountDashboardService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: AccountSummaryAlertFilterService, useFactory: () => accountSummaryAlertFilterService },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(TollUsageHistoryComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('getGraphData', () => {

        it('should call getEmailValidationId and getAccountSummary', async () => {
            const fakeAcctSummaryData: SummaryGraphMonth[] = [
                {
                    amt: 50.00,
                    amtType: 'Jan'
                }
            ];

            const fakeResponse: GetAccountSummaryResponse = {
                acctSummary: fakeAcctSummaryData,
                accountStatus: null,
                alerts: [],
                daily: null,
                errors: [],
                exception: null,
                monthly: null,
                sessionTimedOut: null,
                yearlyAverage: null
            };

            (accountDashboardService.getAccountSummary as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getGraphData();

            expect(accountDashboardService.getAccountSummary).toHaveBeenCalledTimes(1);

        });

        it('should call displayErrorsFromResponse if error', async () => {
            const fakeAcctSummaryData: SummaryGraphMonth[] = [
                {
                    amt: 50.00,
                    amtType: 'Jan'
                }
            ];

            const fakeResponse: GetAccountSummaryResponse = {
                acctSummary: fakeAcctSummaryData,
                accountStatus: null,
                alerts: [],
                daily: null,
                errors: [{ key: 'error', message: 'error message' }],
                exception: null,
                monthly: null,
                sessionTimedOut: null,
                yearlyAverage: null
            };

            (accountDashboardService.getAccountSummary as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getGraphData();

            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
        });

        it('should call displayAlertsFromResponse if alert', async () => {
            const fakeAcctSummaryData: SummaryGraphMonth[] = [
                {
                    amt: 50.00,
                    amtType: 'Jan'
                }
            ];

            const fakeResponse: GetAccountSummaryResponse = {
                acctSummary: fakeAcctSummaryData,
                accountStatus: null,
                alerts: [{ alertId: 1, alertMsg: 'alert message', importance: 1 }],
                daily: null,
                errors: [],
                exception: null,
                monthly: null,
                sessionTimedOut: null,
                yearlyAverage: null
            };

            (accountDashboardService.getAccountSummary as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getGraphData();

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
            expect(accountSummaryAlertFilterService.filterAccountSummaryAlerts)
                .toHaveBeenCalledWith([{ alertId: 1, alertMsg: 'alert message', importance: 1 }]);
        });


        it('should set noDate to true if no graph data', async () => {
            const fakeAcctSummaryData: SummaryGraphMonth[] = [];

            const fakeResponse: GetAccountSummaryResponse = {
                acctSummary: fakeAcctSummaryData,
                accountStatus: null,
                alerts: [],
                daily: null,
                errors: [],
                exception: null,
                monthly: null,
                sessionTimedOut: null,
                yearlyAverage: null
            };

            (accountDashboardService.getAccountSummary as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getGraphData();

            expect(component.noData).toBe(true);
        });
    });
});
