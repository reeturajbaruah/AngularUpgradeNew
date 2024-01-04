import { Injectable } from '@angular/core';
import { ISearchTransactionsResponse, SearchAccountActivityRequest, SearchAccountActivityResponse } from 'accountActivity/interfaces';
import { AccountActivityService, WebApisService } from 'accountActivity/services';

@Injectable()
export class FilterDataManager {

    private response: ISearchTransactionsResponse;

    constructor(private webApisService: WebApisService,
        private accntActivityService: AccountActivityService
    ) { }

    async setFiltersData() {

        const data = this.mapRequest();
        this.response = await this.webApisService.setupSearchTransactions(data);

    }

    private mapRequest() {

        const data: SearchAccountActivityRequest = {
            dateTo: new Date(),
            dateFrom: this.accntActivityService.getDefaultFromDate(),
            dateRangeType: 'TRANSACTION',
            transaction: '',
            vehicle: '',
            vehicleNickNameType: 'L'
        };

        return data;
    }

    getTransactionFilterData() {
        return this.response.transactionListItems;
    }

    getVehicleFilterData() {
        return this.response.vehicleNickName;;
    }

    getDateSortFilterDate() {
        return [
            {
                text: 'Transaction Date',
            }
            ,
            {
                text: 'Posted Date'
            }
        ];
    }
}
