
import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { FaqStateService } from './faq-state.service';
import { EventType, IState } from 'FAQs/models';

describe('Faq state Service', () => {

    let service: FaqStateService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                FaqStateService,
            ]
        });

        service = TestBed.inject(FaqStateService);

    });

    it('defines the service', () => {
        expect(service).toBeDefined();
    });

    it('returns the current state of the service', async () => {
        const state = service.getState();
        expect(state.currentPage).toEqual(service['defaultCurrentPage']);
        expect(state.pageSize).toEqual(service['defaultPageSize']);
    });

    it('dispatches the Page Load complete event', async () => {

        const categoryId = '123123';

        service.subscribe((state: IState) => {
            expect(state.itemId).toEqual(categoryId);
        });

        service.dispatch({
            type: EventType.PageLoadComplete,
            data: { categoryId }
        });

    });

    it('dispatches the Category Change event', async () => {

        const newCatId = '12344';

        service.subscribe((state: IState) => {
            expect(state.currentPage).toEqual(service['defaultCurrentPage']);
            expect(state.pageSize).toEqual(service['defaultPageSize']);
            expect(state.itemId).toEqual(newCatId);
        });

        service.dispatch({
            type: EventType.Category,
            data: { categoryId: newCatId }
        });

    });

    it('dispatches the Pagination-next page event', async () => {

        const oldCurrentPage = service.getState().currentPage;

        service.subscribe((state: IState) => {
            expect(state.currentPage).toEqual(oldCurrentPage + 1);
        });

        service.dispatch({
            type: EventType.NextPage
        });
    });

    it('dispatches the Pagination-prev page event', async () => {

        const prevCurrentPage = service.getState().currentPage;

        service.subscribe((state: IState) => {
            expect(state.currentPage).toEqual(prevCurrentPage - 1);
        });

        service.dispatch({
            type: EventType.PrevPage
        });

    });

    it('dispatches the Pagination-Items per page event', async () => {

        const itemsPerPage = 10;

        service.subscribe((state: IState) => {
            expect(state.currentPage).toEqual(service['defaultCurrentPage']);
            expect(state.pageSize).toEqual(itemsPerPage);
        });

        service.dispatch({
            type: EventType.ItemsPerPage,
            data: { itemsPerPage }
        });

    });

    it('dispatches the Pagination-Go To Specific page(First page) event', async () => {

        const firstPage = 0;

        service.subscribe((state: IState) => {
            expect(state.currentPage).toEqual(firstPage);
        });

        service.dispatch({
            type: EventType.GoToSpecificPage,
            data: { currentPage: firstPage }

        });

    });

    it('dispatches the Pagination-Go To Specific page(Last page) event', async () => {

        const lastPage = 4;

        service.subscribe((state: IState) => {
            expect(state.currentPage).toEqual(lastPage);
        });

        service.dispatch({
            type: EventType.GoToSpecificPage,
            data: { currentPage: lastPage }

        });

    });

    it('unsubscribes all the subscriptions', async () => {
        service.unsubscribe();
        expect(service['subs'].length).toEqual(0);
    });

});
