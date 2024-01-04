import { Component, OnInit, ViewChild } from '@angular/core';
import { State } from 'common/models';
import { DialogRef } from 'common/services';
import { IEditPlateInjectedValues, IEZTag, IStatus } from 'vehicles/interfaces';
import { FormGroup, NgForm } from '@angular/forms';
import { IAddPlateVehicleInfoCMSContent } from 'vehicles/shared';
import * as _ from 'lodash';


@Component({
    selector: 'vehicles-edit-plate',
    templateUrl: './editPlate.component.html',
    styleUrls: ['./editPlate.component.less']
})
export class EditPlateComponent implements OnInit {

    header: string;
    cmsContent: IAddPlateVehicleInfoCMSContent;

    states: State[];
    public startDateTime: Date;
    public endDateTime: Date;
    public numberOfDays;
    public startDatePickerState: boolean;
    public originalVehicleData;
    @ViewChild('Form') public form: NgForm;
    isDateTimeInvalidMsg = '';

    isDateTimeInvalid = false;

    constructor(
        private dialogRef: DialogRef<IEditPlateInjectedValues>,
    ) { }

    ngOnInit() {
        this.header = this.dialogRef.data.header;
        this.cmsContent = this.dialogRef.data.cmsContent;
        this.states = this.dialogRef.data.statesList;
        this.originalVehicleData = JSON.parse(JSON.stringify(this.dialogRef.data));
        this.setDates();
        const today = new Date();
        const pbpStartDate = new Date(this.plate.pbpStartDate);
        if (this.dialogRef.data.showStatus && today > pbpStartDate) {
            this.startDatePickerState = true;
        } else {
            this.startDatePickerState = false;
        }
    }

    private setDates() {

        this.startDateTime = new Date(this.plate.pbpStartDate);
        this.endDateTime = new Date(this.plate.pbpEndDate);

        const timeInMilisec: number = this.endDateTime.getTime() - this.startDateTime.getTime() + 60000;
        const daysBetweenDates: number = Math.floor(timeInMilisec / 1000 / 60 / 60 / 24);

        this.numberOfDays = daysBetweenDates;

    }

    public get isActive(): boolean {
        return this.dialogRef.data.plate.tagStatusDesc === 'Active';
    }

    public get plateStatus(): IStatus {
        return this.dialogRef.data.status;
    }

    public get plate(): IEZTag {
        return this.dialogRef.data.plate;
    }

    public exitModal(save: boolean) {
        this.validationDateTime();
        if (!this.isDateTimeInvalid || !save) {

            this.dialogRef.data.savePlate = save;
            if (save) {
                this.dialogRef.data.plate.pbpStartDate = this.startDateTime.toISOString();
                this.dialogRef.data.plate.pbpEndDate = this.endDateTime.toISOString();
            }
            else {
                this.dialogRef.data.plate = this.originalVehicleData.plate;
                this.dialogRef.data.plate.pbpStartDate = new Date(this.plate.pbpStartDate).toISOString();
                this.dialogRef.data.plate.pbpEndDate = new Date(this.plate.pbpEndDate).toISOString();
            }
            this.dialogRef.close(this.dialogRef.data);

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
        if (startTime < (new Date()) && !this.startDatePickerState) {
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
