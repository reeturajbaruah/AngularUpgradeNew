/**
 * Taken from https://www.npmjs.com/package/@angular-material-components/datetime-picker
 */

import { Directionality } from '@angular/cdk/bidi';
import {
    DOWN_ARROW,
    END,
    ENTER, ESCAPE, HOME,
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
    Output, ViewChild, ViewEncapsulation
} from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { HctraMatCalendarBodyComponent, HctraMatCalendarCell, HctraMatCalendarCellCssClasses, HctraMatCalendarUserEvent } from './calendar-body';
import { HctraMatDateAdapter } from './core/date-adapter';
import { HctraMatDateFormats, HCTRA_MAT_DATE_FORMATS } from './core/date-formats';
import { HctraMatDateRangeSelectionStrategy, HCTRA_MAT_DATE_RANGE_SELECTION_STRATEGY } from './date-range-selection-strategy';
import { createMissingDateImplError } from './utils/date-utils';


const DAYS_PER_WEEK = 7;


/**
 * An internal component used to display a single month in the datepicker.
 * 
 * @docs-private
 */
@Component({
    selector: 'hctra-mat-month-view',
    templateUrl: 'month-view.html',
    exportAs: 'hctraMatMonthView',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HctraMatMonthViewComponent<D> implements AfterContentInit, OnDestroy {
    private rerenderSubscription = Subscription.EMPTY;

    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     */
    @Input()
    get activeDate(): D { return this.internalActiveDate; }
    set activeDate(value: D) {
        const oldActiveDate = this.internalActiveDate;
        const validDate =
            this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
        this.internalActiveDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!this.hasSameMonthAndYear(oldActiveDate, this.internalActiveDate)) {
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

        this.setRanges(this.internalSelected);
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

    /** Function used to filter which dates are selectable. */
    @Input() dateFilter: (date: D) => boolean;

    /** Function that can be used to add custom CSS classes to dates. */
    @Input() dateClass: (date: D) => HctraMatCalendarCellCssClasses;

    /** Start of the comparison range. */
    @Input() comparisonStart: D | null;

    /** End of the comparison range. */
    @Input() comparisonEnd: D | null;

    /** Emits when a new date is selected. */
    @Output() readonly selectedChange: EventEmitter<D | null> = new EventEmitter<D | null>();

    /** Emits when any date is selected. */
    @Output() readonly userSelection: EventEmitter<HctraMatCalendarUserEvent<D | null>> =
        new EventEmitter<HctraMatCalendarUserEvent<D | null>>();

    /** Emits when any date is activated. */
    @Output() readonly activeDateChange: EventEmitter<D> = new EventEmitter<D>();

    /** The body of calendar table */
    @ViewChild(HctraMatCalendarBodyComponent) matCalendarBody: HctraMatCalendarBodyComponent;

    /** The label for this month (e.g. "January 2017"). */
    public monthLabel: string;

    /** Grid of calendar cells representing the dates of the month. */
    public weeks: HctraMatCalendarCell[][];

    /** The number of blank cells in the first row before the 1st of the month. */
    public firstWeekOffset: number;

    /** Start value of the currently-shown date range. */
    public rangeStart: number | null;

    /** End value of the currently-shown date range. */
    public rangeEnd: number | null;

    /** Start value of the currently-shown comparison date range. */
    public comparisonRangeStart: number | null;

    /** End value of the currently-shown comparison date range. */
    public comparisonRangeEnd: number | null;

    /** Start of the preview range. */
    public previewStart: number | null;

    /** End of the preview range. */
    public previewEnd: number | null;

    /** Whether the user is currently selecting a range of dates. */
    public isRange: boolean;

    /** The date of the month that today falls on. Null if today is in another month. */
    public todayDate: number | null;

    /** The names of the weekdays. */
    public weekdays: { long: string; narrow: string }[];

    constructor(private changeDetectorRef: ChangeDetectorRef,
        @Optional() @Inject(HCTRA_MAT_DATE_FORMATS) private dateFormats: HctraMatDateFormats,
        @Optional() public dateAdapter: HctraMatDateAdapter<D>,
        @Optional() private dir?: Directionality,
        @Inject(HCTRA_MAT_DATE_RANGE_SELECTION_STRATEGY) @Optional()
        private rangeStrategy?: HctraMatDateRangeSelectionStrategy<D>) {

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

    /** Handles when a new date is selected. */
    public dateSelected(event: HctraMatCalendarUserEvent<number>) {
        const date = event.value;
        const selectedYear = this.dateAdapter.getYear(this.activeDate);
        const selectedMonth = this.dateAdapter.getMonth(this.activeDate);
        const selectedDate = this.dateAdapter.createDate(selectedYear, selectedMonth, date);
        let rangeStartDate: number | null;
        let rangeEndDate: number | null;

        if (this.internalSelected instanceof DateRange) {
            rangeStartDate = this.getDateInCurrentMonth(this.internalSelected.start);
            rangeEndDate = this.getDateInCurrentMonth(this.internalSelected.end);
        } else {
            rangeStartDate = rangeEndDate = this.getDateInCurrentMonth(this.internalSelected);
        }

        if (rangeStartDate !== date || rangeEndDate !== date) {
            this.selectedChange.emit(selectedDate);
        }

        this.userSelection.emit({ value: selectedDate, event: event.event });
    }

    /** Handles keydown events on the calendar body when calendar is in month view. */
    public handleCalendarBodyKeydown(event: KeyboardEvent): void {
        // We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.

        const oldActiveDate = this.internalActiveDate;
        const isRtl = this.isRtl();

        switch (event.keyCode) {
            case LEFT_ARROW:
                this.activeDate = this.dateAdapter.addCalendarDays(this.internalActiveDate, isRtl ? 1 : -1);
                break;
            case RIGHT_ARROW:
                this.activeDate = this.dateAdapter.addCalendarDays(this.internalActiveDate, isRtl ? -1 : 1);
                break;
            case UP_ARROW:
                this.activeDate = this.dateAdapter.addCalendarDays(this.internalActiveDate, -7);
                break;
            case DOWN_ARROW:
                this.activeDate = this.dateAdapter.addCalendarDays(this.internalActiveDate, 7);
                break;
            case HOME:
                this.activeDate = this.dateAdapter.addCalendarDays(this.internalActiveDate,
                    1 - this.dateAdapter.getDate(this.internalActiveDate));
                break;
            case END:
                this.activeDate = this.dateAdapter.addCalendarDays(this.internalActiveDate,
                    (this.dateAdapter.getNumDaysInMonth(this.internalActiveDate) -
                        this.dateAdapter.getDate(this.internalActiveDate)));
                break;
            case PAGE_UP:
                this.activeDate = event.altKey ?
                    this.dateAdapter.addCalendarYears(this.internalActiveDate, -1) :
                    this.dateAdapter.addCalendarMonths(this.internalActiveDate, -1);
                break;
            case PAGE_DOWN:
                this.activeDate = event.altKey ?
                    this.dateAdapter.addCalendarYears(this.internalActiveDate, 1) :
                    this.dateAdapter.addCalendarMonths(this.internalActiveDate, 1);
                break;
            case ENTER:
            case SPACE:
                if (!this.dateFilter || this.dateFilter(this.internalActiveDate)) {
                    this.dateSelected({ value: this.dateAdapter.getDate(this.internalActiveDate), event });
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            case ESCAPE:
                // Abort the current range selection if the user presses escape mid-selection.
                if (this.previewEnd != null) {
                    this.previewStart = this.previewEnd = null;
                    this.selectedChange.emit(null);
                    this.userSelection.emit({ value: null, event });
                    event.preventDefault();
                    event.stopPropagation(); // Prevents the overlay from closing.
                }
                return;
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

    /** Initializes this month view. */
    public init() {
        this.setRanges(this.selected);
        this.todayDate = this.getCellCompareValue(this.dateAdapter.today());
        this.monthLabel =
            this.dateAdapter.getMonthNames('short')[this.dateAdapter.getMonth(this.activeDate)]
                .toLocaleUpperCase();

        const firstOfMonth = this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate),
            this.dateAdapter.getMonth(this.activeDate), 1);
        this.firstWeekOffset =
            (DAYS_PER_WEEK + this.dateAdapter.getDayOfWeek(firstOfMonth) -
                this.dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;

        this.initWeekdays();
        this.createWeekCells();
        this.changeDetectorRef.markForCheck();
    }

    /** Focuses the active cell after the microtask queue is empty. */
    public focusActiveCell(movePreview?: boolean) {
        this.matCalendarBody.focusActiveCell(movePreview);
    }

    /** Called when the user has activated a new cell and the preview needs to be updated. */
    public previewChanged({ event, value: cell }: HctraMatCalendarUserEvent<HctraMatCalendarCell<D> | null>) {
        if (this.rangeStrategy) {
            // We can assume that this will be a range, because preview
            // events aren't fired for single date selections.
            const value = cell ? cell.rawValue : null;
            const previewRange =
                this.rangeStrategy.createPreview(value, this.selected as DateRange<D>, event);
            this.previewStart = this.getCellCompareValue(previewRange.start);
            this.previewEnd = this.getCellCompareValue(previewRange.end);

            // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
            // the way `focusActiveCell` is set up at the moment makes it fire at the wrong time
            // when navigating one month back using the keyboard which will cause this handler
            // to throw a "changed after checked" error when updating the preview state.
            this.changeDetectorRef.detectChanges();
        }
    }

    /** Initializes the weekdays. */
    private initWeekdays() {
        const firstDayOfWeek = this.dateAdapter.getFirstDayOfWeek();
        const narrowWeekdays = this.dateAdapter.getDayOfWeekNames('narrow');
        const longWeekdays = this.dateAdapter.getDayOfWeekNames('long');

        // Rotate the labels for days of the week based on the configured first day of the week.
        const weekdays = longWeekdays.map((long, i) => ({ long, narrow: narrowWeekdays[i] }));
        this.weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    }

    /** Creates MatCalendarCells for the dates in this month. */
    private createWeekCells() {
        const daysInMonth = this.dateAdapter.getNumDaysInMonth(this.activeDate);
        const dateNames = this.dateAdapter.getDateNames();
        this.weeks = [[]];
        for (let i = 0, cell = this.firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell === DAYS_PER_WEEK) {
                this.weeks.push([]);
                cell = 0;
            }
            const date = this.dateAdapter.createDate(
                this.dateAdapter.getYear(this.activeDate),
                this.dateAdapter.getMonth(this.activeDate), i + 1);
            const enabled = this.shouldEnableDate(date);
            const ariaLabel = this.dateAdapter.format(date, this.dateFormats.display.dateA11yLabel);
            const cellClasses = this.dateClass ? this.dateClass(date) : undefined;

            this.weeks[this.weeks.length - 1].push(new HctraMatCalendarCell<D>(i + 1, dateNames[i],
                ariaLabel, enabled, cellClasses, this.getCellCompareValue(date), date));
        }
    }

    /** Date filter for the month */
    private shouldEnableDate(date: D): boolean {
        return !!date &&
            (!this.minDate || this.dateAdapter.compareDate(date, this.minDate) >= 0) &&
            (!this.maxDate || this.dateAdapter.compareDate(date, this.maxDate) <= 0) &&
            (!this.dateFilter || this.dateFilter(date));
    }

    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    private getDateInCurrentMonth(date: D | null): number | null {
        return date && this.hasSameMonthAndYear(date, this.activeDate) ?
            this.dateAdapter.getDate(date) : null;
    }

    /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
    private hasSameMonthAndYear(d1: D | null, d2: D | null): boolean {
        return !!(d1 && d2 && this.dateAdapter.getMonth(d1) === this.dateAdapter.getMonth(d2) &&
            this.dateAdapter.getYear(d1) === this.dateAdapter.getYear(d2));
    }

    /** Gets the value that will be used to one cell to another. */
    private getCellCompareValue(date: D | null): number | null {
        if (date) {
            // We use the time since the Unix epoch to compare dates in this view, rather than the
            // cell values, because we need to support ranges that span across multiple months/years.
            const year = this.dateAdapter.getYear(date);
            const month = this.dateAdapter.getMonth(date);
            const day = this.dateAdapter.getDate(date);
            return new Date(year, month, day).getTime();
        }

        return null;
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

    /** Sets the current range based on a model value. */
    private setRanges(selectedValue: DateRange<D> | D | null) {
        if (selectedValue instanceof DateRange) {
            this.rangeStart = this.getCellCompareValue(selectedValue.start);
            this.rangeEnd = this.getCellCompareValue(selectedValue.end);
            this.isRange = true;
        } else {
            this.rangeStart = this.rangeEnd = this.getCellCompareValue(selectedValue);
            this.isRange = false;
        }

        this.comparisonRangeStart = this.getCellCompareValue(this.comparisonStart);
        this.comparisonRangeEnd = this.getCellCompareValue(this.comparisonEnd);
    }
}
