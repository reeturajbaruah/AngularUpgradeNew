import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { State } from 'common/models';
import { IEZTag } from 'vehicles/interfaces';
import { VehiclesManagerService } from 'vehicles/shared';

import { Form, FormGroup, NgForm, ValidationErrors } from '@angular/forms';
import { IAddPlateVehicleInfoCMSContent } from 'vehicles/shared';
import { AddPlateFrameComponent } from '../frame/frame.component';



@Component({
    selector: 'vehicles-addPlate-information-component',
    templateUrl: './vehicleInformation.html',
    styleUrls: ['./vehicleInformation.less']
})
export class AddPlateVehicleInformationComponent implements OnInit {

    @Input() statesList: State[] = [];

    public vehicleInfo: IEZTag = {
        licState: 'TX',
        vehicleClassCode: 2,
        motorcycle: false,
        temporaryLicPlate: null,
        acctTagSeq: 0,
        acctTagSeqSepcified: false,
        acctTagStatus: null,
        acctVehicleId: 0,
        activePbpTagExist: false,
        fullTagId: null,
        isMotorcycleDisabled: true,
        licPlate: null,
        nickname: null,
        nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
        pbpEndDate: null,
        pbpStartDate: null,
        tagId: null,
        tagless_Desc: null,
        tagStatusDesc: null,
        tagTypeCode: 'P',
        vehicleClassDesc: null,
        vehicleColor: null,
        vehicleMake: null,
        vehicleModel: null,
        vehicleYear: null
    };

    @Input() public cmsAddPlateVehicleInfo: IAddPlateVehicleInfoCMSContent;
    @Input() public usStates: State[];

    startDateTime = new Date();
    endDateTime = new Date();

    public numberOfDays: number;

    @ViewChild('Form') public form: NgForm;
    isDateTimeInvalidMsg = '';

    isDateTimeInvalid = false;

    constructor(
        private frame: AddPlateFrameComponent,
        private state: StateService,
        private manager: VehiclesManagerService
    ) { }

    async ngOnInit() {

        const vehicles = this.manager.getVehicleInfoList() || [];

        if (vehicles.length > 0) {
            this.vehicleInfo = vehicles[0];
            this.setDates();
        } else {
            this.numberOfDays = 3;
            this.startDateTime = new Date();
            this.endDateTime = new Date();
            this.endDateTime.setDate(this.startDateTime.getDate() + this.numberOfDays);
        }

        this.manager.clearData();

        this.frame.showStepper = true;

    }

    private setDates() {

        this.startDateTime = new Date(this.vehicleInfo.pbpStartDate);
        this.endDateTime = new Date(this.vehicleInfo.pbpEndDate);
        const timeInMilisec = this.endDateTime.getTime() - this.startDateTime.getTime() + 60000;
        this.numberOfDays = Math.floor(timeInMilisec / 1000 / 60 / 60 / 24);

    }

    public async cancel(state: StateDeclaration) {

        await this.state.go(state);
    }

    public async nextStep(state: StateDeclaration) {
        this.validationDateTime();
        if (!this.isDateTimeInvalid) {

            this.vehicleInfo.pbpStartDate = this.startDateTime.toISOString();
            this.vehicleInfo.pbpEndDate = this.endDateTime.toISOString();
            this.vehicleInfo.activePbpTagExist = true;

            await this.manager.setVehicleInfoItem(this.vehicleInfo);
            if (this.manager.getVehicleInfoList().length > 0) {
                await this.state.go(state);
            }
        }
    }

    validationDateTime() {
        this.isDateTimeInvalid = false;

        const formGroupStartDate = this.form.form.controls['startDate'] as FormGroup;
        formGroupStartDate.setErrors(null);
        formGroupStartDate.controls['calendarInput'].setErrors(null);

        const formGroupEndData = this.form.form.controls['endDate'] as FormGroup;
        formGroupEndData.setErrors(null);
        formGroupEndData.controls['calendarInput'].setErrors(null);

        const startTime = new Date(this.startDateTime.getTime() + 10 * 60000);
        if (startTime < (new Date())) {
            this.isDateTimeInvalidMsg = 'Start date can not be less than current date';
            this.isDateTimeInvalid = true;
            formGroupStartDate.setErrors({ invalid: this.isDateTimeInvalidMsg });
            formGroupStartDate.controls['calendarInput'].setErrors({ invalid: this.isDateTimeInvalidMsg });

        }
        if (this.startDateTime > this.endDateTime) {
            this.isDateTimeInvalidMsg = 'Please select start date greater than end date';
            this.isDateTimeInvalid = true;
            formGroupStartDate.setErrors({ invalid: this.isDateTimeInvalidMsg });
            formGroupStartDate.controls['calendarInput'].setErrors({ invalid: this.isDateTimeInvalidMsg });

        }

        const currentDate = new Date();
        const newDate = new Date();
        newDate.setDate(currentDate.getDate() + 2556);
        if (this.endDateTime > newDate) {
            this.isDateTimeInvalidMsg = 'Please select end date less than 2556 days';
            this.isDateTimeInvalid = true;
            formGroupEndData.controls['calendarInput'].setErrors({ invalid: this.isDateTimeInvalidMsg });

        }
    }

    public onDateEntered() {
        if (this.startDateTime !== null && this.endDateTime !== null) {

            const timeInMilisec: number = this.endDateTime.getTime() - this.startDateTime.getTime() + 60000;
            const daysBetweenDates: number = Math.floor(timeInMilisec / 1000 / 60 / 60 / 24);

            if (daysBetweenDates > 0) {
                this.numberOfDays = daysBetweenDates;
            }
            else {
                this.numberOfDays = 3;
                this.onNumberOfDaysEntered();
            }
            this.validationDateTime();
        }
    }

    public onNumberOfDaysEntered() {
        if (this.startDateTime !== null && this.endDateTime !== null) {

            const newEndDateTime = new Date(this.startDateTime);
            newEndDateTime.setDate(this.startDateTime.getDate() + this.numberOfDays);

            this.endDateTime = newEndDateTime;
        }
    }

}
