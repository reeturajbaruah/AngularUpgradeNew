/*
USAGE OF ACTION-BUTTONS-COMPONENT:
Use ActionButtonsComponent if it is a state transition that is NOT part of a "flow".
"What constitutes as a flow?" you say? It can vary from case to case. Please discuss with other developers for your specific scenario.
If you are transitioning for a "flow", WizardUIComponent may be what you need instead.

*/

import {
    Component, Input, Output, EventEmitter,
    ViewChild, ElementRef, Optional,
    AfterViewInit, ViewEncapsulation
} from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
    selector: 'action-buttons',
    templateUrl: './actionButtons.html',
    styleUrls: ['./actionButtons.less'],
    encapsulation: ViewEncapsulation.None
})
export class ActionButtonsComponent implements AfterViewInit {

    constructor(
        @Optional() private parentForm: NgForm) {
    }

    @ViewChild('altLink', { static: false }) altLink: ElementRef;
    @ViewChild('mainBtn', { static: false }) mainBtn: ElementRef;

    private viewLoaded = false;

    @Input() private form: NgForm;
    @Input() disabled: boolean;

    @Input() reverseOrder: boolean;
    @Input() reverseOrderLtMd?: boolean;
    @Input() direction?: 'row' | 'column' | 'row wrap';
    @Input() directionLtMd?: 'row' | 'column' | 'row wrap';
    @Input() alignment?: string;
    @Input() alignmentLtMd?: string;

    @Output() main = new EventEmitter();
    @Output() alt = new EventEmitter();
    @Input() mainBtnVisible?: boolean = true;

    ngAfterViewInit() {
        if (this.main && this.alt) {
            setTimeout(() => this.viewLoaded = true, 0);
        }
    }

    get showMain(): boolean {
        return this.viewLoaded && this.mainBtn.nativeElement.children.length > 0;
    }

    get showAlt(): boolean {
        return this.viewLoaded && this.altLink.nativeElement.children.length > 0;
    }

    get formRef(): NgForm {
        return this.parentForm || this.form;
    }

    handleMainAction() {
        const formToUse = this.formRef;

        if (formToUse && !formToUse.submitted) {
            formToUse.onSubmit(new CustomEvent('submit'));
        }

        if (formToUse && !formToUse.valid) {
            return;
        }

        this.main.emit();
    }

    handleAltAction() {
        this.alt.emit();
    }

}
