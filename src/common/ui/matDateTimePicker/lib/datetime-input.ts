/**
 * Taken from https://www.npmjs.com/package/@angular-material-components/datetime-picker
 */

import { DOWN_ARROW } from '@angular/cdk/keycodes';
import { Directive, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Inject, Input, OnDestroy, Optional, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { HctraMatDateAdapter } from './core/date-adapter';
import { HctraMatDateFormats, HCTRA_MAT_DATE_FORMATS } from './core/date-formats';
import { HctraMatDatetimePickerComponent } from './datetime-picker.component';
import { createMissingDateImplError } from './utils/date-utils';

/** @docs-private */
export const MAT_DATEPICKER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HctraMatDatetimeInputDirective),
    multi: true
};

/** @docs-private */
export const MAT_DATEPICKER_VALIDATORS: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => HctraMatDatetimeInputDirective),
    multi: true
};


/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatetimePickerInputEvent instead.
 */
export class MatDatetimePickerInputEvent<D> {
    /** The new value for the target datepicker input. */
    public value: D | null;

    constructor(
        /** Reference to the datepicker input component that emitted the event. */
        public target: HctraMatDatetimeInputDirective<D>,
        /** Reference to the native input element associated with the datepicker input. */
        public targetElement: HTMLElement) {

        this.value = this.target.value;
    }
}


/** Directive used to connect an input to a matDatetimePicker. */
@Directive({
    selector: 'input[hctraMatDatetimePicker]',
    providers: [
        MAT_DATEPICKER_VALUE_ACCESSOR,
        MAT_DATEPICKER_VALIDATORS,
        { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: HctraMatDatetimeInputDirective },
    ],
    exportAs: 'hctraMatDatetimePickerInput',
})
export class HctraMatDatetimeInputDirective<D> implements ControlValueAccessor, OnDestroy, Validator {
    @HostBinding('attr.min') private readonly attrMin = this.min ? this.dateAdapter.toIso8601(this.min) : null;
    @HostBinding('attr.max') private readonly attrMax = this.max ? this.dateAdapter.toIso8601(this.max) : null;
    @HostBinding('disabled') private readonly attrDisabled = this.disabled;

    /** The datepicker that this input is associated with. */
    @Input()
    set hctraMatDatetimePicker(value: HctraMatDatetimePickerComponent<D>) {
        if (!value) {
            return;
        }

        this.datepicker = value;
        this.datepicker.registerInput(this);
        this.datepickerSubscription.unsubscribe();

        this.datepickerSubscription = this.datepicker.selectedChanged.subscribe((selected: D) => {
            this.value = selected;
            this.cvaOnChange(selected);
            this.onTouched();
            this.dateInput.emit(new MatDatetimePickerInputEvent(this, this.elementRef.nativeElement));
            this.dateChange.emit(new MatDatetimePickerInputEvent(this, this.elementRef.nativeElement));
        });
    }
    datepicker: HctraMatDatetimePickerComponent<D> = null;
    @HostBinding('attr.aria-haspopup') private readonly ariaHasPopup = this.datepicker ? 'dialog' : null;
    @HostBinding('attr.aria-owns') private readonly ariaOwns = (this.datepicker?.opened && this.datepicker.id) || null;

    /** Function that can be used to filter out dates within the datepicker. */
    @Input()
    set hctraMatDatetimePickerFilter(value: (date: D | null) => boolean) {
        this.dateFilter = value;
        this.validatorOnChange();
    }
    public dateFilter: (date: D | null) => boolean;

    /** The value of the input. */
    @Input()
    get value(): D | null { return this.internalValue; }
    set value(value: D | null) {
        value = this.dateAdapter.deserialize(value);
        this.lastValueValid = !value || this.dateAdapter.isValid(value);
        value = this.getValidDateOrNull(value);
        const oldDate = this.value;
        this.internalValue = value;
        this.formatValue(value);

        if (!this.dateAdapter.sameDate(oldDate, value)) {
            this.valueChange.emit(value);
        }
    }
    private internalValue: D | null;

    /** The minimum valid date. */
    @Input()
    get min(): D | null { return this.internalMin; }
    set min(value: D | null) {
        this.internalMin = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
        this.validatorOnChange();
    }
    private internalMin: D | null;

    /** The maximum valid date. */
    @Input()
    get max(): D | null { return this.internalMax; }
    set max(value: D | null) {
        this.internalMax = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
        this.validatorOnChange();
    }
    private internalMax: D | null;

    /** Whether the datepicker-input is disabled. */
    @Input()
    get disabled(): boolean { return !!this.internalDisabled; }
    set disabled(value: boolean) {
        const newValue = value != null && `${value}` !== 'false';
        const element = this.elementRef.nativeElement;

        if (this.internalDisabled !== newValue) {
            this.internalDisabled = newValue;
            this.stateChanges.emit(undefined);
        }

        // We need to null check the `blur` method, because it's undefined during SSR.
        if (newValue && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
        }
    }
    private internalDisabled: boolean;

    /** Emits when a `change` event is fired on this `<input>`. */
    @Output() public readonly dateChange: EventEmitter<MatDatetimePickerInputEvent<D>> = new EventEmitter<MatDatetimePickerInputEvent<D>>();

    /** Emits when an `input` event is fired on this `<input>`. */
    @Output() public readonly dateInput: EventEmitter<MatDatetimePickerInputEvent<D>> = new EventEmitter<MatDatetimePickerInputEvent<D>>();

    /** Emits when the value changes (either due to user input or programmatic change). */
    public valueChange = new EventEmitter<D | null>();

    /** Emits when the disabled state has changed */
    public stateChanges = new EventEmitter<void>();

    public onTouched = () => { };

    private cvaOnChange: (value: any) => void = () => { };

    private validatorOnChange = () => { };

    private datepickerSubscription = Subscription.EMPTY;

    private localeSubscription = Subscription.EMPTY;

    /** The form control validator for whether the input parses. */
    private parseValidator: ValidatorFn = (): ValidationErrors | null =>
        this.lastValueValid
            ? null
            : { matDatetimePickerParse: { text: this.elementRef.nativeElement.value } };

    /** The form control validator for the min date. */
    private minValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const controlValue = this.getValidDateOrNull(this.dateAdapter.deserialize(control.value));
        return (!this.min || !controlValue || this.dateAdapter.compareDateWithTime(this.min, controlValue, this.datepicker.showSeconds) <= 0)
            ? null
            : { matDatetimePickerMin: { min: this.min, actual: controlValue } };
    };

    /** The form control validator for the max date. */
    private maxValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const controlValue = this.getValidDateOrNull(this.dateAdapter.deserialize(control.value));
        return (!this.max || !controlValue || this.dateAdapter.compareDateWithTime(this.max, controlValue, this.datepicker.showSeconds) >= 0)
            ? null
            : { matDatetimePickerMax: { max: this.max, actual: controlValue } };
    };

    /** The form control validator for the date filter. */
    private filterValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const controlValue = this.getValidDateOrNull(this.dateAdapter.deserialize(control.value));
        return (!this.dateFilter || !controlValue || this.dateFilter(controlValue))
            ? null
            : { matDatetimePickerFilter: true };
    };

    /** The combined form control validator for this input. */
    private validator: ValidatorFn | null =
        Validators.compose(
            [this.parseValidator, this.minValidator, this.maxValidator, this.filterValidator]);

    /** Whether the last value set on the input was valid. */
    private lastValueValid = false;

    constructor(
        private elementRef: ElementRef<HTMLInputElement>,
        @Optional() public dateAdapter: HctraMatDateAdapter<D>,
        @Optional() @Inject(HCTRA_MAT_DATE_FORMATS) private dateFormats: HctraMatDateFormats,
        @Optional() private formField: MatFormField) {

        if (!this.dateAdapter) {
            throw createMissingDateImplError('HctraMatDateAdapter');
        }
        if (!this.dateFormats) {
            throw createMissingDateImplError('HCTRA_MAT_DATE_FORMATS');
        }

        // Update the displayed date when the locale changes.
        this.localeSubscription = dateAdapter.localeChanges.subscribe(() => {
            this.value = this.value;
        });
    }

    ngOnDestroy() {
        this.datepickerSubscription.unsubscribe();
        this.localeSubscription.unsubscribe();
        this.valueChange.complete();
        this.stateChanges.complete();
    }

    /** @docs-private */
    public registerOnValidatorChange(fn: () => void): void {
        this.validatorOnChange = fn;
    }

    /** @docs-private */
    public validate(c: AbstractControl): ValidationErrors | null {
        return this.validator ? this.validator(c) : null;
    }

    /**
     * @deprecated
     * @breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
     */
    public getPopupConnectionElementRef(): ElementRef {
        return this.getConnectedOverlayOrigin();
    }

    /**
     * Gets the element that the datepicker popup should be connected to.
     * 
     * @return The element to connect the popup to.
     */
    public getConnectedOverlayOrigin(): ElementRef {
        return this.formField ? this.formField.getConnectedOverlayOrigin() : this.elementRef;
    }

    // Implemented as part of ControlValueAccessor.
    public writeValue(value: D): void {
        this.value = value;
    }

    // Implemented as part of ControlValueAccessor.
    public registerOnChange(fn: (value: any) => void): void {
        this.cvaOnChange = fn;
    }

    // Implemented as part of ControlValueAccessor.
    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    // Implemented as part of ControlValueAccessor.
    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    @HostListener('keydown', ['$event'])
    public onKeydown(event: KeyboardEvent) {
        const isAltDownArrow = event.altKey && event.keyCode === DOWN_ARROW;

        if (this.datepicker && isAltDownArrow && !this.elementRef.nativeElement.readOnly) {
            this.datepicker.open();
            event.preventDefault();
        }
    }

    @HostListener('input', ['$event.target.value'])
    public onInput(value: string) {
        const lastValueWasValid = this.lastValueValid;
        let date = this.dateAdapter.parse(value, this.dateFormats.parse.dateInput);
        this.lastValueValid = !date || this.dateAdapter.isValid(date);
        date = this.getValidDateOrNull(date);

        const isSameTime = this.dateAdapter.isSameTime(date, this.internalValue);

        if ((date != null && (!isSameTime || !this.dateAdapter.sameDate(date, this.internalValue)))
            || (date == null && this.internalValue != null)) {
            this.internalValue = date;
            this.cvaOnChange(date);
            this.valueChange.emit(date);
            this.dateInput.emit(new MatDatetimePickerInputEvent(this, this.elementRef.nativeElement));
        } else if (lastValueWasValid !== this.lastValueValid) {
            this.validatorOnChange();
        }
    }

    @HostListener('change')
    public onChange() {
        this.dateChange.emit(new MatDatetimePickerInputEvent(this, this.elementRef.nativeElement));
    }

    /** Returns the palette used by the input's form field, if any. */
    public getThemePalette(): ThemePalette {
        return this.formField ? this.formField.color : undefined;
    }

    /** Handles blur events on the input. */
    @HostListener('blur')
    public onBlur() {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this.formatValue(this.value);
        }

        this.onTouched();
    }

    /** Handles focus events on the input. */
    @HostListener('focus')
    public onFocus() {
        // Close datetime picker if opened
        if (this.datepicker && this.datepicker.opened) {
            this.datepicker.cancel();
        }
    }

    /** Formats a value and sets it on the input element. */
    private formatValue(value: D | null) {
        this.elementRef.nativeElement.value =
            value ? this.dateAdapter.format(value, this.dateFormats.display.dateInput) : '';
    }

    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    private getValidDateOrNull(obj: any): D | null {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }

}
