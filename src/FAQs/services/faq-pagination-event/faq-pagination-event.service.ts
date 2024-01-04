import { Injectable } from '@angular/core';
import { IPagingEvent, PagingAction } from 'common/ui/pagination/models/pagination.interface';
import { PaginationStateService } from 'common/ui/pagination/services/pagination-state.service';
import { EventType } from 'FAQs/models';
import { FaqStateService } from '../faq-state/faq-state.service';


@Injectable()
export class FaqPaginationEventService {

    constructor(private paginationStateService: PaginationStateService,
        private state: FaqStateService) {
    }

    subscribe() {
        this.paginationStateService.subcribeEvent((event: IPagingEvent) => {
            switch (event.action) {

                case PagingAction.ItemsPerPage:

                    this.state.dispatch({
                        type: EventType.ItemsPerPage,
                        data: { itemsPerPage: event.val }
                    });

                    break;

                case PagingAction.NextPaging:

                    this.state.dispatch({
                        type: EventType.NextPage,
                    });

                    break;

                case PagingAction.PrevPaging:

                    this.state.dispatch({
                        type: EventType.PrevPage,
                    });

                    break;

                case PagingAction.SetPage:

                    this.state.dispatch({
                        type: EventType.GoToSpecificPage,
                        data: { currentPage: event.val }
                    });
                    break;
            }
        });
    }
}

