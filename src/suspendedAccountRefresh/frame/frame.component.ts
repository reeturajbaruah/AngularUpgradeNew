import {
    Component, Inject, Input, OnInit
} from '@angular/core';

import { WindowRef } from 'common/providers';
import { wait } from 'common/utilities';
import { hideTrigger } from 'animations/hide';

import { stateNames } from '../constants';
import { StepperStep } from 'common/ui';
import { BillingInfo } from 'common/models';

interface IFrameCmsContent {
    requiredPaymentStep: string;
    paymentStep: string;
    confirmStep: string;
    receiptStep: string;
}

type StepKeyValue = { [key: string]: number };

@Component({
    selector: 'suspended-frame-component',
    templateUrl: './frame.component.html',
    styleUrls: ['./frame.component.less'],
    animations: [hideTrigger]
})
export class FrameComponent implements OnInit {

    constructor(
        @Inject(WindowRef) private windowRef: Window
    ) { }

    @Input() baseCmsContent: IFrameCmsContent;
    @Input() hasViolations: boolean;

    public showTitleBanner: boolean;
    public showStepper: boolean;
    public title: string;
    public bannerContent: string;

    public steps: StepperStep[] = [];
    public stepMap: StepKeyValue = {};

    public isHidden: boolean;

    requiredPaymentAmt: number;

    ngOnInit() {
        if (this.hasViolations) {

            this.steps = [
                { name: this.baseCmsContent.paymentStep, background: 'secondary' },
                { name: this.baseCmsContent.confirmStep, background: 'secondary' },
                { name: this.baseCmsContent.receiptStep, background: 'secondary' }
            ];

            this.stepMap = {
                [stateNames.Payment]: 1,
                [stateNames.Confirm]: 2,
                [stateNames.Receipt]: 3
            };

        } else {

            this.steps = [
                { name: this.baseCmsContent.requiredPaymentStep, background: 'secondary' },
                { name: this.baseCmsContent.paymentStep, background: 'secondary' },
                { name: this.baseCmsContent.confirmStep, background: 'secondary' },
                { name: this.baseCmsContent.receiptStep, background: 'secondary' }
            ];

            this.stepMap = {
                [stateNames.RequiredPayment]: 1,
                [stateNames.Payment]: 2,
                [stateNames.Confirm]: 3,
                [stateNames.Receipt]: 4
            };
        }
    }

    public async scrollToTop(options: { wait: boolean; fade: boolean } = { wait: true, fade: true }) {

        if (options.fade) {
            this.isHidden = true;
        }

        if (options.wait) {
            await wait(20);
        }

        this.windowRef.scrollTo(0, 0);

        if (options.fade) {
            this.isHidden = false;
        }
    }

    public getDate(): Date {
        return new Date();
    }
}
