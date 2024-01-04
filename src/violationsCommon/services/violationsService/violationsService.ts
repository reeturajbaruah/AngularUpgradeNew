import { Injectable } from '@angular/core';
import { IViolationInvoice } from '../../interfaces/violationIinvoice.interface';
import { IViolationPlate } from '../../interfaces/violationPlate.interface';

@Injectable()
export class ViolationsService {

    constructor(
    ) { }

    public replaceNullsInViolationPlate({ uninvoicedViolations, invoices, previouslyPaidInvoices, ...rest }: IViolationPlate): IViolationPlate {

        const fixInvoices = (_invoices: IViolationInvoice[]): IViolationInvoice[] =>
            (_invoices || [])
                .map(({ violations, ...others }) => ({
                    violations: violations || [],
                    ...others
                }));

        return {
            uninvoicedViolations: uninvoicedViolations || [],
            invoices: fixInvoices(invoices),
            previouslyPaidInvoices: fixInvoices(previouslyPaidInvoices),
            ...rest
        };
    }
}
