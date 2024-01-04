import { IAgencyInformation } from '../components/violationsDetails/interfaces/agency-information.interface';
import { IViolationInvoice } from './violationIinvoice.interface';
import { IViolation } from '../components/violationsDetails/interfaces/violation.interface';

export interface IViolationPlate {
    agencies: IAgencyInformation[];
    previouslyPaidInvoices: IViolationInvoice[];
    invoices: IViolationInvoice[];
    uninvoicedViolations: IViolation[];
    invoicesAndViolations: (IViolationInvoice | IViolation)[];
    discountProgramCode: number;
    violatorID: number;
    totalFeesDiscounted: number;
    totalFeesDiscountedFRP3?: number;
    serviceFee: number;
    plateDueAfterDiscount: number;
    plateDueBeforeDiscount: number;
    isNewEzTagAccountEligibile: boolean;
    newEzTagAccountDiscount: number;
    newEzTagAccountStartingBalance: number;
    newEzTagAccountEZTagFee: number;
    newEzTagAccountPlateTotal: number;
    hasPaymentPlan: boolean;
    licensePlate: string;
    licenseState: string;
    totalPaymentAmount: number;
    totalPaymentAmountFRP3?: number;
    totalUninvoicedAmount: number;
    totalInvoicedAmount: number;
    accountVehicleId: number;
    totalSelected?: number;
    remainingBalance?: number;
    hasCAOFineEstimates: boolean;
    showPaymentPlanDetails?: boolean;
    showPaidInvoices?: boolean;
    paymentPlanBalance?: number;
}
