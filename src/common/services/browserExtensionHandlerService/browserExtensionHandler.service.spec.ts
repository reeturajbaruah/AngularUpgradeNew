import { TestBed } from '@angular/core/testing';
import { StateDeclaration } from '@uirouter/core';
import { GoogleAnalyticsService } from '../googleAnalyticsService/googleAnalytics.service';
import { BrowserExtensionHandlerService } from './browserExtensionHandler.service';

describe('BrowserExtensionHandlerService', () => {

    let browserExtensionHandlerService: BrowserExtensionHandlerService;
    let googleAnalyticsService: jasmine.SpyObj<GoogleAnalyticsService>;

    beforeEach(() => {
        googleAnalyticsService = jasmine.createSpyObj('googleAnalyticsService', ['sendEvent', 'sendTag']);

        TestBed.configureTestingModule({
            providers: [
                BrowserExtensionHandlerService,
                { provide: GoogleAnalyticsService, useFactory: () => googleAnalyticsService }
            ]
        });

        browserExtensionHandlerService = TestBed.inject(BrowserExtensionHandlerService);
    });

    it('should be defined', () => {
        expect(BrowserExtensionHandlerService).toBeDefined();
    });

    it('should call googleAnalyticsService.sendTag', () => {
        const state = { name: 'test' } as StateDeclaration;
        browserExtensionHandlerService.sendTag(state, 'test string');
        expect(googleAnalyticsService.sendTag).toHaveBeenCalledWith('test string');
    });

    it('should call googleAnalyticsService.sendEvent', () => {
        browserExtensionHandlerService.sendEvent('category', 'action', 'label', 0);
        expect(googleAnalyticsService.sendEvent).toHaveBeenCalledWith('category', 'action', 'label', 0);
    });
});
