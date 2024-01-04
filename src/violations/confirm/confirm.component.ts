import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StateOrName, StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingInfo, BillingType } from 'common/models';
import { DialogService, ResponseErrorService } from 'common/services';
import {
    BillingModalComponent,
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { cloneDeep, isEmpty } from 'lodash';
import { FrameComponent } from 'violations/frame/frame.component';
import { ViolationPlateContainer } from 'violations/interfaces';
import { WebApisService } from 'violationsCommon/services/webapi/webApis.service';
import { WizardComponent } from 'common/ui';

interface CmsData {
    Title: string;
    EMAIL_TITLE: string;
    PAYMENT_DETAILS_TITLE: string;
    EMAIL_INSTRUCTION: string;
    BILLING_INFO_HEADER: string; //totalPaymentLabel?
}

@Component({
    selector: 'violations-confirm-component',
    templateUrl: './confirm.html',
    styleUrls: ['./confirm.less']
})
export class ConfirmComponent implements OnInit, AfterViewInit {

    constructor(
        private parent: FrameComponent,
        private uiRouterGlobals: UIRouterGlobals,
        private state: StateService,
        private webApis: WebApisService,
        private responseErrorService: ResponseErrorService,
        private dialogService: DialogService
    ) { }

    public BillingType = BillingType;
    public billingInfo: BillingInfo;
    @Input() emailAddress: string;
    @Input() stateList: any[];
    @Input() countryList: any[];
    @Input() cmsData: CmsData;
    public plateContainer: ViolationPlateContainer;

    @ViewChild(WizardComponent) wizardComponent: WizardComponent;

    ngOnInit() {
        this.billingInfo = this.uiRouterGlobals.params.billingInfo || {};
        this.plateContainer = {} as any;
        this.parent.stepNum = 3;
    }

    ngAfterViewInit() {
        return this.billingInfo && this.billingInfo.billingType && !isEmpty(this.billingInfo)
            ? this.setupPage()
            : this.wizardComponent.gotoPreviousState();
    }

    private setupPage() {
        this.plateContainer = this.parent.getPlateContainer();

        this.parent.setTitle(this.cmsData.Title);
        this.parent.scrollToTop();
    }

    async previous(targetState: StateOrName) {
        await this.state.go(targetState, { billingInfo: this.billingInfo });
    }

    async submit(targetState: StateConfig) {
        const { plate, paymentAmount } = this.plateContainer;

        const paymentRequest: ViolationPlateContainer = {
            ...this.plateContainer,
            isCreditCard: this.billingInfo.billingType === BillingType.Credit,
            eftPaymentMethod: {
                ...this.billingInfo.eft,
                nameOnBankAccount: this.billingInfo.eft.name,
                accountTypeDisplay: this.billingInfo.eft.accountType === BankAccountType.Personal
                    ? 'Personal'
                    : 'Business'

            },
            creditCardPaymentMethod: {
                ...this.billingInfo.credit,
            },
            plate: {
                ...plate,
                totalPaymentAmount: paymentAmount
            },
            paymentAmount
        };

        const response = await this.webApis.makePayment(paymentRequest);

        await (response.errors.length > 0
            ? this.responseErrorService.displayErrorsFromResponse(response)
            : this.goToNextState(targetState));
    }

    async goToNextState(nextState: StateConfig) {
        await this.state.go(nextState, { billingInfo: this.billingInfo }, { custom: { isExplicitlyAllowedTransition: true } });
    }

    public async openModal() {
        const data: BillingInjectionValues = {
            billingInformation: cloneDeep(this.billingInfo),
            billingType: this.billingInfo.billingType,
            stateList: this.stateList,
            countryList: this.countryList
        };

        return this.dialogService.openSliderCentered(BillingModalComponent, data)
            .then((result: BillingInjectionValues) => {
                if (result) {
                    this.billingInfo = cloneDeep(result.billingInformation);
                    this.billingInfo.billingType = result.billingType;
                }
            });
    }
}
