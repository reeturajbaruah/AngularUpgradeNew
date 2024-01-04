import { Component, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { State } from 'common/models';
import { ResponseErrorService } from 'common/services';
import { IEZTag } from 'vehicles/interfaces';
import { VehiclesManagerService } from 'vehicles/shared';
import { IAddTagVehicleInfoCMSContent } from 'vehicles/shared';
import { AddTagFrameComponent } from '../frame/frame.component';

@Component({
    selector: 'vehicles-addTag-information-component',
    templateUrl: './vehicleInformation.html',
    styleUrls: ['./vehicleInformation.less']
})
export class AddTagVehicleInformationComponent implements OnInit {

    @Input() statesList: State[] = [];

    public vehicleInfo: IEZTag = {
        licState: 'TX',
        vehicleClassCode: 2,
        motorcycle: false,
        temporaryLicPlate: null,
        acctTagSeq: 0,
        acctTagSeqSepcified: false,
        acctTagStatus: null,
        acctVehicleId: 0,
        activePbpTagExist: false,
        fullTagId: null,
        isMotorcycleDisabled: true,
        licPlate: null,
        nickname: null,
        nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
        pbpEndDate: null,
        pbpStartDate: null,
        tagId: null,
        tagless_Desc: null,
        tagStatusDesc: null,
        tagTypeCode: 'T',
        vehicleClassDesc: null,
        vehicleColor: null,
        vehicleMake: null,
        vehicleModel: null,
        vehicleYear: null
    };

    constructor(
        private frame: AddTagFrameComponent,
        private state: StateService,
        private responseErrorService: ResponseErrorService,
        private manager: VehiclesManagerService
    ) { }

    @Input() public cmsAddTagVehicleInfo: IAddTagVehicleInfoCMSContent;
    @Input() public usStates: State[];

    async ngOnInit() {
        this.frame.showStepper = true;
    }

    public async cancel(state: StateDeclaration) {

        await this.state.go(state);
    }

    public async nextStep(state: StateDeclaration) {

        await this.manager.setVehicleInfoItem(this.vehicleInfo);
        if (this.manager.getVehicleInfoList().length > 0) {
            await this.state.go(state);
        }
    }
}
