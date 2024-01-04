import { Component, Input } from '@angular/core';
import { LinkLookupService } from 'cms/services';
import { INewsItem } from 'news/models/news.interface';
import { NewsCmsHelper } from 'news/services/helpers/news-cms-helper';

@Component({
    selector: 'news-item',
    styleUrls: ['/news-item.component.less'],
    templateUrl: '/news-item.component.html',
})
export class NewsItemComponent {

    @Input() item: INewsItem;
    @Input() categoryName: string;

    constructor(private linkLookupService: LinkLookupService,
        private cmsHelper: NewsCmsHelper) { }

    readMore(itemPath) {
        const link = this.linkLookupService.articleLookup(itemPath);
        window.open(link, '_blank');
    }

    getVal(key: string) {
        return this.cmsHelper.getVal(key);
    }
}
