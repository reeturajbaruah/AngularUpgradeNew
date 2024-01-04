import { Component, OnInit } from '@angular/core';
import { DialogRef, DownloadService } from 'common/services';
import { ViolationInvoice } from '../../interfaces';
import { PdfUrlService } from 'violationsCommon/services/pdfUrl.service';
import { WebApisService } from 'violationsCommon/services/webapi/webApis.service';


export interface InjectionValues {
    invoiced: ViolationInvoice;
    // eslint-disable-next-line id-blacklist
    plate: { state: string; number: string };
    isPreviousPaid: boolean;
}

@Component({
    selector: 'violations-invoiced-details',
    templateUrl: './invoicedDetailsModal.html',
    styleUrls: ['./invoicedDetailsModal.less'],
    providers: [
        DownloadService,
        { provide: PdfUrlService, useExisting: WebApisService }
    ]
})
export class InvoicedDetailsModalComponent implements OnInit {

    constructor(
        private dialogRef: DialogRef<InjectionValues>,
        private pdfUrlService: PdfUrlService,
        private downloadService: DownloadService
    ) { }

    public data = {} as InjectionValues;
    public showAdjustments: boolean;
    public adjustmentAmt: number;
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
        this.adjustmentAmt = this.data.invoiced.excusalAmt + (this.data.isPreviousPaid ? this.data.invoiced.invoiceLevelDiscount : 0);
    }

    getInvoicePdf() {

        const { invoiceNum, agencyId, mailedDate } = this.data.invoiced;

        const url = this.pdfUrlService.getPdfURL({
            licensePlate: this.data.plate.number,
            licenseState: this.data.plate.state,
            invoiceNum,
            agencyId,
            mailedDate
        });

        this.downloadService.download(url, true);
    }
}
