import { TestBed } from '@angular/core/testing';
import { ActivateApiService } from '../activate-api/activate-api.service';

import { ActivateFacadeApiService } from './activate-facade-api.service';

describe('ActivateFacadeApiService', () => {
  let service: ActivateFacadeApiService;
  let activateApiService: jasmine.SpyObj<ActivateApiService>;


  beforeEach(() => {
    activateApiService = jasmine.createSpyObj('activateApiService', ['findTagsToActivate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: ActivateApiService, useFactory: () => activateApiService },
      ]
    });
    service = TestBed.inject(ActivateFacadeApiService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('findTagsToActivate',() => {
    it('should invoke activateApiService.findTagsToActivate', () => {
      service.findTagsToActivate({});

      expect(activateApiService.findTagsToActivate).toHaveBeenCalled();
    });
  });
});
