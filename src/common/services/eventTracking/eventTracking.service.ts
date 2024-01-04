import { Injectable, Inject } from '@angular/core';
import { TransitionService, Transition } from '@uirouter/angular';
import { IEventTrackingData } from 'common/interfaces';
import { EventTrackingRule } from 'common/models';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { isUndefined } from 'lodash';
import * as moment from 'moment';
import { BrowserExtensionHandlerService } from 'common/services';

export type UrlHistoryArray = { oldUrl: string; newUrl: string; date: Date }[];

@Injectable()
export class EventTrackingService {

  private urlHistoryArray: UrlHistoryArray = [];
  private readonly pathnameSensitivity = 1000; // milliseconds, the distance in the past it will consider history entries as viable 'last page' candidates
  private readonly historyEntryMax = 5;

    constructor(
        private browserExtensionHandlerService: BrowserExtensionHandlerService,
        @Inject(ENVIRON_CONFIG) private environmentConfig: any,
        private transitionService: TransitionService
  ) { }

  public initGlobalEventTracking = this.runOnce(() => {
    const config = this.environmentConfig.eventTrackingConfig;

    if (config.EventTrackingEnabled) {

      document.addEventListener('click', e => {
        const elem: any = e.target;

        // TODO: MAKE EVERYTHING PAST HERE ASYNC SO THE SLOW REGEXES DON'T BRING EVERYTHING TO A HALT
        //  we want the click to succeed no matter what, and in good time

        const rawIdList = this.getDomElementIdChain(elem); // id list of all elements up parent chain (null if no id)
        const clickedElementId = rawIdList[0]; // grabs direct click id (null if no id)
        const idList = rawIdList.filter(u => !isUndefined(u) && u !== null); // removes null and undefined from list

        this.trackEvents(clickedElementId, idList, config.Rules);
      });

      this.transitionService.onBefore({}, this.onTransitionStart);
    }
  });

  private onTransitionStart = (transition: Transition) => {
    this.urlHistoryArray.unshift({
      oldUrl: transition.from().url,
      newUrl: transition.to().url,
      date: new Date()
    });

    while (this.urlHistoryArray.length > this.historyEntryMax) {
      this.urlHistoryArray.pop();
    }
  };


  public frpTrackViolationCounts(invoicedViolations: any, uninvoicedViolations: any) {
    const numInvoicesPaid = invoicedViolations.hData.length + invoicedViolations.fData.length + invoicedViolations.mData.length;

    const numViolationsPaid = uninvoicedViolations.invoices.hData.length +
      uninvoicedViolations.invoices.fData.length +
      uninvoicedViolations.invoices.mData.length;

    if (numInvoicesPaid > 0) {
      this.browserExtensionHandlerService.sendEvent('violations', 'frp_payment', 'frp-invoices', numInvoicesPaid);
    }

    if (numViolationsPaid > 0) {
      this.browserExtensionHandlerService.sendEvent('violations', 'frp_payment', 'frp-violations', numViolationsPaid);
    }
  };

  public matTrackViolationCounts(violations: any[]): void {
    const numViolations = violations.length;

    if (numViolations > 0) {
      this.browserExtensionHandlerService.sendEvent('violations', 'mat_payment', 'mat-violations', numViolations);
    }
  };

  private trackEvents(clickedElementId: string, idList: string[], rules: EventTrackingRule[]): void {
    const pathname = this.getPathname(new Date(), this.urlHistoryArray, this.pathnameSensitivity);
    let anEventHasBeenTracked = false;

    // TODO: improve performance; these loops can be exited early on certain conditions
    for (const id of idList) {
      for (const rule of rules) {
        const ruleIdWithHash = rule.Id;
        const pageMatches = (!rule.Page && !rule.PageRegex) || (rule.Page && rule.Page === pathname) || (rule.PageRegex && (new RegExp(rule.PageRegex)).test(pathname));
        const idMatches = (ruleIdWithHash && ruleIdWithHash === id) || (rule.IdRegex && (new RegExp(rule.IdRegex)).test(id));

        if (pageMatches && idMatches) {
          const trackData: IEventTrackingData = {
            name: rule.Name,
            id,
            pathname
          };

          if (rule.TriggerIf === 'DIRECT') {

            if (id === clickedElementId) {
              this.trackEvent(trackData);

              anEventHasBeenTracked = true;
            }
          }
          else if (rule.TriggerIf === 'EARLIEST') {
            if (!anEventHasBeenTracked) {
              this.trackEvent(trackData);

              anEventHasBeenTracked = true;
            }
          }
          else if (rule.TriggerIf === 'HAS_PREDECESSOR') {
            if (anEventHasBeenTracked) {
              this.trackEvent(trackData);
            }
          }
          else { // DEFAULT is to track no matter the order in the hierarchy
            this.trackEvent(trackData);
            anEventHasBeenTracked = true;
          }
        }
      }
    }
  }

  private trackEvent(data: IEventTrackingData) {
    this.browserExtensionHandlerService.sendEvent(data.pathname, `click-${data.name}`, data.id);
  }

  private runOnce(cb: any) {
    let hasRun = false;

    return () => {
      if (!hasRun) {
        cb();

        hasRun = true;
      }
    };
  }

  // The following is somewhat complex code designed to overcome an issue with location.pathname;
  //  the problem is that the page URL often changes before the 'click' event listener fires, meaning a
  //  call to location.pathname in an event listener will return the NEW page name, when I want the OLD one.
  //  So I've written code to track history of page navigation and try to determine what the likeliest origin
  //  of the 'click' event was by looking at the last 1000 milliseconds and deciding which page the user was
  //  on the longest, figuring that that is probably the source of the click
  public getPathname(initDate: Date, urlHistoryArray: UrlHistoryArray, sensitivity: number): string {
    let historyUrl = '';

    if (urlHistoryArray.length > 1) {

      const recentHistory = urlHistoryArray;

      const durationArray: number[] = [];
      let nextDate = initDate;
      let longestDurationIndex = 0;
      let durationSum = 0;
      for (let i = 0; i < recentHistory.length; i++) {

        durationArray[i] = moment.duration(moment(nextDate).diff(recentHistory[i].date)).asMilliseconds();
        nextDate = recentHistory[i].date;

        if (durationArray[i] > durationArray[longestDurationIndex]) {

          longestDurationIndex = i;
        }

        durationSum += durationArray[i];

        if (durationSum >= sensitivity) {

          break;
        }
      }

      historyUrl = recentHistory[longestDurationIndex].newUrl;
    }
    else {
      historyUrl = urlHistoryArray[0].newUrl;
    }

    return historyUrl;
  }

  private getDomElementIdChain(el: HTMLElement): string[] {
    const parentArr: HTMLElement[] = this.getParents(el);
    const idChain = parentArr.map<string>(u => u.id || null);

    return idChain;
  }

  private getParents(el: HTMLElement): HTMLElement[] {
    const result: HTMLElement[] = [];

    if (!el) {
      return result;
    }

    const root = el.ownerDocument.querySelector(':root');

    for (let parent = el; parent && parent.nodeType === Node.ELEMENT_NODE && parent !== root; parent = parent.parentElement) {
      result.push(parent);
    }

    return result;
  }

}
