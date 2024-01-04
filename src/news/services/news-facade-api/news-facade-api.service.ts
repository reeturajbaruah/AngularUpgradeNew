import { Injectable } from '@angular/core';
import { FieldsEnum, ICategory, INewsPagingInfo, INewsQueryParams, INewsResults, IQueryNews, IState, NewsAction, ViewType } from 'news/models/news.interface';
import { NewsCmsIds } from 'news/news.constants';
import { NewsArchiveResHelper } from '../helpers/news-archive-response.helper';
import { NewsLatestResponseHelper } from '../helpers/news-latest-response.helper';
import { NewApiService } from '../news-api/news-api.service';
import { NewsStateService } from '../state/news-state.service';


@Injectable()
export class NewsFacadeApiService {

    constructor(private api: NewApiService,
        private archiveResHelper: NewsArchiveResHelper,
        private newsLatestResHelper: NewsLatestResponseHelper,
        private stateService: NewsStateService) {

    }

    private async getCategories(): Promise<ICategory[]> {

        const req = {
            fields: `${FieldsEnum.Title.toString()},${FieldsEnum.QueryId},${FieldsEnum.DisplayName},${FieldsEnum.ItemPath}, ${FieldsEnum.ItemName}`,
            itemId: NewsCmsIds.categoriesCmsId
        };
        const res = await this.api.getCategories(req);

        const categories: ICategory[] = [];
        if (res.categories && res.categories.length > 0) {

            res.categories.forEach(cat => {
                const newCat = {
                    displayName: cat.displayName,
                    itemID: cat.itemID,
                    queryID: cat.queryID,
                    isDefault: false

                } as ICategory;

                categories.push(newCat);

            });


            if (res.defaultCategory) {
                const defaultCat = categories.filter(cat => cat.queryID === res.defaultCategory.queryID);
                if (defaultCat.length > 0) {
                    defaultCat[0].isDefault = true;
                }
            }
        }
        return categories;
    }

    private setDefaultSelectedCategory(categories: ICategory[], params?: INewsQueryParams) {

        let defaultCat: ICategory;
        const initDefaultCat = categories.find(c => c.isDefault === true);

        if (params && params.category) {
            const selectedCat = categories.find(c => c.displayName.toUpperCase() === params.category.toUpperCase());
            if (selectedCat) {
                defaultCat = selectedCat;
            } else {
                defaultCat = initDefaultCat;
            }
        } else {
            defaultCat = initDefaultCat;
        }

        this.stateService.setInitialState({
            action: NewsAction.Category,
            value: defaultCat
        });

    }

    private setSelectedView(params?: INewsQueryParams) {

        let selectedView: ViewType;

        if (params && params.filter) {
            switch (params.filter.toString().toUpperCase()) {

                case 'LATEST':
                    selectedView = ViewType.Latest;
                    break;

                case 'ARCHIVE':
                    selectedView = ViewType.Archive;
                    break;

                default:
                    selectedView = ViewType.Latest;
                    break;
            }

        } else {
            selectedView = ViewType.Latest;
        }

        this.stateService.setInitialState({
            action: NewsAction.ToggleView,
            value: selectedView
        });

    }

    async getPageInfo(params?: INewsQueryParams) {

        const cat = await this.getCategories();

        this.setDefaultSelectedCategory(cat, params);

        this.setSelectedView(params);

        const state = this.stateService.getState();
        let newsResults: INewsResults;

        switch (state.view) {

            case ViewType.Latest:

                newsResults = await this.getLatestNews(state);

                return {
                    categories: cat,
                    results: newsResults
                } as IQueryNews;

            case ViewType.Archive:

                const results = await this.getArchiveNews(state);
                newsResults = results.newsResults;

                return {
                    categories: cat,
                    results: newsResults,
                    totalPages: results.noOfPages
                } as IQueryNews;


            default:
                break;
        }

    }

    private async getArchiveNews(state: IState) {
        const req = {
            currentPage: state.currentPage,
            isClosures: false,
            isNews: true,
            itemId: state.category.queryID,
            pageSize: state.pageSize,
            pagingSuffix: ''
        } as INewsPagingInfo;

        const res = await this.api.getArchiveNewsByCategoryId(req);
        const newsResults = this.archiveResHelper.parseResponse(res);
        newsResults.category = state.category;
        const noOfPages: number = res.numberOfPages;

        return { newsResults, noOfPages };
    }


    private async getLatestNews(state: IState) {

        const req = {
            fields: `${FieldsEnum.ItemID.toString()},${FieldsEnum.Query}`,
            itemId: state.category.queryID
        };

        const res = await this.api.getLatestNews(req);
        const newsResults = this.newsLatestResHelper.parseResponse(res);

        newsResults.category = state.category;
        return newsResults;

    }

    async refreshResults(state: IState) {

        switch (state.view) {

            case ViewType.Latest:

                const newsResults = await this.getLatestNews(state);
                return { newsResults, noOfPages: null };

            case ViewType.Archive:

                const results = await this.getArchiveNews(state);
                return results;

            default:
                break;
        }
    }

}

