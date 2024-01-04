import { SiteCoreItem } from 'cms/cms.module';

export interface IWhatsNewPageCmsContent extends SiteCoreItem {
    banner: string;
}

export interface IDynamicDisplay {
    title: string;
    image: string;
    mobileImage: string;
    mediaUrl: string;
    mediaType: 'Image' | 'GIF' | 'Video';
    content: string;
    tabTitle: string;
}

export interface IMedia {
    MediaURL: string;
    MediaType: string;
    MobileImage: string;
}

export interface IMetaInfo {
    sort: string;
    isActive: string;
}

