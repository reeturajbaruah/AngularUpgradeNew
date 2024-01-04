import { } from 'jasmine';
import { Component, NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { defer, Subject } from 'rxjs';
import { reduce, take } from 'rxjs/operators';
import { CloseOptions, ContainerComponent, InjectionValues } from './container.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { changesStable } from 'testing';



describe('component: hamburger-container', () => {

    @Component({
        selector: 'test-component',
        template: `<div></div>`
    })
    class TestComponent {
        
        set data(val: { [k: string]: any }) {
            innerComponentData = val;
        }
        close$ = defer(() => closeFromWrappedComponentSubject.asObservable());
    }

    let innerComponentData;
    let fixture: ComponentFixture<ContainerComponent>;
    let component: ContainerComponent;
    let dialogRef: jasmine.SpyObj<MatDialogRef<ContainerComponent>>;
    let injectedValues: InjectionValues;
    let keydownSubject: Subject<KeyboardEvent>;
    let backdropClickSubject: Subject<MouseEvent>;
    let closeFromWrappedComponentSubject: Subject<CloseOptions>;

    beforeEach(async () => {
        closeFromWrappedComponentSubject = new Subject();
        dialogRef = jasmine.createSpyObj('MatDialogRef', ['close', 'keydownEvents', 'backdropClick']);
        injectedValues = {
            component: TestComponent,
            bla: 1,
            something: 2
        };

        keydownSubject = new Subject<KeyboardEvent>();
        backdropClickSubject = new Subject<MouseEvent>();

        dialogRef.keydownEvents.and.returnValue(keydownSubject.asObservable());
        dialogRef.backdropClick.and.returnValue(backdropClickSubject.asObservable());

        await TestBed
            .configureTestingModule({
                declarations: [
                    ContainerComponent, TestComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, NoopAnimationsModule],
                providers: [
                    { provide: MatDialogRef, useFactory: () => dialogRef },
                    { provide: MAT_DIALOG_DATA, useFactory: () => injectedValues },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ContainerComponent);
        component = fixture.debugElement.componentInstance;
        await changesStable(fixture);
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should set wrapped component\'s data', () => {

            expect(innerComponentData).toEqual({
                bla: 1,
                something: 2
            });
        });
    });

    describe('out$', () => {

        it('should emit false then true', async () => {

            const result = component.out$.pipe(take(2), reduce((acc, curr) => [...acc, curr], [])).toPromise();

            expect(await result).toEqual([false, true]);
        });

        [false, true].forEach(all => {
            it('wrapped component should be able to close container immediately when skipAnimation true', fakeAsync(async () => {

                const beforeClosed = component.beforeClosed$.pipe(take(1)).toPromise();
                closeFromWrappedComponentSubject.next({ skipAnimation: true, all });

                tick(1);

                expect(dialogRef.close).toHaveBeenCalledTimes(1);
                expect(await beforeClosed).toBe(all);
            }));
        });

        [false, true].forEach(all => {

            it('wrapped component should be able to close container with animation', fakeAsync(async () => {

                const beforeClosed = component.beforeClosed$.pipe(take(1)).toPromise();
                closeFromWrappedComponentSubject.next({ skipAnimation: false, all });

                tick(1);

                expect(dialogRef.close).toHaveBeenCalledTimes(0);
                expect(await beforeClosed).toBe(all);

                tick(301);

                expect(dialogRef.close).toHaveBeenCalledTimes(1);
            }));
        });

        it('backdropClick should close container with animation and make beforeClosed$ emit true', fakeAsync(async () => {

            const beforeClosed = component.beforeClosed$.pipe(take(1)).toPromise();
            backdropClickSubject.next(new MouseEvent(''));

            tick(1);

            expect(dialogRef.close).toHaveBeenCalledTimes(0);
            expect(await beforeClosed).toBe(true);

            tick(301);

            expect(dialogRef.close).toHaveBeenCalledTimes(1);
        }));

        it('keydownEvents escape should close container with animation and make beforeClosed$ emit false', fakeAsync(async () => {

            const beforeClosed = component.beforeClosed$.pipe(take(1)).toPromise();
            keydownSubject.next({ key: 'Escape' } as KeyboardEvent);

            tick(1);

            expect(dialogRef.close).toHaveBeenCalledTimes(0);
            expect(await beforeClosed).toBe(false);

            tick(301);

            expect(dialogRef.close).toHaveBeenCalledTimes(1);
        }));

        ['Right', 'Left', 'Up', 'Esc'].forEach(key => {

            it('keydownEvents other than escape should not close container', fakeAsync(async () => {

                const beforeClosed = component.beforeClosed$.pipe(take(1)).toPromise();
                keydownSubject.next({ key } as KeyboardEvent);

                tick(301);

                expect(dialogRef.close).toHaveBeenCalledTimes(0);
                await expectAsync(beforeClosed).toBePending();
            }));
        });
    });
});
