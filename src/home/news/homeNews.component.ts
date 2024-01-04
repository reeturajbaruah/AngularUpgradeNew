import { DatePipe } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { CmsUtilService } from 'cms/services';
import { WindowRef } from 'common/providers';
@Component({
    selector: 'home-news-component',
    templateUrl: './homeNews.html',
    styleUrls: ['./homeNews.less']
})
export class HomeNewsComponent implements OnInit {
    constructor(
        private cmsUtilService: CmsUtilService,
        private datePipe: DatePipe,
    ) { }

    @Input() cmsData: any;
    defaultNewsImages: any;
    public newsList: any;
    public imageList = [];
    public currentIndexFocus = 0;

    public get isBackActive(): boolean {
        return this.currentIndexFocus > 0;
    }

    public get isNextActive(): boolean {
        return this.currentIndexFocus < this.imageList.length - 4;
    }

    public get isNextActiveMobile(): boolean {
        return this.currentIndexFocus < this.imageList.length - 1;
    }

    public goNext() {
        if (this.isNextActive) {
            this.currentIndexFocus++;
        }
    }

    public goNextMobile() {
        if (this.isNextActiveMobile) {
            this.currentIndexFocus++;
        }
    }

    public goBack() {
        if (this.isBackActive) {
            this.currentIndexFocus--;
        }
    }

    ngOnInit() {
        this.newsList = this.cmsData.Children[0].Query.Results || [];
        this.newsList = this.cmsUtilService.processArticleArray(this.newsList);
        this.defaultNewsImages = this.cmsData.Children[1];
        this.fillNewsSection();
        this.fillDefaultImages();
    }

    @HostListener('window:resize')
    public handleResize() {
        this.currentIndexFocus = 0;
    }

    public fillNewsSection() {
        const mapChild = child => (
            {
                title: child.Title,
                image: child.Image ? this.cmsUtilService.parseAllImageAttributes(child.Image).image
                    : this.cmsUtilService.parseAllImageAttributes(this.defaultNewsImages.Children[0].Image).image,
                URL: 'News' + '#' + child.ItemID,
                categories: child.Categories ? child.Categories : ''
            }
        );

        const today = new Date();

        const filteredNewsList = this.newsList.filter(x => new Date(this.datePipe.transform(x.NewsDisplayDate, 'short')) <= today);

        this.imageList = filteredNewsList
            .reduce(
                (acc, child) => [...acc, mapChild(child)], this.imageList
            ).filter(x => x.URL);
    }

    public fillDefaultImages() {
        const mapChild = child => (
            {
                title: child.Title,
                image: this.cmsUtilService.parseAllImageAttributes(child.Image).image,
                URL: child.URL,
                categories: child.Categories ? child.Categories : ''
            }
        );

        this.imageList = this.defaultNewsImages.Children
            .reduce(
                (acc, child) => acc.length < 4 ? [...acc, mapChild(child)] : acc, this.imageList
            ).filter(x=> x.URL);
    }
}
