import { Directive, ElementRef, Optional, Input, OnInit, OnDestroy } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

export type StatusTracking = {
    readonly statusChanges: Observable<string>;
    readonly status: string;
}; 

@Directive({
    selector: '[error-check]'    
})
export class ErrorCheckDirective implements OnInit, OnDestroy {

    constructor(
        private el: ElementRef,
        @Optional() private parentform: NgForm,
        @Optional() private container: ControlContainer
    ) { }

    @Input('error-check') templateReference: StatusTracking | StatusTracking[];

    private statusChangeSubscription: Subscription;//[];
    private formSubmitSubscription: Subscription;

    //trys to resolve where the NgForm is
    private get form(): NgForm {        
        if (this.parentform !== null) {
            //used directly in form
            return this.parentform;
        } else if (this.container instanceof NgForm) {
            //nested deeper
            return this.container as NgForm;
        } else if (this.container && this.container.formDirective instanceof NgForm) {
            //used in a ngModelGroup
            return this.container.formDirective as NgForm;
        }
        throw new Error('error-check can only be used within a form or within a nested control used within a form.');
    }

    private get refArray(): StatusTracking[] {
        let tempRef: StatusTracking[] = [];

        
        if (Array.isArray(this.templateReference)) {
            tempRef = this.templateReference;
        } else {
            tempRef = [this.templateReference];
        }

        return tempRef;
    }

    ngOnInit() {        

        this.statusChangeSubscription = 
            combineLatest(this.refArray.map(v=> v.statusChanges))
                .pipe(map(statuses => this.toBoolean(statuses)))
                .subscribe(valid => this.performCheck(valid));

        this.formSubmitSubscription = 
            this.form.ngSubmit
                .pipe(
                    map(()=> this.refArray.map(v=> v.status || 'DISABLED')),
                    map(statuses => this.toBoolean(statuses))
                )
                .subscribe(valid => this.performCheck(valid));
    }

    private toBoolean(statuses: string[]): boolean {
        return statuses.reduce((acc, status) => status === 'PENDING' ? false : (acc && status === 'VALID'), true);
    }

    private performCheck(valid: boolean) {

        if (!valid && this.form.submitted) {
            this.el.nativeElement.classList.add('has-error');
        } else {
            this.el.nativeElement.classList.remove('has-error');
        }
    }

    ngOnDestroy() {
        if (this.statusChangeSubscription) {
            this.statusChangeSubscription.unsubscribe();
        }

        if (this.formSubmitSubscription) {
            this.formSubmitSubscription.unsubscribe();
        }
    }
}