import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IAccordionItem } from '../models/accordion.models';
import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
	let component: AccordionComponent;
	let fixture: ComponentFixture<AccordionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
            declarations: [AccordionComponent],
            providers: [],
            schemas: [NO_ERRORS_SCHEMA]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AccordionComponent);
        component = fixture.debugElement.componentInstance;
	});

	describe('canary', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('toggleAccordion', () => {
        it('should toggle the isOpen property of an accordion item', () => {
            const mockItem = {
                isOpen: false
            } as IAccordionItem;

            component.toggleAccordion(mockItem);
            expect(mockItem.isOpen).toBeTrue();

            component.toggleAccordion(mockItem);
            expect(mockItem.isOpen).toBeFalse();
        });
    });
});
