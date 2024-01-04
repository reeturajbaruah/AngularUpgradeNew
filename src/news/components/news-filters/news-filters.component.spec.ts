import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NewsStateService } from 'news/services/state/news-state.service';
import { NewsFiltersComponent } from './news-filters.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ICategory, IState, ViewType } from 'news/models/news.interface';
import { IList } from 'common/ui/dropdown/models/dropdown.interface';
import { NewsCmsHelper } from 'news/services/helpers/news-cms-helper';


describe('component: News Filters', () => {

    let fixture: ComponentFixture<NewsFiltersComponent>;
    let component: NewsFiltersComponent;
    let newsStateServiceSpy: jasmine.SpyObj<NewsStateService>;

    let cmsHelperSpy: jasmine.SpyObj<NewsCmsHelper>;

    beforeEach(async () => {
        newsStateServiceSpy = jasmine.createSpyObj('stateService', ['dispatchEvent', 'getState', 'subscribe']);
        cmsHelperSpy = jasmine.createSpyObj('cmsHelper', ['getVal']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    NewsFiltersComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [OverlayModule],
                providers: [
                    { provide: NewsStateService, useFactory: () => newsStateServiceSpy },
                    { provide: NewsCmsHelper, useValue: cmsHelperSpy }

                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(NewsFiltersComponent);
        component = fixture.debugElement.componentInstance;

        component.categories = [
            { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
            { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }

        ] as ICategory[];
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });

    });

    it('binds categories in dropdown', () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        component.ngOnInit();

        expect(component.list).toEqual({
            data: [{ displayName: 'All', id: 'pqr' }, { displayName: 'All Electronic Tolling', id: 'pqr1' }],
            defaultDisplayName: state.category.displayName
        } as IList);

        expect(component.selectedView).toEqual(state.view);


    });

    it('handles category change', async () => {

        component.handleCategoryEvent({ displayName: 'All Electronic Tolling', id: 'pqr1' });

        expect(newsStateServiceSpy.dispatchEvent).toHaveBeenCalled();
    });

    it('changes the filter view to Latest when Archive is selected', () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Archive
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        component.handleToggleView(ViewType.Latest);

        expect(newsStateServiceSpy.dispatchEvent).toHaveBeenCalled();
    });

    it('changes the filter view to Archive when Latest is selected', () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        component.handleToggleView(ViewType.Archive);

        expect(newsStateServiceSpy.dispatchEvent).toHaveBeenCalled();
    });

    it('does not changes the filter view to Archive when Archive filter is clicked', () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Archive
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        component.handleToggleView(ViewType.Archive);

        expect(newsStateServiceSpy.dispatchEvent).not.toHaveBeenCalled();
    });

    it('does not changes the filter view to Latest when Latest filter is clicked', () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        component.handleToggleView(ViewType.Latest);

        expect(newsStateServiceSpy.dispatchEvent).not.toHaveBeenCalled();
    });


    it('sets the current filter view as Latest on page load', () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        component.getCurrentView();
        expect(component.selectedView).toEqual(ViewType.Latest);
    });

    it('sets the current filter view as Archive on page load', () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Archive
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        component.getCurrentView();
        expect(component.selectedView).toEqual(ViewType.Archive);
    });


    it('gets the sitecore filterByCategories value', () => {
        const sitecoreParamVal = 'Filter by Categories:';
        cmsHelperSpy.getVal.and.returnValue(sitecoreParamVal);
        expect(component.getVal('filterByCategories')).toEqual(sitecoreParamVal);
    });

    it('gets the sitecore view value', () => {
        const sitecoreParamVal = 'View:';
        cmsHelperSpy.getVal.and.returnValue(sitecoreParamVal);
        expect(component.getVal('view')).toEqual(sitecoreParamVal);
    });

});
