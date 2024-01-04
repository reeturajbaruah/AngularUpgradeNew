import { Component, Input, Inject, OnInit, HostListener } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { PaymentPlanToolTip, EOViolationPlateContainer } from 'frp3/interfaces';
import { ViolationsDataService } from 'violationsCommon/services/violationsService/violationsData.service';
import { FrameComponent } from 'frp3/frame/frame.component';
import { WindowRef } from 'common/providers';
import { BillingInfo, BillingType } from 'common/models';
import { isEmpty } from 'lodash';
import { StateNames as ViolationsStateNames } from 'frp3/constants';
import { stateNames as loginStateNames } from 'login/constants';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { Decimal } from 'decimal.js-light';
import { BrowserExtensionHandlerService } from '../../common/services/browserExtensionHandlerService/browserExtensionHandler.service';

export interface CmsContent {
    Title: string;
    TITLE_1: string;
    BillingInformationHeader: string;
    RemainingBalanceHeader: string;
    RemainingBalanceSubHeader: string;
}

export interface CmsSection {
    Title: string;
    LongDescription: string;
    ShortDescription?: string;
}
export interface CmsPaymentPopUp extends CmsSection {
    ButtonText: string;
}

@Component({
    selector: 'receipt-component',
    templateUrl: './receipt.html',
    styleUrls: ['./receipt.less'],
    providers: []
})
export class ReceiptComponent implements OnInit {

    constructor(
        private parent: FrameComponent,
        private browserExtensionHandlerService: BrowserExtensionHandlerService,
        @Inject(WindowRef) private window: Window,
        private uiRouterGlobals: UIRouterGlobals,
        private state: StateService,
        private violationsDataService: ViolationsDataService,
        private stateNames: ViolationsStateNames,
        private authenticationService: AuthenticationService
    ) {
    }

    @Input() cmsContent: CmsContent;
    @Input() cmsSectionImportantInformation: CmsSection;
    @Input() cmsSectionThankYou: CmsSection;
    @Input() cmsPaymentPostingPopup: CmsPaymentPopUp;
    @Input() cmsContentPmntPlan: PaymentPlanToolTip;

    public BillingType = BillingType;
    public billingMethod: BillingInfo;
    public plateContainer: EOViolationPlateContainer;
    public searchPlateBalancePaid: boolean;
    public paymentAmount: Decimal;
    public remainingBalance: Decimal;
    public searchPlateBalance: Decimal;
    public showRemainingBalance: boolean;

    public thankYouSectionParams = {};
    isAuthenticated = false;

    private get dateNow() {
        return new Date();
    }

    async ngOnInit() {
        this.parent.stepNum = 4; //This removes the wizard stepper.
        this.billingMethod = this.uiRouterGlobals.params.billingInfo || {};
        this.plateContainer = this.parent.getPlateContainer();
        this.paymentAmount = (this.plateContainer.paymentAmount || this.plateContainer.assocPlatesPaymentAmount)
            ? new Decimal(this.plateContainer.paymentAmount).plus(this.plateContainer.assocPlatesPaymentAmount)
            : new Decimal(0);

        await this.updateViolations();

        if (this.billingMethod && this.billingMethod.billingType && !isEmpty(this.billingMethod)) {
            this.setupPage();
        } else {
            this.state.go(this.stateNames.Landing);
        }
    }

    private setupPage(): void {
        this.browserExtensionHandlerService.sendTag(this.uiRouterGlobals.current, this.plateContainer.violationsFlowName);
        this.searchPlateBalancePaid = this.searchPlateBalance.greaterThan(0);
        this.thankYouSectionParams = {
            paymentDate: this.dateNow,
            totalPayment: this.paymentAmount.toNumber(),
            remainingBalance: this.remainingBalance.toNumber()
        };

        this.isAuthenticated = this.authenticationService.isAuthenticated();
    }
    
    public async updateViolations() {
        const fullRequest = {
            licenseState: this.plateContainer.plate.licenseState,
            invoiceNumber: this.plateContainer.invoiceSearchNum === null ? '' : this.plateContainer.invoiceSearchNum,
            licensePlate: this.plateContainer.plate.licensePlate,
            research: true
        };

        await this.violationsDataService.findViolationAcct(fullRequest, null, null, null, true);

        this.plateContainer = this.parent.getPlateContainer();
        const assocPlates = this.plateContainer.associatedPlates;
        const assocPlatesRemBal = assocPlates instanceof Array && assocPlates.length > 0
            ? assocPlates.reduce((acc, val) => acc.plus(val.totalInvoicedAmount).plus(val.totalUninvoicedAmount), new Decimal(0))
            : new Decimal(0);
        this.searchPlateBalance = new Decimal(this.plateContainer.plate.totalInvoicedAmount ?? 0).plus(this.plateContainer.plate.totalUninvoicedAmount ?? 0);
        this.remainingBalance = assocPlatesRemBal.plus(this.plateContainer.plate.totalInvoicedAmount ?? 0).plus(this.plateContainer.plate.totalUninvoicedAmount ?? 0);
        this.showRemainingBalance = this.remainingBalance.greaterThan(0);
    }

    public async goToLoginOrAccountOverview() {
        if (this.isAuthenticated) {
            this.state.go(accountDashboardStates.Frame);
        } else {
            this.state.go(loginStateNames.Login);
        }

        this.violationsDataService.removeAllWebStorageEntries();
    }

    public async backToSearchGrid() {
        const fullRequest = {
            licenseState: this.plateContainer.plate.licenseState,
            invoiceNumber: !this.plateContainer.invoiceSearchNum ? '' : this.plateContainer.invoiceSearchNum,
            licensePlate: this.plateContainer.plate.licensePlate
        };

        await this.violationsDataService.findViolationAcct(
            fullRequest,
            null,
            null,
            {
                to: this.stateNames.Grid, params: { billingInfo: this.billingMethod },
                options: { custom: { isExplicitlyAllowedTransition: true } }
            }
        );
    }

    public async nextTask(nextState: StateConfig) {
        await this.state.go(nextState);
    }
    
    @HostListener('window:popstate', ['$event'])
    onPopState(event) {
        this.state.go(this.stateNames.Landing);
    }
    
}
