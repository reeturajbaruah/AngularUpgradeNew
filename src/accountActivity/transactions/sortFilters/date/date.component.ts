import { Component, OnInit } from '@angular/core';
import { FilterChangeService } from 'accountActivity/services/filter/filter-change.service';
import { FilterDataManager } from 'accountActivity/services/filter/filter-data.manager';
import { EventType, ISortFilterEvent, SortFilterName, SortOder } from 'accountActivity/transactions/transactions.interfaces';

@Component({
    styleUrls: ['../../transaction.common.less', './date.component.less'],
    templateUrl: './date.component.html'
})
export class SortedByDateComponent implements OnInit {

    constructor(private filterChangeService: FilterChangeService,
        private filterDataManager: FilterDataManager) { }

    isOpen = false;

    selectedDate: string;
    data: { text: string }[];

    ngOnInit() {

        this.data = this.filterDataManager.getDateSortFilterDate();
        this.selectedDate = this.data[0].text;
    }

    onChange(val: string) {

        this.selectedDate = val;
        this.notify(val);
        this.isOpen = false;

    }

    notify(val: string) {

        const eventInfo = {
            eventType: EventType.SortFilter,
            name: SortFilterName.Date,
            value: val,
            sortOder: SortOder.Descending
        } as ISortFilterEvent;

        this.filterChangeService.notifyEvent(eventInfo);

    }

    public close() {
        this.isOpen = false;
    }
}

