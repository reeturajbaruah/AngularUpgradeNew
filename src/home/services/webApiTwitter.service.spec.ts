import { TestBed, waitForAsync } from '@angular/core/testing';
import { WebApiTwitterService } from './webApiTwitter.service';
import { HttpService } from 'common/services';

describe('WebApiTwitterService', () => {
    let service: WebApiTwitterService;
    let httpService: jasmine.SpyObj<HttpService>;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get']);

        TestBed.configureTestingModule({
            providers: [
                WebApiTwitterService,
                { provide: HttpService, useValue: httpService },
            ]
        });

        service = TestBed.inject(WebApiTwitterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('GetTwitter', () => {
        beforeEach(() => {
          httpService.get.and.resolveTo({});
        });
    
        it('should call get', waitForAsync(() => {
          service.GetTwitter().then(res => {
            expect(res).toEqual({} as any);
            expect(httpService.get).toHaveBeenCalled();
          });
        }));
      });
});

