import { Component, Input } from '@angular/core';

import { IPersonalInfo } from 'common/models';

@Component({
    selector: 'personal-info-display',
    templateUrl: './personalInfoDisplay.html',
    styleUrls: ['./personalInfoDisplay.less']
})
export class PersonalInfoDisplayComponent {

    constructor() { }

    @Input() personalInfo: IPersonalInfo;
}
