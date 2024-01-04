import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StateOrName, StateService, UIRouterGlobals } from '@uirouter/core';
import { StateConfig } from 'common/interfaces';
import { BillingInfo, BillingType } from 'common/models';
import { PaymentEntryComponent } from 'common/ui/form-entry/paymentEntry/paymentEntry.component';
import { FrameComponent } from 'frp3/frame/frame.component';
import { PaymentCmsContent } from 'frp3/interfaces';

@Component({
    selector: 'violation-payment-method',
    templateUrl: './paymentMethod.html',
    styleUrls: ['./paymentMethod.less']
})

export class PaymentMethodComponent implements OnInit {

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

    @Input() stateList: any[];
    @Input() countryList: any[];
    @Input() cmsContent: PaymentCmsContent;

    @ViewChild(PaymentEntryComponent, { static: false }) paymentMethod: PaymentEntryComponent;

    constructor(
        private parent: FrameComponent,
        private state: StateService,
        private uiRouterGlobals: UIRouterGlobals
    ) { }

    ngOnInit() {
        this.billingInfo = this.uiRouterGlobals.params.billingInfo || this.billingInfo;
        this.parent.stepNum = 2;
        this.parent.scrollToTop();
    }

    async nextStep(nextState: StateConfig) {
        const paymentReady = await this.paymentMethod.getStatus();
        if (paymentReady) {
            await this.state.go(nextState, { billingInfo: this.billingInfo });
        }
    }

    async goToPreviousState(targetState: StateOrName) {
        await this.state.go(targetState, { billingInfo: this.billingInfo });
    }
}
