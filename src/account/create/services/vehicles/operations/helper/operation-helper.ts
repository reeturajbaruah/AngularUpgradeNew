import { Injectable } from '@angular/core';
import { Prop } from 'account/create/models/current-step.model';
import { StoreService } from 'account/create/services/store/store.service';
import { ToasterService } from 'common/services';
import { IEZTag } from 'shared/vehicle-info';
import { VehicleOperationService } from '../service/vehicle-operation-service';

@Injectable()
export class VehiclesOperationHelper {

    constructor(private opsService: VehicleOperationService,
        private toasterService: ToasterService,
        private store: StoreService) {

    }

    async edit(newVehicle: IEZTag, index: number, vehiclesList: IEZTag[], errorMsg?: string) {

        if (index > -1) {

            const oldVehicle = vehiclesList[index];

            if (newVehicle.licPlate?.toUpperCase() !== oldVehicle.licPlate?.toUpperCase() ||
                newVehicle.licState?.toUpperCase() !== oldVehicle.licState?.toUpperCase()) {

                const vehicleExists = vehiclesList.filter(v =>
                    v.licPlate?.toUpperCase() === newVehicle.licPlate?.toUpperCase() &&
                    v.licState?.toUpperCase() === newVehicle.licState?.toUpperCase()
                    );
                    
                if (vehicleExists.length > 0) {
                    this.toasterService.show('Error', errorMsg);
                } else {
                    const res = await this.opsService.edit(newVehicle);
                    if (res) {
                        vehiclesList[index] = res;
                        this.store.dispatch(Prop.Vehicles, vehiclesList);
                    }

                }
            } else {
                const res = await this.opsService.edit(newVehicle);
                if (res) {
                    vehiclesList[index] = res;
                    this.store.dispatch(Prop.Vehicles, vehiclesList);

                }
            }
        }

    }

    async remove(index: number, vehiclesList: IEZTag[]) {
        if (index > -1) {
            const vehicleToRemove = vehiclesList[index];
            //const index = this.vehicles.indexOf(vehicle);

            const res = await this.opsService.delete(vehicleToRemove);
            if (res) {
                vehiclesList.splice(index, 1);
                this.store.dispatch(Prop.Vehicles, vehiclesList);
                return res;
            }
        }

    }

}

