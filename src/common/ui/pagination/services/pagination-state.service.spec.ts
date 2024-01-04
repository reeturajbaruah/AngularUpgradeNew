import { TestBed } from '@angular/core/testing';
import { IPagingEvent, IPagingState, PagingAction } from '../models/pagination.interface';
import { PaginationStateService } from './pagination-state.service';

describe('Pagination State Service', () => {

    let paginationStateServiceSpy: PaginationStateService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                PaginationStateService
            ]
        });

        paginationStateServiceSpy = TestBed.inject(PaginationStateService);

    });

    it('defines pagination state service', () => {
        expect(paginationStateServiceSpy).toBeDefined();
    });

    it('dispatch paging state info', () => {
        const currentState = {
            currentPage: 0,
            currentpageItemsCount: 5,
            itemsPerPage: 5,
            totalPages: 10,
            totalResultCount: 50
        } as IPagingState;

        paginationStateServiceSpy.subscribe(state => {
            if (state !== null) {
                expect(state).toEqual(currentState);
                expect(paginationStateServiceSpy.subscriptions.length).toEqual(1);
            }
        });

        paginationStateServiceSpy.dispatchPagingInfo(currentState);

    });

    it('dispatch paging next button event', () => {

        paginationStateServiceSpy.subcribeEvent((obj: IPagingEvent) => {
            expect(obj.action).toEqual(PagingAction.NextPaging);
        });

        paginationStateServiceSpy.dispatchEvent(PagingAction.NextPaging);
    });

    it('dispatch paging prev button event', () => {

        paginationStateServiceSpy.subcribeEvent((obj: IPagingEvent) => {
            expect(obj.action).toEqual(PagingAction.PrevPaging);
        });

        paginationStateServiceSpy.dispatchEvent(PagingAction.PrevPaging);

    });

    it('dispatch paging items per page dropdown event', () => {

        paginationStateServiceSpy.subcribeEvent((obj: IPagingEvent) => {
            expect(obj.action).toEqual(PagingAction.ItemsPerPage);
            expect(obj.val).toEqual('10');

        });

        paginationStateServiceSpy.dispatchEvent(PagingAction.ItemsPerPage, '10');

    });
});
