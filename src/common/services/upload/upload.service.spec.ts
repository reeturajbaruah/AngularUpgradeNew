import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { } from 'jasmine';
import { UIRouterGlobals } from '@uirouter/angular';
import { UploadService } from './upload.service';
import { SERVER_CONSTANTS } from 'common/upgrades';
import { InjectionValues } from 'common/ui';
import { asyncScheduler, lastValueFrom, scheduled } from 'rxjs';

describe('UploadService', () => {
  let service: UploadService;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let serverConstants: jasmine.SpyObj<InjectionValues>;
  let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['post']);
    serverConstants = jasmine.createSpyObj('serverConstants', null, { currentlyDownloadedWebUiVersion: 'test' });
    uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', [], { current: { name: '' } });

    httpClient.post.and.returnValue(scheduled([{}], asyncScheduler));

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useFactory: () => httpClient },
        { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
        { provide: SERVER_CONSTANTS, useFactory: () => serverConstants },
      ]
    });

    service = TestBed.inject(UploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('upload should call post', waitForAsync(() => {
    const obs = service.upload<any>('api/test', {} as any);

    lastValueFrom(obs).then(res => {
      expect(httpClient.post).toHaveBeenCalled();
    });
  }));
});
