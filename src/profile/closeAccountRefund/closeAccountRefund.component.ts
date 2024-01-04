import { Component, Inject, Input, OnInit } from '@angular/core';
import { Routes } from '../constants';
import { StateService } from '@uirouter/core';
import { CloseAccountFrameComponent, CloseAccountRefund } from '../closeAccountFrame/frame.component';
import { NewBillingAddressModalComponent } from 'common/ui';
import { MailingAddressService } from 'vehicles/shared';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

export interface CloseAccountRefundCms {
    ShortDescription: string;
    LongDescription: string;
    ACCOUNT_CLOSURE_HEADER: string;
    REFUND_METHOD_HEADER: string;
    VALIDATE_HEADER: string;
    MODAL_TITLE: string;
    MODAL_HEADER: string;
    UPDATE_MODAL_TITLE: string;
    UPDATE_MODAL_CONTENT: string;
    mailingAddressMissing: string;
}

@Component({
    selector: 'close-account-refund',
    templateUrl: './closeAccountRefund.html',
    styleUrls: ['./closeAccountRefund.less']
})
export class CloseAccountRefundComponent implements OnInit {
    constructor(
        private parent: CloseAccountFrameComponent,
        private webStorage: WebStorageService,
        private profileRoutes: Routes,
        private stateService: StateService,
        private mailingAddressService: MailingAddressService
    ) { }
    public accountClosureCmsParams = {};

    @Input() cmsContent: CloseAccountRefundCms;

    public get closeAccountRefund(): CloseAccountRefund {
        return this.parent.closeAccountRefund;
    }

    get hasRefundFields() {
        return !!this.closeAccountRefund.mailingInfo.city && !!this.closeAccountRefund.mailingInfo.state && !!this.closeAccountRefund.mailingInfo.zip;
    }

    ngOnInit(): void {
        this.parent.stepNum = 2;
        this.webStorage.validateOnValue('closeAgreed',
            this.profileRoutes.CloseAccountFrame + this.profileRoutes.CloseAccountAgreement);

        this.accountClosureCmsParams = {
            balance: this.closeAccountRefund.currentBalance,
            date: this.closeAccountRefund.date
        };
    }

    public async onMailingAddressEdit() {
        await this.mailingAddressService.onMailingAddressEdit('Edit', this.parent.stateList, this.parent.countryList, NewBillingAddressModalComponent);
    }

    public async onCancel(state) {
        this.webStorage.removeEntry('closeAgreed');
        await this.stateService.go(state.name);
    }

    public async onContinue() {
        await this.parent.onCloseContinue();
    }
}
