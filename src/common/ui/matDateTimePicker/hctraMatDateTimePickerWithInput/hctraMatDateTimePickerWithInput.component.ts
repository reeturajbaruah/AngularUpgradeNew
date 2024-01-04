import {
    Component, EventEmitter, Input, Output
} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
    selector: 'hctra-mat-datetime-picker-with-input',
    templateUrl: './hctraMatDateTimePickerWithInput.html',
    styleUrls: ['./hctraMatDateTimePickerWithInput.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class HctraMatDateTimePickerWithInputComponent {

    constructor(
        private form: NgForm
    ) { }

    @Input() minDate: Date;
    @Input() maxDate: Date;
    @Input() dateTimeModel: Date;
    @Output() dateTimeModelChange = new EventEmitter<Date>();
    @Input() name: string;
    @Input() isDisablePicker = false;

    public get submitted() {
        return this.form.submitted;
    }

    public dateInputChanged() {
        this.dateTimeModelChange.emit(this.dateTimeModel);
    }
}
