import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CmsUtilService } from '../../cms/services';
import { SiteCoreItem, SiteCoreMediaItem } from 'cms/cms.module';
import { WizardComponent } from '../../common/ui';
import { simpleFadeAnimation } from '../../common/ui/animations/animations';
import { StorefrontService } from '../services/storefront.service';

export interface Option {
    unselectedIcon: any;
    selectedIcon: any;
    text: string;
    color: string;
    value: number;
}

@Component({
    selector: 'storefront-survey-component',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.less'],
    animations: [simpleFadeAnimation]
})
export class SurveyComponent implements OnInit {

    @Input() public cmsContent: SiteCoreItem;
    public options: Option[];
    public selectedValue: number;
    public maxCharacters: number;
    public submitted = false;
    public show = false;
    public comments = '';

    constructor(
        private cmsUtilService: CmsUtilService,
        private storefrontService: StorefrontService
    ) {
    }

    public async proceed(wizardUi: WizardComponent) {
        if (wizardUi) {
            this.show = false;
            await this.storefrontService.delay(500);
            wizardUi.gotoNextState();
        }
    }

    public onValueChange(event) {
        this.comments = (event.target as any).value;
    }

    public async submit() {
        if (![-1, 0, 1].includes(this.selectedValue)) {
            return;
        }

        await this.storefrontService.postSurvey(this.comments === '' ? null : this.comments, this.selectedValue);
        this.submitted = true;
    }

    private getProperties(cms: string): any {
        return this.cmsUtilService.parseAllImageAttributes(cms);
    }

    ngOnInit() {

        this.options = [
            {
                unselectedIcon: this.getProperties(this.cmsContent.goodRatingIconUnselected),
                selectedIcon: this.getProperties(this.cmsContent.goodRatingIconSelected),
                text: this.cmsContent.goodRatingText,
                color: 'green',
                value: 1

            },
            {
                unselectedIcon: this.getProperties(this.cmsContent.neutralRatingIconUnselected),
                selectedIcon: this.getProperties(this.cmsContent.neutralRatingIconSelected),
                text: this.cmsContent.neutralRatingText,
                color: 'orange',
                value: 0
            },
            {
                unselectedIcon: this.getProperties(this.cmsContent.badRatingIconUnselected),
                selectedIcon: this.getProperties(this.cmsContent.badRatingIconSelected),
                text: this.cmsContent.badRatingText,
                color: 'red',
                value: -1
            }
        ];

        this.maxCharacters = this.cmsContent.maxCommentCharacters;

        this.show = true;
    }

}
