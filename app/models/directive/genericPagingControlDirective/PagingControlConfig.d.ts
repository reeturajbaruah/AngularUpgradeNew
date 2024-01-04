declare module HCTRA.Model {

    export interface PagingControlConfig {

        onBackAll?: (visiblePageNumber: number) => void;
        onBack?: (visiblePageNumber: number) => void;
        onForward?: (visiblePageNumber: number) => void;
        onForwardAll?: (visiblePageNumber: number) => void;
        onPageSizeChange?: (visiblePageNumber: number, pageSize: number) => void;
        onPageNumberEntered?: (visiblePageNumber: number) => void;

        totalItems?: number;
        initPageSize?: number;
    }
}