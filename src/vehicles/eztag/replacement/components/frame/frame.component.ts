import { Component, Inject, OnInit } from '@angular/core';
import { WindowRef } from 'common/providers';
import { StepperStep } from 'common/ui';
import { wait } from 'common/utilities';
import { States } from 'vehicles/eztag/replacement/states';

type StepKeyValue = { [key: string]: number };

@Component({
    selector: 'vehicles-replacement-frame',
    templateUrl: './frame.component.html',
    styleUrls: ['./frame.component.less']
})
export class FrameComponent implements OnInit {

    steps: StepperStep[] = [];
    stepMap: StepKeyValue = {};

    constructor(
        @Inject(WindowRef) private windowRef: Window
    ) { }


    public isHidden: boolean;

    showStepper = false;

    async ngOnInit() {

        this.showStepper = true;

        //todo get steps from sitecore
        this.steps = [
            { name: 'Delivery Method', background: 'secondary' },
            { name: 'Review Order', background: 'secondary' },
            { name: 'Receipt', background: 'secondary' },

        ];

        this.stepMap = {
            [States.ReplacementDeliveryMethod]: 1,
            [States.ReplacementReviewOrder]: 2,
            [States.ReplacementReceipt]: 3

        };
    }

    async scrollToTop() {
        this.isHidden = true;

        await wait(20);
        this.windowRef.scrollTo(0, 0);

        this.isHidden = false;
    }

}
