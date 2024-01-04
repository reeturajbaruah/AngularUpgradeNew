import { Component, OnInit, Inject } from '@angular/core';
import { DialogRef, DownloadService } from 'common/services';
import { PdfUrlService } from 'violationsCommon/services/pdfUrl.service';
import { WebApisService } from 'violationsCommon/services/webapi/webApis.service';
import { IInjectionValues } from './interfaces/injectionvalues.interface';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { Decimal } from 'decimal.js-light';

@Component({
    selector: 'violations-invoiced-details',
    templateUrl: './invoicedDetails.component.html',
    styleUrls: ['./invoicedDetails.component.less'],
    providers: [
        DownloadService,
        { provide: PdfUrlService, useExisting: WebApisService }
    ]
})
export class InvoicedDetailsComponent implements OnInit {

    showPdfBtn: boolean;

    constructor(
        private dialogRef: DialogRef<IInjectionValues>,
        private pdfUrlService: PdfUrlService,
        private downloadService: DownloadService,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    public data = {} as IInjectionValues;
    public showAdjustments: boolean;
    public adjustmentAmt: number | Decimal;
    get isDownloadBusy() {
        return this.downloadService.isBusy;
    }

    public close() {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.data = { ...this.dialogRef.data };
        this.showAdjustments = this.data.invoiced.excusalAmt != null && this.data.isPreviousPaid ?
            (this.data.invoiced.invoiceLevelDiscount + this.data.invoiced.excusalAmt !== 0) :
            (this.data.invoiced.excusalAmt !== 0);
        this.showPdfBtn = !this.data.invoiced.invoiceNum?.includes('*');

        if (this.environmentConfig.isMergeMATandVioOn) {           
            this.adjustmentAmt = new Decimal(this.data.invoiced.excusalAmt).plus(this.data.isPreviousPaid ? this.data.invoiced.invoiceLevelDiscount : 0).times(-1);
        } else {
            this.adjustmentAmt = (this.data.invoiced.excusalAmt + (this.data.isPreviousPaid ? this.data.invoiced.invoiceLevelDiscount : 0)) * -1;
        }
    }

    getInvoicePdf() {

        const { invoiceNum, agencyId, mailedDate } = this.data.invoiced;

        const url = this.pdfUrlService.getPdfURL({
            licensePlate: this.data.plate.number,
            licenseState: this.data.plate.state,
            isSuspendedAccount: this.data.isSuspendedAccount,
            invoiceNum,
            agencyId,
            mailedDate            
        });

        this.downloadService.download(url, true);
    }
}
