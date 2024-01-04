import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StateOrName, StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BillingInfo, BillingType } from 'common/models';
import { ResponseErrorService } from 'common/services';
import { CreditCardEntryComponent } from 'common/ui';
import { BaseBankAccountRequest, WebApisService as ValidationApis } from 'validation/services/webApis.service';
import { FrameComponent } from '../frame/frame.component';


export interface CmsContent {
    Title: string;
    ShortDescription: string;
    PaymentMethodHeader: string;
    CCBillingAddressHeader: string;
    EFTBillingAddressHeader: string;
}

@Component({
    selector: 'select-payment',
    templateUrl: './selectPayment.html',
    styleUrls: ['./selectPayment.less']
})

export class SelectPaymentComponent implements OnInit {

    constructor(
        private state: StateService,
        private uiRouterGlobals: UIRouterGlobals,
        private parent: FrameComponent,
        private validationApis: ValidationApis,
        private responseErrorService: ResponseErrorService
    ) {
    }

    @ViewChild(CreditCardEntryComponent, { static: false }) creditEntry: CreditCardEntryComponent;

    @Input() stateList: any[];
    @Input() countryList: any[];
    @Input() cmsContent: CmsContent;

    public BillingType = BillingType;
    public billingInfo: BillingInfo = {
        eft: {
            accountType: null,
            name: null,
            routingNumber: null,
            accountNumber: null,
            address1: null,
            city: null,
            state: null,
            zip: null,
            plus4: null,
            country: 'USA',
            displayCountry: 'USA',
            international: false
        },
        credit: {
            cardCode: null,
            cardNbr: null,
            expMonth: null,
            expYear: null,
            nameOnCard: null,
            address1: null,
            city: null,
            state: null,
            zip: null,
            plus4: null,
            country: 'USA',
            displayCountry: 'USA',
            international: false
        },
        billingType: null
    };

    async nextStep(nextState: StateConfig) {

        let paymentReady = false;

        if (this.billingInfo.billingType === BillingType.Eft) {
            const eftRequest: BaseBankAccountRequest = {
                accountType: this.billingInfo.eft.accountType,
                routingNumber: this.billingInfo.eft.routingNumber,
                accountNumber: this.billingInfo.eft.accountNumber
            };

            const response = await this.validationApis.validateRoutingNumber(eftRequest);

            if (Array.isArray(response.alerts) && response.alerts.length !== 0) {
                this.responseErrorService.displayAlertsFromResponse(response, true);
            }

            paymentReady = true;
        } else if (this.creditEntry) {
            paymentReady = await this.creditEntry.submit();
        }

        if (paymentReady) {
            await this.state.go(nextState, { billingInfo: this.billingInfo });
        }
    }

    async goToPreviousState(targetState: StateOrName) {
        await this.state.go(targetState, { billingInfo: this.billingInfo });
    }

    ngOnInit() {
        this.billingInfo = this.uiRouterGlobals.params.billingInfo || this.billingInfo;
        this.parent.setTitle(this.cmsContent.Title);
        this.parent.stepNum = 2;
        this.parent.scrollToTop();
    }
}
