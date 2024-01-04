import { Component, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { StepperStep } from 'common/ui';
import { hideTrigger } from 'animations/hide';
import { WindowRef } from 'common/providers';
import { wait } from 'common/utilities';
import { MissedATollService } from '../services';


interface FrameCmsData {
    Title: string;
    Step1: string;
    Step2: string;
    Step3: string;
    Step4: string;
}


@Component({
    selector: 'missed-a-toll-frame-component',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less'],
    animations: [hideTrigger]
})
export class FrameComponent implements OnInit, OnDestroy {

    constructor(
        private missedATollService: MissedATollService,
        @Inject(WindowRef) private windowRef: Window
    ) { }

    @Input() public cms: FrameCmsData;
    @Input() public stateList: { stateCode: string }[];
    @Input() public countryList: { countryCode: string; displayName: string }[];
    public steps: StepperStep[] = [];
    public stepNum = 0;

    public isHidden: boolean;
    public emailAddress: string;


    ngOnInit() {
        this.steps = [
            { name: this.cms.Step1, background: 'primary' },
            { name: this.cms.Step2, background: 'secondary' },
            { name: this.cms.Step3, background: 'secondary' },
            { name: this.cms.Step4 }
        ];
    }

    ngOnDestroy() {
        this.missedATollService.destroyViolationInformation();
    }

    public async scrollToTop() {
        this.isHidden = true;

        await wait(20);
        this.windowRef.scrollTo(0, 0);

        this.isHidden = false;
    }
}
