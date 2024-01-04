import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IEZTag, IEditPlateInjectedValues } from '../../../interfaces';
import { SiteCoreItem } from 'cms/cms.module';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues, EditVehicleModalComponent, EditVehicleInjectionValues } from 'common/ui';
import { DialogContent, DialogService } from 'common/services';
import { CmsReplacementService } from 'cms/services';
import { cloneDeep } from 'common/utilities';
import { State } from 'common/models';
import * as moment from 'moment';
import { EditPlateComponent } from 'vehicles/ezplate/edit/editPlate.component';

@Component({
    selector: 'vehicle-cart-row-component',
    templateUrl: './vehicleCartRow.html',
    styleUrls: ['./vehicleCartRow.less']
})
export class VehicleCartRowComponent implements OnInit {

    @Input() ezTag: IEZTag;

    @Output() removeVehicle = new EventEmitter();
    @Output() editVehicle = new EventEmitter<IEZTag>();

    @Input() deleteModalCms: SiteCoreItem;
    @Input() editModalCms: SiteCoreItem;
    @Input() stateList: State[];
    @Input() canRemove = true;
    @Input() canEdit = true;
    @Input() isPlate = false;

    public numberOfDays: number;
    public pbpStartDate: string;
    public pbpEndDate: string;

    //   @Input() operations: IOperation[];
    //   @Output() event$=new EventEmitter();

    constructor(
        private dialogService: DialogService,
        private cmsReplacementService: CmsReplacementService
    ) { }

    public ngOnInit() {
        if (this.isPlate) {
            this.calculateDaysBetween();
        }
    }

    //     onClickOperation(op:IOperation){
    //         if(op.action===Action.Edit){
    //         this.editModalCms=op.onClickContent;
    //         this.edit();
    //         //if 
    //         this.event$.emit({
    // action:Action.Edit,

    //         } as IEvent)
    //         }

    //         if(op.action===Action.Remove){
    //             this.deleteModalCms=op.onClickContent;
    //             this.remove();

    //         }
    //             }

    public async remove() {
        const insertValues = {
            licState: this.ezTag.licState,
            licPlate: this.ezTag.licPlate
        };
        const modalContext = this.cmsReplacementService.transformTemplate(this.deleteModalCms.LongDescription, insertValues);

        const data = {
            cmsContent: {
                Title: this.deleteModalCms.Title,
                PrimaryContent: modalContext,
                AcceptBtn: 'DELETE TAG',
                CancelBtn: 'Cancel'
            }
        } as GenericCmsModalInjectionValues;

        await this.dialogService.openGenericModal(GenericCmsModalComponent, data).then((result) => {
            if (result) {
                this.removeVehicle.emit();
            }
        });
    }

    public edit() {

        if (this.isPlate) {
            const data: IEditPlateInjectedValues = {
                plate: cloneDeep(this.ezTag),
                cmsContent: this.editModalCms,
                statesList: this.stateList,
                showStatus: false,
                savePlate: false,
                header: this.editModalCms.Title,
                status: {} as any
            };

            this.dialogService.openSliderCentered(
                EditPlateComponent, data, { title: 'Edit EZ Plate' } as DialogContent)
                .then((result) => {
                    if (result) {
                        this.editVehicle.emit(result.plate);

                        this.ezTag = result.plate;

                        const startDateTime = new Date(result.plate.pbpStartDate);
                        const endDateTime = new Date(result.plate.pbpEndDate);

                        this.pbpStartDate = startDateTime.toLocaleDateString() + ' ' + moment(startDateTime).format('hh:mm A');
                        this.pbpEndDate = endDateTime.toLocaleDateString() + ' ' + moment(endDateTime).format('hh:mm A');

                        const timeInMilisec = endDateTime.getTime() - startDateTime.getTime() + 60000;
                        this.numberOfDays = Math.floor(timeInMilisec / 1000 / 60 / 60 / 24);
                    }

                });
        }

        else {
            const data: EditVehicleInjectionValues = {
                vehicleInfo: cloneDeep(this.ezTag),
                modalCms: {
                    vehicleInfoTitle: this.editModalCms.Title,
                    tempPlateInfo: this.editModalCms.LongDescription
                },
                stateList: this.stateList,
                plateIsReadOnly: false,
                motorcycleDisabled: false
            };

            this.dialogService.openSliderCentered(
                EditVehicleModalComponent, data, { title: 'Edit EZ Tag' } as DialogContent)
                .then((result) => {
                    if (result) {
                         this.editVehicle.emit(result.vehicleInfo as IEZTag);
                    }
                });
        }
    }

    private calculateDaysBetween() {
        const startDateTime = new Date(this.ezTag.pbpStartDate);
        const endDateTime = new Date(this.ezTag.pbpEndDate);

        this.pbpStartDate = startDateTime.toLocaleDateString() + ' ' + moment(startDateTime).format('hh:mm A');
        this.pbpEndDate = endDateTime.toLocaleDateString() + ' ' + moment(endDateTime).format('hh:mm A');

        const timeInMilisec = endDateTime.getTime() - startDateTime.getTime() + 60000;
        this.numberOfDays = Math.floor(timeInMilisec / 1000 / 60 / 60 / 24);

    }


}
