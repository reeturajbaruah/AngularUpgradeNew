import { Injectable, Inject } from '@angular/core';
import * as moment from 'moment';
import { cloneDeep } from 'lodash';
import { capitalizeKeys } from 'common/utilities';
import { UrlPaths } from 'constants/module';


@Injectable()
export class CmsUtilService {
    constructor(
        private routes: UrlPaths
    ) { }


    public generateFileSrc(tagString: string, includeExt?: boolean): string {
        if (tagString && typeof tagString === 'string') {
            let src = this.routes.cmsMediaUrl + this.parseMediaId(tagString);

            if (includeExt) {
                src += this.routes.cmsMediaExt;
            }

            return src;
        }
        return tagString;
    }

    public processItemId(rawItemId: string) {
        if (rawItemId && typeof rawItemId === 'string') {
            return rawItemId.replace(/-|{|}/g, '');
        }
        return '';
    }

    public parseAltText(tagString: string) {
        if (tagString && typeof tagString === 'string') {
            const regex = /alt="(.+)"/;
            const altParsedArray = regex.exec(tagString);
            if (Array.isArray(altParsedArray) && altParsedArray.length === 2) {
                return altParsedArray[1].split('"')[0];
            }
        }
        return '';
    }

    public parseAllImageAttributes(imageString: string) {
        const image = this.generateFileSrc(imageString);
        const alt = this.parseAltText(imageString);
        const height = this.parseHeight(imageString);
        const width = this.parseWidth(imageString);

        return {
            image,
            alt,
            height,
            width
        };
    }

    public convertStartEndDates(articleArr: any[]): any[] {
        const arrayCopy = cloneDeep(articleArr);
        if (arrayCopy) {
            for (let i = 0; i < arrayCopy.length; i++) {
                arrayCopy[i] = capitalizeKeys(arrayCopy[i], ['startDate', 'endDate']);
                this.setDateProp(arrayCopy[i], 'StartDate');
                this.setDateProp(arrayCopy[i], 'EndDate');
            }
        }
        return arrayCopy;
    }

    public addDisplayDates(article, isClosuresArchive?: boolean) {
        article.displayDate = this.formatDisplayDates(article, isClosuresArchive);
        return article;
    }

    public processArticleArray(articleArr: any[], isClosuresArchive?: boolean): any[] {
        let articleArrCopy: any[] = cloneDeep(articleArr);
        if (Array.isArray(articleArrCopy) && articleArrCopy.length > 0) {
            articleArrCopy = this.convertStartEndDates(articleArrCopy);
            articleArrCopy = articleArrCopy.filter(this.isExpiredFilterForCms.bind(this));

            articleArrCopy = articleArrCopy.map((article) => this.addDisplayDates(article, isClosuresArchive));
        }
        return articleArrCopy;
    }

    private isExpiredFilterForCms(articleParam) {
        const { IsPermanent, EndDate } = capitalizeKeys(articleParam, ['isPermanent', 'endDate', 'startDate']);
        return this.shouldShowArticle(IsPermanent, EndDate);
    }

    private shouldShowArticle(isPermanent: string, endDate: string | Date) {
        const showPermanently = isPermanent === '1';
        const noEndDate = endDate === null || endDate === '';

        let hasNotReachedEndDate = false;

        if (!noEndDate && endDate) {
            hasNotReachedEndDate = this.isBefore(moment().toDate(), endDate as Date, this.specificTimeBetween);
        }

        return showPermanently || noEndDate || hasNotReachedEndDate;
    };


    private isBefore(dateFrom: Date, dateTo: Date, compareFn?: (dateFrom: Date, dateTo: Date) => number) {
        return this.compareDates(dateFrom, dateTo, compareFn) > 0;
    }

    private specificTimeBetween(first: Date, second: Date) {

        const date1 = Date.UTC(first.getFullYear(),
            first.getMonth(),
            first.getDate(),
            first.getHours(),
            first.getMinutes(),
            first.getSeconds(),
            first.getMilliseconds());

        const date2 = Date.UTC(second.getFullYear(),
            second.getMonth(),
            second.getDate(),
            second.getHours(),
            second.getMinutes(),
            second.getSeconds(),
            second.getMilliseconds());

        return date2 - date1;
    };

    private compareDates(dateFrom: Date, dateTo: Date, compareFn?: (dateFrom: Date, dateTo: Date) => number) {

        if (!dateFrom || !dateTo) {
            return 0;
        };

        return typeof compareFn == 'function' ? compareFn(dateFrom, dateTo) : this.daysBetween(dateFrom, dateTo);
    }

    private daysBetween(first: Date, second: Date) {
        const date1: number = Date.UTC(first.getFullYear(), first.getMonth(), first.getDate());
        const date2: number = Date.UTC(second.getFullYear(), second.getMonth(), second.getDate());

        const millisPerDay: number = 1000 * 60 * 60 * 24;
        const millisBetween: number = date2 - date1;
        const days: number = millisBetween / millisPerDay;

        return Math.round(days);
    };


    private parseMediaId(tagString) {
        if (tagString && typeof tagString === 'string') {
            const regex = /mediaid="{(.*)}"/;
            const mediaId = regex.exec(tagString)[1];

            return mediaId.replace(/-/g, '');
        }
        return '';
    }

    private parseHeight(tagString) {
        if (tagString && typeof tagString === 'string') {
            const regex = /height="(.+)"/;
            const heightParsedArray = regex.exec(tagString);
            if (Array.isArray(heightParsedArray) && heightParsedArray.length === 2) {
                return heightParsedArray[1].split('"')[0] + 'px';
            }
        }
        return '';
    }

    private parseWidth(tagString) {
        if (tagString && typeof tagString === 'string') {
            const regex = /width="(.+)"/;
            const widthParsedArray = regex.exec(tagString);
            if (Array.isArray(widthParsedArray) && widthParsedArray.length === 2) {
                return widthParsedArray[1].split('"')[0] + 'px';
            }
        }
        return '';
    }

    private setDateProp(dateObj: { [key: string]: any }, dateProp: string) {
        if (dateObj[dateProp] != null && dateObj[dateProp] !== '') {
            dateObj[dateProp] = this.parseCmsDate(dateObj[dateProp]);
        }
    }

    private parseCmsDate(cmsDateStr: string) {
        // Sitecore returns 20160813T215600Z which is UTC
        // https://doc.sitecore.net/sitecore_experience_platform/setting_up__maintaining/utc/datetime/storing_datetime_values_in_databases
        const outDate = moment(cmsDateStr, 'YYYYMMDD[T]HHmmssZ');
        return outDate.toDate();
    }

    private formatDisplayDates(articleParam, isClosuresArchive?: boolean) {
        const article = capitalizeKeys(articleParam, ['startDate', 'endDate']);

        const formedStart = this.reformatDate(article.StartDate, isClosuresArchive);
        const formedEnd = this.reformatDate(article.EndDate, isClosuresArchive);

        if (article.StartDate && article.EndDate) {
            return formedStart + ' - ' + formedEnd;
        } else if (article.StartDate && !article.EndDate) {
            return 'Starting ' + formedStart;
        } else if (!article.StartDate && article.EndDate) {
            return 'Through ' + formedEnd;
        }
    }

    // Accepts a JavaScript Date type
    // Returns returns a string representation of the date
    private reformatDate(inDate: Date, isClosuresArchive?: boolean): string {
        const year = isClosuresArchive ? '[,] YYYY' : '';
        const formatString = 'MMM D' + year + ' [at] h:mma';
        let dateString: string;

        if (inDate instanceof Date) {
            dateString = moment(inDate).format(formatString);
        }

        return dateString;
    }
}
