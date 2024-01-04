import { TestBed } from '@angular/core/testing';
import { AccordionService } from './accordion.service';

describe('Accordion Service', () => {
    let service: AccordionService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [
                AccordionService,
            ]
        });
	});

	beforeEach(() => {
        service = TestBed.inject(AccordionService);
	});

    describe('canary', () => {
        it('should create', () => {
            expect(service).toBeTruthy();
        });
    });

    describe('createAccordionItems', () => {
        it('should create an array of accordion items with default keys', () => {
            const items = [
                { Title: 'Item1', Category: 'Name1', LastUpdate: '20210101T000000Z', ShortDescription: 'Desc1' },
                { Title: 'Item2', Category: 'Name2', LastUpdate: '20210102T000000Z', ShortDescription: 'Desc2' }
            ];

            const accordionItems = service.createAccordionItems(items);

            expect(accordionItems.length).toBe(items.length);
            expect(accordionItems[0].Title).toBe('Item1');
            expect(accordionItems[1].Title).toBe('Item2');
        });

        it('should create an array of accordion items with custom keys', () => {
            const customKeys = ['customTitle', 'customCategory', 'customLastUpdate', 'customShortDescription'];
            const items = [
                { customTitle: 'Item1', customCategory: 'Name1', customLastUpdate: '20210101T000000Z', customShortDescription: 'Desc1' },
                { customTitle: 'Item2', customCategory: 'Name2', customLastUpdate: '20210102T000000Z', customShortDescription: 'Desc2' }
            ];

            const accordionItems = service.createAccordionItems(items, customKeys);

            expect(accordionItems.length).toBe(items.length);
            expect(accordionItems[0].Title).toBe('Item1');
            expect(accordionItems[1].Title).toBe('Item2');
        });
    });

    describe('createAccordionItem', () => {
        it('should create an accordion item with correct properties', () => {
            const mockItem = {
                Title: 'Test Title',
                Category: 'testname',
                LastUpdate: '20200624T212000Z',
                ShortDescription: 'Test Description'
            };

            const accordionItem = service.createAccordionItem(mockItem);

            expect(accordionItem.Title).toBe(mockItem.Title);
            expect(accordionItem.Category).toBe(mockItem.Category.toUpperCase());
            expect(accordionItem.LastUpdate).toBe('Last Modified: June 24, 2020 at 4:20 PM');
            expect(accordionItem.ShortDescription).toBe(mockItem.ShortDescription);
            expect(accordionItem.isOpen).toBeFalse();
        });
    });
});
