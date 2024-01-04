import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NewsItemComponent } from './news-item.component';
import { LinkLookupService } from 'cms/services';
import { CmsModule } from 'cms/cms.module';
import { NewsCmsHelper } from 'news/services/helpers/news-cms-helper';
import { PipesModule } from 'pipes/module';

describe('component: News Items', () => {

    let fixture: ComponentFixture<NewsItemComponent>;
    let component: NewsItemComponent;
    let linkLookupServiceSpy: jasmine.SpyObj<LinkLookupService>;
    let cmsHelperSpy: jasmine.SpyObj<NewsCmsHelper>;

    beforeEach(async () => {

        linkLookupServiceSpy = jasmine.createSpyObj('linkLookupService', ['articleLookup']);
        cmsHelperSpy = jasmine.createSpyObj('cmsHelper', ['getVal']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    NewsItemComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [CmsModule, PipesModule],
                providers: [
                    { provide: LinkLookupService, useFactory: () => linkLookupServiceSpy },
                    { provide: NewsCmsHelper, useValue: cmsHelperSpy }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(NewsItemComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should define news item component', () => {
        expect(component).toBeDefined();

    });

    it('should define news item component', () => {

        component.readMore('');
        expect(linkLookupServiceSpy.articleLookup).toHaveBeenCalled();

    });

    it('gets the sitecore publishedOn value', () => {
        const sitecoreParamVal = 'Published on:';
        cmsHelperSpy.getVal.and.returnValue(sitecoreParamVal);
        expect(component.getVal('publishedOn')).toEqual(sitecoreParamVal);
    });

    it('gets the sitecore readMore value', () => {
        const sitecoreParamVal = 'Read More';
        cmsHelperSpy.getVal.and.returnValue(sitecoreParamVal);
        expect(component.getVal('readMore')).toEqual(sitecoreParamVal);
    });

});
