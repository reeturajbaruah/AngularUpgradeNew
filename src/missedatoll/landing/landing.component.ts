import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { CmsUtilService } from 'cms/services';
import { CmsImage, StateConfig } from 'common/interfaces';
import { ResponseErrorService } from 'common/services';
import { WebStorageConst } from 'constants/module';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { FrameComponent } from '../frame/frame.component';
import { MissedATollService, WebApiService } from '../services';


interface LandingPageCmsData {
    Title: string;
    ShortDescription: string;
    Image: string;
}


@Component({
    selector: 'missed-a-toll-landing-component',
    templateUrl: './landing.html',
    styleUrls: ['./landing.less']
})
export class LandingComponent implements OnInit {

    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        private parent: FrameComponent,
        private missedATollApi: WebApiService,
        private responseErrorService: ResponseErrorService,
        private missedATollService: MissedATollService,
        private state: StateService,
        private cmsUtilService: CmsUtilService,
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst
    ) { }

    @Input() public cmsSection1: LandingPageCmsData = {} as LandingPageCmsData;
    @Input() public cmsSection2: LandingPageCmsData = {} as LandingPageCmsData;
    public states = { stateList: [] };
    public violations = { selectedState: { stateCode: '' } };
    public licensePlateNumber: string;
    public cmsImage1: CmsImage;
    public cmsImage2: CmsImage;

    ngOnInit() {
        this.parent.stepNum = 0;
        this.parent.scrollToTop();
        this.parent.emailAddress = null;

        this.missedATollService.destroyViolationInformation();

        this.states.stateList = this.parent.stateList;
        this.violations.selectedState = this.parent.stateList?.find(x => x.stateCode === 'TX');

        this.cmsImage1 = this.cmsUtilService.parseAllImageAttributes(this.cmsSection1.Image) || {} as CmsImage;
        this.cmsImage2 = this.cmsUtilService.parseAllImageAttributes(this.cmsSection2.Image) || {} as CmsImage;
    }


    public async submit(nextState: StateConfig) {
        const userInfo = {
            violationsData: {
                licenseState: this.violations.selectedState.stateCode,
                licensePlate: this.licensePlateNumber.toUpperCase()
            }
        };

        const response = await this.missedATollApi.checkMatEligibility(userInfo);

        if (this.responseErrorService.isErrorFree(response)) {
            // Set violations data in webStorage after result
            this.webStorage.setKeyValue(this.webStorageConst.violationsLogData, userInfo.violationsData);

            if (response.isUserEligible) {
                await this.missedATollService.processSuccessSearch(response, userInfo.violationsData.licensePlate, userInfo.violationsData.licenseState, nextState);
            }
        } else {
            this.responseErrorService.displayAlertsFromResponse(response);
        }
    }


}
