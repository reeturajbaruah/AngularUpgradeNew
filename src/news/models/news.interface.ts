import { SiteCoreItem } from 'cms/cms.module';

export interface ICategory {
    displayName: string;
    itemID: string;
    queryID: string;
    isDefault: boolean;
}

export interface INewsItem {
    title: string;
    subtitle: string;
    publishedOn: string;
    description: string;
    targetUrl: string;
    category: string;
}

export interface INewsResults {
    category: ICategory;
    count: number;
    items: INewsItem[];
}

export interface IQueryNews {
    categories: ICategory[];
    results: INewsResults;
    totalPages?: number;
}

export interface IState {
    category: ICategory;
    view: ViewType;
    pageSize: number;
    currentPage: number;
}

export interface INewsLatestApiRequest {
    requests: IItemRequest[];
}

export interface IItemRequest {
    fields: string;
    itemId: string;
}

export enum FieldsEnum {
    Title = 'Title',
    QueryId = 'QueryId',
    DisplayName = 'DisplayName',
    ItemPath = 'ItemPath',
    ItemName = 'ItemName',
    ItemID = 'ItemID',
    Query = 'Query'
}


export interface INewsPagingInfo {
    currentPage: number;
    isClosures: boolean;
    isNews: boolean;
    itemId: string;
    pageSize: number;
    pagingSuffix: string;
}

export enum NewsAction {
    Category,
    ToggleView
}

export enum ViewType {
    Latest = 'Latest',
    Archive = 'Archive'
}

export interface ILatestNewsReq {
    categoryId: string;
}

export interface INewsQueryParams {
    category: string;
    filter: ViewType;
}

export interface INewsCms extends SiteCoreItem {
    bannerTitle: string;
    view: string;
    latestNews: string;
    archive: string;
    searchResults: string;
    itemsFound: string;
    readMore: string;
    publishedOn: string;
    viewArchiveButtonText: string;
}

export interface INewsArticleDictionaryItem {
    itemID: string;
    friendlyURL: string;
    templateName: string;
}
