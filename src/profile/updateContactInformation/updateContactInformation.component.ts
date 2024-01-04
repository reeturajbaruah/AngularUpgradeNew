import { Component, OnInit, Input, Inject } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { WebApisService, GetContactInfoResponse, SetContactInfoRequest } from 'profile/services/webApis.service';
import { stateNames as profileStateNames } from 'profile/constants';
import { NgForm } from '@angular/forms';
import { AccountService, DialogService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues, WizardComponent } from 'common/ui';
import { PhoneNumberPipe } from 'pipes/phoneNumber/phoneNumber.pipe';
import { MailingAddressCMSContent } from '../updateMailingAddress/updateMailingAddress.component';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { cloneDeep } from 'lodash';
import { ContactInfoCMSContent } from './interfaces/update-contact-information.interface';
import { SyncRiteToggles } from 'shared/interfaces/toggles/sync-rite-toggles.interface';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

@Component({
    selector: 'update-contact-information',
    templateUrl: './updateContactInformation.html',
    styleUrls: ['./updateContactInformation.less']
})
export class UpdateContactInformationComponent implements OnInit {
    @Input() cmsContent: ContactInfoCMSContent;
    @Input() mailingCmsContent: MailingAddressCMSContent;
    @Input() stateList: { stateCode: string }[];
    @Input() countryList: { countryCode: string; displayName: string }[];

    fullContactInfo: GetContactInfoResponse;
    currentInfo: SetContactInfoRequest = {} as SetContactInfoRequest;
    isKiosk: boolean;
    saveButtonText = 'SAVE';
    syncRiteToggles: SyncRiteToggles;
    showAddAltPhoneButton: boolean;
    firstAltPhoneState: boolean;
    secondAltPhoneState: boolean;

    constructor(
        private webApi: WebApisService,
        private state: StateService,
        private uiRouterGlobals: UIRouterGlobals,
        private dialogService: DialogService,
        private phoneNumberPipe: PhoneNumberPipe,
        private storefrontUtilityService: StorefrontUtilityService,
        private accountService: AccountService,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    async ngOnInit() {
        await this.getContactInfo();
        this.setToggles();
        this.detectKioskMode();
        this.cloneContactInfo();
    }

    private async getContactInfo() {
        this.fullContactInfo = this.uiRouterGlobals.params.personalInfo as GetContactInfoResponse;

        if (!this.fullContactInfo) {
            this.fullContactInfo = await this.accountService.getContactInfo();
        }

        this.formatPhoneNumber();
    }

    private formatPhoneNumber() {
        this.fullContactInfo.contactInfo.phoneNumber = this.phoneNumberPipe.transform(this.fullContactInfo.contactInfo.phoneNumber);
        this.fullContactInfo.contactInfo.altPhoneNumber = this.phoneNumberPipe.transform(this.fullContactInfo.contactInfo.altPhoneNumber);
        this.fullContactInfo.contactInfo.mobilePhoNbr = this.phoneNumberPipe.transform(this.fullContactInfo.contactInfo.mobilePhoNbr);
    }

    private setToggles() {
        this.syncRiteToggles = this.environmentConfig.syncRiteToggles;

        if (this.syncRiteToggles.MasterToggle) {
            this.initAddAltPhoneFlow();
        }
    }

    private initAddAltPhoneFlow() {
        // Initialize the states based on if alt phone numbers already exists
        this.firstAltPhoneState = !!this.fullContactInfo.contactInfo.altPhoneNumber;
        this.secondAltPhoneState = !!this.fullContactInfo.contactInfo.mobilePhoNbr;

        this.updateAddAltPhoneButton();
    }

    // Helper method to update the state of the "Add Alt Phone" button
    private updateAddAltPhoneButton() {
        // Hide the "Add Alt Phone" button only if both phone number states are true
        this.showAddAltPhoneButton = !(this.firstAltPhoneState && this.secondAltPhoneState);
    }

    private detectKioskMode() {
        this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;
    }

    // Method to clone original contact information in currentInfo
    private cloneContactInfo() {
        this.currentInfo.contactInfo = cloneDeep(this.fullContactInfo.contactInfo);

        if (this.isKiosk) {
            this.saveButtonText = 'PROCEED';
            this.currentInfo.mailingAddress = cloneDeep(this.fullContactInfo.mailingAddress);
            this.currentInfo.mailingAddress.displayCountry = this.currentInfo.mailingAddress.country;
        }
    }

    // Event handler for "Add Alt Phone" button
    onAddAltPhoneNumberClick() {
        // Show the first alternative phone number if it's not already shown
        if (!this.firstAltPhoneState) {
            this.firstAltPhoneState = true;
        }
        // Show the second alternative phone number if the first is shown and the second is not
        else if (!this.secondAltPhoneState) {
            this.secondAltPhoneState = true;
        }

        this.updateAddAltPhoneButton();
    }

    // Event handler to delete the first alternative phone number
    deleteFirstAltPhone() {
        // If the second phone number is present, transfer its data to the first, and clear and hide the second phone
        if (this.secondAltPhoneState) {
            this.fullContactInfo.contactInfo.altPhoneNumber = this.fullContactInfo.contactInfo.mobilePhoNbr;
            this.fullContactInfo.contactInfo.altPhoneNumberExt = this.fullContactInfo.contactInfo.mobilePhoExt;
            this.fullContactInfo.contactInfo.mobilePhoNbr = '';
            this.fullContactInfo.contactInfo.mobilePhoExt = '';
            this.secondAltPhoneState = false;
        }
        // If the second phone number is not shown, simply hide the first
        else {
            this.fullContactInfo.contactInfo.altPhoneNumber = '';
            this.fullContactInfo.contactInfo.altPhoneNumberExt = '';
            this.firstAltPhoneState = false;
        }

        this.updateAddAltPhoneButton();
    }

    // Event handler to delete the second alternative phone number
    deleteSecondAltPhone() {
        // Hide the second alternative phone number
        this.secondAltPhoneState = false;
        this.fullContactInfo.contactInfo.mobilePhoNbr = '';
        this.fullContactInfo.contactInfo.mobilePhoExt = '';
        this.updateAddAltPhoneButton();
    }

    async submit(form: NgForm, wizardUi: WizardComponent) {
        if (!form.valid) { return; }

        this.formatPhoneNumber();

        if (this.checkIfFormChanged()) {
            const res = await this.updateContactInfo();

            if (!res) { return; }

            await this.openConfirmationModal();
        }

        if (this.isKiosk && wizardUi) {
            await wizardUi.gotoNextState();
            return;
        }

        await this.state.go(profileStateNames.AccountDetails);
    }

    private checkIfFormChanged(): boolean {
        const hasContactInfoChanged = JSON.stringify(this.currentInfo.contactInfo) !== JSON.stringify(this.fullContactInfo.contactInfo);

        if (!this.isKiosk) {
            return hasContactInfoChanged;
        }
        else {
            const hasMailingAddressChanged = JSON.stringify(this.currentInfo.mailingAddress) !== JSON.stringify(this.fullContactInfo.mailingAddress);
            return hasContactInfoChanged || hasMailingAddressChanged;
        }
    }

    private async updateContactInfo() {
        const contactInfoResponse = await this.webApi.updateContactInfo(this.fullContactInfo.contactInfo);

        if (contactInfoResponse && this.isKiosk) {
            return await this.webApi.updateMailingInfo(this.fullContactInfo.mailingAddress);
        }

        return contactInfoResponse;
    }

    private async openConfirmationModal() {
        const modalCms = this.cmsContent.Children[0];
        const data = {
            cmsContent: {
                Title: modalCms.Title,
                AcceptBtn: 'OKAY',
                PrimaryContent: modalCms.ShortDescription
            }
        };

        await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);
    }

    async cancel(wizardUi: WizardComponent) {
        if (this.isKiosk && wizardUi) {
            await wizardUi.gotoCancelState();
            return;
        }

        await this.state.go(profileStateNames.AccountDetails);
    }
}
