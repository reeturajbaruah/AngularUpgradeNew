import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BillingType } from 'common/models';
import { DateWithTimeZoneService, ResponseErrorService } from 'common/services';
import * as moment from 'moment';
import { FrameComponent } from '../frame/frame.component';
import { PaymentResponse } from '../interfaces';
import { PaymentPlanData, PlateDataService } from '../services';
import { WebApiService } from '../services/webApi.service';


export interface ReceiptCmsContent {
    Title: string;
    LongDescription: string;
    ShortDescription: string;
    paymentAmount: string;
    paymentDate: string;
    paymentMethod: string;
    amountEzTag: string;
    totalAmount: string;
    billingInfoHeader: string;
    Children: any;
}

@Component({
    selector: 'receipt-component',
    templateUrl: './receipt.html',
    styleUrls: ['./receipt.less']
})
export class ReceiptComponent implements OnInit {

    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        private parent: FrameComponent,
        private state: StateService,
        private paymentPlanApi: WebApiService,
        private responseErrorService: ResponseErrorService,
        private dataService: PlateDataService,
        private dateWithTimeZoneService: DateWithTimeZoneService
    ) {
    }

    @Input() cmsContent: ReceiptCmsContent;
    @Input() isEzTagFlow: boolean;

    public get cms(): ReceiptCmsContent {
        return this.cmsContent;
    }

    public get planData(): PaymentPlanData {
        return this.parent.planData;
    }

    public get paymentAmount(): number {
        return this.planData.paymentAmount;
    }

    public leftoverAmount: number;
    public nextUpcomingInstallmentDateFormatted: string;

    public paymentDate: string;

    public BillingType = BillingType;
    public paymentType: string;
    public paymentNumber: string;
    public paymentName: string;
    public paymentCreditOrEFT: string;
    private paymentResponse: PaymentResponse;
    public paymentPlanNumber: number;

    public async backToPaymentPlans(nextState: StateConfig) {

        const response =
            await (this.isEzTagFlow
                ? this.paymentPlanApi.ezTagSearchPaymentPlans()
                : this.paymentPlanApi.violationsPaymentPlansSearch({
                    InvoiceNumber: '' + (this.paymentResponse.originalRequest.invoiceNumber || ''),
                    LicenseState: this.paymentResponse.originalRequest.licenseState,
                    LicensePlate: this.paymentResponse.originalRequest.licensePlate,
                    PaymentPlanId: '' + (this.paymentResponse.originalRequest.paymentPlanId || '')
                }));

        if (this.responseErrorService.isErrorFree(response)) {
            this.dataService.setPaymentPlans(response, this.isEzTagFlow);
            await this.state.go(nextState);
        }
    }

    ngOnInit() {
        this.parent.stepNum = 4;
        this.parent.scrollToTop();

        this.paymentResponse = this.dataService.getPaymentResponse(this.isEzTagFlow);
        this.formatCurrentDate();

        this.leftoverAmount = this.planData.selectedPaymentPlan.balanceAmount - this.planData.paymentAmount;
        this.nextUpcomingInstallmentDateFormatted =
            this.dateWithTimeZoneService.withoutOffsetToCentral(this.planData.selectedPaymentPlan.nextInstallmentDate, 'MMM Do, YYYY z');

        this.paymentPlanNumber = this.planData.selectedPaymentPlan.paymentPlanId;
    }

    public formatCurrentDate = () => {
        this.paymentDate = this.dateWithTimeZoneService.withoutOffsetToCentral(moment().format('YYYY-MM-DDTHH:mm:ss'), 'MMM D, YYYY h:mm:ss A z');
    };

    public get isMaxPayment(): boolean {
        return this.planData.paymentAmount === this.planData.selectedPaymentPlan.balanceAmount;
    }
    public get hasOverage(): boolean {
        return this.planData.paymentAmount > this.planData.selectedPaymentPlan.nextInstallmentAmount;
    }

    public print() {
        window.print();
    }
}
