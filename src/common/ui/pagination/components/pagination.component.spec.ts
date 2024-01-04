import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { PaginationStateService } from '../services/pagination-state.service';
import { IPagingState, PagingAction } from '../models/pagination.interface';
import { IData } from 'common/ui/dropdown/models/dropdown.interface';

describe('component: Pagination', () => {

    let fixture: ComponentFixture<PaginationComponent>;
    let component: PaginationComponent;
    let paginationStateServiceSpy: jasmine.SpyObj<PaginationStateService>;

    beforeEach(async () => {
        paginationStateServiceSpy = jasmine.createSpyObj('stateService', ['dispatchEvent', 'subscribe']);


        await TestBed
            .configureTestingModule({
                declarations: [
                    PaginationComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: PaginationStateService, useFactory: () => paginationStateServiceSpy }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.debugElement.componentInstance;
        component.itemsPerPageList = [5, 10, 20, 25];
    });

    it('should define pagination component', () => {
        expect(component).toBeDefined();
    });

    it('sets the page range', () => {

        paginationStateServiceSpy.subscribe.and.callFake((state) => {
            component.pagingState = {
                currentPage: 0,
                currentpageItemsCount: 5,
                itemsPerPage: 5,
                totalPages: 10,
                totalResultCount: 50
            } as IPagingState;

            component.setPageRange();

        });

        component.ngOnInit();
        expect(component.pageRange).toEqual('Page 1 of 10');
    });

    it('sets the records range limit', () => {

        paginationStateServiceSpy.subscribe.and.callFake((state) => {
            component.pagingState = {
                currentPage: 0,
                currentpageItemsCount: 5,
                itemsPerPage: 5,
                totalPages: 10,
                totalResultCount: 50
            } as IPagingState;

            component.setRecordsRange();

        });

        component.ngOnInit();

        expect(component.recordsRange).toEqual('1 - 5 of 50 Records');


    });

    it('sets the records range limit when current page items count is less than Items per page', () => {

        paginationStateServiceSpy.subscribe.and.callFake((state) => {
            component.pagingState = {
                currentPage: 9,
                currentpageItemsCount: 4,
                itemsPerPage: 5,
                totalPages: 10,
                totalResultCount: 49
            } as IPagingState;

            component.setRecordsRange();

        });

        component.ngOnInit();

        expect(component.recordsRange).toEqual('46 - 49 of 49 Records');


    });

    it('tests if left pagination icon is disabled', () => {

        spyOn<any>(component, 'disableRightBtn');

        paginationStateServiceSpy.subscribe.and.callFake((state) => {
            component.pagingState = {
                currentPage: 0,
                currentpageItemsCount: 5,
                itemsPerPage: 5,
                totalPages: 10,
                totalResultCount: 50
            } as IPagingState;

            component.disableNavigation();

        });

        component.ngOnInit();
        expect(component.disableLeftBtn).toBeTrue();

    });

    it('tests if left pagination icon is enabled', () => {

        spyOn<any>(component, 'disableRightBtn');

        paginationStateServiceSpy.subscribe.and.callFake((state) => {
            component.pagingState = {
                currentPage: 1,
                currentpageItemsCount: 5,
                itemsPerPage: 5,
                totalPages: 10,
                totalResultCount: 50
            } as IPagingState;

            component.disableNavigation();

        });

        component.ngOnInit();
        expect(component.disableLeftBtn).toBeFalse();

    });

    it('tests if right pagination icon is enabled', () => {

        spyOn<any>(component, 'disablePrevBtn');

        paginationStateServiceSpy.subscribe.and.callFake((state) => {
            component.pagingState = {
                currentPage: 1,
                currentpageItemsCount: 5,
                itemsPerPage: 5,
                totalPages: 10,
                totalResultCount: 50
            } as IPagingState;

            component.disableNavigation();

        });

        component.ngOnInit();
        expect(component.disableRightBtn).toBeFalse();

    });

    it('tests if right pagination icon is disabled', () => {

        spyOn<any>(component, 'disablePrevBtn');

        paginationStateServiceSpy.subscribe.and.callFake((state) => {
            component.pagingState = {
                currentPage: 9,
                currentpageItemsCount: 5,
                itemsPerPage: 5,
                totalPages: 10,
                totalResultCount: 50
            } as IPagingState;

            component.disableNavigation();

        });

        component.ngOnInit();
        expect(component.disableRightBtn).toBeTrue();

    });

    it('trigggers pagination event if right icon is clicked', () => {

        component.handleNextPagingEvent();
        expect(paginationStateServiceSpy.dispatchEvent).toHaveBeenCalledWith(PagingAction.NextPaging);
    });

    it('trigggers pagination event if left icon is clicked', () => {

        component.handlePrevPagingEvent();
        expect(paginationStateServiceSpy.dispatchEvent).toHaveBeenCalledWith(PagingAction.PrevPaging);

    });

    it('trigggers items per page event from dropdown', () => {
        const event = { displayName: '5', id: '5' } as IData;
        component.handleItemsPerPageEvent(event);
        expect(paginationStateServiceSpy.dispatchEvent).toHaveBeenCalledWith(PagingAction.ItemsPerPage, event.displayName);

    });

    it('triggers pagination event when first page icon is clicked', () => {
        component.goToFirstPage();

        expect(paginationStateServiceSpy.dispatchEvent).toHaveBeenCalledWith(PagingAction.SetPage, 0);
    });

    it('triggers pagination event when last page icon is clicked', () => {
        component.pagingState = {
            totalPages: 10
        } as IPagingState;
        component.goToLastPage();
        const lastPage = component.pagingState.totalPages - 1;
        
        expect(paginationStateServiceSpy.dispatchEvent).toHaveBeenCalledWith(PagingAction.SetPage, lastPage);
    });

    it('subsPagingState should call disableNavigation', fakeAsync(() => {
        spyOn(component, 'setPageRange').and.callFake(() => { });
        spyOn(component, 'setRecordsRange').and.callFake(() => { });
        spyOn(component, 'disableNavigation');

        component['subsPagingState']({
            currentPage: 9,
            currentpageItemsCount: 5,
            itemsPerPage: 5,
            totalPages: 10,
            totalResultCount: 50
        });

        tick(200);

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(component.disableNavigation).toHaveBeenCalled();
        });
    }));
});
