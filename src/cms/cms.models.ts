import { IErrorList } from 'common/interfaces';

export type CmsItemMap = { [itemId: string]: any };

export type CmsFilter = { ItemId?: string; itemId?: string; ItemID?: string; itemID?: string };

export interface IListCmsResponse extends IBaseCmsResponse {
    responses: IBaseCmsResponse[];
};

export interface IBaseCmsResponse extends IErrorList {
    cmsResponse: string;
};

export interface BaseCmsResponse extends IErrorList {
    cmsResponse: string;
}

export interface ListCmsResponse extends BaseCmsResponse {
    responses: BaseCmsResponse[];
}

export interface BaseCmsRequest {
    path: string;
    fields: string;
    itemId: string;
}

export interface ListCmsRequest {
    requests: BaseCmsRequest[];
}
