import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionService } from 'shared/ui/display/accordion/services/accordion.service';
import { SearchResultsComponent } from './search-results.component';
import { IResult } from 'FAQs/models';

describe('FAQ Search results component', () => {

    let fixture: ComponentFixture<SearchResultsComponent>;
    let component: SearchResultsComponent;
    let accordionServiceSpy: jasmine.SpyObj<AccordionService>;

    beforeEach(async () => {
        accordionServiceSpy = jasmine.createSpyObj('accordionService', ['createAccordionItems']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    SearchResultsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: AccordionService, useFactory: () => accordionServiceSpy }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(SearchResultsComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should define component', () => {
        expect(component).toBeDefined();
    });

    it('should call accordion service on load', () => {
        component.searchResults = {
            count: 3,
            results: [
                { lastModifiedDate: '19 Nov, 2023' } as IResult,
                { lastModifiedDate: '18 Nov, 2023' } as IResult,
                { lastModifiedDate: '17 Nov, 2023' } as IResult
            ]
        };
        component.ngOnInit();
        expect(accordionServiceSpy.createAccordionItems).toHaveBeenCalled();
    });

    it('should map sort dropdown on on load', () => {

        component.searchResults = {
            count: 3,
            results: [
                { lastModifiedDate: '19 Nov, 2023' } as IResult,
                { lastModifiedDate: '18 Nov, 2023' } as IResult,
                { lastModifiedDate: '17 Nov, 2023' } as IResult
            ]
        };

        component.ngOnInit();
        expect(component.sortList.data).toEqual([
            {
                displayName: 'Newest',
                id: 'Newest'
            },
            {
                displayName: 'Oldest',
                id: 'Oldest'
            }
        ]);
    });

    it('sorts the results in the oldest', () => {

        component.searchResults = {
            count: 3,
            results: [
                { lastModifiedDate: '19 Nov, 2023' } as IResult,
                { lastModifiedDate: '18 Nov, 2023' } as IResult,
                { lastModifiedDate: '17 Nov, 2023' } as IResult
            ]
        };
        component.sort({ id: 'Oldest' });
        expect(accordionServiceSpy.createAccordionItems).toHaveBeenCalled();

        expect(component.searchResults.results).toEqual([
            { lastModifiedDate: '17 Nov, 2023' } as IResult,
            { lastModifiedDate: '18 Nov, 2023' } as IResult,
            { lastModifiedDate: '19 Nov, 2023' } as IResult,
        ]);
    });

    it('sorts the results in the Newest', () => {

        component.searchResults = {
            count: 3,
            results: [
                { lastModifiedDate: '17 Nov, 2023' } as IResult,
                { lastModifiedDate: '19 Nov, 2023' } as IResult,
                { lastModifiedDate: '18 Nov, 2023' } as IResult,
            ]
        };
        component.sort({ id: 'Newest' });
        expect(accordionServiceSpy.createAccordionItems).toHaveBeenCalled();

        expect(component.searchResults.results).toEqual([
            { lastModifiedDate: '19 Nov, 2023' } as IResult,
            { lastModifiedDate: '18 Nov, 2023' } as IResult,
            { lastModifiedDate: '17 Nov, 2023' } as IResult
        ]);
    });


});
