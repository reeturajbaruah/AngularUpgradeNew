import { IViolationPlate } from '../../../interfaces/violationPlate.interface';
import { BaseResponse } from 'common/interfaces';

export interface IViolationRequest {
    licenseState: string;
    licensePlate: string;
    invoiceNumber: string;
    research?: boolean;
}

export interface IPlateSearchResponse extends BaseResponse {
    plate: IViolationPlate;
    invoiceSearchNum: string;
    exception: string;
    sessionTimedOut: boolean;
    accountStatus: string;
    webVersion: string;
}

export interface IAcctSearchResponse extends BaseResponse {
    plate: IViolationPlate;
    invoiceSearchNum: string;
    accountId: number;
    hasPlates: boolean;
    hasPaymentPlan: boolean;
    hasMultipleAccts: boolean;
    hasAssociatedPlates: boolean;
    hasAnyOpenViolations: boolean;
    isCavEligible: boolean;
    associatedPlates: IViolationPlate[];
    accountConversionData: IAccountConversion;
}

export interface IAccountConversion {
    accountConvDiscPct: number;
    isEligibleForAccConversion: boolean;
    addressId: number;
    initialPrepaidBalance: number;
    personId: number;
    tagAactivationFee: number;
    totalDiscountedAmount: number;
    totalAmtDueForConversion: number;
}
