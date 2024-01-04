import { Component, Input, OnInit } from '@angular/core';
import { CmsUtilService } from 'cms/services';
import { WebApiTwitterService } from '../services/webApiTwitter.service';
import { DateWithTimeZoneService } from 'common/services';

interface SocialMediaCmsData {
    UserLogo: string;
    TwitterLogo: string;
    TwitterUserName: string;
    TwitterEmptyDescription: string;
    LeftDescription: string;
    RightDescription: string;
}

@Component({
    selector: 'social-media-component',
    templateUrl: './socialMedia.html',
    styleUrls: ['./socialMedia.less']
})
export class SocialMediaComponent implements OnInit {
    constructor(
        private dateWithTimeZoneService: DateWithTimeZoneService,
        private cmsUtilService: CmsUtilService,
        private twitterApi: WebApiTwitterService,
    ) { }
    //TODO: Cast actual Type to variable
    @Input() cmsData: SocialMediaCmsData;
    @Input() imageSliderArrow: any;

    public userLogo: any;
    public tweetLogo: any;
    public tweets = [];
    public async ngOnInit() {
        this.userLogo = this.cmsData.UserLogo ? this.cmsUtilService.parseAllImageAttributes(this.cmsData.UserLogo).image : null;
        this.tweetLogo = this.cmsData.TwitterLogo ? this.cmsUtilService.parseAllImageAttributes(this.cmsData.TwitterLogo).image : null;
        await this.getTweet();
    }

    private async getTweet() {
        const res = await this.twitterApi.GetTwitter();
        if (res.tweets !== null) {
            this.parseTweets(res.tweets);
            //this.removeImageLink();
        };

    }

    private removeImageLink() {
        //Twitter will return link in text instead of image (if there is an image)
        //Will need to remove link if that is the case
        this.tweets.forEach(child => {
            if (child.media.length > 0) {
                child.media.forEach(grandChild => {
                    child.text = child.text.replaceAll(grandChild.mediaURL, '');
                });
            }
        });
    }

    //Move to API in future
    private tweetRefactor(tweet) {
        let currentText = tweet.text;

        //Convert urls to <a> links
        let urlString = currentText.match(/([\w]+\:\/\/[\w-?&;#~=\.\/\@]+[\w\/])/g);
        urlString = [... new Set(urlString)];
        urlString.forEach((child) => {
            //convert Link to A Tag
            currentText = currentText.replaceAll(child, `<a target=\"_blank\" href=\"${child}\">${child}</a>`);
        });

        //Convert hashtags to twitter searches in <a> links
        let hashTagString = currentText.match(/#([A-Za-z0-9\/\.]*)/g);
        hashTagString = [... new Set(hashTagString)];
        hashTagString.forEach(child => {
            const noHashText = child.replace('#', '');
            
            currentText = currentText.replaceAll(child, `<a target=\"_blank\" href=\"https://twitter.com/hashtag/${noHashText}?src=hashtag_click">${child}</a>`);
        });
       
        //Convert attags to twitter profiles in <a> links
        let atString = currentText.match(/@([A-Za-z0-9\/\.]*)/g);
        atString = [... new Set(atString)];
        atString.forEach(child => {
            currentText = currentText.replaceAll(child, `<a target=\"_blank\" href=\"https://twitter.com/${child}">${child}</a>`);
        });

        //new lines
        currentText = currentText.replace(/(?:\r\n|\r|\n)/g, '<br>');

        return currentText;
    }

    private parseTweets(res) {
        const mapChild = child => (
            {
                text: this.tweetRefactor(child),
                media: child.media,
                maxUniformHeight: child.maxUniformHeight,
                time: this.dateWithTimeZoneService.withoutOffsetToCentral(child.time, 'MMM DD YYYY')
            }
        );

        this.tweets = res
            .map(child => mapChild(child));
    }

    public getWidth(length: number) {
        return 100 / length;
    };

    public styleImage(index, imageCount) {
        if (index === 0 && imageCount % 2 === 1) {
            return { height: 250 / (imageCount > 2 ? 2 : 1) + 'px', width: this.getWidth(1) + '%;' };
        }
        return { height: 250 / (imageCount > 2 ? 2 : 1) + 'px', width: this.getWidth(2) + '%;' };
    }
}
