import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import {
    AccountSummaryInfo,
    EZTAGSummaryInfo,
    GetYearlySummaryInfoRequest,
    GetYearlySummaryInfoResponse
} from 'accountActivity/interfaces';
import { WebApisService } from 'accountActivity/services';
import { ENVIRON_CONFIG } from 'common/module';
import { DownloadService } from 'common/services';
import { orderBy } from 'lodash';


interface CmsContent {
    Title: string;
    ShortDescription: string;
    LongDescription: string;
}

@Component({
    selector: 'yearly-summary-info',
    templateUrl: './yearlySummaryInfo.html',
    styleUrls: ['./yearlySummaryInfo.less']
})
export class YearlySummaryInfoComponent {

    @Input() year: string;
    @Input() cmsContent: CmsContent;

    @Input() eztagSummary: EZTAGSummaryInfo[];
    @Input() accountSummary: AccountSummaryInfo[];

    public reportDownloading = false;

    constructor(
        private downloadService: DownloadService,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    public async getYearlySummaryPdf() {
        const url = '/api/sessions/Pdf/GetYearlyPdfReport/';
        await this.downloadReport(url, true);
    };

    public async getYearlySummaryExcel() {
        const url = '/api/sessions/Pdf/GetYearlyExcelReport/';
        await this.downloadReport(url, false);
    };

    private async downloadReport(url: string, isPdf: boolean) {
        this.reportDownloading = true;

        await this.downloadService.download(url, isPdf, {
            date: `01/01/${this.year}`
        });

        this.reportDownloading = false;
    }
}


