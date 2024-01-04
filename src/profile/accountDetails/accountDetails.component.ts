import { Component, Input, OnInit, Inject } from '@angular/core';
import { WebApisService, GetAccountInformationResponse, GetAuthContactResponse, GetContactInfoResponse } from 'profile/services/webApis.service';
import { from, Observable } from 'rxjs';
import { CurrentUserService, CurrentUser, AccountService, IsInvoicedService } from 'common/services';
import { BillingCMS } from 'accountDashboard/frame/frame.component';
import { SiteCoreItem } from '../../cms/cms.module';
import { ContactInfoCardCMSContent } from './display cards/updateContactInfoCard/interfaces/update-contact-info-card.interface';

export interface CloseAccountModalCms {
    ModalTitle: string;
    LongDescription: string;
    CloseButtonText: string;
    ContinueButtonText: string;
}

interface ProfileCMSData {
    Title: string;
    PROFILE_SUB: string;
    SETTINGS_TITLE: string;
    SETTINGS_SUB: string;
    CONTACT_INFO_TITLE: string;
    MAILING_ADDRESS_TITLE: string;
    AUTH_CONTACT_TITLE: string;
    UPDATE_LOGIN_TITLE: string;
    BILLING_TITLE: string;
    REBILL_AMT_TITLE: string;
    COM_PREFERENCES_TITLE: string;
    REBILL_AMT_CONTEXT: string;
    STATEMENTS_PREFERENCES: string;
    ACCOUNT_UPDATES_PREFENCES: string;
    AUTH_CONTACTS_NONE: string;
    COM_PREFERENCES_TOASTER: string;
    CLOSURE_SUB: string;
    NO_AUTH_CONTACTS: string;
    COM_PREF_NO_MAILING: string;
    NO_MAILING_ADDRESS: string;
}

@Component({
    selector: 'account-details-component',
    templateUrl: './accountDetails.html',
    styleUrls: ['./accountDetails.less']
})
export class AccountDetailsComponent implements OnInit {

    constructor(
        private webApi: WebApisService,
        private currentUserService: CurrentUserService,
        private isInvoicedService: IsInvoicedService,
        private accountService: AccountService,
    ) { }

    @Input() public cmsProfileContent: ProfileCMSData;
    @Input() public closeAccountModalCms: CloseAccountModalCms;
    @Input() public contactInfoCardCMSContent: ContactInfoCardCMSContent;
    @Input() public paymentMethodImages: string;

    @Input() public billingCMS: BillingCMS;
    @Input() public autoReplenishCms: SiteCoreItem;

    public accountData$: Observable<GetAccountInformationResponse>;
    public authContacts$: Observable<GetAuthContactResponse>;
    public contactInfo$: Observable<GetContactInfoResponse>;
    public currentUser: CurrentUser;
    public isAccountClosed: boolean;
    public isAccountInvoiced: boolean;
    public isHideByMail: boolean;

    private checkIfAccountClosed() {
        if (this.currentUser === null || this.currentUser.acctActivity === 'I') {
            return true;
        }
        return false;
    }

    async ngOnInit() {
        this.accountData$ = from(this.webApi.getAccountInfo());
        this.authContacts$ = from(this.webApi.getAuthContacts());
        this.contactInfo$ = from(this.accountService.getContactInfo());
        this.currentUser = this.currentUserService.getCurrentUser();
        this.isHideByMail = (await this.accountService.getMailingInfo()).address1 === null;
        this.isAccountClosed = this.checkIfAccountClosed();
        this.isAccountInvoiced = this.isInvoicedService.isAccountInvoiced();
    };
}
