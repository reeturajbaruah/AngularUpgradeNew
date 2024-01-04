namespace HCTRA.Service {
    "use strict";

    export interface IDateService {
        getDaysAgo(diffDays: number, date?: Date): Date;
        isBefore(dateFrom: Date, dateTo: Date, compareFn?: (dateFrom: Date, dateTo: Date) => number): boolean;
        isAfter(dateFrom: Date, dateTo: Date, compareFn?: (dateFrom: Date, dateTo: Date) => number): boolean;
        isExpiredFilterForCms(articleParam: HCTRA.Model.SitecoreItem): boolean;
        isDate(dateinStringFormat: string): boolean;
        pickerFormat: string;
        getDateOptions(minDate: string, today: string): {
            formatDay: string,
            showWeeks: boolean,
            minDate: Date,
            maxDate: Date
        };
    }

    export class DateService implements IDateService {

        static $inject = ["objectUtilService", "momentService"];

        constructor(private objectUtilService: IObjectUtilService,
            private momentService: IMomentService) { }


        public getDaysAgo = (diffDays: number, date?: Date): Date => {
            let newDate: Date = angular.copy(date) || this.momentService.moment().toDate();
            newDate.setDate(newDate.getDate() - diffDays);
            return newDate;
        };

        public isBefore = (dateFrom: Date, dateTo: Date, compareFn?: (dateFrom: Date, dateTo: Date) => number): boolean =>
            this.compareDates(dateFrom, dateTo, compareFn) > 0;

        public isAfter = (dateFrom: Date, dateTo: Date, compareFn?: (dateFrom: Date, dateTo: Date) => number): boolean =>
            this.compareDates(dateFrom, dateTo, compareFn) < 0;

        public isExpiredFilterForCms = (articleParam: HCTRA.Model.SitecoreItem) => {
            let article: HCTRA.Model.SitecoreItem =
                this.objectUtilService.toCapitalizedCaseKeys<HCTRA.Model.SitecoreItem>(
                    articleParam,
                    ["isPermanent", "endDate", "startDate"]);
            return this.shouldShowArticle(article.IsPermanent, article.EndDate);
        };

        public isDate = (dateinStringFormat: string): boolean => {
            // TODO: Use the momentService to convert to Date
            let potentialDate: Date = new Date(dateinStringFormat);
            if (angular.isDate(potentialDate)) {
                // it is a date
                if (!isNaN(potentialDate.getTime())) {
                    return true;
                }
            }
            return false;
        };

        public pickerFormat = "MM/dd/yyyy";

        public getDateOptions = (minDate: string, today: string) => {
            return {
                formatDay: "d",
                showWeeks: false,
                minDate: this.momentService.moment(minDate).toDate(),
                maxDate: this.momentService.moment(today).toDate()
            };
        };

        private compareDates = (dateFrom: Date, dateTo: Date, compareFn?: (dateFrom: Date, dateTo: Date) => number): number => {

            if (!dateFrom || !dateTo) return 0;

            return angular.isFunction(compareFn) ? compareFn(dateFrom, dateTo) : this.daysBetween(dateFrom, dateTo);
        }

        private daysBetween = (first: Date, second: Date): number => {
            let date1: number = Date.UTC(first.getFullYear(), first.getMonth(), first.getDate());
            let date2: number = Date.UTC(second.getFullYear(), second.getMonth(), second.getDate());

            let millisPerDay: number = 1000 * 60 * 60 * 24;
            let millisBetween: number = date2 - date1;
            let days: number = millisBetween / millisPerDay;

            return Math.round(days);
        };

        private specificTimeBetween = (first: Date, second: Date): number => {
            let date1: number = Date.UTC(first.getFullYear(),
                first.getMonth(),
                first.getDate(),
                first.getHours(),
                first.getMinutes(),
                first.getSeconds(),
                first.getMilliseconds());
            let date2: number = Date.UTC(second.getFullYear(),
                second.getMonth(),
                second.getDate(),
                second.getHours(),
                second.getMinutes(),
                second.getSeconds(),
                second.getMilliseconds());
            return date2 - date1;
        };

        private shouldShowArticle = (isPermanent: string, endDate: string | Date): boolean => {
            let showPermanently: boolean = isPermanent === "1";
            let noEndDate: boolean = endDate === null || endDate === "";

            let hasNotReachedEndDate: boolean = false;
            if (!noEndDate && angular.isDefined(endDate)) {
                hasNotReachedEndDate = this.isBefore(this.momentService.moment().toDate(), <Date>endDate, this.specificTimeBetween);
            }

            return showPermanently || noEndDate || hasNotReachedEndDate;
        };
    }
}

(function (): void {
    "use strict";
    angular.module("HCTRAModule").service("dateService", HCTRA.Service.DateService);
}());