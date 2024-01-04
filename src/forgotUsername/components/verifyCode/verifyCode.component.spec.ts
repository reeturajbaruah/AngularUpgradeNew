import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { VerifyCodeComponent } from './verifyCode.component';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { CmsReplacementService } from 'cms/services';
import { VerifyCodeCMS } from '2FA/interfaces';
import { PipesModule } from 'pipes/module';
import { WebApiService } from 'forgotUsername/services/webApi/webApi.service';

describe('VerifyCodeComponent', () => {
  let component: VerifyCodeComponent;
  let fixture: ComponentFixture<VerifyCodeComponent>;
  let stateService: jasmine.SpyObj<StateService>;
  let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;
  let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;
  let webApiService: jasmine.SpyObj<WebApiService>;

  beforeEach(async () => {
    stateService = jasmine.createSpyObj('StateService', ['go']);
    cmsReplacementService = jasmine.createSpyObj('CmsReplacementService', ['transformTemplate']);
    uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', null, {
      params: {
        email: '',
        acctId: ''
      }
    });
    webApiService = jasmine.createSpyObj('WebApiService', ['forgotUsernameGetAccount']);

    stateService.go.and.resolveTo({} as any);
    cmsReplacementService.transformTemplate.and.returnValue('');

    await TestBed.configureTestingModule({
      declarations: [VerifyCodeComponent],
      imports: [PipesModule],
      providers: [
        { provide: StateService, useValue: stateService },
        { provide: CmsReplacementService, useValue: cmsReplacementService },
        { provide: UIRouterGlobals, useValue: uiRouterGlobals },
        { provide: WebApiService, useValue: webApiService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCodeComponent);
    component = fixture.componentInstance;
    component.cmsData = {
      LongDescription: 'Long'
    } as VerifyCodeCMS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('verify', () => {
    beforeEach(() => {
      webApiService.forgotUsernameGetAccount.and.resolveTo({ loginId: 'test', hasError: null } as any);
    });

    it('should call state.go', waitForAsync(() => {
      component.verify().then(() => {
        expect(stateService.go).toHaveBeenCalled();
      });
    }));
  });
});
