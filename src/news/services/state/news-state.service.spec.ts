import { TestBed } from '@angular/core/testing';
import { PagingAction } from 'common/ui/pagination/models/pagination.interface';
import { } from 'jasmine';
import { ICategory, IState, NewsAction, ViewType } from 'news/models/news.interface';
import { NewsStateService } from './news-state.service';


describe('News state Service', () => {

    let newsStateService: NewsStateService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                NewsStateService
            ]
        });

        newsStateService = TestBed.inject(NewsStateService);

    });

    it('should define news state service', () => {
        expect(newsStateService).toBeDefined();
    });

    it('returns the intital state object', () => {

        const state = newsStateService.getState();
        expect(state.currentPage).toEqual(0);
        expect(state.pageSize).toEqual(newsStateService['defaultPageSize']);

    });

    it('sets the category intital state', () => {

        const cat = { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory;

        newsStateService.setInitialState({
            action: NewsAction.Category,
            value: cat
        });

        const state = newsStateService.getState();
        expect(state.category).toEqual(cat);

    });

    it('sets the filter Archive in intital state', () => {

        newsStateService.setInitialState({
            action: NewsAction.ToggleView,
            value: ViewType.Archive
        });

        expect(newsStateService.getState().view).toEqual(ViewType.Archive);

    });

    it('sets the filter Latest in intital state', () => {

        newsStateService.setInitialState({
            action: NewsAction.ToggleView,
            value: ViewType.Latest
        });

        expect(newsStateService.getState().view).toEqual(ViewType.Latest);

    });

    it('update the state when category is changed', () => {

        const cat = { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz', queryID: 'pqr' } as ICategory;

        newsStateService.subscribe((state: IState) => {
            if (state !== null) {
                expect(state.category).toEqual(cat);
                expect(state.currentPage).toEqual(0);
            }
        });
        newsStateService.dispatchEvent(NewsAction.Category, cat);

        expect(newsStateService.getState().category).toEqual(cat);


    });

    it('update the state when filter view is changed from Latest to Archive', () => {

        newsStateService.setInitialState({
            action: NewsAction.ToggleView,
            value: ViewType.Latest
        });

        newsStateService.subscribe((state: IState) => {
            if (state !== null) {

                expect(state.view).toEqual(ViewType.Archive);
            }
        });

        newsStateService.dispatchEvent(NewsAction.ToggleView, ViewType.Archive);

    });

    it('update the state when filter view is changed from Archive to Latest', () => {

        newsStateService.setInitialState({
            action: NewsAction.ToggleView,
            value: ViewType.Archive
        });

        newsStateService.subscribe((state: IState) => {
            if (state !== null) {

                expect(state.view).toEqual(ViewType.Latest);
            }
        });

        newsStateService.dispatchEvent(NewsAction.ToggleView, ViewType.Latest);

    });

    it('update the state when pagination next button event is triggered', async () => {

        const cat = { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory;

        newsStateService.setInitialState({
            action: NewsAction.Category,
            value: cat
        });

        newsStateService.setInitialState({
            action: NewsAction.ToggleView,
            value: ViewType.Latest
        });

        const prevPage = newsStateService.getState().currentPage;

        newsStateService.subscribe((state: IState) => {
            if (state !== null) {
                expect(state.currentPage).toEqual(prevPage + 1);
            }
        });

        newsStateService.dispatchPaginationEvent(PagingAction.NextPaging);

    });

    it('update the state when pagination prev button event is triggered', () => {

        newsStateService['state'].currentPage = 1;
        const prevPage = newsStateService.getState().currentPage;

        newsStateService.subscribe((state: IState) => {
            if (state !== null) {

                expect(state.currentPage).toEqual(prevPage - 1);
            }
        });


        newsStateService.dispatchPaginationEvent(PagingAction.PrevPaging);


    });

    it('update the state when pagination Items Per Page button event is triggered', () => {

        const itemsPerPage = 10;
        const cat = { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory;

        newsStateService.setInitialState({
            action: NewsAction.Category,
            value: cat
        });

        newsStateService.setInitialState({
            action: NewsAction.ToggleView,
            value: ViewType.Latest
        });

        newsStateService.subscribe((state: IState) => {
            if (state !== null) {
                expect(state.currentPage).toEqual(0);
                expect(state.pageSize).toEqual(itemsPerPage);
                expect(state.category).toEqual(cat);
                expect(state.view).toEqual(ViewType.Latest);

            }
        });

        newsStateService.dispatchPaginationEvent(PagingAction.ItemsPerPage, itemsPerPage);


    });

    it('checks if the category change fetches news results count equal items per page selected', () => {

        const cat = { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory;

        newsStateService.setInitialState({
            action: NewsAction.Category,
            value: cat
        });

        newsStateService.setInitialState({
            action: NewsAction.ToggleView,
            value: ViewType.Archive
        });

        expect(newsStateService.getState().pageSize).toEqual(newsStateService['defaultPageSize']);

        const itemsPerPage = 10;
        newsStateService.dispatchPaginationEvent(PagingAction.ItemsPerPage, itemsPerPage);

        newsStateService.subscribe((state: IState) => {
            if (state !== null) {
                expect(state.pageSize).toEqual(itemsPerPage);
            }
        });
    });

    it('checks that toggling view from Archive to Latest or vice versa should reset itemsperpage count to default page size', () => {

        const cat = { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory;

        newsStateService.setInitialState({
            action: NewsAction.Category,
            value: cat
        });

        newsStateService.setInitialState({
            action: NewsAction.ToggleView,
            value: ViewType.Archive
        });

        expect(newsStateService.getState().pageSize).toEqual(newsStateService['defaultPageSize']);

        const itemsPerPage = 10;
        newsStateService.dispatchPaginationEvent(PagingAction.ItemsPerPage, itemsPerPage);

        expect(newsStateService.getState().pageSize).toEqual(itemsPerPage);

        newsStateService.dispatchEvent(NewsAction.ToggleView);
        expect(newsStateService.getState().pageSize).toEqual(newsStateService['defaultPageSize']);

    });
});

