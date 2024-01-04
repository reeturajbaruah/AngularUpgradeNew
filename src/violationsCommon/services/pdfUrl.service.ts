import { Injectable } from '@angular/core';


export interface IDownloadPdfRequest {
    agencyId: number;
    invoiceNum: string;
    licensePlate: string;
    licenseState: string;
    mailedDate: string;
    isSuspendedAccount?: boolean;
}

@Injectable()
export abstract class PdfUrlService {   

    abstract getPdfURL(request: IDownloadPdfRequest): string;
}
