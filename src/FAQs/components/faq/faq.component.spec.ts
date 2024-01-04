import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqComponent } from './faq.component';
import { FaqManagerService, FaqPaginationEventService, FaqStateService } from 'FAQs/services';
import { PaginationStateService } from 'common/ui/pagination/services/pagination-state.service';
import { EventType, ICat, ICategories, IEvent, IFaqResults, ISearchResults, IState } from 'FAQs/models';
import { IPagingState } from 'common/ui/pagination/models/pagination.interface';

describe('FAQ component', () => {

    let fixture: ComponentFixture<FaqComponent>;
    let component: FaqComponent;
    let managerSpy: jasmine.SpyObj<FaqManagerService>;
    let stateSpy: jasmine.SpyObj<FaqStateService>;
    let paginationStateSpy: jasmine.SpyObj<PaginationStateService>;
    let faqPaginationEventServiceSpy: jasmine.SpyObj<FaqPaginationEventService>;


    beforeEach(async () => {

        managerSpy = jasmine.createSpyObj('manager', ['loadPage', 'execute']);
        stateSpy = jasmine.createSpyObj('stateService', ['dispatch', 'subscribe', 'unsubscribe']);
        paginationStateSpy = jasmine.createSpyObj('paginationStateService', ['dispatchPagingInfo', 'unsubscribe']);
        faqPaginationEventServiceSpy = jasmine.createSpyObj('faqPaginationEventService', ['subscribe']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    FaqComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: FaqManagerService, useFactory: () => managerSpy },
                    { provide: FaqStateService, useFactory: () => stateSpy },
                    { provide: PaginationStateService, useFactory: () => paginationStateSpy },
                    { provide: FaqPaginationEventService, useFactory: () => faqPaginationEventServiceSpy }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FaqComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should define component', () => {
        expect(component).toBeDefined();
    });

    it('loads faq page and get data from back end', async () => {

        managerSpy.loadPage.and.resolveTo({
            categories: {} as ICategories,
            faqResults: { searchResults: {} as ISearchResults, topSearchResults: [] } as IFaqResults,
            pagination: {} as IPagingState
        });
        await component.ngOnInit();
        expect(managerSpy.loadPage).toHaveBeenCalled();
    });

    it('loads faq page and dispatch faq state service page load event ', async () => {

        const defaultCatId = '123';
        managerSpy.loadPage.and.resolveTo({
            categories: {
                categories: [],
                defaultCatId
            } as ICategories,
            faqResults: { searchResults: {} as ISearchResults, topSearchResults: [] } as IFaqResults,
            pagination: {} as IPagingState
        });
        await component.ngOnInit();

        expect(stateSpy.dispatch).toHaveBeenCalledWith({
            type: EventType.PageLoadComplete,
            data: { categoryId: defaultCatId }
        } as IEvent);


    });

    it('loads faq page and dispatch common pagination service paging event ', async () => {

        managerSpy.loadPage.and.resolveTo({
            categories: {
                categories: [],
                defaultCatId: '123'
            } as ICategories,
            faqResults: { searchResults: {} as ISearchResults, topSearchResults: [] } as IFaqResults,
            pagination: {} as IPagingState
        });
        await component.ngOnInit();

        expect(paginationStateSpy.dispatchPagingInfo).toHaveBeenCalled();
    });

    it('listens to FAQ event after FAQ page is loaded and refreshes page', async () => {

        stateSpy.subscribe.and.callFake(async (state: IState) => {
            await component['refresh'](state);
            expect(managerSpy.execute).toHaveBeenCalled();

        });

        managerSpy.loadPage.and.resolveTo({
            categories: {
                categories: [],
                defaultCatId: '123'
            } as ICategories,
            faqResults: { searchResults: {} as ISearchResults, topSearchResults: [] } as IFaqResults,
            pagination: {} as IPagingState
        });

        await component.ngOnInit();

    });

    it('listens to FAQ event after FAQ page is loaded and refreshes page and update pagination data', async () => {

        stateSpy.subscribe.and.callFake(async (state: IState) => {
            await component['refresh'](state);
            expect(managerSpy.execute).toHaveBeenCalled();
            expect(paginationStateSpy.dispatchPagingInfo).toHaveBeenCalled();
        });

        managerSpy.loadPage.and.resolveTo({
            categories: {
                categories: [],
                defaultCatId: '123'
            } as ICategories,
            faqResults: { searchResults: {} as ISearchResults, topSearchResults: [] } as IFaqResults,
            pagination: {} as IPagingState
        });

        await component.ngOnInit();

    });

    it('calls ngOndestroy', async () => {
        component.ngOnDestroy();
        expect(stateSpy.unsubscribe).toHaveBeenCalled();
        expect(paginationStateSpy.unsubscribe).toHaveBeenCalled();
    });

});


