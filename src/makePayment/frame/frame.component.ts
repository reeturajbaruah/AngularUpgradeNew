import { Component, Input, OnInit, Inject, OnDestroy } from '@angular/core';
import { hideTrigger } from 'animations/hide';
import { WindowRef } from 'common/providers';
import { wait } from 'common/utilities';

import { StepperStep } from 'common/ui';
import { stateNames } from '../constants';
import { Country, PaymentMethodOptions, State } from 'common/models';

import { PaymentInfoService } from 'makePayment/services/paymentInfo.service';

import { FrameCmsContent, PaymentInfo } from '../interfaces';
import { userRoles } from 'constants/module';
import { SessionService } from 'common/services/session/session.service';

@Component({
    selector: 'make-payment-frame-component',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less'],
    animations: [hideTrigger]
})
export class FrameComponent implements OnInit, OnDestroy {
    constructor(
        @Inject(WindowRef) private windowRef: Window,
        private paymentInfoService: PaymentInfoService,
        private session: SessionService
    ) {
    }

    @Input() baseCmsContent: FrameCmsContent;
    @Input() stateList: State[];
    @Input() countryList: Country[];

    public isHidden: boolean;

    public steps: StepperStep[] = [];
    public stepMap = {
        [stateNames.Landing]: 1,
        [stateNames.Checkout]: 2,
        [stateNames.Receipt]: 3,
    };

    public set paymentInfo(info: PaymentInfo & PaymentMethodOptions) {
        this.paymentInfoService.paymentInfo = info;
    }

    public get paymentInfo(): PaymentInfo & PaymentMethodOptions {
        return this.paymentInfoService.paymentInfo;
    }

    public getDate(): Date {
        return new Date();
    }

    ngOnInit() {
        this.steps = [
            { name: this.baseCmsContent.step1, background: 'secondary' },
            { name: this.baseCmsContent.step2, background: 'secondary' },
            { name: this.baseCmsContent.step3, background: 'secondary' }
        ];
    }

    ngOnDestroy() {
        this.paymentInfo = null;
    }

    public async scrollToTop() {
        this.isHidden = true;

        await wait(20);
        this.windowRef.scrollTo(0, 0);

        this.isHidden = false;
    }

    checkUserRolePendingFunds = () => this.session.userRole === userRoles.pendingFunds;

}
