import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, OnDestroy, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { asyncScheduler, defer, EMPTY, Observable, of, Subject } from 'rxjs';
import { take, tap, merge, map, filter, concat, observeOn, concatMap, delay, startWith, mergeMap } from 'rxjs/operators';

export interface CloseOptions {
    all: boolean;
    skipAnimation?: boolean;
}
export interface InjectionValues {
    component: new (...args) => {
        data: { [k: string]: any };
        close$: Observable<CloseOptions>;
    };
    [k: string]: any;
}

@Component({
    selector: 'hamburger-container',
    templateUrl: './container.html',
    styleUrls: ['./container.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slideTrigger', [
            state('false', style({ width: '0px' })),
            state('true', style({ })),
            transition('false => true', [
                animate('0.25s linear')
            ]),
            transition('true => false', [
                animate('0.25s linear')
            ]),
        ]),
    ]
})

export class ContainerComponent implements OnInit, OnDestroy {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private dialogRef: MatDialogRef<ContainerComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedValues: InjectionValues) { }
    
    @ViewChild('template', { static: false, read: ViewContainerRef }) child: ViewContainerRef;

    public out$: Observable<boolean>;
    private beforeClosedSubject = new Subject<boolean>();

    public get beforeClosed$() {
        return this.beforeClosedSubject.asObservable();
    }

    ngOnDestroy(): void {
        this.beforeClosedSubject.complete();
    }

    ngOnInit() {
        const { component, ...rest } = this.injectedValues;
        this.dialogRef.disableClose = true;

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

        const closeFromWrappedComponent$ = of('now')
            .pipe(
                delay(200),
                mergeMap((() => {
                //the ngif used to unwrap out$ makes it so this.child is not available onInit even with static true
                //the child is available after out$ is subscribed to by the template so we wait until that happens
                this.child.clear();
                const ref = this.child.createComponent(componentFactory);
                ref.instance.data = rest;
                ref.changeDetectorRef.markForCheck(); //Because we are using on push change strategy
                return ref.instance.close$;
            })));

        const closeObservable$ = this.dialogRef.keydownEvents()
            .pipe(
                filter(x => x.key && x.key.toLowerCase() === 'escape'),//IE is 'esc'
                map(() => ({ all: false, skipAnimation: false })),
                merge(this.dialogRef.backdropClick().pipe(map(() => ({ all: true, skipAnimation: false })))),
                merge(closeFromWrappedComponent$),
                //close triggers above
                take(1),
                tap(({ all }) => this.beforeClosedSubject.next(all)),
                tap(() => this.child && this.child.clear()),
                concatMap(({ skipAnimation }) =>
                    of('delay').pipe(
                        skipAnimation ? map(x => x) : delay(250),
                        tap(() => this.dialogRef.close()),
                        concatMap(() => EMPTY),
                        startWith('now')
                    ))

        );

        this.out$ = of(true)
            .pipe(
                delay(50),
                startWith(false),
                //concat subscribe after above stream completes
                concat(closeObservable$.pipe(map(() => false)))
            );
    }

}
