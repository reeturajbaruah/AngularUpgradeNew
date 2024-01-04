import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { wait } from 'common/utilities';
import { DateWithTimeZonePipe } from 'pipes/dateWithTimeZone/dateWithTimeZone.pipe';
@Component({
    selector: 'mat-datarange-picker-with-header',
    templateUrl: './dateRangePickerWithHeader.component.html',
    styleUrls: ['./dateRangePickerWithHeader.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class DateRangePickerWithHeaderComponent {
    isOpen = false;
    public isValid = true;

    @Input() public selectedRange = new DateRange<Date>(null, null);
    @Output() public selectedRangeChange = new EventEmitter<DateRange<Date>>();

    @Input() public format: string;
    @Input() minDate?: Date;
    @Input() maxDate?: Date;
    @Input() closeOnRangeSelected?: boolean;

    constructor(private datePipe: DateWithTimeZonePipe) {
    }

    public open() {
        this.isOpen = true;
        this.resetValid();
    }

    public close() {
        this.isOpen = false;

        if (!this.selectedRange.start || !this.selectedRange.end) {
            const start = this.selectedRange.start || this.minDate || new Date();
            const end = this.selectedRange.end || this.maxDate || new Date();

            this.selectedRange = new DateRange<Date>(start, end);
            this.selectedRangeChange.emit(this.selectedRange);
        }
    }

    get hasRangeValue(): boolean {
        return !!(this.selectedRange && (this.selectedRange.end || this.selectedRange.start));
    }

    async tryCloseOnRangeSelected() {
        if (this.closeOnRangeSelected && this.selectedRange.start && this.selectedRange.end) {
            await wait(250);
            this.isOpen = false;
        }
    }

    async setStartDate(date: Date, input: HTMLInputElement) {

        this.isValid = this.checkIfValid(date);

        if (!date) {
            this.selectedRange = new DateRange<Date>(null, this.selectedRange.end);
            input.value = null;
            this.selectedRangeChange.emit(this.selectedRange);
            return;
        }
       
        const isValidRange = 
            (this.minDate ? this.minDate <= date : true) &&
            (this.maxDate ? this.maxDate >= date : true);

        const hasChanged = date !== this.selectedRange.start;

        if (isValidRange && hasChanged) {
            this.selectedRange = new DateRange<Date>(date, this.selectedRange.end);
            this.selectedRangeChange.emit(this.selectedRange);
            this.tryCloseOnRangeSelected();
        } else if (!isValidRange) {
            this.selectedRange = new DateRange<Date>(null, this.selectedRange.end);
            input.value = null;
            this.selectedRangeChange.emit(this.selectedRange);
        }
    }

    async setEndDate(date: Date, input: HTMLInputElement) {
        this.isValid = true;
        this.isValid = this.checkIfValid(date);

        if (!date) {
            this.selectedRange = new DateRange<Date>(this.selectedRange.start, null);
            input.value = null;
            this.selectedRangeChange.emit(this.selectedRange);
            return;
        }

        const isValidRange = 
            (this.minDate ? this.minDate <= date : true) &&
            (this.maxDate ? this.maxDate >= date : true);

        const hasChanged = date !== this.selectedRange.end;

        if (isValidRange && hasChanged) {
            this.selectedRange = new DateRange<Date>(this.selectedRange.start, date);
            this.selectedRangeChange.emit(this.selectedRange);
            this.tryCloseOnRangeSelected();
        } else if (!isValidRange) {
            this.selectedRange = new DateRange<Date>(this.selectedRange.start, null);
            input.value = null;
            this.selectedRangeChange.emit(this.selectedRange);
        }
    }

    selectedChange(date: any) {
        this.resetValid();
        if (!this.selectedRange?.start || this.selectedRange?.end) {
            this.selectedRange = new DateRange<Date>(date, null);
            this.selectedRangeChange.emit(this.selectedRange);
        } else {
            const [start, end] = date < this.selectedRange.start 
                ? [date, this.selectedRange.start] 
                : [this.selectedRange.start, date];

            this.selectedRange = new DateRange<Date>(start, end);
            this.selectedRangeChange.emit(this.selectedRange);
        }
        this.tryCloseOnRangeSelected();
        
    }

    public checkIfValid(date: Date): boolean {
        if (date === null) {
            return false;
        }
        else {
            return true;
        }
    }

    public resetValid() {
        this.isValid = true;       
    }

    private checkForValidDate(date: string): boolean {
        const date_regex = /^[0-9\/]+$/;
        return date_regex.test(date);
    }

    private checkForMMDDYYYY(date: string): boolean {
        const datePipeString = this.datePipe.transform(date, 'date3').toString();
        const date_mmddyyyy_regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return date_mmddyyyy_regex.test(datePipeString);
    }
   
    async checkStartDateInput(date: string) {
        this.resetValid();
        if (date) {
            this.isValid = (!this.checkForValidDate(date) || !this.checkForMMDDYYYY(date)) ? false : true;
            return;
        }
    }

    async checkEndDateInput(date: string) {
        this.resetValid();
        if (date) {
            this.isValid = (!this.checkForValidDate(date) || !this.checkForMMDDYYYY(date)) ? false : true;
            return;
        }
    }

}
