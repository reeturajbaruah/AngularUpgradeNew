import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { stateNames as profileStateNames } from 'profile/constants';
import { AuthorizedContact } from 'profile/services';

@Component({
    selector: 'auth-contacts-card',
    templateUrl: './authContactsCard.html',
    styleUrls: ['../profileCards.less', './authContactsCard.less']
})
export class AuthContactsCardComponent implements OnInit{
    @Input() authContactsTitle: string;
    @Input() noAuthContacts: string;
    @Input() authContactsNames: string[];
    @Input() isAccountClosed: boolean;
    @Input() authContacts: AuthorizedContact[];
    @Input() authContactLimit: number;

    constructor(
        private state: StateService
    ) { }

    public totalContacts: number;

    public editAuthorizedContact() {
        const params = {
            authContacts: this.authContacts,
            authContactLimit: this.authContactLimit
        };
        this.state.go(profileStateNames.UpdateAuthorizedContacts, params);
    };

    ngOnInit() {
        this.totalContacts = this.authContactsNames.length;
        if (this.totalContacts > 3) {
            this.authContactsNames = this.authContactsNames.slice(0, 3);
        }
    }
}
