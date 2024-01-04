import { Component, Inject, Input, OnInit } from '@angular/core';
import { FrameComponent } from 'accountActivity/frame/frame.component';
import { AccountSummary, SetUpStatementsPageResponse, TagSummary } from 'accountActivity/interfaces';
import { AccountActivityService } from 'accountActivity/services';
import { WebApisService } from 'accountActivity/services/webApis.service';
import { CurrentUser, CurrentUserService, DownloadService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { isObject, orderBy } from 'lodash';
import { Tab } from '../tabs/tabs.component';

interface ICmsContent {
    [key: string]: string;
}

@Component({
    selector: 'monthly',
    templateUrl: './monthly.html',
    styleUrls: ['./monthly.less']
})
export class MonthlyComponent implements OnInit {

    constructor(
        private webApi: WebApisService,
        private currentUserService: CurrentUserService,
        public parent: FrameComponent,
        @Inject(ENVIRON_CONFIG) public environmentConfig,
        private downloadService: DownloadService,
        private accountActivityService: AccountActivityService
    ) { }

    @Input() cmsContent: ICmsContent;

    public statementsData: SetUpStatementsPageResponse;
    public currentUser: CurrentUser;
    public pdfProcessing = false;
    public currentMonth: string;
    public searchedMonth: string; // Only updated after the Search returns
    public showStatement: boolean;
    public showStatementMonths: boolean;
    public ezTagSummaries: TagSummary[];
    public accountTagSummaries: AccountSummary[];
    public cmsHeaderText: string;
    public downloadAvailable: string;
    public reportDownloading = false;

    async ngOnInit() {
        this.parent.selectedState = Tab.statements;

        this.showStatement = true;

        this.currentUser = this.currentUserService.getCurrentUser();
        this.statementsData = await this.webApi.setUpStatementsPage();
        if (this.statementsData && this.statementsData.dates && this.statementsData.dates.length > 0) {
            this.statementsData.dates = orderBy(this.statementsData.dates, (monthYear: string) => new Date('01 ' + monthYear), ['desc']);
            this.currentMonth = this.statementsData.dates[0];
            await this.monthSearch();
            this.showStatementMonths = true;
        } else {
            this.showStatementMonths = false;
            this.showStatement = false;
        }
    }

    public async monthSearch() {
        const response = await this.webApi.getMonthlyStatement({ date: this.currentMonth });
        const isResponseValid = isObject(response) && Array.isArray(response.errors) && response.errors.length === 0;
        const isCurrentUserNotLargeAccount = isObject(this.currentUser) &&
            (!this.currentUser.largeAccountFlag && !this.currentUser.extraLargeAccountFlag);

        if ((this.environmentConfig.heedLargeAccountFlag && isCurrentUserNotLargeAccount) && isResponseValid) {

            this.searchedMonth = this.currentMonth;

            this.showStatement = (Array.isArray(response.tagSummaries) && response.tagSummaries.length > 0) ||
                (Array.isArray(response.acctSummary) && response.acctSummary.length > 0) ||
                (Array.isArray(response.errors) && response.errors.length === 0);

            this.ezTagSummaries = response.tagSummaries;
            this.accountTagSummaries = response.acctSummary;
            let totalAmount = 0;
            this.accountTagSummaries.forEach(acctTagSummary => {
                if (acctTagSummary && acctTagSummary.description) {
                    if (acctTagSummary.description !== 'Ending Balance') {
                        totalAmount += acctTagSummary.amount;
                    } else {
                        acctTagSummary.amount = totalAmount;
                    }
                }
            });
        } else {
            this.showStatement = false;
        }
    };

    public getTagId(rowNumber: number, length: number, tagId: string) {
        if (rowNumber === length - 1) {
            return 'Total';
        }

        return tagId ? tagId : '';
    }

    public async getMonthlyStatementPdf() {
        const url = 'api/sessions/Pdf/GetStatementPdfReport/';
        await this.downloadReport(url, true);
    };

    public async getMonthlyStatementExcel() {
        const url = 'api/sessions/Pdf/GetStatementExcelReport/';
        await this.downloadReport(url, false);
    };

    private async downloadReport(url: string, isPdf: boolean) {
        this.reportDownloading = true;

        await this.downloadService.download(url, isPdf, {
            date: this.currentMonth
        });

        this.reportDownloading = false;
    }
}

