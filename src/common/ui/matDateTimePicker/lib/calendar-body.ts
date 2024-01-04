/**
 * Taken from https://www.npmjs.com/package/@angular-material-components/datetime-picker
 */

import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input, NgZone,
    OnChanges, OnDestroy, Output, SimpleChanges, ViewEncapsulation
} from '@angular/core';
import { take } from 'rxjs/operators';


/**
 * Extra CSS classes that can be associated with a calendar cell.
 */
export type HctraMatCalendarCellCssClasses = string | string[] | Set<string> | { [key: string]: any };

/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * 
 * @docs-private
 */
export class HctraMatCalendarCell<D = any> {
    constructor(public value: number,
        public displayValue: string,
        public ariaLabel: string,
        public enabled: boolean,
        public cssClasses: HctraMatCalendarCellCssClasses = {},
        public compareValue = value,
        public rawValue?: D) { }
}

/** Event emitted when a date inside the calendar is triggered as a result of a user action. */
export interface HctraMatCalendarUserEvent<D> {
    value: D;
    event: Event;
}

/**
 * An internal component used to display calendar data in a table.
 * 
 * @docs-private
 */
@Component({
    selector: '[hctra-mat-calendar-body]',
    templateUrl: 'calendar-body.html',
    styleUrls: ['calendar-body.less'],
    exportAs: 'HctraMatCalendarBody',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HctraMatCalendarBodyComponent implements OnChanges, OnDestroy {
    @HostBinding('class') private readonly class = 'hctra-mat-calendar-body';
    @HostBinding('role') private readonly role = 'grid';
    @HostBinding('aria-readonly') private readonly ariaReadOnly = true;

    /**
     * Used to skip the next focus event when rendering the preview range.
     * We need a flag like this, because some browsers fire focus events asynchronously.
     */
    private skipNextFocus: boolean;

    /** The label for the table. (e.g. "Jan 2017"). */
    @Input() label: string;

    /** The cells to display in the table. */
    @Input() rows: HctraMatCalendarCell[][];

    /** The value in the table that corresponds to today. */
    @Input() todayValue: number;

    /** Start value of the selected date range. */
    @Input() startValue: number;

    /** End value of the selected date range. */
    @Input() endValue: number;

    /** The minimum number of free cells needed to fit the label in the first row. */
    @Input() labelMinRequiredCells: number;

    /** The number of columns in the table. */
    @Input() numCols = 7;

    /** The cell number of the active cell in the table. */
    @Input() activeCell = 0;

    /** Whether a range is being selected. */
    @Input() isRange = false;

    /**
     * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
     * maintained even as the table resizes.
     */
    @Input() cellAspectRatio = 1;

    /** Start of the comparison range. */
    @Input() comparisonStart: number | null;

    /** End of the comparison range. */
    @Input() comparisonEnd: number | null;

    /** Start of the preview range. */
    @Input() previewStart: number | null = null;

    /** End of the preview range. */
    @Input() previewEnd: number | null = null;

    /** Emits when a new value is selected. */
    @Output() readonly selectedValueChange: EventEmitter<HctraMatCalendarUserEvent<number>> =
        new EventEmitter<HctraMatCalendarUserEvent<number>>();

    /** Emits when the preview has changed as a result of a user action. */
    @Output() previewChange = new EventEmitter<HctraMatCalendarUserEvent<HctraMatCalendarCell | null>>();

    /** The number of blank cells to put at the beginning for the first row. */
    public firstRowOffset: number;

    /** Padding for the individual date cells. */
    public cellPadding: string;

    /** Width of an individual cell. */
    public cellWidth: string;

    constructor(private elementRef: ElementRef<HTMLElement>,
        private ngZone: NgZone) {

        ngZone.runOutsideAngular(() => {
            const element = elementRef.nativeElement;
            element.addEventListener('mouseenter', this.enterHandler, true);
            element.addEventListener('focus', this.enterHandler, true);
            element.addEventListener('mouseleave', this.leaveHandler, true);
            element.addEventListener('blur', this.leaveHandler, true);
        });
    }

    /** Called when a cell is clicked. */
    public cellClicked(cell: HctraMatCalendarCell, event: MouseEvent): void {
        if (cell.enabled) {
            this.selectedValueChange.emit({ value: cell.value, event });
        }
    }

    /** Returns whether a cell should be marked as selected. */
    public isSelected(cell: HctraMatCalendarCell) {
        return this.startValue === cell.compareValue || this.endValue === cell.compareValue;
    }

    ngOnChanges(changes: SimpleChanges) {
        const columnChanges = changes['numCols'];
        const { rows, numCols } = this;

        if (changes['rows'] || columnChanges) {
            this.firstRowOffset = rows && rows.length && rows[0].length
                ? numCols - rows[0].length
                : 0;
        }

        if (changes['cellAspectRatio'] || columnChanges || !this.cellPadding) {
            this.cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
        }

        if (columnChanges || !this.cellWidth) {
            this.cellWidth = `${100 / numCols}%`;
        }
    }

    ngOnDestroy() {
        const element = this.elementRef.nativeElement;
        element.removeEventListener('mouseenter', this.enterHandler, true);
        element.removeEventListener('focus', this.enterHandler, true);
        element.removeEventListener('mouseleave', this.leaveHandler, true);
        element.removeEventListener('blur', this.leaveHandler, true);
    }

    /** Returns whether a cell is active. */
    public isActiveCell(rowIndex: number, colIndex: number): boolean {
        let cellNumber = rowIndex * this.numCols + colIndex;

        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this.firstRowOffset;
        }

        return cellNumber === this.activeCell;
    }

    /** Focuses the active cell after the microtask queue is empty. */
    public focusActiveCell(movePreview = true) {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
                const activeCell: HTMLElement | null =
                    this.elementRef.nativeElement.querySelector('.hctra-mat-calendar-body-active');

                if (activeCell) {
                    if (!movePreview) {
                        this.skipNextFocus = true;
                    }

                    activeCell.focus();
                }
            });
        });
    }

    /** Gets whether a value is the start of the main range. */
    public isRangeStart(value: number) {
        return isStart(value, this.startValue, this.endValue);
    }

    /** Gets whether a value is the end of the main range. */
    public isRangeEnd(value: number) {
        return isEnd(value, this.startValue, this.endValue);
    }

    /** Gets whether a value is within the currently-selected range. */
    public isInRange(value: number): boolean {
        return isInRange(value, this.startValue, this.endValue, this.isRange);
    }

    /** Gets whether a value is the start of the comparison range. */
    public isComparisonStart(value: number) {
        return isStart(value, this.comparisonStart, this.comparisonEnd);
    }

    /** Whether the cell is a start bridge cell between the main and comparison ranges. */
    public isComparisonBridgeStart(value: number, rowIndex: number, colIndex: number) {
        if (!this.isComparisonStart(value) || this.isRangeStart(value) || !this.isInRange(value)) {
            return false;
        }

        let previousCell: HctraMatCalendarCell | undefined = this.rows[rowIndex][colIndex - 1];

        if (!previousCell) {
            const previousRow = this.rows[rowIndex - 1];
            previousCell = previousRow && previousRow[previousRow.length - 1];
        }

        return previousCell && !this.isRangeEnd(previousCell.compareValue);
    }

    /** Whether the cell is an end bridge cell between the main and comparison ranges. */
    public isComparisonBridgeEnd(value: number, rowIndex: number, colIndex: number) {
        if (!this.isComparisonEnd(value) || this.isRangeEnd(value) || !this.isInRange(value)) {
            return false;
        }

        let nextCell: HctraMatCalendarCell | undefined = this.rows[rowIndex][colIndex + 1];

        if (!nextCell) {
            const nextRow = this.rows[rowIndex + 1];
            nextCell = nextRow && nextRow[0];
        }

        return nextCell && !this.isRangeStart(nextCell.compareValue);
    }

    /** Gets whether a value is the end of the comparison range. */
    public isComparisonEnd(value: number) {
        return isEnd(value, this.comparisonStart, this.comparisonEnd);
    }

    /** Gets whether a value is within the current comparison range. */
    public isInComparisonRange(value: number) {
        return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
    }

    /** Gets whether a value is the start of the preview range. */
    public isPreviewStart(value: number) {
        return isStart(value, this.previewStart, this.previewEnd);
    }

    /** Gets whether a value is the end of the preview range. */
    public isPreviewEnd(value: number) {
        return isEnd(value, this.previewStart, this.previewEnd);
    }

    /** Gets whether a value is inside the preview range. */
    public isInPreview(value: number) {
        return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
    }

    /**
     * Event handler for when the user enters an element
     * inside the calendar body (e.g. by hovering in or focus).
     */
    private enterHandler = (event: Event) => {
        if (this.skipNextFocus && event.type === 'focus') {
            this.skipNextFocus = false;
            return;
        }

        // We only need to hit the zone when we're selecting a range.
        if (event.target && this.isRange) {
            const cell = this.getCellFromElement(event.target as HTMLElement);

            if (cell) {
                this.ngZone.run(() => this.previewChange.emit({ value: cell.enabled ? cell : null, event }));
            }
        }
    };

    /**
     * Event handler for when the user's pointer leaves an element
     * inside the calendar body (e.g. by hovering out or blurring).
     */
    private leaveHandler = (event: Event) => {
        // We only need to hit the zone when we're selecting a range.
        if (this.previewEnd !== null && this.isRange) {
            // Only reset the preview end value when leaving cells. This looks better, because
            // we have a gap between the cells and the rows and we don't want to remove the
            // range just for it to show up again when the user moves a few pixels to the side.
            if (event.target && isTableCell(event.target as HTMLElement)) {
                this.ngZone.run(() => this.previewChange.emit({ value: null, event }));
            }
        }
    };

    /** Finds the HctraMatCalendarCell that corresponds to a DOM node. */
    private getCellFromElement(element: HTMLElement): HctraMatCalendarCell | null {
        let cell: HTMLElement | undefined;

        if (isTableCell(element)) {
            cell = element;
        } else if (isTableCell(element.parentNode)) {
            cell = element.parentNode as HTMLElement;
        }

        if (cell) {
            const row = cell.getAttribute('data-hctra-mat-row');
            const col = cell.getAttribute('data-hctra-mat-col');

            if (row && col) {
                return this.rows[parseInt(row, 10)][parseInt(col, 10)];
            }
        }

        return null;
    }

}

/** Checks whether a node is a table cell element. */
const isTableCell = (node: Node): node is HTMLTableCellElement => (
    node.nodeName === 'TD'
);

/** Checks whether a value is the start of a range. */
const isStart = (value: number, start: number | null, end: number | null) => (
    end !== null
    && start !== end
    && value < end
    && value === start
);

/** Checks whether a value is the end of a range. */
const isEnd = (value: number, start: number | null, end: number | null) => (
    start !== null
    && start !== end
    && value >= start
    && value === end
);

/** Checks whether a value is inside of a range. */
const isInRange = (value: number, start: number | null, end: number | null, rangeEnabled: boolean) => (
    rangeEnabled
    && start !== null
    && end !== null
    && start !== end
    && value >= start
    && value <= end
);
