import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { SiteCoreItem } from 'cms/cms.module';
import { StateConfig } from 'common/interfaces';
import { DialogService, ResponseErrorService } from 'common/services';
import { FrameComponent } from 'paymentplans/frame/frame.component';
import { PlateDataService } from 'paymentplans/services';
import { WebApiService } from 'paymentplans/services/webApi.service';
import { CmsInvoiceExampleData, InvoiceExampleComponent } from './invoiceExample.component';
import { WebStorageConst } from '../../constants/webstorage.constants';
import { IPlate } from '../../frp3/interfaces';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';


interface LandingPagePopupContent {
    Title: string;
    PrimaryContent: string;
    AcceptButton: string;
    RejectButton: string;
}

interface LandingPageContent {
    ShortDescription: string;
    LongDescription: string;
}

interface CloseImageCMSData {
    Image: string;
}

@Component({
    selector: 'payment-plans-landing-component',
    templateUrl: './landing.html',
    styleUrls: ['./landing.less']
})
export class LandingComponent implements OnInit {

    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        private parent: FrameComponent,
        private authService: AuthenticationService,
        private dataService: PlateDataService,
        private responseErrorService: ResponseErrorService,
        private paymentPlanApi: WebApiService,
        private state: StateService,
        private dialogService: DialogService,
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    //parent wraps
    private get isEzTagFlow(): boolean {
        return this.parent.isEzTagFlow;
    }

    public get Title(): string {
        return this.cmsPage.ShortDescription;
    }

    public get Description(): string {
        return this.cmsPage.LongDescription;
    }

    @Input() public selectedState: { stateCode: string };
    @Input() public licensePlateNumber: string;
    @Input() public paymentPlanId: string;
    @Input() public invoiceNumber: string;

    @Input() USstates: { stateCode: string }[];
    @Input() cmsPopup: LandingPagePopupContent;
    @Input() cmsPage: LandingPageContent;
    @Input() closeImage: CloseImageCMSData;

    @Input() cmsInvoiceExample: SiteCoreItem;

    ngOnInit() {
        this.parent.stepNum = 0;
        this.parent.scrollToTop();

        const plateData = this.webStorage.getValue(this.webStorageConst.vehicleSelected) as IPlate;

        if (this.environmentConfig.isMergeMATandVioOn && plateData != null) {
            this.licensePlateNumber = plateData.number ?? '';

            const usState = plateData.state ?? '';

            this.selectedState = usState ? this.USstates.find(x => x.stateCode === usState) : this.USstates.find(x => x.stateCode === 'TX');

            this.webStorage.removeEntry(this.webStorageConst.vehicleSelected);
        }
        if (!this.environmentConfig.isMergeMATandVioOn || plateData === null) {
            this.licensePlateNumber = '';
            this.selectedState = this.USstates.find(x => x.stateCode === 'TX');
        }

        if (this.authService.isAuthenticated()) {
            return;
        }
    }

    public async findViolations(nextState: StateConfig) {
        const fullRequest = {
            InvoiceNumber: this.invoiceNumber ? ('' + this.invoiceNumber) : null,
            LicenseState: this.selectedState.stateCode,
            LicensePlate: this.licensePlateNumber,
            PaymentPlanId: this.paymentPlanId ? ('' + this.paymentPlanId) : null
        };

        const response = await this.paymentPlanApi.violationsPaymentPlansSearch(fullRequest);

        if (!this.responseErrorService.isErrorFree(response)) {
            return;
        }

        this.dataService.setPaymentPlans(response, this.isEzTagFlow);
        await this.state.go(nextState);
    }

    //refresh
    public openInvoiceExample(reverseOrder: boolean) {
        this.dialogService.openSliderCentered(InvoiceExampleComponent, {
            pageData: this.cmsInvoiceExample,
            reverseOrder
        } as CmsInvoiceExampleData);
    }
    
}

