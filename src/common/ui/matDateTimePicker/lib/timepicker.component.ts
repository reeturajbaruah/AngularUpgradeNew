import { ChangeDetectorRef, Component, forwardRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, Optional, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { HctraMatDateAdapter } from './core/date-adapter';
import {
    createMissingDateImplError,
    DEFAULT_STEP,
    formatTwoDigitTimeValue,
    LIMIT_TIMES, MERIDIANS, NUMERIC_REGEX, PATTERN_INPUT_HOUR, PATTERN_INPUT_MINUTE, PATTERN_INPUT_SECOND
} from './utils/date-utils';


@Component({
    selector: 'hctra-mat-timepicker',
    templateUrl: './timepicker.component.html',
    styleUrls: ['./timepicker.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HctraMatTimepickerComponent),
            multi: true
        }
    ],
    exportAs: 'hctraMatTimepicker',
    encapsulation: ViewEncapsulation.None,
})
export class HctraMatTimepickerComponent<D> implements ControlValueAccessor, OnInit, OnChanges, OnDestroy {
    @HostBinding('class') private readonly class = 'hctra-mat-timepicker';

    public form: FormGroup;

    @Input() disabled = false;
    @Input() showSpinners = true;
    @Input() stepHour: number = DEFAULT_STEP;
    @Input() stepMinute: number = DEFAULT_STEP;
    @Input() stepSecond: number = DEFAULT_STEP;
    @Input() showSeconds = false;
    @Input() disableMinute = false;
    @Input() enableMeridian = false;
    @Input() defaultTime: number[];
    @Input() color: ThemePalette = 'primary';

    public meridian: string = MERIDIANS.AM;

    /** Hour */
    private get hour() {
        const val = Number(this.form.controls['hour'].value);
        return isNaN(val) ? 0 : val;
    };

    private get minute() {
        const val = Number(this.form.controls['minute'].value);
        return isNaN(val) ? 0 : val;
    };

    private get second() {
        const val = Number(this.form.controls['second'].value);
        return isNaN(val) ? 0 : val;
    };

    /** Whether or not the form is valid */
    public get valid(): boolean {
        return this.form.valid;
    }

    private onChange: any = () => { };
    private onTouched: any = () => { };
    private internalDisabled: boolean;
    private model: D;

    private destroyed: Subject<void> = new Subject<void>();

    public pattern = PATTERN_INPUT_HOUR;

    constructor(
        @Optional() public dateAdapter: HctraMatDateAdapter<D>,
        private cd: ChangeDetectorRef,
        private formBuilder: FormBuilder) {

        if (!this.dateAdapter) {
            throw createMissingDateImplError('HctraMatDateAdapter');
        }
        this.form = this.formBuilder.group(
            {
                hour: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_HOUR)]],
                minute: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_MINUTE)]],
                second: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_SECOND)]]
            });
    }

    ngOnInit() {
        this.form.valueChanges
            .pipe(
                takeUntil(this.destroyed),
                debounceTime(400))
            .subscribe(val => {
                this.updateModel();
            });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.disabled || changes.disableMinute) {
            this.setDisableStates();
        }
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }

    /**
     * Writes a new value to the element.
     * 
     * @param obj
     */
    public writeValue(val: D): void {
        if (val != null) {
            this.model = val;
        } else {
            this.model = this.dateAdapter.today();
            if (this.defaultTime != null) {
                this.dateAdapter.setTimeByDefaultValues(this.model, this.defaultTime);
            }
        }
        this.updateHourMinuteSecond();
    }

    /** Registers a callback function that is called when the control's value changes in the UI. */
    // TODO: Clint to delete
    public registerOnChange(fn: (_: any) => void) {
        this.onChange = fn;
    }

    /** Set the function to be called when the control receives a touch event. */
    // TODO: Clint to delete
    public registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    /** Enables or disables the appropriate DOM element */
    // TODO: Clint to delete
    public setDisabledState(isDisabled: boolean): void {
        this.internalDisabled = isDisabled;
        this.cd.markForCheck();
    }

    /**
     * Format input
     * 
     * @param input 
     */
    public formatInput(input: HTMLInputElement) {
        input.value = input.value.replace(NUMERIC_REGEX, '');
    }

    /** Toggle meridian */
    public toggleMeridian() {
        this.meridian = (this.meridian === MERIDIANS.AM) ? MERIDIANS.PM : MERIDIANS.AM;
        this.change('hour');
    }

    /** Change property of time */
    public change(prop: string, up?: boolean) {
        const next = this.getNextValueByProp(prop, up);
        this.form.controls[prop].setValue(formatTwoDigitTimeValue(next), { onlySelf: false, emitEvent: false });
        this.updateModel();
    }

    /** Update controls of form by model */
    private updateHourMinuteSecond() {
        let hour = this.dateAdapter.getHour(this.model);
        const minute = this.dateAdapter.getMinute(this.model);
        const second = this.dateAdapter.getSecond(this.model);

        if (this.enableMeridian) {
            if (hour >= LIMIT_TIMES.meridian) {
                hour = hour - LIMIT_TIMES.meridian;
                this.meridian = MERIDIANS.PM;
            } else {
                this.meridian = MERIDIANS.AM;
            }
            if (hour === 0) {
                hour = LIMIT_TIMES.meridian;
            }
        }

        this.form.controls['hour'].setValue(formatTwoDigitTimeValue(hour));
        this.form.controls['minute'].setValue(formatTwoDigitTimeValue(minute));
        this.form.controls['second'].setValue(formatTwoDigitTimeValue(second));
    }

    /** Update model */
    private updateModel() {
        let hour = this.hour;

        if (this.enableMeridian) {
            if (this.meridian === MERIDIANS.AM && hour === LIMIT_TIMES.meridian) {
                hour = 0;
            } else if (this.meridian === MERIDIANS.PM && hour !== LIMIT_TIMES.meridian) {
                hour = hour + LIMIT_TIMES.meridian;
            }
        }

        this.dateAdapter.setHour(this.model, hour);
        this.dateAdapter.setMinute(this.model, this.minute);
        this.dateAdapter.setSecond(this.model, this.second);
        this.onChange(this.model);
    }

    /**
     * Get next value by property
     * 
     * @param prop 
     * @param up
     */
    private getNextValueByProp(prop: string, up?: boolean): number {
        const keyProp = prop[0].toUpperCase() + prop.slice(1);
        const min = LIMIT_TIMES[`min${keyProp}`];
        let max = LIMIT_TIMES[`max${keyProp}`];

        if (prop === 'hour' && this.enableMeridian) {
            max = LIMIT_TIMES.meridian;
        }

        let next;
        if (up == null) {
            next = this[prop] % (max);
            if (prop === 'hour' && this.enableMeridian) {
                if (next === 0) {
                    next = max;
                }
            }
        } else {
            next = up
                ? this[prop] + this[`step${keyProp}`]
                : this[prop] - this[`step${keyProp}`];

            if (prop === 'hour' && this.enableMeridian) {
                next = next % (max + 1);
                if (next === 0) {
                    next = up ? 1 : max;
                }
            } else {
                next = next % max;
            }

            if (up) {
                next = next > max ? (next - max + min) : next;
            } else {
                next = next < min ? (next - min + max) : next;
            }

        }

        return next;
    }

    /** Set disable states */
    private setDisableStates() {
        if (this.disabled) {
            this.form.disable();
        } else {
            this.form.enable();
            if (this.disableMinute) {
                this.form.get('minute').disable();
                if (this.showSeconds) {
                    this.form.get('second').disable();
                }
            }
        }
    }

}
