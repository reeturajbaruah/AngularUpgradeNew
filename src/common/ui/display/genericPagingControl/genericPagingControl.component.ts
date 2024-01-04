import {
    Component, Input, Output, EventEmitter, OnInit
    //ViewChild
} from '@angular/core';
import { } from 'common/models';

@Component({
    selector: 'new-generic-paging-control',
    templateUrl: './genericPagingControl.html'
})
export class GenericPagingControlComponent implements OnInit {

    public visiblePageNumber: number;
    @Input() itemsPerPage: number;
    @Input() itemCountLabel: number;
    @Input() fullList: any[];
    @Output() pageUpdate: EventEmitter<any[]> = new EventEmitter<any[]>(true);

    public numberOfPages: number;
    public totalItems: number;

    public lowerItemIndex: number;
    public upperItemIndex: number;

    ngOnInit() {
        this.totalItems = this.fullList.length;
        this.numberOfPages = this.calculateNumberOfPages(this.totalItems, this.itemsPerPage);

        this.setVisiblePageNumber(1);
    }

    private getCurrentPage = (originalList: any[], lowerIndex: number, upperIndex: number) => originalList.filter((_, index) => (lowerIndex <= (index + 1)) && ((index + 1) <= upperIndex ));

    public onPageNumberEntered = (event: any) => { // when visiblePageNumber changes via input field

        if (!event) {
            return;     //Stay on current page
        }
        else if (event < 1) {
            this.setVisiblePageNumber(1);                       // out of bound: below
        }
        else if (event > this.numberOfPages) {
            this.setVisiblePageNumber(this.numberOfPages - 1);  // out of bounds: above
        }
        else {
            this.setVisiblePageNumber(event);
        }
    };

    public onBackAll = () => {

        this.setVisiblePageNumber(1);
    };

    public onBack = () => {

        if (this.visiblePageNumber > 1) {
            this.setVisiblePageNumber(--this.visiblePageNumber);
        }
    };

    public onForward = () => {

        if (this.visiblePageNumber < this.numberOfPages) {
            this.setVisiblePageNumber(++this.visiblePageNumber);
        }
    };

    public onForwardAll = () => {

        this.visiblePageNumber = this.numberOfPages;
        this.setVisiblePageNumber(this.visiblePageNumber);
    };

    public setVisiblePageNumber(pageNum) {

        this.visiblePageNumber = pageNum;
        this.lowerItemIndex = (this.visiblePageNumber - 1) * this.itemsPerPage + 1;
        this.upperItemIndex = Math.min(this.visiblePageNumber * this.itemsPerPage, this.totalItems);

        const currentPage = this.getCurrentPage(this.fullList, this.lowerItemIndex, this.upperItemIndex);
        this.pageUpdate.emit(currentPage);
    }

    public calculateNumberOfPages(totalItems: number, pageSize: number) {

        return Math.ceil(totalItems / pageSize);
    }
}
