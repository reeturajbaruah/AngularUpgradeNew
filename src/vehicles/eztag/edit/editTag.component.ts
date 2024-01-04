import { Component } from '@angular/core';
import { State } from 'common/models';
import { DialogRef } from 'common/services';
import { IEZTag } from 'vehicles/interfaces';
import { IAddTagVehicleInfoCMSContent, IEditTagCmsContent, IEditTagInjectedValues } from 'vehicles/shared';


@Component({
    selector: 'vehicles-edit-tag',
    templateUrl: './editTag.html',
    styleUrls: ['./editTag.less']
})
export class EditTagComponent {

    public get tag(): IEZTag {
        return this.dialogRef.data.tag;
    }

    public get showStatus(): boolean {
        return this.dialogRef.data.showStatus;
    }

    public get usStates(): State[] {
        return this.dialogRef.data.statesList;
    }

    public get editVehicleCmsContent(): any {
        return this.dialogRef.data.cmsAddTagVehicleInfo;
    }

    public get cmsModalContent(): IEditTagCmsContent {
        return this.dialogRef.data.cmsModalValues;
    }

    public get isActive(): boolean {
        return this.dialogRef.data.tag.acctTagStatus === 'A';
    }

    constructor(
       private dialogRef: DialogRef<IEditTagInjectedValues>,
    ) { }

    public exitModal(save: boolean) {
        this.dialogRef.data.saveTag = save;
        this.dialogRef.close(this.dialogRef.data);
    }
}

