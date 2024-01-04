import { TestBed } from '@angular/core/testing';
import { GenericRepoService } from '../genericRepo/genericRepo.service';

import { UrlManagerService } from './urlManager.service';

describe('UrlManagerService', () => {
  let service: UrlManagerService;
  let genericRepo: jasmine.SpyObj<any>;

  beforeEach(() => {
      genericRepo = {
          dataFactory: {
              GetAllMenuUrlMetadata: jasmine.createSpy('GetAllMenuUrlMetadata'),
          }
      };
    TestBed.configureTestingModule({
      providers: [
            UrlManagerService,
            { provide: GenericRepoService, useFactory: () => genericRepo }
      ]
    });
    service = TestBed.inject(UrlManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getStartingRoutes', () => {
    describe('GetAllMenuUrlMetadata no errors', () => {
      beforeEach(() => {
        genericRepo.dataFactory.GetAllMenuUrlMetadata.and.resolveTo({
          errors: [],
          footerURls: {},
          metadata: {
            metaDataOne: { itemPath: 'test-path-one', itemID: 'id-one' },
            metatDataTwo: { itemPath: 'test-path-one', itemID: 'id-two' }
          },
          navBar: {},
          states: {}
        });
      });

      it('should have 3 keys', done => {
        service.getStartingRoutes({}).then(res => {
          expect(Object.keys(res).length).toEqual(3);
          done();
        });
      });
    });

    describe('GetAllMenuUrlMetadata with errors', () => {
      beforeEach(() => {
        genericRepo.dataFactory.GetAllMenuUrlMetadata.and.resolveTo({
          errors: [{}]
        });
      });

      it('should return with errors', done => {
        service.getStartingRoutes({}).then(res => {
          expect(res.errors.length).toBeGreaterThan(0);
          done();
        });
      });
    });
  });

  describe('getMegaMenu', () => {
    it('should return null', done => {
      service.getMegaMenu().then(res => {
        expect(res).toEqual({ navBar: null });
        done();
      });
    });
    it('should return object', done => {
      service.megaMenuStructure = {};

      service.getMegaMenu().then(res => {
        expect(res).toEqual({ navBar: {} });
        done();
      });
    });
  });

  describe('getMetadata', () => {
    it('should return null', done => {
      service.getMetadata().then(res => {
        expect(res).toEqual({ metadata: null });
        done();
      });
    });

    it('should return object', done => {
      service.metadataDictionary = {};

      service.getMetadata().then(res => {
        expect(res).toEqual({ metadata: {} });
        done();
      });
    });
  });

  describe('getFooterdata', () => {
    it('should return null', done => {
      service.getFooterdata().then(res => {
        expect(res).toEqual({ footerCmsResponse: null });
        done();
      });
    });

    it('should return object', done => {
      service.footerCmsResponse = {};

      service.getFooterdata().then(res => {
        expect(res).toEqual({});
        done();
      });
    });
  });
});
