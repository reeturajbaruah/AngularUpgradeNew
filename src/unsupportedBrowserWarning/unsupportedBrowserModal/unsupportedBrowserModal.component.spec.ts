import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { PipesModule } from 'pipes/module';
import { UnsupportedBrowserModalComponent, InjectionValues } from './unsupportedBrowserModal.component';

describe('UnsupportedBrowserModalComponent tests', () => {
    let fixture: ComponentFixture<UnsupportedBrowserModalComponent>;
    let component: UnsupportedBrowserModalComponent;

    let dialogData: InjectionValues;
    let dialog: jasmine.SpyObj<MatDialogRef<UnsupportedBrowserModalComponent>>;


    beforeEach(async () => {

        dialog = jasmine.createSpyObj('dialogRef', ['close']);
        dialogData = { fakeData: 'fake injected data' } as any;

        await TestBed
            .configureTestingModule({
                declarations: [
                    UnsupportedBrowserModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: dialog, useFactory: () => dialog },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(UnsupportedBrowserModalComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should set data to injection values', async () => {

            component.ngOnInit();

            expect(component.cmsContent).toEqual({ fakeData: 'fake injected data' } as any);
        });
    });

    describe('close', () => {
        it('should call dialog.close() 1 time', async () => {
            //Assemble
            (dialog.close as jasmine.Spy).and.callFake(() => { });

            //Act
            await component['close']();

            //Assert
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });
    });



});
