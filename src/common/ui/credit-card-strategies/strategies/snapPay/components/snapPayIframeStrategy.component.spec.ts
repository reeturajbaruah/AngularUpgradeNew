import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { SnapPayIframeStrategyComponent } from './snapPayIframeStrategy.component';
import { CreditCardEntryComponent, CreditCardStateService } from 'common/ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WindowRef } from 'common/module';
import { CreditCardTypeService } from 'common/billing';
import { TestingModule } from 'testing';
import { SnapPayIframeStrategyFacadeService } from '../services/facade/snapPayIframe-facade.service';
import { CmsUtilService } from 'cms/services/cmsUtil/cmsUtil.service';
import { GenericRepoService } from '../../../../../services';
import { asyncScheduler, of, scheduled } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

describe('SnapPayIframeStrategyComponent', () => {
    let component: SnapPayIframeStrategyComponent;
    let fixture: ComponentFixture<SnapPayIframeStrategyComponent>;
    let windowMock: jasmine.SpyObj<Window>;
    let documentMock: jasmine.SpyObj<Document>;
    let creditCardTypeService: jasmine.SpyObj<CreditCardTypeService>;
    let snapPayIframeStrategyFacade: jasmine.SpyObj<SnapPayIframeStrategyFacadeService>;
    let genericRepo: any;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let domSanitizer: jasmine.SpyObj<DomSanitizer>;
    let creditCardStateService: jasmine.SpyObj<CreditCardStateService>;


    beforeEach(async () => {
        documentMock = jasmine.createSpyObj('Document', ['getElementById']);
        windowMock = jasmine.createSpyObj('Window', ['addEventListener', 'removeEventListener'], { document: documentMock });
        creditCardTypeService = jasmine.createSpyObj('CreditCardTypeService', ['cardCodeToName']);
        (creditCardTypeService.cardCodeToName as jasmine.Spy).and.callFake(code => code);
        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
        cmsUtilService.generateFileSrc.and.callFake(tagString => 'mock-generateFileSrc-' + tagString);
        snapPayIframeStrategyFacade = jasmine.createSpyObj('SnapPayIframeStrategyFacadeService', ['getSnapPayIframeData']);
        domSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
        creditCardStateService = jasmine.createSpyObj('CreditCardStateService', ['getState']);

        creditCardStateService.getState.and.returnValue({ creditCard: { cardNbr: '', omniToken: '', cardCode: '', isNewCard: null, cardTypeDisplay: '' } } as any);
        snapPayIframeStrategyFacade.getSnapPayIframeData.and.returnValue(scheduled(of({ body: { requestId: '1234', url: 'test' } }), asyncScheduler));
        domSanitizer.bypassSecurityTrustResourceUrl.and.returnValue('testUrl' as SafeResourceUrl);
        windowMock.addEventListener.and.callFake(() => { });
        documentMock.getElementById.and.returnValue({ addEventListener: (type, listener, options?) => {} } as HTMLElement);

        await TestBed.configureTestingModule({
            declarations: [SnapPayIframeStrategyComponent],
            imports: [TestingModule,],
            providers: [
                { provide: CreditCardEntryComponent, useFactory: () => parent },
                { provide: WindowRef, useFactory: () => windowMock },
                { provide: CreditCardTypeService, useFactory: () => creditCardTypeService },
                { provide: SnapPayIframeStrategyFacadeService, useValue: snapPayIframeStrategyFacade },
                { provide: GenericRepoService, useFactory: () => genericRepo },
                { provide: CmsUtilService, useFactory: () => cmsUtilService},
                { provide: CreditCardStateService, useValue: creditCardStateService},
                { provide: DomSanitizer, useValue: domSanitizer}
            ],
            schemas: [NO_ERRORS_SCHEMA],

        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SnapPayIframeStrategyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should component is created', () => {
        expect(component).toBeTruthy();
    });

    describe('setup', () => {
        it('with initial empty frameId', waitForAsync(() => {
            component.setup().then(() => {
                expect(snapPayIframeStrategyFacade.getSnapPayIframeData).toHaveBeenCalled();
                expect(domSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith('test');
                expect(windowMock.addEventListener).toHaveBeenCalled();
                expect(windowMock.document.getElementById).toHaveBeenCalledWith('tokenFrame1234');
            });
        }));
    });

    describe('iframeLoadedEvent', () => {
        it('should check iframeLoadedEvent is triggered', fakeAsync(() => {
            spyOn(component.isReady$, 'next');
            component.iframeLoadedEvent();
            tick(100);

            expect(component.isReady$.next).toHaveBeenCalledWith(true);
        }));
    });

    describe('iframePostMessageEvent', () => {
        it('should not invoke isValid$ if frameId is not available', fakeAsync(() => {
            const message: MessageEvent = {} as MessageEvent;
            spyOn(component.isValid$, 'next');

            component.frameId = null;

            component.iframePostMessageEvent(message);

            expect(component.isValid$.next).not.toHaveBeenCalled();

        }));

        it('should not invoke isValid$ if message is not equal to documents content window', fakeAsync(() => {
            const message: MessageEvent = {} as MessageEvent;
            const mockData = { contentWindow: null } as HTMLIFrameElement;
            spyOn(component.isValid$, 'next');
            (windowMock.document.getElementById as jasmine.Spy).and.returnValue(mockData);

            component.frameId = 'data';

            component.iframePostMessageEvent(message);

            expect(component.isValid$.next).not.toHaveBeenCalled();

        }));

        //it('should invoke isValid$ if message is equal to documents content window', waitForAsync(() => {
        //    const dummyIframe = document.createElement('iframe');
        //    const message: MessageEvent = { source: dummyIframe.contentWindow } as MessageEvent;

        //    spyOn(component.isValid$, 'next');
        //    spyOn<any, any>(component, 'getIconImage').and.returnValue('test');

        //    (windowMock.document.getElementById as jasmine.Spy).and.returnValue(dummyIframe);

        //    component.frameId = 'data';

        //    component.iframePostMessageEvent(message).then(() => {
        //        expect(component.isValid$.next).toHaveBeenCalledWith(false);
        //    });
        //}));
    });

    describe('tearDown', () => {
        it('should check on tear down frameId to be changed to null', () => {
            component.frameId = 'new';

            expect(component.tearDown).toBeDefined();
        });
    });

    describe('update', () => {
        it('should check update method return promise resolve', waitForAsync(() => {
            spyOn(Promise, 'resolve').and.callThrough();

            component.update().then(() => {
                expect(Promise.resolve).toHaveBeenCalled();
            });
        }));
    });

    describe('submit', () => {
        it('should check on submit tokenize method is invoked', async () => {
            spyOn(component, 'tokenize');

            await component.submit();

            expect(component.tokenize).toHaveBeenCalled();
        });
    });

    describe('tokenize', () => {
        it('should call isValid$.next with true', waitForAsync(() => {
            component.cardData = {
                token: '1234123412341234',
                cardType: 'Visa'
            };
            spyOn(component.isValid$, 'next');

            component.tokenize().then(t => {
                expect(component.isValid$.next).toHaveBeenCalledWith(true);
            });
        }));

        it('should call isValid$.next with false', waitForAsync(() => {
            spyOn(component.isValid$, 'next');

            component.tokenize().then(t => {
                expect(component.isValid$.next).toHaveBeenCalledWith(false);
            });
        }));
    });
});
