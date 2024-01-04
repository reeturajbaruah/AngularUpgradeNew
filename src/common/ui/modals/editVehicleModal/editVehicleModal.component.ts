import {
    Component
} from '@angular/core';

import { DialogRef } from 'common/services';

import { IVehicleInfo, State } from 'common/models';

import { IModalCmsContent } from 'common/ui/form-entry/vehicleInfo/vehicleInfo.component';
import { IVehicleConfig } from 'shared/vehicle-info';

export interface EditModalCmsContent extends IModalCmsContent {
    vehicleInfoTitle: string;
    vehicleToolTipEditButton?: string;
}

export interface EditVehicleInjectionValues {
    vehicleInfo: IVehicleInfo;
    modalCms: EditModalCmsContent;
    stateList: State[];
    plateIsReadOnly: boolean;
    motorcycleDisabled: boolean;
    config?: IVehicleConfig;
}

@Component({
    selector: 'cavve-edit-vehicle-modal', // TODO: should probably be renamed if this component is meant to stay in the common folder
    templateUrl: './editVehicleModal.html',
    styleUrls: ['./editVehicleModal.less']
})
export class EditVehicleModalComponent {
    constructor(
        private dialogRef: DialogRef<EditVehicleInjectionValues>,
    ) {
        this.vehicleInfo = dialogRef.data.vehicleInfo;
        this.stateList = dialogRef.data.stateList;
        this.modalCms = dialogRef.data.modalCms;
        this.plateIsReadOnly = dialogRef.data.plateIsReadOnly;
        this.motorcycleDisabled = dialogRef.data.motorcycleDisabled;
        this.config = dialogRef.data.config;
    }

    public vehicleInfo: IVehicleInfo;
    public stateList: State[];
    public modalCms: { [key: string]: any };
    public plateIsReadOnly: boolean;
    public motorcycleDisabled: boolean;
    config?: IVehicleConfig;

    public submit() {
        this.dialogRef.close(this.dialogRef.data);
    }

    public cancel() {
        this.dialogRef.close();
    }
}

