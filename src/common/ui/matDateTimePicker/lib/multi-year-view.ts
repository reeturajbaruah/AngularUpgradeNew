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
import { createMissingDateImplError } from './utils/date-utils';


export const yearsPerPage = 24;
export const yearsPerRow = 4;

/**
 * An internal component used to display a year selector in the datepicker.
 * 
 * @docs-private
 */
@Component({
    selector: 'hctra-mat-multi-year-view',
    templateUrl: 'multi-year-view.html',
    exportAs: 'hctraMatMultiYearView',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HctraMatMultiYearViewComponent<D> implements AfterContentInit, OnDestroy {
    private rerenderSubscription = Subscription.EMPTY;

    /** The date to display in this multi-year view (everything other than the year is ignored). */
    @Input()
    get activeDate(): D { return this.internalActiveDate; }
    set activeDate(value: D) {
        const oldActiveDate = this.internalActiveDate;
        const validDate =
            this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
        this.internalActiveDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

        if (!isSameMultiYearView(
            this.dateAdapter, oldActiveDate, this.internalActiveDate, this.minDate, this.maxDate)) {
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

        this.setSelectedYear(value);
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

    /** Emits when a new year is selected. */
    @Output() readonly selectedChange: EventEmitter<D> = new EventEmitter<D>();

    /** Emits the selected year. This doesn't imply a change on the selected date */
    @Output() readonly yearSelected: EventEmitter<D> = new EventEmitter<D>();

    /** Emits when any date is activated. */
    @Output() readonly activeDateChange: EventEmitter<D> = new EventEmitter<D>();

    /** The body of calendar table */
    @ViewChild(HctraMatCalendarBodyComponent) matCalendarBody: HctraMatCalendarBodyComponent;

    /** Grid of calendar cells representing the currently displayed years. */
    public years: HctraMatCalendarCell[][];

    /** The year that today falls on. */
    public todayYear: number;

    /** The year of the selected date. Null if the selected date is null. */
    public selectedYear: number | null;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        @Optional() public dateAdapter: HctraMatDateAdapter<D>,
        @Optional() private dir?: Directionality) {

        if (!this.dateAdapter) {
            throw createMissingDateImplError('HctraMatDateAdapter');
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

    /** Initializes this multi-year view. */
    public init() {
        this.todayYear = this.dateAdapter.getYear(this.dateAdapter.today());

        // We want a range years such that we maximize the number of
        // enabled dates visible at once. This prevents issues where the minimum year
        // is the last item of a page OR the maximum year is the first item of a page.

        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view.
        const activeYear = this.dateAdapter.getYear(this.internalActiveDate);
        const minYearOfPage = activeYear - getActiveOffset(
            this.dateAdapter, this.activeDate, this.minDate, this.maxDate);

        this.years = [];
        for (let i = 0, row: number[] = []; i < yearsPerPage; i++) {
            row.push(minYearOfPage + i);
            if (row.length === yearsPerRow) {
                this.years.push(row.map(year => this.createCellForYear(year)));
                row = [];
            }
        }
        this.changeDetectorRef.markForCheck();
    }

    /** Handles when a new year is selected. */
    public internalYearSelected(event: HctraMatCalendarUserEvent<number>) {
        const year = event.value;
        this.yearSelected.emit(this.dateAdapter.createDate(year, 0, 1));
        const month = this.dateAdapter.getMonth(this.activeDate);
        const daysInMonth =
            this.dateAdapter.getNumDaysInMonth(this.dateAdapter.createDate(year, month, 1));
        this.selectedChange.emit(this.dateAdapter.createDate(year, month,
            Math.min(this.dateAdapter.getDate(this.activeDate), daysInMonth)));
    }

    /** Handles keydown events on the calendar body when calendar is in multi-year view. */
    public handleCalendarBodyKeydown(event: KeyboardEvent): void {
        const oldActiveDate = this.internalActiveDate;
        const isRtl = this.isRtl();

        switch (event.keyCode) {
            case LEFT_ARROW:
                this.activeDate = this.dateAdapter.addCalendarYears(this.internalActiveDate, isRtl ? 1 : -1);
                break;
            case RIGHT_ARROW:
                this.activeDate = this.dateAdapter.addCalendarYears(this.internalActiveDate, isRtl ? -1 : 1);
                break;
            case UP_ARROW:
                this.activeDate = this.dateAdapter.addCalendarYears(this.internalActiveDate, -yearsPerRow);
                break;
            case DOWN_ARROW:
                this.activeDate = this.dateAdapter.addCalendarYears(this.internalActiveDate, yearsPerRow);
                break;
            case HOME:
                this.activeDate = this.dateAdapter.addCalendarYears(this.internalActiveDate,
                    -getActiveOffset(this.dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;
            case END:
                this.activeDate = this.dateAdapter.addCalendarYears(this.internalActiveDate,
                    yearsPerPage - getActiveOffset(
                        this.dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;
            case PAGE_UP:
                this.activeDate =
                    this.dateAdapter.addCalendarYears(
                        this.internalActiveDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;
            case PAGE_DOWN:
                this.activeDate =
                    this.dateAdapter.addCalendarYears(
                        this.internalActiveDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;
            case ENTER:
            case SPACE:
                this.internalYearSelected({ value: this.dateAdapter.getYear(this.internalActiveDate), event });
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

    public getActiveCell(): number {
        return getActiveOffset(this.dateAdapter, this.activeDate, this.minDate, this.maxDate);
    }

    /** Focuses the active cell after the microtask queue is empty. */
    public focusActiveCell() {
        this.matCalendarBody.focusActiveCell();
    }

    /** Creates an MatCalendarCell for the given year. */
    private createCellForYear(year: number) {
        const yearName = this.dateAdapter.getYearName(this.dateAdapter.createDate(year, 0, 1));
        return new HctraMatCalendarCell(year, yearName, yearName, this.shouldEnableYear(year));
    }

    /** Whether the given year is enabled. */
    private shouldEnableYear(year: number) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this.dateAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this.dateAdapter.getYear(this.minDate))) {
            return false;
        }

        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }

        const firstOfYear = this.dateAdapter.createDate(year, 0, 1);

        // If any date in the year is enabled count the year as enabled.
        for (let date = firstOfYear; this.dateAdapter.getYear(date) === year;
            date = this.dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
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

    /** Sets the currently-highlighted year based on a model value. */
    private setSelectedYear(value: DateRange<D> | D | null) {
        this.selectedYear = null;

        if (value instanceof DateRange) {
            const displayValue = value.start || value.end;

            if (displayValue) {
                this.selectedYear = this.dateAdapter.getYear(displayValue);
            }
        } else if (value) {
            this.selectedYear = this.dateAdapter.getYear(value);
        }
    }
}

export const isSameMultiYearView = <D>(
    dateAdapter: HctraMatDateAdapter<D>,
    date1: D,
    date2: D,
    minDate: D | null,
    maxDate: D | null) => {

    const year1 = dateAdapter.getYear(date1);
    const year2 = dateAdapter.getYear(date2);
    const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
    return Math.floor((year1 - startingYear) / yearsPerPage) ===
        Math.floor((year2 - startingYear) / yearsPerPage);
};

/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */
export const getActiveOffset = <D>(
    dateAdapter: HctraMatDateAdapter<D>,
    activeDate: D,
    minDate: D | null,
    maxDate: D | null) => {

    const activeYear = dateAdapter.getYear(activeDate);
    return euclideanModulo((activeYear - getStartingYear(dateAdapter, minDate, maxDate)),
        yearsPerPage);
};

/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */
const getStartingYear = <D>(
    dateAdapter: HctraMatDateAdapter<D>,
    minDate: D | null,
    maxDate: D | null) => {

    let startingYear = 0;
    if (maxDate) {
        const maxYear = dateAdapter.getYear(maxDate);
        startingYear = maxYear - yearsPerPage + 1;
    } else if (minDate) {
        startingYear = dateAdapter.getYear(minDate);
    }
    return startingYear;
};

/** Gets remainder that is non-negative, even if first number is negative */
const euclideanModulo = (a: number, b: number) => ((a % b + b) % b);
