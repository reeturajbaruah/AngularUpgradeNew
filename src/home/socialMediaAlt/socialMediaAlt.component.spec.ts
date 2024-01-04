import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';

import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';

import { SocialMediaAltComponent } from './socialMediaAlt.component';
import { CmsUtilService } from 'cms/services';
import { TweetRetrievalService } from '../services/tweetRetrieval/tweetRetrieval.service';

describe('component: socialMediaAlt', () => {

    let fixture: ComponentFixture<SocialMediaAltComponent>;
    let component: SocialMediaAltComponent;
    let cmsUtilService: CmsUtilService;
    let tweetRetrievalService: TweetRetrievalService;
    
    beforeEach(async () => {
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        tweetRetrievalService = jasmine.createSpyObj('tweetRetrievalService', ['getTweets', 'loadTwitterWidget']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    SocialMediaAltComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: TweetRetrievalService, useFactory: () => tweetRetrievalService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(SocialMediaAltComponent);
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

        (tweetRetrievalService.getTweets as jasmine.Spy).and.resolveTo([]);
    });

    describe('canary', () => {
        it('should pass', async () => {
            await changesStable(fixture);
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should retrieve tweets and load Twitter widget', async () => {
            await component.ngOnInit();
            expect(tweetRetrievalService.getTweets).toHaveBeenCalled();
            expect(tweetRetrievalService.loadTwitterWidget).toHaveBeenCalled();
        });

        it('should handle error from tweetRetrievalService.getTweets', fakeAsync(() => {
            (tweetRetrievalService.getTweets as jasmine.Spy).and.rejectWith(new Error('Failed to retrieve tweets'));
            spyOn(console, 'error');
            component.ngOnInit();
            tick();
            expect(tweetRetrievalService.getTweets).toHaveBeenCalled();
            expect(console.error).toHaveBeenCalledWith('Error:', new Error('Failed to retrieve tweets'));
        }));        
    });

    describe('ngOnDestroy', () => {
        it('should remove Twitter widget script', () => {
            component.ngOnDestroy();
            const scriptElement = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
            expect(scriptElement).toBeNull();
        });        
    });
});
