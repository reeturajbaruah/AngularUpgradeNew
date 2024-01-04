import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { SearchAccountActivityRequest, SearchAccountActivityResponse } from 'accountActivity/interfaces';
import { AccountActivityService, WebApisService } from 'accountActivity/services';
import { EventType, FilterName, IFilterEvent, ISortFilterEvent, SortFilterName, SortOder } from 'accountActivity/transactions/transactions.interfaces';
import { DownloadService } from 'common/services';


@Injectable()
export class TransactionsRecordsManager {

    cmsContent: { [key: string]: string };
    request: SearchAccountActivityRequest;

    constructor(private accountActivityService: AccountActivityService,
        private webApi: WebApisService,
        private downloadService: DownloadService,
        private datePipe: DatePipe,

    ) {
    }

    async getRecords() {

        this.request = this.accountActivityService.getDefaultLatestActivitySearch();
        const response = await this.getTransactionsRecords();

        this.sortDates(this.accountActivityService.defaultDateRangeTypeSortOrder, response);

        return response;
    }

    async filterRecords(event: IFilterEvent | ISortFilterEvent) {

        this.updateRequest(event);
        const response = await this.getTransactionsRecords();

        if (event.eventType === EventType.SortFilter) {
            this.sortDates(event.sortOder, response);
        }

        return response;

    }

    private async getTransactionsRecords() {

        const response = await this.webApi.searchAccountActivity(this.request);
        this.enrichResponse(response);

        return response;
    }

    private enrichResponse(response: SearchAccountActivityResponse) {

        const agencyWebsiteLinksDictionary = this.accountActivityService.createWebsiteLinksDictionary(this.cmsContent);
        const agencyPhoneNumberDictionary = this.accountActivityService.createAgencyPhoneNumberDictionary(this.cmsContent);
        const agencyFullNameDictionary = this.accountActivityService.createAgencyFullNameDictionary(this.cmsContent);

        response.records.forEach(record => {
            record.agencyWebsite = this.accountActivityService.getDictionaryValueForAgency
                (record.agencyName, agencyWebsiteLinksDictionary);

            record.agencyPhoneNumber = this.accountActivityService.getDictionaryValueForAgency
                (record.agencyName, agencyPhoneNumberDictionary);

            record.agencyFullName = this.accountActivityService.getDictionaryValueForAgency
                (record.agencyName, agencyFullNameDictionary);
        });

        this.showDateLogic(response);

    }

    private showDateLogic(response: SearchAccountActivityResponse) {

        switch (this.request.dateRangeType.toUpperCase()) {
            case 'TRANSACTION':
                response.showPostedDate = false;
                break;
            case 'POSTED':
                response.showPostedDate = true;
                break;
            default:
                response.showPostedDate = false;

        }

    }

    private updateRequest(event: IFilterEvent | ISortFilterEvent) {
        switch (event.name) {

            case FilterName.Transaction:
                this.request.transaction = event.value as string;
                this.request.transactionDisplay = event.value as string;
                break;

            case FilterName.Vehicle:
                this.request.vehicle = event.value as string;
                break;

            case FilterName.DateRange:
                const dateRange = event.value as DateRange<Date>;
                this.request.dateFrom = dateRange.start;
                this.request.dateTo = dateRange.end;
                break;

            case SortFilterName.Date:
                this.request.dateRangeType =
                    event.value === 'Transaction Date' ? 'TRANSACTION' : 'POSTED';
                break;

        }
    }

    private sortDates(order: SortOder, response: SearchAccountActivityResponse) {

        switch (order) {

            case SortOder.Descending:

                if (!response.showPostedDate) {
                    response.records.sort(
                        (a, b) => a.trxnDate < b.trxnDate ? 1 : a.trxnDate > b.trxnDate ? -1 : 0
                    );
                } else {
                    response.records.sort(
                        (a, b) => a.postedDate < b.postedDate ? 1 : a.postedDate > b.postedDate ? -1 : 0
                    );
                }

                break;

            default:
                break;

        }

    }


    async downloadReport(url: string, isPdf: boolean) {
        await this.downloadService.download(url, isPdf, {
            dateFrom: this.datePipe.transform(this.request.dateFrom, 'MM/dd/yyyy'),
            dateTo: this.datePipe.transform(this.request.dateTo, 'MM/dd/yyyy'),
            vehicle: this.request.vehicle ?? '',
            transactions: this.request.transaction ?? '',
            dateRangeType: this.request.dateRangeType
        });
    }

}
