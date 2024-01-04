export interface callToActionSection {
    Title: string;
    TitleDescription?: string;
    ButtonURL: string;
    ButtonText?: string;
    hideAtLogIn: string;
    hideAtLogOut: string;
    ContentTitle?: string;
    Content?: string;
    learnMoreURL?: string;
    SectionConfig: string;
}

export interface callToActionCMS {
    Children: callToActionSection[];
    mainPanelHeight?: string;
    rightPanelHeight?: number;
}
