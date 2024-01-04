import { } from 'jasmine';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ClickPreventDefaultDirective } from './clickPreventDefault.directive';

@Component({
    selector: 'test-component',
    template: `
<div class="without-options" clickPreventDefault></div>
<div class="with-options" [clickPreventDefault]="{ enabled: prevent }"></div>`
})
class TestComponent {
    prevent: boolean;
}

describe('directive: clickPreventDefault', () => {

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let mouseEvent: jasmine.SpyObj<MouseEvent>;

    beforeEach(async () => {

        mouseEvent = jasmine.createSpyObj('MouseEvent', ['preventDefault']);

        await TestBed
            .configureTestingModule({
                declarations: [TestComponent, ClickPreventDefaultDirective],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: []
            })
            .compileComponents();


        fixture = TestBed.createComponent(TestComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('click', () => {

        it('should prevent default when no options specified', () => {

            const element = fixture.debugElement.query(By.css('.without-options'));

            element.triggerEventHandler('click', mouseEvent);

            expect(mouseEvent.preventDefault).toHaveBeenCalledTimes(1);
        });

        it('should prevent default when options specified and enabled true', () => {

            const element = fixture.debugElement.query(By.css('.with-options'));
            component.prevent = true;
            fixture.detectChanges();

            element.triggerEventHandler('click', mouseEvent);

            expect(mouseEvent.preventDefault).toHaveBeenCalledTimes(1);
        });

        it('should not prevent default when options specified and enabled false', () => {

            const element = fixture.debugElement.query(By.css('.with-options'));
            component.prevent = false;
            fixture.detectChanges();

            element.triggerEventHandler('click', mouseEvent);

            expect(mouseEvent.preventDefault).not.toHaveBeenCalled();
        });
    });
});
