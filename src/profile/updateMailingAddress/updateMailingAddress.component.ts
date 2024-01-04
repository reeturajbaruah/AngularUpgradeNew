import { Component, OnInit, Input } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { WebApisService, GetContactInfoResponse, SetContactInfoRequest } from 'profile/services/webApis.service';
import { stateNames as profileStateNames } from 'profile/constants';
import { NgForm } from '@angular/forms';
import { AccountService, DialogService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { SiteCoreItem } from 'cms/cms.module';

export interface MailingAddressCMSContent {
    Title: string;
    LongDescription: string;
    Children: SiteCoreItem[];
}

@Component({
    selector: 'update-mailing-address',
    templateUrl: './updateMailingAddress.html',
    styleUrls: ['./updateMailingAddress.less']
})
export class UpdateMailingAddressComponent implements OnInit{
    @Input() public cmsContent: MailingAddressCMSContent;
    @Input() public stateList: { stateCode: string }[];
    @Input() public countryList: { countryCode: string; displayName: string }[];

    public mailingAddressCMS: string;
    public isInternational: boolean;
    public fullContactInfo: GetContactInfoResponse;
    public requestInfo: SetContactInfoRequest = {} as SetContactInfoRequest;

    constructor(
        private webApi: WebApisService,
        private state: StateService,
        private uiRouterGlobals: UIRouterGlobals,
        private dialogService: DialogService,
        private accountService: AccountService,
    ) { }

    async ngOnInit() {
        this.fullContactInfo = this.uiRouterGlobals.params.personalInfo as GetContactInfoResponse;

        if (!this.fullContactInfo) {
            this.fullContactInfo = await this.accountService.getContactInfo();
        }
    }

    public cancel() {
        this.state.go(profileStateNames.AccountDetails);
    }

    public async submit(form: NgForm) {
        if (!form.valid) { return; }

        this.requestInfo.mailingAddress = this.fullContactInfo.mailingAddress;
        this.requestInfo.contactInfo = this.fullContactInfo.contactInfo;
        this.requestInfo.personalInfo = this.fullContactInfo.personalInfo;

        await this.webApi.setContactInfo(this.requestInfo);

        const modalCms = this.cmsContent.Children[0];
        const data = {
            cmsContent: {
                Title: modalCms.Title,
                AcceptBtn: 'OKAY',
                PrimaryContent: modalCms.ShortDescription
            }
        };

        await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);

        await this.state.go(profileStateNames.AccountDetails);
    }
}
