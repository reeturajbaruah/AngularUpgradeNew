import { Component, Input } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';

interface CmsContent extends SiteCoreItem {
    SectionTitle: string;
}

@Component({
    selector: 'translation-disclaimer-component',
    templateUrl: './translationDisclaimer.html',
    styleUrls: ['./translationDisclaimer.less']
})

export class TranslationDisclaimerComponent  {
    constructor() { }
    @Input() cmsData: CmsContent;
}
