import { Component, Input, OnInit } from '@angular/core';
import { State } from 'common/models';
import { IVehicleConfig, IEZTag } from '../../models';

import { IAddTagVehicleInfoCMSContent } from '../models/model';

@Component({
    selector: 'add-vehicle',
    templateUrl: 'add-vehicle.component.html',
    styleUrls: ['add-vehicle.component.less']
})
export class AddVehicleComponent {

    @Input() cmsContent: IAddTagVehicleInfoCMSContent;
    @Input() vehicleInfo: IEZTag;
    @Input() statesList: State[];
    @Input() config?: IVehicleConfig;

    nextStep(event) {

    }


}


