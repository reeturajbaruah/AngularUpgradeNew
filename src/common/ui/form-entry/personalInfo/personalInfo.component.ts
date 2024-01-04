import { Component, Input } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { IPersonalInfo } from 'common/models';

@Component({
    selector: 'personal-info-form-entry',
    templateUrl: './personalInfo.html',
    styleUrls: ['./personalInfo.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class PersonalInfoComponent {

    constructor(
        private form: NgForm
    ) { }

    get submitted(): boolean {
        return this.form.submitted;
    }

    @Input() formElementName: string;
    @Input() personalInfo: IPersonalInfo;

}
