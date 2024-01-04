import { Component, Input, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { BillingType } from 'common/models';

import { FrameComponent } from '../frame/frame.component';
import { WebApiService } from '../services/webApi.service';
import { CurrencyPipe } from '@angular/common';
import { wait } from '../../common/utilities';

import { PaymentMethod, LandingCmsContent } from '../interfaces';
import { Models, PendingFundsFacadeService } from 'account/pending-funds';
import { CurrentUser, CurrentUserService } from 'common/services';

@Component({
    selector: 'make-payment-landing-component',
    templateUrl: './landing.html',
    styleUrls: ['./landing.less']
})
export class LandingComponent implements OnInit {

    constructor(
        public parent: FrameComponent,
        private stateService: StateService,
        private api: WebApiService,
        private currencyPipe: CurrencyPipe,
        private uiRouterGlobals: UIRouterGlobals,
        private pendingFundsFacade: PendingFundsFacadeService,
        private currentUserService: CurrentUserService
        ) { }

    @Input() cmsContent: LandingCmsContent;

    public paymentAmount: number;
    public paymentMethods: PaymentMethod[] = [];
    public allPaymentMethods: PaymentMethod[] = [];
    public selectedMethod: PaymentMethod;

    minimumPaymentAmount = 1;
    public readonly defaultPaymentAmount = 10;

    public maxCards: number;
    public maxEft: number;

    public paymentAmountFocus = false;

    public async switchTo(input: HTMLInputElement) {

        this.paymentAmountFocus = true;

        await wait(0);

        input.focus();
        input.select();
    }

    origin: string;
    acctActivity: string;

    async ngOnInit() {

        this.parent.scrollToTop();

        const savedPaymentMethods = await this.api.getAllPaymentMethods();

        this.maxCards = savedPaymentMethods.maxCards;
        this.maxEft = savedPaymentMethods.maxEfts;

        this.allPaymentMethods = [
            ...(savedPaymentMethods.bankAccounts || [])
                .filter(x => x)
                .map(eft => ({
                    billingType: BillingType.Eft,
                    primary: eft.primary,
                    eft
                } as PaymentMethod)),

            ...(savedPaymentMethods.creditCards || [])
                .filter(x => x)
                .map(credit => ({
                    billingType: BillingType.Credit,
                    primary: credit.primary,
                    credit
                } as PaymentMethod))
        ];

        this.paymentMethods = this.allPaymentMethods
            .filter(this.isNonBlockedPaymentMethod)
            .sort((a, b) => this.getRank(b) - this.getRank(a));

        //  this.paymentMethods = [];

        const paymentInfo = this.parent.paymentInfo;

        if (paymentInfo) {
            const { amount, ...billingInfo } = paymentInfo;
            this.paymentAmount = amount;
            await this.setMinPaymentAmt();

            this.selectedMethod = this.paymentMethods.find(this.matchingPaymentMethod(billingInfo));

            if (!this.selectedMethod) {
                this.paymentMethods.push(billingInfo);
                this.selectedMethod = billingInfo;
            }

        } else if (this.paymentMethods.length > 0) {
            this.selectedMethod = this.paymentMethods[0];
        }

        if (!this.paymentAmount) {
            this.paymentAmount = this.defaultPaymentAmount;
            this.setPaymentAmt();
        }

        this.acctActivity = this.currentUserService.getCurrentUser()?.acctActivity;
    }

    private async setMinPaymentAmt() {
        if (this.parent.checkUserRolePendingFunds()) {
            const rebillAmt = await this.pendingFundsFacade.getRebillAmt();
            this.minimumPaymentAmount = rebillAmt;
        }
    }

    private async setPaymentAmt() {

        let rebillAmt = -1;

        if (this.parent.checkUserRolePendingFunds()) {

            const params = this.uiRouterGlobals.params;

            if (params && params.source && params.source.name) {

                switch (params.source.name.toUpperCase()) {

                    case 'PENDING-FUNDS':
                        rebillAmt = params.source.data ? params.source.data.rebillAmt : -1;
                        this.origin = Models['pending-funds'];
                        break;

                    default:
                        break;
                }
            } else {
                rebillAmt = await this.pendingFundsFacade.getRebillAmt();
            }

            if (rebillAmt > 0) {
                this.paymentAmount = rebillAmt;
                this.minimumPaymentAmount = rebillAmt;
            }

        }

    }

    public isNonBlockedPaymentMethod(paymentMethod: PaymentMethod) {

        let isBlocked = true;
        if (paymentMethod.billingType === BillingType.Credit) {
            isBlocked = paymentMethod.credit.isBlocked;
        } else if (paymentMethod.billingType === BillingType.Eft) {
            isBlocked = paymentMethod.eft.isBlocked;
        }

        return !isBlocked;
    }

    public get paymentAmountWithCurrency(): string {

        try {
            return this.currencyPipe.transform(this.paymentAmount, 'USD');
        } catch (e) {
            return '';
        }

    }


    public get openEftSlots(): number {
        return this.maxEft - this.allPaymentMethods.filter(x => x.billingType === BillingType.Eft).length;
    }

    public get openCardSlots(): number {
        return this.maxCards - this.allPaymentMethods.filter(x => x.billingType === BillingType.Credit).length;
    }

    public get showMakePrimary(): boolean {
        return this.openEftSlots === this.maxEft && this.openCardSlots === this.maxCards;
    }

    public matchingPaymentMethod(paymentMethod: PaymentMethod) {
        return (testPaymentMethod: PaymentMethod) => {
            const info = (paymentMethod.eft || paymentMethod.credit);
            const testInfo = (testPaymentMethod.eft || testPaymentMethod.credit);

            return info.accountBillingMethodId === testInfo.accountBillingMethodId && !!info.accountBillingMethodId;
        };
    }

    private getRank(paymentMethod: PaymentMethod) {
        let rank = 0;
        rank += paymentMethod.primary ? 4 : 0;
        rank += paymentMethod.billingType === BillingType.Credit ? 2 : 1;
        return rank;
    }

    public async nextStep(state: StateDeclaration) {

        this.parent.paymentInfo = {
            amount: this.paymentAmount,
            ...this.selectedMethod
        };

        await this.stateService.go(state);
    }
}
