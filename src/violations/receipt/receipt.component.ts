import { Component, Input, Inject, OnInit } from '@angular/core';

import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { ViolationPlateContainer } from 'violations/interfaces';

import { ViolationsDataService } from 'violationsCommon/services/violationsService/violationsData.service';
import { FrameComponent } from '../frame/frame.component';

import { WindowRef } from 'common/providers';
import { BillingInfo, BillingType, BankAccountType } from 'common/models';
import { isEmpty } from 'lodash';
import { StateNames as ViolationsStateNames } from 'violations/constants';
import { WizardComponent } from 'common/ui';
import { BrowserExtensionHandlerService } from '../../common/services/browserExtensionHandlerService/browserExtensionHandler.service';

export interface CmsContent {
    Title: string;
    TITLE_1: string;
    BillingInformationHeader: string;
}

export interface CmsSection {
    Title: string;
    LongDescription: string;
}
export interface CmsPaymentPopUp extends CmsSection {
    ButtonText: string;
}

@Component({
    selector: 'receipt-component',
    templateUrl: './receipt.html',
    styleUrls: ['./receipt.less'],
    providers: [
        WizardComponent
    ]
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
        private wizard: WizardComponent
    ) {
    }

    @Input() cmsContent: CmsContent;
    @Input() cmsSectionImportantInformation: CmsSection;
    @Input() cmsSectionThankYou: CmsSection;
    @Input() cmsPaymentPostingPopup: CmsPaymentPopUp;

    public BillingType = BillingType;
    public billingMethod: BillingInfo;
    public plateContainer: ViolationPlateContainer;
    public showReturnToInvoicesLink: boolean;

    public thankYouSectionParams = {};

    private get dateNow() {
        return new Date();
    }

    ngOnInit() {
        this.parent.stepNum = 4; //This removes the wizard stepper.
        this.billingMethod = this.uiRouterGlobals.params.billingInfo || {};
        this.plateContainer = this.parent.getPlateContainer();

        if (!isEmpty(this.billingMethod) && this.billingMethod.billingType) {
            this.browserExtensionHandlerService.sendTag(this.uiRouterGlobals.current, this.plateContainer.violationsFlowName);
            this.showReturnToInvoicesLink = this.plateContainer.remainingBalance !== 0;
            this.parent.setTitle(this.cmsContent.Title);
            this.thankYouSectionParams = {
                paymentDate: this.dateNow,
                totalPayment: this.plateContainer.paymentAmount,
                remainingBalance: this.plateContainer.remainingBalance
            };
        } else {
            this.state.go(this.stateNames.Landing);
        }
    }

    public async goToLoginOrAccountOverview() {
        await this.wizard.gotoNextState();
        this.violationsDataService.removeAllWebStorageEntries();
    }

    public async backToInvoicesGrid() {
        const fullRequest = {
            licenseState: this.plateContainer.plate.licenseState,
            invoiceNumber: this.plateContainer.invoiceSearchNum,
            licensePlate: this.plateContainer.plate.licensePlate
        };

        await this.violationsDataService.findViolations(
            fullRequest,
            {
                to: this.stateNames.Grid, params: { billingInfo: this.billingMethod },
                options: { custom: { isExplicitlyAllowedTransition: true } }
            }
        );
    }

    public async nextTask(nextState: StateConfig) {
        await this.state.go(nextState);
    }
}
