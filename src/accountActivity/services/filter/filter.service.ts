import { Injectable } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { DateRangeFilterComponent } from 'accountActivity/transactions/filters/dateRange/dateRangeFilter.component';
import { TransactionsFilterComponent } from 'accountActivity/transactions/filters/transactions/transactionsFilter.component';
import { VehiclesFilterComponent } from 'accountActivity/transactions/filters/vehicles/vehiclesFilter.component';
import { SortedByDateComponent } from 'accountActivity/transactions/sortFilters/date/date.component';
import { FilterName, IFilterCategories, SortFilterName, SortOder } from 'accountActivity/transactions/transactions.interfaces';
import { AccountActivityService } from '..';

@Injectable()
export class FilterService {

    private filterCategories: IFilterCategories;
    constructor(
        private accntActivityService: AccountActivityService,
    ) {

    }

    async getFilters() {

        const fromDate = this.accntActivityService.getDefaultFromDate();
        const toDate = new Date();

        this.filterCategories = {
            filteredBy: [
                {
                    defaultVal: 'All Transactions',
                    name: FilterName.Transaction,
                    order: 1,
                    type: {
                        component: TransactionsFilterComponent
                    }
                },
                {
                    defaultVal: 'All Vehicles',
                    name: FilterName.Vehicle,
                    order: 2,
                    type: {
                        component: VehiclesFilterComponent
                    }
                },
                {
                    defaultVal: new DateRange<Date>(fromDate, toDate),
                    name: FilterName.DateRange,
                    order: 3,
                    type: {
                        component: DateRangeFilterComponent
                    }
                },
            ],
            sortedBy: [
                {
                    defaultVal: 'Transaction Date',
                    name: SortFilterName.Date,
                    order: 1,
                    type: {
                        component: SortedByDateComponent
                    },
                    sortOrder: SortOder.Descending
                },
            ]
        };


        return this.filterCategories;
    }

}
