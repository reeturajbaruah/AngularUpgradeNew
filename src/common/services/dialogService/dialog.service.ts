import { Injectable, Component, ViewChild, ViewContainerRef, Type, ComponentFactoryResolver, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { firstValueFrom, Subject } from 'rxjs';


export interface DialogContent {
    title: string;
    /**
     * (Optional) Show back arrow. Default is false.
     */
    hasBack?: boolean;
    /**
     * (Optional) Show close icon. Default is true.
     */
    hasClose?: boolean;
}


@Injectable()
export class DialogRef<T, R = T> {

    constructor(
        @Inject(MAT_DIALOG_DATA) private injectedData: T,
        private matDialogRef: MatDialogRef<any, R>,
        private windowRef: Window
    ) { }

    public close(resolve?: R) {
        this.closeWithAnimation(this.matDialogRef, resolve);
    }

    /**
     * Closes another dialog by reference. Only used by closeAll().
     * 
     * @param dialogRef
     */
    public closeOtherDialog(dialogRef: MatDialogRef<any, R>) {
        this.closeWithAnimation(dialogRef);
    }

    private closeWithAnimation(dialogRef: MatDialogRef<any, R>, resolve?: R) {
        const el = this.windowRef.document.getElementById(dialogRef.id);
        const onAnimationEnd = () => {
            dialogRef.close(resolve);
            el.removeEventListener('animationend', onAnimationEnd);
        };
        el.addEventListener('animationend', onAnimationEnd);
        el.classList.add('close');
    }

    public get data(): T {
        return this.injectedData;
    }

}

@Component({
    selector: 'dialog-slider-wrapper',
    templateUrl: './dialogSliderWrapper.html',
    styleUrls: ['dialogSliderWrapper.less'],
    providers: [
        DialogRef
    ]
})
export class DialogSliderWrapComponent<D,R> implements OnInit {

    @ViewChild('template', { static: true, read: ViewContainerRef }) child: ViewContainerRef;

    private templateReadySubject: Subject<void>;
    @Input() content: DialogContent;


    constructor(
        private dialogRef: DialogRef<D,R>,
        private matDialog: MatDialog
    ) {
        this.templateReadySubject = new Subject();
    }
   
    
    public get templateReady(): Promise<void> {
        return firstValueFrom(this.templateReadySubject);
    };

    public injectComponent(childType: Type<any>) {
        this.child.clear();

        this.child.createComponent(childType);
    }

    async ngOnInit() {
        this.templateReadySubject.next();
        this.templateReadySubject.complete();
        this.content = this.content || {} as DialogContent;
    }

    public close() {
        this.dialogRef.close();
    }

    public closeAll() {
        this.matDialog.openDialogs.forEach(openDialogRef => this.dialogRef.closeOtherDialog(openDialogRef));
    }
}



@Injectable()
export class DialogService {
    constructor(
        private matDialog: MatDialog
    ) { }

    private readonly defaultContent: DialogContent = {
        title: '',
        hasBack: false,
        hasClose: true
    };

    public openSliderCentered = <T, D, R = any>(component: new (...args: any[]) =>
        T, data: D, content: DialogContent = null): Promise<R> => this.openSlider<T, D, R>(component, data, content, ['c--centered']);

    public openSliderFilled = <T, D, R = any>(component: new (...args: any[]) =>
        T, data: D, content: DialogContent = null): Promise<R> => this.openSlider<T, D, R>(component, data, content, ['c--filled']);

    public openGenericModal = <T, D, R = any>(component: new (...args: any[]) => T, data: D): Promise<R> => {

        const config: MatDialogConfig<D> = {
            data
        };

        const dialogRef = this.matDialog.open<T,D,R>(component, config);

        return firstValueFrom(dialogRef.afterClosed());
    };

    public openFloater = <T, D, R = any>(
        component: new (...args: any[]) => T,
        data: D,
        extraPanelClasses: string[] = []) => {

        const config: MatDialogConfig = {
            data,
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%',
            panelClass: ['float-panel'].concat(extraPanelClasses),
            hasBackdrop: false,
            
        };
        const dialogRef = this.matDialog.open<T,D,R>(component, config);

        return firstValueFrom(dialogRef.afterClosed());
    };

    private openSlider = <T, D, R = any>(
        component: new (...args: any[]) => T,
        data: D,
        content: DialogContent,
        extraPanelClasses: string[] = []): Promise<R> => {

        const config: MatDialogConfig = {
            data,
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%',
            panelClass: ['side-drawer'].concat(extraPanelClasses),
            hasBackdrop: false
        };
        const dialogRef = this.matDialog.open<DialogSliderWrapComponent<D,R>, D, R>(DialogSliderWrapComponent, config);

        dialogRef.componentInstance.templateReady.then(() => {
            dialogRef.componentInstance.injectComponent(component);
            dialogRef.componentInstance.content = { ...this.defaultContent, ...(content || {}) };
        });

        return firstValueFrom(dialogRef.afterClosed());
    };

    public closeAllModals() {
        this.matDialog.closeAll();
    }
}
