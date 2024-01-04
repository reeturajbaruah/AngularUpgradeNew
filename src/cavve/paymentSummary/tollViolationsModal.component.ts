import { Component, Inject, OnInit } from '@angular/core';
import { isString, isNumber, isDate } from 'lodash';

import { DialogRef } from 'common/services';
import { ITollSummary } from 'cavve/interfaces';

import { EOViolationPlateContainer } from 'frp3/interfaces';
import { IViolation } from 'violationsCommon/components/violationsDetails/interfaces/violation.interface';
import { ViolationPlate, ViolationInvoice } from 'violations/interfaces';
import { ENVIRON_CONFIG } from 'common/upgrades';

export interface InjectionValues {
    tollSummaryDetails: ITollSummary;
    plate: ViolationPlate;
}

@Component({
    selector: 'cavve-toll-violations-modal',
    templateUrl: './tollViolationsModal.html',
    styleUrls: ['./tollViolationsModal.less']
})
export class TollViolationsModalComponent implements OnInit {
    constructor(
        private dialogRef: DialogRef<InjectionValues>,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    public data = {} as InjectionValues;

    public plate: ViolationPlate;
    public invoices: ViolationInvoice[];
    public unInvoiced: IViolation[];
    public totalAmount: string;
    public recordsFound: number;

    public plateContainer: EOViolationPlateContainer;

    public close() {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.data = { ...this.dialogRef.data };
        this.plate = this.data.plate; 

        this.invoices = this.sortInvoices(this.plate.invoices);
        this.unInvoiced = this.environmentConfig.isMergeMATandVioOn ? this.plate.uninvoicedViolations : [];
      
        this.totalAmount = this.data.tollSummaryDetails.totalViolationsDue;
        this.recordsFound = this.environmentConfig.isMergeMATandVioOn ? this.invoices.length + this.unInvoiced.length : this.invoices.length; 
    }

    private sortInvoices = (invoices: ViolationInvoice[]) => [...invoices].sort((a, b) => {
            if (a.agencyName === b.agencyName) {
                if (!isString(a.dueDate) && !isNumber(a.dueDate)
                    && !isDate(a.dueDate)) {
                    return -1;
                }

                if (!isString(b.dueDate) && !isNumber(b.dueDate)
                    && !isDate(b.dueDate)) {
                    return 1;
                }

                const aDate = new Date(a.dueDate);
                const bDate = new Date(b.dueDate);
                if (aDate > bDate) {
                    return 1;
                }
                return -1;
            } else if (a.agencyName === 'h'
                || (a.agencyName === 'f' && b.agencyName !== 'h')) {
                return -1;
            } else if ((a.agencyName === 'f' && b.agencyName === 'h')
                || a.agencyName === 'm') {
                return 1;
            }
            return 0;
        });
}
