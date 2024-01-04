import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WindowRef } from 'common/providers';
import { WebStorageConst } from 'constants/webstorage.constants';
import { emailKeys, MFATypes, phoneKeys } from 'MFA/constant';
import { MultiFactorAuthenticationService } from 'MFA/services/multi-factor-authentication.service';
import { PipesModule } from 'pipes/module';
import { MultiFactorAuthenticationComponent } from './multi-factor-authentication.component';

describe('MultiFactorAuthenticationComponent', () => {
  let component: MultiFactorAuthenticationComponent;
  let fixture: ComponentFixture<MultiFactorAuthenticationComponent>;
  let multiFactorAuthenticationService: jasmine.SpyObj<MultiFactorAuthenticationService>;
  let authService: jasmine.SpyObj<AuthenticationService>;
  let stateService: jasmine.SpyObj<StateService>;
  let webStorage: WebStorageConst;
  let windowRef: jasmine.SpyObj<Window>;
  let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;

  const info = {
    contactInfo: {
      phoneNumber: '9999999999',
      mobilePhoNbr: '9999999999',
      mobilePhoNbrExt: null,
      emailAddress: 'HCTRA-BOS-NOTIFICATIONS@ETCC.COM',
      altEmailAddress: null,
      workPhoExt: null,
      workPhoNbr: '9999999999',
      plus4: null,
      workPhonePlusExt: '9999999999'
    }
  };
  beforeEach(async () => {
    multiFactorAuthenticationService = jasmine.createSpyObj('MultiFactorAuthenticationService', ['getAccountInfo', 'sendCode']);
    stateService = jasmine.createSpyObj('stateService', ['go']);
    authService = jasmine.createSpyObj('authenticationService', ['isAuthenticated', 'logout']);
    multiFactorAuthenticationService.getAccountInfo.and.returnValue(Promise.resolve(info) as any);
    webStorage = new WebStorageConst();
    windowRef = jasmine.createSpyObj('window', ['localStorage']);
    stateService.go.and.resolveTo({} as any);
    uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', null, {
      params: {
        loginApiResponse: {
          passwordNeedsReset: false,
          emailIsMissing: false,
          securityQuestionIsMissing: false
        }
      }
    });

    await TestBed.configureTestingModule({
      declarations: [MultiFactorAuthenticationComponent],
      providers: [
        { provide: WindowRef, useFactory: () => windowRef },
        { provide: MultiFactorAuthenticationService, useFactory: () => multiFactorAuthenticationService },
        { provide: StateService, useFactory: () => stateService },
        { provide: AuthenticationService, useFactory: () => authService },
        { provide: WebStorageConst, useFactory: () => webStorage },
        { provide: Window, useFactory: () => windowRef },
        { provide: UIRouterGlobals, useValue: uiRouterGlobals },

      ],
      imports: [
        PipesModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFactorAuthenticationComponent);
    component = fixture.componentInstance;
    component.mfaPageContent = {
      ItemID: 'efabc02f-9d3f-476c-9506-0d2ebf8a1e51',
      LongDescription: `<p>Moving forward, HCTRA will include multi-factor authentication to provide customers with added security. 
      By selecting \'Verify\' below, a text message with a verification code will be sent to your phone number on file.</p>`,
      Title: 'Manage Your Account ',
      Receive_Verification_Text: 'How do you want to receive your verification code?',
      Text_Me_Text: 'Text Me',
      Text_Me_Desc_Text: ' Message & data rates may apply.',
      Automated_Call_Text: 'Automated call',
      Email_Me_Text: 'Email Me',
      Phone_Number_Rceive_Code: 'Select the Phone Number to receive the code',
      Email_Address_Receive_Code: 'Select the Email Address to receive the code',
      Try_Another_Verification_Option: 'Not seeing your phone number listed above? Try another verification option',
      Multi_Factor_Authentication_Title_Text: 'Multi-factor Authentication',
      Children: []
    };
    component.accountInfo = info.contactInfo as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should check getAccountInfo api is invoked', () => {
      spyOn(component, 'selectionChange');
      component.ngOnInit();

      expect(multiFactorAuthenticationService.getAccountInfo).toHaveBeenCalled();
    });
  });

  describe('selectionChange', () => {
    it('should check formSelectedItem to be called with phoneKeys', () => {
      spyOn(component, 'formSelectedItem');

      component.selectionChange(MFATypes.TEXT);

      expect(component.formSelectedItem).toHaveBeenCalledWith(phoneKeys, MFATypes.TEXT);
      expect(component.selectedInfo).toBe(0);
    });

    it('should check formSelectedItem to be called with phoneKeys', () => {
      spyOn(component, 'formSelectedItem');

      component.selectionChange(MFATypes.EMAIL);

      expect(component.formSelectedItem).toHaveBeenCalledWith(emailKeys, MFATypes.EMAIL);
      expect(component.selectedInfo).toBe(0);
    });
  });

  describe('formSelectedItem', () => {
    it('should check the selectedItems is formed', () => {
      component.accountInfo = info as any;

      component.formSelectedItem(phoneKeys, MFATypes.TEXT);

      expect(component.selectedItems.length).toEqual(3);
      expect(component.selectedItems[0]).toEqual({
        id: 0,
        label: 'phoneNumber',
        value: '9999999999',
        maskedInfo: '***-***-9999'
      });
    });
  });


  describe('receiveCodeChange', () => {
    it('should check the selected info is updated based on the selected object id', () => {
      component.receiveCodeChange({
        id: 3,
        label: 'phoneNumber',
        value: '9999999999',
        maskedInfo: '***-***-9999'
      });

      expect(component.selectedInfo).toEqual(3);
    });
  });


  describe('getEmailMaskedInfo', () => {
    it('should check the email passed is masked', () => {
      const maskedEmail = component.getEmailMaskedInfo('TEST-NOTIFICATIONS@ETCC.COM');

      expect(maskedEmail).toEqual('TES***************@ETCC.COM');
    });
  });

  describe('cancel', () => {
    it('should check cancel should invoke authservice.logout to have been called', () => {
      authService.logout.and.resolveTo();

      component.cancel();

      expect(authService.logout).toHaveBeenCalled();
    });
  });

  describe('verify', () => {
    it('should check send code method is invoked on click of verify', () => {
      multiFactorAuthenticationService.sendCode.and.returnValue(Promise.resolve(null));
      component.selectedItems = [{
        id: 0,
        label: 'phoneNumber',
        value: '9999999999',
        maskedInfo: '***-***-9999'
      }];
      component.selectedInfo = 0;

      component.verify();

      expect(multiFactorAuthenticationService.sendCode).toHaveBeenCalled();
    });
  });
});
