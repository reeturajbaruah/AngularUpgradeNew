import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { IEvent, IState, EventType } from '../../models';

@Injectable()
export class FaqStateService {

    private defaultCurrentPage = 0;
    private defaultPageSize = 50;

    private state = {
        currentPage: this.defaultCurrentPage,
        isClosures: false,
        isNews: false,
        itemId: '',
        pageSuffix: '',
        pageSize: this.defaultPageSize
    } as IState;

    private event$ = new Subject<IState>();
    private subs: Subscription[] = [];

    constructor() {

    }

    getState() {
        return { ...this.state };
    }


    dispatch(event: IEvent) {

        switch (event.type) {

            case EventType.PageLoadComplete:
                this.state.itemId = event.data ? event.data.categoryId : '';
                break;

            case EventType.Category:

                this.state.currentPage = this.defaultCurrentPage;
                this.state.pageSize = this.defaultPageSize;
                this.state.itemId = event.data.categoryId;

                this.emit();

                break;

            case EventType.NextPage:

                this.state.currentPage = this.state.currentPage + 1;
                this.emit();

                break;

            case EventType.PrevPage:

                this.state.currentPage = this.state.currentPage - 1;
                this.emit();

                break;

            case EventType.ItemsPerPage:
                this.state.currentPage = this.defaultCurrentPage;
                this.state.pageSize = event.data.itemsPerPage;
                this.emit();

                break;

            case EventType.GoToSpecificPage:
                this.state.currentPage = event.data.currentPage;
                this.emit();

                break;
        }

    }

    private emit() {

        const newState = { ...this.state };
        this.event$.next(newState);
    }


    subscribe(callback) {
        this.subs.push(this.event$.subscribe(res => {
            callback(res);
        }));
    }

    unsubscribe() {
        this.subs.forEach(sub => sub.unsubscribe);
    }
}

