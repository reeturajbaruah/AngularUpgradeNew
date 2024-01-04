import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, Inject } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { changesStable } from 'testing/utilities';

import { MatIconRegistry } from '@angular/material/icon';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { VimeoPlayerModalComponent, VimeoSettings } from './vimeoPlayerModal.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'pipes/module';
import { Observable, Subject } from 'rxjs';
import { DialogRef } from '../../../services';
import { DomSanitizer } from '@angular/platform-browser';

class FakeDialogRef<T> {
    constructor(
        @Inject(MAT_DIALOG_DATA) private injectedData: T,
        private matDialogRef: MatDialogRef<any, T>
    ) { }

    public get data(): T {
        return this.injectedData;
    }

    public close(resolve?: T) {
        this.matDialogRef.close(resolve);
    }
}

describe('vimeoPlayerModal Component tests', () => {

    let fixture: ComponentFixture<VimeoPlayerModalComponent>;
    let component: VimeoPlayerModalComponent;
    let dialogData: VimeoSettings;
    let dialog: MatDialogRef<VimeoPlayerModalComponent>;
    let matIconRegistery: MatIconRegistry;
    let windowRef: Window;
    let getNamedSvgIcon: jasmine.Spy;

    beforeEach(async () => {

        getNamedSvgIcon = jasmine.createSpy('getNamedSvgIcon');
        matIconRegistery = jasmine.createSpyObj('matIconRegistry', ['getNamedSvgIcon']);
       
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);

        dialogData = {
            mediaUrl: 'https://sample.org'
        };

        await TestBed
            .configureTestingModule({
                declarations: [
                    VimeoPlayerModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    FlexLayoutModule,
                    CommonModule,
                    PipesModule
                ],
                providers: [
                    { provide: MatIconRegistry, useFactory: () => matIconRegistery },                   
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: Window, useFactory: () => windowRef }
                ]
            })
            .overrideProvider(DialogRef, { useFactory: () => new FakeDialogRef(dialogData, dialog)})
            .compileComponents();

        fixture = TestBed.createComponent(VimeoPlayerModalComponent);
        component = fixture.debugElement.componentInstance;
        
        spyOn(component, 'createPlayer');        
    });


    describe('canary', () => {
        it('is a canary test', async () => {
            expect(component).toBeDefined();
        });
    });


    describe('ngOnInit', () => {
        it('setup', async () => {

            const svg = {} as SVGElement;

            (matIconRegistery.getNamedSvgIcon as jasmine.Spy).and.returnValue({
                toPromise: () => Promise.resolve(svg)
            });

            spyOn(component, 'addIcon').and.callFake(() => { });

            await component.ngOnInit();

            expect(matIconRegistery.getNamedSvgIcon).toHaveBeenCalledWith(component['iconSvg']);
            expect(component.addIcon).toHaveBeenCalledWith(svg);
            expect(component.mediaUrl['changingThisBreaksApplicationSecurity']).toBe(dialogData.mediaUrl);
        });

    });


    describe('addIcon', () => {
        it('sets outerHTML of svg to icon', () => {
            const elm = { outerHTML: 'test1' } as any;
            const newElm = { outerHTML: 'test2' } as any;
            component.icon = 'blah';

            spyOn(component, 'resetSvgStyle').and.callFake(() => newElm);

            component.addIcon(elm);

            expect(component.resetSvgStyle).toHaveBeenCalledWith(elm);

            expect(component.icon).toBe(newElm.outerHTML);
        });
    });

    describe('resetSvgStyle', () => {
        it('it sets the polygons fill style to white', () => {

            const polygon = {
                style: {
                    fill: 'black'
                }
            } as any;

            const clone = {
                querySelectorAll: () => ([polygon])
            };

            const elm = {
                cloneNode: () => clone
            } as any;

            const returnElm = component.resetSvgStyle(elm);

            expect(returnElm).toBe(clone as any);
            expect(polygon.style.fill).toBe('#FFFFFF');
        });
    });

    describe('ngAfterViewInit', () => {
        it('creates player', () => {

            component.iframe = {
                nativeElement: {}
            };

            component.ngAfterViewInit();

            expect(component.createPlayer).toHaveBeenCalledWith(component.iframe.nativeElement as any);

        });
    });

    describe('ngDestroy', () => {
        it('destroys player', () => {

            component['player'] = jasmine.createSpyObj('Player', ['destroy']);

            component.ngOnDestroy();

            expect(component['player'].destroy).toHaveBeenCalled();
        });
    });

    describe('close', () => {
        it('calls dialogRef close when closed', () => {

            component.close();

            expect(dialog.close).toHaveBeenCalled();
        });
    });

});
