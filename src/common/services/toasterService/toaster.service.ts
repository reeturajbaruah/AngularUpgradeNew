import { Injectable, OnDestroy } from '@angular/core';
import { Toast } from 'common/interfaces';
import { ToastType } from 'common/models';
import { isNumber } from 'lodash';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class ToasterService implements OnDestroy {
    private toasts: Toast[] = [];
    private subjectToasts = new Subject<Toast[]>();
    private delayedToasters: Toast[] = [];


    public get toasts$() {
        return this.subjectToasts.asObservable();
    }


    constructor() { }

    public show(type: ToastType, description: string, isDelayed = false) {
        const toast = { type, description };
        if (!isDelayed) {
            this.toasts = [toast, ...this.toasts];
            this.subjectToasts.next(this.toasts);
        } else {
            this.delayedToasters.push(toast);
        }
        return toast;
    }

    public showDelayed() {
        this.delayedToasters.map(toast => this.show(toast.type, toast.description));
        this.delayedToasters = [];
    }

    public remove(toastRefOrIndex: Toast | number) {
        this.toasts = isNumber(toastRefOrIndex)
            ? this.toasts.filter((t, i) => i !== toastRefOrIndex)
            : this.toasts.filter(t => t !== toastRefOrIndex);
        this.subjectToasts.next(this.toasts);
    }

    public isShowing(toast: Toast): boolean {
        return !!toast && this.toasts.includes(toast);
    }

    public removeAll() {
        this.toasts = [];
        this.subjectToasts.next(this.toasts);
    }

    ngOnDestroy() {
        this.subjectToasts.complete();
    }
}
