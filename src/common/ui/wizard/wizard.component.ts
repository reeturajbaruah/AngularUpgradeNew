/*
USAGE OF WIZARD-UI-COMPONENT:
Use WizardUIComponent ONLY in cases of a state transition inside flows or part of Kiosk Flows
"What constitutes as a flow?" you say? It can vary from case to case. Please discuss with other developers for your specific scenario.
If it is a transition that is NOT part of a "flow", ActionButtonsComponent may be what you need.

*/

import {
    Component, Input, Output, EventEmitter,
    ViewChild, ElementRef, Optional,
    AfterViewInit
} from '@angular/core';

import { NgForm } from '@angular/forms';

import { StateConfig, StateConfigOrName, IWizardStateResolverService } from 'common/interfaces';
import { WizardStateResolverFactory } from './wizardStateResolver.factory';

@Component({
    selector: 'wizard-ui',
    templateUrl: './wizard.html',
    styleUrls: ['./wizard.less']
})
export class WizardComponent implements AfterViewInit {

    constructor(
        @Optional() private parentForm: NgForm,
        private stateResolverFactory: WizardStateResolverFactory) {
    }

    @ViewChild('nextBtn', { static: false }) nextBtn: ElementRef;
    @ViewChild('cancelBtn', { static: false }) cancelBtn: ElementRef;
    @ViewChild('prevBtn', { static: false }) prevBtn: ElementRef;

    private viewLoaded = false;

    @Input() private form: NgForm;
    @Input() disabled: boolean;
    @Input() legacy?: boolean;
    @Input() reverseOrder?: boolean;
    @Input() input?: any;
    @Input() navigate?: boolean;

    @Output() next = new EventEmitter<StateConfig>();
    @Output() previous = new EventEmitter<StateConfig>();
    @Output() cancel = new EventEmitter<StateConfig>();

    ngAfterViewInit() {
        if (this.nextBtn && this.cancelBtn && this.prevBtn) {
            setTimeout(() => this.viewLoaded = true, 0);
        }
    }

    get reverseOrderInternal(): boolean {

        const service = this.service;

        const uiOrder = service.getUiOrder(this.input);
        if (uiOrder) {

            if (uiOrder === 'normal') {
                return false;
            } else if (uiOrder === 'reverse') {
                return true;
            }

        }

        return this.reverseOrder || false;
    }

    get showNext(): boolean {
        return this.viewLoaded && this.nextBtn.nativeElement.children.length > 0;
    }

    get showCancel(): boolean {
        return this.viewLoaded && this.cancelBtn.nativeElement.children.length > 0;
    }

    get showPrevious(): boolean {
        return this.viewLoaded && this.prevBtn.nativeElement.children.length > 0;
    }

    get formRef(): NgForm {
        return this.parentForm || this.form;
    }

    get service(): IWizardStateResolverService {
        return this.stateResolverFactory.getService();
    }

    async gotoNextState() {
        if (this.navigate) {
            window.location.href = this.input;
            return;
        }

        const formToUse = this.formRef;

        if (formToUse && !formToUse.submitted) {
            formToUse.onSubmit(new CustomEvent('submit'));
        }

        if (formToUse && !formToUse.valid) {
            return;
        }

        await this.service.nextState(this.next, this.input);
    }

    async gotoPreviousState() {
        await this.service.previousState(this.previous, this.input);
    }

    async gotoCancelState() {
        await this.service.cancelState(this.cancel, this.input);
    }

    async abortKioskFlow(): Promise<void> {
        await this.service.abort(this.cancel);
    }
}
