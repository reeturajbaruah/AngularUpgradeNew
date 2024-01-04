import { Component, Input, OnInit, Inject } from '@angular/core';
import { UserRoles } from 'constants/module';
import { SiteCoreItem } from '../../cms/cms.module';
import { CurrentUser, CurrentUserService } from 'common/services';
import { IAccountPendingFundsContent, IAccountPendingFundsNorthAreaContent } from 'accountDashboard/interfaces';
import { CurrentBalanceCMS } from 'accountDashboard/displayCards/currentBalance/currentBalance.component';
import { SessionService } from 'common/services/session/session.service';

interface FrameCmsData {
    ShortDescription: string;
    LongDescription: string;
    VehiclesTitle: string;
    BillingTitle: string;
    RecentTransactionsTitle: string;
    TollUsageHistoryTitle: string;
    PendingClosureSubtitle: string;
}

interface NoDataCMS {
    ShortDescription: string;
}

interface VehiclesCMS {
    PendingActivation: string;
    NoDataEZTag: string;
    NoDataEZPlate: string;
}

export interface BillingCMS {
    LongDescription: string;
    ExpiringTooltip: string;
    ExpiredTooltip: string;
    NoData: string;
}

interface TransactionsCMS {
    ShortDescription: string;
    LongDescription: string;
}

@Component({
    selector: 'account-dashboard-frame-component',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less']
})
export class FrameComponent implements OnInit {

    constructor(
        private session: SessionService,
        private currentUser: CurrentUserService,
        private userRoles: UserRoles
    ) { }

    @Input() public cmsBaseContent: FrameCmsData;
    @Input() public tollUsageHistoryNoData: NoDataCMS;
    @Input() public currentBalanceCMS: CurrentBalanceCMS;
    @Input() public vehiclesCMS: VehiclesCMS;
    @Input() public billingCMS: BillingCMS;
    @Input() public transactionsCMS: TransactionsCMS;
    @Input() public autoReplenishIndicatorCMS: SiteCoreItem;
    @Input() public accountPendingFundsContent: IAccountPendingFundsContent;
    @Input() public accountPendingFundsNorthAreaContent: IAccountPendingFundsNorthAreaContent;

    @Input() public paymentMethodImages: string;

    @Input() public isPendingClosure: boolean;
    @Input() public isAccountInvoiced: boolean;

    @Input() public negativeBalanceCMS: string;

    isPendingFunds: boolean;

    async ngOnInit() {
        this.isPendingFunds = this.session.userRole === this.userRoles.pendingFunds;
        this.isPendingClosure = this.session.userRole === this.userRoles.pendingClosure;
        this.isAccountInvoiced = (await this.currentUser.getCurrentUser() as CurrentUser)?.isInvoiced;
    }
}
