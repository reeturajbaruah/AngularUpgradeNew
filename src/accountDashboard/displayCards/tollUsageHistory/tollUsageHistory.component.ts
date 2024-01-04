import { Component, Input, OnInit } from '@angular/core';
import { AccountSummaryAlertFilterService, ResponseErrorService } from 'common/services';
import {
    AccountDashboardService,
    EmailConfirmationRequest,
    GetAccountSummaryResponse
} from '../../services';


@Component({
    selector: 'account-dashboard-toll-usage-history-component',
    templateUrl: './tollUsageHistory.html',
    styleUrls: ['../displayCards.less', './tollUsageHistory.less']
})
export class TollUsageHistoryComponent implements OnInit {

    @Input() tollUsageHistoryTitle: string;

    @Input() noDataTitle: string;

    public daily: number;
    public monthly: number;

    public noData: boolean;

    public xAxisData = [];
    public yAxisData = [];

    constructor(
        private accountDashboardService: AccountDashboardService,
        private responseErrorService: ResponseErrorService,
        private accountSummaryAlertFilterService: AccountSummaryAlertFilterService,
    ) { }

    async ngOnInit() {
        this.noData = false;
    }

    public async getGraphData() {
        const request: EmailConfirmationRequest = {
            emailValidationId: 0
        };

        const response: GetAccountSummaryResponse = await this.accountDashboardService.getAccountSummary(request);

        if (response.errors.length === 0) {

            //check to see if the alerts have already been shown
            if (response.alerts && response.alerts.length > 0) {
                this.accountSummaryAlertFilterService.filterAccountSummaryAlerts(response.alerts);
            }

            //to test No Data view, comment out the for loop below
            for (const item of response.acctSummary) {
                this.yAxisData.push(item.amt);
                this.xAxisData.push(item.amtType);
            }

            if (this.yAxisData.length === 0 || this.xAxisData.length === 0) {
                this.noData = true;
            }
            else {

                this.daily = response.daily;
                this.monthly = response.monthly;

            }

        }
        else {
            this.noData = true;

            this.responseErrorService.displayErrorsFromResponse(response);
        }

    }
}
