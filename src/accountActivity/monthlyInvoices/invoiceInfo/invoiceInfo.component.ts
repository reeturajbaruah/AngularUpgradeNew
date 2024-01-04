import { Component, Input, OnInit } from '@angular/core';
import { AddressInfo } from 'common/models';
import { CurrentUserService } from 'common/services';

@Component({
    selector: 'invoice-info',
    templateUrl: './invoiceInfo.html',
    styleUrls: ['./invoiceInfo.less']
})
export class InvoiceInfoComponent implements OnInit {
    constructor(
        private currentUser: CurrentUserService
    ) { }

    @Input() companyName: string;
    @Input() address: AddressInfo;
    @Input() workPhone: string;
    @Input() homePhone: string;
    @Input() mobile: string;
    @Input() currentMonth: string;
    @Input() invoiceNumber: string;

    public acctId: number;
    public showAddress: boolean;
    public showAddress2: boolean;
    public showAddress3: boolean;
    public showAddress4: boolean;
    public phoneNumber: string;

    ngOnInit() {
        this.acctId = this.currentUser.getCurrentUser()?.acctId;
        this.checkAddress();
        this.assignPhoneNumber();
    }

    checkAddress() {
        if (this.address) {
            if (this.address.address1 &&
                this.address.address1.trim() !== '' &&
                this.address.city &&
                this.address.city.trim() !== '' &&
                this.address.state &&
                this.address.state.trim() !== '' &&
                this.address.zip &&
                this.address.zip.trim() !== '') {
                this.showAddress = true;

                if (this.address.address2 &&
                    this.address.address2.trim() !== '') {
                    this.showAddress2 = true;
                }

                if (this.address.address3 &&
                    this.address.address3.trim() !== '') {
                    this.showAddress3 = true;
                }

                if (this.address.address4 &&
                    this.address.address4.trim() !== '') {
                    this.showAddress4 = true;
                }
            }
        }
    }

    assignPhoneNumber() {
        if (this.workPhone && this.workPhone.trim() !== '') {
            this.phoneNumber = this.workPhone;
            return;
        }

        if (this.homePhone && this.homePhone.trim() !== '') {
            this.phoneNumber = this.homePhone;
            return;
        }

        if (this.mobile && this.mobile.trim() !== '') {
            this.phoneNumber = this.mobile;
            return;
        }
    }
}
