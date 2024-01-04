import { TestBed, waitForAsync } from '@angular/core/testing';
import { FilterService } from './filter.service';
import { AccountActivityService } from '../accountActivity.service';

describe('FilterService', () => {
  let service: FilterService;
  let accountActivityService: jasmine.SpyObj<AccountActivityService>;

  beforeEach(() => {
    accountActivityService = jasmine.createSpyObj('AccountActivityService', ['getDefaultFromDate']);

    accountActivityService.getDefaultFromDate.and.returnValue(new Date());

    TestBed.configureTestingModule({
      providers: [
        FilterService,
        { provide: AccountActivityService, useValue: accountActivityService }
      ]
    });
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFilters', () => {
    it('should return filters', waitForAsync(() => {
        service.getFilters().then(res => {
          expect(res).toEqual(service['filterCategories']);
        });
      }));
  });
});
