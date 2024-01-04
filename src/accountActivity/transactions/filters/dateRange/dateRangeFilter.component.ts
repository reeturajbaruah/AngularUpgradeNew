import { ConditionalExpr } from '@angular/compiler';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { FilterChangeService } from 'accountActivity/services/filter/filter-change.service';
import { FilterService } from 'accountActivity/services/filter/filter.service';
import { EventType, FilterName, IFilterEvent } from 'accountActivity/transactions/transactions.interfaces';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ENVIRON_CONFIG } from 'common/upgrades';

@Component({
    styleUrls: ['./dateRangeFilter.component.less'],
    templateUrl: './dateRangeFilter.component.html'
})
export class DateRangeFilterComponent implements OnInit, OnDestroy {

    constructor(
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private filterChangeService: FilterChangeService,
        private filterService: FilterService
    ) {
    }

    public selectedDateRange: DateRange<Date>;
    private unsubscribe: Subscription;

    public minDate: Date;
    public maxDate: Date;

    async ngOnInit(): Promise<void> {
        this.minDate = this.createDate(-1 * this.environmentConfig.accountActivityMaxDaysInSearch);
        this.maxDate = this.createDate();

        this.unsubscribe = this.filterChangeService
            .listenToFilters()
            .pipe(filter(event => event.name === FilterName.DateRange))
            .subscribe(event => {
                this.selectedDateRange = event.value as DateRange<Date>;
            });

        const filters = await this.filterService.getFilters();

        const defaultfilter = filters.filteredBy.filter(x => x.name === FilterName.DateRange)[0];
        this.selectedDateRange = defaultfilter.defaultVal as DateRange<Date>;
    }

    private createDate(dayOffset: number = 0) {
        const date = new Date();
        date.setDate(date.getDate() + dayOffset);
        return date;
    }

    ngOnDestroy(): void {
        this.unsubscribe?.unsubscribe();
    }

    notify(dateRange: DateRange<Date>) {

        if (dateRange.start && dateRange.end) {

            const eventInfo = {
                eventType: EventType.Filter,
                name: FilterName.DateRange,
                value: dateRange
            } as IFilterEvent;

            this.filterChangeService.notifyEvent(eventInfo);
        }
    }
}

