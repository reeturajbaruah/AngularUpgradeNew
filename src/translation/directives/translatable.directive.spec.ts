import { } from 'jasmine';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TranslationService } from '../services';
import { TranslatableDirective } from './translatable.directive';
import { ReplaySubject } from 'rxjs';

import { changesStable } from 'testing';
import { By } from '@angular/platform-browser';

@Component({
    selector: 'test-component',
    template: `<div [translatable]></div>`
})
class TestComponent {

}

describe('directive: translatable', () => {

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let translationService: jasmine.SpyObj<TranslationService>;

    let realTime: ReplaySubject<any>;

    beforeEach(async () => {

        realTime = new ReplaySubject<any>(1);

        translationService = jasmine.createSpyObj('translationService',
            [
                'stopRealtimeTranslations',
                'startRealtimeTranslations',
            ],
            {
                realTimeTranslationsEvent: realTime
            });

        await TestBed
            .configureTestingModule({
                declarations: [
                    TranslatableDirective, TestComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: TranslationService, useFactory: () => translationService },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(TestComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        it('can subscribe', async () => {

            const spy = jasmine.createSpy('stareNewSession');
            await changesStable(fixture);

            realTime.next({
                status: 'starting',
                startNewSession: (elm) => {
                    spy(elm);
                }});

            await changesStable(fixture);

            expect(spy).toHaveBeenCalled();
            expect(spy.calls.argsFor(0)[0].nativeElement)
                .toBe(fixture.debugElement.query(By.directive(TranslatableDirective)).nativeElement);
        });
      
    });

    describe('ngDestory', () => {

        it('can unsubscribe', async () => {

            const spy = jasmine.createSpy('stareNewSession');
            await changesStable(fixture);

            realTime.next({
                status: 'starting',
                startNewSession: (elm) => {
                }
            });

            await changesStable(fixture);

            fixture.destroy();

            realTime.next({
                status: 'starting',
                startNewSession: (elm) => {
                    spy(elm);
                }
            });

            expect(spy).not.toHaveBeenCalled();

        });
    });

});
