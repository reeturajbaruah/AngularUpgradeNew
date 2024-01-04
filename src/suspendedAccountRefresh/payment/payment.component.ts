import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { BillingInfo, BillingType, Country, State } from 'common/models';
import { PaymentEntryComponent } from 'common/ui/form-entry/paymentEntry/paymentEntry.component';
import { FrameComponent } from '../frame/frame.component';
import { SuspendedAccountService } from '../services/suspendedAccount.service';

import {
    SuspendedAccountUserStatusKey
} from '../constants';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

export interface ICmsContent {
    paymentMethodHeader: string;
    makePrimary: string;
}

@Component({
    selector: 'suspended-payment-component',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.less']
})
export class PaymentComponent implements OnInit {

    @Input() stateList: State[];
    @Input() countryList: Country[];
    @Input() cmsContent: ICmsContent;
    @ViewChild(PaymentEntryComponent, { static: false }) paymentMethod: PaymentEntryComponent;

    public BillingType = BillingType;

    public makePrimary: boolean;

    public billingInfo: BillingInfo;

    constructor(
        private stateService: StateService,
        private frame: FrameComponent,
        private suspendedAccountService: SuspendedAccountService,
        private webStorage: WebStorageService
    ) {
    }

    ngOnInit() {
        this.frame.scrollToTop();
        this.frame.showStepper = true;
        this.frame.showTitleBanner = false;

        this.billingInfo = this.suspendedAccountService.paymentInfo;
        this.makePrimary = this.suspendedAccountService.paymentInfo.makePrimary;
    }

    get hasViolations(): boolean {
        return this.webStorage.getValue(SuspendedAccountUserStatusKey)?.violationFlag;
    }

    async nextStep(targetState: StateDeclaration) {

        const paymentReady = await this.paymentMethod.getStatus();

        if (paymentReady) {

            if (this.billingInfo.billingType === BillingType.Credit) {
                this.billingInfo.credit.primary = this.makePrimary;
            } else if (this.billingInfo.billingType === BillingType.Eft) {
                this.billingInfo.eft.primary = this.makePrimary;
            }

            const amount = this.suspendedAccountService.paymentInfo.amount;

            this.suspendedAccountService.paymentInfo = {
                amount,
                makePrimary: this.makePrimary,
                credit: (this.billingInfo.billingType === BillingType.Credit) ? this.billingInfo.credit : this.resetCredit(),
                eft: (this.billingInfo.billingType === BillingType.Eft) ? this.billingInfo.eft : this.resetEft(),
                billingType: this.billingInfo.billingType
            };

            await this.stateService.go(targetState);
        }
    }

    private resetEft() {
        return {
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
        };
    }

    private resetCredit() {
        return {
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
        };
    }
}
