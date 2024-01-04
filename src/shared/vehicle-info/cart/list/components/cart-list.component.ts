import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITagOrderDesc, TagType } from 'common/models';
import { DialogContent, DialogService } from 'common/services';
import { EditVehicleInjectionValues, EditVehicleModalComponent } from 'common/ui';
import { Event, IEZTag, IVehicleConfig, IVehicleOperationEvent, IVehiclesCartList } from 'shared/vehicle-info/models';

@Component({
    selector: 'cart-list',
    templateUrl: 'cart-list.component.html',
    styleUrls: ['cart-list.component.less']
})

export class VehicleCartListComponent {
    @Input() data: IVehiclesCartList;
    @Input() tagOrderDesc: ITagOrderDesc;
    @Output() vehicleEvent$ = new EventEmitter<IVehicleOperationEvent>();
    addingAdditionalVehicle = false;

    constructor(private dialogService: DialogService) { }

    removeVehicle(index: number) {
        this.emitEvent(Event.Remove, { index });
    }

    editVehicle(vehicle: IEZTag, index: number) {
        this.emitEvent(Event.Edit, { vehicle, index });
    }

    async addAdditionalVehicle() {
        const newVehicle = this.initNewVehicle();
        const data = this.getAdditioanlVehicleDialogData(newVehicle);
        const result = await this.dialogService.openSliderCentered(EditVehicleModalComponent, data, { title: 'Add EZ Tag' } as DialogContent);
    
        if (result) {
            this.emitEvent(Event.Add, { vehicle: newVehicle });
        }
    }

    private initNewVehicle(): IEZTag {
        return {
            licState: 'TX',
            vehicleClassCode: 2,
            motorcycle: false,
            activePbpTagExist: false,
            isMotorcycleDisabled: true,
            tagTypeCode: TagType.Tag,
            acctTagSeq: -1
        } as IEZTag;
    }

    private getAdditioanlVehicleDialogData(vehicle: IEZTag): EditVehicleInjectionValues {
        const { states, modalContent, config } = this.data;
        const { add: { Title: vehicleInfoTitle, LongDescription: tempPlateInfo } } = modalContent;

        return {
            vehicleInfo: vehicle,
            modalCms: { vehicleInfoTitle, tempPlateInfo },
            stateList: states,
            plateIsReadOnly: false,
            motorcycleDisabled: false,
            config: this.getConfig(config)
        };
    }

    private getConfig(config: IVehicleConfig) {
        if (config?.ezTagOptionConfig?.ezTagOrder) {
            config.ezTagOptionConfig.ezTagOrder.flag = true;
        }
        return config ?? null;
    }

    private emitEvent(eventName: Event, data: object) {
        this.vehicleEvent$.emit({
            name: eventName,
            data
        });
    }
}
