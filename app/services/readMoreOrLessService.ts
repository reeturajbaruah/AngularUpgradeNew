module HCTRA.Service {
    // export interface IReadMoreOrLessService {
    //     getReadMoreOrLessInitialState(shortContent: string, longContent: string, defaultToMore: boolean, titleName: string, itemId, itemPath);
    // }
}

module HCTRA.Service {
    // export class ReadMoreOrLessService implements IReadMoreOrLessService {
    //     static $inject = ['$injector', 'linkLookupService', '$state', 'stateNames'];

    //     readonly readLess: string = "Read Less";
    //     readonly readMore: string = "Read More";

    //     constructor(private $injector: ng.auto.IInjectorService, private linkLookupService, private $state, private stateNames) { }

    //     defaultToLess = (titleName) => titleName === 'Transtar Map'

    //     breakoutPageNeeded = () => [
    //         this.stateNames.closures,
    //         this.stateNames.newsFeed,
    //         this.stateNames.closuresArchiveChild,
    //         this.stateNames.newsArchiveChild]
    //         .indexOf(this.$state.current.name) > -1;

    //     displayBreakoutPageLink = (longContent: string, defaultToLess: boolean, needsBreakoutPage: boolean): boolean =>
    //         !!(longContent && !defaultToLess && needsBreakoutPage);

    //     isLongContent = (longContent: string, defaultToLess: boolean, defaultToMore: boolean): boolean =>
    //         !!(longContent && !defaultToLess && defaultToMore);

    //     getContent = (shortContent: string, longContent: string, defaultToLess: boolean, defaultToMore: boolean): string => {

    //         if (!shortContent) return longContent || "";

    //         return this.isLongContent(longContent, defaultToLess, defaultToMore) ? longContent : shortContent;
    //     }

    //     getExpanderText = (shortContent: string, longContent: string, defaultToLess: boolean, defaultToMore: boolean): string =>
    //         shortContent && this.isLongContent(longContent, defaultToLess, defaultToMore) ? this.readLess : this.readMore;

    //     displayReadMoreOrLessLink = (shortContent: string, longContent: string, defaultToLess: boolean, displayBreakOutPageLink) =>
    //         !!(shortContent && longContent && shortContent !== longContent && !defaultToLess && !displayBreakOutPageLink);

    //     getArticleUrl = (itemId, itemPath) => [
    //         this.stateNames.closuresArchiveChild,
    //         this.stateNames.newsArchiveChild]
    //         .indexOf(this.$state.current.name) > -1 ? this.linkLookupService.articleLookupById(itemId) : this.linkLookupService.articleLookup(itemPath);

    //     getReadMoreOrLessInitialState = (shortContent: string, longContent: string, defaultToMore: boolean, titleName: string, itemId, itemPath) => {

    //         const defaultToLess = this.defaultToLess(titleName);
    //         const needsBreakoutPage = this.breakoutPageNeeded();
    //         const displayBreakOutPageLink = this.displayBreakoutPageLink(longContent, defaultToLess, needsBreakoutPage);

    //         return {
    //             content: this.getContent(shortContent, longContent, defaultToLess, defaultToMore),
    //             expanderText: this.getExpanderText(shortContent, longContent, defaultToLess, defaultToMore),
    //             displayBreakoutPageLink: displayBreakOutPageLink,
    //             displayReadMoreOrLessLink: this.displayReadMoreOrLessLink(shortContent, longContent, defaultToLess, displayBreakOutPageLink),
    //             articleUrl: this.getArticleUrl(itemId, itemPath)
    //         };
    //     }
    // }
}

(() => {
    'use strict';

    // angular.module('HCTRAModule').service('readMoreOrLessService', HCTRA.Service.ReadMoreOrLessService);
})();