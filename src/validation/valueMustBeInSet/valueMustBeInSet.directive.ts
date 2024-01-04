import { Directive, Injector, AfterViewInit, QueryList, OnDestroy } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Subscription } from 'rxjs';

@Directive({
    selector: `mat-select[valueMustBeInSet]`,
    providers: [{
        provide: NG_VALIDATORS, useClass: ValueMustBeInSetDirective, multi: true
    }]
})
export class ValueMustBeInSetDirective implements Validator, AfterViewInit {

    constructor(private injector: Injector) {
    }

    ngAfterViewInit() {
        const matSelect = this.injector.get(MatSelect);
                
        const optionSubscription = matSelect.options.changes.subscribe({
            next: async () => {
                //this queues a microtask that plays nice with angular's change detection cycles
                await Promise.resolve();
                matSelect.ngControl.control.updateValueAndValidity();
            },
            complete: () => {
                if (optionSubscription) {
                    optionSubscription.unsubscribe();
                }
            }
        });

    }

    validate(): ValidationErrors {

        //cannot inject via constructor since MatSelect is not an instance at this point.
        //must manually inject. The default injector will check Self and Parent for
        //provider resolution, which will be the MatSelect component itself.
        //Also, angular appears to rebind the validate method and 'this' is not actually
        //and instance of this class anymore. injector is available, but local members are not
        //there.
        const matSelect = this.injector.get(MatSelect);

        const value = matSelect.value;
        const isInSet = matSelect.options.some(option => option.value === value);

        if (isInSet) {
            return null;
        } else {
            return { valueMustBeInSet: `${value} value was not in MatSelect options.`};
        }        
    }
}
