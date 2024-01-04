import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StateOrName, StateService, UIRouterGlobals } from '@uirouter/angular';
import { BankAccountType, BillingInfo, BillingType } from 'common/models';
import { DialogService, ResponseErrorService } from 'common/services';
import { WizardComponent } from 'common/ui';
import { FrameComponent } from 'frp3/frame/frame.component';
import { ConfirmPageCmsData, EOViolationPlateContainer } from 'frp3/interfaces';
import { WebApisService } from 'violationsCommon/services/webapi/webApis.service';
import { cloneDeep, isEmpty } from 'lodash';
import { StateConfig } from 'common/interfaces';
import { BillingModalComponent, InjectionValues as BillingInjectionValues } from 'common/ui/modals/billingModal/billingModal.component';
import { Decimal } from 'decimal.js-light';

@Component({
    selector: 'violations-confirm-payment',
    templateUrl: './confirm.html',
    styleUrls: ['./confirm.less']
})
export class ConfirmPaymentComponent implements OnInit, AfterViewInit {

    public BillingType = BillingType;
    public billingInfo: BillingInfo;
    public plateContainer: EOViolationPlateContainer;
    totalPayment = new Decimal(0);

    @Input() emailAddress: string;
    @Input() stateList: any[];
    @Input() countryList: any[];
    @Input() cmsData: ConfirmPageCmsData;

    @ViewChild(WizardComponent) wizardComponent: WizardComponent;

    constructor(
        private parent: FrameComponent,
        private uiRouterGlobals: UIRouterGlobals,
        private state: StateService,
        private webApis: WebApisService,
        private responseErrorService: ResponseErrorService,
        private dialogService: DialogService
    ) { }

    ngOnInit() {
        this.billingInfo = this.uiRouterGlobals.params.billingInfo || {};
        this.plateContainer = {} as any;
        this.parent.stepNum = 3;
    }

    ngAfterViewInit() {
        return this.billingInfo && this.billingInfo.billingType && !isEmpty(this.billingInfo) ? this.setupPage() : this.wizardComponent.gotoPreviousState();
    }

    private setupPage() {
        this.plateContainer = this.parent.getPlateContainer();

        this.totalPayment = this.totalPayment.plus(this.plateContainer.paymentAmount).plus(this.plateContainer.assocPlatesPaymentAmount);

        this.parent.scrollToTop();
    }

    async previous(targetState: StateOrName) {
        await this.state.go(targetState, { billingInfo: this.billingInfo });
    }

    async submit(targetState: StateConfig) {
        this.plateContainer.plate.invoices.map(i => { i.paymentAmount = i.paymentAmount === i.invoiceDueBeforeDiscount ? i.invoiceDueAfterDiscount : i.paymentAmount; });
        this.plateContainer.associatedPlates.map(p => {
            p.totalPaymentAmount = p.totalPaymentAmountFRP3;
            p.invoices.map(inv => { inv.paymentAmount = inv.paymentAmount === inv.invoiceDueBeforeDiscount ? inv.invoiceDueAfterDiscount : inv.paymentAmount; });
        });

        const { plate, paymentAmount } = this.plateContainer;

        const paymentRequest: EOViolationPlateContainer = {
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
            paymentAmount: this.totalPayment.toNumber()
        };

        const response = await this.webApis.makeMultiPayment(paymentRequest);

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
