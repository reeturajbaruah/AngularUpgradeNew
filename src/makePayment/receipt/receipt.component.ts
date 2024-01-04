import {
    Component, Input, OnInit
} from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/core';

import { CurrentUserService, ToasterService } from 'common/services';
import { BillingInfo } from 'common/models';
import { FrameComponent } from '../frame/frame.component';

import { stateNames as profileStateNames } from 'profile/constants';

import { ReceiptCmsContent } from '../interfaces';
import { userRoles } from 'constants/module';


@Component({
    selector: 'make-payment-receipt-component',
    templateUrl: './receipt.html',
    styleUrls: ['./receipt.less']
})
export class ReceiptComponent implements OnInit {
    constructor(
        private stateService: StateService,
        private currentUserService: CurrentUserService,
        private parent: FrameComponent,
        private toasterService: ToasterService
    ) { }

    @Input() public cmsContent: ReceiptCmsContent;

    public paymentAmount: number;
    public paymentDate: Date;
    public billingInfo: BillingInfo;

    public get accountNumber(): number {
        return this.currentUserService.getCurrentUser()?.acctId;
    }

    ngOnInit() {
        this.parent.scrollToTop();

        const { amount, addToPaymentList, makePrimary, ...restBillingInfo } = this.parent.paymentInfo;

        this.billingInfo = restBillingInfo;
        this.paymentAmount = amount;
        this.paymentDate = this.parent.getDate();

        if (addToPaymentList || makePrimary) {
            this.toasterService.show('Success', this.cmsContent.paymentAdded);
        }
    }

    public async nextStep(state: StateDeclaration) {
        await this.stateService.go(state);
    }

    public async viewPaymentMethods() {
        await this.stateService.go(profileStateNames.UpdateBillingInformation);
    }

}
