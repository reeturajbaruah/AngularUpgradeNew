import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpService } from '../../../../../common/services/httpService/http.service';

import { ActivateApiService } from './activate-api.service';

describe('ActivateApiService', () => {
  let service: ActivateApiService;
  let httpService: jasmine.SpyObj<HttpService>;

  beforeEach(() => {
    httpService = jasmine.createSpyObj('httpService', ['post', 'get']);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpService, useFactory: () => httpService }
      ]
    });
    service = TestBed.inject(ActivateApiService);
  });

  describe('canary', () => {
    it('should pass', () => {
      expect(true).toBeTrue();
    });
  });

  describe('finalizeTagActivation', () => {
    beforeEach(() => {
      httpService.post.and.resolveTo({});
    });

    it('should call post', waitForAsync(() => {
      service.finalizeTagActivation({}).then(res => {
        expect(httpService.post).toHaveBeenCalledWith('/api/sessions/ActivateEzTag/FinalizeTagActivation', {});
      });
    }));
  });

  describe('findTagsToActivate', () => {
    it('should call httpService with url', async () => {
      httpService.post.and.resolveTo({});

      await service.findTagsToActivate({} as any);
      expect(httpService.post).toHaveBeenCalledWith('/api/sessions/ActivateEzTag/FindTagsToActivate', {});
    });
  });
});
