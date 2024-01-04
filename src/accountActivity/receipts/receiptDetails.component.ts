import { Component, OnInit } from '@angular/core';
import { CurrentUser, CurrentUserService, DialogRef, DownloadService } from 'common/services';
import {  ReceiptDetailsResponse } from '../interfaces';


export interface IInjectionValues {
    transactionNumber: any;
    response: ReceiptDetailsResponse;
}

@Component({
    selector: 'receipt-details',
    templateUrl: './receiptDetails.html',
    styleUrls: ['./receiptDetails.less']
})


export class ReceiptDetailsComponent implements OnInit {
    public receiptDetails: ReceiptDetailsResponse;
    public accountTrans: string[];
    public depositTrans: string[];
    public paymentDetail: string[];
    public receiptDate: string;
    public csrID: string;
    public userAddress: string;
    public city: string;
    public state: string;
    public zipCode: string;
    public label1: string;
    public label2: string;
    public label3: string;
    public data = {} as IInjectionValues;
    public currentUserData: CurrentUser;
    public reportDownloading = false;

    constructor(
        private dialogRef: DialogRef<IInjectionValues>,
        private downloadService: DownloadService,
        private currentUser: CurrentUserService
    ) { }

    async ngOnInit() {
        await this.getInfoToDisplay();
    }

    public async getInfoToDisplay() {
        this.data = this.dialogRef.data;
        this.currentUserData = this.currentUser.getCurrentUser();

        const response = this.data.response; 

        this.receiptDetails = response;
        this.accountTrans = response.accountTrans;
        this.depositTrans = response.depositTrans;
        this.paymentDetail = response.paymentDetail;
        this.receiptDate = response.receiptDate;
        this.csrID = response.csrId;
        this.userAddress = response.userAddress.address1;
        this.city = response.userAddress.city;
        this.state = response.userAddress.state;
        this.zipCode = response.userAddress.zip;
        this.label1 = 'Harris County Toll Road Authority';
        this.label2 = '7701 Wilshire Place Drive';
        this.label3 = 'Houston, Texas 77040';
    }


    public async getReceiptDetailPdf() {
        const url = '/api/sessions/Pdf/GetReceiptPdfReport/';
        await this.downloadReport(url, true);
    };

    private async downloadReport(url: string, isPdf: boolean) {
        this.reportDownloading = true;

        await this.downloadService.download(url, isPdf, {
            transNum: this.data.transactionNumber
        });

        this.reportDownloading = false;
    }
}
