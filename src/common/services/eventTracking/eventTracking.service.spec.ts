import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EventTrackingService } from './eventTracking.service';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { Component, OnInit } from '@angular/core';
import { TransitionService } from '@uirouter/angular';
import { BrowserExtensionHandlerService } from '../browserExtensionHandlerService/browserExtensionHandler.service';

@Component({
  template: '<html><div id="myDiv"><button id="myBtn"></button></div></html>'
})
class TestComponent implements OnInit {
  constructor(private ets: EventTrackingService) { }

  ngOnInit(): void {
    this.ets.initGlobalEventTracking();
  }

  click() {
    const el = document.getElementById('myBtn');
    el.click();
  }
}

describe('EventTrackingService', () => {
  let service: EventTrackingService;
  let browserExtensionHandlerService: jasmine.SpyObj<any>;
  let environmentConfig: jasmine.SpyObj<any>;
  let transitionService: jasmine.SpyObj<TransitionService>;

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {
    browserExtensionHandlerService = jasmine.createSpyObj('browserExtensionHandlerService', ['sendEvent']);
    environmentConfig = jasmine.createSpyObj('environmentConfig', null, { eventTrackingConfig: { EventTrackingEnabled: true, Rules: [{ Id: '', Page: 'new' }] } });
    transitionService = jasmine.createSpyObj('TransitionService', ['onBefore']);

    browserExtensionHandlerService.sendEvent.and.callFake(() => { });

    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [
          EventTrackingService,
          { provide: BrowserExtensionHandlerService, useFactory: () => browserExtensionHandlerService },
        { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
        { provide: TransitionService, useFactory: () => transitionService }
      ]
    }).compileComponents();
    service = TestBed.inject(EventTrackingService);

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initGlobalEventTracking', () => {
    it('should be created', <any>fakeAsync(() => { // eslint-disable-line @typescript-eslint/consistent-type-assertions
      spyOn(document, 'addEventListener').and.callThrough();
      spyOn(document, 'dispatchEvent').and.callThrough();
      spyOn(service, 'initGlobalEventTracking').and.callThrough();

      component.ngOnInit();

      tick(100);

      service['onTransitionStart']({ from: () => ({ url: 'test' }), to: () => ({ url: 'test' }) } as any);

      tick(100);

      component.click();

      tick(100);

      expect(document.addEventListener).toHaveBeenCalled();
    }));

  });

  describe('frpTrackViolationCounts method', () => {

    it('should track FRP violations and invoices if both present', () => {

      service.frpTrackViolationCounts(invoicedViolationsFactory(4, 2, 1), uninvoicedViolationsFactory(4, 2, 1));
      service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 1), uninvoicedViolationsFactory(0, 0, 1));
      service.frpTrackViolationCounts(invoicedViolationsFactory(0, 2, 0), uninvoicedViolationsFactory(0, 2, 0));
      service.frpTrackViolationCounts(invoicedViolationsFactory(4, 0, 0), uninvoicedViolationsFactory(4, 0, 0));

      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(8);

      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 7);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 1);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 2);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 4);

      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 7);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 1);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 2);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 4);
    });

    it('should track FRP invoices', () => {

      service.frpTrackViolationCounts(invoicedViolationsFactory(4, 2, 1), uninvoicedViolationsFactory(0, 0, 0));
      service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 1), uninvoicedViolationsFactory(0, 0, 0));
      service.frpTrackViolationCounts(invoicedViolationsFactory(0, 2, 0), uninvoicedViolationsFactory(0, 0, 0));
      service.frpTrackViolationCounts(invoicedViolationsFactory(4, 0, 0), uninvoicedViolationsFactory(0, 0, 0));

      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(4);

      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 7);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 1);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 2);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 4);
    });

    it('should track FRP violations', () => {

      service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 0), uninvoicedViolationsFactory(4, 2, 1));
      service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 0), uninvoicedViolationsFactory(0, 0, 1));
      service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 0), uninvoicedViolationsFactory(0, 2, 0));
      service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 0), uninvoicedViolationsFactory(4, 0, 0));

      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(4);

      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 7);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 1);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 2);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 4);
    });

    it('should not track if no invoices or violations; should not occur', () => {

      service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 0), uninvoicedViolationsFactory(0, 0, 0));

      expect(browserExtensionHandlerService.sendEvent).not.toHaveBeenCalled();
    });

    const invoicedViolationsFactory = (numHData: number, numFData: number, numMData: number) => ({
      hData: genNullArray(numHData),
      fData: genNullArray(numFData),
      mData: genNullArray(numMData)
    });


    const uninvoicedViolationsFactory = (numHData: number, numFData: number, numMData: number) => ({
      invoices: {
        hData: genNullArray(numHData),
        fData: genNullArray(numFData),
        mData: genNullArray(numMData)
      }
    });


    const genNullArray = (nullCount: number) => {
      const outArr: null[] = [];

      for (let i = 0; i < nullCount; i++) {
        outArr.push(null);
      }

      return outArr;
    };
  });

  describe('matTrackViolationCounts method', () => {

    it('should track successful MAT violation payments', () => {

      service.matTrackViolationCounts([null, null]);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(1);
      expect(browserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'mat_payment', 'mat-violations', 2);
    });

    it('should not track unsuccessful MAT violation payments', () => {

      service.matTrackViolationCounts([]);
      expect(browserExtensionHandlerService.sendEvent).not.toHaveBeenCalled();
    });
  });

  describe('getPathname method', () => {

    it('should return the first history entry url if only one history entry exists', () => {

      const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 999), [
        { oldUrl: 'old_url', newUrl: 'new_url', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
      ], 1000);

      expect(pathname).toBe('new_url');

      const pathname2 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 1000), [
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
      ], 1000);

      expect(pathname2).toBe('new_url2');

      const pathname3 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 1001), [
        { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
      ], 1000);

      expect(pathname3).toBe('new_url3');
    });

    it('should return the second history entry url if the first entry is less than the sensitivity and less than the second', () => {

      const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 1000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 501) }, // on this page for less time
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // on this page for more time
      ], 1000);

      expect(pathname).toBe('new_url2');
    });

    it('should return the first history entry url if the first entry is longer duration than the the second', () => {

      const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 1000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 499) }, // on this page for more time
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // on this page for less time
      ], 1000);

      expect(pathname).toBe('new_url1');
    });

    it('should return the first history entry url if the first entry exceeds the sensitivity, even if the second is longer duration', () => {

      const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 1999) }, // on this page past the sensitivity
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // on this page for more time
      ], 1000);

      expect(pathname).toBe('new_url1');

      const pathname2 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2000) }, // on this page within sensitivity
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // on this page for more time
      ], 1000);

      expect(pathname2).toBe('new_url1');
    });

    it('should return the second history entry url if the first entry does not exceed the sensitivity, even if the second causes the sum to exceed', () => {

      const pathname2 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2001) }, // on this page within sensitivity
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // on this page for more time
      ], 1000);

      expect(pathname2).toBe('new_url2');
    });

    it('should return the later history entry urls if the first are lower duration and don\'t exceed the sensitivity', () => {

      const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2500) },
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2001) },
        { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
      ], 1000);

      expect(pathname).toBe('new_url3');

      const pathname2 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2999) },
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2998) },
        { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
      ], 1000);

      expect(pathname2).toBe('new_url3');

      const pathname3 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2999) },
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2998) },
        { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 2997) },
        { oldUrl: 'old_url4', newUrl: 'new_url4', date: new Date(2000, 5, 8, 0, 0, 0, 2996) },
        { oldUrl: 'old_url5', newUrl: 'new_url5', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
      ], 1000);

      expect(pathname3).toBe('new_url5');
    });

    it('should select middle entry if it has the longest duration', () => {

      const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2999) },
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2998) },
        { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 2500) },
        { oldUrl: 'old_url4', newUrl: 'new_url4', date: new Date(2000, 5, 8, 0, 0, 0, 2499) },
        { oldUrl: 'old_url5', newUrl: 'new_url5', date: new Date(2000, 5, 8, 0, 0, 0, 2498) }
      ], 1000);

      expect(pathname).toBe('new_url3');
    });

    it('should not consider entries beyond the sensitivity, even if they are longer in duration', () => {

      const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2999) },
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2998) },
        { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 2000) }, // duration of 1999, pushes out of sensitivity
        { oldUrl: 'old_url4', newUrl: 'new_url4', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // duration of 2000, outside sensitivity
      ], 1000);

      expect(pathname).toBe('new_url3');

      const pathname2 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
        { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2999) },
        { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2998) },
        { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 2000) },
        { oldUrl: 'old_url4', newUrl: 'new_url4', date: new Date(2000, 5, 8, 0, 0, 0, 2000) },
        { oldUrl: 'old_url5', newUrl: 'new_url5', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
      ], 1000);

      expect(pathname2).toBe('new_url3');
    });
  });
});
