import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';
import { WebStorageConst } from '../../../constants/module';
import { WebStorageService } from '../webStorageService/webStorage.service';

describe('SessionService', () => {
  let service: SessionService;
  let webStorage: jasmine.SpyObj<WebStorageService>;
  let webStorageConst: jasmine.SpyObj<WebStorageConst>;

  beforeEach(() => {
    webStorage = jasmine.createSpyObj('webStorage', ['removeEntry']);
    webStorageConst = jasmine.createSpyObj('WebStorageConst', null, { sessionAccountActivity: 'acctActivity', sessionCurrentStep: 'currentStep' });
    webStorage.removeEntry.and.callFake(entry => { });

    TestBed.configureTestingModule({
      providers: [
        SessionService,
        { provide: WebStorageService, useFactory: () => webStorage },
        { provide: WebStorageConst, useFactory: () => webStorageConst }
      ]
    });
    service = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('default', () => {
    it('should set acctId and userRole', () => {
      service.default();
      expect(service.acctId).toBeDefined();
      expect(service.userRole).toBeDefined();
    });
  });

  describe('create', () => {
    it('should call sessionStorage.setItem', () => {
      spyOn(sessionStorage, 'getItem').and.returnValue('P');

      service.create(1234, 'test', 0, false);

      expect(service.userRole).toEqual('incomplete');
      expect(service.currentStep).toEqual(0);
    });

    it('should set userRole to "missingRequiredInformation"', () => {
      spyOn(sessionStorage, 'getItem').and.returnValue('A');

      service.create(1234, 'test', 0, true, 'test');

      expect(service.userRole).toEqual('missingRequiredInformation');
    });
  });

  describe('setAcctActivity', () => {
    it('should set userRole to "pendingClosure"', () => {
      spyOn(sessionStorage, 'setItem').and.callFake(() => { });
      spyOn(sessionStorage, 'getItem').and.returnValue('I');

      service.setAcctActivity('test');

      expect(service.userRole).toEqual('pendingClosure');
    });
  });

  describe('setCurrentStep', () => {
    it('should set currentStep to 1', () => {
      spyOn(sessionStorage, 'setItem').and.callFake(() => { });
      spyOn(sessionStorage, 'getItem').and.returnValue('1');

      service.setCurrentStep('1');

      expect(service.currentStep).toEqual(1);
    });
  });

  describe('destroy', () => {
    it('should set acctId to 0, call removeEntry, set userRole to "notAuthenticated"', () => {
      service.destroy();

      expect(service.acctId).toEqual(0);
      expect(webStorage.removeEntry).toHaveBeenCalledWith('acctActivity');
      expect(webStorage.removeEntry).toHaveBeenCalledWith('currentStep');
      expect(service.userRole).toEqual('notAuthenticated');
    });
  });

  describe('getAcctActivity', () => {
    it('should return "S"', () => {
      spyOn(sessionStorage, 'getItem').and.returnValue('S');

      expect(service.getAcctActivity()).toEqual('S');
    });
  });

  describe('getCurrentStep', () => {
    it('should return "2"', () => {
      spyOn(sessionStorage, 'getItem').and.returnValue('2');

      expect(service.getCurrentStep()).toEqual('2');
    });
  });

  describe('removeCurrentStep', () => {
    it('should call webStorage.removeEntry with currentStep', () => {
      service.removeCurrentStep();

      expect(webStorage.removeEntry).toHaveBeenCalledWith('currentStep');
    });
  });

  describe('stepToStateName', () => {
    it('should return NewAccount.CreateAccount', () => {
      expect(service.stepToStateName(1)).toEqual('NewAccount.CreateAccount');
    });

    it('should return NewAccount.AddEZTAG.VehicleInformation', () => {
      expect(service.stepToStateName(3)).toEqual('NewAccount.AddEZTAG.VehicleInformation');
    });

    it('should return NewAccount.PaymentMaster.ChooseMethod', () => {
      expect(service.stepToStateName(4)).toEqual('NewAccount.PaymentMaster.ChooseMethod');
    });

    it('should return NewAccount.CreateAccountSummary', () => {
      expect(service.stepToStateName(5)).toEqual('NewAccount.CreateAccountSummary');
    });
  });

  describe('mapAcctActivityToUserRole', () => {
    it('should return "active"', () => {
      expect(service.mapAcctActivityToUserRole('A', 'PF')).toEqual('pendingFunds');
    });

    it('should return "suspended"', () => {
      expect(service.mapAcctActivityToUserRole('S')).toEqual('suspended');
    });
  });
});
