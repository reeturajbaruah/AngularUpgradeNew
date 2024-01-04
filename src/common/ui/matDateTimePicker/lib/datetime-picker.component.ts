/**
 * Taken from https://www.npmjs.com/package/@angular-material-components/datetime-picker
 */

import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, UP_ARROW } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig, OverlayRef, PositionStrategy, ScrollStrategy } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ComponentRef,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    NgZone,
    OnDestroy,
    Optional,
    Output,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { CanColor, mixinColor, ThemePalette } from '@angular/material/core';
import { MatCalendarCellCssClasses, matDatepickerAnimations, MAT_DATEPICKER_SCROLL_STRATEGY } from '@angular/material/datepicker';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { merge, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { HctraMatCalendarComponent } from './calendar';
import { HctraMatDateAdapter } from './core/date-adapter';
import { HctraMatDatetimeInputDirective } from './datetime-input';
import { HctraMatTimepickerComponent } from './timepicker.component';
import { createMissingDateImplError, DEFAULT_STEP } from './utils/date-utils';


/** Used to generate a unique ID for each datepicker instance. */
let datepickerUid = 0;

// Boilerplate for applying mixins to MatDatepickerContent.
/** @docs-private */
class MatDatepickerContentBase {
    constructor(public _elementRef: ElementRef) { }
}
const MatDatepickerContentMixinBase: any & typeof MatDatepickerContentBase =
    mixinColor(MatDatepickerContentBase);

/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * HctraMatCalendarComponent directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * 
 * @docs-private
 */
@Component({
    selector: 'hctra-mat-datetime-content',
    templateUrl: 'datetime-content.component.html',
    styleUrls: ['datetime-content.component.less'],
    animations: [
        matDatepickerAnimations.transformPanel,
        matDatepickerAnimations.fadeInCalendar,
    ],
    exportAs: 'hctraMatDatetimeContent',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HctraMatDatetimeContentComponent<D> extends MatDatepickerContentMixinBase implements AfterViewInit, CanColor {
    @HostBinding('class') private readonly class = 'mat-datepicker-content';
    @HostBinding('@transformPanel') private readonly transformPanel = '"enter"';
    @HostBinding('class.mat-datepicker-content-touch') private readonly classMatDatepickerTouch = 'datepicker.touchUi';

    @Input() color: ThemePalette;

    /** Reference to the internal calendar component. */
    @ViewChild(HctraMatCalendarComponent) calendar: HctraMatCalendarComponent<D>;

    /** Reference to the internal time picker component. */
    @ViewChild(HctraMatTimepickerComponent) timePicker: HctraMatTimepickerComponent<D>;

    /** Reference to the datepicker that created the overlay. */
    public datepicker: HctraMatDatetimePickerComponent<D>;

    /** Whether the datepicker is above or below the input. */
    public isAbove: boolean;

    /** Whether or not the selected date is valid (min,max...) */
    get valid(): boolean {
        if (this.datepicker.hideTime) {
            return this.datepicker.valid;
        }
        return this.timePicker && this.timePicker.valid && this.datepicker.valid;
    }

    get isViewMonth(): boolean {
        if (!this.calendar || this.calendar.currentView === null || this.calendar.currentView === undefined) {
            return true;
        }
        return this.calendar.currentView === 'month';
    }

    public templateCustomIconPortal: TemplatePortal<any>;

    @Input() defaultColor: ThemePalette;

    constructor(private elementRef: ElementRef,
        private changeDetectorRef: ChangeDetectorRef,
        private viewContainerRef: ViewContainerRef) {

        super(elementRef);
    }

    ngAfterViewInit() {
        this.calendar.focusActiveCell();
        if (this.datepicker.customIcon) {
            this.templateCustomIconPortal = new TemplatePortal(
                this.datepicker.customIcon,
                this.viewContainerRef
            );
            this.changeDetectorRef.detectChanges();
        }

    }

}



// We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
@Component({
    selector: 'hctra-mat-datetime-picker',
    template: '',
    exportAs: 'hctraMatDatetimePicker',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class HctraMatDatetimePickerComponent<D> implements OnDestroy, CanColor {

    private scrollStrategy: () => ScrollStrategy;

    /** An input indicating the type of the custom header component for the calendar, if set. */
    @Input() calendarHeaderComponent: ComponentType<any>;

    /** Custom icon set by the consumer. */
    @ContentChild(TemplateRef) customIcon: TemplateRef<any>;

    /** The date to open the calendar to initially. */
    @Input()
    get startAt(): D | null {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        return this.internalStartAt || (this.datepickerInput ? this.datepickerInput.value : null);
    }
    set startAt(value: D | null) {
        this.internalStartAt = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    private internalStartAt: D | null;

    /** The view that the calendar should start in. */
    @Input() startView: 'month' | 'year' | 'multi-year' = 'month';

    /** Default Color palette to use on the datepicker's calendar. */
    @Input()
    get defaultColor(): ThemePalette {
        return this.internalDefaultColor;
    }
    set defaultColor(value: ThemePalette) {
        this.internalDefaultColor = value;
    }
    internalDefaultColor: ThemePalette = 'primary';

    /** Color palette to use on the datepicker's calendar. */
    @Input()
    get color(): ThemePalette {
        return this.internalColor ||
            (this.datepickerInput ? this.datepickerInput.getThemePalette() : 'primary');
    }
    set color(value: ThemePalette) {
        this.internalColor = value;
    }
    internalColor: ThemePalette;

    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     */
    @Input()
    get touchUi(): boolean { return this.internalTouchUi; }
    set touchUi(value: boolean) {
        this.internalTouchUi = coerceBooleanProperty(value);
    }
    private internalTouchUi = false;

    @Input()
    get hideTime(): boolean { return this.internalHideTime; }
    set hideTime(value: boolean) {
        this.internalHideTime = coerceBooleanProperty(value);
    }
    public internalHideTime = false;

    /** Whether the datepicker pop-up should be disabled. */
    @Input()
    get disabled(): boolean {
        return this.internalDisabled === undefined && this.datepickerInput
            ? this.datepickerInput.disabled
            : !!this.internalDisabled;
    }
    set disabled(value: boolean) {
        const newValue = coerceBooleanProperty(value);

        if (newValue !== this.internalDisabled) {
            this.internalDisabled = newValue;
            this.stateChanges.next(newValue);
        }
    }
    public internalDisabled: boolean;

    /**
     * Emits selected year in multiyear view.
     * This doesn't imply a change on the selected date.
     */
    @Output() readonly yearSelected: EventEmitter<D> = new EventEmitter<D>();

    /**
     * Emits selected month in year view.
     * This doesn't imply a change on the selected date.
     */
    @Output() readonly monthSelected: EventEmitter<D> = new EventEmitter<D>();

    /** Classes to be passed to the date picker panel. Supports the same syntax as `ngClass`. */
    @Input() panelClass: string | string[];

    /** Function that can be used to add custom CSS classes to dates. */
    @Input() dateClass: (date: D) => MatCalendarCellCssClasses;

    /** Emits when the datepicker has been opened. */
    @Output() openedStream: EventEmitter<void> = new EventEmitter<void>();

    /** Emits when the datepicker has been closed. */
    @Output() closedStream: EventEmitter<void> = new EventEmitter<void>();


    /** Whether the calendar is open. */
    @Input()
    get opened(): boolean { return this.internalOpened; }
    set opened(value: boolean) {
        if (value) {
            this.open();
        } else {
            this.close();
        }
    }
    private internalOpened = false;

    /** Whether the timepicker'spinners is shown. */
    @Input()
    get showSpinners(): boolean { return this.internalShowSpinners; }
    set showSpinners(value: boolean) { this.internalShowSpinners = value; }
    public internalShowSpinners = true;

    /** Whether the second part is disabled. */
    @Input()
    get showSeconds(): boolean { return this.internalShowSeconds; }
    set showSeconds(value: boolean) { this.internalShowSeconds = value; }
    public internalShowSeconds = false;

    /** Step hour */
    @Input()
    get stepHour(): number { return this.internalStepHour; }
    set stepHour(value: number) { this.internalStepHour = value; }
    public internalStepHour: number = DEFAULT_STEP;

    /** Step minute */
    @Input()
    get stepMinute(): number { return this.internalStepMinute; }
    set stepMinute(value: number) { this.internalStepMinute = value; }
    public internalStepMinute: number = DEFAULT_STEP;

    /** Step second */
    @Input()
    get stepSecond(): number { return this.internalStepSecond; }
    set stepSecond(value: number) { this.internalStepSecond = value; }
    public internalStepSecond: number = DEFAULT_STEP;

    /** Enable meridian */
    @Input()
    get enableMeridian(): boolean { return this.internalEnableMeridian; }
    set enableMeridian(value: boolean) { this.internalEnableMeridian = value; }
    public internalEnableMeridian = false;

    /** disable minute */
    @Input()
    get disableMinute(): boolean { return this.internalDisableMinute; }
    set disableMinute(value: boolean) { this.internalDisableMinute = value; }
    public internalDisableMinute: boolean;

    /** Step second */
    @Input()
    get defaultTime(): number[] { return this.internalDefaultTime; }
    set defaultTime(value: number[]) { this.internalDefaultTime = value; }
    public internalDefaultTime: number[];

    private hasBackdrop = true;

    /** The id for the datepicker calendar. */
    public id = `mat-datepicker-${datepickerUid++}`;

    /** The currently selected date. */
    get selected(): D | null { return this.validSelected; }
    set selected(value: D | null) { this.validSelected = value; }
    private validSelected: D | null = null;

    /** The minimum selectable date. */
    get minDate(): D | null {
        return this.datepickerInput && this.datepickerInput.min;
    }

    /** The maximum selectable date. */
    get maxDate(): D | null {
        return this.datepickerInput && this.datepickerInput.max;
    }

    get valid(): boolean {
        const minValidators = this.minValidator();
        const maxValidators = this.maxValidator();
        return minValidators == null && maxValidators == null;
    }

    get dateFilter(): (date: D | null) => boolean {
        return this.datepickerInput && this.datepickerInput.dateFilter;
    }

    /** A reference to the overlay when the calendar is opened as a popup. */
    public popupRef: OverlayRef;

    /** A reference to the dialog when the calendar is opened as a dialog. */
    private dialogRef: MatDialogRef<HctraMatDatetimeContentComponent<D>> | null;

    /** A portal containing the calendar for this datepicker. */
    private calendarPortal: ComponentPortal<HctraMatDatetimeContentComponent<D>>;

    /** Reference to the component instantiated in popup mode. */
    private popupComponentRef: ComponentRef<HctraMatDatetimeContentComponent<D>> | null;

    /** The element that was focused before the datepicker was opened. */
    private focusedElementBeforeOpen: HTMLElement | null = null;

    /** Subscription to value changes in the associated input element. */
    private inputSubscription = Subscription.EMPTY;

    /** The input element this datepicker is associated with. */
    public datepickerInput: HctraMatDatetimeInputDirective<D>;

    /** Emits when the datepicker is disabled. */
    public readonly stateChanges = new Subject<boolean>();

    /** Emits new selected date when selected date changes. */
    public readonly selectedChanged = new Subject<D>();

    /** Raw value before  */
    private rawValue: D;

    constructor(private dialog: MatDialog,
        private overlay: Overlay,
        private ngZone: NgZone,
        private viewContainerRef: ViewContainerRef,
        @Inject(MAT_DATEPICKER_SCROLL_STRATEGY) scrollStrategy: any,
        @Optional() private dateAdapter: HctraMatDateAdapter<D>,
        @Optional() private dir: Directionality,
        @Optional() @Inject(DOCUMENT) private document: any) {

        if (!this.dateAdapter) {
            throw createMissingDateImplError('HctraMatDateAdapter');
        }

        this.scrollStrategy = scrollStrategy;
    }

    ngOnDestroy() {
        this.close();

        if (this.popupRef) {
            this.popupRef.dispose();
            this.popupComponentRef = null;
        }
        this.inputSubscription.unsubscribe();
        this.stateChanges.complete();
    }

    /** The form control validator for the min date. */
    private minValidator = (): ValidationErrors | null =>
        (!this.minDate || !this.selected || this.dateAdapter.compareDateWithTime(this.minDate, this.selected, this.showSeconds) <= 0)
            ? null
            : { matDatetimePickerMin: { min: this.minDate, actual: this.selected } };

    /** The form control validator for the max date. */
    private maxValidator = (): ValidationErrors | null =>
        (!this.maxDate || !this.selected || this.dateAdapter.compareDateWithTime(this.maxDate, this.selected, this.showSeconds) >= 0)
            ? null
            : { matDatetimePickerMax: { max: this.maxDate, actual: this.selected } };

    /** Selects the given date */
    public select(date: D): void {
        this.dateAdapter.copyTime(date, this.selected);
        this.selected = date;
    }

    /** Emits the selected year in multiyear view */
    public selectYear(normalizedYear: D): void {
        this.yearSelected.emit(normalizedYear);
    }

    /** Emits selected month in year view */
    public selectMonth(normalizedMonth: D): void {
        this.monthSelected.emit(normalizedMonth);
    }

    /** OK button handler and close*/
    public ok(): void {
        const cloned = this.dateAdapter.clone(this.selected);
        this.selectedChanged.next(cloned);
        this.close();
    }

    /** Cancel and close */
    public cancel(): void {
        this.selected = this.rawValue;
        this.close();
    }

    /**
     * Register an input with this datepicker.
     * 
     * @param input The datepicker input to register with this datepicker.
     */
    public registerInput(input: HctraMatDatetimeInputDirective<D>): void {
        if (this.datepickerInput) {
            throw Error('A HctraMatDatepicker can only be associated with a single input.');
        }
        this.datepickerInput = input;
        this.inputSubscription = this.datepickerInput.valueChange.subscribe((value: D | null) => this.selected = value);
    }

    /** Open the calendar. */
    public open(): void {
        this.rawValue = this.selected != null
            ? this.dateAdapter.clone(this.selected) : null;

        if (this.selected == null) {
            this.selected = this.dateAdapter.today();
            if (this.defaultTime != null) {
                this.dateAdapter.setTimeByDefaultValues(this.selected, this.defaultTime);
            }
        }

        if (this.internalOpened || this.disabled) {
            return;
        }
        if (!this.datepickerInput) {
            throw Error('Attempted to open an HctraMatDatepicker with no associated input.');
        }
        if (this.document) {
            this.focusedElementBeforeOpen = this.document.activeElement;
        }

        if (this.touchUi) {
            this.openAsDialog();
        } else {
            this.openAsPopup();
        }
        this.internalOpened = true;
        this.openedStream.emit();
    }

    /** Close the calendar. */
    public close(): void {
        if (!this.internalOpened) {
            return;
        }
        if (this.popupRef && this.popupRef.hasAttached()) {
            this.popupRef.detach();
        }
        if (this.dialogRef) {
            this.dialogRef.close();
            this.dialogRef = null;
        }
        if (this.calendarPortal && this.calendarPortal.isAttached) {
            this.calendarPortal.detach();
        }

        const completeClose = () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this.internalOpened) {
                this.internalOpened = false;
                this.closedStream.emit();
                this.focusedElementBeforeOpen = null;
            }
        };

        if (this.focusedElementBeforeOpen &&
            typeof this.focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this.focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        } else {
            completeClose();
        }
    }

    /** Open the calendar as a dialog. */
    private openAsDialog(): void {
        // Usually this would be handled by `open` which ensures that we can only have one overlay
        // open at a time, however since we reset the variables in async handlers some overlays
        // may slip through if the user opens and closes multiple times in quick succession (e.g.
        // by holding down the enter key).
        if (this.dialogRef) {
            this.dialogRef.close();
        }

        this.dialogRef = this.dialog.open<HctraMatDatetimeContentComponent<D>>(HctraMatDatetimeContentComponent, {
            direction: this.dir ? this.dir.value : 'ltr',
            viewContainerRef: this.viewContainerRef,
            panelClass: 'mat-datepicker-dialog',
            hasBackdrop: this.hasBackdrop
        });

        this.dialogRef.afterClosed().subscribe(() => this.close());
        this.dialogRef.componentInstance.datepicker = this;
        this.setColor();
    }

    /** Open the calendar as a popup. */
    private openAsPopup(): void {
        if (!this.calendarPortal) {
            this.calendarPortal = new ComponentPortal<HctraMatDatetimeContentComponent<D>>(HctraMatDatetimeContentComponent,
                this.viewContainerRef);
        }

        if (!this.popupRef) {
            this.createPopup();
        }

        if (!this.popupRef.hasAttached()) {
            this.popupComponentRef = this.popupRef.attach(this.calendarPortal);
            this.popupComponentRef.instance.datepicker = this;
            this.setColor();

            // Update the position once the calendar has rendered.
            this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
                this.popupRef.updatePosition();
            });
        }
    }

    /** Create the popup. */
    private createPopup(): void {
        const overlayConfig = new OverlayConfig({
            positionStrategy: this.createPopupPositionStrategy(),
            hasBackdrop: this.hasBackdrop,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this.dir,
            scrollStrategy: this.scrollStrategy(),
            panelClass: 'mat-datepicker-popup',
        });

        this.popupRef = this.overlay.create(overlayConfig);
        this.popupRef.overlayElement.setAttribute('role', 'dialog');

        merge(
            this.popupRef.backdropClick(),
            this.popupRef.detachments(),
            this.popupRef.keydownEvents().pipe(filter(event =>
                // Closing on alt + up is only valid when there's an input associated with the datepicker.
                event.keyCode === ESCAPE || (this.datepickerInput && event.altKey && event.keyCode === UP_ARROW)
            ))
        ).subscribe(event => {
            if (event) {
                event.preventDefault();
            }

            if (this.hasBackdrop && event) {
                this.cancel();
            } else {
                this.close();
            }

        });
    }

    /** Create the popup PositionStrategy. */
    private createPopupPositionStrategy(): PositionStrategy {
        return this.overlay.position()
            .flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mat-datepicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition()
            .withPositions([
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'bottom'
                }
            ]);
    }

    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    private getValidDateOrNull(obj: any): D | null {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }

    /** Passes the current theme color along to the calendar overlay. */
    private setColor(): void {
        const color = this.color;
        if (this.popupComponentRef) {
            this.popupComponentRef.instance.color = color;
        }
        if (this.dialogRef) {
            this.dialogRef.componentInstance.color = color;
        }
    }

}
