import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, map, takeUntil, distinctUntilChanged } from 'rxjs/operators';

@Directive({
    selector: `[notEqualTo][ngModel]`,
    providers: [{
        provide: NG_VALIDATORS, useExisting: NotEqualToDirective, multi: true
    }]
})
export class NotEqualToDirective implements Validator, OnInit, OnDestroy {

    @Input() set notEqualTo(val: any) {
        this.notEqualToValue = val;

        //Trigger Manual checking
        this.updateValiditySubject.next(val);
    };

    private control: AbstractControl;
    private notEqualToValue: any;
    private updateValiditySubject = new Subject<undefined>();
    private onDestroy = new Subject();

    // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
    get notEqualTo() {
        return this.notEqualToValue;
    }

    ngOnInit(): void {
        this.updateValiditySubject
            .pipe(
                map(val => this.control
                    ? {
                        equal: this.control.value === val,
                        controlValue: this.control.value
                    } : {}), //Did values become equal or not equal?
                distinctUntilChanged((x, y) =>
                    x.controlValue === y.controlValue &&
                    x.equal === y.equal), //Only allow through when value emitted is not the same as last
                debounceTime(100), //Let through if no new values are emitted within 100ms
                takeUntil(this.onDestroy)) //Stop listening when we destroy subscription
            .subscribe(() => this.control && this.control.updateValueAndValidity({ emitEvent: false }));
    }

    ngOnDestroy(): void {
        this.onDestroy.next(undefined);
        this.onDestroy.complete();
    }

    validate(control: AbstractControl): { [key: string]: any } {

        //sets control to allow references of control in other places, i.e. ngOnInit()
        this.control = control;

        // self value (e.g. newPassword)
        const value = control.value;

        // "not equal" validation - if equal, throw error
        if (value === this.notEqualTo) {
            return { notEqualTo: true };
        }

        //if not equal, do nothing. Valid input.
        return null;
    }
}
