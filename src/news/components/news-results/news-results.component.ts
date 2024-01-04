import { Component, Input } from '@angular/core';
import { LinkLookupService } from 'cms/services/linkLookup.service';
import { INewsResults } from 'news/models/news.interface';
import { NewsCmsHelper } from 'news/services/helpers/news-cms-helper';

@Component({
    selector: 'news-results',
    templateUrl: './news-results.component.html',
    styleUrls: ['./news-results.component.less'],
    providers: [LinkLookupService]
})
export class NewsResultsComponent {

    constructor(private cmsHelper: NewsCmsHelper
    ) {

    }

    @Input() results: INewsResults;

    getVal(key: string) {
        return this.cmsHelper.getVal(key);
    }
}

