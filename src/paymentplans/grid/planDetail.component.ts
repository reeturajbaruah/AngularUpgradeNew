import { Component, Input, Inject, OnInit, ViewEncapsulation } from '@angular/core';

import { CmsIds } from '../constants';

import { GridComponent } from './grid.component';
import { CmsGridContent, PdfCmsContent } from '../interfaces';
import { PlateInformation, PaymentPlanInfo } from '../services';

import { DialogService, DialogContent, DateWithTimeZoneService, GenericRepoService } from 'common/services';
import { PaymentDetailsComponent, InjectedData } from '../paymentDetails/paymentDetails.component';

import { MediaObserver } from '@angular/flex-layout';
import { OperatingSystemSnifferService } from 'common/services';



import * as moment from 'moment';

@Component({
    selector: 'plan-detail',
    templateUrl: './planDetail.html',
    styleUrls: ['./planDetail.less'],
    encapsulation: ViewEncapsulation.None
})
export class PlanDetailComponent implements OnInit {

    //@host decorator was removed for grid due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        private grid: GridComponent,
        private dateWithTimeZoneService: DateWithTimeZoneService,
        private genericRepoService: GenericRepoService,
        private cmsIds: CmsIds,
        private operatingSystemSnifferService: OperatingSystemSnifferService,
        private dialogService: DialogService,
        private mediaObserver: MediaObserver
    ) {

    }
        
    public currentDate: string;
    public dueDate: string;
    
    @Input() plate: PlateInformation;
    @Input() isActive: boolean;

    public get currentSelectedPlan(): PaymentPlanInfo {
        return this.grid.planData.selectedPaymentPlan;
    }

    public get cms(): { pdf: PdfCmsContent; data: CmsGridContent } {
        return this.grid.cms;
    }

    public get isEzTagFlow(): boolean {
        return this.grid.isEzTagFlow;
    }
       

    public alertContent: string;

    public warningBoxFlag: boolean;

    ngOnInit() {
        this.warningBoxFlag = false;
        this.setCurrentDate();
        
        const request = {
            ItemId: this.cmsIds.DetailsAlert
        };

        this.genericRepoService.dataFactory.getCmsPageById(request).then(this.populateCmsContent);
    }

    public populateCmsContent = (response) => {
        const parsedRes = JSON.parse(response.cmsResponse);
        this.alertContent = parsedRes.ShortDescription;
    };

    public getCorrectTimeZoneTime = (time) => {
        this.dueDate = this.dateWithTimeZoneService.withoutOffsetToCentral(time, 'MMM Do, YYYY z');
        return this.dueDate;
    };

    public setCurrentDate = () => {
        this.currentDate = moment().format('YYYY-MM-DD');
    };

    public isPassedDueDate = (currentDate, dueDate) => new Date(currentDate) > new Date(dueDate);

    public onClickPlanDesktop = (plan: PaymentPlanInfo) => {
        if (this.operatingSystemSnifferService.isDesktopOs()) {
            this.grid.onClickGrid(plan.paymentPlanId);
        }
    };

    public onClickPlanMobile = (plan: PaymentPlanInfo) => {
        if (!this.operatingSystemSnifferService.isDesktopOs()) {
            this.grid.onClickGrid(plan.paymentPlanId);
        }
    };

    public get isFullsite(): boolean {
        return this.operatingSystemSnifferService.isDesktopOs();
    }

    public isPassedDue(plan: PaymentPlanInfo): boolean {
        return this.isPassedDueDate(this.currentDate, plan.nextInstallmentDate);
    }

    public infoIconText(plan: PaymentPlanInfo): string {

        const isPlanPassedDue = this.isPassedDueDate(this.currentDate, plan.nextInstallmentDate);

        if (plan.status === 'Open' && isPlanPassedDue) {
            //late  
            return this.cms.data.paymentLatePopup;
        }

        return null;
    }

    public setdeafultTooltip(): string {
        return this.cms.data?.defaultedBody;
    }

    public updateToggleFlag(): void {
        this.warningBoxFlag = !this.warningBoxFlag;
        return;
    }

    public viewDetails = (plan: PaymentPlanInfo, mobileBreakpoint: string) => {

        const isMobile = this.mediaObserver.isActive(mobileBreakpoint);

        this.grid.selectPlan(plan);

        if (isMobile && !this.warningBoxFlag) {
            this.dialogService.openSliderFilled(PaymentDetailsComponent, {
                details: plan,
                cmsContent: this.cms,
                isEzTagFlow: this.isEzTagFlow
            } as InjectedData, {
                title: 'Plan Details'
            } as DialogContent);
        }
        else if (this.warningBoxFlag) {
            this.updateToggleFlag();
        }
    };
}
