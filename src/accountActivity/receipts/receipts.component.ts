import { DatePipe } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FrameComponent } from 'accountActivity/frame/frame.component';
import { SetupReceiptRequest } from 'accountActivity/interfaces';
import { IInjectionValues, ReceiptDetailsComponent } from 'accountActivity/receipts/receiptDetails.component';
import { AccountActivityService } from 'accountActivity/services';
import { WebApisService } from 'accountActivity/services/webApis.service';
import { DialogContent, DialogService,ToasterService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { Tab } from '../tabs/tabs.component';
import { ReceiptDetailsRequest, ReceiptDetailsResponse } from '../interfaces';

interface ICmsContent {
    [key: string]: string;
}


@Component({
    selector: 'receipts',
    templateUrl: './receipts.html',
    styleUrls: ['./receipts.less']
})
export class ReceiptsComponent implements OnInit {

    public receiptsHeaders: any;
    public headersCounter: number;
    public selectedValue: string;
    public dateTo: Date;
    public dateFrom: Date;
    public screenSize: any;
    public minDate: Date;
    public maxDate: Date;
    public showNoData = false;

    @Input() cmsContent: ICmsContent;
    constructor(
        public parent: FrameComponent,
        private webApisService: WebApisService,
        private dialogService: DialogService,
        private accountActivityService: AccountActivityService,
        private toasterService: ToasterService,
        private datePipe: DatePipe,
        @Inject(ENVIRON_CONFIG) private environmentConfig
    ) { }

    async ngOnInit() {
        this.parent.selectedState = Tab.receipts;

        this.minDate = new Date();
        this.minDate.setDate(new Date().getDate() - this.environmentConfig.accountActivityMaxDaysInSearch);
        this.maxDate = new Date();

        const formattedDateFrom = this.datePipe.transform(this.dateFrom ? new Date(this.dateFrom) : new Date(), 'yyyy/MM/dd');

        const formattedDateTo = this.datePipe.transform(this.dateTo ? new Date(this.dateTo) : new Date(), 'yyyy/MM/dd');

        const request: SetupReceiptRequest = {
            fmonth: formattedDateFrom.substring(5, 7),
            fday: formattedDateFrom.substring(8, 10),
            fyear: formattedDateFrom.substring(0, 4),
            tmonth: formattedDateTo.substring(5, 7),
            tday: formattedDateTo.substring(8, 10),
            tyear: formattedDateTo.substring(0, 4)

        };

        const response = await this.webApisService.setupReceipts(request);
        this.receiptsHeaders = response.receiptHeaders;
        this.headersCounter = this.receiptsHeaders.length;
        this.dateTo = new Date();
        this.dateFrom = new Date();
        this.dateFrom.setDate(this.dateFrom.getDate() - 7);

        await this.infoSearch(this.dateFrom, this.dateTo);
        this.showNoData = true;
    }

    public async openDetailsReceipt(value) {

        const receiptDetailsRequest: ReceiptDetailsRequest = {
            transactionNumber: value
        };

        const receiptDetailsResponse: ReceiptDetailsResponse = await this.webApisService.receiptDetails(receiptDetailsRequest);
        this.toasterService.removeAll();

        this.dialogService.openSliderFilled(ReceiptDetailsComponent,
            {
                transactionNumber: receiptDetailsRequest.transactionNumber,
                response: receiptDetailsResponse
            } as IInjectionValues,
            { title: 'Receipt Details' } as DialogContent);
    }

    public async infoSearch(valueFrom, valueTo) {
        const formattedDateFrom = this.datePipe.transform(new Date(valueFrom), 'yyyy/MM/dd');

        const formattedDateTo = this.datePipe.transform(new Date(valueTo), 'yyyy/MM/dd');

        const request: SetupReceiptRequest = {
            fmonth: formattedDateFrom.substring(5, 7),
            fday: formattedDateFrom.substring(8, 10),
            fyear: formattedDateFrom.substring(0, 4),
            tmonth: formattedDateTo.substring(5, 7),
            tday: formattedDateTo.substring(8, 10),
            tyear: formattedDateTo.substring(0, 4)
        };

        const response = await this.webApisService.setupReceipts(request);
        this.receiptsHeaders = response.receiptHeaders;
        this.headersCounter = this.receiptsHeaders.length;
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

}


