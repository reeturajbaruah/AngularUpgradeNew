
export interface IMailingInfo {
    firstName: string;
    lastName: string;
    internationalAddress: boolean;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    plus4: string;
    country: string;
}

export interface IVehicleInfo {
    licState: string;
    licPlate: string;
    vehicleYear: string;
    vehicleModel: string;
    vehicleMake: string;
    vehicleColor: string;
    vehicleClassCode: string | number;
    vehicleClassDesc: string;
    temporaryLicPlate: boolean;
    motorcycle: boolean;
    nickname: string;
    isMotorcycleDisabled: boolean;
}

export interface IBillingInfoCreditCard {
    accountBillingMethodId: number;
    cardNbr: string;
    cardCode: string;
    nameOnCard: string;
    expMonth: string;
    cardExpires: string;
    selectedYear: string;
    primary: boolean;
}

export interface IBillingInfoBankAccount {
    accountBillingMethodId: number;
    name: string;
    accountNumber: string;
    account2: string;
    routingNumber: string;
    accountTypeDisplay: string;
    primary: boolean;
}

export interface IFeeInfo {
    totalViolationsDue: string;
    totalUninvoicedAmount: string;
    totalFeesDiscountedDontCreateAccount: string;
    serviceFee: string;
    createAccountDiscount: string;
    createAccountStartingBalance: string;
    createAccountEZTagFee: string;
    createAccountPlateTotal: string;
    dontCreateAccountPlateTotal: string;
}

export interface ITollSummary {
    totalViolationsDue: string;
}

export interface CancelMessageCmsData {
    cancelQuestion: string;
    cancelReject: string;
    cancelResolve: string;
}

export interface PersonalPageCmsData {
    pageTitle: string;
    mailingAddressHeader: string;
    licenseHeader: string;
    securityInfoHeader: string;
    verifyInfoCheckboxDescription: string;
    verifyInfoHelp: string;
    //TODO: fields below may not be needed
    vehicleInfoTitle: string;
    vehicleToolTipEditButton: string;
    vehicleToolTipText: string;
    phoneAlertsOptInDesc: string;
}
