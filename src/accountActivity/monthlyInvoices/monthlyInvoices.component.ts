import { DatePipe } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { stateNames as accountActivityStates } from 'accountActivity/constants';
import { FrameComponent } from 'accountActivity/frame/frame.component';
import { InvoiceMonths, MonthlyInvoiceResponse } from 'accountActivity/interfaces';
import { AccountActivityService } from 'accountActivity/services';
import { WebApisService } from 'accountActivity/services/webApis.service';
import { ENVIRON_CONFIG } from 'common/module';
import { DownloadService } from 'common/services';
import { isObject, orderBy, remove } from 'lodash';
import { Tab } from '../tabs/tabs.component';

interface CmsContent {
    Title: string;
    ShortDescription: string;
    LongDescription: string;
    Children: CmsContent[];
}

@Component({
    selector: 'monthly-invoices',
    templateUrl: './monthlyInvoices.html',
    styleUrls: ['./monthlyInvoices.less']
})
export class MonthlyInvoicesComponent implements OnInit {
    constructor(
        public parent: FrameComponent,
        private webApi: WebApisService,
        private downloadService: DownloadService,
        private accountActivityService: AccountActivityService,
        private datePipe: DatePipe,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    @Input() cmsContent: CmsContent;

    public showInvoiceMonths: boolean;
    public selectedMonth: string;
    public currentMonth: string;
    public invoiceDates: string[];
    public invoiceResponse: MonthlyInvoiceResponse;
    public showInvoices: boolean;
    public companyName: string;
    public phoneNumber: string;
    public showAddress: boolean;
    public cmsHeaderText: string;
    public cmsDownloadInvoiceText: string;
    public cmsOutstandingInvoiceText: string;
    public reportDownloading = false;

    async ngOnInit() {
        this.parent.selectedState = Tab.invoices;

        this.showInvoiceMonths = true; 
        this.assignCmsContent();

        const invoiceMonthsResponse: InvoiceMonths = await this.webApi.setupInvoicesPage();

        if (invoiceMonthsResponse && invoiceMonthsResponse.invoiceDates && invoiceMonthsResponse.invoiceDates.length > 0) {
            this.invoiceDates = invoiceMonthsResponse.invoiceDates.map((monthYear: string) => new Date('01 ' + monthYear).toISOString());
            this.invoiceDates = orderBy(this.invoiceDates, ['desc']);
            this.selectedMonth = this.invoiceDates[0];
            this.getInvoices();
            this.showInvoiceMonths = true;
        } else {
            this.showInvoiceMonths = false;
        }
    }

    assignCmsContent() {
        const cmsElements: CmsContent[] = this.cmsContent.Children;

        this.cmsHeaderText = cmsElements.find(x => x.Title === 'Header Text').LongDescription.trim();
        if (!this.cmsHeaderText) {
            this.cmsHeaderText = '';
        }
        this.cmsDownloadInvoiceText = cmsElements.find(x => x.Title === 'Download Invoice').LongDescription.trim();
        this.cmsOutstandingInvoiceText = cmsElements.find(x => x.Title === 'Outstanding Invoices').LongDescription.trim();
    }

    public async getInvoices() {
        const selectedMonthParameter = this.datePipe.transform(new Date(this.selectedMonth), 'MM/yyyy');
        const response = await this.webApi.getMonthlyInvoice({ invoiceDate: selectedMonthParameter });
        const isResponseValid = isObject(response) && Array.isArray(response.errors) && response.errors.length === 0;

        if (isResponseValid) {

            if (isObject(response.invoiceDetails) &&
                Array.isArray(response.invoiceDetails)) {

                response.invoiceDetails.forEach(detail => {
                    if (!detail.licenseStateAndPlate || detail.licenseStateAndPlate.length === 0 || detail.licenseStateAndPlate === 'NONE') {
                        if (detail.vehicleNickName && detail.vehicleNickName.length > 0 && detail.vehicleNickName !== 'NONE') {
                            detail.customKey = detail.vehicleNickName;
                        } else {
                            detail.customKey = 'Miscellaneous Transactions';
                        }
                    } else {
                        if (detail.vehicleNickName && detail.vehicleNickName.length > 0 && detail.vehicleNickName !== 'NONE') {
                            detail.customKey = `${detail.licenseStateAndPlate} - ${detail.vehicleNickName}`;
                        } else {
                            detail.customKey = detail.licenseStateAndPlate;
                        }
                    }
                });

                remove(response.invoiceDetails,
                    x => !x.customKey || x.customKey.length === 0 || x.customKey.indexOf('NONE') >= 0
                );
            }
            this.invoiceResponse = response;
            this.currentMonth = this.datePipe.transform(new Date(this.selectedMonth), 'MMMM yyyy');
            this.showInvoices = true;
        }
    }

    public async getMonthlyInvoicePdf() {
        const url = '/api/sessions/Pdf/GetMonthlyInvoicePdfReport/';
        await this.downloadReport(url, true);
    }

    public async getMonthlyInvoiceExcel() {
        const url = '/api/sessions/Pdf/GetMonthlyInvoiceExcelReport/';
        await this.downloadReport(url, true);
    }

    private async downloadReport(url: string, isPdf: boolean) {
        this.reportDownloading = true;

        await this.downloadService.download(url, isPdf, {
            invoiceNum: this.invoiceResponse.invoiceNumber
        });

        this.reportDownloading = false;
    }
}
