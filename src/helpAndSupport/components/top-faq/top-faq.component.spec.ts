import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ITopFaqCms } from 'helpAndSupport/models/top-faq.models';
import { HelpAndSupportManagerService } from 'helpAndSupport/services/manager/help-and-support-manager.service';
import { IAccordionItem } from 'shared/ui/display/accordion/models/accordion.models';
import { AccordionService } from 'shared/ui/display/accordion/services/accordion.service';
import { TopFaqComponent } from './top-faq.component';

const mockFaqItem = [{
    Title: 'mock title'
}] as IAccordionItem[];

const mockTopFaqCms = {
    Title: 'mock title',
    Children: mockFaqItem
} as ITopFaqCms;

describe('TopFaqComponent', () => {
	let component: TopFaqComponent;
	let fixture: ComponentFixture<TopFaqComponent>;

    let managerMock: jasmine.SpyObj<HelpAndSupportManagerService>;
    let accordionServiceMock: jasmine.SpyObj<AccordionService>;

	beforeEach(async () => {
        managerMock = jasmine.createSpyObj('HelpAndSupportManagerService', ['getTopFaqCms']);
        accordionServiceMock = jasmine.createSpyObj('HelpAndSupportManagerService', ['createAccordionItems']);

		await TestBed.configureTestingModule({
            declarations: [TopFaqComponent],
            providers: [
                { provide: HelpAndSupportManagerService, useFactory: () => managerMock },
                { provide: AccordionService, useFactory: () => accordionServiceMock },
            ],
            schemas: [NO_ERRORS_SCHEMA]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TopFaqComponent);
        component = fixture.debugElement.componentInstance;
	});

	describe('canary', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should load data from getTopFaqCms and creare accordion items', () => {
            managerMock.getTopFaqCms.and.returnValue(mockTopFaqCms);
            accordionServiceMock.createAccordionItems.and.returnValue(mockFaqItem);

            component.ngOnInit();

            expect(component.topFaqCms).toEqual(mockTopFaqCms);
            expect(component.topFaqItems).toEqual(mockFaqItem);
        });
    });
});
