import { AfterViewInit, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { TransactionRecord } from 'accountDashboard/services';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowRef } from 'common/providers';
import { DialogService, DialogContent } from 'common/services';
import { CopyToExcelService } from 'common/services/copyToExcel/copyToExcel.service';
import { TransactionDetailsModalComponent, InjectionValues } from '../transactionDetailsModal/transactionDetailsModal.component';
import { AccountActivityService, WebApisService } from 'accountActivity/services';
import { clone } from 'lodash';
import { LocationCoordinatesResponse } from '../../interfaces';

interface ICmsContent {
    [key: string]: string;
}

@Component({
    selector: 'account-activity-transactions-table',
    templateUrl: './transactionsTable.html',
    styleUrls: ['./transactionsTable.less'],
    providers: [CopyToExcelService]
})
export class TransactionsTableComponent implements AfterViewInit {

    constructor(
        private dialogService: DialogService,
        private sanitizer: DomSanitizer,
        private webApi: WebApisService,
        private accountActivityService: AccountActivityService,
        @Inject(WindowRef) private window: Window,
        private copyToExcelService: CopyToExcelService
    ) { }

    @Input() transactionRecords: TransactionRecord[];
    @Input() showLocationLink: boolean;
    @Input() showPostedDate: boolean;
    @Input() cmsContent: ICmsContent;
    @Input() isLargeAcount: boolean;

    @ViewChild('GridContainer') gridContainer: ElementRef;
    // @ViewChild('GridCopyContainer') gridCopyContainer: ElementRef;

    public async openTransactionRecordDetailsModal(record: TransactionRecord) {

        record = await this.decorateWithLocationCoordinates(record);

        this.dialogService.openSliderFilled(TransactionDetailsModalComponent,
            {
                transactionRecord: record,
                googleMapSrc: this.getMapSrcFor(record),
                hasLocationCoordinates: this.accountActivityService.hasLocationCoordinates(record),
                locationNameWithoutAgencyOrPhone: this.accountActivityService.getLocationNameWithoutAgencyOrPhone(record)
            } as InjectionValues,
            { title: 'Transaction Details' } as DialogContent);
    }

    private getMapSrcFor(record: TransactionRecord & { latitude: number; longitude: number }) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.accountActivityService.hasLocationCoordinates(record)
            ? `https://www.google.com/maps?q=${record.latitude},${record.longitude}&output=embed`
            : '');
    }

    private async decorateWithLocationCoordinates(record: TransactionRecord) {
        const response: LocationCoordinatesResponse = await this.webApi.locationCoordinates({
            laneName: record.laneName
        });

        const recordCopy: TransactionRecord & { latitude: number; longitude: number } = clone(record);

        if (this.accountActivityService.hasLocationCoordinates(response?.coordinates)) {
            recordCopy.latitude = response.coordinates.latitude;
            recordCopy.longitude = response.coordinates.longitude;
        }

        return recordCopy;
    }

    ngAfterViewInit() {

        //To do: complete the requiremeent 85436 first if there is a change in the UI of transactions grid

        const gridElement = this.gridContainer.nativeElement as HTMLElement;

        gridElement.addEventListener('copy', (e) => {

            this.copyToExcelTransctions(e);

        });
    }

    private copyToExcelTransctions(e) {
        const data = this.window.getSelection().toString().split('\n');
        const filterData = data.filter(d => d !== '');

        const range = this.window.getSelection().getRangeAt(0);

        //set start container

        const startContainer = range.startContainer;
        let startEl = startContainer;
        const objRows = [];
        let newStartEl = startEl;

        while (startEl.textContent.trim() !== filterData[0]) {
            startEl = startEl.parentElement.nextElementSibling;
        }

        if (startEl.childNodes.length > 0) {
            if (startEl.firstChild.nodeName === '#text') {
                newStartEl = startEl.firstChild;
            }
        }

        let parentEl = newStartEl.parentElement;

        while (!(parentEl.hasAttribute('name') && parentEl.getAttribute('name') === 'newRow')) {
            parentEl = parentEl.parentElement;
        };

        const divNewrow = parentEl;
        let nextDivNewrow = divNewrow;

        //create first object
        let obj = {} as any;

        const key = newStartEl.parentElement.getAttribute('name');

        obj[key] = filterData[0];


        let nextElement = newStartEl.parentElement.nextElementSibling;

        for (let i = 1; i < filterData.length; i++) {

            while (nextElement.textContent.trim() === '') {
                nextElement = nextElement.nextElementSibling;
            }

            if (filterData[i].trim() !== '' && (nextElement.textContent.trim() === filterData[i].trim())) {

                const key1 = nextElement.getAttribute('name');
                obj[key1] = filterData[i];

                //end of fxrow
                if (nextElement.getAttribute('name') === 'amount') {

                    objRows.push(obj);

                    const newDivNewrow = nextDivNewrow.nextElementSibling;

                    //get to the fxrow
                    if (newDivNewrow !== null) {

                        const newFxRow = newDivNewrow.getElementsByTagName('fx-row')[0];

                        if (newFxRow !== null) {
                            const section = newFxRow.getElementsByTagName('section')[0];
                            if (section.hasAttribute('name') && section.getAttribute('name') === 'transaction-row') {
                                const trnxRow = section;
                                nextElement = trnxRow.children[1];
                                nextDivNewrow = newDivNewrow as HTMLElement;

                            }

                        }
                    }


                    obj = {};
                } else {

                    if (i === filterData.length - 1) {
                        objRows.push(obj);
                    }

                    //move to next sibling
                    if (nextElement.getAttribute('name') === 'description') {
                        nextElement = nextElement.parentElement.nextElementSibling;
                    } else {
                        nextElement = nextElement.nextElementSibling;
                    }
                }
            }

        }

        console.log(objRows);


        const cols = [this.showPostedDate ? 'posted date' : 'transaction date', 'lic. plate', 'nickname', 'location', 'description', 'amount'];
        const newTbl = this.copyToExcelService.getDataForExcel(objRows, cols);

        e.clipboardData.setData('text/plain', newTbl);

        e.preventDefault();

    }

    getDateHeader() {
        return this.showPostedDate ? 'posted date' : 'transaction date';
    }

}
