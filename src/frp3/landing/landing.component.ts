import { Component, Input, OnInit, Inject, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';

import { CmsImage } from 'common/interfaces';
import { CmsReplacementService, CmsUtilService } from 'cms/services';
import { NextState, ViolationsDataService } from 'violationsCommon/services/violationsService/violationsData.service';

import { FrameComponent } from '../frame/frame.component';
import {
    LoginPopUpInjectionValues, CmsContent as LoginModalCmsContent,
    LoginModalComponent, CloseImage as LoginModalCloseImage
} from 'common/ui/modals/loginPopUpModal/loginModal.component';
import { DialogService } from 'common/services';
import { SiteCoreItem, SiteCoreMediaItem } from 'cms/cms.module';
import { CloseImageCMSData, LandingPageCmsData, PaymentPlanToolTip } from '../interfaces';
import { InvoiceExampleComponent, CmsInvoiceExampleData } from 'violations/landing/invoiceExample.component';
import { StateDeclaration } from '@uirouter/core';
import { PaymentPlansModalCmsContent, ViolationLoginPopUpModalCmsContent } from 'common/ui';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

@Component({
    selector: 'violation-search-landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.less']
})
export class LandingComponent implements OnInit, OnDestroy {


    constructor(
        private parent: FrameComponent,
        private violationsDataService: ViolationsDataService,
        private cmsUtilService: CmsUtilService,
        private storefrontUtilityService: StorefrontUtilityService,
        private dialogService: DialogService,
        private authService: AuthenticationService,
        private cmsReplacementService: CmsReplacementService
    ) { }

    @Input() cmsMainPage: LandingPageCmsData = {} as LandingPageCmsData;
    @Input() cmsSectionPayingOutstandingTolls: SiteCoreItem = {} as SiteCoreItem;
    @Input() cmsSectionInvoiceImage: SiteCoreMediaItem = {} as SiteCoreMediaItem;
    @Input() cmsSectionSearchForTollViolationInvoices: SiteCoreItem = {} as SiteCoreItem;
    @Input() cmsInvoiceExample: SiteCoreItem = {} as SiteCoreItem;

    @Input() cmsLoginModal: LoginModalCmsContent;
    @Input() paymentPlansModal: PaymentPlansModalCmsContent;
    @Input() violationLoginModal: ViolationLoginPopUpModalCmsContent;
    @Input() closeImage: CloseImageCMSData;
    @Input() cmsContentPmntPlan: PaymentPlanToolTip;

    @Input() public usStates: { stateCode: string }[];

    public cmsImage: CmsImage;
    public stateList: any[] = [];
    public invoiceNumber: string;
    public violations = {
        selectedState: { stateCode: '' },
        licensePlateNumber: '',
        invoiceNumber: ''
    };

    public kioskCmsData: {
        whatIsAViolationTitle: '';
        whatIsAViolationContent: '';
        payTollTitle: '';
        payTollContent: '';
        hearingProcessTitle: '';
        hearingProcessContent: '';
        wizardTitle: '';
    };

    public paymentComplete: boolean;
    notKioskModeOrIsFullSiteKiosk: any;
    ngOnInit() {
        this.violationsDataService.removeAllWebStorageEntries();

        this.stateList = this.parent.stateList;
        this.parent.stepNum = 0;
        this.parent.scrollToTop();

        this.violations.selectedState = this.stateList?.find(x => x.stateCode === 'TX');

        this.cmsImage = this.cmsUtilService.parseAllImageAttributes(this.cmsSectionInvoiceImage.Image) || {} as CmsImage;

        this.notKioskModeOrIsFullSiteKiosk = !this.storefrontUtilityService.isRunningAsKiosk || this.storefrontUtilityService.webStoreData.fullSiteMode;

        if (!this.authService.isAuthenticated() && this.notKioskModeOrIsFullSiteKiosk) {
            this.showLoginModal();
        }
    }

    private showLoginModal() {
        const data = {
            cmsContent: this.cmsLoginModal as LoginModalCmsContent,
            closeImage: this.closeImage as LoginModalCloseImage
        };
        this.dialogService.openGenericModal<LoginModalComponent, LoginPopUpInjectionValues>(LoginModalComponent, data);
    }

    public async findViolations(state: StateDeclaration) {

        //Old API, clean up later
        const fullRequest = {
            violationsData: {
                licenseState: this.violations.selectedState.stateCode,
                invoiceNumber: this.violations.invoiceNumber,
                licensePlate: this.violations.licensePlateNumber
            }
        };
        this.paymentPlansModal.LongDescription = this.cmsReplacementService.transformTemplate
            (this.paymentPlansModal.LongDescription, { plate: `${fullRequest.violationsData.licenseState.toUpperCase()} ${fullRequest.violationsData.licensePlate.toUpperCase()}` });
        await this.violationsDataService.findViolationAcct(
            fullRequest.violationsData, this.paymentPlansModal, { ...this.violationLoginModal, ...this.cmsContentPmntPlan },
            { to: state, options: { custom: { isExplicitlyAllowedTransition: true } } } as NextState);
    }

    public openInvoiceExample() {
        this.dialogService.openSliderCentered(InvoiceExampleComponent, {
            pageData: this.cmsInvoiceExample
        } as CmsInvoiceExampleData);
    }

    ngOnDestroy() {
        this.dialogService.closeAllModals();
    }
}
