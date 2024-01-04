import { MaintenanceFeature } from 'constants/module';
import { SiteCoreItem } from '../cms/cms.module';
import { Alert, ErrorMessage, BaseResponse as IBaseResponse, IFeatureState, IErrorList } from './interfaces';

//todo: move this when APIs mature
export interface AddressInfo {
    address1: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city: string;
    state?: string;
    zip?: string;
    plus4?: string;
    country: string;
    displayCountry?: string;
    international?: boolean;
    badAddressFlag?: boolean;
}

export enum AddressConstants {
    USA = 'USA',
    TX = 'TX'
}

export type ToastType = 'Success' | 'Error' | 'Warning';

export interface BankDetails {
    accountType: BankAccountType;
    accountTypeDisplay?: string;
    name: string;
    routingNumber: string;
    accountNumber: string;
    account2?: string;
    isBlocked?: boolean;
    primary?: boolean;
    accountBillingMethodId?: number;
    nameOnBankAccount?: string;
}

export interface VantivDto {
    lastFour?: string;
    paypageRegistrationId?: string;
}

export enum BillingType {
    Credit = 'CREDIT',
    Eft = 'EFT',
    Cash = 'CASH'
}

export enum PhoneType {
    Work = 'Work',
    Cell = 'Cell',
    Home = 'Home'
}

export interface IPaymentMethodDetails {
    showCashOption?: boolean;
    enableCashOption?: boolean;
}

export enum CreditCardType {
    visa = 'VISA',
    mastercard = 'MASTERCARD',
    amex = 'AMEX',
    discover = 'DISCOVER'
}

export enum BankAccountType {
    Personal = 'PERSONAL',
    Business = 'BUSINESS'
}

export interface CreditCardDetails {
    cardCode: string;
    cardTypeDisplay?: string;
    cardNbr: string;
    expMonth: number;
    expYear: number;
    nameOnCard: string;
    accountBillingMethodId?: number;
    paypageRegistrationId?: string;
    omniToken?: string;
    primary?: boolean;
    isNewCard?: boolean;
    isBlocked?: boolean;
    creditCardNumber?: string;
    type?: string;
}

export interface State {
    stateCode: string;
}

export interface Country {
    countryCode: string;
    countryName: string;
}

export interface BaseBankAccountRequest {
    AccountType: string;
    RoutingNumber: string;
    AccountNumber: string;
}

export interface ICmsPaymentInfo {
    autoRepText: string;
    savePaymentText: string;
    autoRepWarningMesg: string;
    savePaymentWarningMesg: string;
    tagInfoText: string;
    tagInfoModalCms: SiteCoreItem;
}

export interface ContactInfo {
    phoneNumber: string;
    altPhoneNumber?: string;
    altPhoneNumberExt?: string;
    emailAddress: string;
    altEmailAddress?: string;
    workPhoExt?: string;
    workPhoNbr?: string;
    plus4?: string;
    workPhonePlusExt?: string;
}

export interface PaymentMethodInfo extends BaseResponse {
    creditCards: (CreditCardDetails & AddressInfo)[];
    bankAccounts: (BankDetails & AddressInfo)[];

    maxCards: number;
    maxEfts: number;
}

export interface PaymentMethodOptions {
    newMethodAdded?: boolean;
    makePrimary?: boolean;
    addToPaymentList?: boolean;
    primary?: boolean;
}

export interface IPersonalInfo {
    firstName: string;
    lastName: string;
}

export interface ICreateAccountLoginInfo {
    password: string;
    securityAnswer: string;
}

export interface ICreateAccountContactInfo {
    companyName: string;
    firstName: string;
    lastName: string;
    internationalAddress: boolean;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    plus4?: string;
    country?: string;
    securityQuestionID: string;
    username: string;
    emailAddressContact: string;
    phoneNumber: string;
    phoneExt: string;
    smsAlertsOptIn?: boolean;
    stateList: State[];
    countryList: Country[];
    isShowPersonalInfo: boolean;
    addressTitle: string;
    primaryPhone: string;
    primaryPhoneExt?: string;
    isShowPassword: boolean;
    isShowSecurityAnswer: boolean;
    isShowEmail: boolean;
    isShowPrimaryPhone: boolean;
    securityQuestions: { securityQuestion: string; securityQuestionID: number }[];
    isSaveMailingAddressChecked: boolean;
    isShowSaveMailingAddressCheck: boolean;
}

export interface ICreateAccountAddressInfo {
    address1: string;
    address2?: string;
    city: string;
    state?: string;
    zip?: string;
    plus4?: string;
    country: string;
    displayCountry?: string;
    international?: boolean;
}

export interface IMailingInfo extends IPersonalInfo, AddressInfo { 
    internationalAddress: boolean;
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
    tagInfo?: {
        hasTag: boolean;
        desc: string;
    };
}

export interface IAccountInfo {
    securityQuestionID: number;
    driverLicenseNumber: string;
    byMail: boolean;
    byEmail: boolean;
    username: string;
}

export interface ILoginInfo {
    password: string;
    securityAnswer: string;
}

export interface IContactInfoCmsData {
    saveMailingAddressDescription?: string;
    phoneAlertsOptInDesc?: string;
}


export interface CreateLoginAccountInfo {
    username: string;
    emailAddress: string;
    phoneNum: string;
    phoneExt?: boolean;
    smsAlertsOptIn?: boolean;
    driverLicenseState: string;
    driverLicenseNumber: string;
    securityQuestionID: number;
    accountId?: number;
    personId?: number;
    addressId?: number;
}

export interface CreateLoginInfo {
    password: string;
    securityAnswer: string;
}

export enum DeliveryMethodType {
    Mail = 'mail',
    Store = 'store',
    //According to ETC, BOS API is looking for the delivery method as ‘PICKUP’ instead of ‘STORE’ for Tag Replacement so we added below enum.
    Pickup = 'PICKUP'
}

export enum PaymentRadioStatus {
    Yes = 'YES',
    No = 'NO'
}

export interface IUpdateRebillAmountRequest {
    rebillAmount: number;
    minimumBalance: number;
}

export interface IRemovePaymentMethodRequest {
    creditCardPaymentMethod: CreditCardDetails & AddressInfo;
    eFTPaymentMethod: BankDetails & AddressInfo;
    isCreditCard: boolean;
}

export interface IAddorUpdatePaymentMethodandRebillAmountRequest {
    billingInfo: BillingInfo;
    mailingInfo: IMailingInfo;
    paymentOperation?: 'ADD' | 'UPDATE';
}
export interface ITagOrderDesc {
    tagOrdered?: string;
    tagNotOrdered?: string;
}

export enum TagType {
    Tag = 'T',
    NoTag = 'NOTAG',
    Plate = 'P'
}

export class BaseResponse implements IBaseResponse {

    errors: ErrorMessage[];
    alerts: Alert[];
    exception: string;
    sessionTimedOut: boolean;
    accountStatus: string;

    constructor() {
        this.errors = [];
        this.alerts = [];
    }
}

export class MaintenanceResponse extends BaseResponse {
    featureStates: IFeatureState[];
    showMaintenancePopup: boolean;
}

export class CoreViolationsData {
    licensePlate: string;
    licenseState: string;
    invoiceNumber: string;
    dbSessionId: string;
    dbSessionCreationTime: string;
    violationsEmail?: string;
}

// Vantiv START
export class VantivDto {

    constructor(public lastFour?: string, public paypageRegistrationId?: string) {
    }
}

export class VantivResponse {
    public bin: string;
    public firstSix: string;
    public id: string;
    public lastFour: string;
    public litleTxnId: string;
    public vantivTxnId: string;
    public message: string;
    public orderId: string;
    public paypageRegistrationId: string;
    public reportGroup: string;
    public response: string;
    public responseTime: string;
    public targetServer: string;
    public type: string;
    public timeout: boolean;
}

export class VantivRequestLog {
    public orderId: string;
    public paypageId: string;
    public requestId: string;
    public reportGroup: string;
    public url: string;
    public violationsData: CoreViolationsData;
}

export class VantivResponseLog {
    public id?: string;
    public vantivTxnId?: string;
    public litleTxnId?: string;
    public message?: string;
    public orderId?: string;
    public paypageRegistrationId?: string;
    public reportGroup?: string;
    public response?: string;
    public responseTime?: string;
    public targetServer?: string;
    public type?: string;
    public url?: string;
    public isError?: boolean;
    public customLogMessage?: string;
    public violationsData: CoreViolationsData;
}

export class VantivTriPosConfiguration extends BaseResponse {
    accountId: string;
    accountToken: string;
    applicationId: string;
    acceptorId: string;
    laneId: number;
    vaultId: string;
    applicationName: string;
    applicationVersion: string;
    authorization: string;
    requestId: string;
    url: string;
}

export class VantivTriPosStatus extends BaseResponse {
    active: boolean;
    allowCreditCardInputWhenDeviceDisabled: boolean;
    getCardNameFromTriPos: boolean;
}

export class VantivTriPosCreateOmniTokenResponse {
    accountNumber: string;
    binValue: string;
    cardHolderName: string;
    cardLogo: string;
    entryMode: string;
    expirationMonth: string;
    expirationYear: string;
    isOffline: boolean;
    merchantId: string;
    tokenId: string;
    tokenProvider: string;
    transactionDateTime: string;
    cancelledByUser?: boolean;
}
// Vantiv END

export interface EventTrackingRule {
    Name: string;
    Id?: string;
    IdRegex?: string;
    Page?: string;
    PageRegex?: string;
    TriggerIf?: string;
}

/*
export interface BillingInfo {
    mailingAddress: any;
    billingInfoExists: boolean;
    billingType: number;
    billingTypeCode: string;
    billingTypeDisplay: string;
    cards: any;
    creditCard: boolean;
    eft: any;
    primaryCard: any;
    transactionId: number;
}
*/

export interface BillingInfo {
    eft: BankDetails & AddressInfo;
    credit: CreditCardDetails & AddressInfo;
    billingType?: BillingType | string;
    autoReplenishmentStatus?: boolean;
    savePaymentStatus?: boolean;
    paymentMethodDetails?: IPaymentMethodDetails;
    selectedBillingType?: string;
    billingInfoExists?: boolean;
    billingTypeDisplay?: string;
    cmsPaymentInfo?: ICmsPaymentInfo;
}

export interface VantivTriPosConfiguration extends BaseResponse {
    accountId: string;
    accountToken: string;
    applicationId: string;
    acceptorId: string;
    laneId: number;
    vaultId: string;
    applicationName: string;
    applicationVersion: string;
    authorization: string;
    requestId: string;
    url: string;
}

export interface UnsuspensionPaymentResult {
    label: string;
    amount: number;
    paymentWasSuccessful: boolean;
}

export interface FullUnsuspensionPaymentResponse extends BaseResponse {
    successfulPayments: UnsuspensionPaymentResult[];
    failedPayments: UnsuspensionPaymentResult[];
    paymentsWereSuccessful: boolean;
    totalAmountPaid: number;
    totalAmountStillOwed: number;
    paymentResponse: PaymentResponse;
}

export interface SuspendedAccountGetReceiptDataResponse extends BaseResponse {
    billingInfo: BillingInfo;
    ezTags: Vehicle;
    ezPlates: Vehicle;
}

export interface SuspendedAccountViolationSummaryCmsContent {
    adminFeeInformation: string;
    adminFee: string;
    outstandingAccountInformation: string;
    feeReductionInformation: string;
    feeReductionProgram: string;
    collectionFeeDiscountProgram: string;
    paymentSummaryPinkLetter: string;
    paymentSummarySentALetter: string;
    paymentSummaryCombination: string;
    paymentSummaryIneligible: string;
    paymentSummary: string;
}

export interface GetViolationSummaryCmsContentResponse extends BaseResponse {
    cmsContent: SuspendedAccountViolationSummaryCmsContent;
}

export interface FullUnsuspensionPaymentPinkLetterRequest {
    accountNumber: string;
    accountType: string;
    acctId: number;
    address1: string;
    address2: string;
    cardNumber: string;
    cardType: string;
    city: string;
    country: string;
    expMonth: string;
    expYear: string;
    name: string;
    paypageRegistrationId: string;
    omniToken: string;

    payType: string;
    plus4: string;
    routingNumber: string;
    state: string;
    zip: string;
    cfdpChargesByPlateList: FrpChargesByPlate[];
    frpChargesByPlateList: FrpChargesByPlate[];
    ineligibleChargesByPlateList: FrpChargesByPlate[];
    outstandingAccountBalance: number;
    replenishmentAmount: number;
    isEligible: boolean;
}

export interface MissedATollViolation {
    agency: string;
    agencyId: number;
    balance: number;
    eventDateTime: string;
    eventLocation: string;
    inPayment: boolean;
    violationId: number;
}

export interface ViolationInvoiceNewHeader {
    invoiceNumber: string;
    dueDate: Date;
    invoiceDate: Date;
    amountDue: number;
    remainingBalance: number;
    invoiceId: string;
    invoiceDue: number;
    amountAlreadyPaid: number;
    paymentsPending: number;
    adminFee: number;
    onlineDiscountEligible: boolean;
    pastPayments: number;
    payment: number;
    waiverEligible: boolean;
    adjustmentEligible: boolean;
    agency: string;
    collectionFee: number;
    otherFee: number;
    totalDue: number;
    alreadyPaid: number;
    currentAmountDue: number;
    finalAmountDue: number;
    inPayment: boolean;
    waveFees: boolean;
    addServiceFee: boolean;
    issueDate: Date;
    itemType: string;
    violationDocId: number;
    status: string;
    violations: ViolationListing[];
}

export interface ViolationListing {
    amount: number;
    date: Date;
    location: string;
}

export interface FrpCheckEligibilityResult {
    violations: MissedATollViolation[];
    invoices: ViolationInvoiceNewHeader[];
    ineligibleInvoices: ViolationInvoiceNewHeader[];
    isEligible: boolean;
    lastSalPerformedDate: Date;
    serviceFee: number;
    allInvoiceLevelFees: number;
    totalInvoicedAmount: number;
    totalUninvoicedAmount: number;
    finalAmountOwed: number;
}

export interface FrpChargesByPlate {
    licensePlateState: string;
    licensePlateNumber: string;
    frpCheckEligibilityResult: FrpCheckEligibilityResult;
}

export interface FullUnsuspensionPaymentRequest {
    accountNumber: string;
    accountType: string;
    acctId: number;
    address1: string;
    address2: string;
    cardNumber: string;
    cardType: string;
    city: string;
    country: string;
    expMonth: string;
    expYear: string;
    name: string;
    paypageRegistrationId: string;
    omniToken: string;

    payType: string;
    plus4: string;
    routingNumber: string;
    state: string;
    zip: string;
    frpChargesByPlateList: FrpChargesByPlate[];
    ineligibleChargesByPlateList: FrpChargesByPlate[];
    outstandingAccountBalance: number;
    replenishmentAmount: number;
    isEligible: boolean;
}

export interface CheckAccountEligibilityResponse extends BaseResponse, CheckAccountSalEligibilityResponse {
    cfdpChargesByPlateList: FrpChargesByPlate[];
    numberOfEligibleCfdpPlatesWithInvoices: number;
    numberOfEligibleFrpPlatesWithInvoices: number;
    totalCfpdFeesReduced: number;
    totalFrpFeesReduced: number;
}

export interface CheckAccountSalEligibilityRequest {
    accountId: number;
}

export interface CheckAccountSalEligibilityResponse extends BaseResponse {
    isEligible: boolean;
    frpChargesByPlateList: FrpChargesByPlate[];
    ineligibleChargesByPlateList: FrpChargesByPlate[];
    totalAmountDueBeforeFeeReduction: number;
    totalFeesBeingReduced: number;
    totalFrpServiceFee: number;
    totalFeeReducedAmountDue: number;
    accountLevelBalance: number;
    rebillAmount: number;
    finalAmountOwed: number;
    numberOfEligiblePlatesWithInvoices: number;
    serviceFeePerPlate: number;
}

export interface EndStorefrontSessionRequest {
    storefrontSessionID: number;
    logOffType: string;
}

export interface StorefrontSurveyRequest {
    storefrontSessionID: number;
    experienceValue: number;
    comments: string;
}

export interface PushStorefrontRequest {
    storefrontSessionID: number;
    accountID: number;
    lP: string;
    licensePlateState: string;
    invoice: string;
    loginID: string;
    activityTime: Date;
    dBSession: string;
    angularState: string;
    uRL: string;
    error: string;
    alert: string;
    email: string;
}

export interface StartStorefrontSessionRequest {
    selectedOptions: string;
    location: string;
}

export interface FeatureToggleResponse extends BaseResponse {
    toggleStatus: boolean;
    toggleName: string;
}

export interface Vehicle {
    tagId: string;
    fullTagId: string;
    acctTagSeq: number;
    acctTagSeqSpecified: boolean;
    licPlate: string;
    licState: string;
    motorcycle: boolean;
    nickname: string;
    temporaryLicPlate: boolean;
    vehicleClassCode: string;
    vehicleClassDesc: string;
    vehicleColor: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleYear: string;
    acctTagStatus: string;
    tagStatusDesc: string;
    pbpStartDate: Date;
    pbpEndDate: Date;
    tagTypeCode: string;
    activePbpTagExist: boolean;
    tagless_Desc: string;
}

export interface BillingInfoStateAndCreditCardResponse extends BaseResponse {
    accountTags: Vehicle[];
    pbpTags: Vehicle[];
    billingInfo: BillingInfo;
    creditCardTypes: CreditCardType[];
    states: State[];
    countries: Country[];
}

export interface AccountSummaryRequest {
    emailValidationId: number;
}

export interface EmailConfirmationRequest {
    emailValidationId: number;
}

export enum EmailConfirmationConstants {
    NOT_CONFIRMED = 1,
    JUST_CONFIRMED = 2,
    PREVIOUSLY_CONFIRMED = 3
}

export interface EmailConfirmationResponse extends BaseResponse {
    emailConfirmationStatus: EmailConfirmationConstants;
}

export interface GeneralCmsItems {
    Title: string;
    ShortDescription: string;
    LongDescription: string;
    Children: any[];
}
