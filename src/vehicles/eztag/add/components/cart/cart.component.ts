import { Component, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { VehiclesManagerService } from 'vehicles/shared';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { DialogService, ToasterService } from 'common/services';
import { VehicleCartBase } from 'vehicles/vehicleCartBase/vehicleCartBase';
import { State } from 'common/models';
import { IEZTag } from 'vehicles/interfaces';
import { AddTagFrameComponent } from '../frame/frame.component';

@Component({
    selector: 'vehicles-addTag-cart-component',
    templateUrl: './cart.html',
    styleUrls: ['./cart.less']
})
export class AddTagCartComponent extends VehicleCartBase implements OnInit {

    @Input() pageCms: SiteCoreItem;
    @Input() deleteModalCms: SiteCoreItem;
    @Input() editModalCms: SiteCoreItem;
    @Input() cancellationModal: SiteCoreItem;
    @Input() stateList: State[];

    public addVehicle: IEZTag;
    public addingAdditionalVehicle: boolean;

    constructor(
        private frame: AddTagFrameComponent,
        private state: StateService,
        private manager: VehiclesManagerService,
        private dialogService: DialogService,
        protected toasterService: ToasterService
    ) {
        super(toasterService);
    }

    ngOnInit() {
        this.frame.showStepper = true;

        this.addVehicle = {
            vehicleClassCode: 2,
            licState: 'TX'
        } as IEZTag;

        this.addingAdditionalVehicle = false;

        this.cartTags = this.manager.getVehicleInfoList();
    }

    public async addEzTagDeliveryMethodClick(nextState: StateDeclaration) {
        if (this.cartTags.length > 0) {
            await this.state.go(nextState);
        } else {
            this.toasterService.show('Error', 'Please add a vehicle');
        }
    }

    public removeVehicle(index: number) {
        this.manager.removeVehicleInfoItem(index);
    }

    public editVehicle(editVehicle: IEZTag, index: number) {
        const selectedEzTag: IEZTag = this.cartTags[index];

        //This check is to check that if the plate has changed; checks for both state and plate number against plates currently in the cart
        if (selectedEzTag.licPlate !== editVehicle.licPlate || selectedEzTag.licState !== editVehicle.licState) {
            if (!this.checkIfLicExistsInCart(editVehicle.licPlate, editVehicle.licState)) {
                this.manager.editVehicleInfoItem(editVehicle, index);
            }
        } else {
            this.manager.editVehicleInfoItem(editVehicle, index);
        }
    }

    public async addAdditionalVehicle() {

        const licExists = this.checkIfLicExistsInCart(this.addVehicle.licPlate, this.addVehicle.licState);

        if (licExists) {
            this.addingAdditionalVehicle = true;
        }
        else {
            await this.manager.setVehicleInfoItem(this.addVehicle);
            const list = this.manager.getVehicleInfoList();

            if (list.filter(li => li.licPlate === this.addVehicle.licPlate.toUpperCase()).length > 0) {
                this.addVehicle = {
                    vehicleClassCode: 2,
                    licState: 'TX'
                } as IEZTag;

                this.addingAdditionalVehicle = false;
            } else {
                this.addingAdditionalVehicle = true;
            }
        }

    }

    public resetAddAdditionalVehicle() {
        this.addVehicle = {
            vehicleClassCode: 2,
            licState: 'TX'
        } as IEZTag;
        this.addingAdditionalVehicle = !this.addingAdditionalVehicle;
    }

    public async cancel(state: StateDeclaration) {
        const data: GenericCmsModalInjectionValues = {
            cmsContent: {
                Title: this.cancellationModal.Title,
                PrimaryContent: this.cancellationModal.LongDescription,
                AcceptBtn: 'No',
                CancelBtn: 'Yes'
            }
        };

        const res = await this.dialogService.openGenericModal(GenericCmsModalComponent, data);

        if (!res) {
            this.manager.clearData();
            await this.state.go(state);
        }
    }

}
