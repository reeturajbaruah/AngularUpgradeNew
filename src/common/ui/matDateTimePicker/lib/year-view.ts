/**
 * Taken from https://www.npmjs.com/package/@angular-material-components/datetime-picker
 */

import { Directionality } from '@angular/cdk/bidi';
import {
    DOWN_ARROW,
    END,
    ENTER,
    HOME,
    LEFT_ARROW,
    PAGE_DOWN,
    PAGE_UP,
    RIGHT_ARROW, SPACE, UP_ARROW
} from '@angular/cdk/keycodes';
import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Inject,
    Input, OnDestroy, Optional,
    Output,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { HctraMatCalendarBodyComponent, HctraMatCalendarCell, HctraMatCalendarUserEvent } from './calendar-body';
import { HctraMatDateAdapter } from './core/date-adapter';
import { HctraMatDateFormats, HCTRA_MAT_DATE_FORMATS } from './core/date-formats';
import { createMissingDateImplError } from './utils/date-utils';


/**
 * An internal component used to display a single year in the datepicker.
 * 
 * @docs-private
 */
@Component({
    selector: 'hctra-mat-year-view',
    templateUrl: 'year-view.html',
    exportAs: 'hctraMatYearView',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HctraMatYearViewComponent<D> implements AfterContentInit, OnDestroy {
    private rerenderSubscription = Subscription.EMPTY;

    /** The date to display in this year view (everything other than the year is ignored). */
    @Input()
    get activeDate(): D { return this.internalActiveDate; }
    set activeDate(value: D) {
        const oldActiveDate = this.internalActiveDate;
        const validDate =
            this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
        this.internalActiveDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (this.dateAdapter.getYear(oldActiveDate) !== this.dateAdapter.getYear(this.internalActiveDate)) {
            this.init();
        }
    }
    private internalActiveDate: D;

    /** The currently selected date. */
    @Input()
    get selected(): DateRange<D> | D | null { return this.internalSelected; }
    set selected(value: DateRange<D> | D | null) {
        if (value instanceof DateRange) {
            this.internalSelected = value;
        } else {
            this.internalSelected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
        }

        this.setSelectedMonth(value);
    }
    private internalSelected: DateRange<D> | D | null;

    /** The minimum selectable date. */
    @Input()
    get minDate(): D | null { return this.internalMinDate; }
    set minDate(value: D | null) {
        this.internalMinDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    private internalMinDate: D | null;

    /** The maximum selectable date. */
    @Input()
    get maxDate(): D | null { return this.internalMaxDate; }
    set maxDate(value: D | null) {
        this.internalMaxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    private internalMaxDate: D | null;

    /** A function used to filter which dates are selectable. */
    @Input() dateFilter: (date: D) => boolean;

    /** Emits when a new month is selected. */
    @Output() readonly selectedChange: EventEmitter<D> = new EventEmitter<D>();

    /** Emits the selected month. This doesn't imply a change on the selected date */
    @Output() readonly monthSelected: EventEmitter<D> = new EventEmitter<D>();

    /** Emits when any date is activated. */
    @Output() readonly activeDateChange: EventEmitter<D> = new EventEmitter<D>();

    /** The body of calendar table */
    @ViewChild(HctraMatCalendarBodyComponent) matCalendarBody: HctraMatCalendarBodyComponent;

    /** Grid of calendar cells representing the months of the year. */
    public months: HctraMatCalendarCell[][];

    /** The label for this year (e.g. "2017"). */
    public yearLabel: string;

    /** The month in this year that today falls on. Null if today is in a different year. */
    public todayMonth: number | null;

    /**
     * The month in this year that the selected Date falls on.
     * Null if the selected Date is in a different year.
     */
    public selectedMonth: number | null;

    constructor(private changeDetectorRef: ChangeDetectorRef,
        @Optional() @Inject(HCTRA_MAT_DATE_FORMATS) private dateFormats: HctraMatDateFormats,
        @Optional() public dateAdapter: HctraMatDateAdapter<D>,
        @Optional() private dir?: Directionality) {
        if (!this.dateAdapter) {
            throw createMissingDateImplError('HctraMatDateAdapter');
        }
        if (!this.dateFormats) {
            throw createMissingDateImplError('HCTRA_MAT_DATE_FORMATS');
        }

        this.internalActiveDate = this.dateAdapter.today();
    }

    ngAfterContentInit() {
        this.rerenderSubscription = this.dateAdapter.localeChanges
            .pipe(startWith(null))
            .subscribe(() => this.init());
    }

    ngOnDestroy() {
        this.rerenderSubscription.unsubscribe();
    }

    /** Handles when a new month is selected. */
    public internalMonthSelected(event: HctraMatCalendarUserEvent<number>) {
        const month = event.value;
        const normalizedDate =
            this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), month, 1);

        this.monthSelected.emit(normalizedDate);

        const daysInMonth = this.dateAdapter.getNumDaysInMonth(normalizedDate);

        this.selectedChange.emit(this.dateAdapter.createDate(
            this.dateAdapter.getYear(this.activeDate), month,
            Math.min(this.dateAdapter.getDate(this.activeDate), daysInMonth)));
    }

    /** Handles keydown events on the calendar body when calendar is in year view. */
    public handleCalendarBodyKeydown(event: KeyboardEvent): void {
        // We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.

        const oldActiveDate = this.internalActiveDate;
        const isRtl = this.isRtl();

        switch (event.keyCode) {
            case LEFT_ARROW:
                this.activeDate = this.dateAdapter.addCalendarMonths(this.internalActiveDate, isRtl ? 1 : -1);
                break;
            case RIGHT_ARROW:
                this.activeDate = this.dateAdapter.addCalendarMonths(this.internalActiveDate, isRtl ? -1 : 1);
                break;
            case UP_ARROW:
                this.activeDate = this.dateAdapter.addCalendarMonths(this.internalActiveDate, -4);
                break;
            case DOWN_ARROW:
                this.activeDate = this.dateAdapter.addCalendarMonths(this.internalActiveDate, 4);
                break;
            case HOME:
                this.activeDate = this.dateAdapter.addCalendarMonths(this.internalActiveDate,
                    -this.dateAdapter.getMonth(this.internalActiveDate));
                break;
            case END:
                this.activeDate = this.dateAdapter.addCalendarMonths(this.internalActiveDate,
                    11 - this.dateAdapter.getMonth(this.internalActiveDate));
                break;
            case PAGE_UP:
                this.activeDate =
                    this.dateAdapter.addCalendarYears(this.internalActiveDate, event.altKey ? -10 : -1);
                break;
            case PAGE_DOWN:
                this.activeDate =
                    this.dateAdapter.addCalendarYears(this.internalActiveDate, event.altKey ? 10 : 1);
                break;
            case ENTER:
            case SPACE:
                this.internalMonthSelected({ value: this.dateAdapter.getMonth(this.internalActiveDate), event });
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }

        if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }

        this.focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }

    /** Initializes this year view. */
    init() {
        this.setSelectedMonth(this.selected);
        this.todayMonth = this.getMonthInCurrentYear(this.dateAdapter.today());
        this.yearLabel = this.dateAdapter.getYearName(this.activeDate);

        const monthNames = this.dateAdapter.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this.months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(row => row.map(
            month => this.createCellForMonth(month, monthNames[month])));
        this.changeDetectorRef.markForCheck();
    }

    /** Focuses the active cell after the microtask queue is empty. */
    focusActiveCell() {
        this.matCalendarBody.focusActiveCell();
    }

    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    private getMonthInCurrentYear(date: D | null) {
        return date && this.dateAdapter.getYear(date) === this.dateAdapter.getYear(this.activeDate) ?
            this.dateAdapter.getMonth(date) : null;
    }

    /** Creates an MatCalendarCell for the given month. */
    private createCellForMonth(month: number, monthName: string) {
        const ariaLabel = this.dateAdapter.format(
            this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), month, 1),
            this.dateFormats.display.monthYearA11yLabel);
        return new HctraMatCalendarCell(
            month, monthName.toLocaleUpperCase(), ariaLabel, this.shouldEnableMonth(month));
    }

    /** Whether the given month is enabled. */
    private shouldEnableMonth(month: number) {

        const activeYear = this.dateAdapter.getYear(this.activeDate);

        if (month === undefined || month === null ||
            this.isYearAndMonthAfterMaxDate(activeYear, month) ||
            this.isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
        }

        if (!this.dateFilter) {
            return true;
        }

        const firstOfMonth = this.dateAdapter.createDate(activeYear, month, 1);

        // If any date in the month is enabled count the month as enabled.
        for (let date = firstOfMonth; this.dateAdapter.getMonth(date) === month;
            date = this.dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     */
    private isYearAndMonthAfterMaxDate(year: number, month: number) {
        if (this.maxDate) {
            const maxYear = this.dateAdapter.getYear(this.maxDate);
            const maxMonth = this.dateAdapter.getMonth(this.maxDate);

            return year > maxYear || (year === maxYear && month > maxMonth);
        }

        return false;
    }

    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     */
    private isYearAndMonthBeforeMinDate(year: number, month: number) {
        if (this.minDate) {
            const minYear = this.dateAdapter.getYear(this.minDate);
            const minMonth = this.dateAdapter.getMonth(this.minDate);

            return year < minYear || (year === minYear && month < minMonth);
        }

        return false;
    }

    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    private getValidDateOrNull(obj: any): D | null {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }

    /** Determines whether the user has the RTL layout direction. */
    private isRtl() {
        return this.dir && this.dir.value === 'rtl';
    }

    /** Sets the currently-selected month based on a model value. */
    private setSelectedMonth(value: DateRange<D> | D | null) {
        if (value instanceof DateRange) {
            this.selectedMonth = this.getMonthInCurrentYear(value.start) ||
                this.getMonthInCurrentYear(value.end);
        } else {
            this.selectedMonth = this.getMonthInCurrentYear(value);
        }
    }
}
