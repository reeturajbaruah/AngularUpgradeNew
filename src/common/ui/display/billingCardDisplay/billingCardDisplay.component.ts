import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { isEmpty } from 'lodash';
import {
    GetPaymentMethodDataResponse,
    PaymentMethodService,
    SimplePaymentMethod
} from 'common/services/paymentMethodService/paymentMethod.service';

import { CmsUtilService } from 'cms/services';

import { stateNames as ProfileStates } from 'profile/constants';
import { SiteCoreItem } from '../../../../cms/cms.module';

interface IconCms {
    ItemName: string;
    Image: string;
}

export interface BillingCardPaymentDetailsCms {
    Children: IconCms[];
}

@Component({
    selector: 'billing-card-display',
    templateUrl: './billingCardDisplay.html',
    styleUrls: ['./billingCardDisplay.less']
})
export class BillingCardDisplayComponent implements OnInit {

    @Input() billingTitle: string;
    @Input() paymentMethodImages: BillingCardPaymentDetailsCms;

    @Input() expiringTooltip: string;
    @Input() expiredTooltip: string;
    @Input() blockedTooltip: string;
    @Input() noDataTitle: string;

    @Input() isPendingClosure: boolean;

    @Input() isAccountInvoiced: boolean;

    @Input() showAutoReplenishmentIndicator: boolean;
    @Input() replenishmentIndicatorCMS: SiteCoreItem;
    @Input() callingComponent: string;

    public cmsImage: string;

    private paymentMethod: SimplePaymentMethod;

    public paymentType: string;
    public lastFour: string;
    public expirationDate: Date;
    public isActive: boolean;
    public isExpired: boolean;
    public isExpiring: boolean;
    public isBlocked: boolean;

    public noData: boolean;

    private thirtyDays: Date;

    constructor(
        private state: StateService,
        private paymentMethodService: PaymentMethodService,
        private cmsUtilService: CmsUtilService
    ) {
    }

    async ngOnInit() {
        await this.getPaymentMethodData();
    }

    public async getPaymentMethodData() {
        const response: GetPaymentMethodDataResponse = await this.paymentMethodService.getPaymentMethodData();

        this.paymentMethod = response.primaryPaymentMethod;

        if (!isEmpty(this.paymentMethod) && !this.isPendingClosure && !this.isAccountInvoiced) {
            this.paymentType = this.paymentMethod.paymentType;

            //for testing
            //this.paymentMethod.expirationDate = new Date('6/27/2021');
            //this.paymentMethod.isExpired = false;

            this.cmsImage = this.getIconImage();

            const dateToCompare = new Date(this.paymentMethod.expirationDate);

            this.thirtyDays = new Date();
            this.thirtyDays.setDate(this.thirtyDays.getDate() + 30);

            this.lastFour = this.paymentMethod.lastFour;
            this.expirationDate = this.paymentMethod.expirationDate;

            const blocked = this.paymentMethod.isBlocked;

            const expired = this.paymentMethod.isExpired && !blocked &&
                this.paymentType !== 'Bank' && this.paymentType !== 'Invoice';

            const expiring = ((dateToCompare < this.thirtyDays) && !expired) &&
                !blocked && !expired && this.paymentType !== 'Bank' && this.paymentType !== 'Invoice';

            this.isActive = (this.paymentType === 'Bank' && !blocked)
                || (this.paymentType === 'Invoice' && !blocked)
                || (!blocked && !expired && !expiring);

            this.isExpiring = expiring;

            this.isExpired = expired;

            this.isBlocked = blocked;

            this.noData = false;
        }
        else if (this.isAccountInvoiced) {
            this.paymentType = 'Invoice';
            this.cmsImage = this.getIconImage();

            this.noData = false;
        }
        else {
            this.noData = true;
        }
    }

    private getIconImage = (): string => {
        if (!this.paymentMethodImages) {
            return '';
        }

        const iconDict = this.paymentMethodImages.Children.reduce((acc, curr) => ({ ...acc, [curr.ItemName]: curr.Image }), {});

        return this.cmsUtilService.generateFileSrc(iconDict[this.paymentType] || '');

    };

    public async viewBillingClick() {

        await this.state.go(ProfileStates.UpdateBillingInformation);
    }

    public async updateReplenishmentAmountClick() {
        await this.state.go(ProfileStates.UpdateReplenishmentAmount);
    }
}
