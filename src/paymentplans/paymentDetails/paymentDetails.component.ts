import { Component, Input, Inject, Optional } from '@angular/core';
import { PaymentPlanInfo } from '../services';
import { PdfCmsContent, CmsGridContent } from '../interfaces';
import { StateService } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { DateWithTimeZoneService, DialogRef, DownloadService } from 'common/services';

export interface InjectedData {
    details: PaymentPlanInfo;
    cmsContent: { pdf: PdfCmsContent; data: CmsGridContent };
    isEzTagFlow: boolean;
}

type AutoPayData = {
    autoPayFlag: boolean;
    autoPayData: string;
};

import { OperatingSystemSnifferService } from 'common/services';


@Component({
    selector: 'payment-details',
    templateUrl: './paymentDetails.html',
    styleUrls: ['./paymentDetails.less']
})
export class PaymentDetailsComponent {

    constructor(       
        private dateWithTimeZoneService: DateWithTimeZoneService,
        private operatingSystemSnifferService: OperatingSystemSnifferService,
        private stateService: StateService,
        @Optional() private dialogRef: DialogRef<InjectedData>,
        private downloadService: DownloadService) {

        if (dialogRef) {
            this.details = dialogRef.data.details;
            this.cmsContent = dialogRef.data.cmsContent;
            this.isEzTagFlow = dialogRef.data.isEzTagFlow;
        }
    }
    
    @Input() details: PaymentPlanInfo;
    @Input() cmsContent: { pdf: PdfCmsContent; data: CmsGridContent };
    @Input() isEzTagFlow: boolean;
    
    public pdfProcessing = false;
    public isDownloadingPdf: boolean;

    public get autoPayInfo(): AutoPayData {
        return this.checkAutoPay();
    }

    public get isFullsite(): boolean {
        return this.operatingSystemSnifferService.isDesktopOs();
    }

    public get progress(): number {
        return this.details ? Math.round(100 * (this.details.paidAmount / this.details.settlementAmount)) : 0;
    }

    public get isPastDue(): boolean {
        if (!this.details || !this.details.nextInstallmentDate) {
            return false;
        }

        const today = new Date();
        const dueDate = new Date(this.details.nextInstallmentDate);

        return new Date(today.getFullYear(), today.getMonth(), today.getDate()) > dueDate
            && this.details.nextInstallmentAmount > 0;
    }

    public get formattedDueDate(): string {
        if (this.details && this.details.status === 'Closed') {
            return 'None';
        }
        
        if (!this.details || !this.details.nextInstallmentDate) {
            return 'None';
        }

        const formattedDate = this.dateWithTimeZoneService.withoutOffsetToCentral(this.details.nextInstallmentDate, 'MMM Do, YYYY z');
        if (formattedDate === 'Invalid date') {
            return 'None';
        }
        return formattedDate;
    }

    public downloadPdf = () => {

        const url = this.isEzTagFlow ? 'api/sessions/Pdf/GetPaymentPlanAccountPdf' : 'api/sessions/Pdf/GetPaymentPlanPdf';
           
        this.downloadService.download(url, true,
            {
                paymentPlanId: this.details.paymentPlanId
            },
            {
                busy: this.cmsContent.pdf.pdfProcessingMesssage,
                failure: this.cmsContent.pdf.pdfError,
                success: this.cmsContent.pdf.pdfDownloadedMessage
            }, 100000);
        

    };

    public checkAutoPay(): AutoPayData {
        if (this.details && this.details.billingMethod && this.details.billingMethod.creditCardPaymentMethod != null) {
            return {
                autoPayFlag: true,
                autoPayData: '****' + this.details.billingMethod.creditCardPaymentMethod.cardNbr.slice(-4)
            };
        } else if (this.details && this.details.billingMethod && this.details.billingMethod.eftPaymentMethod != null) {
            return {
                autoPayFlag: true,
                autoPayData: '****' + this.details.billingMethod.eftPaymentMethod.accountNumber.slice(-4)
            };
        }

        return {
                autoPayFlag: false,
                autoPayData: ''
            };
    };

    public continueWithPayment(nextState: StateConfig) {

        this.stateService
            .go(nextState)
            .then(() => this.dialogRef && this.dialogRef.close());

    }
}
