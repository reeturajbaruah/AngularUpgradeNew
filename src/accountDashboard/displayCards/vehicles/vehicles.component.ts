import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { isEmpty } from 'lodash';
import { stateNames } from 'constants/module';
import { UrlPaths } from 'constants/routes.constants';
import {
    AccountDashboardService,
    GetVehiclesDataResponse,
    SimpleEzPlate,
    SimpleEzTag
} from '../../services';

import { States as SharedStates } from 'vehicles/shared';

@Component({
    selector: 'account-dashboard-vehicles-component',
    templateUrl: './vehicles.html',
    styleUrls: ['../displayCards.less', './vehicles.less']
})
export class VehiclesComponent implements OnInit {

    @Input() vehiclesTitle: string;

    @Input() ezTagsNoDataTitle: string;
    @Input() ezPlatesNoDataTitle: string;
    @Input() ezTagsSelected: boolean;
    @Input() ezPlatesSelected: boolean;
    @Input() pendingActivationCMS: string;

    @Input() isPendingClosure: boolean;

    public noData: boolean;

    public ezTags: SimpleEzTag[];
    public ezPlates: SimpleEzPlate[];

    public displayedEzTags: number;
    public displayedEzPlates: number;

    public totalEzTags: number;
    public totalEzPlates: number;

    constructor(
        private accountDashboardService: AccountDashboardService,
        private state: StateService,
        private routes: UrlPaths
    ) { }

    async ngOnInit() {
        await this.getVehiclesData();
    }

    public async getVehiclesData() {

        const response: GetVehiclesDataResponse = await this.accountDashboardService.getVehiclesData();

        this.ezTags = response.vehicleData.ezTags.slice(0, 3);
        this.ezPlates = response.vehicleData.ezPlates.slice(0, 3);
        this.totalEzTags = response.vehicleData.totalEzTagCount;
        this.totalEzPlates = response.vehicleData.totalEzPlateCount;
        this.displayedEzTags = response.vehicleData.ezTags.length > 3 ? 3 : response.vehicleData.ezTags.length;
        this.displayedEzPlates = response.vehicleData.ezPlates.length > 3 ? 3 : response.vehicleData.ezPlates.length;

        if (!isEmpty(this.ezTags)) {
            this.ezTagsSelected = true;
            this.ezPlatesSelected = false;
            this.noData = false;
        }
        else if (!isEmpty(this.ezPlates)) {
            this.ezTagsSelected = false;
            this.ezPlatesSelected = true;
            this.noData = false;
        }
        else {
            this.ezTagsSelected = true;
            this.ezPlatesSelected = false;
            this.noData = true;
        }
    }

    public async viewVehiclesClick() {

        await this.state.go(SharedStates.Root);
    }

    public async pendingActivationClick() {
        await this.state.go(stateNames.activateEzTag);
    }

    public tagClick() {
        this.ezTagsSelected = true;
        this.ezPlatesSelected = false;

        this.noData = isEmpty(this.ezTags) ? true : false;
    }

    public plateClick() {
        this.ezTagsSelected = false;
        this.ezPlatesSelected = true;

        this.noData = isEmpty(this.ezPlates) ? true : false;
    }
}
