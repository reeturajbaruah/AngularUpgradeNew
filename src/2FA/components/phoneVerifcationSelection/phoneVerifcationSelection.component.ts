import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhoneVerificationCMS } from '../../interfaces';

@Component({
    selector: 'phone-verifcation-selection',
    templateUrl: './phoneVerifcationSelection.component.html',
    styleUrls: ['./phoneVerifcationSelection.component.less']
})
export class PhoneVerifcationSelectionComponent implements OnInit {    

    @Input() public phoneNumber: string;
    @Input() public isText: boolean;
    @Output() public isTextChange: EventEmitter<boolean> = new EventEmitter<boolean>();;
    @Input() public cmsInfo: PhoneVerificationCMS;
    public selectedClass: string;

    constructor() { }

    ngOnInit() {
        this.selectedClass = this.isText ? 'text' : 'call';
    }

    public selectionChange(updatedSelection: string) {
        this.selectedClass = updatedSelection;
        this.isText = this.selectedClass === 'text';
        this.isTextChange.emit(this.isText);
    }
}
