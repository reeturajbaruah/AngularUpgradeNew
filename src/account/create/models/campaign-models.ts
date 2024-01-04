
export enum CampaignEventName {
    MetaPixel,
    AdForm,
    StackAdapt
};

export interface ICampaignEvent {
    name: CampaignEventName;
    data?: any;

}

export enum IPageEvent {
    OnInit,
    Submit
};



export interface IPageCampaignEvent {
    pageEvent: IPageEvent;
    pageName?: string;
    compeleteReg?: boolean;
}

export enum CampaignSource {
    waze = 'waze',
    fb = 'fb',
    stackadapt = 'stackadapt',
    af = 'af',
    youtube = 'youtube',
    hulu = 'hulu',
    univision = 'univision'
}

export const BannerLanguages = ['eng', 'vtn', 'esp'];

export const langDictionary = new Map<string, string>(
    [
        ['eng', 'English'],
        ['esp', 'Spanish'],
        ['vtn', 'Vietnamese']
    ]
);


