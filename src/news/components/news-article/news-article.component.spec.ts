import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NewsArticleComponent } from './news-article.component';
import { StateService } from '@uirouter/core';
import { Subject } from 'rxjs';
import { GenericRepoService, MatIconAvailabilityService } from 'common/services';
import { CmsResolverService } from 'cms/services';
import { Location } from '@angular/common';
import { PipesModule } from 'pipes/module';
import { NewsCmsHelper } from 'news/services/helpers/news-cms-helper';

describe('component: News Article', () => {

    let fixture: ComponentFixture<NewsArticleComponent>;
    let component: NewsArticleComponent;
    let state: jasmine.SpyObj<StateService>;
    let matIcon: jasmine.SpyObj<MatIconAvailabilityService>;
    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;
    let location: jasmine.SpyObj<Location>;
    let cmsHelperSpy: jasmine.SpyObj<NewsCmsHelper>;
    let genericRepo: any;

    beforeEach(async () => {

        state = jasmine.createSpyObj('StateService', ['go']);
        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        matIcon = jasmine.createSpyObj('matIconAvailabilityService', ['whenAvailable']);
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);
        cmsResolverService.resolve.and.returnValue(Promise.resolve({
            facebook: 'fake facebook',
            twitter: 'fake twitter',
            instagram: 'fake instagram',
            linkedin: 'fake linkedin',
            youtube: 'fake youtube'
        }));
        location = jasmine.createSpyObj('location', ['go']);
        cmsHelperSpy = jasmine.createSpyObj('cmsHelper', ['initialize', 'reset', 'getVal']);

        await TestBed
            .configureTestingModule({
                declarations: [
                     NewsArticleComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: MatIconAvailabilityService, useFactory: () => matIcon },
                    { provide: CmsResolverService, useFactory: () => cmsResolverService },
                    { provide: Location, useFactory: () => location },
                    { provide: NewsCmsHelper, useValue: cmsHelperSpy }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(NewsArticleComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });

    });

    describe('ngOnInit', () => {

        beforeEach(() => {

            const params = { CmsId: '123' } as any;
            state.params = params;

            genericRepo.dataFactory.getCmsPageById.and.resolveTo({
                cmsResponse: JSON.stringify({
                    Title: 'fakeTitle',
                    Subtitle: 'fakeSubTitle',
                    NewsDisplayDate: '1/1/2022',
                    Category: 'fakeCategory',
                    LongDescription: 'fake long desc'

                })
            });

            const subject = new Subject<void>();
            matIcon.whenAvailable.and.returnValue(subject.asObservable());

        });

        it('should notify subscribers of commonCmsContent when commonCmsContentRetrieved', async () => {

            const before = component.commonCmsContent.toPromise();
            await expectAsync(before).toBePending();

            await component.ngOnInit();

            const after = component.commonCmsContent.toPromise();


            await expectAsync(before).toBeResolvedTo({
                facebook: 'fake facebook',
                twitter: 'fake twitter',
                instagram: 'fake instagram',
                linkedin: 'fake linkedin',
                youtube: 'fake youtube'
            });
            await expectAsync(after).toBeResolvedTo({
                facebook: 'fake facebook',
                twitter: 'fake twitter',
                instagram: 'fake instagram',
                linkedin: 'fake linkedin',
                youtube: 'fake youtube'
            });

        });

    });

    describe('ngOnDestroy', () => {

        it('should complete commonCmsContentSubject', async () => {

            const before = component.commonCmsContent.toPromise();
            await expectAsync(before).toBePending();

            component.ngOnDestroy();

            const after = component.commonCmsContent.toPromise();

            await expectAsync(before).toBeResolved();
            await expectAsync(after).toBeResolved();
        });
    });

    describe('viewArchiveClick', () => {
        it('should call location.go', async () => {
            component.viewArchiveClick();

            expect(location.go).toHaveBeenCalled();
        });
    });

    it('gets the sitecore publishedOn value', () => {
        const sitecoreParamVal = 'Published on:';
        cmsHelperSpy.getVal.and.returnValue(sitecoreParamVal);
        expect(component.getVal('publishedOn')).toEqual(sitecoreParamVal);
    });

});
