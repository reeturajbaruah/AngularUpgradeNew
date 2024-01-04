import { TestBed } from '@angular/core/testing';
import { AccountActivityService } from 'accountActivity/services/accountActivity.service';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { } from 'jasmine';
import { LoggingService } from 'logging/module';
import { WebApisService } from './webApis.service';
import { IsInvoicedService } from 'common/services';
import * as moment from 'moment';

describe('accountActivityService', () => {

    let service: AccountActivityService;
    let webApisService: jasmine.SpyObj<WebApisService>;
    let loggingService: jasmine.SpyObj<LoggingService>;
    let isInvoicedService: jasmine.SpyObj<IsInvoicedService>;
    let environmentConfig: { [key: string]: any };

    beforeEach(() => {
        webApisService = jasmine.createSpyObj('webApisService', ['locationCoordinates']);
        loggingService = jasmine.createSpyObj('loggingService', ['logMessage']);
        isInvoicedService = jasmine.createSpyObj('isInvoicedService', ['isAccountInvoiced']);
        isInvoicedService.isAccountInvoiced.and.returnValue(true);
        environmentConfig = {
            accountActivityDefaultDaysInSearch: 7,
            hideAccountActivityTabs: {
                HideTransactions: false,
                HideStatements: false,
                HideYearlySummary: false,
                HideReceipts: false,
                HideCorporateInvoices: false
            }
        };

        TestBed.configureTestingModule({
            providers: [
                AccountActivityService,
                { provide: WebApisService, useValue: webApisService },
                { provide: LoggingService, useFactory: () => loggingService },
                { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                { provide: IsInvoicedService, useFactory: () => isInvoicedService }
            ]
        });

        service = TestBed.inject(AccountActivityService);
    });

    beforeEach(() => {
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });

        it('can create a service', () => {

            expect(service).toBeDefined();
        });
    });

    describe('getLocationNameWithoutAgencyOrPhone', () => {

        it(`should return location name without phone number`, () => {

            expect(service.getLocationNameWithoutAgencyOrPhone({
                agencyName: 'fake agency name',
                facilityName: 'fake facility name',
                plazaName: 'fake plaza name',
                laneName: 'fake lane name',
                direction: 'fake direction'

            } as any)).toBe('fake facility name - fake plaza name - fake direction');
        });

        ['', 0, false, null,].forEach(record => {
            it(`should return record if it is falsy`, () => {
                expect(service.getLocationNameWithoutAgencyOrPhone(record as any)).toBe(record as any);
            });
        });
    });

    describe('hasLocationCoordinates', () => {

        [
            { record: undefined, expected: false },
            { record: null, expected: false },
            { record: {}, expected: false },
            { record: { latitude: 25 }, expected: false },
            { record: { longitude: 25 }, expected: false },
            { record: { latitude: 25, longitude: 25 }, expected: true }
        ].forEach(({ record, expected }) => {

            it(`should return ${expected} when record: ${record as any}`, () => {

                expect(service.hasLocationCoordinates(record as any)).toEqual(expected as any);
            });
        });

    });

    describe('createWebsiteLinksDictionary', () => {

        it('should create WebsiteLinksDictionary from parsed params', () => {

            const parsedParams = {
                PDF_SUCCESS: 'Your report is currently being processed.',
                PDF_CREATION_ERROR: 'There was a problem creating your PDF. Please try again.',
                EXCEL_SUCCESS: 'Your report is currently being processed.',
                EXCEL_CREATION_ERROR: 'There was a problem creating your Excel. Please try again.',
                TOLL_WAIVER_REDIRECT_MESSAGE: 'Your search has revealed adjusted toll transaction(s). You can view the credits under the Receipts tab.',
                TOLL_WAIVER_REDIRECT_BUTTON: 'View now',
                TOLL_WAIVER_REDIRECT_MESSAGE_MOBILE: 'Your search has revealed adjusted toll transaction(s). You can view the credits under the Receipts tab in Full Desktop Mode.',
                SITE_HCTRA: 'www.hctra.org',
                SITE_CTRMA: 'www.mobilityauthority.com',
                SITE_FBGPTRA: 'www.fbgptra.co',
                SITE_METRO: 'www.ridemetro.org',
                SITE_NTTA: 'www.ntta.org',
                SITE_TXDOT_TOD: 'www.txtag.org'
            };

            expect(service.createWebsiteLinksDictionary(parsedParams)).toEqual({
                HCTRA: 'www.hctra.org',
                CTRMA: 'www.mobilityauthority.com',
                FBGPTRA: 'www.fbgptra.co',
                METRO: 'www.ridemetro.org',
                NTTA: 'www.ntta.org',
                TXDOT_TOD: 'www.txtag.org'
            });
        });

        [null, {}, 1, 2, [1, 2, 3]].forEach((parsedParams) => {

            it('should create WebsiteLinksDictionary from invalid inputs', () => {

                expect(service.createWebsiteLinksDictionary(parsedParams)).toEqual({});
            });
        });
    });

    describe('createAgencyPhoneNumberDictionary', () => {

        it('should create AgencyPhoneNumberDictionary from parsed params', () => {

            const parsedParams = {
                PDF_SUCCESS: 'Your report is currently being processed.',
                PDF_CREATION_ERROR: 'There was a problem creating your PDF. Please try again.',
                EXCEL_SUCCESS: 'Your report is currently being processed.',
                EXCEL_CREATION_ERROR: 'There was a problem creating your Excel. Please try again.',
                TOLL_WAIVER_REDIRECT_MESSAGE: 'Your search has revealed adjusted toll transaction(s). You can view the credits under the Receipts tab.',
                TOLL_WAIVER_REDIRECT_BUTTON: 'View now',
                TOLL_WAIVER_REDIRECT_MESSAGE_MOBILE: 'Your search has revealed adjusted toll transaction(s). You can view the credits under the Receipts tab in Full Desktop Mode.',
                PHONE_HCTRA: '111-111-1111',
                PHONE_CTRMA: '222-222-2222',
                PHONE_FBGPTRA: '333-333-3333',
                PHONE_METRO: '444-444-4444',
                PHONE_NTTA: '555-555-5555',
                PHONE_TXDOT_TOD: '666-666-6666'
            };

            expect(service.createAgencyPhoneNumberDictionary(parsedParams)).toEqual({
                HCTRA: '111-111-1111',
                CTRMA: '222-222-2222',
                FBGPTRA: '333-333-3333',
                METRO: '444-444-4444',
                NTTA: '555-555-5555',
                TXDOT_TOD: '666-666-6666'
            });
        });

        [null, {}, 1, 2, [1, 2, 3]].forEach((parsedParams) => {

            it('should create AgencyPhoneNumberDictionary from invalid inputs', () => {

                expect(service.createAgencyPhoneNumberDictionary(parsedParams)).toEqual({});
            });
        });
    });

    describe('createAgencyFullNameDictionary', () => {

        it('should create AgencyPhoneNumberDictionary from parsed params', () => {

            const parsedParams = {
                PDF_SUCCESS: 'Your report is currently being processed.',
                PDF_CREATION_ERROR: 'There was a problem creating your PDF. Please try again.',
                EXCEL_SUCCESS: 'Your report is currently being processed.',
                EXCEL_CREATION_ERROR: 'There was a problem creating your Excel. Please try again.',
                TOLL_WAIVER_REDIRECT_MESSAGE: 'Your search has revealed adjusted toll transaction(s). You can view the credits under the Receipts tab.',
                TOLL_WAIVER_REDIRECT_BUTTON: 'View now',
                TOLL_WAIVER_REDIRECT_MESSAGE_MOBILE: 'Your search has revealed adjusted toll transaction(s). You can view the credits under the Receipts tab in Full Desktop Mode.',
                FULLNAME_HCTRA: 'fakeHCTRAfullName',
                FULLNAME_CTRMA: 'fakeCTRMAfullName',
                FULLNAME_FBGPTRA: 'fakeFBGPTRAfullName',
                FULLNAME_METRO: 'fakeMETROfullName',
                FULLNAME_NTTA: 'fakeNTTAfullName',
                FULLNAME_TXDOT_TOD: 'fakeTXDOT_TODfullName'
            };

            expect(service.createAgencyFullNameDictionary(parsedParams)).toEqual({
                HCTRA: 'fakeHCTRAfullName',
                CTRMA: 'fakeCTRMAfullName',
                FBGPTRA: 'fakeFBGPTRAfullName',
                METRO: 'fakeMETROfullName',
                NTTA: 'fakeNTTAfullName',
                TXDOT_TOD: 'fakeTXDOT_TODfullName'
            });
        });

        [null, {}, 1, 2, [1, 2, 3]].forEach((parsedParams) => {

            it('should create AgencyFullNameDictionary from invalid inputs', () => {

                expect(service.createAgencyFullNameDictionary(parsedParams)).toEqual({});
            });
        });
    });

    describe('getDictionaryValueForAgency', () => {
        [
            {
                agencyName: undefined,
                websiteLinksDictionary: undefined,
                expected: undefined
            },
            {
                agencyName: undefined,
                websiteLinksDictionary: { HCTRA: 'www.hctra.org' },
                expected: undefined
            },
            {
                agencyName: 'HCTRA',
                websiteLinksDictionary: undefined,
                expected: undefined
            },
            {
                agencyName: 'HCTRA',
                websiteLinksDictionary: {},
                expected: undefined
            },
            {
                agencyName: 'NOTHCTRA',
                websiteLinksDictionary: { HCTRA_HCTRA: 'www.hctra.org' },
                expected: undefined
            },
            {
                agencyName: '',
                websiteLinksDictionary: { HCTRA: 'www.hctra.org' },
                expected: ''
            },
            {
                agencyName: 'HCTRA-HCTRA',
                websiteLinksDictionary: { HCTRA_HCTRA: 'www.hctra.org' },
                expected: 'www.hctra.org'
            },
            {
                agencyName: 'HCTRA@HCTRA',
                websiteLinksDictionary: { HCTRA_HCTRA: 'www.hctra.org' },
                expected: 'www.hctra.org'
            },
            {
                agencyName: 'HCTRA_HCTRA',
                websiteLinksDictionary: { HCTRA_HCTRA: 'www.hctra.org' },
                expected: 'www.hctra.org'
            },
            {
                agencyName: 'HCTRA',
                websiteLinksDictionary: { HCTRA: 'www.hctra.org' },
                expected: 'www.hctra.org'
            }
        ].forEach(({ agencyName, websiteLinksDictionary, expected }) => {

            it('should get WebSite For Agency', () => {

                expect(service.getDictionaryValueForAgency(agencyName, websiteLinksDictionary)).toEqual(expected as any);
            });
        });
    });


    describe('showTransactions', () => {

        it('should return showTransactions false when this.environmentConfig.hideAccountActivityTabs.HideStatements true', () => {

            environmentConfig.hideAccountActivityTabs.HideTransactions = true;

            const result = service.showTransactions();

            expect(result).toBe(false);
        });

        it('should return showTransactions true when this.environmentConfig.hideAccountActivityTabs.HideStatements false', () => {

            environmentConfig.hideAccountActivityTabs.HideTransactions = false;

            const result = service.showTransactions();

            expect(result).toBe(true);
        });
    });

    describe('showStatements', () => {

        it('should return showStatements false when this.environmentConfig.hideAccountActivityTabs.HideStatements true', () => {

            environmentConfig.hideAccountActivityTabs.HideStatements = true;

            const result = service.showStatements();

            expect(result).toBe(false);
        });

        it('should return showStatements true when this.environmentConfig.hideAccountActivityTabs.HideStatements false', () => {

            environmentConfig.hideAccountActivityTabs.HideStatements = false;

            const result = service.showStatements();

            expect(result).toBe(true);
        });
    });

    describe('showYearlySummary', () => {

        it('should return showYearlySummary false when this.environmentConfig.hideAccountActivityTabs.HideYearlySummary true', () => {

            environmentConfig.hideAccountActivityTabs.HideYearlySummary = true;

            const result = service.showYearlySummary();

            expect(result).toBe(false);
        });

        it('should return showYearlySummary true when this.environmentConfig.hideAccountActivityTabs.HideYearlySummary false', () => {

            environmentConfig.hideAccountActivityTabs.HideYearlySummary = false;

            const result = service.showYearlySummary();

            expect(result).toBe(true);
        });
    });

    describe('showReceipts', () => {

        it('should return showReceipts false when this.environmentConfig.hideAccountActivityTabs.HideReceipts true', () => {

            environmentConfig.hideAccountActivityTabs.HideReceipts = true;

            const result = service.showReceipts();

            expect(result).toBe(false);
        });

        it('should return showReceipts true when this.environmentConfig.hideAccountActivityTabs.HideReceipts false', () => {

            environmentConfig.hideAccountActivityTabs.HideReceipts = false;

            const result = service.showReceipts();

            expect(result).toBe(true);
        });
    });

    describe('showInvoices', () => {

        it('should return showInvoices false when this.environmentConfig.hideAccountActivityTabs.HideCorporateInvoices true', () => {

            environmentConfig.hideAccountActivityTabs.HideCorporateInvoices = true;

            const result = service.showInvoices();

            expect(result).toBe(false);
        });

        it('should return showInvoices true when this.environmentConfig.hideAccountActivityTabs.HideCorporateInvoices false', () => {

            environmentConfig.hideAccountActivityTabs.HideCorporateInvoices = false;

            const result = service.showInvoices();

            expect(result).toBe(true);
        });
    });


    it('tests method getDaysAgo', () => {
        const diffDays = 7;
        const d = service['getDaysAgo'](diffDays);
        const newDate = moment().toDate();
        newDate.setDate(newDate.getDate() - diffDays);

        expect(d.getDate()).toEqual(newDate.getDate());
    });
});
