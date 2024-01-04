import { SiteCoreItem } from 'cms/cms.module';

export interface AETSitecore extends SiteCoreItem {
    Title: string;
    FAQTitleText: string;
    FAQTitleText1Mobile: string;
    FAQTitleText2Mobile: string;
    CloseText: string;
    TollPolicyRoadWayText: string;
    TempSignageText: string;
    Phase1SignageChangesText: string; 
}

export interface AETSection {
    Title: string;
    Image: string;
    ShortDescription: string;
    ContentText1: string;
    ContentText2: string;
    ContentText3: string;
    Children?: AETSection[];
}

export interface FAQSection {
    Title: string;
    ShortDescription: string;
    Children: FAQChild[];
}

export interface FAQChild {
    Query: FAQResults;

}

export interface FAQResults {
    Results: Accordion[];
}

export interface Accordion {
    Title: string;
    ShortDescription: string;
}


export interface IQueryAet {
    breakpoint: string;
    header: IHeader;
    signage: ISignage;
    faq: IFaq;
    tollPolicyRoadWay: IContent;
}

export interface IFaq {
    title: string;
}

export interface ISignage {
    content: IContent;
    expanded: {
        content: IContent;
        children: IContent[];
    };
}

export interface IContent {
    image: string | string[];
    texts: string[];
}

export interface IHeader {
    about: IContent;
    benefits: IBenefits;
    gantry: IContent;
}

export interface IBenefits {
    easier: IContent;
    safer: IContent;
}
