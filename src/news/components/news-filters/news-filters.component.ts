import { Component, Input, OnInit } from '@angular/core';
import { IData, IList } from 'common/ui/dropdown/models/dropdown.interface';
import { ICategory, NewsAction, ViewType } from 'news/models/news.interface';
import { NewsCmsHelper } from 'news/services/helpers/news-cms-helper';
import { NewsStateService } from 'news/services/state/news-state.service';

@Component({
    selector: 'news-filters',
    templateUrl: './news-filters.component.html',
    styleUrls: ['./news-filters.component.less']
})
export class NewsFiltersComponent implements OnInit {

    @Input() categories: ICategory[] = [];

    list = {
        data: []
    } as IList;

    selectedView;

    viewType = ViewType;
    constructor(private newsStateService: NewsStateService,
        private cmsHelper: NewsCmsHelper
    ) {

    }

    ngOnInit() {

        this.getCurrentView();

        this.categories.forEach(cat => {
            const data = {
                id: cat.queryID,
                displayName: cat.displayName

            } as IData;

            this.list.data.push(data);
            this.list.defaultDisplayName = this.newsStateService.getState().category.displayName;

        });
    }

    getCurrentView() {
        const currentState = this.newsStateService.getState();
        if (currentState) {
            this.selectedView = currentState.view;
        }
    }

    handleCategoryEvent(event: IData) {

        const selectedCat = this.categories.filter(cat => cat.displayName === event.displayName && cat.queryID === event.id);

        if (selectedCat.length > 0) {
            this.newsStateService.dispatchEvent(NewsAction.Category, selectedCat[0]);

        }


    }

    handleToggleView(clickedView: ViewType) {

        const currentView = this.newsStateService.getState().view;
        if (currentView !== clickedView) {
            this.newsStateService.dispatchEvent(NewsAction.ToggleView);

        }
    }

    getVal(key: string) {
        return this.cmsHelper.getVal(key);
    }

}
