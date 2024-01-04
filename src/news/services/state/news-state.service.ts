import { Injectable } from '@angular/core';
import { PagingAction } from 'common/ui/pagination/models/pagination.interface';
import { IState, NewsAction, ViewType } from 'news/models/news.interface';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable()
export class NewsStateService {

    private defaultPageSize = 5;
    private subscriptions: Subscription[] = [];
    private state$: BehaviorSubject<IState>;

    private state: IState;

    constructor() {

        this.state = {
            currentPage: 0,
            pageSize: this.defaultPageSize
        } as IState;

        this.state$ = new BehaviorSubject(null);

    }

    subscribe(callback) {

        const subscription = this.state$.subscribe(callback);
        this.subscriptions.push(subscription);

    }

    getState() {
        return { ...this.state };
    }

    setInitialState(obj: { action: NewsAction; value: any }) {

        switch (obj.action) {
            case NewsAction.ToggleView:
                this.state.view = obj.value;
                break;

            case NewsAction.Category:
                this.state.category = obj.value;
                break;

            default:
                break;

        }
    }

    clearState() {
        this.state = {
            currentPage: 0,
            pageSize: this.defaultPageSize
        } as IState;

        this.state$ = new BehaviorSubject(null);
    }

    dispatchEvent(action: NewsAction, val?: any) {


        switch (action) {
            case NewsAction.Category:
                this.state.category = val;
                this.state.currentPage = 0;
                break;

            case NewsAction.ToggleView:
                this.state.view = this.state.view === ViewType.Archive ? ViewType.Latest : ViewType.Archive;
                this.state.currentPage = 0;
                this.state.pageSize = this.defaultPageSize;
                break;

            default:
                break;
        }

        const state = JSON.parse(JSON.stringify(this.state));
        this.state$.next(state);

    }

    dispatchPaginationEvent(action: PagingAction, val?: any) {

        switch (action) {

            case PagingAction.NextPaging:
                this.state.currentPage++;
                break;

            case PagingAction.PrevPaging:
                this.state.currentPage--;
                break;

            case PagingAction.ItemsPerPage:
                this.state.pageSize = val;
                this.state.currentPage = 0;
                break;
            case PagingAction.SetPage:
                this.state.currentPage = val;
                break;

            default:
                break;
        }

        const state = JSON.parse(JSON.stringify(this.state));
        this.state$.next(state);

    }

    unsubscribe() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

}
