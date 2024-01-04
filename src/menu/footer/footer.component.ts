import {
    ChangeDetectionStrategy,
    Component, OnInit
} from '@angular/core';
import { CmsResolverService } from 'cms/services';
import { MatIconAvailabilityService } from 'common/services';
import { cmsIds } from 'menu/constants';
import { FrameComponent } from 'menu/frame/frame.component';
import { ActiveBreakPoints, ActiveBreakPointsService, CmsMenuLink, LinkInfo, MenuLinkMapperService } from 'menu/services';
import { from, Observable } from 'rxjs';
import { combineLatest, map } from 'rxjs/operators';

@Component({
    selector: 'menu-footer-component',
    templateUrl: './footer.html',
    styleUrls: ['./footer.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

    constructor(
        private parent: FrameComponent,
        private cmsResolverService: CmsResolverService,
        private menuLinkMapper: MenuLinkMapperService,
        private matIcon: MatIconAvailabilityService,
        private activeBreakPoints: ActiveBreakPointsService
    ) { }

    public facebook$: Observable<string>;
    public twitter$: Observable<string>;
    public instagram$: Observable<string>;
    public linkedin$: Observable<string>;
    public youtube$: Observable<string>;
    public showHctraLogo$: Observable<boolean>;
    public links$: Observable<LinkInfo[]>;
    public activeBreakPoints$: Observable<ActiveBreakPoints>;
    public copyRightText$: Observable<string>;

    ngOnInit() {

        this.activeBreakPoints$ = this.activeBreakPoints.asObservable();

        this.copyRightText$ = from(this.cmsResolverService.resolve({ ItemId: cmsIds.CopyrightText }))
            .pipe(map(x => x.ShortDescription));


        this.links$ = this.menuLinkMapper.getMapFilterObservable(
            from(this.cmsResolverService.resolve({ ItemId: cmsIds.FooterLinks }) as Promise<CmsMenuLink>)
                .pipe(map(link => link.Children))
        );

        this.facebook$ = this.matIcon.whenAvailable('facebook-icon')
            .pipe(
                combineLatest(this.parent.commonCmsContent),
                map(([, res]) => res.facebook)
            );

        this.twitter$ = this.matIcon.whenAvailable('twitter-icon')
            .pipe(
                combineLatest(this.parent.commonCmsContent),
                map(([, res]) => res.twitter)
            );

        this.instagram$ = this.matIcon.whenAvailable('instagram-icon')
            .pipe(
                combineLatest(this.parent.commonCmsContent),
                map(([, res]) => res.instagram)
            );

        this.linkedin$ = this.matIcon.whenAvailable('linkedin-icon')
            .pipe(
                combineLatest(this.parent.commonCmsContent),
                map(([, res]) => res.linkedin)
            );

        this.youtube$ = this.matIcon.whenAvailable('youtube-icon')
            .pipe(
                combineLatest(this.parent.commonCmsContent),
                map(([, res]) => res.youtube)
            );

        this.showHctraLogo$ = this.matIcon.whenAvailable('hctra-logo').pipe(map(() => true));
    }
}
