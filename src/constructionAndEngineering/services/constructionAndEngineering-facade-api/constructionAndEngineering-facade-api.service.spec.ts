import { TestBed } from '@angular/core/testing';

import { CEFacadeApiService } from './constructionAndEngineering-facade-api.service';
import { CmsUtilService } from 'cms/services';
import { CmsBundler } from 'cms/services/cmsBundler/cmsBundler.service';

describe('ConstructionAndEngineeringFacadeApiService', () => {
  let service: CEFacadeApiService;
  let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
  let cmsBundler: jasmine.SpyObj<CmsBundler>;

  beforeEach(() => {
    cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['parseAllImageAttributes', 'processItemId']);
    cmsBundler = jasmine.createSpyObj('CmsBundler', ['getCmsPages']);

    TestBed.configureTestingModule({
      providers: [
        { provide: CmsUtilService, useFactory: () => cmsUtilService },
        { provide: CmsBundler, useFactory: () => cmsBundler }
      ]
    });
    service = TestBed.inject(CEFacadeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('parseAllImageAttributes', () => {
    beforeEach(() => {
      cmsUtilService.parseAllImageAttributes.and.returnValue({} as any);
    });

    it('should call cmsUtilService.parseAllImageAttributes', () => {
      service.parseAllImageAttributes('test');

      expect(cmsUtilService.parseAllImageAttributes).toHaveBeenCalled();
    });
  });

  describe('processItemId', () => {
    beforeEach(() => {
      cmsUtilService.processItemId.and.returnValue('');
    });

    it('should call cmsUtilService.processItemId', () => {
      service.processItemId('test');

      expect(cmsUtilService.processItemId).toHaveBeenCalled();
    });
  });

  describe('getCmsPages', () => {
    beforeEach(() => {
      cmsBundler.getCmsPages.and.resolveTo({} as any);
    });

    it('should call cmsUtilService.parseAllImageAttributes', () => {
      service.getCmsPages({});

      expect(cmsBundler.getCmsPages).toHaveBeenCalled();
    });
  });
});
