import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { TransactionRecord } from 'accountDashboard/services';
import { DialogRef, DialogService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { LoggingService } from 'logging/module';

export interface InjectionValues {
    transactionRecord: TransactionRecord;
    googleMapSrc: SafeResourceUrl;
    hasLocationCoordinates: boolean;
    locationNameWithoutAgencyOrPhone: string;
}

@Component({
    selector: 'account-activity-transaction-details',
    templateUrl: './transactionDetailsModal.html',
    styleUrls: ['./transactionDetailsModal.less']
})
export class TransactionDetailsModalComponent implements OnInit {

    constructor(
        private dialogRef: DialogRef<InjectionValues>,
        private dialogService: DialogService,
        private loggingService: LoggingService
    ) { }

    public transactionRecord = {} as TransactionRecord;
    public googleMapSrc = '' as SafeResourceUrl;
    public hasLocationCoordinates: boolean;
    public locationNameWithoutAgencyOrPhone: string;

    public close() {
        this.dialogRef.close();
    }

    async ngOnInit() {
        this.transactionRecord = { ...this.dialogRef.data.transactionRecord };
        this.hasLocationCoordinates = this.dialogRef.data.hasLocationCoordinates;
        this.locationNameWithoutAgencyOrPhone = this.dialogRef.data.locationNameWithoutAgencyOrPhone;

        if (this.transactionRecord.agencyName && !this.transactionRecord.agencyWebsite) {
            this.loggingService.logMessage(`Website link not available for agency: ${this.transactionRecord.agencyName}.`);
        }

        if (this.transactionRecord.laneName && this.hasLocationCoordinates) {
            this.googleMapSrc = this.dialogRef.data.googleMapSrc;
        }
    }

    public openAgencyDetailsModal() {
        const data: GenericCmsModalInjectionValues = {
            cmsContent: {
                Title: 'Locations',
                AcceptBtn: 'CLOSE',
                PrimaryContent: `<div>${this.transactionRecord.agencyName}: ${this.transactionRecord.agencyFullName}</div>
                    <div>${this.transactionRecord.agencyPhoneNumber}</div>
                    <div><a href="https://${this.transactionRecord.agencyWebsite}" target="_blank" class="clickable u--noUnderline">${this.transactionRecord.agencyWebsite}</a></div>`
            }
        };

        this.dialogService.openGenericModal(GenericCmsModalComponent, data);
    }

}
