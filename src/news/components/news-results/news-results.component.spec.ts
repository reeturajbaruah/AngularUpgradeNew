import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NewsResultsComponent } from './news-results.component';
import { NewsCmsHelper } from 'news/services/helpers/news-cms-helper';

describe('component: News Results', () => {

    let fixture: ComponentFixture<NewsResultsComponent>;
    let component: NewsResultsComponent;
    let cmsHelperSpy: jasmine.SpyObj<NewsCmsHelper>;


    beforeEach(async () => {
        cmsHelperSpy = jasmine.createSpyObj('cmsHelper', ['getVal']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    NewsResultsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: NewsCmsHelper, useValue: cmsHelperSpy }]
            })
            .compileComponents();


        fixture = TestBed.createComponent(NewsResultsComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should define news results component', () => {
        expect(component).toBeDefined();
    });


    it('gets the sitecore searchResults value', () => {
        const sitecoreParamVal = 'News Search Results For:';
        cmsHelperSpy.getVal.and.returnValue(sitecoreParamVal);
        expect(component.getVal('searchResults')).toEqual(sitecoreParamVal);
    });

    it('gets the sitecore itemsFound value', () => {
        const sitecoreParamVal = 'items found';
        cmsHelperSpy.getVal.and.returnValue(sitecoreParamVal);
        expect(component.getVal('itemsFound')).toEqual(sitecoreParamVal);
    });



});
