
export interface IFaqResults {
    topSearchResults: IResult[];
    searchResults: ISearchResults;
}

export interface ISearchResults {
    count: number;
    results: IResult[];
}

export interface IResult {
    categoryName: string;
    title: string;
    shortDesc: string;
    lastModifiedDate: string;
}

export interface IFaqCms {
    FaqTitleBanner: string;
    SearchSection: string;
    FaqSection: string;
    SortByTitle: string;
    SearchResultsTitle: string;
    TopFiveFaqTitle: string;
    FilterCategoryTitle: string;
}

