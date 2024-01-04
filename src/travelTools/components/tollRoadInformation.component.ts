import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { TravelToolsCmsIds, TravelToolsStateNames } from '../travelTools.constants';

@Component({
    selector: 'toll-road-information',
    templateUrl: './tollRoadInformation.component.html',
    styleUrls: ['tollRoadInformation.component.less']
})
export class TollRoadInformationComponent implements OnInit {

    currentTab: string;
    id: string;

    constructor(private state: StateService) {
    }

    async ngOnInit() {
        if (this.state.current) {
            this.currentTab = this.state.current.name;
        } else {
            await this.state.go(TravelToolsStateNames.TollRoadInformation);
            this.currentTab = 'TollRoadInformation';
        }
    }

    getCurrentCMSPage() {
        if (this.currentTab === 'TollRoadInformation') {
            return TravelToolsCmsIds.TollRoadInformationPage;
        }
        if (this.currentTab === 'LaneTypes') {
            return TravelToolsCmsIds.LaneTypesPage;
        }
    }

    async goToTollRoadInformation() {
        await this.state.go(TravelToolsStateNames.TollRoadInformation);
    }

    async goToLaneTypes() {
        await this.state.go(TravelToolsStateNames.LaneTypes);
    }
}
