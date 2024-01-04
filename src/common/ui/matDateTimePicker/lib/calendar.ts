/**
 * Taken from https://www.npmjs.com/package/@angular-material-components/datetime-picker
 */

import { ComponentPortal, ComponentType, Portal } from '@angular/cdk/portal';
import {
    AfterContentInit, AfterViewChecked, ChangeDetectionStrategy,
    ChangeDetectorRef, Component, EventEmitter,
    forwardRef, HostBinding, Inject, Input,
    OnChanges, OnDestroy, Optional,
    Output, SimpleChanges, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { MatCalendarCellCssClasses, MatDatepickerIntl } from '@angular/material/datepicker';
import { Subject, Subscription } from 'rxjs';
import { HctraMatDateAdapter } from './core/date-adapter';
import { HctraMatDateFormats, HCTRA_MAT_DATE_FORMATS } from './core/date-formats';
import { HctraMatMonthViewComponent } from './month-view';
import { getActiveOffset, isSameMultiYearView, HctraMatMultiYearViewComponent, yearsPerPage } from './multi-year-view';
import { createMissingDateImplError, formatYearRange } from './utils/date-utils';
import { HctraMatYearViewComponent } from './year-view';

/**
 * Possible views for the calendar.
 * 
 * @docs-private
 */
export type MatCalendarView = 'month' | 'year' | 'multi-year';

/** Default header for HctraMatCalendarComponent */
@Component({
    selector: 'hctra-mat-calendar-header',
    templateUrl: 'calendar-header.html',
    exportAs: 'hctraMatCalendarHeader',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HctraMatCalendarHeaderComponent<D> {
    constructor(private intl: MatDatepickerIntl,
        @Inject(forwardRef(() => HctraMatCalendarComponent)) public calendar: HctraMatCalendarComponent<D>,
        @Optional() private dateAdapter: HctraMatDateAdapter<D>,
        @Optional() @Inject(HCTRA_MAT_DATE_FORMATS) private dateFormats: HctraMatDateFormats,
        changeDetectorRef: ChangeDetectorRef) {

        this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
    }

    /** The label for the current calendar view. */
    get periodButtonText(): string {
        if (this.calendar.currentView === 'month') {
            return this.dateAdapter
                .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        }
        if (this.calendar.currentView === 'year') {
            return this.dateAdapter.getYearName(this.calendar.activeDate);
        }

        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view, and the last year is
        // just yearsPerPage - 1 away.
        const activeYear = this.dateAdapter.getYear(this.calendar.activeDate);
        const minYearOfPage = activeYear - getActiveOffset(
            this.dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
        const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
        const minYearName =
            this.dateAdapter.getYearName(this.dateAdapter.createDate(minYearOfPage, 0, 1));
        const maxYearName =
            this.dateAdapter.getYearName(this.dateAdapter.createDate(maxYearOfPage, 0, 1));
        return formatYearRange(minYearName, maxYearName);
    }

    get periodButtonLabel(): string {
        return this.calendar.currentView === 'month' ?
            this.intl.switchToMultiYearViewLabel : this.intl.switchToMonthViewLabel;
    }

    /** The label for the previous button. */
    get prevButtonLabel(): string {
        return {
            month: this.intl.prevMonthLabel,
            year: this.intl.prevYearLabel,
            'multi-year': this.intl.prevMultiYearLabel
        }[this.calendar.currentView];
    }

    /** The label for the next button. */
    get nextButtonLabel(): string {
        return {
            month: this.intl.nextMonthLabel,
            year: this.intl.nextYearLabel,
            'multi-year': this.intl.nextMultiYearLabel
        }[this.calendar.currentView];
    }

    /** Handles user clicks on the period label. */
    public currentPeriodClicked(): void {
        this.calendar.currentView = this.calendar.currentView === 'month' ? 'multi-year' : 'month';
    }

    /** Handles user clicks on the previous button. */
    public previousClicked(): void {
        this.calendar.activeDate = this.calendar.currentView === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this.dateAdapter.addCalendarYears(
                this.calendar.activeDate, this.calendar.currentView === 'year' ? -1 : -yearsPerPage
            );
    }

    /** Handles user clicks on the next button. */
    public nextClicked(): void {
        this.calendar.activeDate = this.calendar.currentView === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this.dateAdapter.addCalendarYears(
                this.calendar.activeDate,
                this.calendar.currentView === 'year' ? 1 : yearsPerPage
            );
    }

    /** Whether the previous period button is enabled. */
    public previousEnabled(): boolean {
        if (!this.calendar.minDate) {
            return true;
        }
        return !this.calendar.minDate ||
            !this.isSameView(this.calendar.activeDate, this.calendar.minDate);
    }

    /** Whether the next period button is enabled. */
    public nextEnabled(): boolean {
        return !this.calendar.maxDate ||
            !this.isSameView(this.calendar.activeDate, this.calendar.maxDate);
    }

    /** Whether the two dates represent the same view in the current view mode (month or year). */
    private isSameView(date1: D, date2: D): boolean {
        if (this.calendar.currentView === 'month') {
            return this.dateAdapter.getYear(date1) === this.dateAdapter.getYear(date2) &&
                this.dateAdapter.getMonth(date1) === this.dateAdapter.getMonth(date2);
        }
        if (this.calendar.currentView === 'year') {
            return this.dateAdapter.getYear(date1) === this.dateAdapter.getYear(date2);
        }
        // Otherwise we are in 'multi-year' view.
        return isSameMultiYearView(
            this.dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
    }
}

/**
 * A calendar that is used as part of the datepicker.
 * 
 * @docs-private
 */
@Component({
    selector: 'hctra-mat-calendar',
    templateUrl: 'calendar.html',
    styleUrls: ['calendar.less'],
    exportAs: 'hctraMatCalendar',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HctraMatCalendarComponent<D> implements AfterContentInit, AfterViewChecked, OnDestroy, OnChanges {
    @HostBinding('class') private readonly class = 'mat-calendar';

    /** An input indicating the type of the header component, if set. */
    @Input() headerComponent: ComponentType<any>;

    /** A portal containing the header component type for this calendar. */
    public calendarHeaderPortal: Portal<any>;

    private intlChanges: Subscription;

    /**
     * Used for scheduling that focus should be moved to the active cell on the next tick.
     * We need to schedule it, rather than do it immediately, because we have to wait
     * for Angular to re-evaluate the view children.
     */
    private moveFocusOnNextTick = false;

    /** A date representing the period (month or year) to start the calendar in. */
    @Input()
    get startAt(): D | null { return this.internalStartAt; }
    set startAt(value: D | null) {
        this.internalStartAt = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    private internalStartAt: D | null;

    /** Whether the calendar should be started in month or year view. */
    @Input() startView: MatCalendarView = 'month';

    /** The currently selected date. */
    @Input()
    get selected(): D | null { return this.internalSelected; }
    set selected(value: D | null) {
        this.internalSelected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    private internalSelected: D | null;

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
    @Input() dateClass: (date: D) => MatCalendarCellCssClasses;

    /** Emits when the currently selected date changes. */
    @Output() readonly selectedChange: EventEmitter<D> = new EventEmitter<D>();

    /**
     * Emits the year chosen in multiyear view.
     * This doesn't imply a change on the selected date.
     */
    @Output() readonly yearSelected: EventEmitter<D> = new EventEmitter<D>();

    /**
     * Emits the month chosen in year view.
     * This doesn't imply a change on the selected date.
     */
    @Output() readonly monthSelected: EventEmitter<D> = new EventEmitter<D>();

    /** Emits when any date is selected. */
    @Output() readonly userSelection: EventEmitter<void> = new EventEmitter<void>();

    /** Reference to the current month view component. */
    @ViewChild(HctraMatMonthViewComponent) monthView: HctraMatMonthViewComponent<D>;

    /** Reference to the current year view component. */
    @ViewChild(HctraMatYearViewComponent) yearView: HctraMatYearViewComponent<D>;

    /** Reference to the current multi-year view component. */
    @ViewChild(HctraMatMultiYearViewComponent) multiYearView: HctraMatMultiYearViewComponent<D>;

    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    get activeDate(): D { return this.clampedActiveDate; }
    set activeDate(value: D) {
        this.clampedActiveDate = this.dateAdapter.clampDate(value, this.minDate, this.maxDate);
        this.stateChanges.next();
        this.changeDetectorRef.markForCheck();
    }
    private clampedActiveDate: D;

    /** Whether the calendar is in month view. */
    get currentView(): MatCalendarView { return this.internalCurrentView; }
    set currentView(value: MatCalendarView) {
        this.internalCurrentView = value;
        this.moveFocusOnNextTick = true;
        this.changeDetectorRef.markForCheck();
    }
    private internalCurrentView: MatCalendarView;

    /**
     * Emits whenever there is a state change that the header may need to respond to.
     */
    public stateChanges = new Subject<void>();

    constructor(public intl: MatDatepickerIntl,
        @Optional() private dateAdapter: HctraMatDateAdapter<D>,
        @Optional() @Inject(HCTRA_MAT_DATE_FORMATS) private dateFormats: HctraMatDateFormats,
        private changeDetectorRef: ChangeDetectorRef) {

        if (!this.dateAdapter) {
            throw createMissingDateImplError('HctraDateAdapter');
        }

        if (!this.dateFormats) {
            throw createMissingDateImplError('HCTRA_MAT_DATE_FORMATS');
        }

        this.intlChanges = intl.changes.subscribe(() => {
            changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
    }

    ngAfterContentInit() {
        this.calendarHeaderPortal = new ComponentPortal(this.headerComponent || HctraMatCalendarHeaderComponent);
        this.activeDate = this.startAt || this.dateAdapter.today();

        // Assign to the private property since we don't want to move focus on init.
        this.internalCurrentView = this.startView;
    }

    ngAfterViewChecked() {
        if (this.moveFocusOnNextTick) {
            this.moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    }

    ngOnDestroy() {
        this.intlChanges.unsubscribe();
        this.stateChanges.complete();
    }

    ngOnChanges(changes: SimpleChanges) {
        const change =
            changes['minDate'] || changes['maxDate'] || changes['dateFilter'];

        if (change && !change.firstChange) {
            const view = this.getCurrentViewComponent();

            if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                this.changeDetectorRef.detectChanges();
                view.init();
            }
        }

        this.stateChanges.next();
    }

    public focusActiveCell() {
        this.getCurrentViewComponent().focusActiveCell();
    }

    /** Updates today's date after an update of the active date */
    public updateTodaysDate() {
        const view = this.currentView === 'month' ? this.monthView :
            (this.currentView === 'year' ? this.yearView : this.multiYearView);

        view.ngAfterContentInit();
    }

    /** Handles date selection in the month view. */
    public dateSelected(date: D | null): void {
        if (date && !this.dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
        }
    }

    /** Handles year selection in the multiyear view. */
    public yearSelectedInMultiYearView(normalizedYear: D) {
        this.yearSelected.emit(normalizedYear);
    }

    /** Handles month selection in the year view. */
    public monthSelectedInYearView(normalizedMonth: D) {
        this.monthSelected.emit(normalizedMonth);
    }

    public userSelected(): void {
        this.userSelection.emit();
    }

    /** Handles year/month selection in the multi-year/year views. */
    public goToDateInView(date: D, view: 'month' | 'year' | 'multi-year'): void {
        this.activeDate = date;
        this.currentView = view;
    }

    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    private getValidDateOrNull(obj: any): D | null {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }

    /** Returns the component instance that corresponds to the current calendar view. */
    private getCurrentViewComponent() {
        return this.monthView || this.yearView || this.multiYearView;
    }
}
