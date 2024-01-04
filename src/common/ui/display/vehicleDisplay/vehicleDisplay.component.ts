import { Component, Input, OnInit } from '@angular/core';

import { IVehicleInfo } from 'common/models';

type vehicleInfoProp = keyof IVehicleInfo;

@Component({
    selector: 'vehicle-display',
    templateUrl: './vehicleDisplay.html',
    styleUrls: ['./vehicleDisplay.less']
})
export class VehicleDisplayComponent implements OnInit {

    constructor() { }

    @Input() vehicleInfo: IVehicleInfo;
    @Input() isCompactView?: boolean;

    @Input() exclude?: (keyof IVehicleInfo)[];

    public excludeProp: Set<keyof IVehicleInfo>;

    ngOnInit() {

        if(this.vehicleInfo.vehicleClassDesc?.includes('43;')) {
            this.vehicleInfo.vehicleClassDesc = this.vehicleInfo.vehicleClassDesc.replace('43;', '+');
        }
        this.excludeProp = new Set<keyof IVehicleInfo>(this.exclude);
    }
        
}
