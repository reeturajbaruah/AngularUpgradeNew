import { Component, Input} from '@angular/core';
import { StateService } from '@uirouter/angular';
import { stateNames as profileStateNames } from 'profile/constants';
import { WebApisService, PersonalInfo, GetContactInfoResponse } from 'profile/services/webApis.service';

@Component({
    selector: 'update-mailing-address-card',
    templateUrl: './updateMailingAddressCard.html',
    styleUrls: ['../profileCards.less', './updateMailingAddressCard.less']
})
export class UpdateMailingAddressCardComponent {
    @Input() mailingInfoTitle: string;
    @Input() mailingInfo: GetContactInfoResponse = {} as GetContactInfoResponse;
    @Input() isAccountClosed: boolean;
    @Input() noMailingAddress: string;
    @Input() isMailingAddress: boolean;
    constructor(
        private state: StateService
    ) { }

    public async updateMailingInfo() {
        await this.state.go(profileStateNames.UpdateMailingAddress, {personalInfo: this.mailingInfo});
    };
}
