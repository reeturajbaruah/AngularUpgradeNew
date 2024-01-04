import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { CurrentUserService } from 'common/services';
import { FrameComponent } from 'suspendedAccountRefresh/frame/frame.component';

export interface IWithoutViolationsLandingCmsContent extends SiteCoreItem {
    BannerTitle: string;
    BannerContent: string;
}

@Component({
    selector: 'suspended-without-violations-landing-component',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

    @Input() cmsContentWithoutViolations: IWithoutViolationsLandingCmsContent;
    content: string;
    title: string;

    showWizard: boolean;

    constructor(
        private parent: FrameComponent,
        private state: StateService,
        private currentUserService: CurrentUserService
    ) {
    }

    get isPositiveBalance(): boolean {
        return this.currentUserService.getCurrentUser()?.currentBalanceObj?.currentBalance > 0;
    }

    async ngOnInit() {
        this.setBanner();
        this.parent.showStepper = false;

        const isPositiveBalance = this.currentUserService.getCurrentUserBalance() > 0;
        this.title = this.cmsContentWithoutViolations.Title;

        this.content = isPositiveBalance
            ? this.cmsContentWithoutViolations.ShortDescription
            : this.cmsContentWithoutViolations.LongDescription;

        this.showWizard = !isPositiveBalance;
    }

    private setBanner() {
        this.parent.showTitleBanner = true;
        this.parent.title = this.cmsContentWithoutViolations.BannerTitle;
        this.parent.bannerContent = this.cmsContentWithoutViolations.BannerContent;

    }

    async goToNextState(targetState: StateDeclaration) {

        await this.state.go(targetState);
    }

}
