// From MAT stuff
export interface ViolationInformationDTO {
    lastMatPerformed: Date;
    serviceFee: number;
    licensePlate: string;
    state: string;

    formattedViolationData: FormattedViolationDataDTO;
}

export interface FormattedViolationDataDTO {
    totalAmountDue: number;
    listOfViolations: ListOfViolations;
    grandTotal: number;
}

export interface ListOfViolations {
    totalInvoices: number;
    invoices: InvoiceConstruct<ViolationDataEntry>[];
}

export interface InvoiceConstruct<T> {
    agencyName: string;
    total: number;
    readonly data: T[];
}


export interface ViolationDataEntry {
    agencyCode: string;
    mobileAgency: string;
    amountDue: number;
    location: string;
    violationDate: string;
    violationNumber: string;
}

// From Suspended???
export interface MissedATollViolation {
    agency: string;
    mobileAgency: string;
    agencyId?: number;
    balance: number;
    eventDateTime: string;
    eventLocation: string;
    inPayment: boolean;
    violationId: string;
}
