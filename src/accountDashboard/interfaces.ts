export interface IAccountPendingFundsContent {
    // Title
    Title: string;
    SubTitleDescText: string;

    // Pending Funds Items
    PendingFundsText: string;
    ShortDescription: string;
    ProceedToStoreText: string;
    AddAdditionalNoteForTagCost: string;

    // EZTollPay Items
    AddFundsAtStoreText: string;
    LongDescription: string;
    WhereItWorksText: string;
    EZTollPayRoute: string;

    // Add Funds Items
    CantMakeItToStoreText: string;
    CantMakeItToStoreDescText: string;
    AddFundsText: string;
}

export interface IAccountPendingFundsNorthAreaContent {
    Title: string;
    ShortDescription: string;
    LongDescription: string;
    DirectionsText: string;
    PhoneNumberText: string;
    MapURL: string;
    AddressLine1Text: string;
    AddressLine2Text: string;
}
