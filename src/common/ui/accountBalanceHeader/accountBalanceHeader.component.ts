import { Component, OnInit } from '@angular/core';
import { CurrentUserService, CurrentUser } from 'common/services';

@Component({
    selector: 'account-balance-header',
    templateUrl: './accountBalanceHeader.html',
    styleUrls: ['./accountBalanceHeader.less']
})
export class AccountBalanceHeaderComponent implements OnInit {

    public currentUserData: CurrentUser;
    balance: number;

    constructor(
        private currentUser: CurrentUserService
    ) { }

    ngOnInit() {
        this.currentUserData = this.currentUser.getCurrentUser() || {
            currentBalanceObj: { currentBalance: 0 },
            acctId: 0
        };

        this.balance = this.currentUser.getCurrentUserBalance();
    }
}
