import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '@uirouter/angular';
import {
    AccountDashboardService,
    GetAccountDataResponse
} from '../../services';
import { CurrentUserService, CurrentUser, DialogService, DialogContent } from 'common/services';

import { stateNames as MakePaymentStates } from 'makePayment/constants';
import { stateNames as ProfileStates } from 'profile/constants';
import { stateNames as PaymentPlanStates } from 'paymentplans/constants';
import { UsernameComponent } from './username/username.component';

export interface CurrentBalanceCMS {
    NegativeBalance: string;
    UsernameTitle: string;
}

@Component({
    selector: 'account-dashboard-current-balance-component',
    templateUrl: './currentBalance.html',
    styleUrls: ['../displayCards.less', './currentBalance.less']
})
export class CurrentBalanceComponent implements OnInit {

    @Input() isPendingClosure: boolean;
    @Input() currentBalanceCMS: CurrentBalanceCMS;
    @Input() isAccountInvoiced: boolean;

    private currentUserData: CurrentUser;
    public currentBalance: number;
    public isNegativeBalance: boolean;
    public notPaymentPlan: boolean;
    public isLargeNumber: boolean;
    public username: string;

    constructor(
        private currentUser: CurrentUserService,
        private accountDashboardService: AccountDashboardService,
        private state: StateService,
        private dialogService: DialogService
    ) { }

    async ngOnInit() {
        this.currentUserData = this.currentUser.getCurrentUser() || {};
        
        const response: GetAccountDataResponse = await this.accountDashboardService.getAccountData();

        this.currentBalance = response.currentBalance.currentBalance; 

        this.isNegativeBalance = this.currentBalance < 0 ? true : false;
        this.isLargeNumber = Math.abs(this.currentBalance) > 9999.99 ? true : false;

        const hasPaymentPlans: boolean = this.currentUser.hasPaymentPlans;

        this.notPaymentPlan = !hasPaymentPlans;

        const username = this.currentUserData.username;

        this.username = username.length <= 10 ? username : this.truncateString(this.currentUserData.username, 6);
    }

    public fullName(): string {
        return this.currentUserData.firstName + ' ' + this.currentUserData.lastName;
    }

    public acctId(): string {
        return this.currentUserData.acctId.toString();
    }

    public async makePaymentClick() {

        await this.state.go(MakePaymentStates.Landing);
    }

    public async changeReplenishAmtClick() {

        await this.state.go(ProfileStates.UpdateReplenishmentAmount);
    }

    public async paymentPlanClick() {

        await this.state.go(PaymentPlanStates.AccountOverviewSummary);
    }

    private truncateString(str: string, num: number): string {
        if (str.length <= num) {
            return str;
        }

        return str.slice(0, num) + '****';
    }

    public openUsernameModal(): void {
        const data = {
            title: this.currentBalanceCMS.UsernameTitle,
            username: this.currentUserData.username
        };

        this.dialogService.openGenericModal(UsernameComponent, data);
    }
}
