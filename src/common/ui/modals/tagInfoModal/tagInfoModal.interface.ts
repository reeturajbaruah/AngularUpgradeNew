import { SiteCoreItem } from 'cms/cms.module';

export interface ITagInfoInjectionValues {
    modalCms: ITagInfoModalSCI;
}

export interface ITagTableItem {
    desc: string;
    fee: string;
}

export interface ITagInfoModalSCI extends SiteCoreItem {
    FIRST_REG_TAGS_DESC: string;
    FIRST_REG_TAGS_FEE: string;
    MORE_THAN_TAGS_DESC: string;
    MORE_THAN_TAGS_FEE: string;
    MOTO_TAGS_DESC: string;
    MOTO_TAGS_FEE: string;
}
