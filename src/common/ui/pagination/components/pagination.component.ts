import { Component, Input, OnInit } from '@angular/core';
import { IData, IList } from 'common/ui/dropdown/models/dropdown.interface';
import { IPagingState, PagingAction } from '../models/pagination.interface';
import { PaginationStateService } from '../services/pagination-state.service';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit {

    pagingState: IPagingState;

    disableLeftBtn = false;
    disableRightBtn = false;
    pageRange: string;
    recordsRange: string;
    @Input() itemsPerPageList = [];

    list = {
        data: []
    } as IList;

    constructor(private state: PaginationStateService) {

    }

    ngOnInit() {

        this.itemsPerPageList.forEach(item => {
            this.list.data.push(
                {
                    id: item,
                    displayName: item
                }
            );
        });

        this.state.subscribe(this.subsPagingState.bind(this));
    }

    private subsPagingState(pagingState: IPagingState): void {
        this.pagingState = pagingState;

        if (this.pagingState) {
            this.setPageRange();
            this.setRecordsRange();

            setTimeout(() => {
                this.disableNavigation();
            }, 100);
        }
    }

    setPageRange() {
        this.pageRange = `Page ${this.pagingState.currentPage + 1} of ${this.pagingState.totalPages}`;
    }

    setRecordsRange() {

        const lowerLimit = (this.pagingState.currentPage * this.pagingState.itemsPerPage) + 1;

        let upperLimit;
        if (this.pagingState.currentpageItemsCount < this.pagingState.itemsPerPage) {
            upperLimit = (lowerLimit + this.pagingState.currentpageItemsCount) - 1;
        } else {
            upperLimit = (lowerLimit + this.pagingState.itemsPerPage) - 1;
        }

        const limit = `${lowerLimit} - ${upperLimit}`;
        this.recordsRange = `${limit} of ${this.pagingState.totalResultCount} Records`;

    }

    disableNavigation() {
        this.disablePrevBtn();
        this.disableNextBtn();
    }

    private disablePrevBtn() {
        if (this.pagingState.currentPage === 0) {
            this.disableLeftBtn = true;
        } else {
            this.disableLeftBtn = false;

        }
    }

    private disableNextBtn() {
        if (this.pagingState.currentPage === this.pagingState.totalPages - 1) {
            this.disableRightBtn = true;
        } else {
            this.disableRightBtn = false;
        }
    }

    handleItemsPerPageEvent(event: IData) {
        this.state.dispatchEvent(PagingAction.ItemsPerPage, event.displayName);

    }

    handleNextPagingEvent() {
        this.state.dispatchEvent(PagingAction.NextPaging);
    }

    handlePrevPagingEvent() {
        this.state.dispatchEvent(PagingAction.PrevPaging);
    }

    goToFirstPage(): void {
        this.state.dispatchEvent(PagingAction.SetPage, 0);
    }

    goToLastPage(): void {
        const lastPage = this.pagingState.totalPages - 1;

        this.state.dispatchEvent(PagingAction.SetPage, lastPage);
    }

}
