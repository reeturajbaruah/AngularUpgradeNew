import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { INewsItem, INewsResults } from 'news/models/news.interface';

@Injectable()
export class NewsArchiveResHelper {

    constructor(
        private datePipe: DatePipe,
    ) {
    }

    parseResponse(res) {

        const results = {
            count: res.numberOfArticles,
            items: this.parseArticles(res),

        } as INewsResults;

        return results;
    }

    private parseArticles(res) {
        const items = [] as INewsItem[];

        if (res.articles) {
            res.articles.forEach(article => {
                const item = {
                    title: article.title,
                    description: article.shortDescription,
                    publishedOn: article.newsDisplayDate,
                    subtitle: article.subtitle,
                    targetUrl: article.longDescription ? article.itemPath : '',
                    category: article.categories || article.category

                } as INewsItem;

                if (article.newsDisplayDate) {
                    const publishedDate = new Date(this.datePipe.transform(article.newsDisplayDate, 'short'));
                    const today = new Date();

                    if (publishedDate <= today) {
                        items.push(item);
                    }
                }

            });
        }
        return items;
    }
}
