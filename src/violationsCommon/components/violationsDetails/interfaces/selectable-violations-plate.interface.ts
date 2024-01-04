import { ISelectable } from './selectable.interface';
import { IViolationInvoice } from '../../../interfaces/violationIinvoice.interface';
import { IViolationPlate } from '../../../interfaces/violationPlate.interface';
import { IViolation } from './violation.interface';

export interface ISelectableViolationPlate extends IViolationPlate, ISelectable {
    invoices: (IViolationInvoice & ISelectable)[];
    uninvoicedViolations: (IViolation & ISelectable)[];
    invoicesAndViolaltions: ((IViolation | IViolationInvoice) & ISelectable)[];
}
