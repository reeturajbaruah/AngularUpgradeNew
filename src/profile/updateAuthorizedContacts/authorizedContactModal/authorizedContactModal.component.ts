import { Component, OnInit} from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';
import { DialogRef } from 'common/services';
import { AuthorizedContact, AuthorizedContactDetails } from '../../services';
import { Removable } from '../updateAuthorizedContacts.component';
import { clone, isNil } from 'lodash';

export interface InjectionValues {
    cmsContent: { header: string; TOOL_TIP_INFO: string };
    contactInfo: AuthorizedContact & Removable;
    currentContacts: AuthorizedContactDetails;
}

@Component({
    selector: 'authorized-contact-modal',
    templateUrl: './authorizedContactModal.html',
    styleUrls: ['./authorizedContactModal.less']
})
export class AuthorizedContactModalComponent implements OnInit {

    constructor(
        private dialogRef: DialogRef<InjectionValues>
    ) { }

    public data = {} as InjectionValues;
    public duplicate: boolean;
    public originalContact: AuthorizedContact;

    public close() {
        this.dialogRef.close();
    }

    public submit(form: NgForm) {
        if (!form.valid) {
            this.duplicate = false;
            return;
        }
        else if (this.contactsSame(this.originalContact)) {
            this.duplicate = false;
            this.dialogRef.close(this.data);
        }
        else {
            this.duplicate = this.data.currentContacts.authorizedContacts.some(this.contactsSame.bind(this));
            if (!this.duplicate) {
                this.dialogRef.close(this.data);
            }
        }
    }

    ngOnInit() {
        this.data = { ...this.dialogRef.data };
        this.duplicate = false;
        this.originalContact = clone(this.data.contactInfo);
    }

    private contactsSame(contact) {
        return contact.firstName ===
            this.data?.contactInfo?.firstName?.toUpperCase()
            && contact.lastName ===
            this.data?.contactInfo?.lastName?.toUpperCase();
    }

}
