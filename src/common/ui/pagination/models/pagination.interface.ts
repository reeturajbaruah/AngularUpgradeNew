
export enum PagingAction {
    ItemsPerPage,
    NextPaging,
    PrevPaging,
    SetPage
}


export interface IPagingState {
    totalPages: number;
    totalResultCount: number;
    currentpageItemsCount: number;
    currentPage: number;
    itemsPerPage: number;
}

export interface IPagingEvent {
    action: PagingAction;
    val?: any;
}
