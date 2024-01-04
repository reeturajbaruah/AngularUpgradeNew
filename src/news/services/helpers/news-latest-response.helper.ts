import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { CmsUtilService } from 'cms/services';
import { INewsItem, INewsResults } from 'news/models/news.interface';

@Injectable()
export class NewsLatestResponseHelper {

    constructor(
        private cmsUtilService: CmsUtilService,
        private datePipe: DatePipe,
    ) {

    }

    parseResponse(res) {
        if (res.responses && res.responses.length > 0) {
            const response = res.responses[0].cmsResponse.toString();
            const results = this.jsonParse(response);
            const latesNews = this.cmsUtilService.processArticleArray(results);

            return this.mapResults(latesNews);

        }
    }

    private jsonParse(response){
      return  JSON.parse(response).Query.Results;
    }

    private mapResults(latesNews) {

        const newsItems = [] as INewsItem[];

        latesNews.forEach(news => {
            const item = {
                title: news.Title,
                subtitle: news.Subtitle,
                description: news.ShortDescription !== '' ? news.ShortDescription : news.LongDescription,
                publishedOn: news.NewsDisplayDate,
                targetUrl: news.LongDescription ? news.ItemPath : '',
                category: news.Categories || news.Category
            } as INewsItem;

            if (news.NewsDisplayDate) {
                const publishedDate = new Date(this.datePipe.transform(news.NewsDisplayDate, 'short'));
                const today = new Date();

                if (publishedDate <= today) {
                    newsItems.push(item);
                }
            }

        });

        return {
            count: newsItems.length,
            items: newsItems,

        } as INewsResults;
    }
}

