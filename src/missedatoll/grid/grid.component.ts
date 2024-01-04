import { Component, Input, Inject, OnInit } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { PageEvent } from '@angular/material/paginator';

import { StateConfig } from 'common/interfaces';
import { WindowRef } from 'common/providers';
import { ENVIRON_CONFIG } from 'common/upgrades';

import { FrameComponent } from '../frame/frame.component';
import { MissedATollService, WebApiService } from '../services';

import { ViolationDataEntry, ViolationInformationDTO } from '../interfaces';

import { WebStorageConst } from 'constants/module';

import { ResponseErrorService } from 'common/services';

import {
    stateNames
} from '../constants';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

interface GridPageCmsData {
    Title: string;
    ShortDescription: string;
}

interface IViolationsData {
    licenseState: string;
    licensePlate: string;
}

@Component({
    selector: 'missed-a-toll-grid-component',
    templateUrl: './grid.html',
    styleUrls: ['./grid.less']
})
export class GridComponent implements OnInit {

    constructor(
        private parent: FrameComponent,
        private missedATollService: MissedATollService,
        private state: StateService,
        private uiRouterGlobals: UIRouterGlobals,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private missedATollApi: WebApiService,
        private webStorageConst: WebStorageConst,
        private responseErrorService: ResponseErrorService,
        private webStorage: WebStorageService
    ) { }

    @Input() cmsSection1: GridPageCmsData;
    @Input() cmsSection2: GridPageCmsData;
    public totalRecordsFound: number;
    public listOfAllViolations: ViolationDataEntry[];
    public paginatedViolations: ViolationDataEntry[];
    public mobileLoadedViolations: ViolationDataEntry[];
    public readonly defaultPageSize = this.environmentConfig.paginationConfig.missedAToll.PageSize;
    public readonly paginationLimit = this.environmentConfig.paginationConfig.missedAToll.LimitToStart;

    public licenseState: string;
    public licensePlate: string;
    public serviceFee: number;
    public totalViolationAmount: number;
    public totalAmount: number;

    private userIneligible = false;

    async ngOnInit() {
        this.parent.stepNum = 1;
        this.parent.scrollToTop();

        let violationInformation: ViolationInformationDTO = await this.missedATollService.getViolationInformation();

        if (!violationInformation) {

            await this.retryFindMissedAToll();

            if (this.userIneligible) {
                await this.state.go(stateNames.Landing);
            }
            else {

                const refreshedViolationInfo = await this.missedATollService.getViolationInformation();

                if (!refreshedViolationInfo) {

                    await this.state.go(stateNames.Landing);
                }
                else {
                    violationInformation = refreshedViolationInfo;
                    this.setupGrid(violationInformation);
                }
            }

        }
        else {

            this.setupGrid(violationInformation);
        }

    }

    private setupGrid(violationInformation: ViolationInformationDTO ) {
        const formattedViolationData = violationInformation.formattedViolationData;
        this.totalRecordsFound = formattedViolationData.listOfViolations.totalInvoices;

        this.listOfAllViolations = formattedViolationData.listOfViolations.invoices.reduce((prev, curr) => [...prev, ...curr.data], []);
        this.paginatedViolations = this.listOfAllViolations.slice(0, this.defaultPageSize);
        this.mobileLoadedViolations = this.listOfAllViolations.slice(0, this.defaultPageSize);

        this.licenseState = violationInformation.state;
        this.licensePlate = violationInformation.licensePlate;
        this.serviceFee = violationInformation.serviceFee;
        this.totalViolationAmount = formattedViolationData.totalAmountDue;
        this.totalAmount = formattedViolationData.grandTotal;
    }

    public updateViolationsDetailsTable(event: PageEvent) {
        const start = event.pageIndex * event.pageSize;
        const end = (event.pageIndex + 1) * event.pageSize;
        this.paginatedViolations = this.listOfAllViolations.slice(start, end);
    }

    public mobileLoadMore() {
        const start = this.mobileLoadedViolations.length;
        const end = this.mobileLoadedViolations.length + this.defaultPageSize;
        this.mobileLoadedViolations = this.mobileLoadedViolations.concat(this.listOfAllViolations.slice(start, end));
    }

    public async onContinue(nextState: StateConfig) {
        await this.state.go(nextState, { billingInfo: this.uiRouterGlobals.params.billingInfo });
    }

    public async retryFindMissedAToll() {

        const violationsDataInfo: IViolationsData = this.webStorage.getValue(this.webStorageConst.violationsLogData);

        const response = await this.missedATollApi.checkMatEligibility({ violationsData: violationsDataInfo });

        if (this.responseErrorService.isErrorFree(response)) {

            if (response.isUserEligible) {

                const formattedViolationData =
                    this.missedATollService.setViolationDataAndGenerateTotalAmountDue(response.listOfViolations, response.serviceFee);

                const violationInformationDto: ViolationInformationDTO = {
                    lastMatPerformed: response.lastMatPerformed,
                    serviceFee: response.serviceFee,
                    licensePlate: violationsDataInfo.licensePlate.toUpperCase(),
                    state: violationsDataInfo.licenseState,
                    formattedViolationData
                };

                this.missedATollService.saveViolationInformation(violationInformationDto);
            }
            else {
                this.userIneligible = true;
            }
        } else {
            this.responseErrorService.displayAlertsFromResponse(response);
        }
    }
}
