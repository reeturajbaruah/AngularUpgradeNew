import { Injectable } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/core';
import { LinkLookupService } from 'cms/services';
import { stateNames } from '../../../constants/stateNames.constants';

@Injectable()
export class ReadMoreOrLessService {

  readonly readLess: string = 'Read Less';
  readonly readMore: string = 'Read More';

  constructor(
    private linkLookupService: LinkLookupService,
    private uiRouterGlobals: UIRouterGlobals
  ) { }

  defaultToLess(titleName: string): boolean { return titleName === 'Transtar Map'; }

  breakoutPageNeeded(): boolean {
    return [
      stateNames.closures,
      stateNames.newsFeed,
      stateNames.closuresArchiveChild,
      stateNames.newsArchiveChild
    ].indexOf(this.uiRouterGlobals.current.name) > -1;
  }

  displayBreakoutPageLink(longContent: string, defaultToLess: boolean, needsBreakoutPage: boolean): boolean { return !!(longContent && !defaultToLess && needsBreakoutPage); }

  isLongContent(longContent: string, defaultToLess: boolean, defaultToMore: boolean): boolean { return !!(longContent && !defaultToLess && defaultToMore); }

  getContent(shortContent: string, longContent: string, defaultToLess: boolean, defaultToMore: boolean): string {

    if (!shortContent) { return longContent || ''; }

    return this.isLongContent(longContent, defaultToLess, defaultToMore) ? longContent : shortContent;
  }

  getExpanderText(shortContent: string, longContent: string, defaultToLess: boolean, defaultToMore: boolean): string {
    return shortContent && this.isLongContent(longContent, defaultToLess, defaultToMore) ? this.readLess : this.readMore;
  }

  displayReadMoreOrLessLink(shortContent: string, longContent: string, defaultToLess: boolean, displayBreakOutPageLink): boolean {
    return !!(shortContent && longContent && shortContent !== longContent && !defaultToLess && !displayBreakOutPageLink);
  }

  getArticleUrl(itemId: string, itemPath: string): string {
    return [
      stateNames.closuresArchiveChild,
      stateNames.newsArchiveChild
    ].indexOf(this.uiRouterGlobals.current.name) > -1 ? this.linkLookupService.articleLookupById(itemId) : this.linkLookupService.articleLookup(itemPath);
  }

  getReadMoreOrLessInitialState(shortContent: string, longContent: string, defaultToMore: boolean, titleName: string, itemId: string, itemPath: string): any {

    const defaultToLess = this.defaultToLess(titleName);
    const needsBreakoutPage = this.breakoutPageNeeded();
    const displayBreakOutPageLink = this.displayBreakoutPageLink(longContent, defaultToLess, needsBreakoutPage);

    return {
      content: this.getContent(shortContent, longContent, defaultToLess, defaultToMore),
      expanderText: this.getExpanderText(shortContent, longContent, defaultToLess, defaultToMore),
      displayBreakoutPageLink: displayBreakOutPageLink,
      displayReadMoreOrLessLink: this.displayReadMoreOrLessLink(shortContent, longContent, defaultToLess, displayBreakOutPageLink),
      articleUrl: this.getArticleUrl(itemId, itemPath)
    };
  }
}
