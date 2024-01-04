import { Component, Input, Inject, OnInit } from '@angular/core';
import { State, Country } from 'common/models';
import { WindowRef } from 'common/providers';
import { StepperStep } from 'common/ui';
import { wait } from 'common/utilities';
import { IAddTagFrameCmsContent } from 'vehicles/interfaces';
import { VehiclesManagerService } from 'vehicles/shared';

// import { stateNames } from '../constants';
import { States as stateNames } from '../../states';

type StepKeyValue = { [key: string]: number };


@Component({
    selector: 'vehicles-addTag-frame',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less']
})
export class AddTagFrameComponent implements OnInit {

    public steps: StepperStep[] = [];
    public stepMap: StepKeyValue = {};

    constructor(
        private vehiclesManagerService: VehiclesManagerService,
        @Inject(WindowRef) private windowRef: Window
    ) { }

    @Input() cmsAddTagFrame: IAddTagFrameCmsContent;
    @Input() stateList: State[];
    @Input() countryList: Country[];

    public isHidden: boolean;

    showStepper = false;

    async ngOnInit() {
        this.vehiclesManagerService.clearData();

        this.steps = [
            { name: this.cmsAddTagFrame.step1, background: 'secondary' },
            { name: this.cmsAddTagFrame.step2, background: 'secondary' },
            { name: this.cmsAddTagFrame.step3, background: 'secondary' },
            { name: this.cmsAddTagFrame.step4, background: 'secondary' },
            { name: this.cmsAddTagFrame.step5, background: 'secondary' }

        ];

        this.stepMap = {
            [stateNames.TagVehicleInformation]: 1,
            [stateNames.TagCart]: 2,
            [stateNames.TagDeliveryMethod]: 3,
            [stateNames.TagReviewOrder]: 4,
            [stateNames.TagReceipt]: 5

        };

    }

    public async scrollToTop() {
        this.isHidden = true;

        await wait(20);
        this.windowRef.scrollTo(0, 0);

        this.isHidden = false;
    }
}
