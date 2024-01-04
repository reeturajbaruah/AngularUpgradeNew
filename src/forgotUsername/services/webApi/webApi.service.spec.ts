import { TestBed, waitForAsync } from '@angular/core/testing';
import { WebApiService } from './webApi.service';
import { HttpService, ResponseErrorService } from 'common/services';

describe('WebApiService', () => {
  let service: WebApiService;
  let httpService: jasmine.SpyObj<HttpService>;
  let responseErrorService: jasmine.SpyObj<ResponseErrorService>;

  beforeEach(() => {
    httpService = jasmine.createSpyObj('httpService', ['post']);
    responseErrorService = jasmine.createSpyObj('ResponseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

    responseErrorService.displayAlertsFromResponse.and.resolveTo([]);

    TestBed.configureTestingModule({
      providers: [
        WebApiService,
        { provide: HttpService, useFactory: () => httpService },
        { provide: ResponseErrorService, useFactory: () => responseErrorService }
      ]
    });

    service = TestBed.inject(WebApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('forgotPasswordGetAccount noe errors', () => {
    beforeEach(() => {
      httpService.post.and.resolveTo({});
      responseErrorService.isErrorFree.and.returnValue(true);
    });

    it('should call post and return error free', waitForAsync(() => {
      service.forgotPasswordGetAccount({} as any).then(res => {
        expect(res).toEqual({} as any);
        expect(httpService.post).toHaveBeenCalled();
        expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
      });
    }));
  });

  describe('forgotPasswordGetAccount errors', () => {
    beforeEach(() => {
      httpService.post.and.resolveTo({ hasError: false });
      responseErrorService.isErrorFree.and.returnValue(false);
    });

    it('should call post and return with error', waitForAsync(() => {
      service.forgotPasswordGetAccount({} as any).then(res => {
        expect(res).toEqual({ hasError: true } as any);
        expect(httpService.post).toHaveBeenCalled();
        expect(responseErrorService.displayAlertsFromResponse).not.toHaveBeenCalled();
      });
    }));
  });
});
