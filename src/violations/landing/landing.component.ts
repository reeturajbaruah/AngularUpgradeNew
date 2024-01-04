import { Component, Input, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';

import { CmsImage } from 'common/interfaces';
import { CmsUtilService } from 'cms/services';
import { ViolationsDataService } from 'violationsCommon/services/violationsService/violationsData.service';

import { FrameComponent } from 'violations/frame/frame.component';
import { InvoiceExampleComponent, CmsInvoiceExampleData } from './invoiceExample.component';
import {
    LoginPopUpInjectionValues, CmsContent as LoginModalCmsContent,
    LoginModalComponent, CloseImage as LoginModalCloseImage
} from 'common/ui/modals/loginPopUpModal/loginModal.component';
import { DialogService } from 'common/services';
import { SiteCoreItem, SiteCoreMediaItem } from 'cms/cms.module';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

interface LandingPageCmsData {
    Title: string;
    ShortDescription: string;
    Children: any[];
}

interface CloseImageCMSData {
    Image: string;
}

@Component({
    selector: 'violations-landing-component',
    templateUrl: './landing.html',
    styleUrls: ['./landing.less']
})
export class LandingComponent implements OnInit {

    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        private parent: FrameComponent,
        private violationsDataService: ViolationsDataService,
        private cmsUtilService: CmsUtilService,
        private storefrontUtilityService: StorefrontUtilityService,
        private dialogService: DialogService,
        private authService: AuthenticationService
    ) { }


    @Input() cmsMainPage: LandingPageCmsData = {} as LandingPageCmsData;
    @Input() cmsSectionDoYouHaveAnEZTagAccount: SiteCoreItem = {} as SiteCoreItem;
    @Input() cmsSectionImportantReminders: SiteCoreItem = {} as SiteCoreItem;
    @Input() cmsSectionInvoiceImage: SiteCoreMediaItem & { ImageCaption: string } = {} as (SiteCoreMediaItem & { ImageCaption: string });
    @Input() cmsSectionSearchForTollViolationInvoices: SiteCoreItem = {} as SiteCoreItem;
    @Input() cmsInvoiceExample: SiteCoreItem = {} as SiteCoreItem;

    @Input() cmsLoginModal: LoginModalCmsContent;
    @Input() closeImage: CloseImageCMSData;


    @Input() public usStates: { stateCode: string }[];

    public cmsImage: CmsImage;
    public stateList: any[] = [];
    public invoiceNumber: string;
    public violations = {
        selectedState: { stateCode: '' },
        licensePlateNumber: '',
        invoiceNumber: ''
    };

    ////Kiosk variables
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

    ngOnInit() {
        this.violationsDataService.removeAllWebStorageEntries();

        this.stateList = this.parent.stateList;
        this.parent.stepNum = 0;
        this.parent.setTitle(this.cmsMainPage.Title);
        this.parent.scrollToTop();

        this.violations.selectedState = this.stateList?.find(x => x.stateCode === 'TX');

        this.cmsImage = this.cmsUtilService.parseAllImageAttributes(this.cmsSectionInvoiceImage.Image) || {} as CmsImage;

        //Kiosk


        //This is to prevent the login modal popping on top of the survey in kiosk
        const notKioskModeOrIsFullSiteKiosk = !this.storefrontUtilityService.isRunningAsKiosk || this.storefrontUtilityService.webStoreData.fullSiteMode;


        if (!this.authService.isAuthenticated() && notKioskModeOrIsFullSiteKiosk) {
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

    public async findViolations() {

        const fullRequest = {
            violationsData: {
                licenseState: this.violations.selectedState.stateCode,
                invoiceNumber: this.violations.invoiceNumber,
                licensePlate: this.violations.licensePlateNumber
            }
        };

        await this.violationsDataService.findViolations(fullRequest.violationsData);
    }

    public openInvoiceExample() {
        this.dialogService.openSliderCentered(InvoiceExampleComponent, {
            pageData: this.cmsInvoiceExample
        } as CmsInvoiceExampleData);
    }
}
