import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BaseBankAccountRequest, BillingInfo, BillingType } from 'common/models';
import { GenericRepoService, ResponseErrorService } from 'common/services';
import { CreditCardEntryComponent } from 'common/ui';
import { FrameComponent } from '../frame/frame.component';


@Component({
    selector: 'missed-a-toll-billing-component',
    templateUrl: './billing.html',
    styleUrls: ['./billing.less']
})
export class BillingComponent implements OnInit {
    constructor(
        public parent: FrameComponent,
        private state: StateService,
        private uiRouterGlobals: UIRouterGlobals,
        private genericRepoService: GenericRepoService,
        private responseErrorService: ResponseErrorService
    ) { }

    @ViewChild(CreditCardEntryComponent, { static: false }) creditEntry: CreditCardEntryComponent;

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

    ngOnInit() {
        this.parent.stepNum = 2;

        this.billingInfo = this.uiRouterGlobals.params.billingInfo || this.billingInfo;

        this.parent.scrollToTop();
    }

    public async submit(nextState: StateConfig) {
        if (this.billingInfo.billingType === BillingType.Eft) {
            const eftRequest: BaseBankAccountRequest = {
                AccountType: this.billingInfo.eft.accountType,
                RoutingNumber: this.billingInfo.eft.routingNumber,
                AccountNumber: this.billingInfo.eft.accountNumber
            };

            const response = await this.genericRepoService.dataFactory.eftValidateRouting(eftRequest);

            if (Array.isArray(response.alerts) && response.alerts.length !== 0) {
                this.responseErrorService.displayAlertsFromResponse(response, true);
            }
        } else {
            if (this.creditEntry) {
                const submitResponse = await this.creditEntry.submit();
                if (!submitResponse) {
                    return;
                }
            }
        }
        await this.state.go(nextState, { billingInfo: this.billingInfo });
    }

    public async previous(prevState: StateConfig) {
        await this.state.go(prevState, { billingInfo: this.billingInfo });
    }
}
