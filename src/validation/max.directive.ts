import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, Validators, FormControl } from '@angular/forms';
import { parse } from 'url';

@Directive({
    selector: `input[type='number'][max], input[type='text'][max]`, 
    providers: [{
        provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true
    }]
})
export class MaxDirective implements Validator {

    @Input() max: any;

    validate(control: AbstractControl): { [key: string]: any } {
        if (this.max === undefined || this.max === null || this.max === '' || this.max === false || this.max === true) {
            return {};
        }
        const value = (typeof control.value === 'string') ? Number(control.value.replace(/[,]/g, '')) : control.value;
        return new FormControl(value, Validators.max(this.max)).errors;
    }
}
