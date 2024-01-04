import { TransactionRecord } from 'accountDashboard/services';
import { BaseResponse } from 'common/interfaces';
import { AddressInfo } from 'common/models';

/**
 * API Response object for Monthly Statement dropdown
 */
export interface SetUpStatementsPageResponse extends BaseResponse {
    dates: string[];
}

/**
 * Tag Summary information interface for Monthly Statement
 */
export interface TagSummary {
    tagId: string;
    description: string;
    quantity: string;
    amount: string;
}

/**
 * Account Summary information interface for Monthly Statement
 */
export interface AccountSummary {
    amount: number;
    description: string;
    quantity: string;
}

interface Record {
    transDate: string;
    postedDate: string;
    vehicleClassCode: string;
    location: string;
    description: string;
    laneFullName: string;
    tagId: string;
    amount: number;
}

/**
 * API Request object for Monthly Statement details
 */
export interface MonthlyStatementRequest {
    date: string;
}

/**
 * API Response object for Monthly Statement details
 */
export interface MonthlyStatementResponse extends BaseResponse {
    tagSummaries: TagSummary[];
    acctSummary: AccountSummary[];
    records: Record[];
}

/**
 * EZTAG Summary Info Interface for Yearly Summary
 */
export interface EZTAGSummaryInfo {
    tagId: string;
    description: string;
    quantity: number;
    amount: string;
}

/**
 * Account Summary Info Interface for Yearly Summary
 */
export interface AccountSummaryInfo {
    description: string;
    quantity: number;
    amount: string;
}

/**
 * API Request object for Yearly Summary details
 */
export interface GetYearlySummaryInfoRequest {
    year: number;
}

/**
 * API Response object for Yearly Summary details
 */
export interface GetYearlySummaryInfoResponse extends BaseResponse {
    acctSummary: AccountSummaryInfo[];
    tagSummary: EZTAGSummaryInfo[];
}

/**
 * API Response object for Yearly Summary dropdown
 */
export interface SetupYearlyPageResponse extends BaseResponse {
    dates: string[];
}

/**
 * API Request object for Latest Account Activity details
 */
export interface SearchAccountActivityRequest {
    dateFrom: Date;
    dateTo: Date;
    vehicle: string;
    vehicleNickNameType: 'L';
    transaction: string;
    transactionDisplay?: string;
    dateRangeType: string;
}

/**
 * API Response object for Latest Account Activity details
 */
export interface SearchAccountActivityResponse extends BaseResponse {
    records: TransactionRecord[];
    totalRecordsCount: number;
    totalAmount: number;
    hideLocationLink: boolean;
    showPostedDate?: boolean;
}

/**
 * API Request object for Account Activity transaction location details
 */
export interface LocationCoordinatesRequest {
    laneName: string;
}

/**
 * API Response object for Account Activity transaction location details
 */
export interface LocationCoordinatesResponse extends BaseResponse {
    coordinates: {
        latitude: number;
        longitude: number;
    };
}


/**
 * API Response object for Setup Receipts
 */
export interface SetupReceiptsResponse extends BaseResponse {
    accountStatus: any;
    alerts: [];
    errors: [];
    exception: any;
    receiptHeaders: [];
    securityIssue: boolean;
    sessionTimedOut: boolean;
    webVersion: string;

}

/**
 * API Response object for Receipt Details
 */
export interface ReceiptDetailsResponse extends BaseResponse {
    accountStatus: any;
    accountTrans: [];
    alerts: [];
    companyName: any;
    csrId: string;
    depositTrans: [];
    errors: [];
    exception: any;
    homePhoneNumber: string;
    mobilePhoneNumber: string;
    name: any;
    paymentDetail: [];
    receiptDate: string;
    securityIssue: boolean;
    sessionTimedOut: boolean;
    userAddress: AddressInfo;
    username: string;
    webVersion: string;
    workPhoneNumber: any;
}


/**
 * API Request object for SetupReceipt
 */
export interface SetupReceiptRequest {
    fmonth: string;
    fday: string;
    fyear: string;
    tmonth: string;
    tday: string;
    tyear: string;
}

/**
 * API Request object for Receipt Details
 */
export interface ReceiptDetailsRequest {
    transactionNumber: string;   
}

/**
 * 
 */
export interface InvoiceMonths extends BaseResponse {
    invoiceDates: string[];
}

export interface MonthlyInvoiceRequest {
    invoiceDate: string;
}

export interface MonthlyInvoiceResponse extends BaseResponse {
    invoiceSummary: InvoiceSummary[];
    outstandingInvoices: TwoFieldSummary[];
    balSumBalanceRequirement: number;
    balSumCurrentBalance: number;
    balSumReplenishmentAmt: number;
    invoiceNumber: string;
    address: AddressInfo;
    firstName: string;
    lastName: string;
    homePhoneNumber: string;
    mobilePhoneNumber: string;
    workPhoneNumber: string;
    totalAmtDue: number;
    companyName: string;
    invoiceDetails: TransactionRecord[];
}

export interface InvoiceSummary {
    description: string;
    quantity?: number;
    amount?: number;
}

export interface TwoFieldSummary {
    description: string;
    amount: number;
}

export interface ISearchTransactionsResponse extends BaseResponse {
    maxDaysAllowedInSearch: number;
    transactionListItems: ListItems[];
    vehicleNickName: NickName[];
}

export interface ListItems {
    hierarchy: number;
    text: string;
    value: string;
}

export interface NickName {
    text: string;
    value: 'L';
}
