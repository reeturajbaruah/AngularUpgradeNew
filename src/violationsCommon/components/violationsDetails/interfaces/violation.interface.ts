export interface IViolation {
    agencyId: number;
    agencyName: string;
    mobileAgencyName: string;
    violationDate: string;
    location: string;
    tollAmount: number;
    originalTollAmount: number;
    violationId: number;
    paymentAmount: number;
    isInvoice?: boolean;
    accountId?: number;
}
