import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { IPagingEvent, IPagingState } from 'common/ui/pagination/models/pagination.interface';
import { PaginationStateService } from 'common/ui/pagination/services/pagination-state.service';
import { ICategory, INewsCms, INewsQueryParams, INewsResults, IQueryNews, IState, NewsAction, ViewType } from 'news/models/news.interface';
import { NewsStateNames } from 'news/news.constants';
import { NewsCmsHelper } from 'news/services/helpers/news-cms-helper';
import { NewsFacadeApiService } from 'news/services/news-facade-api/news-facade-api.service';
import { NewsStateService } from 'news/services/state/news-state.service';

@Component({
    selector: 'hctra-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit, OnDestroy {

    categories: ICategory[];
    totalPages: number;
    viewType = ViewType;
    newsResults: INewsResults;
    itemsPerPageList = [5, 10, 25, 50];

    @Input() newsCms: INewsCms;

    constructor(private facadeApi: NewsFacadeApiService,
        private newsStateService: NewsStateService,
        private paginationStateService: PaginationStateService,
        private uiRouterGlobals: UIRouterGlobals,
        private state: StateService,
        private cmsHelper: NewsCmsHelper

    ) {
    }

    async ngOnInit() {

        this.cmsHelper.initialize(this.newsCms);

        this.paginationStateService.subcribeEvent((event: IPagingEvent) => {
            this.newsStateService.dispatchPaginationEvent(event.action, event.val);
        });

        this.newsStateService.subscribe(async (state: IState) => {
            if (state) {
                await this.refreshPage(state);
            }
        });

        await this.loadPage();

    }

    private async loadPage() {

        const routerParams = this.uiRouterGlobals.params;

        let newsQuery;

        if (routerParams.category || routerParams.filter) {

            const params = {
                category: routerParams.category,
                filter: routerParams.filter
            } as INewsQueryParams;

            newsQuery = await this.facadeApi.getPageInfo(params);

        } else {
            newsQuery = await this.facadeApi.getPageInfo();
        }

        this.initPage(newsQuery);
    }

    private initPage(newsQuery: IQueryNews) {

        this.categories = newsQuery.categories;
        this.newsResults = newsQuery.results;

        const pagingState: IPagingState = {
            totalPages: newsQuery.totalPages,
            totalResultCount: newsQuery.results.count,
            currentpageItemsCount: newsQuery.results.items.length,
            currentPage: 0,
            itemsPerPage: this.newsStateService.getState().pageSize
        };

        this.paginationStateService.dispatchPagingInfo(pagingState);


    }

    async refreshPage(state: IState) {
        const results = await this.facadeApi.refreshResults(state);
        this.newsResults = results.newsResults;

        if (results.noOfPages) {

            const pagingState: IPagingState = {
                totalPages: results.noOfPages,
                totalResultCount: results.newsResults.count,
                currentpageItemsCount: results.newsResults.items.length,
                currentPage: state.currentPage,
                itemsPerPage: state.pageSize
            };
            this.paginationStateService.dispatchPagingInfo(pagingState);

        } else {
            this.paginationStateService.dispatchPagingInfo(null);
        }

        this.updateUrlWithoutRefresh(state);

    }

    private updateUrlWithoutRefresh(state: IState) {
        if (this.uiRouterGlobals.params.category || this.uiRouterGlobals.params.filter) {
            this.state.go(NewsStateNames.News,
                { filter: state.view.toString(), category: state.category.displayName },
                { notify: false, reload: false }
            );
        }
    }

    getView() {
        return this.newsStateService.getState().view;
    }

    ngOnDestroy() {
        this.newsStateService.unsubscribe();
        this.paginationStateService.unsubscribe();
        this.cmsHelper.reset();
        this.newsStateService.clearState();
    }

}
