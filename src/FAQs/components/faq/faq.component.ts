import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IState } from 'common/ui';
import { IPagingEvent, IPagingState, PagingAction } from 'common/ui/pagination/models/pagination.interface';
import { PaginationStateService } from 'common/ui/pagination/services/pagination-state.service';
import { ICategories, ICat, ISearchResults, EventType, IResult, IFaqResults, IFaqCms } from 'FAQs/models';
import { FaqManagerService, FaqPaginationEventService, FaqStateService } from 'FAQs/services';

@Component({
    selector: 'faq',
    templateUrl: './faq.component.html',
    styleUrls: ['faq.component.less']
})
export class FaqComponent implements OnInit, OnDestroy {

    @Input() cmsContent: IFaqCms;
    categories: ICategories;
    searchResults: ISearchResults;
    topSearchResults: IResult[];
    faqResults: IFaqResults;
    itemsPerPageList = [5, 10, 25, 50];

    constructor(private manager: FaqManagerService,
        private stateService: FaqStateService,
        private paginationStateService: PaginationStateService,
        private faqPaginationEventService: FaqPaginationEventService) {

    }

    async ngOnInit() {

        this.faqPaginationEventService.subscribe();
        this.subscribeEvents();

        await this.init();

    }

    private async init() {

        const data = await this.manager.loadPage();
        this.categories = data.categories;

        this.topSearchResults = data.faqResults.topSearchResults;
        this.searchResults = data.faqResults.searchResults;

        this.stateService.dispatch(
            {
                type: EventType.PageLoadComplete,
                data: { categoryId: this.categories.defaultCatId }
            });

        this.paginationStateService.dispatchPagingInfo(data.pagination);

    }

    private subscribeEvents() {
        this.stateService.subscribe(async (state: IState) => {
            await this.refresh(state);
        });
    }

    private async refresh(state) {

        const data = await this.manager.execute(state);
        this.searchResults = data.seachResults;

        this.paginationStateService.dispatchPagingInfo(data.pagination);

    }

    ngOnDestroy() {
        this.stateService.unsubscribe();
        this.paginationStateService.unsubscribe();
    }

}

