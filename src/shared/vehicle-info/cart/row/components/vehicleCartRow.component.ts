import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues, EditVehicleModalComponent, EditVehicleInjectionValues, EditModalCmsContent } from 'common/ui';
import { DialogContent, DialogService } from 'common/services';
import { CmsReplacementService } from 'cms/services';
import { ITagOrderDesc, State, TagType } from 'common/models';
import { cloneDeep } from 'lodash';
import * as moment from 'moment';
import { IEditPlateInjectedValues, IEZTag, IVehicleConfig } from 'shared/vehicle-info/models';
import { EditPlateComponent } from 'vehicles/ezplate/edit/editPlate.component';

@Component({
    selector: 'vehicle-cart-row-component',
    templateUrl: './vehicleCartRow.html',
    styleUrls: ['./vehicleCartRow.less']
})

export class VehicleCartRowComponent implements OnInit {
    @Input() ezTag: IEZTag;
    @Input() deleteModalCms: SiteCoreItem;
    @Input() editModalCms: SiteCoreItem;
    @Input() stateList: State[];
    @Input() canRemove = true;
    @Input() canEdit = true;
    @Input() isPlate = false;
    @Input() tagOrderDesc: ITagOrderDesc;
    @Input() config?: IVehicleConfig;

    @Output() removeVehicle = new EventEmitter();
    @Output() editVehicle = new EventEmitter<IEZTag>();

    numberOfDays: number;
    pbpStartDate: string;
    pbpEndDate: string;
    private ezTagOrderConfig: any;

    constructor(private dialogService: DialogService, private cmsReplacementService: CmsReplacementService) { }

    public ngOnInit() {
        if (this.isPlate) {
            this.calculateDaysBetween(this.ezTag.pbpStartDate, this.ezTag.pbpEndDate);
        }
        this.ezTagOrderConfig = this.config?.ezTagOptionConfig?.ezTagOrder;
    }

    public async remove() {
        const dialogData = this.getRemoveDialogData();
        const result = await this.dialogService.openGenericModal(GenericCmsModalComponent, dialogData);

        if (result) {
            this.ezTag.acctTagSeq = this.ezTag.acctVehicleId;
            this.removeVehicle.emit();
        }
    }

    public async edit() {
        const component = this.isPlate ? EditPlateComponent : EditVehicleModalComponent;
        const dialogData = this.isPlate ? this.getEditPlateDialogData() : this.getEditTagDialogData();

        if (this.editModalCms || this.isPlate) {
            await this.openEditModal(component, dialogData);
        }
        else {
            this.editVehicle.emit(this.ezTag);
        }
    }

    private getRemoveDialogData(): GenericCmsModalInjectionValues {
        const primaryContent = this.cmsReplacementService.transformTemplate(this.deleteModalCms.LongDescription, this.ezTag);
        return {
            cmsContent: {
                Title: this.deleteModalCms.Title,
                PrimaryContent: primaryContent,
                AcceptBtn: 'DELETE TAG',
                CancelBtn: 'Cancel'
            }
        };
    }

    private getEditPlateDialogData(): IEditPlateInjectedValues {
        return {
            plate: cloneDeep(this.ezTag),
            cmsContent: this.editModalCms,
            statesList: this.stateList,
            showStatus: false,
            savePlate: false,
            header: this.editModalCms.Title,
            status: {} as any
        };
    }

    private getEditTagDialogData(): EditVehicleInjectionValues {
        return {
            vehicleInfo: cloneDeep(this.ezTag),
            modalCms: this.getEditTagModalCms(),
            stateList: this.stateList,
            plateIsReadOnly: false,
            motorcycleDisabled: false,
            config: this.getConfig()
        };
    }

    private getEditTagModalCms(): EditModalCmsContent {
        return {
            vehicleInfoTitle: this.editModalCms?.Title,
            tempPlateInfo: this.editModalCms?.LongDescription,
            tagOrdered: this.tagOrderDesc?.tagOrdered,
            tagNotOrdered: this.tagOrderDesc?.tagNotOrdered
        };
    }

    private getConfig(): IVehicleConfig {
        if (this.ezTagOrderConfig) {
            this.config.ezTagOptionConfig.ezTagOrder.flag = this.ezTag.tagId !== TagType.NoTag;
        }
        return this.config;
    }

    private async openEditModal(component: any, dialogData: any) {
        const result = await this.dialogService.openSliderCentered(component, dialogData, { title: this.editModalCms.AltTitle } as DialogContent);
        if (result) {
            this.handleEditResult(this.isPlate ? result.plate : result.vehicleInfo);
        }
    }

    private handleEditResult(vehicle: any) {
        vehicle.acctTagSeq = vehicle.acctVehicleId;

        if (this.isPlate) {
            this.ezTag = vehicle;
            this.calculateDaysBetween(vehicle.pbpStartDate, vehicle.pbpEndDate);
        }
        else {
            this.setVehicleTagInfo(vehicle);
        }

        this.editVehicle.emit(vehicle);
    }

    private setVehicleTagInfo(vehicle: IEZTag) {
        if (this.ezTagOrderConfig) {
            const tagValue = this.config.ezTagOptionConfig.ezTagOrder.flag ? TagType.Tag : TagType.NoTag;
            vehicle.fullTagId = tagValue;
            vehicle.tagId = tagValue;
            vehicle.tagTypeCode = tagValue;
        }
    }

    private calculateDaysBetween(startDate: string, endDate: string) {
        const startMoment = moment(startDate);
        const endMoment = moment(endDate);
        this.pbpStartDate = startMoment.format('MM/DD/YYYY hh:mm A');
        this.pbpEndDate = endMoment.format('MM/DD/YYYY hh:mm A');
        this.numberOfDays = endMoment.diff(startMoment, 'days');
    }
}
