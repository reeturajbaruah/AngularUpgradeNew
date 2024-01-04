import { SiteCoreItem } from 'cms/cms.module';

export enum Action {
    Edit,
    Remove
}

export interface IOperation {
    action: Action;
    label: string;
    display: boolean;
    onClickContent?: SiteCoreItem;
    source: string;
}

export interface IEvent {
    action: Action;
    source: string;
    data?: any;
}
