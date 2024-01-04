import { Component, Input, OnInit } from '@angular/core';
import { CmsUtilService } from 'cms/services';
import { ResponseErrorService } from 'common/services';
import { SpinnerService } from 'common/ui';
import { FrameComponent } from '../frame/frame.component';
import { CmsGridContent, PdfCmsContent, PlateSearchResponse } from '../interfaces';
import { PaymentPlanData, PaymentPlanInfo, PlateDataService, PlateInformation } from '../services';
import { WebApiService } from '../services/webApi.service';


@Component({
    selector: 'payment-plans-grid-component',
    templateUrl: './grid.html',
    styleUrls: ['./grid.less']
})
export class GridComponent implements OnInit {

    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        private parent: FrameComponent,
        private dataService: PlateDataService,
        private responseErrorService: ResponseErrorService,
        private paymentPlanApi: WebApiService,
        private cmsUtilService: CmsUtilService,
        private spinnerService: SpinnerService
    ) { }

    // Bindings
    @Input() isEzTagFlow: boolean;
    @Input() cmsContent: any;

    public cms: { pdf: PdfCmsContent; data: CmsGridContent };

    get planData(): PaymentPlanData {
        return this.parent.planData;
    }

    set planData(value: PaymentPlanData) {
        this.parent.planData = value;
    }

    public activePlates: PlateInformation[] = [];
    public inactivePlates: PlateInformation[] = [];

    public hasCurrentSelectedPlan: boolean;

    ngOnInit() {
        this.parent.stepNum = 1;
        this.parent.scrollToTop();

        this.hasCurrentSelectedPlan = false;
        const pdfContent = this.cmsContent.Children[4];
        const infoIcon = this.cmsContent.Children[3];
        const planText = this.cmsContent.Children[1];

        this.cms = {
            pdf: {
                pdfDownloadText: pdfContent.ShortDescription,
                pdfDownloadedMessage: pdfContent.pdfDownloaded,
                pdfError: pdfContent.pdfError,
                pdfProcessingMesssage: pdfContent.pdfProcessing
            },
            data: {
                planActiveTitle: this.cmsContent.ShortDescription,
                planInactiveTitle: this.cmsContent.LongDescription,

                infoIcon: this.cmsUtilService.generateFileSrc(infoIcon.Image),

                settlementAmmountText: planText.SettlementAmount,
                paidAmmountText: planText.PaidAmount,
                balanceDueText: planText.BalanceDue,
                paymentPlanTerms: planText.LongDescription,
                activePlanToolTipdecription: planText.ShortDescription,
                defaultedTitle: this.cmsContent.Children[2].Title,

                defaultedBody: this.cmsContent.Children[2].LongDescription,

                balanceToolTip: null,
                paymentPlanTermsLink: null,

                paymentLateText: this.cmsContent.Children[0].LongDescription,
                paymentLatePopup: this.cmsContent.Children[0]['passedDueTemplate']
            }
        };

        if (this.isEzTagFlow) {
            this.spinnerService.startSpinner();

            this.paymentPlanApi.ezTagSearchPaymentPlans()
                .then(this.processPaymentPlanSearch)
                .then(this.processingPlans)
                .catch(() => { });

        } else {
            this.spinnerService.stopSpinner();
            this.processingPlans();
        }
    }

    public processingPlans = () => {
        //TODO: once ETC fix auto pay, need to seperate out the autopay/billingCard on account and new payment method.
        this.dataService.resetPlanDataInfo(this.isEzTagFlow);
        this.planData = this.dataService.getPlanDataInfo(this.isEzTagFlow);

        this.activePlates = this.dataService.getActive(this.isEzTagFlow);
        this.inactivePlates = this.dataService.getInactive(this.isEzTagFlow);

        this.planData.selectedPaymentPlan = this.dataService.resetSelectedPlan(this.activePlates, this.inactivePlates, this.isEzTagFlow);
        this.hasCurrentSelectedPlan = true;
    };

    public processPaymentPlanSearch = (response: PlateSearchResponse) => {
        this.spinnerService.stopSpinner();

        if (!this.responseErrorService.isErrorFree(response)) {
            throw response;
        }
        this.dataService.setPaymentPlans(response, true);
    };

    public onClickGrid = (planId: number) => {
        this.planData.selectedPaymentPlan =
            this.dataService.toggleCurrentPlan(planId, this.activePlates, this.inactivePlates, this.isEzTagFlow);
    };

    public selectPlan = (selectedPlan: PaymentPlanInfo) => {

        this.planData.selectedPaymentPlan = selectedPlan;

        //reset the 'isSelected' prop
        [...this.activePlates, ...this.inactivePlates]
            .reduce((acc, plateInfo) => acc.concat(plateInfo.paymentPlans), [])
            .forEach(plan => plan.isSelected = plan.paymentPlanId === selectedPlan.paymentPlanId);

        //store current selected plan
        this.dataService.storePlan(this.planData.selectedPaymentPlan, this.isEzTagFlow);
    };
}
