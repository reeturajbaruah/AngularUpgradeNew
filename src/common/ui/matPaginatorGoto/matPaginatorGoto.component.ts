/* eslint-disable no-underscore-dangle */
import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    HostBinding
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
    selector: 'mat-paginator-goto',
    templateUrl: './matPaginatorGoto.html',
    styleUrls: ['./matPaginatorGoto.less']
})
export class MatPaginatorGotoComponent {
    @HostBinding('class') private readonly class = 'mat-paginator-goto';

    private _pageSize: number;
    public get pageSize() {
        return this._pageSize;
    }
    @Input() public set pageSize(pageSize: number) {
        this._pageSize = pageSize;
        this.updateGoto();
    }

    private _pageIndex: number;
    public get pageIndex() {
        return this._pageIndex;
    }
    @Input() public set pageIndex(pageIndex: number) {
        this._pageIndex = pageIndex;
        this.updateGoto();
    }

    public _length: number;
    public get length() {
        return this._length;
    }
    @Input() public set length(length: number) {
        this._length = length;
        this.updateGoto();
    }

    public goto: number;
    public pageNumbers: number[] = [];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input() disabled: boolean;
    @Input() hidePageSize: boolean;
    @Input() pageSizeOptions: number[];
    //@Input() showFirstLastButtons: boolean;
    @Output() page = new EventEmitter<PageEvent>();


    constructor() { }


    public paginationChange(event: PageEvent) {
        this._length = event.length;
        this._pageIndex = event.pageIndex;
        this._pageSize = event.pageSize;
        this.updateGoto();
        this.page.next(event);
    }

    public gotoChange() {
        this.paginator.pageIndex = this.goto - 1;
        this.paginationChange({
            length: this.paginator.length,
            pageIndex: this.paginator.pageIndex,
            pageSize: this.paginator.pageSize
        });
    }


    private updateGoto() {
        this.goto = (this.pageIndex || 0) + 1;
        this.pageNumbers = [];

        const isDivisibleByPageSizeLoopCondition = (i: number) => (this.length % this.pageSize === 0)
                ? i < this.length / this.pageSize
                : i <= this.length / this.pageSize;
        for (let i = 0; isDivisibleByPageSizeLoopCondition(i); i++) {
            this.pageNumbers.push(i + 1);
        }
    }
}
