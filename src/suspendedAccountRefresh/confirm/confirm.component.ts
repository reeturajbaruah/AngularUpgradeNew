import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { BillingInfo, BillingType } from 'common/models';
import { ResponseErrorService, WebStorageService } from 'common/services';
import { IPaymentConfirmConfig, IPaymentDetails, Labels } from 'common/ui/display/paymentConfirmation/paymentConfirmation.interface';
import { FrameComponent } from 'suspendedAccountRefresh/frame/frame.component';
import { SuspendedAccountService } from '../services/suspendedAccount.service';
import { ConfirmManager } from './confirm.manager';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';

import {
    SuspendedAccountUserStatusKey
} from '../constants';

export interface ConfirmContent {
    paymentDetailsCC: string;
    paymentDetailsEFT: string;
}

@Component({
    selector: 'suspended-confirm-component',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.less']
})
export class ConfirmComponent implements OnInit {

    public billingInfo: BillingInfo;
    @Input() cmsContent: SiteCoreItem & ConfirmContent;
    paymentConfirmConfig = {} as IPaymentConfirmConfig;

    constructor(private stateService: StateService,
        private frame: FrameComponent,
        private suspendedAccountService: SuspendedAccountService,
        private manager: ConfirmManager,
        private responseErrorService: ResponseErrorService,
        private authService: AuthenticationService,
        private webStorage: WebStorageService
    ) { }

    ngOnInit() {

        this.billingInfo = this.suspendedAccountService.paymentInfo;
        this.mapConfirmConfig();
    }

    get hasViolations(): boolean {
        return this.webStorage.getValue(SuspendedAccountUserStatusKey)?.violationFlag;
    }

    private mapConfirmConfig() {
        this.paymentConfirmConfig.header = this.cmsContent.LongDescription;

        const paymentDetails = {} as IPaymentDetails;
        paymentDetails.header = { label: '', showEditLink: false };
        paymentDetails.header.label = this.billingInfo.billingType === BillingType.Credit
                                        ? this.cmsContent.paymentDetailsCC
                                        : this.cmsContent.paymentDetailsEFT;
        paymentDetails.header.showEditLink = true;
        paymentDetails.showAccountNumber = true;

        this.paymentConfirmConfig.totalPaymentAmt = this.suspendedAccountService.paymentInfo.amount;
        this.paymentConfirmConfig.paymentDetails = paymentDetails;
    }

    public async previous(state: StateDeclaration) {
        await this.stateService.go(state);
    }

    async nextStep(targetState: StateDeclaration) {

        const response = await this.manager.submitPayment(this.frame.hasViolations, this.suspendedAccountService.paymentInfo);

        if (response.errors.length > 0) {
            this.responseErrorService.displayErrorsFromResponse(response);
        } else {
            await this.authService.profile({});
            await this.stateService.go(targetState);
        }
    }


    editPayment(wizard) {
        wizard.gotoPreviousState();
    }
}
