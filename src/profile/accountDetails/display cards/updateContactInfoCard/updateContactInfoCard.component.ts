import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { PhoneNumberPipe } from 'pipes/phoneNumber/phoneNumber.pipe';
import { stateNames as profileStateNames } from 'profile/constants';
import { GetContactInfoResponse } from 'profile/services/webApis.service';
import { ContactInfoCardCMSContent } from './interfaces/update-contact-info-card.interface';
@Component({
    selector: 'update-contact-info-card',
    templateUrl: './updateContactInfoCard.html',
    styleUrls: ['../profileCards.less', './updateContactInfoCard.less']
})
export class UpdateContactInfoCardComponent implements OnInit {
    @Input() contactInfoTitle: string;
    @Input() cmsContent: ContactInfoCardCMSContent;
    @Input() contactInfo: GetContactInfoResponse = {} as GetContactInfoResponse;
    @Input() isAccountClosed: boolean;

    constructor(private state: StateService, private phoneNumberPipe: PhoneNumberPipe,) { }

    ngOnInit() {
        this.formatPhoneNumber();
    }

    updateContactInfo() {
        this.state.go(profileStateNames.UpdateContactInformation, { personalInfo: this.contactInfo });
    }

    trimEmail(email: string): string {
        let trimmedEmail = email;

        if (email.length > 35) {
            trimmedEmail = email.slice(0, 12) + '...' + email.slice(-12);
        }

        return trimmedEmail;
    }

    private formatPhoneNumber() {
        this.contactInfo.contactInfo.phoneNumber = this.phoneNumberPipe.transform(this.contactInfo.contactInfo.phoneNumber);
        this.contactInfo.contactInfo.workPhoNbr = this.phoneNumberPipe.transform(this.contactInfo.contactInfo.workPhoNbr);
        this.contactInfo.contactInfo.mobilePhoNbr = this.phoneNumberPipe.transform(this.contactInfo.contactInfo.mobilePhoNbr);
    }
}
