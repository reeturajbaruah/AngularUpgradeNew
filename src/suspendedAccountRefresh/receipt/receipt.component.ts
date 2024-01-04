import {
    Component, OnInit, Input
} from '@angular/core';
import { StateDeclaration, StateOrName, StateService } from '@uirouter/core';
import { stateNames } from 'accountDashboard/constants';
import { SiteCoreItem } from 'cms/cms.module';
import { BillingInfo } from 'common/models';
import { CurrentUserService, ToasterService } from 'common/services';

import { FrameComponent } from '../frame/frame.component';
import { SuspendedAccountService } from '../services/suspendedAccount.service';

export interface ICmsReceiptContent extends SiteCoreItem {
    paymentReceivedDate: string;
    paymentAmount: string;
    accountInfo: string;
    accountNumber: string;
    paymentDate: string;
    billingInfo: string;
    billingInfoUpdated: string;
}

@Component({
    selector: 'suspended-receipt-component',
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.less']
})
export class ReceiptComponent implements OnInit {

    constructor(
        private parent: FrameComponent,
        private suspendedAccountService: SuspendedAccountService,
        private toasterService: ToasterService,
        private currentUserService: CurrentUserService,
        private stateService: StateService
    ) {
    }

    @Input() cmsContent: ICmsReceiptContent;
    public billingInfo: BillingInfo;
    public paymentAmount: number;
    public paymentDate: Date;

    public get accountNumber(): number {
        return this.currentUserService.getCurrentUser()?.acctId;
    }

    ngOnInit() {
        this.parent.showStepper = false;
        this.parent.showTitleBanner = false;

        const { amount, makePrimary, ...restBillingInfo } = this.suspendedAccountService.paymentInfo;

        this.billingInfo = restBillingInfo;
        this.paymentAmount = amount;
        this.paymentDate = this.parent.getDate();

        if (makePrimary) {
            this.toasterService.show('Success', this.cmsContent.billingInfoUpdated);
        }
    }

    async nextStep(state: StateOrName) {
        this.suspendedAccountService.destroySuspendedWizardInformation();
        
        await this.stateService.go(state);
        //await this.stateService.go(stateNames.Frame);
    }

}
