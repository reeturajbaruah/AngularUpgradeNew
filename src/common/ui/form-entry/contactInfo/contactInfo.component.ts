import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { ICreateAccountContactInfo, PhoneType, ICreateAccountAddressInfo, IContactInfoCmsData } from 'common/models';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { SyncRiteToggles } from 'shared/interfaces/toggles/sync-rite-toggles.interface';

@Component({
    selector: 'contact-info-form-entry',
    templateUrl: './contactInfo.html',
    styleUrls: ['./contactInfo.less'],
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: NgForm
        }
    ]
})
export class ContactInfoComponent implements OnInit {

    constructor(private form: NgForm, @Inject(ENVIRON_CONFIG) public environmentConfig) {
    }

    PhoneType = PhoneType;
    @Input() contactInfoData: ICreateAccountContactInfo & ICreateAccountAddressInfo & IContactInfoCmsData ;
    @Output() primaryPhoneChange: EventEmitter<string> = new EventEmitter<string>();
    syncRiteToggles: SyncRiteToggles;

    get submitted(): boolean {
        return this.form.submitted;
    }

    ngOnInit() {
        this.syncRiteToggles = this.environmentConfig.syncRiteToggles;
        if (this.syncRiteToggles.SyncRitePhoneOptIn) {
            this.contactInfoData.smsAlertsOptIn = true;
        }
    }
}
