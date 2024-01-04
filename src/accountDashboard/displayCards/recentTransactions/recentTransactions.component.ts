import { Component, OnInit, Input } from '@angular/core';
import {
    AccountDashboardService,
    GetTransactionsDataResponse,
    TransactionRecord
} from '../../services';
import { StateService } from '@uirouter/angular';
import { stateNames as accountActivityStates } from 'accountActivity/constants';
import { CurrentUserService, CurrentUser } from 'common/services';

@Component({
    selector: 'account-dashboard-recent-transactions-component',
    templateUrl: './recentTransactions.html',
    styleUrls: ['../displayCards.less', './recentTransactions.less']
})
export class RecentTransactionsComponent implements OnInit {

    @Input() recentTransactionsTitle: string;
    @Input() noDataTitle: string;
    @Input() largeAccountCMS: string;

    private currentUserData: CurrentUser;
    public isLargeAccount: boolean;
    public transactions: TransactionRecord[];
    public noData: boolean;

    constructor(
        private accountDashboardService: AccountDashboardService,
        private state: StateService,
        private currentUser: CurrentUserService,
    ) { }

    ngOnInit() {
        this.currentUserData = this.currentUser.getCurrentUser() || {};
        this.getTransactionsData();

        this.isLargeAccount = (this.currentUserData.largeAccountFlag === true || this.currentUserData.extraLargeAccountFlag === true);

    }

    public async getTransactionsData() {
        const response: GetTransactionsDataResponse = await this.accountDashboardService.getTransactionsData();

        const now = new Date();
        const offset = new Date(now.getTime() - 604800000); // 604800000 = 7 days in milliseconds
        const transactionData = response && response.transactionsData && response.transactionsData.transactions || [];
        //converting dates to milliseconds and comparing here
        this.transactions = transactionData && transactionData.filter(t => this.convertMSec(t.trxnDate) >= this.convertMSec(offset) && this.convertMSec(t.trxnDate) <= now.getTime()) || [];

        this.noData = this.transactions.length === 0 ? true : false;
    }

    public async viewTransactionsClick() {

        await this.state.go(accountActivityStates.accountActivityTransactions);
    }

    convertMSec(date: Date) {
        const actualDate = new Date(date);
        return actualDate.getTime() || '';
    }
}
