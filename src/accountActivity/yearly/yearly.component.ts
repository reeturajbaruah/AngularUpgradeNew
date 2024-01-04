import { Component, Input, OnInit } from '@angular/core';
import { stateNames as accountActivityStates } from 'accountActivity/constants';
import { FrameComponent } from 'accountActivity/frame/frame.component';
import { GetYearlySummaryInfoRequest, GetYearlySummaryInfoResponse } from 'accountActivity/interfaces';
import { AccountActivityService, WebApisService } from 'accountActivity/services';
import { CurrentUser, CurrentUserService, DownloadService } from 'common/services';
import { isObject, orderBy } from 'lodash';
import { ResponseErrorService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { Inject } from '@angular/core';
import { Tab } from '../tabs/tabs.component';

interface ICmsContent {
    [key: string]: string;
}

@Component({
    selector: 'yearly',
    templateUrl: './yearly.html',
    styleUrls: ['./yearly.less']
})
export class YearlyComponent implements OnInit {
    @Input() cmsContent: ICmsContent;

    constructor(
        public parent: FrameComponent,
        private accountActivityService: AccountActivityService,
        private webApisService: WebApisService,
        private currentUserService: CurrentUserService,
        private responseErrorService: ResponseErrorService,
        @Inject(ENVIRON_CONFIG) public environmentConfig,
    ) { }

    public selectedValue: number;
    public yearTransitionData: string[] = [];
    public selectedYear: number;
    public showStatementYears: boolean;
    public showStatement: boolean;
    public setupShowStatement: boolean;
    public showYearData: boolean;
    public yearlySummaryData = {} as GetYearlySummaryInfoResponse;
    public currentUser: CurrentUser;
    public isCurrentUserNotLargeAccount: any;

    onYearSelectionChanged(selection: number) {
        this.selectedValue = selection;
    }

    async ngOnInit() {
        this.parent.selectedState = Tab.yearlySummary;

        this.showStatement = true;
        this.currentUser = this.currentUserService.getCurrentUser();
        const yearSetup = await this.webApisService.setupYearlyPage();

        if (yearSetup && yearSetup.dates && yearSetup.dates.length > 0) {
            this.yearTransitionData = yearSetup.dates;
            this.selectedYear = parseInt(yearSetup.dates[0], 10);
            this.showStatementYears = true;
            await this.getYearlySummaryInfoData(this.selectedYear);
            this.showStatementYears = true;
        } else {
            this.showStatementYears = false;
            this.showStatement = false;
        }
        this.setupShowStatement = true;
    }

    public async getYearlySummaryInfoData(year: number) {
        this.selectedYear = this.selectedValue ? this.selectedValue : this.selectedYear;
        const request: GetYearlySummaryInfoRequest = {
            year: this.selectedYear
        };
        this.isCurrentUserNotLargeAccount = isObject(this.currentUser) &&
            (!this.currentUser.largeAccountFlag && !this.currentUser.extraLargeAccountFlag);

        if (this.isCurrentUserNotLargeAccount && this.environmentConfig.heedLargeAccountFlag) {

            const response = await this.webApisService.getYearlySummary(request);

            this.showStatement = (Array.isArray(response.tagSummary) && response.tagSummary.length > 0) ||
                (Array.isArray(response.acctSummary) && response.acctSummary.length > 0) ||
                (Array.isArray(response.errors) && response.errors.length === 0);

            this.yearlySummaryData = {
                tagSummary: orderBy(response?.tagSummary, (x: any) => x.description, ['desc']),
                acctSummary: orderBy(response?.acctSummary, (x: any) => x.description === 'Ending Balance', ['asc'])
            } as GetYearlySummaryInfoResponse;

            this.showYearData = Array.isArray(response?.tagSummary) && Array.isArray(response?.acctSummary);
        }
        else {
            this.responseErrorService.displayToast(this.cmsContent.ShortDescription, 'Warning', false);
        }

    }

}
