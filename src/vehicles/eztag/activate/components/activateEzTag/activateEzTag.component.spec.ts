import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivateFacadeApiService } from '../../services/activate-facade-api/activate-facade-api.service';
import { ActivateEzTagComponent } from './activateEzTag.component';
import { CurrentUserService, DialogService, ToasterService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { FormsModule, NgForm } from '@angular/forms';
import { SiteCoreItem } from 'cms/cms.module';
import { StateService } from '@uirouter/core';
import { stateNames as homeStates, StateNames } from 'home/constants';
import { InjectionValues } from 'common/ui';
import { of } from 'rxjs';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { TagVerifyOptions } from '../../activate.constants';
import { stateNames as rootStateNames } from 'constants/stateNames.constants';
import { WebStorageService } from '../../../../../common/services/webStorageService/webStorage.service';

describe('ActivateEzTagComponent', () => {
  let component: ActivateEzTagComponent;
  let fixture: ComponentFixture<ActivateEzTagComponent>;
  let activateFacadeApiService: jasmine.SpyObj<ActivateFacadeApiService>;
  let toasterService: jasmine.SpyObj<ToasterService>;
  let form: NgForm;
  let stateService: StateService;
  let authenticationService: jasmine.SpyObj<AuthenticationService>;
  let currentUserService: jasmine.SpyObj<CurrentUserService>;
  let webStorage: jasmine.SpyObj<InjectionValues>;
  let dialogService: DialogService;

  beforeEach(async () => {
    currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
    currentUserService.getCurrentUser.and.returnValue({} as any);
    toasterService = jasmine.createSpyObj('toasterService', ['show']);
    stateService = jasmine.createSpyObj('stateService', ['go']);
    activateFacadeApiService = jasmine.createSpyObj('activateFacadeApiService', ['findTagsToActivate']);
    authenticationService = jasmine.createSpyObj('authenticationService', ['isAuthenticated', 'isAuthenticated$']);
    webStorage = jasmine.createSpyObj('webStorage', ['setValue', 'removeEntry']);
    dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal', 'openSliderFilled']);

    form = {} as NgForm;

    await TestBed.configureTestingModule({
      declarations: [ActivateEzTagComponent],
      imports: [
        PipesModule,
        FormsModule,
      ],
      providers: [
        { provide: ActivateFacadeApiService, useFactory: () => activateFacadeApiService },
        { provide: NgForm, useFactory: () => form },
        { provide: StateService, useFactory: () => stateService },
        { provide: AuthenticationService, useFactory: () => authenticationService },
          { provide: CurrentUserService, useFactory: () => currentUserService },
          { provide: WebStorageService, useFactory: () => webStorage },
        { provide: StateNames, useFactory: () => homeStates },
        { provide: DialogService, useFactory: () => dialogService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
      (authenticationService as any).isAuthenticated$ = of(true);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateEzTagComponent);
    component = fixture.componentInstance;
    component.activateEzTag = {
      Title: 'modal title',
      ShortDescription: 'fake Short Description',
      LongDescription: 'fake Long Description',
      Children: [],
    } as SiteCoreItem;

    component.mountEZTag = {
      Title: 'modal title',
      ShortDescription: 'fake Short Description',
      LongDescription: 'fake Long Description',
      Children: [],
    } as SiteCoreItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onCancel', () => {

    it('should call stateService.go with homeStates.Frame', () => {
      component.onCancel(false);

      expect(stateService.go).toHaveBeenCalledTimes(1);
      expect(stateService.go).toHaveBeenCalledWith(homeStates.Frame);
    });

    it('should call stateService.go with rootStateNames.manageVehicles', () => {
      component.onCancel(true);

      expect(stateService.go).toHaveBeenCalledTimes(1);
      expect(stateService.go).toHaveBeenCalledWith(rootStateNames.manageVehicles);
    });
  });

  describe('nextState', () => {
    it('should call findTagsToActivate with payload along with phoneNumber key, if VerifyOption is phone', () => {
      component.currentUser= {acctId: 1} as any;
      component.tagRequestActivationNumber ='5678';
      component.isAuthenticated = true;
      component.phoneNumber = '7890';
      const payload = {
        accountId: 1,
        transactionId: '5678',
        phoneNumber: '7890'
      };
      component.VerifyOption = TagVerifyOptions.Phone;
      (activateFacadeApiService.findTagsToActivate as jasmine.Spy).and.returnValue(Promise.resolve({}));

      component.nextState({});

      expect(activateFacadeApiService.findTagsToActivate).toHaveBeenCalledWith(payload);
    });

    it('should call findTagsToActivate with payload along with email key, if VerifyOption is email', () => {
      component.tagRequestActivationNumber ='5678';
      component.isAuthenticated = false;
      component.emailAddress = 'test@gmail.com';
      const payload = {
        accountId: null,
        transactionId: '5678',
        emailAddress: 'test@gmail.com'
      };
      component.VerifyOption = TagVerifyOptions.Email;
      (activateFacadeApiService.findTagsToActivate as jasmine.Spy).and.returnValue(Promise.resolve({}));

      component.nextState({});

      expect(activateFacadeApiService.findTagsToActivate).toHaveBeenCalledWith(payload);
    });
  });

  describe('numberOnly', ()=> {
    it('should return true, if the keycode doesnt match', () => {
      const event = {
        which: 18
      };
     const isNumber = component.numberOnly(event);

     expect(isNumber).toBeTruthy();
    });

    it('should return false, if keyCode match', () => {
      const event = {
        keyCode: 33
      };
     const isNumber = component.numberOnly(event);

     expect(isNumber).toBeFalsy();
    });
  });

      
  describe('mountEZTag', () => {
    it('should check openSliderFilled is invoked mountEZTag', () => {
        component.mountEzTag();

        expect(dialogService.openSliderFilled).toHaveBeenCalled();
    });
});
});
