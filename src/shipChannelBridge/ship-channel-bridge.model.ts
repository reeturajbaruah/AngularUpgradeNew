import { SiteCoreItem } from 'cms/cms.module';

export interface DynamicDisplay {
    title: string;
    longDescription: string;
    shortDescription: string; 
}

export interface DynamicDisplaySiteCoreItem extends SiteCoreItem {
    DescriptionForImage: string;
    MobileDescriptionForImage: string;
}

export type CmsDisplay = DynamicDisplaySiteCoreItem;

export interface Slide {
    url: string;
    image: string;
}

export interface Contact {
    Name: string;
    Email: string;
    Subject: string;
    Comments: string;
    TopicContentId: string;
    FormContentId: string;
}
