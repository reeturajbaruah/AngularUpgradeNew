import { Component, Input, OnInit, Inject } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { StateConfig } from 'common/interfaces';
import { stateNames as violationStates } from 'violations/constants';
import { stateNames as frp3States } from 'frp3/constants';
import { FrameComponent } from '../frame/frame.component';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { EOViolationPlateContainer } from 'frp3/interfaces';

interface LandingPageCmsData {
    Title: string;
    ShortDescription: string;
    LongDescription: string;
    subHeader: string;
}

@Component({
    selector: 'cavve-offer-component',
    templateUrl: './offer.html',
    styleUrls: ['./offer.less']
})
export class OfferComponent implements OnInit {

    constructor(
        private parent: FrameComponent,
        private state: StateService,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    @Input() public landingPageInfo: LandingPageCmsData;
    public plateContainer: EOViolationPlateContainer;

    public subHeaderParams = {};

    public choiceSelected = '';

    ngOnInit() {

        this.parent.setFrameTitle(this.landingPageInfo.Title);
        this.parent.stepNum = 0;

        this.plateContainer = this.parent.getPlateContainer();

        this.subHeaderParams = {
            plateInfo: this.plateContainer.plate.licenseState + ' ' + this.plateContainer.plate.licensePlate
        };

    }

    onOfferButtonSelectionChanged(btnChoiceSelected: string) {
        this.choiceSelected = btnChoiceSelected;
    }

    public goToGridPage() {
        return this.state.go(this.environmentConfig.isMergeMATandVioOn ? frp3States.Grid : violationStates.Grid, {}, { custom: { isExplicitlyAllowedTransition: true } });
    }

    public async goToNextPage(nextState: StateConfig) {
        if (this.choiceSelected === 'yes') {
            await this.state.go(nextState);
        }
        else
            {this.goToGridPage();}
    }

    public async previous(prevState: StateConfig) {
        await this.state.go(this.environmentConfig.isMergeMATandVioOn ? frp3States.Landing : prevState, { custom: { isExplicitlyAllowedTransition: true } });

    }

}
