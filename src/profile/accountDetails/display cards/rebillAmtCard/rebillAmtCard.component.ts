import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { stateNames as profileStateNames } from 'profile/constants';
import { GetAccountInformationResponse } from 'profile/services/webApis.service';
import { SiteCoreItem } from '../../../../cms/cms.module';
import { CurrentUserService } from '../../../../common/services';

@Component({
    selector: 'rebill-amt-card',
    templateUrl: './rebillAmtCard.html',
    styleUrls: ['../profileCards.less', './rebillAmtCard.less']
})
export class RebillAmtCardComponent {
    @Input() rebillAmtTitle: string;
    @Input() rebillAmtContext: string;
    @Input() rebillAmt: number;
    @Input() isAccountClosed: boolean;
    @Input() isAccountInvoiced: boolean;
    @Input() noAuthContacts: string;
    @Input() accountData: GetAccountInformationResponse;
    @Input() autoReplenishIndicatorCms: SiteCoreItem;


    constructor(
        private state: StateService
    ) { }

    public goToUpdateRebillAmt() {

        this.state.go(profileStateNames.UpdateReplenishmentAmount,
            { accountData: this.accountData });
    };
}
