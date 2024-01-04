import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InputEmailComponent } from './inputEmail.component';
import { StateService } from '@uirouter/angular';
import { WebApiService } from 'forgotUsername/services/webApi/webApi.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ForgotUsernameService } from 'forgotUsername/services/forgotUsername/forgotUsername.service';
import { DataService } from 'common/services';
import { WebStorageConst } from 'constants/module';
import { WindowRef } from 'common/module';

describe('InputEmailComponent', () => {
  let component: InputEmailComponent;
  let fixture: ComponentFixture<InputEmailComponent>;
  let stateService: jasmine.SpyObj<StateService>;
  let webApiService: jasmine.SpyObj<WebApiService>;
  let forgotUsernameService: jasmine.SpyObj<ForgotUsernameService>;
  let dataService: jasmine.SpyObj<DataService>;
  let window: jasmine.SpyObj<Window>;
  let webStorageConst: jasmine.SpyObj<WebStorageConst>;
  const storage = { language: 'english' };
  const cmsData: any = {
    Title: 'parent',
    Children: [
      { ItemName: 'More Info' },
      { ItemName: 'Help Locating Account' }
    ]
  };
  const formMock = {
    invalid: false,
    resetForm: param => { },
    reset: () => { },
    value: {
      primaryEmail_email: ''
    },
    controls: {
      primaryEmail_email: {
        setValue: val => { },
        markAsDirty: () => { },
        updateValueAndValidity: () => { }
      }
    } as any
  } as NgForm;

  beforeEach(async () => {
    stateService = jasmine.createSpyObj('StateService', ['go']);
    webApiService = jasmine.createSpyObj('WebApiService', ['forgotPasswordGetAccount']);
    forgotUsernameService = jasmine.createSpyObj('ForgotUsernameService', ['sendCode']);
    dataService = jasmine.createSpyObj('DataService', ['getTagAuthorities']);
    window = jasmine.createSpyObj('Window', null, { localStorage: storage });
    webStorageConst = jasmine.createSpyObj('WebStorageConst', null, { selectedLanguage: 'language' });

    dataService.getTagAuthorities.and.resolveTo(['HCTR']);

    await TestBed.configureTestingModule({
      declarations: [InputEmailComponent],
      imports: [FormsModule],
      providers: [
        { provide: StateService, useValue: stateService },
        { provide: WebApiService, useValue: webApiService },
        { provide: ForgotUsernameService, useValue: forgotUsernameService },
        { provide: DataService, useValue: dataService },
        { provide: WindowRef, useFactory: () => window },
        { provide: WebStorageConst, useValue: webStorageConst }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    stateService.go.and.resolveTo({} as any);

    fixture = TestBed.createComponent(InputEmailComponent);
    component = fixture.componentInstance;
    component.cmsData = cmsData;
    component.form = formMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "More Info" item', () => {
    const moreInfo = component.additionalInfoCmsData;

    expect(moreInfo).toEqual(cmsData.Children[0]);
  });

  it('should return "Help Locating Account" item', () => {
    const helpLocate = component.helpLinkCmsData;

    expect(helpLocate).toEqual(cmsData.Children[1]);
  });

  it('submit should not call forgotPasswordGetAccount', waitForAsync(() => {
    component.form = { invalid: true } as NgForm;
    fixture.detectChanges();

    component.submit({}).then(() => {
      expect(webApiService.forgotPasswordGetAccount).not.toHaveBeenCalled();
    });
  }));

  describe('forgotPasswordGetAccount returns hasError', () => {
    beforeEach(() => {
      webApiService.forgotPasswordGetAccount.and.resolveTo({ hasError: true } as any);
      component.form = formMock;
      fixture.detectChanges();
    });

    it('submit should not call stateService.go', waitForAsync(() => {
      component.submit({}).then(() => {
        expect(stateService.go).not.toHaveBeenCalled();
      });
    }));
  });

  describe('submit single account', () => {
    beforeEach(() => {
      webApiService.forgotPasswordGetAccount.and.resolveTo({} as any);
      forgotUsernameService.sendCode.and.resolveTo({ verificationSent: true } as any);
      component.emailAddress = 'test@test';
      component.form = formMock;
      fixture.detectChanges();
    });

    it('should call stateService.go', waitForAsync(() => {
      component.submit({}).then(() => {
        expect(webApiService.forgotPasswordGetAccount).toHaveBeenCalled();
        expect(forgotUsernameService.sendCode).toHaveBeenCalled();
        expect(stateService.go).toHaveBeenCalled();
      });
    }));
  });

  describe('submit multiple accounts', () => {
    const sendCodeRes: any = { multipleAccountsFound: true };

    beforeEach(() => {
      webApiService.forgotPasswordGetAccount.and.resolveTo(sendCodeRes);
      forgotUsernameService.sendCode.and.resolveTo({ verificationSent: true } as any);
      component.emailAddress = 'test@test';
      component.form = formMock;
      fixture.detectChanges();
    });

    it('should set moreInfoNeeded to true', waitForAsync(() => {
      component.submit({}).then(() => {
        sendCodeRes.multipleAccountsFound = false;

        component.submit({}).then(() => {
          expect(webApiService.forgotPasswordGetAccount).toHaveBeenCalled();
          expect(forgotUsernameService.sendCode).toHaveBeenCalled();
          expect(component.moreInfoNeeded).toBeTrue();
        });
      });
    }));
  });
});
