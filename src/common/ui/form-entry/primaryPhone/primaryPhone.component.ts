import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

@Component({
    selector: 'primary-phone',
    templateUrl: './primaryPhone.html',
    styleUrls: ['./primaryPhone.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class PrimaryPhoneComponent implements OnChanges {

    constructor(
        public form: NgForm
    ) { }
    @Input() primaryPhone: string;
    @Input() header: string;
    @Output() primaryPhoneChange: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() {
        this.updateValue();
    }

    get submitted(): boolean {
        return this.form.submitted;
    }

    get displayHeader(): string {
        return this.header ?? 'PHONE NUMBER';
    }

    public updateValue(): void {
        if (this.primaryPhone) {
            if (this.primaryPhone.match(/^[0-9]{10}$/)) {
                const areaCode = this.primaryPhone.slice(0, 3);
                const midDigits = this.primaryPhone.slice(3, 6);
                const lastDigits = this.primaryPhone.slice(6, 10);
                this.primaryPhone = areaCode + '-' + midDigits + '-' + lastDigits;
            }
            this.primaryPhoneChange.emit(this.primaryPhone);
        }
    }
}
