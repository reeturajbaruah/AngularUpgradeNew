import {
    Component, Input, Output, OnInit, OnChanges, ViewChild, EventEmitter,
    ElementRef, SimpleChanges
} from '@angular/core';

import { NgForm, ControlContainer } from '@angular/forms';

import { AddressInfo, BillingType, State, Country } from 'common/models';

import { CountryConversionService } from 'common/conversions';
import { BillingInfoUtilitiesService } from 'common/billing/billingInfoUtilities.service';
import { cloneDeep, isEqual } from 'common/utilities';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { AccountService } from 'common/services';


@Component({
    selector: 'address-entry',
    templateUrl: './addressEntry.html',
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class AddressEntryComponent implements OnInit, OnChanges {

    //@host decorator was removed for form due to issue with IVY. see https://github.com/angular/angular/issues/31539
    constructor(
        private form: NgForm,
        private billingInfoUtilitiesService: BillingInfoUtilitiesService,
        private countryConversionService: CountryConversionService,
        private authenticationService: AuthenticationService,
        private accountService: AccountService,
    ) { }

    @ViewChild('header', { static: false }) header: ElementRef;

    @Input() legacy?: boolean;
    @Input() name: string;
    @Input() address: AddressInfo;
    @Input() mailingAddress: AddressInfo;
    @Input() stateList: State[];
    @Input() countryList: Country[];

    @Input() addressType: string;

    @Input() billingType?: BillingType;
    public readonly BillingType = BillingType;

    @Input() validate: boolean;
    @Input() international: boolean;
    @Output() internationalChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public showSameAddress: boolean;
    public checkStatus: boolean;

    private tempBillingAddress: AddressInfo = {
        address1: '',
        city: '',
        country: ''
    };

    get headerOverride(): boolean {
        if (!this.header) {
            return false;
        }

        const t: HTMLElement = this.header.nativeElement;
        const elm = t.querySelector('[override-header]');
        return elm !== null && elm.children.length > 0;
    }

    get submitted(): boolean {
        return this.form.submitted;
    }

    async ngOnInit() {

        this.setCorrectState();

        if (!this.billingInfoUtilitiesService.isInternationalAddress(this.address)) {
            this.address.country = '';

            //this is for temporary foreign address changes
            if (!this.legacy) {
                this.address.country = 'USA';
                this.address.displayCountry = 'USA';
                this.international = false;
            }
        } else if (this.address.country && Array.isArray(this.countryList) && this.countryList.length > 0) {
            // exisiting Ws Issue prevents sometimes assigns 
            // countryCode a countryName.Have to manually assign the countryCode.See Bug 7484.

            this.address.country = this.countryConversionService
                .countryNameToCode(this.countryList, this.address.country)
                || this.address.country;

            this.address.displayCountry = this.countryConversionService
                .countryCodeToName(this.countryList, this.address.country);

            this.address.international = true;
        }
        
        const mailingInfo = await this.accountService.getMailingInfo();        

        this.showSameAddress = !!this.mailingAddress && mailingInfo?.address1 != null;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.billingType) {
            this.setCorrectState();
        }
        
        if (changes.mailingAddress && changes.mailingAddress.currentValue) {
            this.mailingAddress = changes.mailingAddress.currentValue;
            this.setSameAsMailing();
        }
    }

    private setCorrectState() {
        if ((this.legacy && !this.address.state)
            || (!this.legacy && !this.billingInfoUtilitiesService.isInternationalAddress(this.address) && !this.address.state)) {
            this.address.state = 'TX';
        }
    }

    public checkSameAddress = (newValue: boolean) => {
        this.checkStatus = newValue;
        if (this.checkStatus) {

            this.saveTempBillingAddress(this.international);
            //uncheck international box if domestic
            const {
                address1, address2, address3, address4,
                city, state, zip, plus4, country
            } = this.mailingAddress;

            if (this.mailingAddress.city) {
                this.international = false;

                Object.assign(this.address, {
                    address1, address2,
                    city, state, zip, plus4, country
                });

            } else if (this.mailingAddress.country) {
                this.international = true;

                Object.assign(this.address, {
                    address1, address2, address3, address4, country
                });
            }
        } else {
            this.loadTempBillingAddress();
            this.address.country = 'USA';
            this.address.state = 'TX';
        }
    };

    private saveTempBillingAddress = (isInternational) => {
        this.tempBillingAddress.international = this.international;

        const {
            address1, address2, address3, address4,
            city, state, zip, plus4, country
        } = this.address;

        Object.assign(this.tempBillingAddress, {
            address1, address2
        });

        if (isInternational) {
            Object.assign(this.tempBillingAddress, {
                address3, address4, country
            });
        } else {
            Object.assign(this.tempBillingAddress, {
                city, state, zip, plus4
            });
        }
    };

    private loadTempBillingAddress = () => {

        const {
            international,
            address1, address2, address3, address4,
            country,
            city, state, zip, plus4
        } = this.tempBillingAddress;

        this.international = international;
        Object.assign(this.address, { address1, address2 });

        if (international) {
            Object.assign(this.address, {
                address3, address4, country
            });
        } else {
            Object.assign(this.address, {
                city, state, zip, plus4
            });
        }
        //Empty all the address input's when uncheck-Same as mailing address
        Object.keys(this.address).forEach((i) => this.address[i] = null);
    };


    public checkInternationalBox = (newValue: boolean) => {
        this.international = newValue;
        this.checkStatus = false;
        Object.assign(this.address, {
            address1: '',
            address2: '',
            city: '',
            state: 'TX',
            zip: '',
            plus4: '',
            country: '',
            address3: '',
            address4: ''
        });

        //this.international = !(this.international);
        this.internationalChange.emit(this.international);
    };

    public countryChanged = () => {
        const newValueInternational = this.billingInfoUtilitiesService.isInternationalAddress(this.address);
        if (newValueInternational !== this.international) {
            this.address.state = '';
        }
        this.international = newValueInternational;
        if (this.international && Array.isArray(this.countryList) && this.countryList.length > 0) {
            this.address.displayCountry = this.countryConversionService.countryCodeToName(this.countryList, this.address.country);
        } else {
            if (this.legacy) {
                this.address.country = null;
            } else {
                this.address.state = 'TX';
                this.address.displayCountry = this.countryConversionService.countryCodeToName(this.countryList, this.address.country);
            }
        }
        this.internationalChange.emit(this.international);
        this.address.international = this.international;

    };

    private setSameAsMailing() {
        this.showSameAddress = !!this.mailingAddress && this.authenticationService.isAuthenticated();

        const mailingAddress: AddressInfo = cloneDeep(this.mailingAddress);
        const address: AddressInfo = cloneDeep(this.address);

        delete mailingAddress[`displayCountry`];
        delete mailingAddress[`address3`];
        delete mailingAddress[`address4`];
        delete address[`displayCountry`];
        delete address[`address3`];
        delete address[`address4`];

        this.checkStatus = isEqual(mailingAddress, address);
    }
}
