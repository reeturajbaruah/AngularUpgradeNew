import { } from 'jasmine';
import { Component, NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NotifyOnChangeComponent } from './notifyOnChange.component';
import { changesStable } from 'testing';
import { By } from '@angular/platform-browser';

@Component({
    selector: 'test-component',
    template: `<notify-on-change [watch]="testInputToWatch" (notify)="notifyCalled()"></notify-on-change>`
})
class TestComponent {

    testInputToWatch: any;
    notifyCalled() {}
}

describe('component: hamburger-container', () => {


    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(async () => {
        

        await TestBed
            .configureTestingModule({
                declarations: [
                    NotifyOnChangeComponent, TestComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: []
            })
            .compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.debugElement.componentInstance;
        await changesStable(fixture);
        spyOn(testComponent, 'notifyCalled');
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('display', () => {

        it('should be none', async () => {

            const notifyComponent = fixture.debugElement.query(By.css('notify-on-change'));
            expect(notifyComponent.styles['display']).toBe('none');
        });
    });

    describe('watch', () => {

        it('should emit notify when changed', async () => {

            testComponent.testInputToWatch = 1;

            fixture.detectChanges();

            expect(testComponent.notifyCalled).toHaveBeenCalledTimes(1);
        });

        it('should not emit notify when no change', async () => {

            [1, 1, 2, 1].forEach(val => {


                testComponent.testInputToWatch = val;

                fixture.detectChanges();
            });

            expect(testComponent.notifyCalled).toHaveBeenCalledTimes(3);
        });
    });
});
