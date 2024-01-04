import { Component, OnInit } from '@angular/core';
import { DialogRef, DialogService} from 'common/services';
import { NgForm } from '@angular/forms';
import { CmsResolverService } from 'cms/services';
import { CmsIds } from '../constants';
import { IEmailUsPayload, IFieldsData, FieldTypes, IEmailUsCms, IFieldCms, IFormsCms, FieldKeys } from '../models/email-us.models';
import { EmailUsFormsService } from '../services/forms/forms.service';
import { EmailUsFieldsService } from '../services/fields/fields.service';
import { AccordionService } from '../../../ui/display/accordion/services/accordion.service';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from '../../../../common/ui';
import { EmailUsFacadeService } from '../services/facade/emailUs-facade.service';
import { EmailUsApiService } from '../services/api/emailUs-api.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';

@Component({
    selector: 'email-us',
    templateUrl: './email-us.component.html',
    styleUrls: ['email-us.component.less'],
    providers: [AccordionService, EmailUsFormsService, EmailUsFieldsService, EmailUsFacadeService, EmailUsApiService]
})

export class EmailUsComponent implements OnInit {
    FieldTypes = FieldTypes;

    emailUsCms: IEmailUsCms;
    formsCms: IFormsCms[];
    fieldsCms = {} as { [key: string]: IFieldCms };

    selectedForm = '' as any;
    fields = {} as { [key: string]: IFieldsData };

    emailUsData = { files: {}, fields: {}, emailTopic: {} } as IEmailUsPayload;

    host = window.location.hostname;
    userAgent = navigator.userAgent;

    constructor(
        private dialogRef: DialogRef<IEmailUsCms>,
        private cmsResolverService: CmsResolverService,
        private formsService: EmailUsFormsService,
        private fieldsService: EmailUsFieldsService,
        private dialogService: DialogService,
        private facade: EmailUsFacadeService,
        private authService: AuthenticationService
    ) { }

    async ngOnInit() {
        await this.getCmsData();
        await this.initInputFields();
    }

    private async getCmsData() {
        this.emailUsCms = await this.cmsResolverService.resolve({ ItemId: CmsIds.EmailUs });
        this.formsCms = this.formsService.getCmsData(this.emailUsCms);
        this.fieldsCms = this.fieldsService.getCmsData(this.emailUsCms);
    }

    private async initInputFields() {
        Object.keys(this.fieldsCms).forEach(key => {
            this.fields[key] = {
                name: this.fieldsCms[key].ItemName,
                label: this.fieldsCms[key].Title,
                value: this.fieldsCms[key].Type === 'Checkbox' ? true : '',
            };
        });

        await this.getAccountInfo();
    }

    private async getAccountInfo() {
        if (this.authService.isAuthenticated()) {
            const res = await this.facade.getAccountInfo();

            this.emailUsData.email = res.email;
            this.emailUsData.name = res.name;
            this.fields[FieldKeys.EZTagAccount].value = res.accountNumber;
        }
    }

    async submit(form: NgForm) {
        if (!form.valid) { return; }

        this.initEmailUsPayload();
    
        const response = await this.facade.sendHelpAndSupportEmail(this.emailUsData);

        if (response) {
            await this.openConfirmationModal();
        }
       
        this.dialogRef.close(this.dialogRef.data);
    }

    private initEmailUsPayload() {
        this.emailUsData.userBorwserInfo = this.userAgent;
        this.emailUsData.host = this.host;
        this.setEmailUsEmailTopic();
        this.setFilteredFields();
    }
    
    private setEmailUsEmailTopic() {
        this.emailUsData.emailTopic = {
            name: this.selectedForm.Title,
            email: this.selectedForm.MailboxEmail,
            fromEmail: this.selectedForm.ReplyEmail,
        };
    }
    
    private setFilteredFields() {
        this.emailUsData.fields = Object.values(this.fields).filter(field => 
            field.value && this.selectedForm.Fields.some(f => f.ItemName === field.name)
        );
    }

    exitModal(save: boolean) {
        this.dialogRef.close(this.dialogRef.data);
    }

    updatePhoneNumber(itemName: string): void {
        if (itemName === FieldTypes.PhoneNumber) {
            const cleanedNumber = this.fields[itemName]?.value?.toString()?.replace(/-/g, '');
            const areaCode = cleanedNumber.slice(0, 3);
            const midDigits = cleanedNumber.slice(3, 6);
            const lastDigits = cleanedNumber.slice(6, 10);

            this.fields[itemName].value = areaCode + (midDigits ? '-' + midDigits : '') + (lastDigits ? '-' + lastDigits : '');
        }
    }

    private async openConfirmationModal() {
        const data = {
            cmsContent: {
                Title: this.emailUsCms?.Title,
                AcceptBtn: this.emailUsCms?.AcceptButtonText,
                PrimaryContent: this.emailUsCms?.ThankYouNote
            }
        };
        await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);
    }
}
