import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, Validators, FormControl } from '@angular/forms';

@Directive({
    selector: `input[type='number'][min], input[type='text'][min]`,
    providers: [{
        provide: NG_VALIDATORS, useExisting: MinDirective, multi: true
    }]
})
export class MinDirective implements Validator {

    @Input() min: any;

    validate(control: AbstractControl): { [key: string]: any } {
        if (this.min === undefined || this.min === null || this.min === '' || this.min === false || this.min === true) {
            return {};
        }
        const value = (typeof control.value === 'string') ? Number(control.value.replace(/[,]/g, '')) : control.value;
        return new FormControl(value, Validators.min(this.min)).errors;
    }
}
