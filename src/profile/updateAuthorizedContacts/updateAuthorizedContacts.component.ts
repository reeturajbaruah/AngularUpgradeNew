import { Component, Inject, OnInit, Input } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { AuthorizedContact, AuthorizedContactDetails, WebApisService as ProfileWebApisService } from 'profile/services';
import { stateNames as profileStateNames } from 'profile/constants';
import { NgForm } from '@angular/forms';
import { DialogService, DialogContent } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues, WizardComponent } from 'common/ui';
import { AuthorizedContactModalComponent, InjectionValues as AuthorizedContactModalInjectionValues } from './authorizedContactModal/authorizedContactModal.component';
import { isEqual } from 'lodash';
import { SiteCoreItem } from 'cms/cms.module';
import { AccountDetailsComponent } from '../accountDetails/accountDetails.component';
import { ResponseErrorService } from 'common/services';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

export interface Removable {
    remove: boolean;
}

export interface UpdateAuthorizedContactCMS {
    MAIN_HEADER: string;
    MAIN_INFO: string;
    ADD_BUTTON: string;
    PASSWORD_INFO: string;
    TOOL_TIP_INFO: string;
    ADD_CONTACT_TITLE: string;
    EDIT_CONTACT_TITLE: string;
    MODAL_HEADER: string;
    MAX_LIMIT: string;
    ShortDescription: string;
    LongDescription: string;
    Children: SiteCoreItem[];
}

@Component({
    selector: 'update-authorized-contacts',
    templateUrl: './updateAuthorizedContacts.html',
    styleUrls: ['./updateAuthorizedContacts.less']
})
export class UpdateAuthorizedContactsComponent implements OnInit {
    constructor(
        private uiRouterGlobals: UIRouterGlobals,
        private webApis: ProfileWebApisService,
        private stateService: StateService,
        private dialogService: DialogService,
        private storefrontUtilityService: StorefrontUtilityService,
        private responseErrorService: ResponseErrorService
    ) { }

    @Input() public cmsContent: UpdateAuthorizedContactCMS;

    public authContactLimit: number;
    public authorizedContactDetails: AuthorizedContactDetails;
    public tentativeAuthorizedContacts: (AuthorizedContact & Removable)[] = [];
    public isShowPassword = false;
    public isKiosk: boolean;
    public saveButtonText = 'SAVE';
    public hasEmptyAccesCode: boolean;

    async ngOnInit() {
        this.cmsContent.MAIN_INFO = this.cmsContent.ShortDescription;
        this.cmsContent.TOOL_TIP_INFO = this.cmsContent.LongDescription;

        this.authorizedContactDetails = {
            authorizedContacts: [],
            currentPassword: null
        };

        this.authContactLimit = this.uiRouterGlobals.params?.authContactLimit;
        this.authorizedContactDetails.authorizedContacts = this.uiRouterGlobals.params?.authContacts;

        if (this.authContactLimit === null || this.authorizedContactDetails.authorizedContacts === null) {
            await this.getAuthContactsFromApi();
        }

        this.tentativeAuthorizedContacts = this.authorizedContactDetails.authorizedContacts.map((contact) => ({
            remove: false,
            ...contact
        }));

        this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;

        if (this.isKiosk) {
            this.saveButtonText = 'PROCEED';
        }

        this.hasEmptyAccesCode = this.checkEmptyAccessCodeInList();
        if (this.hasEmptyAccesCode) {
            this.responseErrorService.displayToast(this.cmsContent.Children[1].ShortDescription, 'Error', false);
        }
    }

    public async getAuthContactsFromApi() {
        const res = await this.webApis.getAuthContacts();
        this.authContactLimit = res.authContactLimit;
        this.authorizedContactDetails.authorizedContacts = res.authorizedContactList;
    }

    public async cancel(wizardUi: WizardComponent) {
        if (this.isKiosk && wizardUi) {
            await wizardUi.gotoCancelState();
            return;
        }

        this.stateService.go(profileStateNames.AccountDetails);
    }

    public async submit(form: NgForm, wizardUi: WizardComponent) {
        if (!form.valid) { return; }

        if (this.isKiosk && this.tentativeIsSameAsOriginal()) {
            await wizardUi.gotoNextState();
            return;
        }

        const request = {
            authorizedContacts: this.getRemovedContactArray(),
            currentPassword: this.authorizedContactDetails.currentPassword
        };

        try {
            await this.webApis.setAuthContacts(request);

            const modalCms = this.cmsContent.Children[0];
            const data = {
                cmsContent: {
                    Title: modalCms.LongDescription,
                    AcceptBtn: 'OKAY',
                    PrimaryContent: modalCms.ShortDescription
                }
            };
            await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);

            if (this.isKiosk && wizardUi) {
                await wizardUi.gotoNextState();
                return;
            }

            return this.stateService.go(profileStateNames.AccountDetails);
        } catch (e) { }
    }

    public toggleRemove(index: number) {
        const contact = this.tentativeAuthorizedContacts[index];
        contact.remove = !contact.remove;
    }

    public async openAuthContactEdit(index: number) {
        //send in authorizedContactDetails
        const contact = this.tentativeAuthorizedContacts[index];
        const data = {
            cmsContent: {
                header: this.cmsContent.MODAL_HEADER,
                TOOL_TIP_INFO: this.cmsContent.TOOL_TIP_INFO
            },
            contactInfo: {
                firstName: contact.firstName,
                lastName: contact.lastName,
                accessCode: contact.accessCode,
                contactId: contact.contactId,
                remove: contact.remove
            },
            currentContacts: this.authorizedContactDetails
        } as AuthorizedContactModalInjectionValues;

        const response = await this.dialogService.openSliderCentered<AuthorizedContactModalComponent, AuthorizedContactModalInjectionValues>(
            AuthorizedContactModalComponent,
            data,
            { title: this.cmsContent.EDIT_CONTACT_TITLE } as DialogContent
        );
        if (response) {
            Object.assign(contact, response.contactInfo);
        }
    }

    public async openAuthContactAdd() {
        //send in authorizedContactDetails
        const data = {
            cmsContent: {
                header: this.cmsContent.MODAL_HEADER,
                TOOL_TIP_INFO: this.cmsContent.TOOL_TIP_INFO
            },
            contactInfo: {
                firstName: '',
                lastName: '',
                accessCode: '',
                contactId: '',
                remove: false
            },
            currentContacts: this.authorizedContactDetails
        } as AuthorizedContactModalInjectionValues;

        const response = await this.dialogService.openSliderCentered<AuthorizedContactModalComponent, AuthorizedContactModalInjectionValues>(
            AuthorizedContactModalComponent,
            data,
            { title: this.cmsContent.ADD_CONTACT_TITLE } as DialogContent
        );

        if (response) {
            this.tentativeAuthorizedContacts.push(response.contactInfo);
        }
    }

    public tentativeIsSameAsOriginal() {
        if (!this.tentativeAuthorizedContacts || !this.authorizedContactDetails) { return false; }
        return isEqual(this.getRemovedContactArray(), this.authorizedContactDetails.authorizedContacts);
    }

    private getRemovedContactArray() {
        return this.tentativeAuthorizedContacts
            .filter(x => !x.remove)
            .map(({ remove, ...keep }) => keep);
    }

    public checkEmptyAccessCodeInList() {
        const request = this.tentativeAuthorizedContacts;
        const val = request.filter(x =>
            x.accessCode === null
        );
        if (val.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
