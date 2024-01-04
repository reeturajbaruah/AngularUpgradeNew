import {
    Component, Input, OnChanges,
    AfterViewInit, QueryList, ViewEncapsulation,
    ContentChildren, OnDestroy
} from '@angular/core';

import { NgForm, ValidationErrors, ControlContainer } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ErrorMessageComponent } from './errorMessage.component';

@Component({
    selector: 'error-messages',
    templateUrl: './errorMessages.html',
    encapsulation: ViewEncapsulation.None,
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class ErrorMessagesComponent implements AfterViewInit, OnChanges, OnDestroy {

    constructor(
        private parentForm: NgForm) {
    }

    @ContentChildren(ErrorMessageComponent) rules: QueryList<ErrorMessageComponent>;
    @Input() public errors: ValidationErrors | ValidationErrors[];
    @Input() public activeBeforeSubmit: boolean;

    private formSubscription: Subscription;

    private get refArray(): ValidationErrors[] {
        let tempRef: ValidationErrors[] = [];


        if (Array.isArray(this.errors)) {
            tempRef = this.errors;
        } else {
            tempRef = [this.errors];
        }

        return tempRef;
    }

    get rulesAreActive(): boolean {
        return this.activeBeforeSubmit || (this.parentForm && this.parentForm.submitted);
    }

    ngOnChanges() {
        if (this.rules) {
            //merge errors, priority right
            const currentErrors = this.refArray.reduce((acc, v) => ({ ...acc, ...v }), {});

            this.rules.forEach(ruleComponent => {
                ruleComponent.isVisible = this.rulesAreActive && (ruleComponent.rule in currentErrors);
            });
        }       
    }

    ngAfterViewInit() {         
        if (this.parentForm) {
            this.formSubscription = this.parentForm.ngSubmit.subscribe(() => {
                this.ngOnChanges();
            });
        }        
    }

    ngOnDestroy() {
        if (this.formSubscription) {
            this.formSubscription.unsubscribe();
        }
    }
}
