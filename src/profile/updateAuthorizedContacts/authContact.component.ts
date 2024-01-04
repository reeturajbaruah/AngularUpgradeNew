import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthorizedContact } from 'profile/services';
import { Removable } from './updateAuthorizedContacts.component';

export interface IAuthContactCMS {   
    LongDescription: string;   
}

@Component({
    selector: 'auth-contact',
    templateUrl: './authContact.html',
    styleUrls: ['./authContact.less']
})
export class AuthContactComponent {
    constructor() { }

    @Input() public contactInfo: AuthorizedContact & Removable;
    @Input() public cmsContent: IAuthContactCMS;

    @Output() public removeContact = new EventEmitter<void>();
    @Output() public editContact= new EventEmitter<void>();

    public toggleRemoveContact() {
        this.removeContact.emit();
    }

    public openAuthContact() {
        this.editContact.emit();
    }
}
