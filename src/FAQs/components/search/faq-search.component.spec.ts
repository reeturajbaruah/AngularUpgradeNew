import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSearchComponent } from './faq-search.component';
import { FaqStateService } from 'FAQs/services';
import { FaqSharedService } from 'FAQs/services/faq-shared/faq-shared.service';

describe('FAQ search component', () => {

    let fixture: ComponentFixture<FaqSearchComponent>;
    let component: FaqSearchComponent;

    let stateSpy: jasmine.SpyObj<FaqStateService>;
    let sharedService: jasmine.SpyObj<FaqSharedService>;

    beforeEach(async () => {

        stateSpy = jasmine.createSpyObj('stateService', ['dispatch']);
        sharedService = jasmine.createSpyObj('FaqSharedService', ['setTopResultAccordion']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    FaqSearchComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: FaqStateService, useFactory: () => stateSpy },
                    { provide: FaqSharedService, useFactory: () => sharedService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FaqSearchComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should define component', () => {
        expect(component).toBeDefined();
    });

    it('maps categories on load', async () => {

        component.cats = {
            categories: [
                { id: '123', name: 'all' },
                { id: '666', name: 'aet' }
            ],
            defaultCatId: '344'
        };
        component.ngOnInit();
        expect(component.list.data.length).toEqual(component.cats.categories.length);
    });

    it('handles category change event', async () => {
        component.handleCategoryChange({ id: '123', name: 'all' });
        expect(stateSpy.dispatch).toHaveBeenCalled();
    });
});
