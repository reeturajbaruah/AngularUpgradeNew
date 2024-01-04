import { Inject, Injectable } from '@angular/core';
import { SearchAccountActivityRequest } from 'accountActivity/interfaces';
import { TransactionRecord } from 'accountDashboard/services';
import { stateNames as accountActivityStates } from 'accountActivity/constants';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { isObject } from 'lodash';
import { LoggingService } from 'logging/module';
import { WebApisService } from './webApis.service';
import { SortOder } from 'accountActivity/transactions/transactions.interfaces';
import { IsInvoicedService } from 'common/services';
import * as moment from 'moment';

@Injectable()
export class AccountActivityService {

    private DEFAULT_LATEST_ACTIVITY_SEARCH: SearchAccountActivityRequest;
    defaultDateRangeTypeSortOrder: SortOder;

    constructor(
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private isInvoicedService: IsInvoicedService
    ) { }

    public getDefaultLatestActivitySearch(): SearchAccountActivityRequest {
        return this.DEFAULT_LATEST_ACTIVITY_SEARCH;
    };

    public setDefaultLatestActivitySearch(dateRangeTypeDefault: string,
        transactionDefault: string, vehicleDefault: string) {

        this.DEFAULT_LATEST_ACTIVITY_SEARCH = {
            dateFrom: this.getDefaultFromDate(),
            dateTo: new Date(),
            dateRangeType: dateRangeTypeDefault,
            transaction: transactionDefault,
            vehicle: vehicleDefault,
            vehicleNickNameType: 'L'
        };
    }

    setDefaultDateRangeTypeSortOrder(order: SortOder) {
        this.defaultDateRangeTypeSortOrder = order;
    }

    public formatReceiptDateString(inDate: Date) {
        const [, month, day, year] = inDate.toString().split(' ');
        return `${month} ${day} ${year}`;
    }

    public getLocationNameWithoutAgencyOrPhone(record: TransactionRecord) {
        return record && `${record.facilityName} - ${record.plazaName} - ${record.direction}`;
    }

    public hasLocationCoordinates(record: { latitude: number; longitude: number }) {
        return !!(record && record.latitude && record.longitude);
    }

    public createWebsiteLinksDictionary(parsedParams: { [key: string]: string }) {
        return this.createAgencyPropertyDicitonaryBasedOnKeyStart(parsedParams, 'SITE_');
    }

    public createAgencyPhoneNumberDictionary(parsedParams: { [key: string]: string }) {
        return this.createAgencyPropertyDicitonaryBasedOnKeyStart(parsedParams, 'PHONE_');
    }

    public createAgencyFullNameDictionary(parsedParams: { [key: string]: string }) {
        return this.createAgencyPropertyDicitonaryBasedOnKeyStart(parsedParams, 'FULLNAME_');
    }

    private createAgencyPropertyDicitonaryBasedOnKeyStart(parsedParams: { [key: string]: string }, keyStart: string) {
        return isObject(parsedParams)
            ? Object.keys(parsedParams)
                .filter(key => key.startsWith(keyStart))
                .map(key => ({
                    key: key.replace(keyStart, ''),
                    value: parsedParams[key]
                }))
                .reduce((acc, current) => {
                    acc[current.key] = current.value;
                    return acc;
                }, {})
            : {};
    }

    public getDictionaryValueForAgency(agencyName: string, agencyPropertyDictionary: { [key: string]: string }) {
        return agencyName && agencyPropertyDictionary && agencyPropertyDictionary[agencyName.toUpperCase().replace(/[^a-zA-Z0-9]/g, '_')];
    }

    public showTransactions(): boolean {
        let showTransactions = false;

        if (!this.environmentConfig.hideAccountActivityTabs.HideTransactions) {
            showTransactions = true;
        }

        return showTransactions;
    }

    public showStatements(): boolean {
        let showStatements = false;

        if (!this.environmentConfig.hideAccountActivityTabs.HideStatements) {
            showStatements = true;
        }

        return showStatements;
    }

    public showYearlySummary(): boolean {
        let showYearlySummary = false;

        if (!this.environmentConfig.hideAccountActivityTabs.HideYearlySummary) {
            showYearlySummary = true;
        }

        return showYearlySummary;
    }

    public showReceipts(): boolean {
        let showReceipts = false;

        if (!this.environmentConfig.hideAccountActivityTabs.HideReceipts) {
            showReceipts = true;
        }

        return showReceipts;
    }

    public showInvoices(): boolean {
        let showInvoices = false;

        if (this.isInvoicedService.isAccountInvoiced() && !this.environmentConfig.hideAccountActivityTabs.HideCorporateInvoices) {
            showInvoices = true;
        }

        return showInvoices;
    }

    getDefaultFromDate() {
        return this.getDaysAgo(this.environmentConfig.accountActivityDefaultDaysInSearch);
    }


    private getDaysAgo(diffDays: number, date?: Date) {
        const newDate = date ? { ...date } : moment().toDate();
        newDate.setDate(newDate.getDate() - diffDays);
        return newDate;
    };
}
