import { } from 'jasmine';

import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, DebugElement, EventEmitter, Directive, Component } from '@angular/core';
import { InputCurrencyDirective } from 'common/ui';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import {LOCALE_ID, ElementRef, Renderer2 } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { assert } from 'console';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { changesStable } from 'testing';

@Component({
    template:
    `
    <input #TEST = "ngModel"
        inputCurrency
        type="text"
        id="TEST"
        [value]="testNum | number: '1.2-2'"
        [ngModel]="testNum | number: '1.2-2'"/>
    `
})
class TestComponent {
    public testNum: any;
}

describe('InputCurrencyDirective tests', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let des;
    let currencyPipe: CurrencyPipe;
    beforeEach(async () => {
        currencyPipe = jasmine.createSpyObj('CurrencyPipe', ['transform']);
        await TestBed
            .configureTestingModule({
                declarations: [
                    InputCurrencyDirective, TestComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule],
                providers: [{ provide: CurrencyPipe, useFactory: () => currencyPipe }]
            })
            .compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;

        fixture.detectChanges(); // initial binding

        // all elements with an attached HighlightDirective
        des = fixture.debugElement.queryAll(By.directive(InputCurrencyDirective));
    });

    describe('Test Component template', () => {
        it('return 1 line of length', async () => {
            expect(des.length).toBe(1);
        });
    });

    describe('InputCurrencyDirective tests', () => {
        it('Focus over elements and return value', async () => {
            component.testNum = '1000';
            const testDe: DebugElement = fixture.debugElement;
            const linkDe = testDe.query(By.css('#TEST'));

            linkDe.triggerEventHandler('focus', null);
            fixture.detectChanges();

            await fixture.whenStable();
            await expect(linkDe.nativeElement.value).toEqual('1,000.00');
        });

        it('outFocus over elements and return value with comma and dollar sign with input big amount', async () => {
            component.testNum = '123456';
            const linkDe = fixture.debugElement.query(By.css('input'));

            linkDe.triggerEventHandler('focusout', null);
            fixture.detectChanges();
            await fixture.whenStable();

            const expectedResult = '123,456.00';
            await expect(linkDe.nativeElement.value).toEqual(expectedResult);
        });

        it('outFocus over elements and return value with comma and dollar sign with less than $1', async () => {
            component.testNum = '0.1';
            const testDe: DebugElement = fixture.debugElement;
            const linkDe = fixture.debugElement.query(By.css('input'));

            linkDe.triggerEventHandler('focusout', null);
            fixture.detectChanges();
            await fixture.whenStable();

            const expectedResult = '0.10';
            await expect(linkDe.nativeElement.value).toEqual(expectedResult);
        });
    });

});
