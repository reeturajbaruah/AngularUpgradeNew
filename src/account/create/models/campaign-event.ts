
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