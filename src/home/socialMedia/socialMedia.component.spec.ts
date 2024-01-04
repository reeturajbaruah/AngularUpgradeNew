import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { changesStable } from 'testing';
import { SocialMediaComponent } from './socialMedia.component';

import { CmsUtilService } from 'cms/services';
import { WebApiTwitterService } from '../services/webApiTwitter.service';
import { DateWithTimeZoneService } from 'common/services';

describe('component: homePage-socialMedia', () => {

    let fixture: ComponentFixture<SocialMediaComponent>;
    let component: SocialMediaComponent;
    let cmsUtilService: CmsUtilService;
    let twitterApi: WebApiTwitterService;
    let dateWithTimeZoneService: jasmine.SpyObj<DateWithTimeZoneService>;
    
    beforeEach(async () => {
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        twitterApi = jasmine.createSpyObj('api', ['GetTwitter']);
        dateWithTimeZoneService = jasmine.createSpyObj('DateWithTimeZoneService', ['withoutOffsetToCentral']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    SocialMediaComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: WebApiTwitterService, useFactory: () => twitterApi },
                    { provide: DateWithTimeZoneService, useFactory: () => dateWithTimeZoneService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(SocialMediaComponent);
        component = fixture.debugElement.componentInstance;


        component.cmsData = {
            UserLogo: null,
            TwitterLogo: null,
            TwitterUserName: null,
            TwitterEmptyDescription: null,
            LeftDescription: null,
            RightDescription: null
        };
        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValues({
            image: 'content'
        });

        (twitterApi.GetTwitter as jasmine.Spy).and.resolveTo({
            errors: [],
            tweets: []
        });

    });

    describe('canary', () => {
        it('should pass', async () => {

            await changesStable(fixture);
            expect(true).toBe(true);
        });
    });

    describe('getWidthPercentage', () => {
        it('should splits depend on length', async () => {
            const ressult1 = component.getWidth(2);
            expect(ressult1).toEqual(50);

            const ressult2 = component.getWidth(4);
            expect(ressult2).toEqual(25);
        });
    });

    describe('ngOnInit', () => {
        it('should parse User Logos', async () => {
            component.userLogo = null;
            component.cmsData = {
                UserLogo: 'somethingUser',
                TwitterLogo: null,
                TwitterUserName: null,
                TwitterEmptyDescription: null,
                LeftDescription: null,
                RightDescription: null
            };

            await component.ngOnInit();
            expect(component.userLogo).toEqual('content');
        });

        it('should parse Twitter Logos', async () => {
            component.cmsData = {
                TwitterLogo: 'somethingUser',
                UserLogo: null,
                TwitterUserName: null,
                TwitterEmptyDescription: null,
                LeftDescription: null,
                RightDescription: null
            };

            await component.ngOnInit();
            expect(component.tweetLogo).toEqual('content');
        });

        it('should parse Tweets', async () => {
            component.cmsData = {
                TwitterLogo: 'somethingUser',
                UserLogo: null,
                TwitterUserName: null,
                TwitterEmptyDescription: null,
                LeftDescription: null,
                RightDescription: null
            };

            (twitterApi.GetTwitter as jasmine.Spy).and.resolveTo({
                errors: [],
                tweets: [
                    {
                        media: [{
                            httpMediaURL: 'https://pbs.twimg.com/media/E6HGBNkXIAEpqMa.png',
                            mediaURL: 'https://t.co/QbLKgepIbv'
                        }],
                        text: 'Test 30 https://t.co/QbLKgepIbv',
                        time: 'Mon Jul 12 16:55:27 +0000 2021'
                    },
                    {
                        media: [],
                        text: 'test26',
                        time: 'Wed Jun 30 22:07:41 +0000 2021'
                    }
                ]
            });

            await component.ngOnInit();
            expect(component.tweets[0].text).toEqual('Test 30 <a target=\"_blank\" href=\"https://t.co/QbLKgepIbv\">https://t.co/QbLKgepIbv</a>');
            expect(component.tweets[1].text).toEqual('test26');
            expect(dateWithTimeZoneService.withoutOffsetToCentral).toHaveBeenCalledTimes(2);

            const args1 = (dateWithTimeZoneService.withoutOffsetToCentral as jasmine.Spy).calls.argsFor(0);
            const args2 = (dateWithTimeZoneService.withoutOffsetToCentral as jasmine.Spy).calls.argsFor(1);

            expect(args1[1]).toBe('MMM DD YYYY');
            expect(args2[1]).toBe('MMM DD YYYY');
        });
    });
});
