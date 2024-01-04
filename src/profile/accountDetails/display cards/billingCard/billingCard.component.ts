import { Component, Input, OnInit } from '@angular/core';
import { BillingCMS } from 'accountDashboard/frame/frame.component';
import { SiteCoreItem } from '../../../../cms/cms.module';
import { CurrentUser, CurrentUserService } from 'common/services';

@Component({
    selector: 'billing-card',
    templateUrl: './billingCard.html',
    styleUrls: ['../profileCards.less', './billingCard.less']
})
export class BillingCardComponent implements OnInit {
    @Input() billingTitle: string;
    @Input() billingImages: string;
    @Input() billingCMS: BillingCMS;
    @Input() isAccountClosed: boolean;
    @Input() isAccountInvoiced: boolean;
    @Input() paymentMethodImages: string;
    @Input() autoReplenishIndicatorCms: SiteCoreItem;

    constructor(
        private currentUser: CurrentUserService
    ) { }

    async ngOnInit() {
        this.isAccountInvoiced = (await this.currentUser.getCurrentUser() as CurrentUser)?.isInvoiced;
    }

}
