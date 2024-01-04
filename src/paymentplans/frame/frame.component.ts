import { Component, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { hideTrigger } from 'animations/hide';
import { wait } from 'common/utilities';
import { WindowRef } from 'common/providers';
import { StepperStep } from 'common/ui';
import { PlateDataService, PaymentPlanData, StateService } from '../services';



import {
    IMailingInfo
} from 'common/models';

interface FrameCmsData {
    Title: string;
    Step1: string;
    Step2: string;
    Step3: string;
    Step4: string;
}


@Component({
    selector: 'payment-plans-frame-component',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less'],
    animations: [hideTrigger]
})
export class FrameComponent implements OnInit, OnDestroy {

    constructor(
        private paymentPlansStateService: StateService,
        private plateDataService: PlateDataService,
        @Inject(WindowRef) private windowRef: Window) {
    }

    public Title: string;
    public planData: PaymentPlanData;

    @Input() isEzTagFlow: boolean;
    @Input() cmsBaseContent: FrameCmsData;

    public steps: StepperStep[] = [];
    public stepNum = 0;
    public isHidden: boolean;

    private eftMailingInfo = new Map<number, IMailingInfo>();

    ngOnInit() {
        this.isEzTagFlow = this.isEzTagFlow;
        this.planData = this.plateDataService.getPlanDataInfo(this.isEzTagFlow);
        this.Title = this.cmsBaseContent.Title;       

        this.steps = [
            { name: this.cmsBaseContent.Step1, background: 'primary' },
            { name: this.cmsBaseContent.Step2, background: 'secondary' },
            { name: this.cmsBaseContent.Step3, background: 'secondary' },
            { name: this.cmsBaseContent.Step4 }
        ];

        const eftCachedAddressInfo = this.paymentPlansStateService.getCachedEftAddressInfo() || {};
        this.eftMailingInfo.clear();
        Object.keys(eftCachedAddressInfo).forEach(key => {
            this.eftMailingInfo.set(+key, eftCachedAddressInfo[key]);
        });        
    }

    ngOnDestroy() {
        this.paymentPlansStateService.destroyPaymentPlansCurrentStep(this.isEzTagFlow);
        this.eftMailingInfo.clear();
    }

    getCachedEftMailingInfo(accountBillingMethodId: number) {
        return this.eftMailingInfo.get(accountBillingMethodId);
    }

    setCachedEftMailingInfo(accountBillingMethodId: number, mailingInfo: IMailingInfo) {
        this.eftMailingInfo.set(accountBillingMethodId, mailingInfo);

        const cache = [...this.eftMailingInfo.entries()]
            .reduce((acc, v) => ({...acc, [v[0]]: v[1] }), {});

        this.paymentPlansStateService.setCachedEftAddressInfo(cache);
    }

    public async scrollToTop() {
        this.isHidden = true;

        await wait(20);
        this.windowRef.scrollTo(0, 0);

        this.isHidden = false;
    }
}
