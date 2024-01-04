import { Component, Input } from '@angular/core';
import { StateService } from '@uirouter/core';
import { IAccountPendingFundsContent, IAccountPendingFundsNorthAreaContent } from 'accountDashboard/interfaces';
import { stateNames } from 'makePayment/constants';
import { Models, PendingFundsFacadeService } from 'account/pending-funds';

@Component({
    selector: 'account-pending-funds',
    templateUrl: './account-pending-funds.component.html',
    styleUrls: ['./account-pending-funds.component.less']
})

export class AccountPendingComponent {
    constructor(
        private state: StateService,
        private pendingFundsfacade: PendingFundsFacadeService
    ) { }

    @Input() public cmsContent: IAccountPendingFundsContent;
    @Input() public northAreaContent: IAccountPendingFundsNorthAreaContent;

    async addFunds(event: any) {
        const rebillAmt = await this.pendingFundsfacade.getRebillAmt();

        if (rebillAmt > 0) {
            const params = {
                source: {
                    name: Models['pending-funds'],
                    data: {
                        rebillAmt
                    }
                }
            };

            await this.state.go(stateNames.Landing, params);
        }
    }
}
