import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TweetRetrievalService } from '../services/tweetRetrieval/tweetRetrieval.service';

interface SocialMediaCmsData {
    UserLogo: string;
    TwitterLogo: string;
    TwitterUserName: string;
    TwitterEmptyDescription: string;
    LeftDescription: string;
    RightDescription: string;
}

@Component({
    selector: 'social-media-alt-component',
    templateUrl: './socialMediaAlt.component.html',
    styleUrls: ['./socialMediaAlt.component.less']
})
export class SocialMediaAltComponent implements OnInit, OnDestroy {
    constructor(
        private tweetRetrieval: TweetRetrievalService,
    ) { }

    @Input() imageSliderArrow: any;
    @Input() cmsData: SocialMediaCmsData;

    tweets: string[] = [];

    ngOnInit() {
        this.tweetRetrieval.getTweets()
        .then(response => {
            this.tweets = response;
            this.tweetRetrieval.loadTwitterWidget();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    ngOnDestroy() {
        const script = document.querySelector(TweetRetrievalService.twitterWidgetScriptSelector);
        if (script) {
            script.remove();
        }
    }
}
