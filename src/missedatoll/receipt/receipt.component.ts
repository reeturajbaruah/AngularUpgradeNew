import { Component, Input, OnInit, Inject } from '@angular/core';
//import { PrintHook } from '@angular/flex-layout';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { FrameComponent } from '../frame/frame.component';
import { ReceiptModalComponent, InjectionValues, CmsContent as ReceiptModalCmsContent, CloseImage as ReceiptModalCloseImage } from './receiptModal.component';
import { urlPaths as accountDashboardRoutes } from 'accountDashboard/constants';
import { StateNames as MissedATollStateNames } from '../constants';
import { MissedATollService } from '../services';
import { BillingInfo, BillingType } from 'common/models';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StateConfig } from 'common/interfaces';
import { isEmpty } from 'lodash';
import { Location } from '@angular/common';
import { stateNames as violationStates } from 'violations/constants';
import { stateNames } from '../constants';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

interface ReceiptPageCmsData {
    Title: string;
    ShortDescription: string;
    LongDescription: string;
}

interface CloseImageCMSData {
    Image: string;
}

@Component({
    selector: 'receipt-component',
    templateUrl: './receipt.html',
    styleUrls: ['./receipt.less']
})
export class ReceiptComponent implements OnInit {

    constructor(
        private parent: FrameComponent,
        private state: StateService,
        private uiRouterGlobals: UIRouterGlobals,
        private missedATollService: MissedATollService,
        //private readonly printHook: PrintHook,
        private matDialog: MatDialog,
        private storefrontUtilityService: StorefrontUtilityService,
        private location: Location
    ) {
        //TODO there is an issue with Angular Material and printing.
        //Print button and code below may need to be included to resolve.
        //
        //const printHookAny = this.printHook as any;
        //const orig = printHookAny.collectActivations;
        //printHookAny.collectActivations = (event) => {
        //    if (!printHookAny.isPrintingBeforeAfterEvent) {
        //        orig.bind(printHookAny, event)();
        //    }
        //}
    }

    @Input() public thankYou: ReceiptPageCmsData;
    @Input() public billing: ReceiptPageCmsData;
    @Input() public gotInvoice: ReceiptPageCmsData;
    @Input() public importantInfo: ReceiptPageCmsData;
    @Input() public closeImage: CloseImageCMSData;

    public totalPayment: number;
    public paymentDate: string;
    public tyNotice: string;

    public BillingType = BillingType;
    public billingInfo: BillingInfo;

    public longDescriptionParams = {};

    private get dateNow() {
        return new Date();
    }

    ngOnInit() {
        this.parent.stepNum = 4;

        this.billingInfo = this.uiRouterGlobals.params.billingInfo || {};
        return this.billingInfo && this.billingInfo.billingType && !isEmpty(this.billingInfo)
            ? this.setupPage()
            : this.state.go(stateNames.Landing);
    }

    private setupPage() {
        this.parent.scrollToTop();

        const violationInformation = this.missedATollService.getViolationInformation();
        const formattedViolationData = violationInformation.formattedViolationData;

        this.totalPayment = formattedViolationData.grandTotal;

        this.longDescriptionParams = {
            current_date: this.dateNow,
            total_payment: formattedViolationData.grandTotal
        };

        if (!this.storefrontUtilityService.isRunningAsKiosk) {
            this.showReceiptModal();
        }

        this.missedATollService.destroyViolationInformation();
    }

    public payInvoiceClick() {

        this.state.go(violationStates.Landing);

    }

    public acctOverviewClick() {
        /*
         * This needed to be changed to use location due to authenticateRedirectService
         * redirecting to MAT landing after login instead of Account Overview
         */
        this.location.go(accountDashboardRoutes.Frame);
    }

    //TODO refactor to matDialogService and coordinate with Nathan
    private showReceiptModal() {

        const receiptModalCmsContent: ReceiptModalCmsContent = this.gotInvoice;
        const closeImageCmsContent: ReceiptModalCloseImage = this.closeImage;

        const settings: MatDialogConfig<InjectionValues> = {
            data: {
                cmsContent: receiptModalCmsContent,
                closeImage: closeImageCmsContent
            }
        };

        this.matDialog
            .open<ReceiptModalComponent, InjectionValues>(ReceiptModalComponent, settings);
    }

    public async nextTask(nextState: StateConfig) {
        await this.state.go(nextState);
    }

}
