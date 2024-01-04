import { Injectable } from '@angular/core';
import { IPagingState } from 'common/ui/pagination/models/pagination.interface';
import { ICat, ICategories, IFaqResults, IResult, ISearchResults } from 'FAQs/models';
import { FaqFacadeService } from '../faq-facade/faq-facade.service';
import { FaqStateService } from '../faq-state/faq-state.service';


@Injectable()
export class FaqManagerService {

    constructor(private service: FaqFacadeService,
        private stateService: FaqStateService) {

    }

    async loadPage():
        Promise<{
            categories: ICategories; faqResults: IFaqResults; pagination: IPagingState;
        }> {

        const res = await this.service.loadArchivePage(this.stateService.getState());
        return this.parseResponse(res);
    }

    async execute(state) {

        const res = await this.service.executeCmsPaging(state);

        return {
            seachResults: this.parseSearchResults(res),
            pagination: this.parsePagination(res)
        };
    }

    private parseResponse(res) {
        if (res) {
            const categories = this.parseCategories(res.categories);
            const topSearchResults = this.parseTopFaq(res.topSearchResults);
            const searchResults = this.parseSearchResults(res.hyperLinkedArticles);

            const faqResults = {
                topSearchResults,
                searchResults
            } as IFaqResults;

            categories.defaultCatId = res.hyperLinkedArticles.requestedItemId;
            const pagination = this.parsePagination(res.hyperLinkedArticles);

            return {
                categories,
                faqResults,
                pagination
            };
        }
    }

    private jsonParse(results: string) {
        return JSON.parse(results);
    }

    private parseCategories(cats: []) {

        const categories: ICat[] = cats.map((cat: any) => (
            {
                name: cat.displayName,
                id: cat.queryID

            }));

        return {
            categories
        } as ICategories;

    }

    private parseTopFaq(topSearchResults) {

        if (topSearchResults !== '') {
            const jsonResults = this.jsonParse(topSearchResults);
            const topSearchRsults: [] = jsonResults.Query.Results;

            return topSearchRsults.map((result: any) => (
                {
                    categoryName: result.Category,
                    shortDesc: result.ShortDescription,
                    title: result.Title,
                    /* eslint no-underscore-dangle: 0 */
                    lastModifiedDate: result.__Updated
                } as IResult
            ));

        }
    }

    private parseSearchResults(linkedArticles) {
        return {
            count: linkedArticles.numberOfArticles,
            results: this.mapResults(linkedArticles.articles)
        } as ISearchResults;


    }

    private mapResults(articles: any[]) {

        return articles.map(article => (
            {
                categoryName: article.category,
                shortDesc: article.shortDescription,
                title: article.title,
                /* eslint no-underscore-dangle: 0 */
                lastModifiedDate: article.__Updated
            } as IResult
        ));

    }

    private parsePagination(linkedArticles) {

        const state = this.stateService.getState();

        return {
            totalPages: linkedArticles.numberOfPages,
            totalResultCount: linkedArticles.numberOfArticles,
            currentpageItemsCount: linkedArticles.articles.length,
            currentPage: state.currentPage,
            itemsPerPage: state.pageSize
        } as IPagingState;

    }
}


