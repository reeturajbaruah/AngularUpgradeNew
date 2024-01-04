/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { } from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgForm, FormsModule } from '@angular/forms';

import {
    Component, NgModule, Type, OnInit, InjectionToken,
    Inject, ViewContainerRef, ViewChild, ComponentFactoryResolver,
    DebugElement, EventEmitter
} from '@angular/core';


import { environment } from 'environments/environment';

if (environment.production) {
    throw Error('Testing utilities module is not intended for production');
}

@Component({ template: '<form #f="ngForm"><ng-container #template></ng-container></form>' })
class FormWrapComponent implements OnInit {

    @ViewChild('f', { static: true }) form: NgForm;
    @ViewChild('template', { static: true, read: ViewContainerRef }) child: ViewContainerRef;

    innerComponent: any;
    init: (component: any) => void;
    childType: Type<any>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngOnInit() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.childType);
        this.child.clear();
        this.innerComponent = this.child.createComponent(componentFactory).instance;
        this.init(this.innerComponent);
    }
}

export async function changesStable(fixture: ComponentFixture<any>): Promise<void> {
    fixture.detectChanges();
    await fixture.whenStable();
}

export async function createFormWrap<T>(componentType: Type<T>, init: (component: T) => void): Promise<{
    fixture: ComponentFixture<any>;
    component: T;
    form: NgForm;
}> {
    const fixture = TestBed.createComponent(FormWrapComponent);
    fixture.componentInstance.init = init;
    fixture.componentInstance.childType = componentType;

    fixture.detectChanges();
    await fixture.whenStable();

    const component = fixture.componentInstance.innerComponent as T;
    const form = fixture.componentInstance.form;

    return { fixture, component, form };
}

@NgModule({
    declarations: [FormWrapComponent],
    imports: [FormsModule],
})
export class TestingModule { }
