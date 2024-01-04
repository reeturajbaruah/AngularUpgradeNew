import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CmsResolverService } from 'cms/services';
import { PhoneNumberCMSContent } from '../interfaces/phone-number.interface';
import { PhoneNumberCMSId } from '../constants';

@Component({
    selector: 'shared-phone-number',
    templateUrl: 'phone-number.component.html',
    styleUrls: ['phone-number.component.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})

export class PhoneNumberComponent implements OnInit {
    @Input() prefix = '';
    @Input() required = true;

    @Input() phoneNumberHeader?: string;
    @Input() phoneNumber?: string;
    @Output() phoneNumberChange?: EventEmitter<string> = new EventEmitter<string>();

    @Input() showPhoneNumberExt?: boolean;
    @Input() phoneNumberExtHeader?: string;
    @Input() phoneNumberExt?: string;
    @Output() phoneNumberExtChange?: EventEmitter<string> = new EventEmitter<string>();

    @Input() showTrashIcon?: boolean;
    @Input() disableTrashIcon?: boolean;
    @Output() trashClicked?: EventEmitter<void> = new EventEmitter<void>();

    cmsContent: PhoneNumberCMSContent;

    get phoneInputName() {
        return this.prefix + '-phone-number';
    }

    get phoneExtInputName() {
        return this.prefix + '-phone-number-ext';
    }

    get submitted(): boolean {
        return this.form.submitted;
    }

    constructor(
        public form: NgForm,
        private cmsResolverService: CmsResolverService      
    ) { }

    async ngOnInit() {
        this.cmsContent = await this.cmsResolverService.resolve({
            ItemId: PhoneNumberCMSId.PhoneNumber,
            mergeParams: true
        }) as PhoneNumberCMSContent;

        if (!this.phoneNumberHeader) {
            this.phoneNumberHeader = this.cmsContent.PhoneNumberDefaultHeader;
        }
      
        if (!this.phoneNumberExtHeader) {
            this.phoneNumberExtHeader = this.cmsContent.PhoneExtensionDefaultHeader;
        }
    }

    updatePhoneNumber(): void {
        this.phoneNumber = this.formatPhoneNumber(this.phoneNumber);
        this.phoneNumberChange.emit(this.phoneNumber);
    }

    private formatPhoneNumber(phoneNumber: string): string {
        const cleanedNumber = phoneNumber.replace(/-/g, '');
        const areaCode = cleanedNumber.slice(0, 3);
        const midDigits = cleanedNumber.slice(3, 6);
        const lastDigits = cleanedNumber.slice(6, 10);
        return areaCode + (midDigits ? '-' + midDigits : '') + (lastDigits ? '-' + lastDigits : '');
    }

    updatePhoneNumberExt(): void {
        this.phoneNumberExtChange.emit(this.phoneNumberExt);
    }

    deleteAltPhone() {
        this.trashClicked.emit();
    }
}
