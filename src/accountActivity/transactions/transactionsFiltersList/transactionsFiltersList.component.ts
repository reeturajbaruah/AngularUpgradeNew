import { Component, Input, OnInit } from '@angular/core';
import { FilterDataManager } from 'accountActivity/services/filter/filter-data.manager';
import { FilterName, IFilter, IFilterCategories, ISortFilter } from 'accountActivity/transactions/transactions.interfaces';
import { TransactionsFilterComponent } from '../filters/transactions/transactionsFilter.component';


@Component({
    selector: 'tansactions-filters-list',
    styleUrls: ['transactionsFiltersList.component.less'],
    templateUrl: './transactionsFiltersList.component.html',
    providers: [FilterDataManager]
})
export class TransactionsFilterCriteriaComponent implements OnInit {

    @Input() filterCategories: IFilterCategories;
    filteredByList: IFilter[];
    sortedByList: ISortFilter[];

    constructor(private filterDataManager: FilterDataManager) {

    }

    async ngOnInit() {

        await this.filterDataManager.setFiltersData();

        this.filteredByList = this.filterCategories.filteredBy;
        this.sortedByList = this.filterCategories.sortedBy;

   }

}
