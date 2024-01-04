import { TestBed } from '@angular/core/testing';
import { WindowRef } from '../../providers';
import { UrlManagerService } from '../urlManager/urlManager.service';
import { MetadataManagerService, WildCardDictionaryElement } from './metadataManager.service';
import { UrlPaths } from '../../../constants/routes.constants';

describe('MetadataManagerService', () => {

    let metadataManagerService: MetadataManagerService;
    let urlManagerService: jasmine.SpyObj<UrlManagerService>;
    let urlPaths: jasmine.SpyObj<UrlPaths>;
    const windowMock = {
        location: {
            search: '',
            href: 'https://www.google.com',
            pathname: '',
            hash: ''
        }
    };

    beforeEach(() => {
        urlManagerService = jasmine.createSpyObj('metadataManagerService', ['getMetaData']);
        urlPaths = jasmine.createSpyObj('urlPaths', null, ['faq', 'newsArchive']);

        TestBed.configureTestingModule({
            providers: [
                MetadataManagerService,
                { provide: UrlManagerService, useFactory: () => urlManagerService },
                { provide: UrlPaths, useFactory: () => urlPaths },
                { provide: WindowRef, useValue: windowMock },
            ]
        });

        metadataManagerService = TestBed.inject(MetadataManagerService);
    });

    it('should be defined', () => {
        expect(MetadataManagerService).toBeDefined();
    });

    describe('returnMetadataOrIndicatePageShouldBeIgnored', () => {
        it('test value not in dictionary', () => {
            metadataManagerService.injectMetaDataIfNeeded('/test123').then((response) => {
                expect(response.doNotIndex).toBe(true);
                expect(response.searchTitle).toBeUndefined();
                expect(response.searchDescription).toBeUndefined();
                expect(response.searchThumbnail).toBeUndefined();
            });
        });


        it('test value in dictionary but not searchable', () => {
            metadataManagerService.injectMetaDataIfNeeded('/AccountSummary').then((response) => {
                expect(response.doNotIndex).toBe(true);
                expect(response.searchTitle).toBe('AccountSummary');
                expect(response.searchDescription).toBeUndefined();
                expect(response.searchThumbnail).toBeUndefined();
            });
        });

        it('test value that is in dictionary and searchable', () => {
            metadataManagerService.injectMetaDataIfNeeded('//Home').then((response) => {
                expect(response.doNotIndex).toBeFalsy();
                expect(response.searchTitle).toBe('Home');
                expect(response.searchDescription).toBe('Home Des');
                expect(response.searchThumbnail).toBe('<Thumb>');
            });
        });
    });

    describe('lookupMetadataForWilcardRelativeUrl', () => {
        it('should return true', () => {
            metadataManagerService.wildCardDictionary['/NewsArchive'] = new WildCardDictionaryElement(4, '/NewsArchive');
            const response = metadataManagerService.lookupMetadataForWilcardRelativeUrl(true, '/NewsArchive');
            expect(response).toEqual(true);
        });

        it('should return undefined', () => {
            metadataManagerService.wildCardDictionary['/NewsArchive'] = new WildCardDictionaryElement(4, '/NewsArchive');
            const response = metadataManagerService.lookupMetadataForWilcardRelativeUrl(false, '/Test');
            expect(response).toEqual(undefined);
        });

        it('should return undefined', () => {
            metadataManagerService.wildCardDictionary['/NewsArchive'] = new WildCardDictionaryElement(4, '/NewsArchive');
            const response = metadataManagerService.lookupMetadataForWilcardRelativeUrl(false, '123');
            expect(response).toEqual(undefined);
        });

        it('should return with \'Test\'', () => {
            metadataManagerService.metadataDictionary['/NewsArchive'] = 'Test';
            metadataManagerService.wildCardDictionary['/NewsArchive'] = new WildCardDictionaryElement(4, '/NewsArchive');
            const response = metadataManagerService.lookupMetadataForWilcardRelativeUrl(false, '/NewsArchive');
            expect(response).toEqual('Test');
        });
    });
});

