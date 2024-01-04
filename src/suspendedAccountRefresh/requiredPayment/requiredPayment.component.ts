import {
    Component, Input, OnInit
} from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { CurrentUserService } from 'common/services';
import { FrameComponent } from 'suspendedAccountRefresh/frame/frame.component';
import { ISuspendedPaymentInfo, SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { WebApiService } from 'suspendedAccountRefresh/services/webapi.service';

export interface IWithoutViolations extends SiteCoreItem {
    ReplenishmentAmount: string;
    ReplenishmentAmountTextOptOut: string;
}

@Component({
    selector: 'suspended-required-payment-component',
    templateUrl: './requiredPayment.component.html',
    styleUrls: ['./requiredPayment.component.less']
})
export class RequiredPaymentComponent implements OnInit {

    @Input() cmsContentReqPayment: IWithoutViolations;
    reinstateAmt: number;
    replinishAmt: number;
    requiredPaymentAmt: number;
    replenishmentAmtText: string;

    constructor(private stateService: StateService,
        private frame: FrameComponent,
        private api: WebApiService,
        private suspendedAccountService: SuspendedAccountService
    ) { }

    async ngOnInit() {
        this.frame.scrollToTop();
        this.frame.showStepper = true;
        this.frame.showTitleBanner = false;

        const res = await this.api.getSuspendedAccountData();
        this.replinishAmt = res.rebillAmount;
        this.reinstateAmt = (res.totalUnsuspensionPaymentAmount - res.rebillAmount);
        this.requiredPaymentAmt = this.replinishAmt + this.reinstateAmt;

        this.replenishmentAmtText = this.suspendedAccountService.getReplenishmentAmtText(this.cmsContentReqPayment.ReplenishmentAmount,
            this.cmsContentReqPayment.ReplenishmentAmountTextOptOut);
    }

    public async cancel(state: StateDeclaration) {

        await this.stateService.go(state);
    }


    async nextStep(targetState: StateDeclaration) {

        this.suspendedAccountService.paymentInfo = {
            amount: this.requiredPaymentAmt,
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
                international: false,
                primary: true
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
                international: false,
                primary: true
            },
            billingType: null,
            makePrimary: true
        } as ISuspendedPaymentInfo;

        await this.stateService.go(targetState);
    }

}

