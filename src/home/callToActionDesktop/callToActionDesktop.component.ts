import { Component, DoCheck, Inject, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { SiteCoreItem } from 'cms/cms.module';
import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { WebStorageConst } from 'constants/module';
import { MissedATollService, WebApiService } from 'missedatoll/services';
import { CmsInvoiceExampleData, InvoiceExampleComponent } from 'violations/landing/invoiceExample.component';
import { ViolationsDataService } from 'violationsCommon/services/violationsService/violationsData.service';
import { CallToActionConfig, StateNames } from '../constants';
import { stateNames as AccountOverviewStates } from 'accountDashboard/constants';
import { stateNames as Frp3States } from 'frp3/constants';
import { stateNames } from 'constants/stateNames.constants';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { PaymentPlansModalCmsContent, ViolationLoginPopUpModalCmsContent } from '../../common/ui';
import { CmsReplacementService } from 'cms/services';
import { callToActionSection, callToActionCMS } from '../interfaces';
import { FeaturesStates } from 'shared/states';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

@Component({
    selector: 'call-to-action-desktop-component',
    templateUrl: './callToActionDesktop.html',
    styleUrls: ['./callToActionDesktop.less']
})
export class CallToActionDesktopComponent implements OnInit, DoCheck {
    constructor(
        private webStorage: WebStorageService,
        private genericRepoService: GenericRepoService,
        @Inject(ENVIRON_CONFIG) public environmentConfig,
        private responseErrorService: ResponseErrorService,
        private authService: AuthenticationService,
        private stateService: StateService,
        private violationsDataService: ViolationsDataService,
        private webStorageConst: WebStorageConst,
        private missedATollApi: WebApiService,
        private missedATollService: MissedATollService,
        private homeStates: StateNames,
        private dialogService: DialogService,
        private cmsReplacementService: CmsReplacementService
    ) { }

    @Input() cmsData: callToActionCMS;
    @Input() cmsInvoiceExample: SiteCoreItem;
    @Input() violationLoginModal: ViolationLoginPopUpModalCmsContent;
    @Input() paymentPlansModal: PaymentPlansModalCmsContent;

    public stateList: { stateCode: string }[];
    public isLoggedin: boolean;
    public displayList: callToActionSection[] = [];
    public currentSelectedIndex: number;
    public previousSelectedIndex: number;
    public callToActionConfig = CallToActionConfig;

    //input DATA
    public violations = {
        selectedState: { stateCode: '' },
        licensePlateNumber: '',
        invoiceNumber: ''
    };

    async ngOnInit() {
        this.genericRepoService.dataFactory.getStates().then(response => {
            if (response.errors.length === 0) {
                this.stateList = response.states;
                this.violations.selectedState = this.stateList.find(x => x.stateCode === 'TX');
            } else {
                this.responseErrorService.displayErrorsFromResponse(response);
            }
        });
        this.currentSelectedIndex = 0;
        this.isLoggedin = this.authService.isAuthenticated();
        this.updateDisplayList();
    }
    //TODO: CHANGE TO USE OBSERVABLE
    ngDoCheck() {
        if (this.isLoggedin !== this.authService.isAuthenticated()) {
            this.isLoggedin = this.authService.isAuthenticated();
            this.updateDisplayList();
        }
    }

    //TODO: Clean Up after FRP3 goes live
    private updateDisplayList(): void {
        if (this.displayList.length > 0) {
            this.displayList = [];
        }
        for (const section of this.cmsData.Children) {
            if ((this.isLoggedin && section.hideAtLogIn === '')
                || (!this.isLoggedin && section.hideAtLogOut === '')) {
                if ((this.environmentConfig.isMergeMATandVioOn && this.callToActionConfig.Violations !== section.SectionConfig && this.callToActionConfig.MissedAToll !== section.SectionConfig)
                    || (!this.environmentConfig.isMergeMATandVioOn && this.callToActionConfig.PayTollsAndInvoices !== section.SectionConfig
                        && this.callToActionConfig.ActivateEzTag !== section.SectionConfig)) {
                    this.displayList.push(section);
                }
            }
        }
    }

    public updateIndex(index: number): void {
        if (index !== this.currentSelectedIndex) {
            this.previousSelectedIndex = this.currentSelectedIndex;
            this.currentSelectedIndex = index;
        }

    }

    public goToPage(config): void {
        if (config === this.callToActionConfig.SignUp) {
            if (!this.environmentConfig.createAccountRefresh) {
                this.stateService.go(this.homeStates.SignUp);
            } else {
                this.stateService.go(FeaturesStates.Login);
            }
        }
        else if (config === this.callToActionConfig.AccountDashboard) {
            this.stateService.go(AccountOverviewStates.Frame);
        }
        else if (config === this.callToActionConfig.ActivateEzTag) {
            this.stateService.go(stateNames.activateEzTag);
        }
        return;
    }

    public async findViolations() {

        const fullRequest = {
            violationsData: {
                licenseState: this.violations.selectedState.stateCode,
                invoiceNumber: this.violations.invoiceNumber,
                licensePlate: this.violations.licensePlateNumber
            }
        };
        //TODO: clean up after FRP3 is live
        if (!this.environmentConfig.isMergeMATandVioOn) {
            await this.violationsDataService.findViolations(fullRequest.violationsData);
        }
        else {
            this.paymentPlansModal.LongDescription = this.cmsReplacementService.transformTemplate
                (this.paymentPlansModal.LongDescription, { plate: `${fullRequest.violationsData.licenseState.toUpperCase()} ${fullRequest.violationsData.licensePlate.toUpperCase()}` });
            await this.violationsDataService.findViolationAcct(fullRequest.violationsData, this.paymentPlansModal, this.violationLoginModal, {
                to: Frp3States.Grid, params: {},
                options: { custom: { isExplicitlyAllowedTransition: true } }
            });
        }

    }
    //TODO: Remove after FRP3 is live
    //TODO: Refactor this function into missedATollService and refactor MAT flow as well
    //It seems that once we had implemented lazy loading for MAT, this broke.
    public async findMissedAToll() {
        const userInfo = {
            violationsData: {
                licenseState: this.violations.selectedState.stateCode,
                licensePlate: this.violations.licensePlateNumber.toUpperCase()
            }
        };

        const response = await this.missedATollApi.checkMatEligibility(userInfo);

        if (this.responseErrorService.isErrorFree(response)) {
            // Set violations data in webStorage after result
            this.webStorage.setKeyValue(this.webStorageConst.violationsLogData, userInfo.violationsData);

            if (response.isUserEligible) {
                await this.missedATollService.processSuccessSearch(response, userInfo.violationsData.licensePlate, userInfo.violationsData.licenseState);
            }
        } else {
            this.responseErrorService.displayAlertsFromResponse(response);
        }
    }

    public openInvoiceExample() {
        this.dialogService.openSliderCentered(InvoiceExampleComponent, {
            pageData: this.cmsInvoiceExample
        } as CmsInvoiceExampleData);
    }
}
