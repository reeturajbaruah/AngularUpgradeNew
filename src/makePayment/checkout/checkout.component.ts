import {
    Component, OnInit, Input, Inject
} from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/core';
import { AddressInfo, BillingInfo, BillingType } from 'common/models';
import { SiteCoreItem } from 'cms/cms.module';
import { FrameComponent } from '../frame/frame.component';
import { WebApiService } from '../services/webApi.service';

import { AddToPaymentListEnum, CheckoutContent } from '../interfaces';
import { UserRoles } from 'constants/module';
import { CurrentUserService } from 'common/services';

@Component({
    selector: 'make-payment-checkout-component',
    templateUrl: './checkout.html',
    styleUrls: ['./checkout.less']
})
export class CheckoutComponent implements OnInit {
    constructor(
        private parent: FrameComponent,
        private stateService: StateService,
        private webApiService: WebApiService,
        private currentUserService: CurrentUserService,
        private userRoles: UserRoles,
    ) { }

    @Input() cmsContent: SiteCoreItem & CheckoutContent;

    public content: CheckoutContent;

    public paymentAmount: number;
    public billingInfo: BillingInfo;
    public paymentDate: Date;

    public addToPaymentList: boolean;
    public makePrimary: boolean;
    public newMethodAdded: boolean;

    public get address(): AddressInfo {
        return this.billingInfo.credit || this.billingInfo.eft;
    }

    isPendingFunds: boolean;
    AddToPaymentListEnum = AddToPaymentListEnum;

    ngOnInit() {

        this.parent.scrollToTop();

        const { amount, ...rest } = this.parent.paymentInfo;

        const { addToPaymentList, makePrimary, newMethodAdded, ...restBillingInfo } = rest;

        this.makePrimary = makePrimary;
        this.newMethodAdded = newMethodAdded;
        this.setAddToPaymentList(addToPaymentList, makePrimary);
        this.billingInfo = restBillingInfo;
        this.paymentAmount = amount;
        this.paymentDate = this.parent.getDate();

        this.isPendingFunds = this.parent.checkUserRolePendingFunds();
    }

    private setAddToPaymentList(addToPaymentList: boolean, makePrimary: boolean) {
        if (this.parent.checkUserRolePendingFunds() && makePrimary) {
            this.addToPaymentList = true;
        } else {
            this.addToPaymentList = addToPaymentList;

        }

    }

    public async nextStep(state: StateDeclaration) {
        if (this.addToPaymentList || this.makePrimary) {

            const saveErrors = await this.addPaymentToList();
            if (saveErrors && saveErrors.length) {
                return;
            }
        }

        const errors = await this.webApiService.makePayment({
            amount: this.paymentAmount,
            ...this.billingInfo
        });

        if (errors && errors.length) {
            return;
        }

        if (this.isPendingFunds) {
            this.currentUserService.makeSessionActive('A', this.userRoles.active);
        }

        await this.stateService.go(state);
    }

    private async addPaymentToList() {
        const payload = this.mapPayload();
        return await this.webApiService.addPaymentMethodInfo(payload);

    }

    private mapPayload() {
        const isCredit = this.billingInfo.billingType === BillingType.Credit;

        return {
            paymentMethod: {
                ...(this.billingInfo.credit || this.billingInfo.eft),

                billingType: isCredit ? 0 : 1,
                billingTypeCode: isCredit ? 'C' : 'E',
                billingTypeDisplay: isCredit ? 'CREDIT' : 'EFT',
                primary: this.makePrimary
            }
        };
    }

    public async cancel(state: StateDeclaration) {

        await this.stateService.go(state);
    }

    public async previous(state: StateDeclaration) {

        await this.stateService.go(state);
    }

}
