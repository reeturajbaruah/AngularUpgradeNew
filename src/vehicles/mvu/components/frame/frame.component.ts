import { Component, Inject, Input, OnInit } from '@angular/core';
import { Country, State } from 'common/models';
import { WindowRef } from 'common/providers';
import { StepperStep } from 'common/ui';
import { wait } from 'common/utilities';
import { IMvuFrameCmsContent } from 'vehicles/interfaces';
import { VehiclesManagerService } from 'vehicles/shared';
import { States as stateNames } from '../../states';

type StepKeyValue = { [key: string]: number };

@Component({
    selector: 'vehicles-mvu-frame',
    templateUrl: './frame.component.html',
    styleUrls: ['./frame.component.less']
})
export class MvuFrameComponent implements OnInit {

    steps: StepperStep[] = [];
    stepMap: StepKeyValue = {};
    showStepper = true;
    isHidden: boolean;

    @Input() cmsMvuFrame: IMvuFrameCmsContent;
    @Input() stateList: State[];
    @Input() countryList: Country[];

    constructor(
        private vehiclesManagerService: VehiclesManagerService,
        @Inject(WindowRef) private windowRef: Window
    ) { }

    async ngOnInit() {
        this.vehiclesManagerService.clearData();

        this.steps = [
            { name: this.cmsMvuFrame.step1, background: 'secondary' },
            { name: this.cmsMvuFrame.step2, background: 'secondary' },
            { name: this.cmsMvuFrame.step3, background: 'secondary' },
            { name: this.cmsMvuFrame.step4, background: 'secondary' }
        ];

        this.stepMap = {
            [stateNames.MvuUpload]: 1,
            [stateNames.MvuDeliveryMethod]: 2,
            [stateNames.MvuReviewOrder]: 3,
            [stateNames.MvuReceipt]: 4
        };
    }

    async scrollToTop() {
        this.isHidden = true;

        await wait(20);
        this.windowRef.scrollTo(0, 0);

        this.isHidden = false;
    }
}
