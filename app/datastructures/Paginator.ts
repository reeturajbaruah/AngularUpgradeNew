module HCTRA.Datastructure {
    'use strict';

    export interface IPaginator<T> {
        itemCount: number;
        pageCount: number;
        pageSize: number;
        getPage: (pageNum: number) => T[];
        setPageSize: (newPageSize: number) => void;
    }

    export class Paginator<T> implements IPaginator<T> {

        private readonly flatArr: T[];
        private paginatedArr: T[][];

        constructor(initArray: T[], private itemsPerPage: number) {

            this.flatArr = [...initArray]; // only use the copy

            this.paginatedArr = this.divideIntoPages(this.flatArr, itemsPerPage);
        }

        public get itemCount() {

            return this.flatArr.length;
        }

        public get pageCount() {

            return this.paginatedArr.length;
        }

        public get pageSize() {

            return this.itemsPerPage;
        }

        public getPage = (pageNum: number): T[] => {

            return this.paginatedArr[pageNum - 1];
        }

        public setPageSize = (newPageSize: number) => {

            this.itemsPerPage = newPageSize;
            this.paginatedArr = this.divideIntoPages(this.flatArr, newPageSize);
        }

        private divideIntoPages = (flatArr: T[], itemsPerPage: number): T[][] => {

            let flatArrCopy = [...flatArr]; // if not for this copy line, the method would be destructive to the input array
            let outArr: T[][] = [];

            do {

                outArr.push(flatArrCopy.splice(0, itemsPerPage));
            } while (flatArrCopy.length > 0)

            return outArr;
        }
    }
}