import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { FaqPaginationEventService } from './faq-pagination-event.service';
import { FaqStateService } from '../faq-state/faq-state.service';
import { PaginationStateService } from 'common/ui/pagination/services/pagination-state.service';
import { IPagingEvent, PagingAction } from 'common/ui/pagination/models/pagination.interface';

describe('Faq pagination event Service', () => {

    let service: FaqPaginationEventService;
    let faqStateServiceSpy: jasmine.SpyObj<FaqStateService>;
    let paginationStateService: PaginationStateService;

    beforeEach(() => {
        faqStateServiceSpy = jasmine.createSpyObj('state', ['dispatch', 'subscribe', 'getState']);

        TestBed.configureTestingModule({
            providers: [
                FaqPaginationEventService,
                { provide: FaqStateService, useFactory: () => faqStateServiceSpy },
                PaginationStateService
            ]
        });

        service = TestBed.inject(FaqPaginationEventService);
        paginationStateService = TestBed.inject(PaginationStateService);

    });

    it('defines the service', () => {
        expect(service).toBeDefined();
    });

    it('subscribes to the pagination - Next event and listens to faq state service', async () => {

        paginationStateService.subcribeEvent((e: IPagingEvent) => {
            expect(e.action).toEqual(PagingAction.NextPaging);
        });
        service.subscribe();

        paginationStateService.dispatchEvent(PagingAction.NextPaging);


    });

    it('subscribes to the pagination - Prev event and listens to faq state service', async () => {

        paginationStateService.subcribeEvent((e: IPagingEvent) => {
            expect(e.action).toEqual(PagingAction.PrevPaging);
        });
        service.subscribe();

        paginationStateService.dispatchEvent(PagingAction.PrevPaging);


    });


    it('subscribes to the pagination - Items Per Page event and listens to faq state service', async () => {

        paginationStateService.subcribeEvent((e: IPagingEvent) => {
            expect(e.action).toEqual(PagingAction.ItemsPerPage);
        });
        service.subscribe();

        paginationStateService.dispatchEvent(PagingAction.ItemsPerPage);
    });

    it('subscribes to the pagination - Set Page event and listens to faq state service', async () => {

        paginationStateService.subcribeEvent((e: IPagingEvent) => {
            expect(e.action).toEqual(PagingAction.SetPage);
        });
        service.subscribe();

        paginationStateService.dispatchEvent(PagingAction.SetPage);
    });
});
