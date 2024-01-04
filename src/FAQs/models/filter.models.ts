
export interface ICat {
    name: string;
    id: string;
}

export interface ICategories {
    defaultCatId: string;
    categories: ICat[];
}
