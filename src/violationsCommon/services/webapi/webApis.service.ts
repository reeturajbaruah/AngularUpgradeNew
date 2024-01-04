import { Injectable, Inject } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { PdfUrlService, IDownloadPdfRequest } from '../pdfUrl.service';
import { IViolationPlateContainer } from '../../interfaces/violationPlateContainer.interface';
import { IAcctSearchResponse, IPlateSearchResponse, IViolationRequest } from './interfaces/webapi.interface';
import { EOViolationPlateContainer } from 'frp3/interfaces';
import { HttpService } from '../../../common/services/httpService/http.service';

@Injectable()
export class WebApisService implements PdfUrlService {

    constructor(
        private httpService: HttpService
    ) { }

    private baseUrl = (licensePlate, licenseState, isSuspended) =>
        `/api/violator${isSuspended ? '/suspended' : ''}/plate/${licensePlate.toUpperCase()}-${licenseState.toUpperCase()}`;

    private acctBaseUrl = (licensePlate, licenseState) =>
        `/api/violator/account/${licensePlate.toUpperCase()}-${licenseState.toUpperCase()}`;

    public searchForViolations({ licensePlate, licenseState, invoiceNumber }: IViolationRequest): Promise<IPlateSearchResponse> {
        const url = `${this.baseUrl(licensePlate, licenseState, false)}?invoiceNum=${invoiceNumber}`;

        return this.httpService.get(url);
    }

    public searchForViolationAcct({ licensePlate, licenseState, invoiceNumber, research }: IViolationRequest): Promise<IAcctSearchResponse> {
        return this.httpService.get(`${this.acctBaseUrl(licensePlate, licenseState)}?invoiceNum=${invoiceNumber === '' ? '\"\"' : invoiceNumber}&research=${research ?? false}`);
    }

    public getPdfURL({ licensePlate, licenseState, invoiceNum, agencyId, mailedDate, isSuspendedAccount }: IDownloadPdfRequest): string {
        return `${this.baseUrl(licensePlate, licenseState, isSuspendedAccount)}/invoices/${invoiceNum}-${agencyId}/${mailedDate ? 'pdf' : 'report'}`;
    }

    public makePayment(paymentRequest: IViolationPlateContainer): Promise<BaseResponse> {

        const { licenseState, licensePlate } = paymentRequest.plate;
        const url =
            `${this.baseUrl(licensePlate, licenseState, false)}/payment`;

        return this.httpService.post(url, paymentRequest);
    }

    public makeMultiPayment(paymentRequest: EOViolationPlateContainer): Promise<BaseResponse> {

        const { licenseState, licensePlate } = paymentRequest.plate;
        const url =
            `${this.acctBaseUrl(licensePlate, licenseState)}/payment/multi`;

        return this.httpService.post(url, paymentRequest);
    }
}
