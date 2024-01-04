import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingType } from 'common/models';
import { GenericRepoService, ResponseErrorService } from 'common/services';
import * as moment from 'moment';
import { PaymentPlansStateNames } from '../constants';
import { FrameComponent } from '../frame/frame.component';
import { PaymentRequest, PaymentResponse } from '../interfaces';
import { PaymentPlanData, PlateDataService } from '../services';
import { WebApiService } from '../services/webApi.service';


interface ConfirmCmsContent {
    reviewInfoHeader: string;
    emailInstruction: string;
    amountSelectionNoteTemplate: string;
    paymentDetailsTitle: string;
    paymentDateLabel: string;
    paymentAmountLabel: string;
    paymentDetailsHeader: string;

    paymentPlanAmountLabel: string;
    ezTagAmountLabel: string;
    totalAmountLabel: string;
}

@Component({
    selector: 'confirm-component',
    templateUrl: './confirm.html',
    styleUrls: ['./confirm.less']
})
export class ConfirmComponent implements OnInit {

    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        private parent: FrameComponent,
        private dataService: PlateDataService,
        private state: StateService,
        private responseErrorService: ResponseErrorService,
        private paymentPlanApi: WebApiService,
        private genericRepoService: GenericRepoService,
        private stateNames: PaymentPlansStateNames
    ) {
        this.todayFormatted = this.formatDate(new Date());
    }

    public emailReceipt: string;
    public todayFormatted: string;
    public totalDue: number;

    //bindings
    @Input() cmsContent: ConfirmCmsContent;
    @Input() isEzTagFlow: boolean;

    public get planData(): PaymentPlanData {
        return this.parent.planData;
    }

    public get cms(): ConfirmCmsContent {
        return this.cmsContent;
    }

    public get isMaxPayment(): boolean {
        return this.planData.paymentAmount === this.planData.selectedPaymentPlan.balanceAmount;
    }

    public get hasOverage(): boolean {
        return this.planData.paymentAmount > this.planData.selectedPaymentPlan.nextInstallmentAmount;
    }

    public get paymentAmount(): number {
        return this.planData.paymentAmount;
    }

    public get nextUpcomingInstallmentDateFormatted(): string {
        return this.formatDate(this.planData.selectedPaymentPlan.nextUpcomingInstallmentDate);
    }

    formatDate = (date: string | Date): string => moment((date instanceof Date) ? date : new Date(date)).format('MMM Do, YYYY');

    ngOnInit() {
        this.parent.stepNum = 3;
        this.parent.scrollToTop();

        if (this.isEzTagFlow) {
            this.genericRepoService
                .dataFactory
                .getPersonalInfo().then((response: any) => {
                    this.emailReceipt = response.contactInfo.emailAddress;
                });
        }

        this.totalDue = this.planData.paymentAmount + (this.planData.addAccountFunds ? this.planData.addAccountFundsAmount : 0);
    }

    public async makePayment(nextState: StateConfig) {
        if (this.planData.billingMethod.billingType === BillingType.Eft) {
            this.planData.billingMethod.eftPaymentMethod.name =
                this.planData.billingMethod.eftPaymentMethod.name
                || this.planData.billingMethod.eftPaymentMethod.nameOnBankAccount;

            this.planData.billingMethod.eftPaymentMethod.nameOnBankAccount =
                this.planData.billingMethod.eftPaymentMethod.nameOnBankAccount
                || this.planData.billingMethod.eftPaymentMethod.name;
        }

        let accountDisplayType: string;
        if (this.planData.billingMethod.eftPaymentMethod) {
            accountDisplayType =
                this.planData.billingMethod.eftPaymentMethod.accountType === BankAccountType.Personal
                    ? 'Personal'
                    : 'Business';
        }
        const paymentPlanRequest: PaymentRequest = {
            eftPaymentMethod: Object.assign({},
                this.planData.billingMethod.eftPaymentMethod,
                {
                    accountTypeDisplay: accountDisplayType
                }),
            creditCardPaymentMethod: this.planData.billingMethod.creditCardPaymentMethod,
            creditCard: this.planData.billingMethod.billingType === BillingType.Credit,
            paymentPlanId: this.planData.selectedPaymentPlan.paymentPlanId,
            amount: this.planData.paymentAmount,
            email: this.emailReceipt
        };

        if (this.isEzTagFlow) {
            Object.assign(paymentPlanRequest, {
                AccountPayment: this.planData.addAccountFunds,
                AccountPaymentAmount: this.planData.addAccountFundsAmount
            });
        }

        const response: PaymentResponse = await
            (this.isEzTagFlow
                ? this.paymentPlanApi.ezTagPayment(paymentPlanRequest)
                : this.paymentPlanApi.violationsPayment(paymentPlanRequest));

        if (!this.responseErrorService.isErrorFree(response)) {
            return;
        }

        const paymentResponse = {
            originalRequest: response.originalRequest,
            currentBalanceObj: this.isEzTagFlow ? response.currentBalanceObj : null,
            currentPaymentPlanBalanceObj: this.isEzTagFlow ? response.currentPaymentPlanBalanceObj : null
        } as PaymentResponse;

        this.dataService.setPaymentResponse(paymentResponse, this.isEzTagFlow);
        this.dataService.setPlanDataInfo(this.planData, this.isEzTagFlow);

        await this.state.go(nextState);
    }

}
