import { TestBed } from '@angular/core/testing';
import { WindowRef } from '../../providers';
import { ENVIRON_CONFIG } from '../../upgrades';
import { GoogleAnalyticsService } from '../googleAnalyticsService/googleAnalytics.service';

describe('GoogleAnalyticsService', () => {

    let googleAnalyticsService: GoogleAnalyticsService;
    let environmentConfig: { [key: string]: string };
    let location: jasmine.SpyObj<Location>;
    const windowMock = {
        dataLayer: []
    };

    beforeEach(() => {
        environmentConfig = { googleAnalyticsID: 'test' };
        windowMock.dataLayer = [];

        TestBed.configureTestingModule({
            providers: [
                GoogleAnalyticsService,
                { provide: WindowRef, useValue: windowMock },
                { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig},
                { provide: Location, useFactory: () => location }
            ]
        });

        googleAnalyticsService = TestBed.inject(GoogleAnalyticsService);
    });

    it('should be defined', () => {
        expect(GoogleAnalyticsService).toBeDefined();
    });

    it('should  not add event if environmentConfig.googleAnalyticsID set to empty string from beginning as script is not loaded', () => {
        environmentConfig.googleAnalyticsID = undefined;
        googleAnalyticsService.sendTag('test');
        expect(windowMock.dataLayer.length).toBe(2); 
    });

    it('should add event in the datalayer', () => {
        environmentConfig.googleAnalyticsID = 'test';
        googleAnalyticsService.sendTag('suffix');
        expect(windowMock.dataLayer.length).toBe(3);
    });
});
