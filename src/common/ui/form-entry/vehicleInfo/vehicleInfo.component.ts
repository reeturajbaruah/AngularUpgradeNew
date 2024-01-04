import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ITagOrderDesc, IVehicleInfo, State } from 'common/models';
import { IVehicleClass, IVehicleMake, ResponseErrorService, VehicleService } from 'common/services';
import { isNil } from 'lodash';
import { IVehicleConfig } from 'shared/vehicle-info';


export interface IModalCmsContent extends ITagOrderDesc {
    vehicleInfoTitle?: string;
    vehicleToolTipText?: string;
    tempPlateInfo?: string;
    vehicleInfo?: string;
    temporaryPlateMsg?: string;
}

type vehicleClassLookupType = { [key: number]: string };
@Component({
    selector: 'vehicle-info-form-entry',
    templateUrl: './vehicleInfo.html',
    styleUrls: ['./vehicleInfo.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class VehicleInfoComponent implements OnInit {
    vehicleIcon: string;

    constructor(
        private form: NgForm,
        private vehicleService: VehicleService,
        private responseErrorService: ResponseErrorService,
        private renderer: Renderer2
    ) { }

    public get submitted(): boolean {
        return this.form.submitted;
    }
    @ViewChild('vehicleClass', { static: true }) vehicleClass: any;
    @Input() motorcycleDisabled: boolean;
    @Input() formElementName: string;
    @Input() modalCms: IModalCmsContent;
    @Input() vehicleInfo: IVehicleInfo;
    @Input() plateIsReadOnly: boolean;
    @Input() public stateList: State[];
    @Input() showTempPlate?= true;

    licPlateMaxLength = 15;
    @Input() config?: IVehicleConfig;
    ezTagOptionMsg: string;
    classCodeAsNumberForMotorCycle = 2;

    public get classCodeAsNumber(): number {
        return this.vehicleInfo && parseInt(this.vehicleInfo.vehicleClassCode as string, 10);
    }

    public set classCodeAsNumber(classCode: number) {
        if (this.vehicleInfo) {
            this.vehicleInfo.vehicleClassCode = !isNil(classCode) ? classCode.toString() : '';
        }
    }

    public vehicleMakes: IVehicleMake[];
    public years: string[];
    public vehicleClasses: IVehicleClass[];


    public vehicleClassesLookup;


    public updateDescription(newCode: number) {
        this.vehicleInfo.vehicleClassDesc = this.getVehicleClassDesc(newCode);
        this.vehicleIcon = this.getVehicleImg(newCode);
    }

    async ngOnInit() {
        if (this.vehicleInfo.vehicleClassCode === '11') { this.vehicleInfo.vehicleClassCode = 2; }
        this.years = this.vehicleService.getModelYears();
        const vehicleInformation = await this.vehicleService.getVehicleInformation();
        this.vehicleClasses = vehicleInformation.classes;
        this.vehicleClassesLookup = vehicleInformation.icons;
        this.vehicleIcon = this.getVehicleImg(this.vehicleInfo.vehicleClassCode);
        this.vehicleInfo.vehicleClassDesc = this.getVehicleClassDesc(this.vehicleInfo.vehicleClassCode);

        this.vehicleService
            .getVehicleMakes()
            .then((vehicleMakes: IVehicleMake[]) => this.vehicleMakes = vehicleMakes)
            .catch(response => {
                this.responseErrorService.displayErrorsFromResponse(response);
            });

        this.vehicleClass.openedChange.subscribe((open: any) => {
            if (open) {
                this.renderer.setStyle(document.getElementsByClassName('mat-select-panel')[0], 'max-height', '400px');
            }
        });
    }

    licPlateChange(event) {
        this.vehicleInfo.licPlate = event;
        this.vehicleInfo.temporaryLicPlate = null;
    }

    toggleEzTagOption(event) {
        if (!event.target.checked) {
            this.vehicleInfo.tagInfo = {hasTag: false, desc: this.modalCms.tagNotOrdered};
        } else {
            this.motorcycleDisabled = false;
            this.vehicleInfo.tagInfo = {hasTag: true, desc: this.modalCms.tagOrdered};
        }
    }

    get displayTemporaryPlateMsg(): string {
        return this.modalCms.temporaryPlateMsg ?? 'Is this a temporary plate issued by the dealer?';
    }

    getVehicleClassDesc(code) {
        const filteredVehicleClassInfo = this.vehicleClasses?.filter(info => info.value?.toString() === code?.toString());
        return (filteredVehicleClassInfo.length > 0) ? filteredVehicleClassInfo[0].label : null;
    }


    getVehicleImg(code) {
       const filteredInfo =  this.vehicleClassesLookup?.filter(info => info.value?.toString() === code?.toString());
       return `-/media/${filteredInfo[0]?.icon}.ashx`;
    }
}
