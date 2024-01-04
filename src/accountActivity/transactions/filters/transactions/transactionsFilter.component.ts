import { Component, OnInit } from '@angular/core';
import { ListItems } from 'accountActivity/interfaces';
import { FilterChangeService } from 'accountActivity/services/filter/filter-change.service';
import { FilterDataManager } from 'accountActivity/services/filter/filter-data.manager';
import { EventType, FilterName, IFilterEvent } from 'accountActivity/transactions/transactions.interfaces';
import { Subject } from 'rxjs';

@Component({
    styleUrls: ['../../transaction.common.less', './transactionsFilter.component.less'],
    templateUrl: './transactionsFilter.component.html'
})
export class TransactionsFilterComponent implements OnInit {

    event$ = new Subject<IFilterEvent>();
    data: ListItems[] = [];
    showList = false;
    value = 'All Transactions';

    isOpen = false;

    public selectedTransaction: string;

    constructor(private filterChangeService: FilterChangeService,
        private filterDataManager: FilterDataManager) {

    }

    ngOnInit() {
        this.data = this.filterDataManager.getTransactionFilterData();
        this.selectedTransaction = this.data[0].text || '';

    }

    notify(selectedTransactionType: string) {
        const eventInfo = {
            eventType: EventType.Filter,
            name: FilterName.Transaction,
            value: selectedTransactionType
        } as IFilterEvent;

        this.filterChangeService.notifyEvent(eventInfo);

    }

    onChange(selectedTransactionType: string) {
        this.selectedTransaction = selectedTransactionType;

        this.notify(selectedTransactionType);

        this.isOpen = false;
    }

    public close() {
        this.isOpen = false;
    }
}

