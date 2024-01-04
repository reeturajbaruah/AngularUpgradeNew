
export enum EventType {
    PageLoadComplete,
    Category,
    ItemsPerPage,
    PrevPage,
    NextPage,
    GoToSpecificPage
}

export interface IEvent {
    type: EventType;
    data?: {
        itemsPerPage?: number;
        categoryId?: string;
        currentPage?: number;
    };
}

