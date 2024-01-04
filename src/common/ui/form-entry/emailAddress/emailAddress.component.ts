import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

@Component({
    selector: 'email-address',
    templateUrl: './emailAddress.html',
    styleUrls: ['./emailAddress.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class EmailAddressComponent {

    constructor(
        public form: NgForm
    ) { }
    @Input() emailAddress: string;
    @Input() header: string;
    @Input() name: string;
    @Output() emailAddressChange: EventEmitter<string> = new EventEmitter<string>();

    @Input() required?: boolean;

    @Input() hideMinMax?: boolean;

    @Input() placeholder = 'Username@url.com';

    get elementName(): string {
        return this.name ? `${this.name}_email` : 'email';
    }

    get elementId(): string {
        return this.name ? `${this.name}_Email` : 'Email';
    }

    get submitted(): boolean {
        return this.form.submitted;
    }

    get displayHeader(): string {
        return this.header ?? 'EMAIL';
    }

    public updateValue(): void {
        this.emailAddressChange.emit(this.emailAddress);
    }

}
