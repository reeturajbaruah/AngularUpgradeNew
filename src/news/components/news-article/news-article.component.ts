import { Component, Inject, OnInit, OnDestroy, Input } from '@angular/core';
import { StateService } from '@uirouter/core';
import { combineLatest,  Observable, Subject, ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { GenericRepoService, MatIconAvailabilityService } from 'common/services';
import { cmsIds as menuCMSIds } from 'menu/constants';
import { CmsResolverService } from 'cms/services';
import { Location } from '@angular/common';
import { NewsCmsHelper } from 'news/services/helpers/news-cms-helper';
import { INewsCms } from 'news/models/news.interface';

@Component({
    selector: 'news-article',
    templateUrl: './news-article.component.html',
    styleUrls: ['./news-article.component.less']
})
export class NewsArticleComponent implements OnInit, OnDestroy {

    public title: string;
    public subtitle: string;
    public newsDisplayDate: string;
    public category: string;
    public longDescription: string;

    public cmsPathDictionary: any;

    constructor(
        private state: StateService,
        private genericRepoSerivice: GenericRepoService,
        private matIcon: MatIconAvailabilityService,
        private cmsResolverService: CmsResolverService,
        private location: Location,
        private cmsHelper: NewsCmsHelper
    ) { }

    @Input() public newsArticleCms: INewsCms;

    public facebook$: Observable<string>;
    public twitter$: Observable<string>;
    public instagram$: Observable<string>;
    public linkedin$: Observable<string>;
    public youtube$: Observable<string>;

    private commonCmsContentSubject = new ReplaySubject<{ facebook: string; twitter: string; instagram: string; linkedin: string; youtube: string }>();

    private onDestroySubject = new Subject<void>();

    ngOnDestroy(): void {
        this.commonCmsContentSubject.complete();
        this.onDestroySubject.next();
        this.cmsHelper.reset();
    }

    public get commonCmsContent() {
        //only one value needed as this is not being updated
        return this.commonCmsContentSubject
            .pipe(take(1));
    }

    async ngOnInit() {

        this.cmsHelper.initialize(this.newsArticleCms);

        const cmsId = this.state.params.CmsId;

        const request = { ItemId: cmsId };

        ////send request for cms data
        const response = await this.genericRepoSerivice.dataFactory.getCmsPageById(request);

        const parsedResponse = JSON.parse(response.cmsResponse);

        this.title = parsedResponse.Title;
        this.subtitle = parsedResponse.Subtitle;
        this.newsDisplayDate = parsedResponse.NewsDisplayDate;
        this.category = parsedResponse.Categories || parsedResponse.Category;
        this.longDescription = parsedResponse.LongDescription;

        const { facebook, twitter, instagram, linkedin, youtube } = await this.cmsResolverService.resolve({ ItemId: menuCMSIds.CommonCmsContent, mergeParams: true });
        this.commonCmsContentSubject.next({ facebook, twitter, instagram, linkedin, youtube });

        this.facebook$ = this.matIcon.whenAvailable('facebook-icon')
            .pipe(
                available$ => combineLatest(available$, this.commonCmsContent),
                map(([, res]) => res.facebook)
            );

        this.twitter$ = this.matIcon.whenAvailable('twitter-icon')
            .pipe(
                available$ => combineLatest(available$, this.commonCmsContent),
                map(([, res]) => res.twitter)
            );

        this.instagram$ = this.matIcon.whenAvailable('instagram-icon')
            .pipe(
                available$ => combineLatest(available$, this.commonCmsContent),
                map(([, res]) => res.instagram)
            );

        this.linkedin$ = this.matIcon.whenAvailable('linkedin-icon')
            .pipe(
                available$ => combineLatest(available$, this.commonCmsContent),
                map(([, res]) => res.linkedin)
            );

        this.youtube$ = this.matIcon.whenAvailable('youtube-icon')
            .pipe(
                available$ => combineLatest(available$, this.commonCmsContent),
                map(([, res]) => res.youtube)
            );


    }

    public async viewArchiveClick() {

        await this.location.go('News?filter=Archive');
    }

    getVal(key: string) {
        return this.cmsHelper.getVal(key);
    }

}
