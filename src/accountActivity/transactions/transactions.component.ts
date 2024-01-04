import { DatePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';

import { FrameComponent } from 'accountActivity/frame/frame.component';
import { AccountActivityService } from 'accountActivity/services';
import { FilterChangeService } from 'accountActivity/services/filter/filter-change.service';
import { FilterService } from 'accountActivity/services/filter/filter.service';
import { FilterName, IFilterCategories, IFilterEvent, ISortFilterEvent, SortFilterName } from 'accountActivity/transactions/transactions.interfaces';
import { Subscription } from 'rxjs';
import { Tab } from '../tabs/tabs.component';


interface ICmsContent {
    [key: string]: string;
}

@Component({
    selector: 'transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.less']
})
export class TransactionsComponent implements OnInit, OnDestroy {

    filterCategories: IFilterCategories;
    result: string;
    transactionFilterVal: string;
    vehicleFilterVal: string;
    dateRangeFilterVal: DateRange<Date>;
    sortDateFilterVal: string;

    constructor(
        public parent: FrameComponent,
        private filterService: FilterService,
        private accntActivityService: AccountActivityService,
        private datePipe: DatePipe,
        private filterChangeService: FilterChangeService
    ) { }

    @Input() cmsContent: ICmsContent;
    eventsList: Subscription[] = [];
    inititalizeComplete = false;

    async ngOnInit() {

        this.parent.selectedState = Tab.transactions;

        await this.initialize();

        this.eventsList.push(this.filterChangeService.listenToFilters().
            subscribe(event => {
                this.updateResult(event);
            }));
    }

    private async initialize() {

        await this.getFilters();

        this.setDefaultFilterValues();
        this.setSearchTransactionsDefaultReq();
        this.setResult();
        this.setDefaultDateRangeTypeSortOrder();
        this.inititalizeComplete = true;

    }


    private setDefaultFilterValues() {
        this.transactionFilterVal = this.getDefaultFilterValue(FilterName.Transaction);
        this.vehicleFilterVal = this.getDefaultFilterValue(FilterName.Vehicle);
        this.dateRangeFilterVal = this.getDefaultFilterValue(FilterName.DateRange);
        this.sortDateFilterVal = this.getDefaultSortFilterValue(SortFilterName.Date);
    }

    private setSearchTransactionsDefaultReq() {

        const dateRangeTye = this.sortDateFilterVal === 'Transaction Date' ? 'TRANSACTION' : 'POSTED';
        this.accntActivityService.setDefaultLatestActivitySearch(dateRangeTye, this.transactionFilterVal,
            this.vehicleFilterVal);
    }

    private setResult() {

        this.result = `${this.transactionFilterVal} 
                        for ${this.vehicleFilterVal}
                        ${this.parseDateRange(this.dateRangeFilterVal)} filtered by       
                        ${this.sortDateFilterVal}`;

    }

    private setDefaultDateRangeTypeSortOrder() {
        const defaultSortOrder = this.filterCategories.sortedBy.find(filter => filter.name === SortFilterName.Date).sortOrder;
        this.accntActivityService.setDefaultDateRangeTypeSortOrder(defaultSortOrder);

    }


    private async getFilters() {

        this.filterCategories = await this.filterService.getFilters();

        this.sortFilters();

    }

    private sortFilters() {

        const filteredByList = this.filterCategories.filteredBy.sort((a, b) => a.order - b.order);
        const sortedByList = this.filterCategories.sortedBy.sort((a, b) => a.order - b.order);
        this.filterCategories.filteredBy = filteredByList;
        this.filterCategories.sortedBy = sortedByList;

    }

    private updateResult(event: IFilterEvent | ISortFilterEvent) {

        switch (event.name) {

            case FilterName.Transaction:

                this.transactionFilterVal = event.value as string;
                this.setResult();
                break;

            case FilterName.Vehicle:

                this.vehicleFilterVal = event.value as string;
                this.setResult();
                break;

            case FilterName.DateRange:
                this.dateRangeFilterVal = event.value as DateRange<Date>;
                this.setResult();
                break;

            case SortFilterName.Date:

                this.sortDateFilterVal = event.value;
                this.setResult();
                break;

            default:
                break;
        }

    }

    private getDefaultFilterValue(name: FilterName) {

        switch (name) {

            case FilterName.Transaction:
            case FilterName.Vehicle:
            case FilterName.DateRange: {
                return this.filterCategories.filteredBy.find(filter => filter.name === name).defaultVal;
            }

            default:
                break;
        }
    }

    private getDefaultSortFilterValue(name: SortFilterName) {

        switch (name) {

            case SortFilterName.Date: {
                return this.filterCategories.sortedBy.find(sort => sort.name === name).defaultVal;
            }
            default:
                break;
        }
    }

    private parseDateRange(dateRange: DateRange<Date>): string {
        return `from ${this.datePipe.transform(dateRange.start)} to ${this.datePipe.transform(dateRange.end)} `;
    }

    ngOnDestroy() {
        this.eventsList.forEach(event => event.unsubscribe());
    }
}


