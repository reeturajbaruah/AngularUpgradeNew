import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FrameComponent } from 'accountActivity/frame/frame.component';
import { SearchAccountActivityResponse } from 'accountActivity/interfaces';
import { FilterChangeService } from 'accountActivity/services/filter/filter-change.service';
import { TransactionsRecordsManager } from 'accountActivity/services/transactionsRecords/transactionsRecords.manager';
import { TransactionRecord } from 'accountDashboard/services';
import { ENVIRON_CONFIG } from 'common/module';
import { Subscription } from 'rxjs/internal/Subscription';
import { IFilterEvent, ISortFilterEvent } from '../transactions.interfaces';
import { CurrentUser, CurrentUserService } from 'common/services';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';

@Component({
    selector: 'transactions-records',
    templateUrl: './transactionsRecords.component.html',
    styleUrls: ['../transactions.less'],
    providers: [TransactionsRecordsManager]
})
export class TransactionsRecordsComponent implements OnInit, OnDestroy {

    constructor(
        public parent: FrameComponent,
        @Inject(ENVIRON_CONFIG) public environmentConfig,
        private storefrontUtilityService: StorefrontUtilityService,
        private transactionsRecordsManager: TransactionsRecordsManager,
        private filterChangeService: FilterChangeService,
        private currentUserService: CurrentUserService
    ) { }

    @Input() cmsContent: { [key: string]: string };

    public searchCriteriaTags: string[] = [];
    public totalRecordsCount = 0;
    public filteredTotal = 0;
    public showLocationLink = false;
    public showNoDataIcon = false;
    public readonly defaultPageSize = this.environmentConfig.paginationConfig.transactions.PageSize;
    public readonly paginationLimit = this.environmentConfig.paginationConfig.transactions.LimitToStart;
    public listOfAllRecords: TransactionRecord[];
    public paginatedRecords: TransactionRecord[];
    public mobileLoadedRecords: TransactionRecord[];
    public currentUser: CurrentUser;

    public reportDownloading = false;
    eventsList: Subscription[] = [];
    showPostedDate = false;

    ngOnInit() {
       
        this.transactionsRecordsManager.cmsContent = this.cmsContent;
        //listen to filter and sorting events

        this.searchTransactions();

        this.eventsList.push(this.filterChangeService.listenToFilters().
            subscribe(event => {
                this.filterRecords(event);
            }));

        this.currentUser = this.currentUserService.getCurrentUser();
        
    }

    private async searchTransactions() {

        const response = await this.transactionsRecordsManager.getRecords();

        this.parseRecords(response);

    }

    private async filterRecords(event: IFilterEvent | ISortFilterEvent) {

        const response = await this.transactionsRecordsManager.filterRecords(event);

        this.parseRecords(response);

    }

    private parseRecords(response: SearchAccountActivityResponse) {
        this.totalRecordsCount = response.totalRecordsCount;
        this.filteredTotal = response.totalAmount;

        this.showLocationLink = !(response.hideLocationLink || this.storefrontUtilityService.isRunningAsKiosk);

        this.listOfAllRecords = response.records;
        this.paginatedRecords = this.listOfAllRecords.slice(0, this.defaultPageSize);
        this.mobileLoadedRecords = this.listOfAllRecords.slice(0, this.defaultPageSize);
        this.showPostedDate = response.showPostedDate;
        this.showNoDataIcon = true;
    }

    public updateTransactionsTable(event: PageEvent) {
        const start = event.pageIndex * event.pageSize;
        const end = (event.pageIndex + 1) * event.pageSize;
        this.paginatedRecords = this.listOfAllRecords.slice(start, end);
    }

    public mobileLoadMore() {
        const start = this.mobileLoadedRecords.length;
        const end = this.mobileLoadedRecords.length + this.defaultPageSize;
        this.mobileLoadedRecords = this.mobileLoadedRecords.concat(this.listOfAllRecords.slice(start, end));
    }

    public async getTransactionsPdf() {
        const url = 'api/sessions/Pdf/GetPdfReport/';
        await this.downloadReport(url, true);
    };

    public async getTransactionsExcel() {
        const url = 'api/sessions/Pdf/GetExcelReport/';
        await this.downloadReport(url, false);
    };

    private async downloadReport(url: string, isPdf: boolean) {
        this.reportDownloading = true;

        await this.transactionsRecordsManager.downloadReport(url, isPdf);

        this.reportDownloading = false;
    }

    ngOnDestroy() {
        this.eventsList.forEach(event => event.unsubscribe());
    }

}
