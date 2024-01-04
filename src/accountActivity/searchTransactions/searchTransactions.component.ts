import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StateService } from '@uirouter/core';
import { cmsIds, stateNames as accountActivityStates } from 'accountActivity/constants';
import { ListItems, NickName, SearchAccountActivityRequest } from 'accountActivity/interfaces';
import { WebApisService } from 'accountActivity/services';
import { CmsResolverService } from 'cms/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';



@Component({
    selector: 'searchTransactions',
    templateUrl: './searchTransactions.html',
    styleUrls: ['./searchTransactions.less']
})
export class SearchTransactionsComponent implements OnInit {

    public searchTransactionDropdownData: ListItems[] = [];
    public dateTo: Date;
    public dateFrom: Date;
    public cmsContent: any;
    public cmsShortDescription: string;
    public licensePlate: string;
    public selection: ListItems;
    public dateRangeType: ('TRANSACTION' | 'POSTED')[];
    public currentDateRangeType: 'TRANSACTION' | 'POSTED';
    public minDate: Date;
    public maxDate: Date;

    public control = new FormControl();
    public searchVehicleDropdownData: NickName[] = [];
    public filteredSearchVehicleDropdownData: Observable<NickName[]>;

    constructor(
        private cmsResolverService: CmsResolverService,
        private state: StateService,
        private matDialogRef: MatDialogRef<SearchTransactionsComponent, any>,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private webApisService: WebApisService
    ) { }

    onSelectionChanged(_selection: ListItems) {
        this.selection = _selection;
    }

    async ngOnInit() {
        this.minDate = new Date();
        this.minDate.setDate(new Date().getDate() - this.environmentConfig.accountActivityMaxDaysInSearch);
        this.maxDate = new Date();

        this.dateRangeType = ['TRANSACTION', 'POSTED'];
        this.currentDateRangeType = this.dateRangeType[0];

        await this.setDefaultDateAndCms();
        await this.getDropdownData();
    }

    public close() {
        this.matDialogRef.close();
    }

    public async setDefaultDateAndCms() {
        this.dateTo = new Date();
        this.dateFrom = new Date();
        this.dateFrom.setDate(this.dateFrom.getDate() - this.environmentConfig.accountActivityDefaultDaysInSearch);
        this.cmsContent = await this.cmsResolverService.resolve({ ItemId: cmsIds.SearchTransactions });
        this.cmsShortDescription = this.cmsContent.ShortDescription;
    }

    public infoSearch() {
        const searchRequest: SearchAccountActivityRequest = {

            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
            dateRangeType: this.currentDateRangeType,
            transaction: this.selection.value,
            transactionDisplay: this.selection.text,
            vehicle: this.licensePlate ? this.licensePlate : 'All Vehicles',
            vehicleNickNameType: 'L'
        };

        this.state.go(accountActivityStates.accountActivityTransactions,
            { searchCriteria: searchRequest },
            { reload: accountActivityStates.accountActivityTransactions });
        this.close();

    }

    public clearAll() {
        this.licensePlate = '';
        this.dateTo = new Date();
        this.dateFrom = new Date();
        this.dateFrom.setDate(this.dateFrom.getDate() - this.environmentConfig.accountActivityDefaultDaysInSearch);
        this.currentDateRangeType = this.dateRangeType[0];
        this.getDropdownData();
    }

    public autocorrectDateTo() {
        this.forceDateWithinMinMaxDates(this.dateTo);

        if (this.dateTo.getTime() < this.dateFrom.getTime()) {
            this.dateFrom = new Date((this.dateTo.getTime() - (this.environmentConfig.accountActivityDefaultDaysInSearch * 24 * 60 * 60 * 1000)));
        }

        this.forceDateWithinMinMaxDates(this.dateFrom);
    }

    public autocorrectDateFrom() {
        this.forceDateWithinMinMaxDates(this.dateFrom);

        if (this.dateFrom.getTime() > this.dateTo.getTime()) {
            this.dateTo = new Date((this.dateFrom.getTime() + (this.environmentConfig.accountActivityDefaultDaysInSearch * 24 * 60 * 60 * 1000)));
        }

        this.forceDateWithinMinMaxDates(this.dateTo);
    }

    private forceDateWithinMinMaxDates(dateRef: Date) {
        if (dateRef.getTime() > this.maxDate.getTime()) {
            dateRef.setTime(this.maxDate.getTime());
        } else if (dateRef.getTime() < this.minDate.getTime()) {
            dateRef.setTime(this.minDate.getTime());
        }
    }

    private async getDropdownData() {
        const data: SearchAccountActivityRequest = {
            dateTo: this.dateTo,
            dateFrom: this.dateFrom,
            dateRangeType: 'TRANSACTION',
            transaction: '',
            vehicle: '',
            vehicleNickNameType: 'L'
        };


        const searchSetup = await this.webApisService.setupSearchTransactions(data);
        this.searchTransactionDropdownData = searchSetup.transactionListItems;
        this.searchVehicleDropdownData = searchSetup.vehicleNickName;

        this.filteredSearchVehicleDropdownData = this.control.valueChanges.pipe(
            startWith(''),
            map(value => this.searchVehicleDropdownData
                .filter(vehicle => (vehicle.text.toLowerCase().includes(value.toLowerCase())))
            )
        );
    }
}
