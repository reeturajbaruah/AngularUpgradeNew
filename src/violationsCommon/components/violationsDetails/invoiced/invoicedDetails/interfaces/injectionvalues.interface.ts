import { IViolationInvoice } from '../../../../../interfaces/violationIinvoice.interface';

export interface IInjectionValues {
    invoiced: IViolationInvoice;
    // eslint-disable-next-line id-blacklist
    plate: { state: string; number: string };
    isPreviousPaid: boolean;

    isSuspendedAccount: boolean;
}
