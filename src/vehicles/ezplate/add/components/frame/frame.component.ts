import { Component, Input, Inject, OnInit } from '@angular/core';
import { State, Country } from 'common/models';
import { WindowRef } from 'common/providers';
import { StepperStep } from 'common/ui/wizard/stepper/stepper.component';
import { wait } from 'common/utilities';
import {
    IAddPlateFrameCmsContent
} from 'vehicles/interfaces';
import { VehiclesManagerService } from 'vehicles/shared';
import { States as stateNames } from '../../states';

type StepKeyValue = { [key: string]: number };


@Component({
    selector: 'vehicles-addPlate-frame',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less']
})
export class AddPlateFrameComponent implements OnInit {

    constructor(
        private vehiclesManagerService: VehiclesManagerService,
        @Inject(WindowRef) private windowRef: Window
    ) { }

    @Input() cmsAddPlateFrame: IAddPlateFrameCmsContent;
    @Input() stateList: State[];
    @Input() countryList: Country[];

    public isHidden: boolean;
    public steps: StepperStep[] = [];
    public stepMap: StepKeyValue = {};

    showStepper = false;

    async ngOnInit() {
        this.vehiclesManagerService.clearData();

        this.steps = [
            { name: this.cmsAddPlateFrame.step1, background: 'secondary' },
            { name: this.cmsAddPlateFrame.step2, background: 'secondary' },
            { name: this.cmsAddPlateFrame.step3, background: 'secondary' }
        ];

        this.stepMap = {
            [stateNames.PlateVehicleInformation]: 1,
            [stateNames.PlateReviewOrder]: 2,
            [stateNames.PlateReceipt]: 3
        };
    }

    public async scrollToTop() {
        this.isHidden = true;

        await wait(20);
        this.windowRef.scrollTo(0, 0);

        this.isHidden = false;
    }

}
