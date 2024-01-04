import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DialogRef } from 'common/services';
import { CancelModalComponent, InjectedCancelationValues } from './cancelModal.component';

describe('CancelModalComponent', () => {

    let fixture: ComponentFixture<CancelModalComponent>;
    let component: CancelModalComponent;
    let dialogRef: DialogRef<InjectedCancelationValues>;

    beforeEach(async () => {

        dialogRef = {
            close: jasmine.createSpy('close') as ((InjectedCancelationValues) => void),
            data: {} as InjectedCancelationValues
        } as DialogRef<InjectedCancelationValues>;

        await TestBed
            .configureTestingModule({
                declarations: [
                    CancelModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef}
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CancelModalComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('makeChoice', () => {
        it('should call close', () => {
            //Act
            component.makeChoice(true);

            //Assert
            expect(dialogRef.close).toHaveBeenCalledWith(dialogRef.data);
            const args = (dialogRef.close as jasmine.Spy).calls.argsFor(0);
            const value = args[0] as InjectedCancelationValues;
            expect(value).toBeDefined();
            expect(value.isCancelled).toBeTruthy();
        });

        it('should call dismiss', () => {
            //Act
            component.makeChoice(false);

            //Assert
            expect(dialogRef.close).toHaveBeenCalledWith(dialogRef.data);
            const args = (dialogRef.close as jasmine.Spy).calls.argsFor(0);
            const value = args[0] as InjectedCancelationValues;
            expect(value).toBeDefined();
            expect(value.isCancelled).toBeFalsy();
        });
    });

});

