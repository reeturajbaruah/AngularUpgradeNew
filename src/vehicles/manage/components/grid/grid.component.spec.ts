import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { GridComponent } from './grid.component';

describe('component: GridComponent', () => {

    let fixture: ComponentFixture<GridComponent>;
    let component: GridComponent;

    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [
                    GridComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(GridComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('handleArrowClick', () => {

        it('can emit vehicle', () => {

            const vehicle = {} as any;

            const spy = jasmine.createSpy('arrowClickSpy');

            component.arrowClick.subscribe(spy);

            component.handleArrowClick(vehicle);

            expect(spy).toHaveBeenCalledWith(vehicle);

        });

    });

    describe('showArrow', () => {

        it('shows if predicate not set', () => {

            const vehicle = {} as any;

            component.showArrowPredicate = null;
            const show = component.showArrow(vehicle);

            expect(show).toBeTrue();

        });

        it('pass through predicate', () => {

            const vehicle = {} as any;

            component.showArrowPredicate = () => true;
            let show = component.showArrow(vehicle);

            expect(show).toBeTrue();

            component.showArrowPredicate = () => false;
            show = component.showArrow(vehicle);

            expect(show).toBeFalse();

        });

    });
});
