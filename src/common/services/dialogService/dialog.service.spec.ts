import { ComponentFactoryResolver } from '@angular/core';
import { DialogService, DialogRef, DialogSliderWrapComponent, DialogContent } from './dialog.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';

describe('dialogRef', () => {
    let service: DialogRef<any>;
    let injectedData;
    let matDialogRef: MatDialogRef<any, any>;
    let windowRef: Window;
    let dummyElement: HTMLElement;

    beforeEach(() => {
        injectedData = {
            testData: 'this is test'
        };
        matDialogRef = jasmine.createSpyObj('matDialogRef', ['close']);
        windowRef = {
            document: jasmine.createSpyObj('document', ['getElementById'])
        } as Window;
        dummyElement = document.createElement('div');
        (windowRef.document.getElementById as jasmine.Spy).and.returnValue(dummyElement);

        service = new DialogRef<any>(injectedData, matDialogRef, windowRef);
    });

    describe('canary', () => {
        it('should pass', async () => {
            expect(true).toBe(true);
        });
    });

    describe('close', () => {
        it('should get element and assign event handler', () => {
            service.close();

            expect(windowRef.document.getElementById).toHaveBeenCalledTimes(1);
            expect(windowRef.document.getElementById).toHaveBeenCalledWith(matDialogRef.id);
            expect(dummyElement.classList[0]).toBe('close');
        });

        it('should call close after animationend', () => {
            const event = new AnimationEvent('animationend', {
                bubbles: true,
                cancelable: false
            });
            service.close();

            dummyElement.dispatchEvent(event);
            expect(matDialogRef.close).toHaveBeenCalledTimes(1);
        });
    });
});

describe('DialogService', () => {
    let matDialog: MatDialog;
    let service: DialogService;
    const afterClosedSub = new BehaviorSubject<any>('fake after closed promise');

    beforeEach(() => {
        matDialog = jasmine.createSpyObj('matDialog', ['open']);

        service = new DialogService(matDialog);
    });

    describe('openSlider', () => {
        it('should call openSlider', async () => {

            const subject = new Subject();
            const mockComponent = {                
                content: undefined,
                templateReady: subject.toPromise(),
                injectComponent: () => { }
            };
            (matDialog.open as jasmine.Spy).and.returnValue({
                afterClosed: () => afterClosedSub.asObservable(),
                componentInstance: mockComponent
            });
            spyOn(mockComponent, 'injectComponent');

            const ret = await service['openSlider']<any, any>(DialogSliderWrapComponent, {}, null);
            expect(matDialog.open).toHaveBeenCalledTimes(1);
            expect(matDialog.open).toHaveBeenCalledWith(DialogSliderWrapComponent, {
                data: {},
                maxWidth: '100vw',
                maxHeight: '100vh',
                height: '100%',
                width: '100%',
                panelClass: ['side-drawer'],
                hasBackdrop: false
            });
           //expect(mockComponent.injectComponent).toHaveBeenCalledTimes(1);
           //expect(mockComponent.templateReady.subscribe).toHaveBeenCalledTimes(1);

            //this is zero until we send next using the subject. We want to confirm our assumption is correct
            expect(mockComponent.injectComponent).toHaveBeenCalledTimes(0);
            expect(mockComponent.content).toBeUndefined();

            subject.next(undefined);
            subject.complete();
            await mockComponent.templateReady;

            expect(ret).toBe('fake after closed promise' as any);
            expect(mockComponent.injectComponent).toHaveBeenCalledTimes(1);
            expect(mockComponent.content).toEqual({
                title: '',
                hasBack: false,
                hasClose: true
            });


        });

        it('should call openSlider with extra panelClasses', async () => {
            const mockComponent = {
                templateReady: Promise.resolve(),
               injectComponent: () => { }
            };
            (matDialog.open as jasmine.Spy).and.returnValue({
                afterClosed: () => afterClosedSub.asObservable(),
                componentInstance: mockComponent
            });
            spyOn(mockComponent, 'injectComponent');

            service['openSlider']<any, any>(DialogSliderWrapComponent, {}, null, ['fakePanelClass']);
            await mockComponent.templateReady;

            expect(matDialog.open).toHaveBeenCalledTimes(1);
            expect(matDialog.open).toHaveBeenCalledWith(DialogSliderWrapComponent, {
                data: {},
                maxWidth: '100vw',
                maxHeight: '100vh',
                height: '100%',
                width: '100%',
                panelClass: ['side-drawer', 'fakePanelClass'],
                hasBackdrop: false
            });
            expect(mockComponent.injectComponent).toHaveBeenCalledTimes(1);
        });

    });

    describe('openSliderCentered', () => {
        it('should call openSlider', () => {
            spyOn(service as any, 'openSlider');

            const ret = service.openSliderCentered<any, any>(DialogSliderWrapComponent, {});

            expect(service['openSlider']).toHaveBeenCalledWith(DialogSliderWrapComponent, {}, null, ['c--centered']);
        });
    });

    describe('openSliderFilled', () => {
        it('should call openSlider', () => {
            spyOn(service as any, 'openSlider');

            const ret = service.openSliderFilled<any, any>(DialogSliderWrapComponent, {});

            expect(service['openSlider']).toHaveBeenCalledWith(DialogSliderWrapComponent, {}, null, ['c--filled']);
        });
    });

    describe('openGenericModal', () => {
        it('should call matDialog.open', async () => {
            (matDialog.open as jasmine.Spy).and.returnValue({
                afterClosed: () => afterClosedSub.asObservable()
            });

            const ret = await service.openGenericModal<any, any>(DialogSliderWrapComponent, { random: 'data' });

            expect(matDialog.open).toHaveBeenCalledWith(DialogSliderWrapComponent, { data: { random: 'data' } } as any);
            expect(ret).toBe('fake after closed promise');
        });
    });
});


describe('DialogSliderWrapComponent', () => {
    let component: DialogSliderWrapComponent<any, any>;
    
    let dialogRef: jasmine.SpyObj<DialogRef<any>>;
    let matDialog: jasmine.SpyObj<MatDialog>;

    beforeEach(async () => {
        
        dialogRef = jasmine.createSpyObj('dialogRef', ['close', 'closeOtherDialog']);
        matDialog = jasmine.createSpyObj('matDialog', [], {
            openDialogs: [{}, {}]
        });

        component = new DialogSliderWrapComponent(dialogRef, matDialog);
        component.child = jasmine.createSpyObj('child', ['clear', 'createComponent']);
    });

    describe('ngOnInit', () => {
        it('should change a when subscribe is before ngOnInit', async () => {
            let a = 0;
            const promise = component.templateReady.then(() => {
                a = 1;
            });

            expect(a).toBe(0);
            await component.ngOnInit();
            await promise;
            expect(a).toBe(1);
        });

        it('should change a when subscribe is after ngOnInit', async () => {
            let a = 0;
            expect(a).toBe(0);

            await component.ngOnInit();

            spyOnProperty(component, 'templateReady', 'get').and.resolveTo();
            const promise = component.templateReady.then(() => {
                a = 1;
            });
            await promise;
            expect(a).toBe(1);
        });

        it('should default the content object if none provided', async () => {
            component.content = null;

            await component.ngOnInit();

            expect(component.content).toEqual({} as DialogContent);
        });
    });

    describe('injectComponent', () => {
        it('should call componentFactory and createComponent', () => {
            
            component.injectComponent(DialogSliderWrapComponent);
            expect(component.child.clear).toHaveBeenCalledTimes(1);
            expect(component.child.createComponent).toHaveBeenCalledTimes(1);
            expect(component.child.createComponent).toHaveBeenCalledWith(DialogSliderWrapComponent as any);
        });
    });

    describe('close', () => {
        it('should call dialogRef close', () => {
            component.close();

            expect(dialogRef.close).toHaveBeenCalledTimes(1);
        });
    });

    describe('closeAll', () => {
        it('should call matDialog close all', () => {
            component.closeAll();

            expect(dialogRef.closeOtherDialog).toHaveBeenCalledTimes(2);
        });
    });

});
